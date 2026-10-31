import {readFileSync, readdirSync} from 'node:fs';
import Handlebars from 'handlebars';
import {demoPosts, demoArticle} from './demo-content.mjs';

// A small Ghost data fixture for browser regression checks, not a Ghost server.
const hbs = Handlebars.create();
const safe = value => new Handlebars.SafeString(value);
const translations = JSON.parse(readFileSync('locales/pl.json', 'utf8'));
hbs.registerHelper('t', (key, options) => options.data.root.demo ? key : translations[key] || key);
hbs.registerHelper('asset', path => `/assets/${path}`);
hbs.registerHelper('body_class', function () { return `${this.context}-template`; });
hbs.registerHelper('post_class', () => 'post');
hbs.registerHelper('url', function () { return this.url; });
hbs.registerHelper('img_url', url => url);
hbs.registerHelper('title', function () { return this.title; });
hbs.registerHelper('excerpt', function () { return this.excerpt; });
hbs.registerHelper('date', function (options) {
    return options.hash.format === 'YYYY-MM-DD' ? (this.date || '2026-10-31') : (this.displayDate || '31 paź 2026');
});
hbs.registerHelper('reading_time', function (options) { return options.hash.minutes.replace('%', this.readingMinutes || '4'); });
hbs.registerHelper('match', function (a, b, options) {
    if (!options) { options = b; b = true; }
    return a === b ? options.fn(this) : options.inverse(this);
});
hbs.registerHelper('plural', (count, options) => (count === 0 ? options.hash.empty : count === 1 ? options.hash.singular : options.hash.plural.replace('%', count)));
hbs.registerHelper('author', function (options) { return options.fn(this.author); });
hbs.registerHelper('tag', function (options) { return options.fn(this.tag); });
hbs.registerHelper('foreach', function (items, options) {
    if (!items?.length) return options.inverse(this);
    return items.map((item, index) => options.fn(item, {
        data: {...options.data, first: index === 0, last: index === items.length - 1, index},
        blockParams: [item, index]
    })).join('');
});
hbs.registerHelper('get', function (resource, options) {
    return options.fn(this, {blockParams: [options.data.root.featuredPosts]});
});
hbs.registerHelper('post', function (options) { return options.fn(this.post); });
hbs.registerHelper('navigation', options => safe(options.data.root.demo
    ? (options.hash.type === 'secondary'
        ? '<ul class="nav"><li><a href="/demo/about/">About the journal</a></li><li><a href="/demo/archive/">Archive</a></li></ul>'
        : '<ul class="nav"><li><a href="/demo/">Journal</a></li><li><a href="/demo/about/">About</a></li><li><a href="/demo/reading/">Reading list</a></li></ul>')
    : '<ul class="nav"><li><a href="/">Home</a></li><li><a href="/about/">About</a></li></ul>'));
hbs.registerHelper('ghost_head', function () { return safe(this.next ? `<link rel="next" href="${this.next}">` : ''); });
hbs.registerHelper('ghost_foot', () => '');
hbs.registerHelper('pagination', function () { return safe(this.next ? `<nav class="pagination"><a href="${this.next}">Older Posts</a></nav>` : ''); });
hbs.registerHelper('search', () => '');
hbs.registerHelper('subscribe_form', () => '');
for (const name of ['next_post', 'prev_post']) hbs.registerHelper(name, options => options.inverse?.(this) || '');
for (const file of readdirSync('partials')) {
    if (file.endsWith('.hbs')) hbs.registerPartial(file.slice(0, -4), readFileSync(`partials/${file}`, 'utf8'));
}
for (const file of readdirSync('partials/icons')) hbs.registerPartial(`icons/${file.slice(0, -4)}`, readFileSync(`partials/icons/${file}`, 'utf8'));
const template = name => hbs.compile(readFileSync(name, 'utf8').replace(/^{{!<[^}]+}}/, ''));
const posts = Array.from({length: 3}, (_, index) => ({
    title: index === 0 ? 'Pisanie, technologia i pomysły' : `Wpis ${index + 1}`,
    url: `/post-${index + 1}/`, featured: index === 0,
    feature_image: '/demo-assets/orbits.svg',
    excerpt: 'Przykładowy wpis z polskimi znakami: ą, ć, ę, ł, ń, ó, ś, ź, ż.',
    tags: [{name: 'Technologia', url: '/tag/technologia/'}]
}));
export function render(path = '/', {demo = false} = {}) {
    const page = path.includes('/page/2') ? 2 : 1;
    const context = path.includes('/article') ? 'post' : path.includes('/author/') ? 'author' : path.includes('/tag/') ? 'tag' : path.includes('/about/') ? 'page' : path.includes('/signin/') ? 'signin' : path.includes('/signup/') ? 'signup' : 'home';
    const data = {
        context, demo, meta_title: 'Purple Haze', featuredPosts: [posts[0]],
        author: {name: 'Alex Morgan'}, tag: {name: 'Technology'},
        next: !demo && page === 1 && context === 'home' ? '/page/2/' : null,
        pagination: {page, pages: 2, total: 4}, posts: page === 1 ? posts : [{...posts[1], title: 'Starszy wpis', url: '/older/'}],
        post: {...posts[0], html: '<h2 id="żółć">Zażółć gęślą jaźń</h2><p>Przykładowa treść artykułu.</p><h3>Details</h3><table><tr><td>Value</td></tr></table><pre><code class="language-js">const answer = 42;</code></pre>'}
    };
    if (demo) {
        data.posts = demoPosts;
        data.post = {...demoArticle};
        data.featuredPosts = [demoPosts[0]];
        data.meta_title = context === 'post' ? `${demoArticle.title} — Nightfall Journal` : 'Nightfall Journal';
        data.pagination = {page: 1, pages: 1, total: demoPosts.length};
    }
    if (path.includes('/empty/')) {data.posts = []; data.featuredPosts = [];}
    if (path.includes('/no-image/')) {delete data.post.feature_image; data.post.tags = [];}
    if (path.includes('/no-headings/')) data.post.html = '<p>A short article without any headings.</p>';
    if (path.includes('/long-title/')) data.post.title = 'AnUnusuallyLongTitle'.repeat(14);
    if (path.includes('/editor-cards/')) data.post.html += `
        <figure class="kg-card kg-image-card kg-width-wide"><img src="/demo-assets/orbits.svg" alt="Wide geometric artwork"><figcaption><strong>A legible caption</strong></figcaption></figure>
        <figure class="kg-card kg-image-card kg-width-full"><img src="/demo-assets/rhythm.svg" alt="Full width geometric artwork"></figure>
        <figure class="kg-card kg-embed-card"><iframe src="about:blank" title="Sample embedded content"></iframe></figure>
        <table><caption>Sample measurements</caption><thead><tr><th scope="col">Item</th><th scope="col">Value</th></tr></thead><tbody><tr><td>Long item</td><td>${'unbrokentext'.repeat(40)}</td></tr></tbody></table>`;
    const options = {data: {page: {show_title_and_feature_image: true}, site: {
        title: demo ? 'Nightfall Journal' : 'Purple Haze', locale: demo ? 'en' : 'pl',
        url: demo ? '/demo' : '/', members_enabled: false
    }, custom: {}}};
    hbs.registerHelper('content', function () { return safe(this.html); });
    const body = template(context === 'home' ? 'index.hbs' : ['signin', 'signup'].includes(context) ? `members/${context}.hbs` : `${context}.hbs`)(data, options);
    return template('default.hbs')({...data, body}, options);
}
