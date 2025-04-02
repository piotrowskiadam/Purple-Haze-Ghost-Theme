# Changelog

## [1.4.53] - 2025-04-02

### Fixed
- Corrected placement of "Featured" badge to be directly above the title in card partial.

## [1.4.52] - 2025-04-02
### Changed
- Moved "Featured" badge on cards to appear directly above the post title.
- Added specific CSS class and margin for the moved badge.

## [1.4.51] - 2025-04-02
### Removed
- Removed PhotoSwipe v5 integration due to styling/layout conflicts.

## [1.4.50] - 2025-04-02
### Added
- Integrated PhotoSwipe v5 for enhanced gallery lightbox functionality (keyboard navigation, etc.).
- Installed PhotoSwipe as dev dependency.

### Changed
- Updated JS to import PhotoSwipe locally instead of CDN.
- Removed redundant PhotoSwipe script tag from `default.hbs`.

## [1.4.49] - 2025-04-02
### Changed
- Increased site title font size (`.gh-head-logo`) to `3.5rem`.
## [1.4.49] - 2025-04-02

### Changed
- Increased site title font size (`.gh-head-logo`) to `3.5rem`.

## [1.4.48] - 2025-04-02
### Fixed
- Added top padding to sticky ToC to prevent clipping of diacritics.

## [1.4.47] - 2025-04-02
### Fixed
- Removed specific `font-family` override in `content.css` to ensure About page uses the selected Body Font from dashboard settings.

## [1.4.46] - 2025-04-02
### Fixed
- Removed CSS rule from `index.css` that incorrectly narrowed About page content width.

## [1.4.45] - 2025-04-02
### Fixed
- Apply wide (`90ch`) main column width to `.gh-canvas` on About page to match post pages.

## [1.4.44] - 2025-04-02
### Fixed
- Corrected `.gh-canvas` grid rules in `content.css` to fix About page layout and ensure post layout uses wide main column (v3).
- Refined code block background fix targeting inner `.token` spans.

## [1.4.43] - 2025-04-02
### Fixed
- Simplified and corrected `.gh-canvas` grid rules in `content.css` again to fix About page layout while maintaining post layout (v2).
- Refined code block background fix targeting inner `<code>` and `.token` spans.

## [1.4.42] - 2025-04-02
### Fixed
- Simplified and corrected `.gh-canvas` grid rules in `content.css` to fix About page layout while maintaining post layout.
- Re-verified code block background fix.

## [1.4.41] - 2025-04-02
### Fixed
- Corrected CSS selectors in `content.css` to fix About page layout broken by previous grid changes.
- Forced transparent background on `pre code span` elements to remove double background in code blocks.

## [1.4.40] - 2025-04-02
### Fixed
- Corrected `.gh-canvas` grid definition in `content.css` to ensure wide layout applies correctly on posts (v2).
- Ensured post tag styling uses correct color variables (`--color-primary`, `--secondary-accent-color`).
- Reverted ToC to simpler CSS sticky within the corrected grid structure.

## [1.4.39] - 2025-04-02
### Fixed
- Forced transparent background on `pre code` elements to remove potential double background effect.

## [1.4.38] - 2025-04-02
### Fixed
- Use `{{plural}}` helper in `post.hbs` to correctly translate reading time.
- Added missing "Less than a minute" translation key to `locales/pl.json`.

## [1.4.37] - 2025-04-02
### Fixed
- Load Roboto font explicitly from Google Fonts with `latin-ext` subset to support Polish diacritics.
- Prioritize loaded Roboto in the `--font-sans-serif` stack.

## [1.4.36] - 2025-04-02
### Fixed
- Corrected `.gh-canvas` grid definition in `content.css` to ensure wide layout applies correctly on posts.
- Ensured post tag styling uses correct color variables (`--color-primary`, `--secondary-accent-color`).

## [1.4.35] - 2025-04-02
### Changed
- Reverted ToC implementation to use simpler CSS sticky positioning within the `.gh-canvas` grid (v7).
- Corrected `post.hbs` structure.
- Updated `toc.css` to position ToC in `wide-start / main-start` grid area and apply `position: sticky`.
- Simplified `toc.js` by removing JS-controlled sticky logic.
- Added `--secondary-accent-color` variable.
- Corrected post tag styling in footer to use correct color variables.

