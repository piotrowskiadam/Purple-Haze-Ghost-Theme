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

Each page in a Ghost theme belongs to a context, which determines which template is used, what data will be available and what content is output by the `{{body_class}}` helper.

A Ghost publication follows a structure that allows URLs or routes to be mapped to views which display specific data. This data could be a list of posts, a single post or an RSS feed. It is the route that determines what data is meant to be shown and what template is used to render it.

Rather than providing access to all data in all contexts, Ghost optimises what data is fetched using contexts to ensure publications are super fast!

### Using contexts

Contexts play a big part in the building blocks of a Ghost theme. Besides determining what data is available and what template to render, contexts also interact with [handlebars helpers](https://ghost.org/docs/themes/helpers/), since the context also determines what dynamic data the helper outputs.

For example, the `{{meta_title}}` helper outputs different things based on the current context. If the context is `post` then the helper knows it can use `post.meta_title` and in a `tag` context it uses `tag.meta_title`.

To detect a context in your theme, use the `{{#is}}` helper. For example, in a partial template that is shared between many contexts, using `{{#is}}` passes it a context and only executes the contained block when it is in that context.

## List of contexts

- [index](https://ghost.org/docs/themes/contexts/index-context/)
- [page](https://ghost.org/docs/themes/contexts/page/)
- [post](https://ghost.org/docs/themes/contexts/post/)
- [author](https://ghost.org/docs/themes/contexts/author/)
- [tag](https://ghost.org/docs/themes/contexts/tag/)
- [error](https://ghost.org/docs/themes/contexts/error/)

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