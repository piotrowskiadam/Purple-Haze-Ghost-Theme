import {test, expect} from '@playwright/test';

for (const width of [320, 1440]) {
    test(`posts and all page templates link their tags without overflow at ${width}px`, async ({page}) => {
        await page.setViewportSize({width, height: 900});
        for (const template of ['article', 'about', 'about/custom', 'projects']) {
            await page.goto(`/${template}/long-tags/`);
            const tags = page.locator('.gh-article .gh-footer .gh-post-tags');
            await expect(tags.locator('a')).toHaveCount(3);
            await expect(tags.getByRole('link', {name: 'Technologia', exact: true})).toHaveAttribute('href', '/tag/technologia/');
            expect(await tags.evaluate(element => {
                const content = document.querySelector('.gh-article .gh-content').getBoundingClientRect();
                return [...element.querySelectorAll('a')].every(link => {
                    const rect = link.getBoundingClientRect();
                    return rect.left >= content.left - 1 && rect.right <= content.right + 1 && link.scrollWidth <= link.clientWidth;
                }) && document.documentElement.scrollWidth <= innerWidth;
            })).toBe(true);
            await tags.getByRole('link', {name: 'Technologia', exact: true}).click();
            await expect(page).toHaveURL(/\/tag\/technologia\/$/);
        }
    });
}

test('untagged pages omit the tag cloud and its footer', async ({page}) => {
    for (const template of ['about', 'about/custom', 'projects']) {
        await page.goto(`/${template}/no-tags/`);
        await expect(page.locator('.gh-page-footer')).toHaveCount(0);
        await expect(page.locator('.gh-post-tags')).toHaveCount(0);
    }
});
