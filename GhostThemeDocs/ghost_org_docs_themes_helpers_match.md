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

Usage: `{{#match @custom.color_scheme "=" "Dark"}} class="dark-mode"{{/match}}`

### Description

`{{#match}}` allows for simple comparisons, and executing different template blocks depending on the outcome.

Like all block helpers, `{{#match}}` supports adding an `{{else}}` block or using `^` instead of `#` for negation - this means that the `{{#match}}` and `{{else}}` blocks are reversed if you use `{{^match}}` and `{{else}}` instead. In addition, it is possible to do `{{else match ...}}`, to chain together multiple options like a switch statement.

### Operators

#### Equality

`match` supports comparing values for equality, which is the default behaviour:

```handlebars
{{#match @custom.color_scheme "=" "Dark"}}...{{else}}...{{/match}}

{{!-- Can be shortened to: --}}
{{#match @custom.color_scheme "Dark"}}...{{else}}...{{/match}}

```

The equality test can also be negated:

```handlebars
{{#match @custom.color_scheme "!=" "Dark"}}...{{else}}...{{/match}}

```

#### Numeric comparisons

The match handler supports >, <, >= and <= operators for numeric comparisons.

```handlebars
{{#match posts.length ">" 1}}...{{else}}...{{/match}}

```

#### Evaluation rules

Values passed to `match` are tested according to their _value_ as well as their _type_. For example:

```handlebars
{{!-- Returns true/false --}}
{{#match feature_image true}}...{{else}}...{{/match}}

{{!-- Always returns false --}}
{{#match feature_image 'true'}}...{{else}}...{{/match}}

```

`match` can also be used to test boolean values similar to `if`:

```handlebars
{{!-- Default behaviour is to test if a value is truthy --}}
{{#match featured}}...{{else}}...{{/match}}

```

### Example code

The `match` helper is extremely useful when combined with [Custom settings](https://ghost.org/docs/themes/custom-settings/) using `@custom`:

```handlebars
{{!-- Adds the 'font-alt' class when the Typography setting is set to 'Elegant serif' --}}
<body class="{{body_class}} {{#match @custom.typography "Elegant serif"}}font-alt{{/match}}">

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