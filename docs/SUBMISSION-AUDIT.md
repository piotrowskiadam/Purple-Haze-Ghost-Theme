# Ghost submission audit — 31 October 2026

**Verdict: the theme is not ready to tick every submission checkbox yet.** Build validation is passing, documentation and packaging are prepared, but the demo embedding requirement fails and broader browser/accessibility checks found additional work.

Source: [Ghost’s submission requirements](https://ghost.org/themes/submit/), retrieved live on 31 October 2026. Passing the technical checklist does not guarantee acceptance: Ghost also curates originality, design quality, usability, and support.

## Evidence and scope

- [GitHub validation run 41147583614](https://github.com/piotrowskiadam/Purple-Haze-Ghost-Theme/actions/runs/41147583614) passed on Node 22 and 24: clean install, Ghost 5/6 checks, eight Chromium fixture tests, package generation, and ZIP validation.
- GScan 6 reports two deprecated social helpers; GScan 5 reports no warnings. No GScan errors were reported.
- Additional local tests used Chromium 149.0.7827.55 and Firefox 151.0 with the actual theme templates and fictional demo data at 390, 768, 900, 1024, and 1440px widths. These are single engine versions, not the required latest-two browser matrix.
- WebKit could not launch because the host lacks `libicudata.so.74`. No Safari compatibility conclusion is drawn.
- axe and html-validate inspected the local homepage/article. Default demo colors produced no axe WCAG-tagged violations, but best-practice warnings were found. Custom colors and Ghost-generated service interfaces were not covered.
- This was a review, not a Ghost deployment or a marketplace submission. Search, Portal, paid checkout, comments, and the complete editor-card set still need real Ghost testing.

## Checklist results

“Prepared” means supported by source inspection or the stated tests. “Partial” means the checkbox should remain unchecked until the missing coverage or correction is complete.

| Ghost checklist item | Status | Evidence or remaining action |
| --- | --- | --- |
| Pass GScan | Prepared, with warnings | Source and ZIP validation passed for Ghost 5/6; two Ghost 6 social-helper deprecations remain. |
| Responsive; latest two browser versions | **Needs correction and coverage** | Article overflow at 768px in Chromium and Firefox; Safari and latest-two browser matrix not completed. |
| Use the asset helper | Prepared | Bundled CSS/JS load through `asset` in default and error templates; publication images use Ghost content URLs. |
| Published with Ghost link | Prepared | Present in default and error footers. |
| HTTPS demo embeddable from `*.ghost.org` | **Fails** | Live homepage returned HTTP 200 over HTTPS but `X-Frame-Options: SAMEORIGIN`, blocking cross-origin framing. |
| Follow Ghost documentation | Partial | Core conventions and GScan pass; deprecated helpers and real Ghost feature verification remain. |
| Code comments | Prepared | Templates and scripts document behavior; historical comments can receive further editorial cleanup. |
| Sane structure and sensible partials | Prepared | Conventional templates, shared layout/card/icons, source/build asset separation. |
| Detailed README and help information | Prepared | Installation, upgrades, configuration, features, development, and GitHub issue support documented. |
| Proper package.json | Prepared | Valid metadata, theme engine, custom settings, image sizes, screenshots, and synchronized version fields. |
| Structured HTML and SEO | Partial | `ghost_head` and post metadata present; homepage has no H1 and feed jumps from H2 to H4. |
| Linked navigation | Prepared for reviewed paths | Primary/secondary navigation, post/tag links, archive pagination, and article links exist. Real Ghost routes still need a final smoke test. |
| No SEO tricks | Prepared | No cloaking, keyword stuffing, or comparable behavior found in reviewed templates/scripts. |
| Images have alt attributes | Prepared in reviewed templates | Logo, post, archive, and author images provide alt attributes and title/name fallbacks. Editor content depends on the author. |
| Valid HTML | Partial | No structural errors found in rendered home/article after disabling stylistic rules for legal inline styles, optional void slashes, and whitespace. Article landmark labels still trigger accessibility rules; all template/content combinations were not validated. |
| Keyboard access | Partial | Mobile Enter/Escape behavior passed in Chromium and Firefox; full Ghost services, image zoom, and article navigation need a keyboard pass. |
| Color contrast | Partial | No axe contrast violations in sampled default-color pages. Featured-image backgrounds, user color choices, and all content/service states remain unverified. |
| Base styles for all editor content | Partial | Image, table, code, quote, embed, and wide/full-width rules exist; actual editor-card coverage and width behavior need a real Ghost test. |
| Tag/author archives | Prepared in source | Templates and pagination present; missing bio/image conditions handled. |
| Featured post styling | Prepared | Distinct first-page spotlight with image overlay and separate links. |
| Empty/missing content fallbacks | Partial | Source handles missing images, tags, author bio, and heading-free articles. Empty archives, long text, and membership states need expanded runtime coverage. |

## Corrections before submission

1. **Demo framing and version:** configure the demo host to permit embedding by Ghost, then deploy and verify the exact candidate. Screenshots are local fixtures, not a hosted Ghost demo. See [MARKETPLACE.md](MARKETPLACE.md) for the header change.
2. **Tablet article overflow (P1):** `assets/css/ghost/content.css:24` forces `--main: 90ch` above 740px. At a 768px viewport, the article’s right edge reaches roughly 789–790px. Constrain the column to available width and add tablet article coverage.
3. **Heading structure (P2):** `index.hbs` starts at H2, while `partials/card.hbs:54` uses H4 for card titles. Provide a page H1 and a coherent outline without relying on visual font size to supply semantics. These were axe best-practice findings, not automatically proven WCAG failures.
4. **Landmark labels (P2):** `default.hbs` primary navigation and `post.hbs` table-of-contents navigation need distinct accessible names. The ToC and adjacent-post asides also need distinct names. axe/html-validate reported ambiguity for screen-reader landmark navigation.
5. **Complete real Ghost/browser checks:** Safari and the latest two versions of supported browsers, mobile articles, wide/full-width cards, empty content, search, memberships, comments, custom colors, and keyboard interaction.

The ToC’s sticky positioning was confirmed at an 80px top offset and its active link updated during scrolling. This is a useful differentiator; keep it prominent in the README and demonstrate it on the hosted demo.

## Release versus submission

Automatic GitHub publication after successful CI is a distribution step, not marketplace approval. The release workflow checks the version and validated ZIP; it does not certify every item above. Use the exact published `v1.5.0` ZIP and release link once the automatic publication completes. Existing older releases remain available.