## [1.4.34] - 2025-04-02
### Fixed
- Corrected post tag styling in footer to use purple background and light text.

## [1.4.33] - 2025-04-02
### Changed
- Updated post tag styling in footer to match card tag styling (purple background, light text).

## [1.4.32] - 2025-04-02
### Added
- Display post tags at the bottom of the post content.

### Changed
- Reverted ToC implementation to use simpler CSS sticky positioning within the `.gh-canvas` grid (v6).
- Corrected `post.hbs` structure.
- Updated `toc.css` to position ToC in `wide-start / main-start` grid area and apply `position: sticky`.
- Simplified `toc.js` by removing JS-controlled sticky logic.

## [1.4.31] - 2025-04-02
### Changed
- Reworked ToC layout using fixed/absolute positioning controlled by JS (v6).
- Corrected `post.hbs` structure (ToC outside wrapper, article inside).
- Updated `toc.css` for the new positioning strategy and JS classes (`.toc-active`, `.toc-bottom`).
- Updated `toc.js` with observers for sticky start and end points.

## [1.4.30] - 2025-04-02
### Changed
- Reverted ToC implementation to use simpler CSS sticky positioning within the `.gh-canvas` grid (v5).
- Corrected `post.hbs` structure.
- Updated `toc.css` to position ToC in `wide-start / main-start` grid area and apply `position: sticky`.
- Simplified `toc.js` by removing JS-controlled sticky logic.

## [1.4.29] - 2025-04-02
### Changed
- Reworked ToC layout using fixed/absolute positioning controlled by JS (v5).
- Corrected `post.hbs` structure (ToC outside wrapper).
- Updated `toc.css` for the new positioning strategy and JS classes (`.toc-active`, `.toc-bottom`).
- Updated `toc.js` with observers for sticky start and end points.

## [1.4.28] - 2025-04-02
### Changed
- Reworked ToC layout using fixed/absolute positioning controlled by JS (v4).
- Corrected `post.hbs` structure (ToC outside wrapper).
- Updated `toc.css` for the new positioning strategy and JS classes (`.toc-active`, `.toc-bottom`).
- Updated `toc.js` with observers for sticky start and end points.

## [1.4.27] - 2025-04-02
### Changed
- Reworked ToC layout using fixed/absolute positioning controlled by JS (v3).
- Corrected `post.hbs` structure.
- Updated `toc.css` for the new positioning strategy and JS classes (`.toc-active`, `.toc-bottom`).
- Updated `toc.js` with observers for sticky start and end points.

## [1.4.26] - 2025-04-02
### Changed
- Reworked ToC layout using fixed/absolute positioning controlled by JS (v2).
- Updated HTML structure (`post.hbs`) with a wrapper around article.
- Updated CSS (`toc.css`) for the new positioning strategy and JS classes (`.toc-active`, `.toc-bottom`).
- Updated JS (`toc.js`) with observers for sticky start and end points.

## [1.4.25] - 2025-04-02
### Changed
- Reverted ToC implementation to use simpler CSS sticky positioning within the `.gh-canvas` grid (v4).
- Corrected `post.hbs` structure again.
- Updated `toc.css` to position ToC in `wide-start / main-start` grid area and apply `position: sticky`.
- Simplified `toc.js` by removing JS-controlled sticky logic.

## [1.4.24] - 2025-04-02
### Changed
- Reverted ToC implementation to use simpler CSS sticky positioning within the `.gh-canvas` grid (v3).
- Corrected `post.hbs` structure again.
- Updated `toc.css` to position ToC in `wide-start / main-start` grid area and apply `position: sticky`.
- Simplified `toc.js` by removing JS-controlled sticky logic.

## [1.4.23] - 2025-04-02
### Changed
- Reverted ToC implementation to use simpler CSS sticky positioning within the `.gh-canvas` grid.
- Removed JS logic for controlling sticky state; kept only scrollspy observer.
- Corrected `post.hbs` structure to place ToC and Article correctly within `.gh-canvas`.

