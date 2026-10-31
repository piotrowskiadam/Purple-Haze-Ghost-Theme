# Demo embedding

On 31 October 2026 the HTTPS demo at `piotrowskiadam.pl` was changed to allow framing by Ghost while retaining HSTS and `nosniff`. A browser check loaded the blog in an iframe whose parent origin was `https://ghost.org` without frame-policy errors.

The change is in the demo’s Nginx `location /` block. It is a server setting, not something a theme ZIP can control:

```nginx
proxy_hide_header X-Frame-Options;
add_header Strict-Transport-Security 'max-age=63072000; includeSubDomains; preload';
add_header X-Content-Type-Options nosniff;
add_header Content-Security-Policy "frame-ancestors 'self' https://ghost.org https://*.ghost.org" always;
```

Nginx 1.24 inherits `add_header` directives only when the current level defines none. Repeating HSTS and `nosniff` at the location level preserves them while replacing the inherited `SAMEORIGIN` frame restriction. See the [official Nginx documentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header). Other existing CSP policies must also permit framing; a second, stricter policy can still block the demo.

A separate `/ghost/` proxy location retains the original inherited `SAMEORIGIN` policy for the staff interface. The public framing exception does not relax the admin panel’s policy. The shared SSL snippet and the `www` redirect configuration were left intact. A timestamped backup of the affected site configuration is stored on the server under `/root/purple-haze-nginx-backups/`. `nginx -t` passed before the reload and the public response was rechecked afterward.

When regenerating Nginx configuration through Ghost CLI or a hosting dashboard, preserve this policy and recheck the live headers. A hosted demo should run the exact theme release used in the marketplace submission.
