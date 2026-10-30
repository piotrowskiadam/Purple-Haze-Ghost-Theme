// Fictional editorial content for theme previews. All artwork is original SVG geometry.
export const demoPosts = [
    {
        title: 'Make room for better ideas',
        url: '/demo/article/',
        featured: true,
        feature_image: '/demo-assets/orbits.svg',
        feature_image_alt: 'Concentric lavender circles on a deep purple background',
        excerpt: 'On finding a little breathing room between what we consume and what we create.',
        tags: [{name: 'Creativity', url: '/demo/tag/creativity/'}],
        date: '2026-10-24', displayDate: '24 Oct 2026', readingMinutes: 5
    },
    {
        title: 'The pleasure of doing one thing',
        url: '/demo/one-thing/',
        feature_image: '/demo-assets/rhythm.svg',
        feature_image_alt: 'Three flowing bands in warm rose and terracotta',
        excerpt: 'A slower rhythm for the work, conversations, and small rituals that make a day feel like our own.',
        tags: [{name: 'Everyday life', url: '/demo/tag/everyday-life/'}],
        date: '2026-10-18', displayDate: '18 Oct 2026', readingMinutes: 4
    },
    {
        title: 'Keep a notebook for noticing',
        url: '/demo/noticing/',
        feature_image: '/demo-assets/intervals.svg',
        feature_image_alt: 'Fine teal arches surrounding a pale green circle',
        excerpt: 'An unfinished thought, an overheard sentence, a different way home. Some things are worth writing down.',
        tags: [{name: 'Field notes', url: '/demo/tag/field-notes/'}],
        date: '2026-10-11', displayDate: '11 Oct 2026', readingMinutes: 3
    }
];
export const demoArticle = {
    ...demoPosts[0],
    custom_excerpt: 'On finding a little breathing room between what we consume and what we create.',
    authors: [{name: 'Alex Morgan', url: '/demo/author/alex/'}],
    html: `
        <p>There is a particular kind of quiet that arrives when you close the last tab. Nothing has been finished, exactly. But for a moment, your attention belongs to you again.</p>
        <p>That is where this notebook begins: with a little less input, a little more curiosity, and enough space to follow an idea before deciding what it ought to become.</p>
        <h2 id="leave-some-space">Leave some space</h2>
        <p>A good idea rarely arrives fully formed. More often it starts as a question at the edge of something ordinary: a walk, a conversation, a page you return to.</p>
        <p>We can make room for those beginnings without turning them into another project to manage. An empty hour is allowed to stay empty.</p>
        <h2 id="notice-what-stays">Notice what stays</h2>
        <p>Write down the things that stay with you. Not everything needs to be useful. A sentence, a color, or a small surprise can be enough.</p>
        <h3 id="a-small-practice">A small practice</h3>
        <ul><li>Leave the phone behind for a short walk.</li><li>Keep a page for questions you cannot answer yet.</li><li>Return to one thought before collecting another.</li></ul>
        <h2 id="begin-again">Begin again, gently</h2>
        <p>The point is not a perfect routine. It is a more generous relationship with your own attention. Begin where you are, and see what you notice.</p>`
};