## [1.4.22] - 2025-04-02
### Changed
- Reworked ToC layout: Placed ToC inside `.gh-content`, use `float: left` and CSS `position: sticky`.
- Updated JS observers to control `.toc-active` and `.toc-bottom` classes for visibility/stickiness/stopping.
- Added `overflow: hidden` to `.gh-content.gh-canvas` to contain float.
- Adjusted scrollspy observer margin.

## [1.4.21] - 2025-04-02
### Changed
- Corrected `post.hbs` structure for ToC layout using `.gh-canvas`.
- Updated `toc.css` to use `.gh-canvas` grid columns and direct CSS sticky.
- Simplified `toc.js` by removing JS-controlled sticky logic.
- Adjusted scrollspy observer margin.

## [1.4.20] - 2025-04-02
### Changed
- Reverted ToC HTML structure again.
- Reworked CSS for ToC using absolute/fixed positioning controlled by JS.
- Re-implemented JS observers (`stickyObserver`, `bottomObserver`) to toggle `.toc-visible-sticky` and `.toc-bottom` classes for visibility, stickiness, and stopping scroll at footer.
- Adjusted scrollspy observer margin.

## [1.4.19] - 2025-04-02
### Changed
- Reverted ToC HTML structure to place ToC and Article inside a `.gh-canvas` wrapper.
- Updated ToC CSS to use standard `.gh-canvas` grid columns and direct sticky positioning.
- Simplified ToC JS, removing sticky observer logic.

## [1.4.18] - 2025-04-02
### Changed
- Reworked ToC layout again using fixed/absolute positioning controlled by JS.
- Updated HTML structure (`post.hbs`) with a wrapper.
- Updated CSS (`toc.css`) for the new positioning strategy and JS classes (`.toc-active`, `.toc-bottom`).
- Updated JS (`toc.js`) with observers for sticky start and end points.

## [1.4.17] - 2025-04-02
### Changed
- Reworked ToC layout again to use standard `.gh-canvas` grid.
- Simplified JS, relying only on CSS for sticky positioning.
- Adjusted scrollspy observer margin.

## [1.4.16] - 2025-04-02
### Fixed
- Adjusted ToC scrollspy observer margin again to further delay initial highlight.

## [1.4.15] - 2025-04-02
### Changed
- Reworked ToC layout using fixed/absolute positioning relative to a wrapper (`.gh-post-wrapper`).
- Re-implemented JS observers for conditional visibility/stickiness (`.toc-active`) and bottom boundary (`.toc-bottom`).
- Adjusted CSS positioning calculations and added `.toc-bottom` styles.

## [1.4.14] - 2025-04-02
### Fixed
- Adjusted ToC scrollspy observer margin to delay initial heading highlight.

## [1.4.13] - 2025-04-02
### Changed
- Reverted ToC layout to use `.gh-canvas` grid structure.
- Re-implemented JS observer logic for conditional ToC stickiness/visibility.
- Adjusted CSS for `.gh-toc` and `.toc-visible-sticky` to work with JS observer.

## [1.4.12] - 2025-04-02
### Changed
- Reworked ToC layout to leverage standard `.gh-canvas` grid.
- Positioned ToC in `wide-start / main-start` grid area.
- Simplified JS by removing sticky observer (CSS handles sticky directly).
- Adjusted scrollspy observer margin.

## [1.4.11] - 2025-04-02
### Changed
- Refined ToC sticky behavior: ToC is hidden initially, made visible and sticky via JS (`.toc-visible-sticky`) only after feature image/header scrolls past.
- Adjusted scrollspy observer margin to delay initial heading highlight.
- Increased ToC title font size.

## [1.4.10] - 2025-04-01
### Changed
- Simplified ToC CSS grid layout for better centering.
- Removed JS dependency for ToC sticky behavior; applied `position: sticky` directly in CSS.

## [1.4.9] - 2025-04-01
### Fixed
- Refined Intersection Observer `rootMargin` in `toc.js` for more precise sticky trigger point.

## [1.4.8] - 2025-04-01
### Fixed
- Corrected CSS grid column assignments for ToC and main article to ensure proper centering.
- Corrected sticky CSS class name (`.toc-sticky`) to match JavaScript implementation.

## [1.4.7] - 2025-04-01
### Changed
- Increased ToC title font size again.
- Re-implemented JS Intersection Observer to make ToC sticky only after feature image/header scrolls past.
- Re-added `.toc-sticky` class in CSS for conditional sticky positioning.
- Refined CSS grid layout for better content centering.

