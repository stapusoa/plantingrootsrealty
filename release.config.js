export default {
  branches: ['main'],
  tagFormat: 'web-v${version}',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'apps/web',    // where your package.json lives
        tarballDir: 'dist',    // optional: if you produce tarballs
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: [
          'apps/web/package.json',
          'apps/web/CHANGELOG.md',
        ],
        message:
          'chore(release): web v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};