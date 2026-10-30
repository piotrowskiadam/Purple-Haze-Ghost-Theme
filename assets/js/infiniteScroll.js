// Enhance Ghost's pagination; keep links usable if loading fails or JS is unavailable.
export default function infiniteScroll() {
    const feed = document.querySelector('.gh-postfeed');
    const pagination = document.querySelector('.gh-pagination');
    let nextLink = document.querySelector('link[rel="next"]')?.href;
    if (!feed || !nextLink || !('IntersectionObserver' in window)) return;

    let loading = false;
    const observer = new IntersectionObserver(async (entries) => {
        if (loading || !nextLink || !entries.some(entry => entry.isIntersecting)) return;
        loading = true;
        observer.disconnect();

        try {
            const response = await fetch(nextLink);
            if (!response.ok) throw new Error(`Could not load posts: ${response.status}`);
            const page = new DOMParser().parseFromString(await response.text(), 'text/html');
            const posts = page.querySelectorAll('.gh-postfeed > .gh-card');
            if (!posts.length) throw new Error('The next page contained no post cards');
            feed.append(...posts);
            nextLink = page.querySelector('link[rel="next"]')?.getAttribute('href');
            if (nextLink) nextLink = new URL(nextLink, response.url).href;

            // Keep the manual fallback pointing at the next unloaded page.
            if (pagination) pagination.innerHTML = page.querySelector('.gh-pagination')?.innerHTML || '';
            if (nextLink) observer.observe(feed.lastElementChild);
        } catch (error) {
            // Leave manual pagination available instead of retrying in a tight loop.
            console.warn('Purple Haze: automatic pagination stopped.', error);
        } finally {
            loading = false;
        }
    }, {rootMargin: '150px'});

    if (feed.lastElementChild) observer.observe(feed.lastElementChild);
}
