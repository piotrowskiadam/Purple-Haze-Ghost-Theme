import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const manifest = JSON.parse(await readFile('package.json', 'utf8'));
const lock = JSON.parse(await readFile('package-lock.json', 'utf8'));
assert.equal(lock.version, manifest.version, 'Lockfile version must match the theme');
assert.equal(lock.packages[''].version, manifest.version, 'Root dependency metadata must match the theme');
if (process.env.GITHUB_REF_TYPE === 'tag') {
    assert.equal(process.env.GITHUB_REF_NAME, `v${manifest.version}`, 'Release tag must match the theme version');
}
console.log(`Version metadata agrees: ${manifest.version}`);
