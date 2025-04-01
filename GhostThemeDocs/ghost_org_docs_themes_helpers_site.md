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

The `@site` property provides access to global settings, which are available anywhere in your theme:

- `{{@site.accent_color}}` \- Hex code for the theme’s accent color as [defined in Design settings](https://ghost.org/help/branding-settings/#accent-colour)
- `{{@site.codeinjection_head}}` \- Site header global code injection
- `{{@site.codeinjection_foot}}` \- Site footer global code injection
- `{{@site.cover_image}}` – Site cover image from General settings
- `{{@site.description}}` – Site description from General settings
- `{{@site.facebook}}` – Facebook URL from General settings
- `{{@site.icon}}` \- Publication icon from General settings
- `{{@site.locale}}` \- Configured site language.
- `{{@site.logo}}` – Site logo from General settings
- `{{@site.navigation}}` – Navigation information configured in Navigation settings
- `{{@site.timezone}}` – Timezone as configured in General settings
- `{{@site.title}}` – Site title from General settings
- `{{@site.twitter}}` – Twitter URL from General settings
- `{{@site.url}}` – URL specified for this site in your custom config file

### Example Code

```html
<!-- default.hbs -->
<html lang="{{@site.locale}}">
...

<nav class="main-nav overlay clearfix">
    {{#if @site.logo}}
        <a class="blog-logo" href="{{@site.url}}"><img src="{{@site.logo}}" alt="Blog Logo" /></a>
    {{/if}}
    <a class="subscribe-button icon-feed" href="{{@site.url}}/rss/">Subscribe</a>
 </nav>

 ...

</html>

```

## @site member data and options

The `@site` helper offers data related to membership

- `{{@site.allow_self_signup}}` \- True if new members can sign up themselves (membership is not private or turned off)
- `{{@site.comments_access}}` \- Level of membership required to comment ( `all`, `paid`, `off`)
- `{{@site.comments_enabled}}` \- True if comments enabled
- `{{@site.members_enabled}}` \- True if subscription access is not set to “Nobody”
- `{{@site.members_invite_only}}` \- True if subscription access is set to “Only people I invite”
- `{{@site.members_support_address}}` \- Email set for member support
- `{{@site.paid_members_enabled}}` \- True if members is enabled and Stripe is connected
- `{{@site.portal_button_icon}}` \- Image URL when using a custom Portal button icon
- `{{@site.portal_button_signup_text}}` \- Sign-up text for the Portal button
- `{{@site.portal_button_style}}` \- Portal button style ( `Icon and text`, `Icon only`, or `Text only`)
- `{{@site.portal_button}}` \- True if Portal button is enabled
- `{{@site.portal_name}}` \- True if name field is included in signup form
- `{{@site.portal_plans}}` \- Portal plan names
- `{{@site.recommendations_enabled}}` \- True if recommendations are enabled
- `{{@site.portal_signup_checkbox_required}}` \- True if signup requires accepting agreement to terms
- `{{@site.portal_signup_terms_html}}` \- HTML of the signup terms as set in Portal
- `{{@site.signup_url}}` \- URL for members signup via Portal or Feedly RSS subscription based on subscription access setting

### Example code

```html
{{#unless @site.members_invite_only}}
<form data-members-form>
  <input data-members-email type="email" required="true"/>
  <button type="submit">Continue</button>
</form>
{{/if}}

```

## @site meta data

The `@site` helper provides more extensive attributes around site metadata as well. The `@site` meta data values can be set in the Ghost admin under Site Meta Settings within General Settings:

- `{{@site.meta_title}}` – Site meta title
- `{{@site.meta_description}}` – Site meta description
- `{{@site.twitter_image}}` – Site Twitter card image
- `{{@site.twitter_title}}` – Site Twitter card title
- `{{@site.twitter_description}}` – Site Twitter card description
- `{{@site.og_image}}` – Site open graph image (used when shared on Facebook and across the web)
- `{{@site.og_title}}` – Site open graph title (used when shared on Facebook and across the web)
- `{{@site.og_description}}` – Site open graph description (used when shared on Facebook and across the web)

Here’s how these helpers correspond with the settings in the Ghost admin:

![Ghost admin site meta settings](https://ghost.org/images/docs/site-meta-settings_hubfec6e8b851ef54ba239915a235e7831_581483_1894x0_resize_q100_h2_box.webp)

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