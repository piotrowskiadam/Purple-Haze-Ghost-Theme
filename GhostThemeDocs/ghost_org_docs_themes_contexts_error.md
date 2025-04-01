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

Error templates used for all `4xx` and `5xx` errors that may arise on a site

The most common errors seen in Ghost are `404` errors. Depending on the complexity of your theme, your [routes file](https://ghost.org/docs/themes/routing/) and other factors, errors can range from `4xx` to `5xx`. Read more about error [status codes on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## Routes

Errors can be rendered on any route.

## Templates

The default template for an error is `error.hbs`, this will be used to render any error if there are no specific templates provided.

Error classes, `4xx` and `5xx` can be captured using `error-4xx.hbs` and `error-5xx.hbs` respectively. For example a `404` error can be captured with `error-4xx.hbs`, and a `500` error can be captured with `error-5xx.hbs`.

Specific errors can be captured by naming the template with the status code. For example `404` errors can be captured using `error-404.hbs`.

If no custom error templates have been defined in the theme Ghost will use it’s default error template.

## Data

Error templates have access to the details of the error and the following attributes can be used:

### Error object attributes

- `{{statusCode}}` — The HTTP status code of the error
- `{{message}}` — The error message
- `{{errorDetails}}` — An object containing further error details
  - `{{rule}}` — The rule
  - `{{ref}}` — A reference
  - `{{message}}` — Further information about the issue captured

## Helpers

Error templates shouldn’t use any theme helpers, with the exception of `{{asset}}`, or extend the default template, to further avoid the use of template helpers. Using theme helpers inside error templates can lead to misleading error reports.

The only error template that is permitted to use helpers is the `error-404.hbs` template file.

### Example code

```html
<!-- error.hbs -->

<!doctype html>
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if (gte IE 9)| IEMobile |!(IE)]><!--><html class="no-js" lang="en"><!--<![endif]-->
  <head>
    <meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <title>{{statusCode}} — {{message}}</title>

    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <link rel="shortcut icon" href="{{asset "favicon.ico"}}">
    <meta http-equiv="cleartype" content="on">

    <link rel="stylesheet" href="{{asset "public/ghost.css" hasMinFile="true"}}"/>

  </head>
  <body>
    <main role="main" id="main">
      <div class="gh-app">
          <div class="gh-viewport">
              <div class="gh-view">
                <section class="error-content error-{{statusCode}} js-error-container">
                  <section class="error-details">
                    <section class="error-message">
                      <h1 class="error-code">{{statusCode}}</h1>
                      <h2 class="error-description">{{message}}</h2>
                      <a class="error-link" href="{{@site.url}}">Go to the front page →</a>
                    </section>
                  </section>
                </section>

                {{#if errorDetails}}
                    <section class="error-stack">
                        <h3>Theme errors</h3>

                        <ul class="error-stack-list">
                            {{#foreach errorDetails}}
                                <li>
                                    <em class="error-stack-function">{{{rule}}}</em>

                                    {{#foreach failures}}
                                        <p><span class="error-stack-file">Ref: {{ref}}</span></p>
                                        <p><span class="error-stack-file">Message: {{message}}</span></p>
                                    {{/foreach}}
                                </li>
                            {{/foreach}}
                        </ul>
                    </section>
                {{/if}}
              </div>
          </div>
      </div>
    </main>
  </body>
</html>

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