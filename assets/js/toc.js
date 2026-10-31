// Build the article outline and keep its current section in sync with scrolling.
document.addEventListener('DOMContentLoaded', () => {
    const outline = document.querySelector('.gh-toc');
    const list = outline?.querySelector('.gh-toc-list');
    const headings = [...document.querySelectorAll('.gh-content h2, .gh-content h3')];
    if (!outline || !list) return;
    if (!headings.length) {
        outline.hidden = true;
        outline.style.display = 'none';
        return;
    }

    const links = headings.map((heading, index) => {
        if (!heading.id) {
            let id = `toc-${index}`;
            while (document.getElementById(id)) id += '-heading';
            heading.id = id;
        }
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${encodeURIComponent(heading.id)}`;
        link.textContent = heading.textContent;
        if (heading.tagName === 'H3') item.className = 'gh-toc-subsection';
        item.append(link);
        list.append(item);
        link.addEventListener('click', event => {
            // Preserve open-in-new-tab and other native link gestures.
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            if (!heading.hasAttribute('tabindex')) heading.tabIndex = -1;
            heading.focus({preventScroll: true});
            heading.scrollIntoView({
                behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
                block: 'start'
            });
            history.replaceState(null, '', link.hash);
        });
        return link;
    });

    outline.hidden = false;
    let active = -1;
    let scheduled = false;
    const update = () => {
        scheduled = false;
        let current = 0;
        // Track the last heading above the reading position, including long sections
        // and upward scrolling after the heading itself has left the viewport.
        for (let index = 0; index < headings.length; index++) {
            if (headings[index].getBoundingClientRect().top <= 120) current = index;
            else break;
        }
        if (current === active) return;
        links[active]?.classList.remove('active');
        links[active]?.removeAttribute('aria-current');
        links[current].classList.add('active');
        links[current].setAttribute('aria-current', 'location');
        active = current;
    };
    const schedule = () => {
        if (!scheduled) {
            scheduled = true;
            requestAnimationFrame(update);
        }
    };
    addEventListener('scroll', schedule, {passive: true});
    addEventListener('resize', schedule);
    document.querySelector('.gh-content')?.addEventListener('load', schedule, true);
    document.fonts?.ready.then(schedule);
    update();
});
