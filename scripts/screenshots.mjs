import assert from 'node:assert/strict';
import {chromium} from '@playwright/test';
import {createFixtureServer} from '../tests/server.mjs';

// Render actual theme templates with fictional content, rather than painting a mock UI.
const server = createFixtureServer();
await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
});
let browser;
try {
    browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
        ? {executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH} : {});
    const page = await browser.newPage({deviceScaleFactor: 1});
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const base = `http://127.0.0.1:${server.address().port}`;
    async function open(path, width, height) {
        await page.setViewportSize({width, height});
        await page.goto(base + path, {waitUntil: 'networkidle'});
        await page.evaluate(async () => {
            await document.fonts.ready;
            // The closed viewer has an empty image slot, not a resource to decode.
            await Promise.all([...document.images].filter(image => image.currentSrc || image.getAttribute('src')).map(image => image.decode()));
        });
        assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'Preview overflows the viewport');
        assert.equal(await page.locator('.gh-head-logo').textContent().then(value => value.trim()), 'Nightfall Journal');
    }
    await open('/demo/', 1440, 1100);
    await page.screenshot({path: 'docs/screenshots/home-desktop.png', fullPage: true});
    await page.screenshot({path: 'assets/screenshot-desktop.jpg', fullPage: true, type: 'jpeg', quality: 88});
    await open('/demo/', 390, 844);
    await page.screenshot({path: 'docs/screenshots/home-mobile.png', fullPage: true});
    await page.screenshot({path: 'assets/screenshot-mobile.jpg', fullPage: true, type: 'jpeg', quality: 88});
    await open('/demo/article/', 1440, 1150);
    assert.equal(await page.locator('.gh-toc-list a').count(), 4);
    await page.screenshot({path: 'docs/screenshots/post-desktop.png'});
    await open('/demo/projects/', 1440, 1100);
    await page.screenshot({path: 'docs/screenshots/projects-desktop.png', fullPage: true});
    await open('/demo/projects/', 390, 844);
    await page.screenshot({path: 'docs/screenshots/projects-mobile.png', fullPage: true});
    assert.deepEqual(errors, [], 'Preview JavaScript errors');
    console.log('Captured fictional Nightfall Journal: desktop, mobile, and article previews.');
} finally {
    await browser?.close();
    await new Promise(resolve => server.close(resolve));
}
