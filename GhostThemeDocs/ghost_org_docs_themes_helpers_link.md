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

Usage: `{{#link href="/about/"}}About{{/link}}`

### Description

`{{#link}}` is a block helper that creates links with dynamic classes. In its basic form it will create an anchor element that wraps around any kind of string, HTML or handlebars constructed HTML.

With additional options it can have an active `class` or `target` behaviour, or `onclick` JavaScript events. A `href` attribute must be included or an error will be thrown.

## Simple example

```handlebars
{{#link href="/about/"}}..linked content here..{{/link}}

Will output:

<a href="/about/">..linked content here..</a>

```

All attributes associated with the `<a></a>` element can be used in `{{#link}}`. Check out the MDN documentation on [the anchor element for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a).

## Variables

Handlebars variables can be used for attribute values as well as strings. Variables do not need be wrapped with quotations:

### Simple variables example

```handlebars
{{#link href=@site.url}}Home{{/link}}

```

### Advanced variables example

```handlebars
{{#foreach posts}}
  {{#link href=(url) class="post-link" activeClass="active"}}
    {{title}}
  {{/link}}
{{/foreach}}

```

## Dynamic attributes

### `activeClass`

By default the active class outputted by `{{#link}}` will be `nav-current`, this is consistent with our [navigation helper](https://ghost.org/docs/themes/helpers/navigation/). However it can be overwritten with the `activeClass` attribute:

### `activeClass` Example

```handlebars
{{#link href="/about/" activeClass="current"}}About{{/link}}

When on the "/about/" URL it will output:

<a href="/about/" class="current">About</a>

```

`activeClass` can also be given `false` value ( `activeClass=false`), which will output an empty string. Effectively turning off the behaviour.

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