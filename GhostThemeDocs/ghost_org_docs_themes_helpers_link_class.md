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

Usage: `{{link_class for="/about/"}}`

### Description

The `{{link_class}}` helper adds dynamic classes depending on the currently viewed page. If the page slug (e.g. `/about/`) matches the value given to the `for` attribute the helper will output a `nav-current` class. A `for` value must be provided.

## Simple example

```html
<li class="nav {{link_class for="/about/"}}">About</li>

When on the "/about/" URL it will output:

<li class="nav nav-current">About</li>

By default it will output:

<li class="nav ">About</li>

```

### `activeClass`

By default the active class outputted by `{{link_class}}` will be `nav-current`, this is consistent with our [navigation helper](https://ghost.org/docs/themes/helpers/navigation/). However it can be overwritten with the `activeClass` attribute:

```html
<li class="nav {{link_class for="/about/" activeClass="active"}}">About</li>

Will output:

<li class="nav active">About</li>

```

`activeClass` can also be given `false` value ( `activeClass=false`), which will output an empty string. Effectively turning off the behaviour.

### `class`

Optionally `{{link_class}}` can have additional active classes. Using the `class` attribute will add whatever value has been provided when the link is the active URL, `nav-current` (the default active class value) will be added last:

```html
<li class="nav {{link_class for="/about/" class="current-about"}}">About</li>

Will output:

<li class="nav current-about nav-current">About</li>

```

## Parent URLs

Not only can `{{link_class}}` add active classes to current URLs, but it can also apply classes to parent URLs. If a user navigates to `/tags/toast/` then `{{link_class}}` can provide an active class to `/tags/` as well as `/tags/toast/`.

### Example

```html
<li class="nav {{link_class for="/tags/"}}">Tags</li>

When on the "/tags/" URL it will output:

<li class="nav nav-current">Tags</li>

When on the "/tags/toast/" URL it will output:

<li class="nav nav-parent">Tags</li>

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