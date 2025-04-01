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

Usage: `{{#get "posts"}}{{/get}}`

## Description

`{{#get}}` is a special block helper that makes a custom query to the Ghost API to fetch publicly available data. These requests are made server-side before your templates are rendered. This means you can fetch additional data, separate from what is provided by [default in each context](https://ghost.org/docs/themes/contexts/).

In its most basic form, the `{{#get}}` helper performs a “browse” query that creates a block of data that represents a list of your **posts**, **authors**, **tags**, or **tiers**. Use the `{{#foreach}}` helper to iterate over this block of data.

The `{{#get}}` helper can also be used to perform a “read” query that fetches one specific author, post, tag, or tier when the relevant _resource field_ \- e.g., **id** or **slug** – is provided as an attribute.

### Basic examples

Get the 15 newest posts from the API.

```handlebars
{{#get "posts"}}
    {{#foreach posts}}
        {{title}}
    {{/foreach}}
{{/get}}

```

Get a single post with the id of 2, including its related tags and author data, using a block parameter. Learn more about [block parameters](https://ghost.org/docs/themes/helpers/get/#block-parameters) below.

```handlebars
{{#get "posts" id="2" include="tags,authors" as |post|}}
    {{#post}}
        {{title}}
    {{/post}}
{{/get}}

```

Fetch all tags and output them using the [tags helper](https://ghost.org/docs/themes/helpers/tags).

```handlebars
{{#get "tags" limit="all"}}{{tags}}{{/get}}

```

## Usage

The `{{#get}}` helper has several more options that greatly extend its functionality. The following section walks through these options and how to use them.

## Resources

The first parameter passed in is the name of the resource you want to query. Available resources include: `"posts"`, `"tags"`, `"authors"`, and `"tiers"`.

**posts** \- any published post

**tags** \- any tag that has a post associated with it

**authors** \- any author who has published a post

**tiers** \- any membership tier

**newsletters** \- any newsletter

**Example:**

```handlebars
{{#get "authors"}}
    {{! Loop through authors }}
    {{#foreach authors}}
        {{name}}
    {{/foreach}}
{{/get}}

```

## Block parameters

As with the `{{#foreach}}` helper, use block parameters to rename your returned data collection to make it easier to reference or more distinguishable.

> Block parameters are entered between pipe symbols ( `|`)

The `{{#get}}` helper supports two parameters. The first entry refers to your returned data collection. The second entry refers to your [pagination object](https://ghost.org/docs/themes/helpers/pagination/).

**Block parameters example:**

Get posts and rename the collection `articles`. The additional pagination object, `pages`, outputs the total number of posts in the collection.

```handlebars
{{#get "posts" as |articles pages|}}
    {{! Loop through our articles collection }}
    {{#foreach articles}}
        {{title}}
    {{/foreach}}
    {{! Use the pages (pagination) object }}
    {{pages.total}}
{{/get}}

```

## Using `{{else}}`

All block helpers support the `{{else}}` helper, which outputs content when the first block doesn’t match. In the case of the `{{get}}` helper, this only happens if there’s an error and is mostly useful for debugging while developing.

To output different content when there are no results returned from the `{{#get}}` request, use `{{else}}` with the `{{#foreach}}` helper.

```handlebars
{{#get "posts" filter="featured:true"}}
    {{! Loop through our featured posts }}
    {{#foreach posts}}
        {{title}}
    {{else}}
    {{! If there are no featured posts}}
       <p>No posts!</p>
    {{/foreach}}
{{else}}
  <p class="error">{{error}}</p>
{{/get}}

```

## Attributes

Use `{{#get}}` helper attributes to specify which data is returned. Available attributes are identical to those used with the [Ghost Content API](https://ghost.org/docs/content-api/#parameters).

“Browse” requests (fetching multiple items) accept any or all of these attributes. “Read” requests (fetching a single item by **id** or **slug**) only accept the **include** attribute.

### _limit_

Specify the size of your collection

Allowed values: positive integers and “all”

Default value: 15

It’s possible to use the global `posts_per_page` setting, which is **5** by default. Configure the setting in the active theme’s `package.json` file. This global value is available via the `@config` global as `@config.posts_per_page`.

**Examples:**

```handlebars
{{! Get the 20 most recently published posts }}
{{#get "posts" limit="20"}}{{/get}}

{{! Get all published posts }}
{{#get "posts" limit="all"}}{{/get}}

{{! Use the posts_per_page setting}}
{{#get "posts" limit=@config.posts_per_page}}{{/get}}

```

### _page_

when the total number of posts exceeds the number of post initially requested, the resulting collection from the `{{#get}}` query will be paginated. Choose which page of that collection you want to get with the `page` attribute.

**Example:**

```handlebars
{{! Get the 4th page of results.  In this case, where limit = 5, we are accessing posts 16 - 20}}
{{#get "posts" limit="5" page="4"}}{{/get}}

```

### _order_

Specify how your data is ordered before being returned. You can choose any valid resource _field_ in ascending ( `asc`) or descending ( `desc`) order.

**Examples:**

```handlebars
{{! Get the 5 oldest posts }}
{{#get "posts" limit="5" order="published_at asc"}}{{/get}}

{{! Get posts in alphabetical order by title }}
{{#get "posts" limit="5" order="title asc"}}{{/get}}

```

### _include_

By default, the `{{#get}}` helper will only fetch the base data from a resource. Use _include_ to expand the data that is returned. Separate multiple _include_ values with a comma.

Base resource data:

- **posts**
- **tags**
- **authors**
- **tiers**

Include options for _Post_:

- “authors” – adds author data
- “tags – adds tag data

Include option for _Author_ and _Tag_

- “count.posts” – adds the post count for each resource

> Use `count.posts` to **order** your collection.

Include options for _Tiers_

- “monthly\_price” - add monthly price data
- “yearly\_price” – add yearly price data
- “benefits” – add benefits data

**Examples:**

```handlebars
{{! Get posts with author }}
{{#get "posts" limit="5" include="authors"}}
    {{#foreach posts}}
        <span>Written by: {{authors}}</span>
    {{/foreach}}
{{/get}}

{{! Get posts with author and tags }}
{{#get "posts" limit="5" include="authors,tags"}}
    {{#foreach posts}}
        <p>Written by: {{authors separator=", "}}</p>
        <p>keywords: {{tags separator=", "}}</p>
    {{/foreach}}
{{/get}}

{{! Get all tags and order them by post count }}
{{#get "tags" limit="all" include="count.posts" order="count.posts desc"}}
    {{#foreach tags}}
        <p>{{name}} ({{count.posts}})</p>
    {{/foreach}}
{{/get}}

{{! Get all tiers with monthly price, yearly price, and benefits data }}
{{#get "tiers" include="monthly_price,yearly_price,benefits" limit="all" as |tiers|}}
    {{! Loop through our tiers collection }}
    {{#foreach tiers}}
        {{name}}
        {{#if monthly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/monthly">Monthly – {{price monthly_price currency=currency}}</a>
            </div>
        {{/if}}
        {{#if yearly_price}}
            <div>
                <a href="javascript:" data-portal="signup/{{id}}/yearly">Yearly – {{price yearly_price currency=currency}}</a>
            </div>
        {{/if}}
        {{#if benefits}}
            {{#foreach benefits as |benefit|}}
                {{benefit}}
            {{/foreach}}
        {{/if}}
    {{/foreach}}
{{/get}}

{{! Create a dynamic sign-up form that allows members to subscribe to specific newsletters}}
<form data-members-form=>
  <input type="email" required data-members-email>
  {{#get "newsletters"}}
      {{#foreach newsletters}}
        <label>
          <input type="checkbox" value="{{name}}" data-members-newsletter />
					{{name}}
        </label>
      {{else}}
  {{/get}}
  <button type="submit">Subscribe</button>
</form>

```

### _filter_

Use `filter` to make complex, logic-based queries on the data to fetch. In its most basic form, use `filter` to get posts that meet a simple boolean condition.

```handlebars
{{! Only get posts that are featured }}
{{#get "posts" limit="all" filter="featured:true"}}
    {{#foreach posts}}
        <a href="{{slug}}">{{title}}</a>
    {{/foreach}}
{{/get}}

```

Specify multiple rules for the `filter` attribute by using `,` for _or_, `+` for _and_, and `-` for _negation_. It’s possible to check for booleans, match against strings, look for items within a group, and much more. For a full breakdown of the filtering syntax and how to use it, please see the [filter documentation in the API docs](https://ghost.org/docs/content-api/#filtering).

#### Passing data to `filter`

Data already available within your theme template can be passed to the `filter` attribute.

```handlebars
{{! Get three more posts by the author of the current post when in post.hbs }}
{{#post}}
    <h3><a href="{{url}}">{{title}}</a></h3>
    <section class="author-meta">
        <p>Post by: {{primary_author}}</p>
    </section>
    {{! Prevent the current post from being returned by filtering against its id }}
    {{#get "posts" filter="authors:{{primary_author.slug}}+id:-{{id}}" limit="3"}}
        <p>More posts by this author:
            <ol>
                {{#foreach posts}}
                <li><a href="{{url}}">{{title}}</a></li>
                {{/foreach}}
            </ol>
        </p>
    {{/get}}
{{/post}}

```

When passing `title`, `dates`, or other values with spaces to `filter`–wrap the data in single quotes.

```handlebars
{{#post}}
    {{#get "posts" filter="published_at:<='{{published_at}}'+id:-{{id}}" limit="3"}}
    ...
    {{/get}}
{{/post}}

```

> Tip: To filter based on dates, use the data attributes, e.g. `{{published_at}}`, not the `{{date}}` helper, as helper functions do not get called inside of a filter.

#### Filtering by primary tag

The `primary_tag` represents the first tag on a post. See the available [attributes](https://ghost.org/docs/themes/helpers/tags/#list-of-attributes).

```handlebars
{{! Get three posts that have the same primary tag as the current post}}
{{#post}}
    {{#get "posts" filter="primary_tag:{{primary_tag.slug}}" limit="3"}}
        {{#foreach posts}}
            <li><a href="{{url}}">{{title}}</a></li>
        {{/foreach}}
    {{/get}}
{{/post}}

```

#### Filtering by primary author

The `primary_author` represents the first author listed on a post. See the available [attributes](https://ghost.org/docs/themes/contexts/author/#author-object-attributes).

```handlebars
{{! Get three posts that have the same primary author as the current post}}
{{#post}}
    {{#get "posts" filter="primary_author:{{primary_author.slug}}" limit="3"}}
        {{#foreach posts}}
            <li><a href="{{url}}">{{title}}</a></li>
        {{/foreach}}
    {{/get}}
{{/post}}

```

#### Filtering by membership type

To restrict the type of tiers returned by the `{{#get}}` helper, filter the collection using the `type` attribute with either _free_ or _paid_.

```handlebars
{{! Only get tiers that are paid}}
{{#get "tiers" filter="type:paid"}}
    {{#foreach tiers}}
        <p>{{name}}</p>
    {{/foreach}}
{{/get}}

```

#### Filtering by tier visibility

To restrict the visibility of tiers returned by the `{{#get}}` helper, filter the collection using the `visibility` attribute with either _public_ or _none_. Visibility here refers to whether the tier is selected or not in Portal settings.

```handlebars
{{! Only get tiers that are public}}
{{#get "tiers" filter="visibility:public"}}
    {{#foreach tiers}}
        <p>{{name}}</p>
    {{/foreach}}
{{/get}}

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