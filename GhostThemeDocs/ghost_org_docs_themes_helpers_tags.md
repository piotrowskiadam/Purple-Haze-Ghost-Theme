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

Usage: `{{tags}}` or `{{#foreach tags}}{{/foreach}}` in `tag.hbs` you can use `{{#tag}}{{/tag}}` to access tag properties

### Description

`{{tags}}` is a formatting helper for outputting a linked list of tags for a particular post. It defaults to a comma-separated list (without list markup) but can be customised to use different separators, and the linking can be disabled. The tags are output in the order they appear on the post, these can be reordered by dragging and dropping.

The `{{tags}}` helper does not output internal tags. This can be changed by passing a different value to the `visibility` attribute.

You can use the [translation helper](https://ghost.org/docs/themes/helpers/translate/) for the `prefix` and `suffix` attribute.

### Example code

The basic use of the tags helper will output something like ‘my-tag, my-other-tag, more-tagging’ where each tag is linked to its own tag page:

```handlebars
{{tags}}

```

You can customise the separator between tags. The following will output something like ‘my-tag \| my-other-tag \| more tagging’

```handlebars
{{tags separator=" | "}}

```

Additionally you can add an optional prefix or suffix. This example will output something like ‘Tagged in: my-tag \| my-other-tag \| more tagging’

```handlebars
{{tags separator=" | " prefix="Tagged in:"}}

```

You can use HTML in the separator, prefix and suffix arguments. So you can achieve something like ‘my-tag • my-other-tag • more tagging’.

```handlebars
{{tags separator=" &bull; "}}

```

If you don’t want your list of tags to be automatically linked to their tag pages, you can turn this off:

```handlebars
{{tags autolink="false"}}

```

If you want to output a fixed number of tags, you can add a `limit` to the helper. E.g. adding a limit of 1 will output just the first tag:

```handlebars
{{tags limit="1"}}

```

If you want to output a specific range of tags, you can use `from` and `to` either together or on their own. Using `to` will override the `limit` attribute.

E.g. using from=“2” would output all tags, but starting from the second tag:

```handlebars
{{tags from="2"}}

```

E.g. setting both from and to to `1` would do the same as limit=“1”

`{{tags from="1" to="1"}}` is the same as `{{tags limit="1"}}`

## The `visibility` attribute

As of Ghost 0.9 posts, tags and users all have a concept of `visibility`, which defaults to `public`. The key feature build on this so far is Internal Tags, which are tags where the `visibility` is marked as `internal` instead of `public`. These tags will therefore not be output by the `{{tags}}` helper unless you specifically ask for them.

By default the `visibility` attribute is set to the string “public”. This can be overridden to pass any other value, and if there is no matching value for `visibility` nothing will be output. E.g. you can set `visibility` to be “internal” to _only_ output internal tags. You can also pass a comma-separated list of values, or the value “all” to output all items.

```handlebars
{{tags visibility="all"}}

```

### Advanced example

If you want to output your tags completely differently, you can fully customise the output by using the foreach helper, instead of the tags helper. Here’s an example of how to output list markup:

```handlebars
{{#post}}
  {{#if tags}}
    <ul>
    {{#foreach tags}}
      <li>
        <a href="{{url}}" title="{{name}}" class="tag tag-{{id}} {{slug}}">{{name}}</a>
      </li>
    {{/foreach}}
    </ul>
  {{/if}}
{{/post}}

```

### List of Attributes

- **id** \- the incremental ID of the tag
- **name** \- the name of the tag
- **slug** \- slugified version of the name (used in urls and also useful for class names)
- **description** \- a description of the tag
- **feature\_image** \- the cover image for the tag
- **meta\_title** \- the tag’s meta title
- **meta\_description** \- the tag’s meta description
- **url** \- the web address for the tag’s page
- **accent\_color** \- the accent color of the tag

## primary\_tag

To output only the singular, first tag, use the `{{primary_tag.name}}`. You can also access all the same attributes in the object as above if you need more custom output.

```handlebars
{{#primary_tag}}
<div class="primary-tag">
    <a href="{{url}}">{{name}}</a>
    <span class="description">{{description}}</span>
<div>
{{/primary_tag}}

```

### Tag objects

In similar fashion to `primary_tag`, single subsequent tags can be outputted using `{{tags.[1].name}}`. Tags can be referenced using a 0 indexed array, for example using `tags.[1]` will reference the second tag (the tag immediately after `primary_tag`). All the attributes on the tag can be accessed as well.

```handlebars
{{#tags.[1]}}
    <div class="secondary-tag">
        <a href="{{url}}">{{name}}</a>
        <span class="description">{{description}}</span>
    <div>
{{/tags.[1]}}

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