## [1.4.6] - 2025-04-01
### Changed
- Simplified ToC JavaScript, removing conditional sticky logic.
- Refined ToC CSS grid layout for better content centering and applied `position: sticky` directly.

## [1.4.5] - 2025-04-01
### Changed
- Updated ToC title color to use main text color (`--color-base`).
- Modified ToC JavaScript to make the ToC sticky only after the feature image/header scrolls out of view using Intersection Observer.
- Added `.toc-sticky` class in CSS to handle the conditional sticky state.

## [1.4.4] - 2025-04-01
### Changed
- Reverted ToC layout to use a grid container (`.gh-toc-container`) wrapping ToC and article.
- Adjusted grid columns in `toc.css` to keep main content centered while placing sticky ToC on the left.
- Increased ToC title font size (`.gh-toc-title`) to `2.0rem`.
- Reverted CSS changes from v1.4.3 related to floated ToC.

## [1.4.3] - 2025-04-01
### Changed
- Reworked Table of Contents layout:
  - Moved ToC inside the main content area (`.gh-content`) below the header/feature image.
  - Removed previous grid layout (`.gh-toc-container`).
  - Applied float and sticky positioning to ToC on desktop.
  - Increased ToC font size to `2.4rem`.
- Reverted post header/article padding adjustments from v1.4.2.
- Added `overflow: hidden` to `.gh-content` to contain floated ToC.

## [1.4.2] - 2025-04-01
### Changed
- Increased Table of Contents column width and reduced gap between ToC and main content on desktop.
- Adjusted top padding on post header to vertically align post title with ToC title.

## [1.4.1] - 2025-04-01
### Changed
- Changed Table of Contents title from `h3` to `div` for better SEO.
- Increased Table of Contents item font size to `1.6rem`.
- Changed active Table of Contents item style to apply secondary accent color to text instead of background.

## [1.4.0] - 2025-04-01
### Added

- Implemented a sticky Table of Contents (ToC) for post pages (`post.hbs`).
  - Extracts `h2` and `h3` headings from post content.
  - Displays ToC in a separate column on desktop views.
  - Highlights the current heading in the ToC using the secondary accent color on scroll.
  - Allows clicking ToC items for smooth scrolling to headings.
  - Added translatable title "Table of Contents" / "Spis treści".
  - Includes necessary HTML structure, CSS (`assets/css/components/toc.css`), and JavaScript (`assets/js/toc.js`).

## [1.3.23] - 2025-03-31

### Fixed
- Reverted `card.hbs` structure: tags are now outside main link, JS added back to handle clicks.
- Re-applied absolute positioning for featured tag CSS in `index.css` (adjusted position).
- Wrapped post header/footer content in `.gh-container` in `post.hbs` for alignment.

### Added
- Related posts section to `post.hbs`.
- Translations for "You might also like".

## [1.3.22] - 2025-03-30
## [1.3.22] - 2025-03-30

### Fixed

- Implemented horizontal scrolling for wide tables using a JS wrapper (`.table-wrapper`) and CSS (`overflow-x: auto`).
- Increased desktop post content width (`--main`) to `90ch` in `content.css`.
- Corrected featured tag positioning on homepage cards using absolute positioning in `index.css`.

## [1.3.21] - 2025-03-30

### Fixed

- Added horizontal scroll (`overflow-x: auto`) to tables in `content.css` to improve responsiveness.

## [1.3.20] - 2025-03-30

### Fixed

- Added conditional link wrapper `{{#is "home"}}{{#if featured}}<a href="{{url}}">...</a>{{/if}}{{/is}}` around `.gh-card-content` in `partials/card.hbs` to make featured card background image clickable on homepage.
- Made post content width (`--main` variable in `content.css`) responsive, applying wider `75ch` only above 740px.

## [1.3.18] - 2025-03-30

### Changed

- Renamed custom setting `tag_text_color` to `secondary_accent_color` in `package.json`, `default.hbs`, and CSS files.
- Increased post content width (`--main` variable to `75ch`) in `content.css`.
- Updated default link color (`a:not([class])`) in `global.css` to use `secondary_accent_color`.
- Adjusted blockquote styles in `content.css` to prevent quote mark overlap.
- Adjusted image card styles in `content.css` to apply border/radius to `<img>` instead of `<figure>` and set `figcaption` color to `secondary_accent_color`.

