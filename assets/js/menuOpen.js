export default function menuOpen() {
    const button = document.querySelector('.gh-burger');
    if (!button) return;

    const setOpen = (open) => {
        document.body.classList.toggle('gh-head-open', open);
        button.setAttribute('aria-expanded', String(open));
    };

    button.addEventListener('click', () => {
        setOpen(button.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            button.focus();
        }
    });
    document.querySelector('.gh-head-menu')?.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', () => setOpen(false));
}
