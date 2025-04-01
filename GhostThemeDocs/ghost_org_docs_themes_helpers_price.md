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

Usage: `{{price plan}}`

### Description

The `{{price}}` helper formats monetary values from their smallest denomination to a human readable denomination with currency formatting. Example:

```handlebars
{{price plan}}

```

This will output `$5`.

The `{{price}}` helper accepts a number of optional attributes:

- `currency` \- defaults to `plan.currency` when passed a `plan` object
- `locale` \- defaults to `@site.locale`
- `numberFormat` \- defaults to “short”, and can be either “short” ($5) or “long” ($5.00)
- `currencyFormat` \- defaults to “symbol” and can be one of “symbol” ($5), “code” (EUR 5) or “name” (5 euros)

`{{price}}` can be used with static values as well, `{{price 4200}}` will output `42`.

The default behaviour of the `price` helper is the same as:

```handlebars
{{price plan.amount
  currency=plan.currency
  locale=@site.locale
  numberFormat="short"
  currencyFormat="symbol"
}}

```

Passing a `currency` without a price will output the symbol for that currency:

```handlebars
{{price currency="USD"}} <!-- Outputs: $ -->

```

### Example Code

Outputting prices for all tiers.

```handlebars
{{#get "tiers" include="monthly_price,yearly_price,benefits" limit="all" as |tiers|}}
    {{! Loop through our tiers collection }}
    {{#foreach tiers}}
        {{#if monthly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly – {{price monthly_price currency=currency}}</a>
            </div>
        {{/if}}
          {{#if yearly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly – {{price yearly_price currency=currency}}</a>
            </div>
        {{/if}}

    {{/foreach}}
{{/get}}

```

Outputting prices for a member’s subscriptions.

```html
<!-- account.hbs -->

{{#foreach @member.subscriptions}}
  <div class="subscription">
    <label class="subscriber-detail-label">Your plan</label>
    <span class="subscriber-detail-content">{{price plan}}/{{plan.interval}}</span>
  </div>
{{/foreach}}

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