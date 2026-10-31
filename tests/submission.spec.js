import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import {render} from './fixture.mjs';

for (const viewport of [{width: 390, height: 844}, {width: 1440, height: 1000}, {width: 2560, height: 1600}]) {
    test(`image labels and captions keep a readable rhythm at ${viewport.width}px`, async ({page}) => {
        await page.setViewportSize(viewport);
        await page.goto('/demo/article/image-rhythm/');
        await page.locator('.gh-content img').evaluateAll(images => Promise.all(images.map(image => image.decode())));
        const layout = await page.evaluate(() => {
            const el = name => document.querySelector(`[data-testid="${name}"]`);
            const rect = name => el(name).getBoundingClientRect();
            const first = rect('captioned-image');
            const caption = el('captioned-image').querySelector('figcaption');
            const image = el('captioned-image').querySelector('img').getBoundingClientRect();
            const full = rect('full-image');
            const fullCaption = el('full-image').querySelector('figcaption').getBoundingClientRect();
            return {
                before: first.top - rect('image-label').bottom,
                after: rect('next-image-label').top - first.bottom,
                consecutive: full.top - rect('uncaptioned-image').bottom,
                captionGap: caption.getBoundingClientRect().top + parseFloat(getComputedStyle(caption).paddingTop) - image.bottom,
                captionSize: parseFloat(getComputedStyle(caption).fontSize),
                featureCaptionSize: parseFloat(getComputedStyle(document.querySelector('.gh-feature-image figcaption')).fontSize),
                captionAlignment: getComputedStyle(caption).textAlign,
                captionLeft: fullCaption.left, captionRight: fullCaption.right,
                figureLeft: full.left, figureRight: full.right,
                sectionGap: rect('next-section').top - el('next-section').previousElementSibling.getBoundingClientRect().bottom,
                subsectionGap: rect('section-detail').top - rect('next-section').bottom,
                overflow: document.documentElement.scrollWidth > innerWidth
            };
        });
        expect(layout.before).toBeGreaterThanOrEqual(12);
        expect(layout.before).toBeLessThanOrEqual(24);
        for (const gap of [layout.after, layout.consecutive]) {
            expect(gap).toBeGreaterThanOrEqual(20);
            expect(gap).toBeLessThanOrEqual(32);
        }
        expect(layout.captionGap).toBeGreaterThanOrEqual(8);
        expect(layout.captionGap).toBeLessThanOrEqual(12);
        expect(layout.captionSize).toBeGreaterThanOrEqual(16);
        expect(layout.featureCaptionSize).toBeGreaterThanOrEqual(16);
        expect(layout.captionAlignment).toBe('left');
        expect(layout.captionLeft).toBeGreaterThanOrEqual(layout.figureLeft - 1);
        expect(layout.captionRight).toBeLessThanOrEqual(layout.figureRight + 1);
        expect(layout.sectionGap).toBeGreaterThan(layout.after);
        expect(layout.subsectionGap).toBeLessThan(layout.sectionGap);
        expect(layout.overflow).toBe(false);
        if (viewport.width === 2560) expect((await new AxeBuilder({page}).analyze()).violations).toEqual([]);
    });
}

for (const width of [390, 768, 900, 1024, 1440]) {
    test(`article fits a ${width}px viewport`, async ({page}) => {
        await page.setViewportSize({width, height: 1000});
        await page.goto('/demo/article/');
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    });
}

for (const path of ['/demo/', '/demo/article/', '/demo/signin/', '/demo/signup/']) {
    test(`accessible headings, landmarks, and default colors on ${path}`, async ({page}) => {
        await page.setViewportSize({width: 1440, height: 1000});
        await page.goto(path);
        const results = await new AxeBuilder({page}).analyze();
        expect(results.violations).toEqual([]);
    });
}

test('ToC follows scrolling in both directions and keyboard navigation', async ({page}) => {
    await page.setViewportSize({width: 1440, height: 900});
    // Space between headings catches stale highlights when a heading has left the viewport.
    const longHtml = render('/demo/article/', {demo: true}).replaceAll('<h2 id=', `${'<p>A paragraph of sample article content for scroll tracking.</p>'.repeat(12)}<h2 id=`);
    await page.route('**/demo/article/', route => route.fulfill({contentType: 'text/html', body: longHtml}));
    await page.emulateMedia({reducedMotion: 'reduce'});
    await page.goto('/demo/article/');
    const current = page.locator('.gh-toc-list [aria-current="location"]');
    await page.locator('#notice-what-stays').evaluate(heading => window.scrollTo(0, heading.getBoundingClientRect().top + scrollY - 85));
    await expect(current).toHaveText('Notice what stays');
    await page.locator('#leave-some-space').evaluate(heading => window.scrollTo(0, heading.getBoundingClientRect().top + scrollY - 85));
    await expect(current).toHaveText('Leave some space');
    const link = page.getByRole('link', {name: 'A small practice', exact: true});
    await link.focus();
    await page.keyboard.press('Enter');
    await expect(current).toHaveText('A small practice');
    await expect(page.locator('#a-small-practice')).toBeFocused();
    expect(await page.locator('.gh-toc').evaluate(el => el.getBoundingClientRect().top)).toBeCloseTo(80, 0);
});

test('article image zoom works with Enter and Escape', async ({page}) => {
    await page.goto('/demo/article/');
    const image = page.getByRole('button', {name: /^Zoom image:/}).first();
    await image.focus();
    await page.keyboard.press('Enter');
    await expect(image).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(image).toHaveAttribute('aria-expanded', 'false');
    await expect(image).toBeFocused();
});

for (const path of ['/demo/empty/', '/demo/article/no-headings/', '/demo/article/no-image/', '/demo/article/long-title/', '/demo/article/editor-cards/']) {
    test(`content fallback fits mobile and tablet: ${path}`, async ({page}) => {
        for (const width of [390, 768]) {
            await page.setViewportSize({width, height: 900});
            await page.goto(path);
            expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        }
        if (path.includes('no-headings')) await expect(page.locator('.gh-toc')).toBeHidden();
        if (path.includes('/empty/')) await expect(page.getByText('No posts', {exact: true})).toBeVisible();
    });
}

test('wide and full editor cards expand without covering the outline', async ({page}) => {
    await page.setViewportSize({width: 1440, height: 1000});
    await page.goto('/demo/article/editor-cards/');
    const dimensions = await page.evaluate(() => {
        const rect = selector => document.querySelector(selector).getBoundingClientRect();
        const text = rect('.gh-content > p');
        const wide = rect('.gh-content > .kg-card.kg-width-wide');
        const full = rect('.gh-content > .kg-card.kg-width-full');
        const outline = rect('.gh-toc');
        return {text: text.width, wide: wide.width, full: full.width, left: full.left, outlineRight: outline.right, right: full.right};
    });
    expect(dimensions.wide).toBeGreaterThan(dimensions.text);
    expect(dimensions.full).toBeGreaterThanOrEqual(dimensions.wide);
    expect(dimensions.left).toBeGreaterThanOrEqual(dimensions.outlineRight - 1);
    expect(dimensions.right).toBeLessThanOrEqual(1440);
});

test('legacy membership status messages remain readable on the dark theme', async ({page}) => {
    await page.goto('/demo/signin/');
    for (const state of ['success', 'error']) {
        await page.locator('form').evaluate((form, state) => {form.classList.remove('success', 'error'); form.classList.add(state);}, state);
        const results = await new AxeBuilder({page}).analyze();
        expect(results.violations).toEqual([]);
    }
});
