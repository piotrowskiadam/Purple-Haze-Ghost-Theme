/**
 * Table of Contents (ToC) Generator and Scrollspy
 */
document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.querySelector('.gh-toc-list');
    const content = document.querySelector('.gh-content'); // Area where headings are located
    const tocElement = document.querySelector('.gh-toc'); // The aside element

    // No need to select header/image/footer for this simplified version

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
        threshold: 1.0 // Trigger when element is fully in view within margins
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

    // Removed sticky/bottom observer logic as CSS handles sticky positioning

});