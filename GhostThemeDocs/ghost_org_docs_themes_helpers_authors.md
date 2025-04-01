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

Usage: `{{authors}}`

### Description

`{{authors}}` is a formatting helper for outputting a linked list of authors for a particular post. It defaults to a comma-separated list (without list markup) but can be customised to use different separators, and the linking can be disabled. The authors are output in the order they appear on the post, these can be reordered by dragging and dropping.

You can use the [translation helper](https://ghost.org/docs/themes/helpers/translate/) for the `prefix` and `suffix` attribute.

### Example code

The basic use of the authors helper will output something like ‘sam, carl, tobias’ where each author is linked to its own author page:

```handlebars
{{authors}}

```

You can customise the separator between authors. The following will output something like ‘sam \| carl \| tobias’

```handlebars
{{authors separator=" | "}}

```

Additionally you can add an optional prefix or suffix. This example will output something like ‘More about: sam, carl, tobias’.

```handlebars
{{authors separator=" | " prefix="More about:"}}

```

You can use HTML in the separator, prefix and suffix arguments. So you can achieve something like ‘sam • carl • tobias’.

```handlebars
{{authors separator=" &bull; "}}

```

If you don’t want your list of authors to be automatically linked to their author pages, you can turn this off:

```handlebars
{{authors autolink="false"}}

```

If you want to output a fixed number of authors, you can add a `limit` to the helper. E.g. adding a limit of 1 will output just the first author:

```handlebars
{{authors limit="1"}}

```

If you want to output a specific range of authors, you can use `from` and `to` either together or on their own. Using `to` will override the `limit` attribute.

E.g. using from=“2” would output all authors, but starting from the second author:

```handlebars
{{authors from="2"}}

```

E.g. setting both from and to to `1` would do the same as limit=“1”

`{{authors from="1" to="1"}}` is the same as `{{authors limit="1"}}`

## The `visibility` attribute

As of Ghost 0.9 posts, tags and users all have a concept of `visibility`, which defaults to `public`.

By default the `visibility` attribute is set to the string “public”. This can be overridden to pass any other value, and if there is no matching value for `visibility` nothing will be output. You can also pass a comma-separated list of values, or the value “all” to output all items.

```handlebars
{{authors visibility="all"}}

```

### Advanced example

If you want to output your authors completely differently, you can fully customise the output by using the foreach helper, instead of the authors helper. Here’s an example of how to output list markup:

```handlebars
{{#post}}
  {{#if authors}}
    <ul>
    {{#foreach authors}}
      <li>
        <a href="{{url}}" title="{{name}}" class="author author-{{id}} {{slug}}">{{name}}</a>
      </li>
    {{/foreach}}
    </ul>
  {{/if}}
{{/post}}

```

### List of author attributes

- **id** \- the incremental ID of the author
- **name** \- the name of the author
- **slug** \- slugified version of the name (used in urls and also useful for class names)
- **bio** \- a bio of the author
- **website** \- the website of the author
- **location** \- the location of the author
- **twitter** \- the author’s twitter username
- **facebook** \- the author’s facebook username
- **profile\_image** \- the profile image for the author
- **cover\_image** \- the cover image for the author
- **meta\_title** \- the tag’s meta title
- **meta\_description** \- the tag’s meta description
- **url** \- the web address for the tag’s page

## primary\_author

To output just the singular, first author, use the `{{primary_author}}` helper to output a simple link. You can also access all the same attributes as above if you need more custom output.

```handlebars
{{#primary_author}}
<div class="author">
    <a href="{{url}}">{{name}}</a>
    <span class="bio">{{bio}}</span>
</div>
{{/primary_author}}

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