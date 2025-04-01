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

Usage: `{{comments}}`

## Description

The `{{comments}}` helper outputs Ghost’s member-based commenting system. [Learn more about comments.](https://ghost.org/help/commenting)

Comments are visible only when they have been (1) enabled by the publication owner and (2) the person visiting the page has access to the post.

### Basic example

```handlebars
{{comments}}

```

By default, `{{comments}}` outputs a title and comment count. These elements, along with the color mode and the saturation of the avatar's background color, can be customized via attributes.

## Attributes

| Name | Description | Options | Default |
| --- | --- | --- | --- |
| `title` | Header text for comment section | Any string | Member discussion |
| `count` | Boolean to toggle comment count on or off | `true` or `false` | `true` |
| `mode` | Set light or dark mode for comments | auto, light, or dark | auto (determined by the parent element's CSS `color` property) |
| `saturation` | Set saturation of avatar background color | `number` | `60` |

### Example with attributes

```handlebars
{{comments title="Join the club" count=false mode="light" saturation=80}}
{{! Customizes header text, hides comment count, sets element to light mode and avatar background color saturation to 80% }}

```

## Comment count

Use `{{comment_count}}` to output the number of comments a post has. This option is useful for displaying the comment count on the homepage or at the top of the post. Developers can also use it to customize the output of the `{{comments}}` helper.

### Attributes

| Name | Description | Options | Default |
| --- | --- | --- | --- |
| `singular` | The singular name for a comment | Any string | comment |
| `plural` | The plural name for comments | Any string | comments |
| `empty` | What to output when there are no comments | Any string | Output is empty when comment count equals zero |
| `autowrap` | Wraps comment count in an HTML tag | `HTML tag` or `false` | `span` |
| `class` | Add a custom class to wrapper element | Any string | "" |

### Examples

```handlebars
{{comment_count empty="" singular="comment" plural="comments" autowrap="span" class=""}}
{{! default output: <span>5 comments</span> }}

{{comment_count singular="" plural=""}}
{{! output: <span>5</span> }}

{{comment_count empty="0"}}
{{! output: <span>0</span>. (The default is an empty output.) }}

{{comment_count autowrap="div" class="style-me"}}
{{! output: <div class="style-me">5 comments</span> }}

{{comment_count autowrap="false"}}
{{! output: 5 comments (just text!) }}

```

## Additional customization

Use the `comments` helper with `{{#if}}` for more granular control over output. `{{#if comments}}` returns true when (1) comments have been enabled and (2) the reader has access to the post.

### Advanced example

```handlebars
{{#if comments}}
   <h2>Discussion</h2>
   <a href="/guides">Community guidelines</a>
   {{comment_count}}
   {{comments title="" count=false mode="light" saturation=80}}
{{/if}}

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