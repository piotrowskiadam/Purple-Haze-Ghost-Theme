// A viewer image has its own intrinsic dimensions; it must not clone a cropped card.
export default function imageZoom() {
    const images = [...document.querySelectorAll('.gh-content img:not(a img)')];
    if (!images.length) return;
    const labels = document.body.dataset;
    const zoomLabel = labels.zoomLabel || 'Zoom image';
    const dialog = document.createElement('dialog');
    dialog.className = 'gh-image-viewer';
    dialog.id = 'gh-image-viewer';
    const viewer = document.createElement('img');
    viewer.className = 'gh-image-viewer-image';
    const status = document.createElement('p');
    status.className = 'gh-image-viewer-status';
    status.setAttribute('role', 'status');
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'gh-image-viewer-close';
    close.setAttribute('aria-label', labels.zoomCloseLabel || 'Close image');
    close.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg>';
    dialog.append(close, viewer, status);
    document.body.append(dialog);
    let source;

    function open(image, description) {
        if (dialog.open) return;
        source = image;
        dialog.setAttribute('aria-label', description ? `${zoomLabel}: ${description}` : zoomLabel);
        dialog.setAttribute('aria-busy', 'true');
        viewer.hidden = true;
        viewer.alt = description;
        status.hidden = false;
        status.textContent = labels.zoomLoadingLabel || 'Loading image…';
        viewer.onload = () => {
            if (source !== image || !dialog.open) return;
            viewer.hidden = false;
            status.hidden = true;
            dialog.setAttribute('aria-busy', 'false');
        };
        viewer.onerror = () => {
            if (source !== image || !dialog.open) return;
            status.textContent = labels.zoomErrorLabel || 'The image could not be loaded.';
            dialog.setAttribute('aria-busy', 'false');
        };
        image.setAttribute('aria-expanded', 'true');
        document.documentElement.classList.add('gh-image-viewer-open');
        dialog.showModal();
        close.focus();
        // Prefer the original file over a responsive thumbnail, retaining authored HD URLs.
        viewer.src = image.dataset.zoomSrc || image.getAttribute('src') || image.currentSrc;
    }

    close.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
        if (event.target === dialog || event.target === viewer) dialog.close();
    });
    dialog.addEventListener('close', () => {
        const original = source;
        source = null;
        viewer.onload = null;
        viewer.onerror = null;
        viewer.removeAttribute('src');
        document.documentElement.classList.remove('gh-image-viewer-open');
        original?.setAttribute('aria-expanded', 'false');
        original?.focus({preventScroll: true});
    });
    images.forEach(image => {
        const description = image.alt.trim()
            || image.closest('figure')?.querySelector('figcaption')?.textContent.trim()
            || image.closest('.kg-header-card')?.querySelector('h2')?.innerText.trim()
            || '';
        image.classList.add('gh-zoomable-image');
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-haspopup', 'dialog');
        image.setAttribute('aria-controls', dialog.id);
        image.setAttribute('aria-label', description ? `${zoomLabel}: ${description}` : zoomLabel);
        image.setAttribute('aria-expanded', 'false');
        image.addEventListener('click', () => open(image, description));
        image.addEventListener('keydown', event => {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            open(image, description);
        });
    });
}
