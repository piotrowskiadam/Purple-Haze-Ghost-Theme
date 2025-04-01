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

Use: `{{#is "page"}}{{/is}}` to detect this context

Whenever you’re viewing a static page, you’re in the `page` context. The `page` context is not set on posts, which uses the `post` context instead.

## Routes

The URL used to render a static page is always `/:slug/`. This cannot be customised, unlike post permalinks.

## Templates

The default template for a page is `post.hbs` and an optional `page.hbs` template can be used.

Custom templates for specific pages are determined using `page-:slug.hbs`, with the `:slug` matching the static page’s slug.

For example, if you have an ‘About’ page with the url `/about/`, adding a template called `page-about.hbs` will cause that template to be used instead of `page.hbs`, or `post.hbs`.

These templates exist in a hierarchy. Ghost looks for a template which matches the slug ( `page-:slug.hbs`) first, then looks for `page.hbs` and finally uses `post.hbs` if neither is available.

## Data

The `page` context provides access to the post object which matches the route. A page is just a special type of post, so the data object is called a post, not a page. As with all contexts, all of the `@site` global data is also available.

When outputting the page, the block expression `{{#post}}{{/post}}` is used to drop into the post scope and access all of the attributes. All of the data available for a page is the same as the data for a post.

### Post (page) object attributes

- **id** — incremental ID of the page
- **title** — the title of your static page
- **excerpt** — a short preview of your page content
- **content** — the content of the page
- **url** — the web address for the static page
- **feature\_image** — the cover image associated with the page
- **feature\_image\_alt** — alt text for the cover image associated with the page
- **feature\_image\_caption** — caption for the cover image associated with the page (supports basic html)
- **featured** — indicates a featured page, defaults to `false`
- **page** — `true` if the post is a static page, defaults to `false`
- **meta\_title** — custom meta title for the page
- **meta\_description** — custom meta description for the page
- **published\_at** — date and time when the page was published
- **updated\_at** — date and time when the page was last updated
- **created\_at** — date and time when the page was created
- **primary\_author** — a formatted link to the first author. See [Authors for more information](https://ghost.org/docs/themes/helpers/authors/)
- **tags** \- a list of tags associated with the page

## Helpers

Using the `{{#post}}{{/post}}` block expression is used to theme a static page. Once inside of the page, you can use any of these useful helpers (and many more) to output your page’s data:

`{{title}}`, `{{content}}`, `{{url}}`, `{{author}}`, `{{date}}`, `{{excerpt}}`, `{{img_url}}`, `{{post_class}}]`, `{{tags}}`.

```html
<!-- page.hbs -->

<!-- Everything inside the #post tags pulls data from the static page -->
{{#post}}

<article class="{{post_class}}">
  <header class="page-header">
    <h1 class="page-title">{{title}}</h1>
    <section class="page-meta">
      <time class="page-date" datetime="{{date format='YYYY-MM-DD'}}">
        {{date format="DD MMMM YYYY"}}
      </time>
      {{tags prefix=" on "}}
    </section>
  </header>
  <section class="page-content">
    {{content}}
  </section>
</article>

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