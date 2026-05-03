# Videoticle V2 Landing Page

This repository contains a static landing page for `videoticle.com`.

## Deploy on GitHub Pages with a custom domain

This repo deploys automatically with GitHub Actions when changes are pushed to
`main`. The workflow builds the Vite site and publishes `dist/` to GitHub Pages.

GitHub setup:

1. In GitHub, go to **Settings -> Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. In **Custom domain**, enter `videoticle.com` and save.
4. Enable **Enforce HTTPS** after DNS propagates.

Namecheap setup:

1. In Namecheap, open **Domain List -> videoticle.com -> Manage -> Advanced DNS**.
2. Remove any parking, forwarding, or conflicting `A`, `AAAA`, or `CNAME`
   records for `@` and `www`.
3. Add these records:
   - `A` record for `@` to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - `AAAA` record for `@` to:
     - `2606:50c0:8000::153`
     - `2606:50c0:8001::153`
     - `2606:50c0:8002::153`
     - `2606:50c0:8003::153`
   - `CNAME` record for `www` to `Summer-o00o.github.io`

Keep `base: './'` in `vite.config.js` so the built assets work both from the
temporary GitHub Pages project path and from the root custom domain.

## Local preview

Install dependencies:

```bash
npm install
```

Start the Vite dev server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
