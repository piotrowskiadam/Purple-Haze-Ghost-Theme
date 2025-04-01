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

Usage: `{{img_url value}}`

### Description

The img url helper outputs the correctly calculated URL for the provided image property.

You **must** tell the `{{img_url}}` helper which image you would like to output. For example, to output a URL for a post’s feature image inside of post.hbs, use `{{img_url feature_image}}`.

Force the image helper to output an absolute URL by using the absolute option: `{{img_url profile_image absolute="true"}}`. This is almost never needed.

To output the image in question at a resized resolution based on your theme config, pass in [dynamic image sizes](https://ghost.org/docs/themes/responsive-images/) via the `size` option.

Convert an image to a different image format ( `webp`, `avif`, `png`, `jpg`, `jpeg`, or `gif`) by using the `format` option. (This only works in combination with the `size` option.)

## Example code

Below is a set of examples of how to output various images that belong to posts, authors, or keywords:

```handlebars
{{#post}}

  {{!-- Outputs post's feature image if there is one --}}
  {{#if feature_image}}
      <img src="{{img_url feature_image}}">
  {{/if}}

  {{!-- Output feature image at small size from theme package.json --}}
  <img src="{{img_url feature_image size="small"}}">

  {{!-- Output feature image at small size, formatted as a WebP image (size is required) --}}
  <img src="{{img_url feature_image size="small" format="webp"}}">

  {{!-- Output post author's profile image as an absolute URL --}}
  <img src="{{img_url author.profile_image absolute="true"}}">

  {{!-- Open author context instead of providing full path --}}
  {{#author}}
      <img src="{{img_url profile_image}}">
  {{/author}}

{{/post}}

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