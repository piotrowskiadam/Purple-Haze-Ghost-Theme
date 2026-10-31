# Releasing Purple Haze

A successful validation run on `main` automatically publishes the version in `package.json` as a GitHub release and attaches the validated **purple-haze.zip**. Both Node 22 and Node 24 jobs must pass first. Pull requests, other branches, and tag validation runs cannot publish.

## Prepare a new version

1. Update `package.json` and synchronize `package-lock.json` with `npm install --package-lock-only`. Use a patch version for fixes, a minor version for compatible features, and a major version for breaking changes. Use a new number only when a new public release is intended; ordinary commits can keep the existing version.
2. Add a matching dated entry to `CHANGELOG.md`, such as `## [1.5.1] - 2026-11-01`. An `Unreleased` heading cannot be published automatically. The entry becomes the release notes.
3. Run `npm ci`, `npm test`, `npm run test:release`, `npm run test:html`, `npm run test:browser`, `npm run zip`, and `npm run check:zip`. Install the Playwright Chromium, Firefox, and WebKit browsers first if needed. Review GScan warnings rather than treating a successful exit as proof of complete compatibility.
4. Test the candidate in a staging Ghost installation. Check home, multiple archive pages, articles, static pages, mobile navigation, search, Portal, comments, and editor cards. Check members-only content and paid checkout if offered. Marketplace readiness is tracked separately in [SUBMISSION-AUDIT.md](SUBMISSION-AUDIT.md).
5. Review and push the intended changes to `main`, including rebuilt assets. GitHub Actions creates `vX.Y.Z` at the tested commit and publishes the release after validation succeeds. No blog deployment or marketplace submission occurs automatically.

## Publication safeguards

- The release job downloads the ZIP produced and checked by the Node 22 validation job; it does not rebuild a different archive.
- Manifest, both lockfile version fields, and the ZIP’s embedded theme name/version must agree.
- Releases target the exact validated commit SHA. Existing version tags are never moved.
- A published release with its theme archive is preserved on subsequent runs. To publish changed theme files, bump the version rather than replace the previous release.
- An existing draft or incomplete release requires review. API failures stop publication.
- Publication jobs run sequentially and receive `contents: write` only in the release job. Validation jobs have read access.
- To retry a transient failure, rerun the failed job. A manual workflow run on `main` also validates and publishes an unpublished version.

## Historical versions

The repository had 106 local tags and GitHub returned 98 releases during the 31 October 2026 review. `v1.4.79` and `v1.4.80` point to the same commit, whose manifest says `1.4.79`; the original local changes included a version bump to `1.4.80` and a social-icon hover adjustment. The old lockfile still said `1.4.50`.

Keep historical releases and tags intact. v1.5.0 starts a synchronized manifest/lockfile release process. Historical release archive contents were not all downloaded or revalidated; do not infer their embedded versions from their tag names.
