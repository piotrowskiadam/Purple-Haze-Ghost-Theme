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

Use: `{{#is "post"}}{{/is}}` to detect this context

Whenever you’re viewing a single site post, you’re in the `post` context. The `post` context is not set on static pages, which uses the page context instead.

## Routes

The URL used to render a single post is configurable in the Ghost admin. The default is `/:slug/`. Ghost also has an option for date-based permalinks, and can support many other formats using [routing](https://ghost.org/docs/themes/routing/).

## Templates

The default template for a post is `post.hbs`, which is a required template in all Ghost themes.

To provide a custom template for a specific post, use `post-:slug.hbs` as the template name, with `:slug` matching the post’s slug.

For example, if you have a ‘1.0 Announcement’ post with the url /1-0-announcement/, adding a template called `post-1-0-announcement.hbs` will cause that template to be used for the announcement post, instead of `post.hbs`.

Another option is to use a “global” custom post template. If you add a template to your theme called `custom-gallery.hbs` it will be available in a dropdown in the post settings menu so that it can be selected in any post or page.

These templates exist in a hierarchy. Ghost looks for a template which matches the slug ( `post-:slug.hbs`) first, then looks for a custom template ( `custom-gallery.hbs` if selected in the post settings) and finally uses `post.hbs` if no slug-specific template exists and no custom template is specified.

## Data

The `post` context provides access to the post object which matches the route. As with all contexts, all of the `@site` global data is also available.

When outputting the post, use a block expression ( `{{#post}}{{/post}}`) to drop into the post scope and access all of the attributes.

### Post object attributes

- **id** — the Object ID of the post
- **comment\_id** — The old, pre-1.0 incremental id of a post if present, or else the new Object ID
- **title** — the title of your site post
- **slug** — slugified version of the title (used in urls and also useful for class names)
- **excerpt** — a short preview of your post content
- **content** — the content of the post
- **url** — the web address for the post page (see url helper) and special attributes
- **feature\_image** — the cover image associated with the post
- **feature\_image\_alt** — alt text for the cover image associated with the post
- **feature\_image\_caption** — caption for the cover image associated with the post (supports basic html)
- **featured** — indicates a featured post. Defaults to `false`
- **page** — `true` if the post is a page. Defaults to `false`
- **meta\_title** — custom meta title for the post
- **meta\_description** — custom meta description for the post
- **published\_at** — date and time when the post was published
- **updated\_at** — date and time when the post was last updated
- **created\_at** — date and time when the post was created
- **primary\_author** — a formatted link to the first author
- **tags** — a list of tags associated with the post
- **primary\_tag** — direct reference to the first tag associated with the post

## Helpers

The `{{#post}}{{/post}}` block expression is used to theme the post template. Once inside of the post, you can use any of these useful helpers (and many more) to output your post’s data:

`{{title}}`, `{{content}}`, `{{url}}`, `{{author}}`, `{{date}}`, `{{excerpt}}`, `{{img_url}}`, `{{post_class}}`, `{{tags}}`.

```html
<!-- post.hbs -->

<!-- Everything inside the #post tags pulls data from the post -->
{{#post}}

<article class="{{post_class}}">
  <header class="post-header">
    <h1 class="post-title">{{title}}</h1>
    <section class="post-meta">
      <time class="post-date" datetime="{{date format='YYYY-MM-DD'}}">
        {{date format="DD MMMM YYYY"}}
      </time>
      {{tags prefix=" on "}}
    </section>
  </header>
  <section class="post-content">
    {{content}}
  </section>
</article>

{{/post}}

```

## Special attributes

The post model is the most complex model in Ghost, and it has special attributes, which are calculated by the API.

### URL

URL is a calculated, created based on the site’s permalink setting and the post’s other properties. It exists as a data attribute, but should always be output using the special `{{url}}` helper rather than referenced as a data attribute.

Always open a context and use `{{url}}` explicitly for _all_ resources, especially in posts. For example, use `{{#post}}{{url}}{{/post}}` instead of `{{post.url}}`.

### Primary tag

Each post has a list of 0 or more tags associated with it, which is accessed via the `tags` property and `{{tags}}` helper. The first tag in the list is considered more important, and can be accessed using a `primary_tag` calculated property. This is a path expression, which points to a whole tag object, rather than a helper function.

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