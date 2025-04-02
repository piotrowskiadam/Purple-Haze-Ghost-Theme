// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";
import "./toc"; // Import ToC script
// Removed PhotoSwipe import
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

// Removed initPhotoSwipe function

// Run after DOM content is loaded to ensure elements exist
document.addEventListener('DOMContentLoaded', () => {
    wrapTables(); // Wrap tables on initial load
    Prism.highlightAll(); // Initialize Prism
    // Removed initPhotoSwipe() call

    // Initialize Medium Zoom for images in post content
    mediumZoom('.gh-content img', {
        background: 'var(--color-bg, #040404)', // Use theme background variable
        margin: 24 // Add some margin around the zoomed image
    });

    // Re-run functions if content is loaded dynamically (e.g., infinite scroll)
    // Need a way to detect new content - MutationObserver or custom event
    // Example using a simple MutationObserver on the main content area:
    const mainElement = document.querySelector('.gh-main'); // Adjust selector if needed
    if (mainElement) {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // Check if added nodes contain tables or code blocks
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1) { // Check if it's an element node
                             if (node.querySelector('table') || node.matches('table')) {
                                wrapTables(); // Re-wrap tables in new content
                             }
                             if (node.querySelector('pre code') || node.matches('pre code')) {
                                Prism.highlightAll(); // Re-highlight code in new content
                             }
                             // Removed PhotoSwipe re-initialization check
                        }
                    });
                }
            });
        });

        observer.observe(mainElement, { childList: true, subtree: true });
    }
});

// Removed duplicate DOMContentLoaded listener