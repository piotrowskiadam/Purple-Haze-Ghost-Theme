import '../css/index.css';
import menuOpen from './menuOpen';
import infiniteScroll from './infiniteScroll';
import './toc';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import mediumZoom from 'medium-zoom';

// The bundle is deferred, so the document has been parsed before initialization.
menuOpen();
infiniteScroll();

document.querySelectorAll('.gh-content table').forEach(table => {
    if (table.parentElement.classList.contains('table-wrapper')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.before(wrapper);
    wrapper.appendChild(table);
});
Prism.highlightAll();
mediumZoom('.gh-content img:not(a img)', {
    background: 'var(--color-bg, #040404)',
    margin: 24
});
