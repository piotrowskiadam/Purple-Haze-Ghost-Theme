import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {render} from './fixture.mjs';

export function createFixtureServer() {
    return createServer(async (req, res) => {
        const path = new URL(req.url, 'http://localhost').pathname;
        const demoAsset = /^\/demo-assets\/([a-z-]+\.svg)$/.exec(path);
        const asset = /^\/assets\/([a-zA-Z0-9_./-]+)$/.exec(path);
        if (demoAsset || asset) {
            try {
                if (path.split('/').includes('..')) throw new Error('Invalid path');
                const file = demoAsset ? `docs/screenshots/demo-assets/${demoAsset[1]}` : `.${path}`;
                const content = await readFile(file);
                const types = {'.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png'};
                res.setHeader('Content-Type', types[file.slice(file.lastIndexOf('.'))] || 'application/octet-stream');
                res.end(content);
            } catch { res.writeHead(404).end(); }
        } else {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(render(path, {demo: path.startsWith('/demo/')}));
        }
    });
}

if (resolve(process.argv[1] || '') === fileURLToPath(import.meta.url)) {
    createFixtureServer().listen(4173, '127.0.0.1');
}
