import test from 'node:test';
import assert from 'node:assert/strict';
import {releaseMetadata, publishRelease} from '../scripts/release.mjs';

const manifest = {name: 'purple-haze', version: '1.5.0'};
const lock = {version: '1.5.0', packages: {'': {version: '1.5.0'}}};
const changelog = '# Changelog\n\n## [1.5.0] - 2026-10-31\n\n### Added\n- Automatic releases.\n\n## [1.4.80] - 2025-04-08\nOld notes.';
const metadata = releaseMetadata(manifest, lock, changelog, manifest);
const target = {metadata, repo: 'example/theme', sha: 'a'.repeat(40)};

test('notes belong only to the release being published', () => {
    assert.equal(metadata.tag, 'v1.5.0');
    assert.match(metadata.notes, /Automatic releases/);
    assert.doesNotMatch(metadata.notes, /Old notes/);
});

test('mismatched archives and undated changelogs stop publication', () => {
    assert.throws(() => releaseMetadata(manifest, lock, changelog, {...manifest, version: '1.4.80'}), /archive version/i);
    assert.throws(() => releaseMetadata(manifest, lock, changelog.replace('2026-10-31', 'Unreleased'), manifest), /Date the changelog/);
});

test('a new release targets the tested commit', async () => {
    let created;
    const result = await publishRelease({...target, api: async () => null, create: async args => {
        created = args;
        return 'https://github.com/example/theme/releases/tag/v1.5.0';
    }});
    assert.equal(result.created, true);
    assert.equal(created.sha, target.sha);
    assert.equal(created.tag, 'v1.5.0');
});

test('re-running the same version preserves the published release and archive', async () => {
    const result = await publishRelease({...target, api: async () => ({
        draft: false, assets: [{name: 'purple-haze.zip'}], html_url: 'existing-release'
    }), create: async () => assert.fail('Must not recreate a published release')});
    assert.deepEqual(result, {created: false, url: 'existing-release'});
});

test('a conflicting annotated tag is never overwritten', async () => {
    await assert.rejects(publishRelease({...target, api: async path => {
        if (path.includes('/releases/')) return null;
        if (path.includes('/git/ref/')) return {object: {type: 'tag', sha: 'b'.repeat(40)}};
        return {object: {type: 'commit', sha: 'c'.repeat(40)}};
    }, create: async () => assert.fail('Must not publish from a conflicting tag')}), /different commit/);
});

test('API failures stop publication', async () => {
    await assert.rejects(publishRelease({...target, api: async () => {throw new Error('API unavailable');},
        create: async () => assert.fail('Must not publish when verification failed')}), /API unavailable/);
});