### Added

- `prismjs` dependency for syntax highlighting.
- Dracula theme CSS for PrismJS (`assets/css/vendor/prism-dracula.css`).
- PrismJS initialization (core, common languages) in `assets/js/index.js`.
- `medium-zoom` dependency and initialization in `assets/js/index.js` for image zooming.

## [1.3.17] - 2025-03-30

### Changed

- Updated `AI_AGENT_NOTES.md` with key learnings and best practices.
- Updated `README.md` with a new "Development Notes" section pointing to `AI_AGENT_NOTES.md`.

## [1.3.16] - 2025-03-30

### Changed

- Refactored `partials/card.hbs` to use separate links for image, title, and read more, removing the single wrapper link.
- Removed unnecessary JS event handler for tag links.
- Added CSS styles for new link classes (`.gh-card-image-link`, `.gh-card-readmore`) and reset styles for title link (`.gh-card-title a`).

## [1.3.15] - 2025-03-30

### Fixed

- Corrected `partials/card.hbs` structure to prevent tag duplication by removing the erroneously added outer tag block. Tags are now correctly rendered only once inside `.gh-card-content`.

## [1.3.14] - 2025-03-30

### Fixed

- Added explicit CSS rule `a.gh-card-tag { color: var(--tag-text-color, #D0B8FB); }` to `index.css` to ensure custom tag text color applies correctly to linked tags.
- Corrected `partials/card.hbs` structure to place tags block outside the main post link (`.gh-card-link`) for proper click handling.

## [1.3.13] - 2025-03-30

### Fixed

- Constrained card image width (`.gh-card-picture`) in `index.css` to match content width (`720px`) and centered it, improving layout on archive pages with single posts.

## [1.3.12] - 2025-03-30

### Fixed

- Corrected tag page translation logic in `tag.hbs` to use `{{t "Collection"}} {{plural ...}}` structure.
- Added missing "Collection" and "0 posts" keys to `locales/en.json` and `locales/pl.json`.
- Corrected `partials/card.hbs` structure again to fix tag duplication and ensure FEATURED tag/styling only appears on home page.

## [1.3.11] - 2025-03-30

### Fixed

- Corrected translation helper usage in `tag.hbs` for "A collection of % posts".
- Corrected `partials/card.hbs` structure:
  - Removed duplicated tags block.
  - Ensured tags are rendered inside `.gh-card-content`.
  - Wrapped "FEATURED" tag span with `{{#is "home"}}` helper.
  - Kept conditional logic on `<article>` to only apply `.gh-card--featured` class/style on home page.

## [1.3.10] - 2025-03-30

### Fixed

- Corrected translation helper usage in `tag.hbs` for "A collection of % posts".
- Updated `partials/card.hbs` to only apply `.gh-card--featured` class and background style when `{{#is "home"}}` is true, ensuring consistent card styling on archive pages.

## [1.3.9] - 2025-03-30

### Fixed

- Updated `tag.hbs` to use the `{{t}}` helper for "A collection of % posts" text, enabling translation.
- Removed conditional `featured` logic for title (`h2`/`h4`) within `partials/card.hbs` to ensure consistent card display on archive pages.

## [1.3.8] - 2025-03-30

### Added

- JavaScript in `index.js` to stop click propagation on tag links (`a.gh-card-tag`), allowing them to navigate independently of the main card link.

### Changed

- Updated `partials/card.hbs` to wrap individual tags in `<a>` tags linking to `{{tag.url}}`.

## [1.3.7] - 2025-03-30

### Fixed

- Removed top padding from `.gh-postfeed` in `index.css` to reduce excessive space below the "Latest Posts" heading.

## [1.3.6] - 2025-03-30

### Changed

- Refined styling for "Latest Posts" heading (`.gh-section-title`):
  - Reduced and equalized top/bottom margins to `4vmin` (desktop and mobile).
  - Increased mobile font size to `3.6rem`.

## [1.3.5] - 2025-03-30

### Changed

- Increased font size and added vertical margins for the "Latest Posts" heading (`.gh-section-title`) in `index.css` to match design reference.

