import {test, expect} from '@playwright/test';
import {render} from './fixture.mjs';

test('featured card keeps title, tag and read-more links inside its content', async ({page}) => {
    await page.route('**/page/2/', route => route.fulfill({status: 503, body: 'Unavailable'}));
    await page.goto('/');
    const card = page.locator('.gh-card--featured .gh-card-content');
    await expect(card.locator('.gh-card-title a')).toHaveAttribute('href', '/post-1/');
    await expect(card.locator('.gh-card-tag')).toHaveAttribute('href', '/tag/technologia/');
    await expect(card.locator('.gh-card-readmore')).toHaveAttribute('href', '/post-1/');
    await expect(page.locator('.gh-postfeed .gh-card')).toHaveCount(3);
});

test('mobile menu supports keyboard activation and Escape', async ({page}) => {
    await page.setViewportSize({width: 390, height: 844});
    await page.goto('/');
    const button = page.getByRole('button', {name: 'Menu'});
    await button.focus();
    await page.keyboard.press('Enter');
    await expect(button).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('.gh-head-menu')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(button).toHaveAttribute('aria-expanded', 'false');
    await expect(button).toBeFocused();
});

test('automatic pagination makes one request and appends only feed cards', async ({page}) => {
    let requests = 0;
    await page.route('**/page/2/', async route => {
        // Firefox also prefetches rel=next; count the script's fetch calls.
        if (route.request().resourceType() === 'fetch') requests++;
        await new Promise(resolve => setTimeout(resolve, 150));
        await route.fulfill({contentType: 'text/html', body: render('/page/2/')});
    });
    await page.goto('/');
    await page.locator('.gh-postfeed > .gh-card').last().scrollIntoViewIfNeeded();
    await expect(page.locator('.gh-postfeed .gh-card')).toHaveCount(4);
    expect(requests).toBe(1);
    await expect(page.locator('.gh-card--featured')).toHaveCount(1);
    await expect(page.locator('.gh-pagination a')).toHaveCount(0);
});

test('failed automatic loading preserves manual pagination', async ({page}) => {
    await page.route('**/page/2/', route => route.fulfill({status: 503, body: 'Unavailable'}));
    await page.goto('/');
    await page.locator('.gh-postfeed > .gh-card').last().scrollIntoViewIfNeeded();
    await expect(page.locator('.gh-pagination a')).toHaveAttribute('href', '/page/2/');
    await expect(page.locator('.gh-postfeed .gh-card')).toHaveCount(3);
});

test('post content initializes once, including Polish heading links and tables', async ({page}) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('/article/');
    await expect(page.locator('.table-wrapper')).toHaveCount(1);
    await expect(page.locator('.gh-toc-list a').first()).toHaveAttribute('href', '#%C5%BC%C3%B3%C5%82%C4%87');
    await expect(page.locator('code .token').first()).toBeVisible();
    expect(errors).toEqual([]);
});

for (const width of [390, 1440]) {
    test(`layout fits ${width}px viewport`, async ({page}) => {
        await page.setViewportSize({width, height: 1000});
        await page.goto('/');
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        await page.screenshot({path: `test-results/home-${width}.png`, fullPage: true});
    });
}

test('pagination links work without JavaScript', async ({browser}) => {
    const context = await browser.newContext({javaScriptEnabled: false});
    const page = await context.newPage();
    await page.goto('http://127.0.0.1:4173/');
    await page.getByRole('link', {name: 'Older Posts'}).click();
    await expect(page).toHaveURL(/\/page\/2\//);
    await expect(page.locator('.gh-postfeed .gh-card-title')).toHaveText('Starszy wpis');
    await context.close();
});
