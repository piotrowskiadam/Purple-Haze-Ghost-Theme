# Releasing Purple Haze

Use one release for a reviewed set of changes. Small CSS experiments do not need separate public releases.

1. Update `package.json` and synchronize `package-lock.json` with `npm install --package-lock-only`. Use a patch version for fixes, a minor version for compatible features, and a major version for breaking changes. Add release notes to `CHANGELOG.md`.
2. Run `npm ci`, `npm test`, `npm run test:browser`, `npm run zip`, and `npm run check:zip`. Install the Playwright Chromium browser first if needed. Review remaining GScan warnings rather than treating a successful exit as proof of full compatibility.
3. Upload the ZIP to a staging Ghost installation. Check home, multiple archive pages, articles, static pages, mobile navigation, search, Portal, comments, and editor cards. Check a members-only post and paid checkout if memberships are offered.
4. Review and commit the intended files, including rebuilt assets. Check that the commit’s `package.json` and lockfile have the release version. Avoid staging unrelated local work.
5. When publication is authorized, create an annotated tag for that commit: `git tag -a vX.Y.Z -m "Purple Haze X.Y.Z"`. Push the reviewed branch and that tag. Keep previous tags intact.
6. Create a draft GitHub release for the tag, attach **purple-haze.zip**, and use the corresponding changelog entry as the release notes. Download the attachment once to confirm that it contains the correct version and can be uploaded to Ghost. Publish the reviewed release.

CI checks `v*` tags against both version fields and stores the validated theme ZIP as a workflow artifact. CI does not publish releases or deploy to a blog.

## Historical versions

The repository has 106 local tags and GitHub returned 98 releases during the 31 October 2026 review. `v1.4.79` and `v1.4.80` point to the same commit, whose manifest says `1.4.79`; the existing local changes included a version bump to `1.4.80` and a social-icon hover adjustment. The old lockfile still said `1.4.50`.

Keep the historical releases and tags to preserve download links and reproducibility. v1.5.0 starts a synchronized manifest/lockfile release process. Historical release archive contents were not all downloaded or revalidated; do not infer their embedded versions from their tag names.
