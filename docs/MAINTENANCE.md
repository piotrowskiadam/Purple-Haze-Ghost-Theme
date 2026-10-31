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

Version 1.5.1 adds Chromium, Firefox, and WebKit projects in CI, automated axe checks, ten HTML validation scenarios, keyboard image zoom and ToC regression checks, and responsive/editor-card fallbacks. A separate Ghost 6.72.0 instance also exercised native routes, search results, Portal signup UI, comments, and guest access to a members-only article. See [SUBMISSION-AUDIT.md](SUBMISSION-AUDIT.md) for scope and remaining manual checks.

Screenshots in `docs/screenshots/` and `assets/screenshot-*.jpg` depict Nightfall Journal, a fictional publication rendered from the v1.5.1 templates with sample articles and original SVG artwork. Regenerate them with `npm run screenshots`. They use the local fixture adapter, not a running Ghost installation, and do not contain the live blog’s content. Early design images and local Ghost documentation snapshots remain available, labeled as archives, outside the upload ZIP.

## Dependencies

The original npm audit reported **19 advisories**. Compatible dependency updates, a patched minifier, and a scoped override of GScan’s pinned Handlebars to 4.7.10 removed the reported critical issues. After refreshing dependencies and adding validation tools, the current audit reports **13 development dependency entries: 3 high, 8 moderate, and 2 low**. The affected chains involve GScan’s ZIP extractor, resolver/deepmerge, and glob/minimatch used by build/ZIP tooling. npm’s remaining proposed fixes require incompatible dependency changes; they were not applied blindly.

These packages are build/validation dependencies and are not included as server-side executable dependencies in the uploaded theme. That distinction does not remove risk on developer machines or CI. Recheck advisories and upstream fixes before marketplace submission. The Handlebars override should be removed once GScan itself uses a patched release.

## Remaining work

The confirmed theme and demo-header defects have been corrected. Follow [MARKETPLACE.md](MARKETPLACE.md) for final demo deployment, branded-browser/Safari coverage, paid checkout, complete editor-card review, and the eventual social-helper migration.

The detailed checklist review is in [SUBMISSION-AUDIT.md](SUBMISSION-AUDIT.md). GitHub metadata suggestions are prepared in MARKETPLACE.md. [The release workflow](RELEASING.md) now publishes new manifest versions after successful main-branch validation. Historical releases and tags are preserved; marketplace submission and blog deployment remain separate steps.