## [1.3.4] - 2025-03-30

### Added

- "Latest Posts" heading (`<h2>`) to `index.hbs` between featured post and regular post feed.

### Changed

- Added `min-height: 400px` and removed `aspect-ratio` for `.gh-card--featured` on screens <= 740px (`--small` breakpoint) in `index.css` to improve mobile layout.

## [1.3.3] - 2025-03-30

### Fixed

- Corrected card excerpt text color in `index.css`:
  - Set `.gh-card` color to `var(--color-base)`.
  - Set `.gh-card--featured p` and `.gh-card--featured .gh-card-meta` color to `var(--color-base)`.

## [1.3.2] - 2025-03-30

### Fixed

- Corrected default body text color in `global.css` to use `--color-base` (near white) instead of `--color-secondary-text` (gray), ensuring excerpts and main post content use the intended color.

### Changed

- Added note about `GhostThemeDocs` folder to `AI_AGENT_NOTES.md`.

## [1.3.1] - 2025-03-30

### Changed

- Updated base text color (`--color-base`) to `#FFFEFE` (near white) for main text, titles, and excerpts.

## [1.3.0] - 2025-03-30

### Added

- Custom Theme Setting for 'Navigation text color' (`navigation_text_color`).

### Changed

- Increased tag font size to `1.3rem`.
- Improved site title wrapping in header by removing `max-width` and adjusting `word-wrap`.
- Updated header logo and navigation links to use the new `navigation_text_color` setting.

## [1.2.2] - 2025-03-30

### Changed

- Updated the default fallback color for `--ghost-accent-color` to `#281C52` (dark purple) in `vars.css` and relevant rules in `index.css`. This ensures the theme visually defaults to this purple if no Accent Color is set in Ghost Admin.

## [1.2.1] - 2025-03-30

### Changed

- Updated `README.md` to reflect Purple Haze theme details instead of generic starter theme info.

### Fixed

- Removed stray repository URL accidentally added to `partials/card.hbs`.

### Added

- Added common translation strings (e.g., "Subscribe", "Newer Posts", "Older Posts", etc.) to `locales/en.json` and `locales/pl.json`.
- Wrapped corresponding strings in `index.hbs` (Subscribe section) and `post.hbs` ("Written by") with the `{{t}}` helper.

## [1.2.0] - 2025-03-30

### Added

- Internationalization (i18n) support using the `{{t}}` helper.
- Polish (`pl.json`) translation file for "FEATURED" and "Read more".
- Declared available locales (`en`, `pl`) in `package.json`.

## [1.1.0] - 2025-03-30

### Changed

- Linked bottom "misty overlay" gradient (`.gh-viewport::after`) to the Ghost Accent Color.
- Removed the top border from the footer (`.gh-foot`).

## [1.0.9] - 2025-03-30

### Changed

- Consolidated theme color usage:
  - Post tag background (`.gh-card-tag`) now uses the Ghost Accent Color setting (`--ghost-accent-color`).
  - Table header background (`th`) already used the primary color, which is linked to the Ghost Accent Color.
- Removed the custom theme setting for 'Tag background color'. The 'Tag text color' setting remains for contrast control.

## [1.0.8] - 2025-03-30

### Added

- Custom Theme Settings in Ghost Admin for:
  - Tag Background Color (`tag_background_color`)
  - Tag Text Color (`tag_text_color`)
  - Featured Post Overlay Color (`featured_overlay_color`)

### Changed

- Refactored CSS (`index.css`) and `default.hbs` to use the new Custom Theme Settings via CSS variables.

## [1.0.7] - 2025-03-30

### Changed

- Increased font size for post tags (`.gh-card-tag`) to `1.2rem` for better prominence.

## [1.0.6] - 2025-03-30

### Changed

- Adjusted padding on post tags (`.gh-card-tag`) to `0.3em 0.6em` for better visual balance.

## [1.0.5] - 2025-03-30 (Initial tracked version)

### Changed

- Adjusted padding on post tags (`.gh-card-tag`). (Note: Initial padding adjustments were made in this version before settling on the final value in 1.0.6)
- Ensured "FEATURED" tag uses the same styling as other tags.

### Added

- Initialized Git repository (though commits are not registering correctly via tool).
