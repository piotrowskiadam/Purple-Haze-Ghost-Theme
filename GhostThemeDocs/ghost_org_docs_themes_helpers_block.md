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

Usage: `{{{block "section"}}}` and `{{#contentFor "section"}} content {{/contentFor}}`

## Description

`{{{block "block-name"}}}` is a helper for creating a placeholder within a custom handlebars template. Adding the helper along with a unique ID creates a slot within the template, which can be optionally filled when the template is inherited by another template file.

The `{{#contentFor "block-name"}}...{{/contentFor}}` helper is used to access and populate the block definitions within the template that’s being inherited. The inherited template is referenced with `{{!< template-name}}` at the top of the file. If the `contentFor` is not used then the block will be gracefully skipped.

### Example

```handlebars
<!-- default.hbs -->

<body>
    <!-- ... -->
    {{{block "scripts"}}}
</body>

```

* * *

```handlebars
<!-- page.hbs -->

{{!< default}}

{{#contentFor "scripts"}}
    <script>
        runPageScripts();
    </script>
{{/contentFor}}

```

## `{{{body}}}` helper

The `{{{body}}}` helper behaves in a similar fashion to a defined block helper, but doesn’t require a corresponding `contentFor` helper in the inheriting template file.

### `{{{body}}}` example

```handlebars
<!-- default.hbs -->

<div class="site-wrapper">
    {{{body}}}
    <!-- ... -->
</div>

```

* * *

```handlebars
<!-- post.hbs -->

{{!< default}}

<section class="post-full-content">
    <div class="post-content">
        {{content}}
    </div>
</section>

```

Inherited template files, files that contain `{{{block "block-name"}}}`, cannot be templates used directly by Ghost. `post.hbs`, `page.hbs` `index.hbs` can inherit other template files and used the `contentFor` helper but cannot contain block definitions. See our [theme structure documentation](https://ghost.org/docs/themes/structure/#templates) for more information.

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