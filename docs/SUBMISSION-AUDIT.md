# Ghost submission audit — updated for 1.5.2

The confirmed layout, heading, landmark, keyboard, and demo-framing defects from the original review have been corrected. Automated checks now cover substantially more of the checklist. Marketplace acceptance remains a curated decision; the remaining manual verification is listed below.

Source: [Ghost’s submission requirements](https://ghost.org/themes/submit/), reviewed on 31 October 2026.

## Verified repairs

- Article image labels, captions, and following text use bounded/rem-based spacing, including 2560px displays. Captions are 16px and left aligned; long source links wrap within the figure.

- Article columns now fit 390, 768, 900, 1024, and 1440px viewports. Long unbroken titles and wide tables stay within the viewport. Wide/full editor cards can use the space to the right while leaving the outline clear.
- The homepage has a publication H1. Spotlight cards use H2, feed cards H3, and archive cards H2. Navigation landmarks have distinct accessible names.
- The ToC exposes `aria-current="location"`, follows scrolling in both directions, supports keyboard jumps with heading focus, and preserves URL fragments. It is hidden without JavaScript or headings. The sidebar appears from 1280px, where there is room for its labels beside the article.
- Image zoom supports Enter/Space and Escape, including Escape during opening, and returns keyboard focus to the source image.
- Legacy membership forms have readable dark-theme text/status colors, valid boolean attributes, and announced status/error messages.
- The live demo now allows `https://ghost.org` and `https://*.ghost.org` in its CSP. HSTS and `nosniff` were retained. An actual browser test with a Ghost-origin parent iframe passed. See [DEMO-HOSTING.md](DEMO-HOSTING.md).

## Validation evidence

The browser suite has 29 scenarios per engine, covering Chromium, Firefox, and WebKit in CI on Node 22 and 24. Local Chromium/Firefox checks cover responsive articles, axe accessibility checks for home/article/legacy auth pages, ToC scrolling and focus, image zoom, pagination and failure recovery, no-JavaScript pagination, missing content, long text, editor cards, and membership status messages. Eleven rendered template scenarios have HTML/landmark validation. Six release-safeguard tests protect publication. Source and ZIP pass GScan 5/6; Ghost 6 still reports the two retained social-helper deprecations for Ghost 5 compatibility.

An isolated **Ghost 6.72.0** instance used a separate empty SQLite database, private loopback port, fictional owner/content, and blocked outgoing mail. Sixteen public sample posts plus a members-only test post exercised native templates. No production blog database was copied or modified. Verified:

- Homepage, second archive page, article, tag archive, author archive, and static page returned HTTP 200 with an H1 and fitted mobile/tablet/desktop widths.
- Default-color homepage/article scans reported no axe WCAG A/AA violations.
- Native search opened and returned the sample article.
- Portal opened its signup email form; no form was submitted.
- The comments iframe loaded on the article; no comment was posted.
- A guest could not see a members-only article’s body and saw Ghost’s subscription/signin prompt instead.

`npm run test:ghost` repeats the read-only integration checks against a prepared staging site with a featured article, tag/author archives, more than one page of posts, an `/about/` page, comments enabled, and Portal available:

```bash
GHOST_TEST_URL=http://127.0.0.1:2369 npm run test:ghost
```

## Checklist status

| Ghost requirement | Status after repairs |
| --- | --- |
| GScan compatibility | Pass with two documented deprecation warnings; no errors. |
| Responsive/mobile layout | Confirmed tablet overflow corrected; three browser engines in CI. Latest-two-version branded browser coverage still needs manual confirmation. |
| Asset helper | Bundled CSS/JS use `asset`; publication images use Ghost content URLs. |
| Published with Ghost link | Present in default and error footers. |
| HTTPS demo and Ghost iframe access | HTTPS and actual Ghost-origin embedding passed. Use the exact submitted release on the public demo. |
| Follow Ghost documentation | Core template conventions, native service integration, and GScan checked; legacy social helper migration remains a compatibility decision. |
| Code comments | Behavior documented in templates, scripts, and contributor notes. |
| Sane structure and partials | Conventional templates, shared layout/card/icons, source/build separation. |
| README and support | Installation, upgrades, configuration, features, testing, release process, and GitHub support documented. |
| package.json | Valid metadata, image sizes, settings, screenshots, and synchronized versions. |
| Structured HTML and SEO | Homepage/card heading hierarchy corrected; `ghost_head` retained. |
| Linked navigation | Native home/post/archive/page routes and pagination exercised in real Ghost. |
| No SEO tricks | None found in the reviewed templates/scripts. |
| Image alt attributes | Template images have alt/name/title fallbacks. Editor content remains the publisher’s responsibility. |
| Valid HTML | Eleven rendered scenarios checked, including archives, static pages, empty content, editor cards, and legacy auth forms. |
| Keyboard navigation | Menu, article outline, image zoom, and focus return covered. Third-party Portal/search open successfully; complete assistive-technology testing remains manual. |
| Color contrast | Sample default-color pages and legacy status states pass axe. Custom colors, arbitrary images, and every third-party service state cannot be certified from those samples. |
| Editor content styling | Wide/full image, embed, table, code, and caption cases covered. Test the complete Ghost editor-card set before submission. |
| Tag and author archives | Native Ghost routes and heading/pagination structure checked. |
| Featured styling | Distinct spotlight with independent links and missing-image fallback. |
| Empty/missing content | Empty feed, missing image/tags, heading-free articles, and long titles covered. |

## Remaining manual submission steps

1. Verify that the public demo uses the exact released 1.5.2 ZIP before submitting it. Its server framing policy is already corrected. Automatic GitHub releases do not deploy themes to a Ghost publication.
2. Confirm the latest two versions of the branded browsers requested by Ghost, including real Safari. CI’s WebKit is useful coverage but is not a claim that every Safari/iOS version was tested.
3. Exercise paid Stripe checkout with an appropriately configured test publication and inspect the complete editor-card set and chosen custom colors. No payments, emails, or real member accounts were created during these checks.
4. Review the final ZIP, demo, support details, and public download link, then submit the Ghost form. No marketplace application has been sent.

Automatic releases distribute tested packages; they do not grant marketplace approval. Historical releases and tags remain intact.
