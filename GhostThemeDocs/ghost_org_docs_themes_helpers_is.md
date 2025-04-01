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

Usage: `{{#is "contexts"}}`

### Description

The `{{#is}}` helper allows you to check the context of the current route, i.e. is this the home page, or a post, or a tag listing page. This is useful when using shared partials or layouts, to output slightly different context in different places on your theme.

### Usage

The `is` helper takes a single parameter of a comma-separated list containing the contexts to check for. Similar to the `has` helper, the comma behaves as an `or` statement, with `and` being achieved by nesting helpers.

```handlebars
{{#is "post, page"}}
   ... content to render if the current route represents a post or a page ...
{{/is}}

```

As with all block helpers, it is possible to use an else statement:

```handlebars
{{#is "home"}}
  ... output something special for the home page ...
{{else}}
  ... output something different on all other pages ...
{{/is}}

```

If you only want the reverse, or negation, you can use the `^` character:

```handlebars
{{^is "paged"}}
 ...if this is *not* a 2nd, 3rd etc page of a list...
{{/is}}

```

### Contexts

The following contexts are supported:

- **home** \- true only on the home page
- **index** \- true for the main post listing, including the home page
- **post** \- true for any individual post page, where the post is not a static page
- **page** \- true for any static page
- **tag** \- true for any page of the tag list
- **author** \- true for any page of the author list
- **paged** \- true if this is page 2, page 3 of a list, but not on the first page
- **private** \- true if this is the private page shown for password protected sites

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