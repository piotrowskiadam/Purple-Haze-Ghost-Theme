// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";
import "./toc"; // Import ToC script
import PhotoSwipe from 'photoswipe'; // Import from installed package
import Prism from 'prismjs';

// Import specific languages for Prism (add more as needed)
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // For HTML
import 'prismjs/components/prism-bash'; // For shell scripts
import 'prismjs/components/prism-json';
import mediumZoom from 'medium-zoom';


// Call the functions
menuOpen();
infiniteScroll();
// Removed handleTagLinks() as it's no longer needed with the new card structure

// Initialize Prism syntax highlighting
// Function to wrap tables for horizontal scrolling
const wrapTables = () => {
    const tables = document.querySelectorAll('.gh-content table');
    tables.forEach(table => {
        // Check if table is already wrapped
        if (table.parentNode.classList.contains('table-wrapper')) {
            return;
        }
        const wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
};

/**
 * PhotoSwipe Gallery Initialization
 */
const initPhotoSwipe = () => {
    const galleries = document.querySelectorAll('.kg-gallery-card');

    galleries.forEach((galleryContainer) => {
        const images = galleryContainer.querySelectorAll('.kg-gallery-image img');
        if (!images.length) return;

        images.forEach((img, imageIndex) => {
            img.style.cursor = 'zoom-in'; // Indicate images are clickable

            // Ensure image has dimensions for PhotoSwipe
            if (!img.naturalWidth) {
                // Preload image to get dimensions if not available
                const tempImg = new Image();
                tempImg.onload = () => {
                    img.setAttribute('data-pswp-width', tempImg.naturalWidth);
                    img.setAttribute('data-pswp-height', tempImg.naturalHeight);
                };
                tempImg.src = img.src;
            } else {
                 img.setAttribute('data-pswp-width', img.naturalWidth);
                 img.setAttribute('data-pswp-height', img.naturalHeight);
            }


            img.addEventListener('click', (e) => {
                e.preventDefault();

                const slides = [];
                images.forEach(innerImg => {
                    slides.push({
                        src: innerImg.src,
                        w: parseInt(innerImg.getAttribute('data-pswp-width') || innerImg.naturalWidth || 1024),
                        h: parseInt(innerImg.getAttribute('data-pswp-height') || innerImg.naturalHeight || 768),
                        // alt: innerImg.alt // Optional: use alt text as caption
                    });
                });

                const options = {
                    dataSource: slides,
                    index: imageIndex,
                };

                const lightbox = new PhotoSwipe(options);
                lightbox.init();
            });
        });
    });
};


// Run after DOM content is loaded to ensure elements exist
document.addEventListener('DOMContentLoaded', () => {
    wrapTables(); // Wrap tables on initial load
    Prism.highlightAll(); // Initialize Prism
    initPhotoSwipe(); // Initialize PhotoSwipe galleries

    // Re-run functions if content is loaded dynamically (e.g., infinite scroll)
    // Need a way to detect new content - MutationObserver or custom event
    // Example using a simple MutationObserver on the main content area:
    const mainElement = document.querySelector('.gh-main'); // Adjust selector if needed
    if (mainElement) {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if added nodes contain tables or code blocks or galleries
                    let needsReRun = false;
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Check if it's an element node
                             if (node.querySelector('table') || node.matches('table')) {
                                wrapTables(); // Re-wrap tables in new content
                                needsReRun = true;
                             }
                             if (node.querySelector('pre code') || node.matches('pre code')) {
                                Prism.highlightAll(); // Re-highlight code in new content
                                needsReRun = true;
                             }
                             if (node.querySelector('.kg-gallery-card') || node.matches('.kg-gallery-card')) {
                                initPhotoSwipe(); // Re-initialize galleries in new content
                                needsReRun = true;
                             }
                        }
                    });
                }
            });
        });

        observer.observe(mainElement, { childList: true, subtree: true });
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Prism syntax highlighting
    Prism.highlightAll();

    // Initialize Medium Zoom for images in post content
    mediumZoom('.gh-content img', {
        background: 'var(--color-bg, #040404)', // Use theme background variable
        margin: 24 // Add some margin around the zoomed image
    });

    // Wrap tables for scrolling
    wrapTables();
});