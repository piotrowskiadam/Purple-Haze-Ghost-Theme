// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";
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
// Run after DOM content is loaded to ensure elements exist
document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Prism syntax highlighting
    Prism.highlightAll();

    // Initialize Medium Zoom for images in post content
    mediumZoom('.gh-content img', {
        background: 'var(--color-bg, #040404)', // Use theme background variable
        margin: 24 // Add some margin around the zoomed image
    });
});