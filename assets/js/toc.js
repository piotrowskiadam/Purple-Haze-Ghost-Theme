/**
 * Table of Contents (ToC) Generator and Scrollspy
 */
document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.querySelector('.gh-toc-list');
    const content = document.querySelector('.gh-content'); // Area where headings are located
    const tocElement = document.querySelector('.gh-toc'); // The aside element
    const postWrapper = document.querySelector('.gh-post-wrapper'); // Get the wrapper
    const postFooter = document.querySelector('.gh-footer'); // Footer element as bottom trigger
    // Use the start of the main content area as the trigger for stickiness
    const contentStartElement = content; // Observe the .gh-content div itself

    if (!tocContainer || !content || !tocElement) {
        // If any required element is missing, don't proceed
        if (tocElement) tocElement.style.display = 'none';
        return;
    }

    // Select headings (e.g., h2 and h3)
    const headings = content.querySelectorAll('h2, h3');
    const tocItems = []; // To store links for observer

    if (headings.length === 0) {
         tocElement.style.display = 'none'; // Hide ToC if no headings found
         return;
    }

    headings.forEach((heading, index) => {
        // Ensure heading has an ID, generate one if not
        if (!heading.id) {
            // Create a simple slug-like ID
            heading.id = `toc-${heading.tagName.toLowerCase()}-${index}-${heading.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}`;
        }

        // Create ToC list item and link
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        link.dataset.tocTarget = heading.id; // Store target ID for observer

        // Add indentation for H3 headings
        if (heading.tagName === 'H3') {
            listItem.style.paddingLeft = '1em';
        }

        listItem.appendChild(link);
        tocContainer.appendChild(listItem);
        tocItems.push(link); // Add link to our array

        // Optional: Smooth scroll on click
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(heading.id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start' // Align to top
            });
        });
    });

    // --- Intersection Observer for Scrollspy ---
    const scrollspyObserverOptions = {
        rootMargin: '-80px 0px -50% 0px', // Delay highlight until heading is near middle
        threshold: 1.0
    };

    let lastActiveLink = null; // Keep track of the last active link

    const scrollspyCallback = (entries) => {
        let latestEntry = null;

        // Find the latest entry that is intersecting based on time
        entries.forEach(entry => {
             if (entry.isIntersecting) {
                 if (!latestEntry || entry.time > latestEntry.time) {
                    latestEntry = entry;
                 }
             }
        });

        // If we found an intersecting element, highlight its link
        if (latestEntry) {
            const targetId = latestEntry.target.id;
            const activeLink = tocItems.find(link => link.dataset.tocTarget === targetId);

            if (activeLink && activeLink !== lastActiveLink) {
                lastActiveLink?.classList.remove('active');
                activeLink.classList.add('active');
                lastActiveLink = activeLink;
            }
        }
        // If nothing is intersecting, keep the last active link highlighted
    };

    const scrollspyObserver = new IntersectionObserver(scrollspyCallback, scrollspyObserverOptions);
    headings.forEach(heading => {
        scrollspyObserver.observe(heading);
    });

    // --- Intersection Observer for Sticky/Bottom ToC ---
    const stickyOffset = 80; // Must match CSS .toc-active top value

    // Observer for starting sticky
    const stickyStartObserverOptions = {
        rootMargin: `-${stickyOffset}px 0px 0px 0px`, // Trigger when top of contentStartElement hits the sticky line
        threshold: 0
    };

    const stickyStartCallback = (entries) => {
        entries.forEach(entry => {
            // Add active class when the top of the content start element is above the sticky point
            if (!entry.isIntersecting && entry.boundingClientRect.top < stickyOffset) {
                 if (!tocElement.classList.contains('toc-bottom')) { // Don't make active if already at bottom
                    tocElement.classList.add('toc-active'); // Use correct class
                 }
            } else {
                 tocElement.classList.remove('toc-active'); // Use correct class
            }
        });
    };

    const stickyStartObserver = new IntersectionObserver(stickyStartCallback, stickyStartObserverOptions);
    if (contentStartElement) {
        stickyStartObserver.observe(contentStartElement);
    } else {
         // Fallback: If no content, make ToC visible but not fixed/sticky
         tocElement.style.visibility = 'visible';
         tocElement.style.opacity = '1';
         tocElement.style.position = 'absolute'; // Keep initial absolute positioning
    }

    // Observer for reaching the bottom
    const bottomObserverOptions = {
        // Trigger when the top of the footer is X pixels from the bottom of the viewport
        // Adjust the '150px' based on footer height and desired stopping point relative to sticky offset
        rootMargin: `0px 0px -${window.innerHeight - stickyOffset - (postFooter?.offsetHeight || 100) - 50}px 0px`,
        threshold: 0
    };

     const bottomObserverCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Footer is entering the trigger zone near the bottom
                tocElement.classList.add('toc-bottom');
                tocElement.classList.remove('toc-active'); // Ensure fixed positioning is removed
            } else {
                // Check if it was previously bottom-aligned and is now scrolling up
                if (tocElement.classList.contains('toc-bottom')) {
                    // Re-check if it should become active (sticky) again
                    if (contentStartElement && contentStartElement.getBoundingClientRect().top < stickyOffset) {
                         tocElement.classList.remove('toc-bottom');
                         tocElement.classList.add('toc-active'); // Use correct class
                    } else {
                         tocElement.classList.remove('toc-bottom');
                         // It won't become active here, stickyStartObserver will handle it
                    }
                }
            }
        });
    };

    const bottomObserver = new IntersectionObserver(bottomObserverCallback, bottomObserverOptions);
    if (postFooter && postWrapper) { // Need wrapper for absolute positioning context
        bottomObserver.observe(postFooter);
    }

});