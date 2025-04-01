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

Ghost has a native search feature that can be accessed via URL or implemented directly into themes using a single data attribute.

![Search](https://ghost.org/images/docs/themes/search-in-ghost_huac1f49fc436e5098ff1c22395a576ebf_186857_1074x0_resize_q100_h2_box_3.webp)

The easiest way to get started with search is by adding a `#/search` URL to the navigation or anywhere on the site. Beyond that, it’s also possible to implement search directly into a theme using a data attribute.

## Implementing Search in themes

The quickest way is to use the `{{search}}` helper to output a button with a search icon. See [the helper docs](https://ghost.org/docs/themes/helpers/search) for more details.

Alternatively, add the `data-ghost-search` data attribute to any element in the theme. Here’s an example from the default theme [Casper](https://github.com/TryGhost/Casper/blob/81d036d4ca036f454f96173a650dd4acc6bb3ca0/default.hbs#L45):

```handlebars
<button class="gh-search" data-ghost-search>{{> "icons/search"}}</button>

```

Both methods allow visitors to search content by clicking on the element to open the search modal or by using the shortcut `Cmd/Ctrl + K`.

### Technical details

- [Taxonomies](https://ghost.org/docs/themes/routing/#taxonomies) for tags and authors must be present for search results to include tags and authors
- The post title and excerpt are used to search post content from the most recent 10,000 posts. (Excerpts are excluded for member-only posts)

## Create an advanced search index using Algolia

If you have a large site with more than 10,000 posts, a complex data structure, or require advanced search functionality, we recommend using Algolia.

Ghost has open-source tools to pre-populate the Algolia search index and keep the index updated using webhooks and Netlify Functions.

### Populating the index

To make full use of Algolia from the start, you can pre-populate the search index. [Algolia Ghost CLI](https://github.com/TryGhost/algolia/tree/main/packages/algolia) is a tool that creates fragments of content from your Ghost site and adds them to your Algolia search index.

Follow the documentation for [Algolia Ghost CLI](https://github.com/TryGhost/algolia/tree/main/packages/algolia) to pre-populate your Algolia search index.

### Setting up Algolia Netlify

The best way to keep your Algolia search index updated with new and edited content is to use Netlify Functions, which listen to and processes webhook events and instruct Algolia to index, reindex, or unindex a URL. Once set up, it will automatically keep the search index up to date.

You can deploy and configure the [Algolia Netlify](https://github.com/TryGhost/algolia/tree/main/packages/algolia-netlify) package to Netlify in the browser.

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