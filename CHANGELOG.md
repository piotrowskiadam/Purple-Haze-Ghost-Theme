# Changelog

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
