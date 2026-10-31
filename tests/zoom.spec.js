import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const shape of ['portrait', 'landscape', 'square']) {
    for (const viewport of [{width: 1440, height: 1000}, {width: 390, height: 844}]) {
        test(`cropped ${shape} zoom keeps source proportions and centers at ${viewport.width}px`, async ({page}) => {
            await page.setViewportSize(viewport);
            await page.goto(`/demo/article/cropped-zoom/${shape}/`);
            const thumbnail = page.getByTestId('cropped-image');
            const before = await thumbnail.boundingBox();
            await thumbnail.click();
            const dialog = page.getByRole('dialog');
            const opened = dialog.getByRole('img');
            await expect(opened).toBeVisible();
            const dimensions = async () => opened.evaluate(image => {
                const r = image.getBoundingClientRect();
                return {x: r.x, y: r.y, width: r.width, height: r.height, ratio: image.naturalWidth / image.naturalHeight};
            });
            const bounds = await dimensions();
            expect(Math.abs(bounds.width / bounds.height - bounds.ratio)).toBeLessThan(0.01);
            expect(bounds.x).toBeGreaterThanOrEqual(23);
            expect(bounds.y).toBeGreaterThanOrEqual(23);
            expect(bounds.x + bounds.width).toBeLessThanOrEqual(viewport.width - 23);
            expect(bounds.y + bounds.height).toBeLessThanOrEqual(viewport.height - 23);
            expect(bounds.x + bounds.width / 2).toBeCloseTo(viewport.width / 2, 0);
            expect(bounds.y + bounds.height / 2).toBeCloseTo(viewport.height / 2, 0);
            await expect(dialog.getByRole('button', {name: 'Close image'})).toBeFocused();
            await page.keyboard.press('Escape');
            await expect(dialog).not.toBeVisible();
            await expect(thumbnail).toHaveAttribute('aria-expanded', 'false');
            await expect(page.locator('html')).not.toHaveClass(/gh-image-viewer-open/);
            await expect(thumbnail).toBeFocused();
            const after = await thumbnail.boundingBox();
            expect(after.width).toBeCloseTo(before.width, 0);
            expect(after.height).toBeCloseTo(before.height, 0);
        });
    }
}

test('viewer closes immediately during loading and reports an image load failure', async ({page}) => {
    await page.goto('/demo/article/cropped-zoom/');
    await page.route('**/unavailable-image.png', route => route.abort());
    const thumbnail = page.getByTestId('cropped-image');
    await thumbnail.evaluate(image => {image.dataset.zoomSrc = '/unavailable-image.png';});
    await thumbnail.focus();
    await page.keyboard.press('Enter');
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('status')).toHaveText('The image could not be loaded.');
    await dialog.getByRole('button', {name: 'Close image'}).click();
    await expect(thumbnail).toBeFocused();
    let release;
    const pending = new Promise(resolve => {release = resolve;});
    await page.route('**/pending-image.png', async route => {await pending; await route.abort();});
    await thumbnail.evaluate(image => {image.dataset.zoomSrc = '/pending-image.png';});
    await page.keyboard.press('Space');
    await expect(dialog.getByRole('status')).toHaveText('Loading image…');
    await page.keyboard.press('Escape');
    release();
    await expect(dialog).not.toBeVisible();
    await expect(thumbnail).toHaveAttribute('aria-expanded', 'false');
});

test('viewer supports rapid reopen, resize and background dismissal', async ({page}) => {
    await page.setViewportSize({width: 1440, height: 1000});
    await page.goto('/demo/article/cropped-zoom/');
    await page.getByTestId('cropped-image').click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('img')).toBeVisible();
    await page.getByTestId('cropped-image').evaluate(image => {
        document.querySelector('.gh-image-viewer-close').click();
        image.click();
    });
    await expect(dialog.getByRole('img')).toBeVisible();
    await expect(page.getByTestId('cropped-image')).toHaveAttribute('aria-expanded', 'true');
    await page.setViewportSize({width: 390, height: 844});
    const bounds = await dialog.getByRole('img').evaluate(image => image.getBoundingClientRect().toJSON());
    expect(bounds.width / bounds.height).toBeCloseTo(0.4, 2);
    expect(bounds.x + bounds.width / 2).toBeCloseTo(195, 0);
    expect(bounds.y + bounds.height / 2).toBeCloseTo(422, 0);
    await dialog.click({position: {x: 8, y: 8}});
    await expect(dialog).not.toBeVisible();
    await expect(page.getByTestId('cropped-image')).toBeFocused();
});

for (const width of [390, 768, 1440]) {
    test(`Projects template preserves native cards and uncropped zoom at ${width}px`, async ({page}) => {
        await page.setViewportSize({width, height: 1000});
        await page.goto('/demo/projects/');
        await expect(page.getByRole('heading', {name: 'Projects', exact: true})).toBeVisible();
        await expect(page.locator('.gh-portfolio')).toBeVisible();
        await expect(page.locator('.kg-header-card-image').nth(1)).toHaveAttribute('data-portfolio-fit', 'contain');
        const layout = await page.locator('.kg-header-card-content').first().evaluate(element => ({
            columns: getComputedStyle(element).gridTemplateColumns.split(' ').length,
            overflow: document.documentElement.scrollWidth > innerWidth,
            descriptionBelowTitle: element.querySelector('p').getBoundingClientRect().top >= element.querySelector('h2').getBoundingClientRect().bottom,
            buttonBelowDescription: element.querySelector('.kg-header-card-button').getBoundingClientRect().top >= element.querySelector('p').getBoundingClientRect().bottom
        }));
        expect(layout.columns).toBe(width > 860 ? 2 : 1);
        expect(layout.overflow).toBe(false);
        expect(layout.descriptionBelowTitle).toBe(true);
        expect(layout.buttonBelowDescription).toBe(true);
        await page.getByRole('button', {name: 'Zoom image: Vertical field notes', exact: true}).click();
        const dialog = page.getByRole('dialog');
        await expect(dialog.getByRole('img')).toBeVisible();
        const ratio = await dialog.getByRole('img').evaluate(image => image.getBoundingClientRect().width / image.getBoundingClientRect().height);
        expect(ratio).toBeCloseTo(0.4, 2);
        expect((await new AxeBuilder({page}).analyze()).violations).toEqual([]);
        await dialog.getByRole('button', {name: 'Close image'}).click();
        await expect(dialog).not.toBeVisible();
    });
}
