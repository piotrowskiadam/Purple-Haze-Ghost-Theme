/**
 * Table of Contents (ToC) Generator and Scrollspy
 */
document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.querySelector('.gh-toc-list');
    const content = document.querySelector('.gh-content'); // Area where headings are located
    const tocElement = document.querySelector('.gh-toc'); // The aside element
    const featureImage = document.querySelector('.gh-feature-image'); // Get feature image element
    const postHeader = document.querySelector('.gh-header'); // Get header element

    if (!tocContainer || !content || !tocElement) {
        // If any required element is missing, don't proceed
        if (tocElement) tocElement.style.display = 'none'; // Hide ToC container if content/list missing
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
            // Optionally close mobile menu if open
        });
    });

    // --- Intersection Observer for Scrollspy ---
    const observerOptions = {
        rootMargin: '-80px 0px -50% 0px', // Delay highlight until heading is near middle
        threshold: 1.0
    };

    let lastActiveLink = null; // Keep track of the last active link

    const observerCallback = (entries) => {
        let latestEntry = null;

         // Find the latest entry that is intersecting or was intersecting just above the threshold
        entries.forEach(entry => {
             if (entry.isIntersecting) {
                 latestEntry = entry;
             } else if (entry.boundingClientRect.top < entry.rootBounds.top && !latestEntry) {
                 // If we scrolled past an element, consider it the latest if nothing else is intersecting
                 // This helps catch the last element when scrolling up fast
                 const correspondingLink = tocItems.find(link => link.dataset.tocTarget === entry.target.id);
                 if (correspondingLink && correspondingLink !== lastActiveLink) {
                    // Check if it's a different element than the last active one
                    // This logic might need refinement depending on exact behavior desired when scrolling up
                 }
             }
        });


        // If we found an intersecting element, highlight its link
        if (latestEntry) {
            const targetId = latestEntry.target.id;
            const activeLink = tocItems.find(link => link.dataset.tocTarget === targetId);

            if (activeLink && activeLink !== lastActiveLink) {
                 // Remove active class from previously active link
                lastActiveLink?.classList.remove('active');
                // Add active class to the new active link
                activeLink.classList.add('active');
                lastActiveLink = activeLink; // Update last active link
            }
        }
        // If no entries are intersecting (e.g., scrolled past the last heading),
        // potentially keep the last one active or deactivate all.
        // Current logic keeps the last one active until a new one intersects.
    };


    const observer = new IntersectionObserver(observerCallback, observerOptions);

    headings.forEach(heading => {
        observer.observe(heading);
    });

    // Removed sticky observer logic as CSS handles it now

});