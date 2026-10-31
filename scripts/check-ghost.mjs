import assert from 'node:assert/strict';
import {chromium, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Run explicitly against a prepared staging publication; no forms are submitted.
assert(process.env.GHOST_TEST_URL, 'Set GHOST_TEST_URL to a staging Ghost publication');
const base = new URL(process.env.GHOST_TEST_URL);
const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
    ? {executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH} : {});
const context = await browser.newContext();
const page = await context.newPage();
const checked = [];
try {
    await page.goto(base.href, {waitUntil: 'networkidle'});
    const article = await page.locator('.gh-card-title a').first().getAttribute('href');
    const tag = await page.locator('.gh-card-tag').first().getAttribute('href');
    const next = await page.locator('link[rel="next"]').getAttribute('href');
    await page.goto(new URL(article, base).href, {waitUntil: 'networkidle'});
    const articleTitle = await page.locator('h1').innerText();
    const author = await page.locator('.gh-post-authors a').first().getAttribute('href');
    for (const path of [base.href, next, article, tag, author, '/about/']) {
        const url = new URL(path, base);
        assert.equal(url.origin, base.origin, 'Staging links must stay on the test publication');
        const response = await page.goto(url.href, {waitUntil: 'networkidle'});
        assert.equal(response.status(), 200, url.pathname);
        await expect(page.locator('h1').first()).toBeAttached();
        for (const width of [390, 768, 1440]) {
            await page.setViewportSize({width, height: 1000});
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${url.pathname} overflows ${width}px`);
        }
        if (url.href === base.href || url.href === new URL(article, base).href) {
            const result = await new AxeBuilder({page}).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
            assert.deepEqual(result.violations, [], `Accessibility violations on ${url.pathname}`);
        }
        checked.push(url.pathname);
    }
    await page.goto(base.href, {waitUntil: 'networkidle'});
    await page.locator('[data-ghost-search]').click();
    const search = page.frameLocator('iframe[title="Search posts, tags and authors"]');
    await search.getByPlaceholder('Search posts, tags and authors').fill(articleTitle);
    await expect(search.getByText(articleTitle, {exact: true}).first()).toBeVisible();

    await page.goto(new URL(article, base).href, {waitUntil: 'networkidle'});
    const comments = page.locator('.gh-post-comments');
    await comments.scrollIntoViewIfNeeded();
    await expect(comments.locator('iframe')).toBeVisible();

    await page.goto(base.href, {waitUntil: 'networkidle'});
    await page.getByRole('link', {name: 'Subscribe', exact: true}).first().click();
    await expect(page.frameLocator('iframe[title="portal-popup"]').locator('input[type="email"]')).toBeVisible();
    console.log(JSON.stringify({pages: checked, searchResults: true, comments: true, portalSignup: true}));
} finally {
    await browser.close();
}
