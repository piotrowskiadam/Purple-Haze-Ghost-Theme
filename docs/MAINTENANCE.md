# Maintenance review — 31 October 2026

## Findings addressed

| Area | Original issue | Change |
| --- | --- | --- |
| Project identity | Starter demo, repository, issue, and contributor links | Real demo, repository, docs, and support links |
| Versioning | Manifest 1.4.80 locally, lockfile 1.4.50, two tags sharing a 1.4.79 commit | Synchronized 1.5.0 candidate; CI checks metadata and release tags |
| Archives | Filtered homepage collection disagreed with Ghost’s pagination; featured posts omitted | Native collection with a separate first-page spotlight |
| Infinite scroll | Concurrent fetches, unhandled promise errors, broad `.post` selection | One pending request, feed-scoped selection, persistent manual fallback |
| Featured cards | Nested anchors invalidated card structure | Separate tag, title, image, and read-more links |
| Content initialization | Mutation observer could react to its own Prism/table mutations | One initialization pass; feed loading adds cards rather than article bodies |
| Accessibility | Mobile menu anchor had no keyboard button behavior or expanded state | Native button, expanded state, Escape, visible focus |
| Reading time | Article used a helper as a numeric pluralization input | Documented `reading_time` options with translations |
| Theme settings | Invalid `visuals` group | Site-wide defaults and valid `homepage` group |
| Membership templates | Hardcoded dollar prices, obsolete plan selection, duplicate closing list tag | Currency-aware prices, Portal tier links, corrected markup |
| Distribution | Placeholder screenshot, conflicting lockfiles, no CI, no license in ZIP | Rendered demo screenshots, npm lockfile, validation workflow, allowlisted package |
| Documentation | Starter tutorial text and instructions to publish every edit | User setup guide, measured release process, contributor constraints |

## Validation scope

`npm test` builds production assets and validates Ghost 5 and 6 rules using GScan 6.6.1. Ghost 5 passes without warnings; Ghost 6 reports deprecated `facebook_url` and `twitter_url` helpers. They remain supported for the existing Ghost 5 minimum. These warnings are an explicit migration task, not a claim of full future compatibility.

The Chromium suite renders the repository’s Handlebars templates with a small fixture adapter. It covers card link structure, complete feed data, mobile menu keyboard interaction, one-request pagination, failure fallback, no-JavaScript pagination, article initialization, Polish heading links, and desktop/mobile overflow. It does not run Ghost itself or emulate search, Portal, payment services, or comments. GScan and fixtures cannot establish full browser or membership correctness.

Screenshots in `docs/screenshots/` and `assets/screenshot-*.jpg` depict Nightfall Journal, a fictional publication rendered from the v1.5.0 templates with sample articles and original SVG artwork. Regenerate them with `npm run screenshots`. They use the local fixture adapter, not a running Ghost installation, and do not contain the live blog’s content. Early design images and local Ghost documentation snapshots remain available, labeled as archives, outside the upload ZIP.

## Dependencies

The original npm audit reported **19 advisories**. Compatible dependency updates, a patched minifier, and a scoped override of GScan’s pinned Handlebars to 4.7.10 removed the reported critical issues. The final audit reported **5 dependency entries: 3 high and 2 low**, from two upstream dependency chains:

- `gscan → @tryghost/zip → extract-zip`: ZIP extraction advisories; no patched extract-zip release was available in the queried registry. The scanner’s archive validation is development tooling. Use trusted, locally built archives for this workflow.
- `@rollup/plugin-node-resolve → deepmerge`: prototype poisoning advisory, reported at low severity. npm’s automatic recommendation was a major downgrade of the resolver, which was not applied.

These packages are build/validation dependencies and are not included as server-side executable dependencies in the uploaded theme. That distinction does not remove risk on developer machines or CI. Recheck advisories and upstream fixes before marketplace submission. The Handlebars override should be removed once GScan itself uses a patched release.

## Remaining work

Follow [MARKETPLACE.md](MARKETPLACE.md) before submission: demo iframe headers, deployment of the exact candidate, browser matrix, full editor-card coverage, real Ghost membership checks, HTML validation, and social-helper migration. The legacy `members/` templates are retained for existing custom routes; their paid checkout flow needs a real Ghost test.

GitHub metadata suggestions are prepared there. No remote tags were deleted, releases rewritten, repository settings changed, marketplace form submitted, or blog deployed during this review.
