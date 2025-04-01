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

Usage: `{{tiers}}` / `{{tiers prefix=":" separator=" - " lastSeparator=", " suffix='options'}}`

### Description

`{{tiers}}` is a formatting helper for outputting tier names. It defaults to a comma-separated list with `and` as the last separator and `tier(s)` as the suffix. Customize the helper by using a custom prefix, separator, last separator, and/or suffix. Note that values are white-space sensitive.

### Example code

Use the tiers helper to output tier names in ascending order by price. The examples below use tier names of “bronze,” “silver,” and “gold.”

```handlebars
{{tiers}}
{{! output: "bronze, silver and gold tiers" }}

```

#### Custom prefix

Use a custom prefix to add text before tier names.

```handlebars
{{tiers prefix="Access with:"}}
{{! output: "Access with: bronze, silver and gold tiers" }}

```

#### Custom separator

Use a custom separator to change the text between tier names.

```handlebars
{{tiers separator=" | "}}
{{! output: "bronze | silver and gold tiers" }}

```

#### Custom last separator

With multiple tiers, customize the last separator.

```handlebars
{{tiers lastSeparator=" plus "}}
{{! output: "bronze, silver plus gold tiers" }}

```

#### Custom suffix

Change the term “tier” with a custom suffix.

```handlebars
{{tiers suffix="options"}}
{{! output: "bronze, silver and gold options" }}

```

#### HTML values

`separator`, `prefix` , `lastSeparator`, and `suffix` accept HTML values.

```handlebars
{{tiers separator=" &bull; "}}
{{! output: "bronze • silver and gold tiers }}

```

## Fetching tiers with the `{{\#get}}` helper

`{{tiers}}` helps with _formatting_ your tier names. To fetch tier data, use the `{{#get}}` helper.

```handlebars
{{! Get all tiers with monthly price, yearly price, and benefits data }}
{{#get "tiers" include="monthly_price,yearly_price,benefits" limit="all" as |tiers|}}
    {{! Loop through our tiers collection }}
    {{#foreach tiers}}
        {{name}}
        {{#if monthly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly – {{price monthly_price currency=currency}}</a>
            </div>
        {{/if}}
        {{#if benefits}}
            {{#foreach benefits as |benefit|}}
                {{benefit}}
            {{/foreach}}
        {{/if}}
    {{/foreach}}
{{/get}}

```

See our [{{#get}} helper docs](https://ghost.org/docs/themes/helpers/get/) to learn more about using this helper with tiers.

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