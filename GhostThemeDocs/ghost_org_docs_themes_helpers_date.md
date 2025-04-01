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

Usage: `{{date value format="formatString"}}`

### Description

`{{date}}` is a formatting helper for outputting dates in various formats. You can either pass it a date and a format string to be used to output the date like so:

```handlebars
<!-- outputs something like 'July 11, 2016' -->
{{date published_at format="MMMM DD, YYYY"}}

```

See the [Moment.js Display tokens](https://momentjs.com/docs/#/displaying/format/) for more options.

Timezone and locale may be overridden from your site’s defaults by passing the `timezone` and `locale` parameters:

```handlebars
<!-- outputs something like 'mar., 31 déc. 2013 22:58:58 +0100' -->
{{date published_at locale="fr-fr" timezone="Europe/Paris"}}

```

Or you can pass it a date and the `timeago` flag:

```handlebars
<!-- outputs something like '5 mins ago' -->
{{date published_at timeago="true"}}

```

If you use the `timeago` flag on a site that uses caching - as on [Ghost(Pro)](https://ghost.org/pricing/) \- dates will be displayed relative to when the page gets cached rather than relative to the visitor’s current time.

If you call `{{date}}` without a format, it will default to a short localised format, `ll`.

If you call `{{date}}` without telling it which date to display, it will default to one of two things:

1. If there is a `published_at` property available (i.e. you’re inside a post object) it will use that
2. Otherwise, it will default to the current date

`date` uses moment.js for formatting dates. See their documentation for a full explanation of all the different format strings that can be used.

### Example Code

```handlebars
<main role="main">
  {{#foreach posts}}
    <h2><a href="{{url}}">{{title}}</a></h2>

   <p>{{excerpt words="26"}}</p>

    {{!-- Here `published_at` is set, so this will show the article date --}}
    <time datetime="{{date format="YYYY-MM-DD"}}">{{date format="DD MMMM YYYY"}}</time>
  {{/foreach}}
</main>
<footer>
  {{!-- Here there is no `published_at` so this will show the current year --}}
  <p class="small">&copy; {{date format="YYYY"}}</p>
</footer>

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