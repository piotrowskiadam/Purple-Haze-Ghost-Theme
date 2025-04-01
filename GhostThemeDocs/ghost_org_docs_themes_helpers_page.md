Common searches

- [how to set up my custom domain](https://ghost.org/help/using-custom-domains/)
- [how to install ghost](https://ghost.org/docs/install/)
- [login not working, how to reset password](https://ghost.org/help/how-do-i-reset-my-password/)
- [cloudflare setup and config](https://ghost.org/help/cloudflare-domain-setup/)
- [how to make a ghost theme](https://ghost.org/docs/themes/)

[Developer docs](https://ghost.org/docs/)

Quick-search for anything

⌘F

[5.101.6](https://github.com/tryghost/ghost/)

The `@page` object provides access to page properties, which are available anywhere in your theme.

- `@page.show_title_and_feature_image` \- true (default) or false value from Ghost Editor

This toggle, only available for pages, lets users hide a page’s title and feature image to create pages that look radically different than posts (for example, full-width headers, CTAs, and landing pages).

This setting is only available when using the [new Beta editor](https://ghost.org/changelog/editor-beta/). However, since the `@page.show_title_and_feature_image` is always present and defaults to `true`, supporting this feature in your theme won’t break anything for anyone using the old editor.

Using the `@page` object is **not backward-compatible** with earlier versions of Ghost: once implemented the theme will only be compatible with Ghost 5.54.1 or later.

## Example code

```handlebars
{{#match @page.show_title_and_feature_image}}
...content...
{{/match}}

```

## Styling tips when hiding the title and feature image

1. Whenever the page title and feature image are hidden, and the page content starts with a full-width card (such cards will have the class `.kg-width-full`), remove spacing between the top navigation and content (on pages only).
2. Whenever multiple full-width cards are stacked, remove spacing between them (on posts and pages).
3. Whenever content ends with a full-width card, remove spacing between the content and the footer (on pages only, posts often have additional content at the bottom such as comments, CTAs, related posts, etc.).

As a reminder, cards that have the ability to be set to full width are header cards, signup cards, image cards, and video cards. When an image or video has a caption, it will have the class `.kg-card-hascaption`, and maintaining spacing is desirable in this case.

The implementation of these changes will look different on every theme. Find examples of these recommended changes in Casper [here](https://github.com/TryGhost/Casper/commit/d9c9390e17c1df1322ebfec774886058a56a0891) (1 and 3) and [here](https://github.com/TryGhost/Casper/blob/a60e3e976a341df462ba948d395bc52c37faffa4/assets/css/screen.css#L1345-L1348) (2).

## Launch your site

Last week, 6,707 brand new

publications got started with Ghost.

Today, it's your turn.

[Start a free trial now →](https://account.ghost.org/signup/)

Star tryghost/ghost on GitHub[Star](https://github.com/tryghost/ghost) [48,816](https://github.com/tryghost/ghost/stargazers)

Product

- [Creator platform](https://ghost.org/)
- [Theme marketplace](https://ghost.org/marketplace/)
- [Integrations](https://ghost.org/integrations/)
- [Experts](https://ghost.org/experts/)
- [Ghost for news](https://ghost.org/news/)

Developers

- [How to install Ghost](https://ghost.org/docs/install/)
- [Core concepts](https://ghost.org/docs/)
- [Ghost hosting](https://ghost.org/pricing/)
- [API documentation](https://ghost.org/docs/content-api/)
- [Security overview](https://ghost.org/docs/security/)
- [Source code](https://github.com/TryGhost/Ghost)

Resources

- [Ghost tutorials](https://ghost.org/tutorials/)
- [Resources](https://ghost.org/resources/)
- [Node.js CMS guide](https://nodecms.guide/)
- [Open Subscription Platforms](https://opensubscriptionplatforms.com/)

Comparisons

- [Ghost vs Substack](https://ghost.org/vs/substack/)
- [Ghost vs WordPress](https://ghost.org/vs/wordpress/)
- [Ghost vs Medium](https://ghost.org/vs/medium/)
- [Ghost vs Memberful](https://ghost.org/vs/memberful/)
- [Ghost vs Patreon](https://ghost.org/vs/patreon/)
- [Ghost alternatives →](https://ghost.org/alternatives/)

Support

- [Help center](https://ghost.org/help/)
- [Community forum](https://forum.ghost.org/)
- [Status  \\
Triangle\\
\\
99.9%](https://status.ghost.org/)

[![Non-Profit Foundation](https://ghost.org/images/logos/indie.svg)](https://ghost.org/about/)[![Open Source](https://ghost.org/images/logos/opensource.svg)](https://github.com/tryghost)[![Carbon Neutral](https://ghost.org/images/logos/carbonneutral.svg)](https://climate.stripe.com/6MNofu)