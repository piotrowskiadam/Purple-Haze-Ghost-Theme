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

Use: `{{#is "tag"}}{{/is}}` to detect this context

Tags in Ghost each get their own tag archive which lists all posts associated with the tag. You’re in the `tag` context when viewing the page thats lists all posts with that tag, as well as subsequent pages of posts. The `tag` context is not set on posts or pages with tags, only on the list of posts for that tag.

## Routes

The default URL for tag pages is `/tag/:slug/`. The `tag` context is also set on subsequent pages of the post list, which live at `/tag/:slug/page/:num/`. The `slug` part of the URL is based on the name of the tag and can be configured from the **Tags** page in Admin. To change the tag URL structure, use [routing](https://ghost.org/docs/themes/routing/).

## Templates

The default template for a tag page is `index.hbs` — or an optional `tag.hbs` template can be used.

To provide a custom template for a specific tag, use `tag-:slug.hbs` where the `:slug` matches the tag’s slug.

For example, if you have a tag ‘photo’ with the url `/tag/photo/`, adding a template called `tag-photo.hbs` will cause that template to be used for the photo tag instead of `tag.hbs`, or `index.hbs`.

These templates exist in a hierarchy. Ghost looks for a template which matches the slug ( `tag-:slug.hbs`) first, then looks for `tag.hbs` and finally uses `index.hbs` if neither is available.

## Data

When in the `tag` context, a template gets access to 3 objects: the tag object which matches the route, an array of post objects and a pagination object. As with all contexts, all of the `@site` global data is also available.

### Tag object

Use the block expression ( `{{#tag}}{{/tag}}`) to drop into the tag scope and access all of the attributes.

#### Tag object attributes

- **id** — the incremental ID of the tag
- **name** — name of the tag
- **slug** — slugified version of the name (used in urls and also useful for class names)
- **description** — description of the tag
- **feature\_image** — the cover image associated with the tag
- **meta\_title** — custom meta title for the page
- **meta\_description** — custom meta description for the page
- **url** — the web address for the tag’s page
- **accent\_color** — the accent color of the tag

### Post list

Each of the posts can be looped through using `{{#foreach 'posts'}}{{/foreach}}`. The template code inside the block will be rendered for each post, and have access to all of the post object attributes.

### Pagination

The pagination object provided is the same everywhere. The best way to output pagination is to use the pagination helper.

## Helpers

The `{{#tag}}{{/tag}}` block expression is useful for accessing all attributes. Once inside the tag, use helpers like `{{img_url}}` and `{{url}}` to output the tag’s details.

Using `{{#foreach 'posts'}}{{/foreach}}` is the best way to loop through the list of posts and output each one. If you’re using the Members feature, consider the [content visibility](https://ghost.org/docs/themes/members/#content-visibility) of your posts

If your theme does have a `tag.hbs` and `author.hbs` file all outputting similar post lists to `index.hbs` you may wish to use a partial to define your post list item, for example: `{{> "loop"}}`.

```html
<!-- tag.hbs -->

<!-- Everything inside of #tag pulls data from the tag -->
{{#tag}}
  <header>
  	{{#if feature_image}}
    	<img src="{{feature_image}}" alt="{{name}}" />
    {{/if}}
  </header>

  <section class="author-profile">
  	<h1>{{name}}</h1>
    {{#if description}}
      <h2>{{description}}</h2>
    {{/if}}
  </section>
{{/tag}}

<main role="main">
    <!-- includes the post loop - partials/loop.hbs -->
    {{> "loop"}}
</main>

<!-- Previous/next page links - displayed on every page -->
{{pagination}}

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