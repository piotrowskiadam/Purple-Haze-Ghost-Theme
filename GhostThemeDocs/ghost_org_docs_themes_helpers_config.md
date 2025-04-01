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

The `@config` property provides access to global data properties, which are available anywhere in your theme.

Specifically `@config` will pass through the special theme config that is added in the theme’s `package.json` so that it can be used anywhere in handlebars.

At the moment, there is only one property which will be passed through, as all other [properties](https://ghost.org/docs/themes/structure/#additional-properties) are accessed with their own helpers.

- `{{@config.posts_per_page}}` – the number of posts per page

### Example Code

Standard usage:

```handlebars
<a href="{{page_url "next"}}">Show next {{@config.posts_per_page}} posts</a>

```

In the get helper limit field:

```handlebars
{{#get "posts" filter="featured:true" limit=@config.posts_per_page}}
  {{#foreach posts}}
      <h1>{{title}}</h1>
	{{/foreach}}
{{/get}}

```

### Providing config

Config values can be provided by adding a `config` block to package.json

```json
{
  "name": "my-theme",
  "version": 1.0.0,
  "author": {
    "email": "my@address.here"
  }
  "config": {
  }
}

```

There are currently four properties supported:

- `config.posts_per_page` — the default number of posts per page is 5
- `config.image_sizes` — see the [assets](https://ghost.org/docs/themes/assets/) guide for more details on responsive images
- `config.card_assets` — configure the [card CSS and JS](https://ghost.org/docs/themes/content/#editor-cards) that Ghost automatically includes
- `config.custom` \- add [custom settings](https://ghost.org/docs/themes/custom-settings/) to your theme

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