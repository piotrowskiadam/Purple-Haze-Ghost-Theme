# Changelog

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
