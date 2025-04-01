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

Ghost themes support automatic image resizing, allowing you to use a minimal handlebars helper to output different image sizes.

Ghost automatically compresses and resizes images added to your post content and generates automatic responsive assets for maximum performance.

For all other images, such as feature images and theme images, the responsive images feature builds responsive image srcsets into your theme, and displays scaled down images when required to improve your site’s overall performance.

## Responsive images configuration

Responsive images can be defined in the `package.json` file. Ghost automatically generates copies of images at the specified sizes, and works like a cache, so the image sizes can be changed at any time. It’s recommended to have no more than 10 image sizes so media storage doesn’t grow out of control.

Here’s a sample of [the image sizes in Ghost’s default Casper theme](https://github.com/TryGhost/Casper/blob/main/package.json).

```json
// package.json

"config": {
    "image_sizes": {
        "xxs": {
            "width": 30
        },
        "xs": {
            "width": 100
        },
        "s": {
            "width": 300
        },
        "m": {
            "width": 600
        },
        "l": {
            "width": 1000
        },
        "xl": {
            "width": 2000
        }
    }
}

```

### Using image sizes

Once image sizes are defined, pass a `size` parameter to the [{{img\_url}}](https://ghost.org/docs/themes/helpers/img_url/) helper in your theme to output an image at a particular size.

```handlebars
<img src="{{img_url feature_image size="s"}}">

```

To build [full responsive images](https://medium.freecodecamp.org/a-guide-to-responsive-images-with-ready-to-use-templates-c400bd65c433) create html srcsets passing in multiple image sizes, and let the browser do the rest.

Here’s an [example from Ghost default Casper theme](https://github.com/TryGhost/Casper/blob/main/partials/post-card.hbs) implementation:

```handlebars
<!-- index.hbs -->

<img class="post-image"
    srcset="{{img_url feature_image size="s"}} 300w,
            {{img_url feature_image size="m"}} 600w,
            {{img_url feature_image size="l"}} 1000w,
            {{img_url feature_image size="xl"}} 2000w"
    sizes="(max-width: 1000px) 400px, 700px"
    src="{{img_url feature_image size="m"}}"
    alt="{{#if feature_image_alt}}{{feature_image_alt}}{{else}}{{title}}{{/if}}"
/>

```

### Converting images to smaller image types

Pass a `format` parameter to the [{{img\_url}}](https://ghost.org/docs/themes/helpers/img_url/) helper in your theme to output an image in a particular image format. This only works in combination with the `size` parameter.

```handlebars
{{img_url feature_image size="s" format="webp"}}

```

By converting an image from PNG, GIF, or JPEG to WebP, you can reduce its size by ~25% without any visible loss of quality. An even better image compression can be obtained with the AVIF format, but this [isn’t supported in all browsers](https://caniuse.com/avif) (and doesn’t support animation yet).

_Note that while image conversion changes the file type, the file extension stays the same. For example, an AVIF image will retain the `.jpg` extension._

WebP is supported by all modern browsers, but we recommend to always add a fallback to the original file type to achieve wider browser support. Use a `<picture>` tag for this, which allows the browser to choose the first format it supports:

```handlebars
<picture>
    <!-- Serve the AVIF format if the browser supports it -->
    <!-- Remove this block when using animated images as feature images -->
    <source
        srcset="{{img_url feature_image size="s" format="avif"}} 300w,
                {{img_url feature_image size="m" format="avif"}} 600w,
                {{img_url feature_image size="l" format="avif"}} 1000w,
                {{img_url feature_image size="xl" format="avif"}} 2000w"
        sizes="(min-width: 1400px) 1400px, 92vw"
        type="image/avif"
    >
    <!-- Serve the WebP format if the browser supports it -->
    <source
        srcset="{{img_url feature_image size="s" format="webp"}} 300w,
                {{img_url feature_image size="m" format="webp"}} 600w,
                {{img_url feature_image size="l" format="webp"}} 1000w,
                {{img_url feature_image size="xl" format="webp"}} 2000w"
        sizes="(min-width: 1400px) 1400px, 92vw"
        type="image/webp"
    >
    <!-- Serve original file format as a fallback -->
    <img
        srcset="{{img_url feature_image size="s"}} 300w,
                {{img_url feature_image size="m"}} 600w,
                {{img_url feature_image size="l"}} 1000w,
                {{img_url feature_image size="xl"}} 2000w"
        sizes="(min-width: 1400px) 1400px, 92vw"
        src="{{img_url feature_image size="xl"}}"
        alt="{{#if feature_image_alt}}{{feature_image_alt}}{{else}}{{title}}{{/if}}"
    >
</picture>

```

## Compatibility

Unlike other platforms, there’s no manual work needed to manage image sizes in your theme, it’s all done in the background for you.

Image sizes are automatically generated for all feature images and theme images, and regenerated whenever an image is changed, the image sizes configuration is changed, or when theme changes are made. Images are generated on the first request for each image at a particular size.

Dynamic image sizes are _not_ compatible with externally hosted images (except inserted images from [Unsplash](https://ghost.org/integrations/unsplash/)). If you store your image files on a third party storage adapter, then the image URL returned will be determined by the external source.

## Launch your site

Last week, 6,707 brand new

publications got started with Ghost.

Today, it's your turn.

[Start a free trial now →](https://account.ghost.org/signup/)

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