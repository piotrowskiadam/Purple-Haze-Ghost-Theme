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
const zoom = mediumZoom('.gh-content img:not(a img)', {
    background: 'var(--color-bg, #040404)',
    margin: 24
});

let keyboardSource;
let closeRequested = false;
zoom.getImages().forEach(image => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${document.body.dataset.zoomLabel || 'Zoom image'}: ${image.alt}`);
    image.setAttribute('aria-expanded', 'false');
    image.addEventListener('keydown', event => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        keyboardSource = image;
        zoom.open({target: image});
    });
});
zoom.on('open', event => {
    closeRequested = false;
    event.target.setAttribute('aria-expanded', 'true');
});
zoom.on('opened', () => {
    if (closeRequested) zoom.close();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && keyboardSource) {
        // Medium Zoom ignores close() while opening; honor Escape once ready.
        closeRequested = true;
        zoom.close();
    }
});
zoom.on('closed', event => {
    event.target.setAttribute('aria-expanded', 'false');
    keyboardSource?.focus({preventScroll: true});
    keyboardSource = null;
    closeRequested = false;
});
