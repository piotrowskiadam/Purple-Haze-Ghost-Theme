import {readdir, rm} from 'node:fs/promises';
import bestzip from 'bestzip';

// An explicit allowlist keeps development dependencies and design archives out of uploads.
const templates = (await readdir('.')).filter(file => file.endsWith('.hbs'));
await rm('purple-haze.zip', {force: true});
await bestzip({
    source: [
        ...templates, 'package.json', 'LICENSE', 'README.md', 'CHANGELOG.md',
        'assets/built', 'assets/screenshot-desktop.jpg', 'assets/screenshot-mobile.jpg',
        'partials', 'members', 'locales', 'docs'
    ],
    destination: 'purple-haze.zip'
});
console.log('Created purple-haze.zip');
