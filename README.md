# fuste-r Website

This repository contains the source for christianbookheimer.com, a small React + TypeScript site built with Vite.

Summary of work included in this repo
- Added a kinetic canvas background animation component.
- Replaced placeholder avatar with a WebP avatar located at `src/assets/avatar.webp`.
- Updated contact links to point to GitHub, LinkedIn, and added a `boot.dev` link.
- Fixed production asset paths by setting Vite `base: './'` so assets load correctly on GitHub Pages.
- Added SEO enhancements: canonical link, Open Graph + Twitter cards, JSON-LD person data.
- Created `public/robots.txt` and `public/sitemap.xml`.
- Implemented CI to build and publish `dist/` to GitHub Pages (`.github/workflows/deploy-pages.yml`) and fixed workflow issues (Node version, permissions, artifact publishing).

Getting started
1. Install dependencies:

```bash
npm install
```

2. Development:

```bash
npm run dev
# open http://localhost:5173
```

3. Build for production:

```bash
npm run build
npm run preview
# preview at http://localhost:4173
```

Deployment
- This project is published to GitHub Pages. The workflow builds the app and publishes `./dist` to the `gh-pages` branch.
- The repository includes a `CNAME` for `christianbookheimer.com`.
- If you need to publish manually:

```bash
# build
npm run build
# copy dist to a branch or use git worktree, then push to gh-pages
```

Notes & troubleshooting
- If animations don't appear after deploy, ensure `vite.config.ts` has `base: './'` so assets use relative URLs.
- CI requires workflow-level `permissions` (`contents: write`, `pages: write`, `id-token: write`) so `GITHUB_TOKEN` can publish pages.
- Node version for CI is set to a modern LTS (Node 24) to match bundler requirements.

Contributing
- Fixes, improvements, or updated content welcome — open a PR.

License
- This project uses the repository's default license (see root files).

