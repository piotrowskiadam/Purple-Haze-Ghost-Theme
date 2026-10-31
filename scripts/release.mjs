import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFile, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

export function releaseMetadata(manifest, lock, changelog, zipManifest) {
    const version = manifest.version;
    assert.match(version, /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/, 'Use a stable X.Y.Z release version');
    assert.equal(lock.version, version, 'Lockfile version must match');
    assert.equal(lock.packages[''].version, version, 'Root lockfile metadata must match');
    assert.equal(zipManifest.name, manifest.name, 'Archive must contain this theme');
    assert.equal(zipManifest.version, version, 'Validated archive version must match');
    const sections = changelog.split(/^## /m).slice(1);
    const section = sections.find(text => text.startsWith(`[${version}] - `));
    assert(section, `Missing changelog entry for ${version}`);
    assert.match(section.split('\n')[0], /^\[\d+\.\d+\.\d+\] - \d{4}-\d{2}-\d{2}$/, 'Date the changelog entry before publishing');
    const notes = section.slice(section.indexOf('\n') + 1).trim();
    assert(notes, 'Release notes must not be empty');
    return {version, tag: `v${version}`, notes};
}

export async function publishRelease({metadata, repo, sha, api, create}) {
    assert.match(repo, /^[\w.-]+\/[\w.-]+$/, 'Invalid repository');
    assert.match(sha, /^[a-f0-9]{40}$/, 'Release target must be an exact commit');
    const prefix = `repos/${repo}`;
    const existing = await api(`${prefix}/releases/tags/${metadata.tag}`);
    if (existing) {
        assert(!existing.draft, 'An existing draft needs review before automation can continue');
        assert(existing.assets?.some(asset => asset.name === 'purple-haze.zip'), 'Existing release is missing its theme archive');
        return {created: false, url: existing.html_url};
    }

    // Never move an existing version tag to a different commit.
    const ref = await api(`${prefix}/git/ref/tags/${metadata.tag}`);
    if (ref) {
        let object = ref.object;
        while (object.type === 'tag') {
            const tag = await api(`${prefix}/git/tags/${object.sha}`);
            assert(tag, 'Could not resolve annotated tag');
            object = tag.object;
        }
        assert.equal(object.type, 'commit', 'Version tag must point to a commit');
        assert.equal(object.sha, sha, 'Version tag already points to a different commit');
    }
    const url = await create({...metadata, repo, sha});
    return {created: true, url};
}

async function main() {
    const {GITHUB_REPOSITORY: repo, GITHUB_SHA: sha, GH_TOKEN: token} = process.env;
    assert(['push', 'workflow_dispatch'].includes(process.env.GITHUB_EVENT_NAME), 'Only main-branch runs can publish');
    assert.equal(process.env.GITHUB_REF, 'refs/heads/main', 'Only main can publish');
    assert(token, 'GH_TOKEN is required');
    const manifest = JSON.parse(await readFile('package.json', 'utf8'));
    const lock = JSON.parse(await readFile('package-lock.json', 'utf8'));
    const zipManifest = JSON.parse(execFileSync('unzip', ['-p', 'purple-haze.zip', 'package.json'], {encoding: 'utf8'}));
    const metadata = releaseMetadata(manifest, lock, await readFile('CHANGELOG.md', 'utf8'), zipManifest);
    const api = async path => {
        const response = await fetch(`https://api.github.com/${path}`, {
            headers: {Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28'}
        });
        if (response.status === 404) return null;
        assert(response.ok, `GitHub API request failed (${response.status}) for ${path}`);
        return response.json();
    };
    const result = await publishRelease({metadata, repo, sha, api, create: async release => {
        const notesPath = join(process.env.RUNNER_TEMP || tmpdir(), `purple-haze-${release.version}-notes.md`);
        await writeFile(notesPath, release.notes + '\n');
        return execFileSync('gh', [
            'release', 'create', release.tag, 'purple-haze.zip', '--repo', release.repo,
            '--target', release.sha, '--title', `Purple Haze ${release.version}`, '--notes-file', notesPath
        ], {encoding: 'utf8'}).trim();
    }});
    console.log(`${result.created ? 'Published' : 'Already published'}: ${result.url}`);
}

if (resolve(process.argv[1] || '') === fileURLToPath(import.meta.url)) await main();
