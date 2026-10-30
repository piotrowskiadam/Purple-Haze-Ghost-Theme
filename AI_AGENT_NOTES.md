# Contributor notes

For theme behavior, setup, and file locations, read [README.md](README.md). For versioning, packaging, tags, and publication, follow [docs/RELEASING.md](docs/RELEASING.md). Marketplace requirements and unfinished validation are in [docs/MARKETPLACE.md](docs/MARKETPLACE.md).

## Implementation constraints

- Edit CSS and JavaScript sources, then rebuild the tracked `assets/built/` output. Preserve unrelated working-tree changes.
- Keep feed pagination based on Ghost’s supplied `posts` collection. A separate featured spotlight must not replace the collection or its page totals.
- Keep card image, title, read-more, and tag links as separate anchors. Browser HTML repair of nested links changes the layout.
- Custom setting keys are upgrade contracts: preserve them when possible. Ghost’s saved accent color overrides the CSS fallback. Only `homepage` and `post` are valid optional setting groups; omit the group for site-wide settings.
- Use `reading_time` with translated `minute` and `minutes` options. It is a helper, not a numeric value to pass to `plural`.
- Keep locale files and referenced assets in the upload ZIP. Browser fixture tests do not emulate Ghost’s membership services.
- Commit, push, tag, and publish only within the user’s requested scope. A cleanup request alone does not require publishing a release or deploying a blog.

`GhostThemeDocs/` contains historical documentation snapshots; consult [current official docs](https://docs.ghost.org/themes/) for API changes. `Ghost Theme designs/` contains early visual explorations, not screenshots of the shipped theme.
