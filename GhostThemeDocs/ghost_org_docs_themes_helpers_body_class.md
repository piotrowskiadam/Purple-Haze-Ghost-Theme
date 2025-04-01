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

Usage: `{{body_class}}`

### Description

`{{body_class}}` – outputs dynamic CSS classes intended for the `<body>` tag in your `default.hbs` or other layout file, and is useful for targeting specific pages (or contexts) with styles.

The `{{body_class}}` helper outputs different classes on different pages, depending on what context the page belongs to. For example the home page will get the class `.home-template`, but a single post page would get `.post-template`.

Ghost provides a series of both static and dynamic `body_class` classes:

#### Static classes

- `home-template` – The class applied when the template is used for the home page
- `post-template` – The class applied to all posts
- `page-template` – The class applied to all pages
- `tag-template` – The class applied to all tag index pages
- `author-template` – The class applied to all author pages
- `private-template` – The class applied to all page types when password protected access is activated

#### Dynamic classes

- `page-{slug}` – A class of `page-` plus the page slug added to all pages
- `tag-{slug}` – A class of `tag-` plus the tag page slug added to all tag index pages
- `author-{slug}` – A class of `author-` plus the author page slug added to all author pages

### Examples

```handlebars
<!-- default.hbs -->

<html>
    <head>...</head>
    <body class="{{body_class}}">
    ...
    {{{body}}}
    ...
    </body>
</html>

```

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