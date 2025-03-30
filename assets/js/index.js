// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import infiniteScroll from "./infiniteScroll";

// Function to handle tag link clicks and stop propagation
const handleTagLinks = () => {
    const tagLinks = document.querySelectorAll('a.gh-card-tag');
    tagLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Stop the click event from bubbling up to the parent card link
            event.stopPropagation();
            // Allow the default link behavior (navigation) to proceed
        });
    });
};

// Call the functions
menuOpen();
infiniteScroll();
handleTagLinks(); // Add call to the new function