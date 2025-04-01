Title: A guide to translation and internationalization in Ghost

URL Source: https://ghost.org/docs/faq/translation/

Markdown Content:
A guide to translation and internationalization in Ghost
===============
 

[](https://ghost.org/)

Open menu

Product

[For Creators YouTubers, bloggers, podcasters, musicians & artists](https://ghost.org/creators/)[For Publishers Writers, journalists, local news and new media outlets](https://ghost.org/publishers/)[For Business Modern brands & companies with ambitious content marketing](https://ghost.org/business/)[For Developers Source code, documentation, guides and tutorials](https://ghost.org/docs/)

[Explore](https://ghost.org/explore/)

Resources

[Marketplace Professional themes, custom integrations and qualified experts](https://ghost.org/marketplace/)[Start here New A huge library of guides, stories, interviews and tips for success](https://ghost.org/resources/)[Themes Hundreds of beautifully designed publication templates](https://ghost.org/themes/)[Help center Get help with product features and answers to common questions.](https://ghost.org/help/)[Integrations Connect thousands of apps and services with your website](https://ghost.org/integrations/)[Product updates All the latest changes and improvements to Ghost](https://ghost.org/changelog/)[Experts Get help building your site from certified Ghost developers](https://ghost.org/experts/)[About us Learn more about the people behind the platform (We're hiring!)](https://ghost.org/about/)

[Pricing](https://ghost.org/pricing/)

[](javascript:;)[Sign in](https://account.ghost.org/signin/) [**Get Started** — free](https://account.ghost.org/signup/)

[](https://ghost.org/)

Close menu

[For Creators Join thousands of creators using Ghost to share their work](https://ghost.org/creators/)[For Publishers The platform for independent publishers](https://ghost.org/publishers/)[For Business Content marketing for modern business](https://ghost.org/business/)[For Developers Source code, documentation, guides and tutorials](https://ghost.org/docs/)

[Explore](https://ghost.org/explore/) [Pricing](https://ghost.org/pricing/) [Marketplace](https://ghost.org/marketplace/) [Themes](https://ghost.org/themes/) [Integrations](https://ghost.org/integrations/) [Resources](https://ghost.org/resources/) [Help center](https://ghost.org/help/) [Product updates](https://ghost.org/changelog/) [Developers](https://ghost.org/docs/) [About us](https://ghost.org/about/)

[**Get Started** — free](https://account.ghost.org/signup/)Existing customer? [Sign in](https://account.ghost.org/signin/)

Search 

ESC

Common searches

*   [how to set up my custom domain](https://ghost.org/help/using-custom-domains/)
*   [how to install ghost](https://ghost.org/docs/install/)
*   [login not working, how to reset password](https://ghost.org/help/how-do-i-reset-my-password/)
*   [cloudflare setup and config](https://ghost.org/help/cloudflare-domain-setup/)
*   [how to make a ghost theme](https://ghost.org/docs/themes/)

↓

↑

to navigate

 ↵

to select

[](https://www.algolia.com/)

[Developer docs](https://ghost.org/docs/)

Quick-search for anything

⌘F

[5.101.6](https://github.com/tryghost/ghost/)

[Documentation](https://ghost.org/docs/) [Migration guides](https://ghost.org/docs/migration/) [Tutorials](https://ghost.org/tutorials/) [Developer forum](https://forum.ghost.org/)

##### Getting Started

[Introduction](https://ghost.org/docs/introduction/) [Installation](https://ghost.org/docs/install/) [Hosting Guide](https://ghost.org/docs/hosting/) [Updates & Versions](https://ghost.org/docs/update/)

##### Core Concepts

[Overview](https://ghost.org/docs/product/) [Architecture](https://ghost.org/docs/architecture/) [Configuration](https://ghost.org/docs/config/) [Staff users](https://ghost.org/docs/staff/) [Publishing](https://ghost.org/docs/publishing/) [Memberships](https://ghost.org/docs/members/)[Recommendations](https://ghost.org/docs/recommendations/) [Newsletters](https://ghost.org/docs/newsletters/) [Security](https://ghost.org/docs/security/)

##### Themes

[Overview](https://ghost.org/docs/themes/) [Structure](https://ghost.org/docs/themes/structure/) [Contexts](https://ghost.org/docs/themes/contexts/) [Assets](https://ghost.org/docs/themes/assets/) [Helpers](https://ghost.org/docs/themes/helpers/) [Content](https://ghost.org/docs/themes/content/) [Search](https://ghost.org/docs/themes/search/) [Members](https://ghost.org/docs/themes/members/) [Routing](https://ghost.org/docs/themes/routing/) [Custom settings](https://ghost.org/docs/themes/custom-settings/) [GScan](https://ghost.org/docs/themes/gscan/)

##### Advanced Tools

[Ghost CLI](https://ghost.org/docs/ghost-cli/) [Content API](https://ghost.org/docs/content-api/) [Admin API](https://ghost.org/docs/admin-api/) [JAMstack](https://ghost.org/docs/jamstack/) [Webhooks](https://ghost.org/docs/webhooks/)

##### Resources

[FAQ](https://ghost.org/docs/faq/) [Breaking changes](https://ghost.org/docs/changes/) [Contributing](https://ghost.org/docs/contributing/) [License](https://ghost.org/docs/license/) [Logos](https://ghost.org/docs/logos/) [Trademark use](https://ghost.org/trademark/)

[Docs](https://ghost.org/docs/) / [FAQ](https://ghost.org/docs/faq/) / [Translation](https://ghost.org/docs/faq/translation/) /

Translation in Ghost
====================

Creators from all over the world use Ghost. Publications abound in German, French, Spanish, Sinhalese, and Arabic—and the list keeps going!

Below, we have collected together essential concepts, strategies, and known limitations when working with languages other than English in Ghost.

Theme translation
-----------------

Ghost fully supports the ability to translate themes into different languages. This means that text in a theme is translated based on the language set in Ghost Admin.

![Image 2: Choose publication language in Ghost Admin](https://ghost.org/images/docs/faq/publication-language_hu12bd91634ea8eca345aacde59c0bf609_192891_1392x0_resize_q100_h2_box_3.webp)Theme developers can use the `translate` helper to make a theme translatable—see [our docs](https://ghost.org/docs/themes/helpers/translate/) for instructions on usage and examples.

Some premium themes—like [Tripoli](https://ghost.org/themes/tripoli/), [Galerie](https://ghost.org/themes/galerie/), and [Basho](https://ghost.org/themes/basho/)—include translation support out of the box.

Best practices and strategies
-----------------------------

Some of the complexity involved in building Ghost sites in languages other than English can be lessened by implementing the following best practices and strategies:

*   Keep hardcoded text to a minimum. The less hardcoded text in a theme, the less there is to translate. For example, instead of having “by” and “por” in the byline, consider just listing the author’s name.
*   Use [custom theme settings](https://ghost.org/docs/themes/custom-settings/) to allow your users to translate text themselves.
*   Create multiple newsletters to target different languages.

UI translations
---------------

Ghost has native support for translated system text in transactional emails, the Portal membership system, search, and comments.

_Ghost Admin does not yet support internationalization._

Multi-language content
----------------------

A multi-language content site supports multiple languages at the same time, like publishing in Spanish and English.

If you plan on publishing different content in each language, we recommend one Ghost install per language. Our experience shows that this approach is not only the easiest to get off the ground, but it’s also the most sustainable long-term.

If you’re publishing the same content in different languages, then we recommend using a service like [WeGlot](https://ghost.org/integrations/weglot/) or [Transifex](https://ghost.org/integrations/transifex/).

Note that the `translate` helper mentioned above **doesn’t work** for multi-language content sites, as its purpose is entirely different.

##### On this page

1.  [Translation in Ghost](https://ghost.org/docs/faq/translation/#)
    1.  [Theme translation](https://ghost.org/docs/faq/translation/#theme-translation)
    2.  [Best practices and strategies](https://ghost.org/docs/faq/translation/#best-practices-and-strategies)
    3.  [UI translations](https://ghost.org/docs/faq/translation/#ui-translations)
    4.  [Multi-language content](https://ghost.org/docs/faq/translation/#multi-language-content)

Launch your site
----------------

Last week, 6,707 brand new  
publications got started with Ghost.

Today, it's your turn.

[Start a free trial now →](https://account.ghost.org/signup/)

[](https://ghost.org/) [About](https://ghost.org/about/) [Explore](https://ghost.org/explore/) [Careers](https://careers.ghost.org/) [Resources](https://ghost.org/resources/)

Product

*   [Creator platform](https://ghost.org/)
*   [Theme marketplace](https://ghost.org/marketplace/)
*   [Integrations](https://ghost.org/integrations/)
*   [Experts](https://ghost.org/experts/)
*   [Ghost for news](https://ghost.org/news/)

Developers

*   [How to install Ghost](https://ghost.org/docs/install/)
*   [Core concepts](https://ghost.org/docs/)
*   [Ghost hosting](https://ghost.org/pricing/)
*   [API documentation](https://ghost.org/docs/content-api/)
*   [Security overview](https://ghost.org/docs/security/)
*   [Source code](https://github.com/TryGhost/Ghost)

Resources

*   [Ghost tutorials](https://ghost.org/tutorials/)
*   [Resources](https://ghost.org/resources/)
*   [Node.js CMS guide](https://nodecms.guide/)
*   [Open Subscription Platforms](https://opensubscriptionplatforms.com/)

Comparisons

*   [Ghost vs Substack](https://ghost.org/vs/substack/)
*   [Ghost vs WordPress](https://ghost.org/vs/wordpress/)
*   [Ghost vs Medium](https://ghost.org/vs/medium/)
*   [Ghost vs Memberful](https://ghost.org/vs/memberful/)
*   [Ghost vs Patreon](https://ghost.org/vs/patreon/)
*   [Ghost alternatives →](https://ghost.org/alternatives/)

Support

*   [Help center](https://ghost.org/help/)
*   [Community forum](https://forum.ghost.org/)
*   [Status 99.9%](https://status.ghost.org/)

[![Image 3: Non-Profit Foundation](https://ghost.org/images/logos/indie.svg)](https://ghost.org/about/) [![Image 4: Open Source](https://ghost.org/images/logos/opensource.svg)](https://github.com/tryghost) [![Image 5: Carbon Neutral](https://ghost.org/images/logos/carbonneutral.svg)](https://climate.stripe.com/6MNofu)

[Terms](https://ghost.org/terms/) [Privacy](https://ghost.org/privacy/) [Contact](https://ghost.org/contact/) [Ghost Foundation © 2025](https://ghost.org/)
