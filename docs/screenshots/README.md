# Theme previews

These screenshots depict **Nightfall Journal**, a fictional publication rendered from the repository’s current v1.5.1 Handlebars templates and built CSS/JavaScript. The article titles, author, and editorial copy are illustrative. The SVG cover artwork in `demo-assets/` was created for these previews and is included under the repository’s MIT license.

The renderer uses the same small fixture adapter as the browser regression tests, with a separate English demo dataset in `tests/demo-content.mjs`. It is not a running Ghost installation or a hosted demo. No content or imagery from piotrowskiadam.pl is used in the screenshots.

To regenerate after editing the theme:

```bash
npm ci
npx playwright install chromium
npm run build
npm run screenshots
```

The capture script writes the desktop and mobile homepage PNGs here, the article PNG here, and the desktop/mobile JPEG previews referenced by `package.json` into `assets/`. It checks image loading, page errors, viewport overflow, publication title, and generated article navigation before completing. Run `npm run zip` afterward to refresh the distributable.
