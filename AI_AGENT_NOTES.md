# AI Agent Development Notes for Purple Haze Ghost Theme

This document provides guidelines for AI agents working on the Purple Haze Ghost Theme project.

## Workflow

1. **Understand the Task:** Carefully read the user's request and clarify any ambiguities.
2. **Implement Changes:** Make necessary code modifications (CSS, HBS, JS, etc.). Use tools like `read_file`, `apply_diff`, `write_to_file` sequentially.
3. **Update Version:** Increment the patch version number (e.g., 1.2.2 -> 1.2.3) in `package.json` for minor changes/fixes, or the minor version (e.g., 1.2.x -> 1.3.0) for new features.
4. **Update Changelog:** Add a concise entry describing the changes under the new version number in `CHANGELOG.md`. Follow the existing format (use `### Added`, `### Changed`, `### Fixed`).
5. **Build Theme:** Run `npm run build` in the `Purple Haze Ghost Theme` directory to compile assets.
6. **Commit Changes:**
    * Stage changes: `git add .`
    * Commit with a descriptive message (e.g., `git commit -m "feat: Add feature X"` or `fix: Correct issue Y"`). Use conventional commit prefixes if possible.
7. **Push Changes:** Push the commit to the `main` branch: `git push origin main`.
8. **Package Theme:** Run `npm run zip` in the `Purple Haze Ghost Theme` directory. This creates `purple-haze.zip`.
9. **Tag Release:** Create a Git tag matching the version in `package.json`: `git tag vX.Y.Z` (e.g., `git tag v1.2.3`).
10. **Push Tag:** Push the tag to GitHub: `git push origin vX.Y.Z`.
11. **Create GitHub Release:** Use the GitHub CLI (`gh`) to create a release associated with the tag and upload the zip file:

    ```bash
    gh release create vX.Y.Z ./purple-haze.zip -t "vX.Y.Z" -n "Release vX.Y.Z - Brief description" --repo piotrowskiadam/Purple-Haze-Ghost-Theme
    ```

12. **Inform User:** Notify the user that the changes are complete, mentioning the new version number and linking to the GitHub release.

**Important Notes:**

* **Command Chaining:** Avoid chaining commands using `&&`. Execute commands individually, especially Git commands (`add`, `commit`, `push`, `tag`). Using `&&` can lead to bash syntax errors (e.g., `syntax error near unexpected token \`;;'`) in this environment. Confirm success after each command.
* **Accent Color:** The theme uses Ghost's built-in Accent Color (`--ghost-accent-color`) for primary interactive elements (tag backgrounds, table headers, bottom overlay). Default fallback: `#281C52`. The theme cannot override a user's previously saved Accent Color setting.
* **Custom Settings:**
  * `secondary_accent_color` (formerly `tag_text_color`): Allows users to set a secondary color, used for links, tag text, captions, etc. Default: `#D0B8FB`.
  * `featured_overlay_color`: Controls the base color for the gradient on featured post images. Default: `#000000`.
  * `navigation_text_color`: Controls the color of header navigation links. Default: `#FFFFFF`.
* **Translations (i18n):**
  * Uses the `{{t}}` helper in `.hbs` files.
  * Translations are stored in `locales/en.json` and `locales/pl.json`.
  * The `locales` directory *must* be included in the `npm run zip` command in `package.json`.
  * Ghost may need to be restarted (`ghost restart`) for new/updated locale files to be recognized after theme upload/activation.
* **File Structure:** Standard Ghost theme structure. Key styling is in `assets/css/`, particularly `index.css`, `vars.css`, and files within `assets/css/ghost/`. Partials are in `partials/`.
* **Documentation Reference:** Refer to the `GhostThemeDocs/` folder in the project root for local copies of Ghost theme documentation, which can be helpful for understanding features and structure.

## Key Learnings & Best Practices

* **Card Link Structure:** Avoid wrapping entire cards in a single `<a>` tag if nested elements (like tags) need separate links. Instead, wrap individual elements (image, title, read more) in their own `<a>` tags pointing to the post URL (`{{url}}`), and keep tag links separate (`<a href="{{tag.url}}">`). Remove any JS for `event.stopPropagation()` if using this structure. Add CSS to style/reset link appearances as needed (e.g., `.gh-card-title a { color: inherit; text-decoration: none; }`).
* **Conditional Styling (Context):** Use Ghost context helpers (`{{#is "context"}}`) to apply styles/classes conditionally (e.g., `{{#is "home"}}{{#if featured}} gh-card--featured{{/if}}{{/is}}` to only apply featured styles on the home page).
* **CSS Specificity:** If CSS variables or styles aren't applying as expected, check for conflicting rules or default browser styles. Explicitly targeting elements (e.g., `a.gh-card-tag { color: var(--tag-text-color); }`) can override less specific rules.
* **Translation (`{{t}}` Helper):**
  * For simple pluralization based on count, use `{{t "Key for %" count=variable}}` if keys like `"Key for 1"` and `"Key for %"` exist in locale files.
  * For more complex strings (e.g., prefix + number + suffix), combine translated parts with the `{{plural}}` helper: `{{t "Prefix"}} {{plural count empty=(t "0 suffix") singular=(t "1 suffix") plural=(t "% suffix")}}`. Ensure all parts ("Prefix", "0 suffix", "1 suffix", "% suffix") have corresponding keys in locale files.
* **Build Process:** The `npm run build` command sometimes fails or hangs. Retrying the command usually works. Be mindful of this during development.
* **Template Cleanup:** Remove unused files/configurations from starter templates, especially GitHub Actions workflows (`.github/workflows/`) if using a manual deployment process.
* **Table of Contents (ToC):** Implemented using CSS `position: sticky` within the `.gh-canvas` grid (`wide-start / main-start` column). JS (`toc.js`) handles generation and scrollspy highlighting only. Ensure `post.hbs` structure is `div.gh-canvas > aside.gh-toc + article.gh-article`.
* **Font Loading:** Explicitly load required fonts (e.g., Roboto) with necessary subsets (`latin-ext`) via `<link>` in `default.hbs`. Update `--font-sans-serif` (or other relevant variables) in `vars.css` to prioritize the loaded font.
* **CSS Grid Layout (`.gh-canvas`):** Be mindful of selector specificity when applying grid column widths (`--main`). Use specific selectors (e.g., targeting body class like `.post-template .gh-canvas`) if different widths are needed for different templates (like posts vs. pages) to avoid unintended overrides. Ensure direct children placement rules (`.gh-canvas > *`) don't conflict with specific element placement (like `.gh-canvas > .gh-toc`).
* **Code Block Background:** Force transparent background on `pre > code` and inner Prism spans (`pre > code .token`) in `content.css` to prevent double backgrounds.
* **Tag Styling:** Use `--color-primary` for background and `--secondary-accent-color` for text on tags. Ensure `--secondary-accent-color` is defined in `vars.css`. Apply styles to `.gh-post-tags .gh-tag` (footer) and `.gh-card-tag` (cards).
* **Featured Badge:** Removed from `partials/card.hbs` as the featured layout is distinct enough. Removed associated CSS.
* **Reading Time Translation:** Use the `{{plural}}` helper in templates (`{{plural reading_time empty=(t "...") singular=(t "...") plural=(t "...")}}`) and ensure corresponding keys exist in locale files for correct translation.

**Repository:** `https://github.com/piotrowskiadam/Purple-Haze-Ghost-Theme.git`
