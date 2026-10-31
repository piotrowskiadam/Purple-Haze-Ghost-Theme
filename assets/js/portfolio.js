export default function portfolio() {
    document.querySelectorAll('.gh-portfolio .kg-header-card.kg-layout-split .kg-header-card-image').forEach(image => {
        // Square artwork stays complete; other artwork uses the editorial crop.
        const fit = () => {
            if (!image.naturalHeight) return;
            image.dataset.portfolioFit = Math.abs(image.naturalWidth / image.naturalHeight - 1) < 0.02 ? 'contain' : 'cover';
        };
        image.addEventListener('load', fit);
        if (image.complete) fit();
    });
}
