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

Usage: `{{navigation}}` and `{{navigation type="secondary"}}`

### Description

`{{navigation}}` is a template-driven helper which outputs formatted HTML of menu items defined in the Ghost admin panel (Settings > Design > Navigation). By default, the navigation is marked up using a [preset template](https://github.com/TryGhost/Ghost/blob/3d989eba2371235d41468f7699a08e46fc2b1e87/ghost/core/core/frontend/helpers/tpl/navigation.hbs).

There are two types of navigation, primary and secondary, which you can access using `{{navigation}}` and `{{navigation type="secondary"}}`.

### Default template

By default, the HTML output by including `{{navigation}}` in your theme, looks like the following:

```html
<ul class="nav">
    <li class="nav-home nav-current"><a href="/">Home</a></li>
    <li class="nav-about"><a href="/about/">About</a></li>
    <li class="nav-contact"><a href="/contact/">Contact</a></li>
    ...
</ul>

```

### Changing The Template

If you want to modify the default markup of the navigation helper, this can be achieved by creating a new file at `./partials/navigation.hbs`. If this file exists, Ghost will load it instead of the default template. Example:

```handlebars
<div class="my-fancy-nav-wrapper">
    <ul class="nav">
        <!-- Loop through the navigation items -->
        {{#foreach navigation}}
        <li class="nav-{{slug}}{{#if current}} nav-current{{/if}}"><a href="{{url absolute="true"}}">{{label}}</a></li>
        {{/foreach}}
        <!-- End the loop -->
    </ul>
</div>

```

Creating a new `navigation.hbs` will overwrite both the main navigation as and secondary navigation. To customise the secondary navigation differently use the `{{#if isSecondary}}...{{/if}}` helper. Example:

```handlebars
{{#if isSecondary}}
    <ul class="nav" role="menu">
        {{#foreach navigation}}
            <li class="nav-{{slug}}" role="menuitem">
                <a href="{{url}}">
                    <svg class="icon" role="img" aria-label="{{slug}} icon">
                        <title>{{slug}}</title>
                        <use xlink:href="#{{slug}}"></use>
                    </svg>
                </a>
            </li>
        {{/foreach}}
    </ul>
{{else}}
    <ul class="nav" role="menu">
        {{#foreach navigation}}
            <li class="{{link_class for=(url) class=(concat "nav-" slug)}}" role="menuitem">
                <a href="{{url absolute="true"}}">{{label}}</a>
            </li>
        {{/foreach}}
    </ul>
{{/if}}

```

The up-to-date default template in Ghost is always available [here](https://github.com/TryGhost/Ghost/blob/3d989eba2371235d41468f7699a08e46fc2b1e87/ghost/core/core/frontend/helpers/tpl/navigation.hbs).

### List of Attributes

A navigation item has the following attributes which can be used inside your `./partials/navigation.hbs` template file…

- **{{label}}** \- The text to display for the link
- **{{url}}** \- The URL to link to - see the url helper for more options
- **{{current}}** \- Boolean true / false - whether the URL matches the current page
- **{{slug}}** \- Slugified name of the page, eg `about-us`. Can be used as a class to target specific menu items with CSS or jQuery.

These attributes can only be used inside the `{{#foreach navigation}}` loop inside `./partials/navigation.hbs`. A navigation loop will not work in other partial templates or theme files.

### Examples

The navigation helper doesn’t output anything if there are no navigation items to output, so there’s no need to wrap it in an `{{#if}}` statement to prevent an empty list. However, it’s a common pattern to want to output a link to open the main menu, but only if there are items to show.

The data used by the `{{navigation}}` helper is also stored as a global variable called `@site.navigation`. You can use this global variable in any theme file to check if navigation items have been added by a user in the Ghost admin panel.

```handlebars
{{#if @site.navigation}}
    <a class="menu-button" href="#"><span class="word">Menu</span></a>
{{/if}}

```

This is also possible with the secondary navigation:

```handlebars
{{#if @site.secondary_navigation}}
    <a class="menu-button" href="#"><span class="word">Menu</span></a>
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