# Purple Haze - Ghost Theme

A dark, minimalist Ghost theme with purple accents, designed for personal blogs and publications. This theme is based on the Ghost Starter Theme framework.

&nbsp;

## Features

- Dark, modern aesthetic with configurable purple accents.
- Responsive design for optimal viewing on all devices.
- Customizable tag colors and featured post overlay via Ghost Admin settings.
- Translation support (English & Polish included).
- Built using modern web development tools (Rollup, PostCSS).
- Includes standard Ghost theme features like member support, comments, etc.

&nbsp;

## First time using a Ghost theme?

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/) for its themes.

We've documented this starter theme pretty heavily so that it should be possible to work out what's going on just by reading the code and the comments. We also have a robust set of resources to help you build awesome custom themes:

- The official [theme documentation](https://ghost.org/docs/themes) is the complete resource for everything you need to know about Ghost theme development
- [Tutorials](https://ghost.org/tutorials/) offer a step-by-step guide to building the most common features in Ghost themes
- The [Ghost VS Code extension](https://marketplace.visualstudio.com/items?itemName=TryGhost.ghost) speeds up theme development and provides quick access to helpful info
- All of Ghost's official themes are [open source](https://github.com/tryghost) and are a great reference for learning how to create a theme

&nbsp;

## Theme structure

The main files are:

- [`default.hbs`](default.hbs) - The main template file
- [`index.hbs`](index.hbs) - Used for the home page
- [`post.hbs`](post.hbs) - Used for individual posts
- [`page.hbs`](page.hbs) - Used for individual pages
- [`tag.hbs`](tag.hbs) - Used for tag archives
- [`author.hbs`](author.hbs) - Used for author archives

One neat trick is that you can also create custom one-off templates just by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for the `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-jamie.hbs` - Custom template for `/author/jamie/` archive

&nbsp;

## Development guide

This theme provides a first-class development experience out of the box.

&nbsp;

### Setup

To see realtime changes during development, symlink the theme folder to the `content/themes` folder in your local Ghost install. Replace `purple-haze` with the actual theme folder name if different.

```bash
ln -s /path/to/Purple-Haze-Ghost-Theme /ghost/content/themes/purple-haze
```

Restart Ghost and select the Purple Haze theme from **Settings**.

From the theme's root directory, install the dependencies:

```bash
npm install
```

If Node isn't installed, follow the [official Node installation guide](https://nodejs.org/).

&nbsp;

### Start development mode

From the theme folder, start development mode:

```bash
npm run dev
```

Changes you make to your styles, scripts, and Handlebars files will show up automatically in the browser. CSS and Javascript will be compiled and output to the `built` folder.

Press `ctrl + c` in the terminal to exit development mode.

&nbsp;

### Build, zip, and test your theme

Compile your CSS and JavaScript assets for production with the following command:

```bash
npm run build
```

Create a zip archive:

```bash
npm run zip
```

Use `gscan` to test your theme for compatibility with Ghost:

```bash
npm run test
```

&nbsp;

## Development Notes (AI & Human)

This theme is actively developed with the assistance of AI agents. Key learnings, best practices, and specific implementation details discovered during development are documented in `AI_AGENT_NOTES.md`. Both human and AI developers should consult this file before making significant changes to understand the established patterns and avoid reintroducing previously fixed issues.

Key areas covered include:
- Release workflow (versioning, building, tagging, GitHub releases)
- Handling custom theme settings and CSS variables
- Translation implementation details
- Card structure and link behavior (image, title, tags, read more)
- Conditional styling using Ghost context helpers

&nbsp;

## Copyright & License

Copyright (c) 2025 Adam Piotrowski - Based on Ghost Starter Theme (Copyright (c) 2013-2025 Ghost Foundation) - Released under the [MIT license](LICENSE).
