# Static site for GitHub Pages

This `docs/` folder is a **self-contained static copy** of the First UK Inverse Problems Conference
site (same design, content, and LaTeX template downloads). It has no build
step and no dependencies — it is plain HTML/CSS.

## One-time GitHub Pages setup

1. Push this repository to GitHub (the Lovable GitHub integration handles
   this automatically once you connect the project).
2. On GitHub: **Settings → Pages**.
3. Under *Build and deployment* set:
   - **Source:** *Deploy from a branch*
   - **Branch:** `main` — **folder:** `/docs`
4. Save. GitHub prints the live URL — typically
   `https://<user>.github.io/first-uk-inverse-problems-conference/`.

That's it. Every push to `main` that touches `docs/` republishes the site
automatically. No workflow file, no Node install, nothing to configure.

## Custom domain

Add a `docs/CNAME` file containing your domain (e.g. `firstukinverseproblemsconference.co.uk`)
and point a DNS `CNAME` record for that host at `<user>.github.io`. GitHub
Pages provisions HTTPS automatically.

## Editing the static site

- Content and design: `docs/index.html`
- Hero image: `docs/hero-conference.png`
- LaTeX template + PDF: `docs/downloads/`

The React app under `src/` is **not** used for the GitHub Pages build; it
is the Lovable-hosted version. When you update conference content, edit
both `src/routes/index.tsx` (Lovable) and `docs/index.html` (GitHub Pages),
or just maintain the one you actually publish.

## Optional: automate with GitHub Actions

If you prefer GitHub's newer "Pages via Actions" flow instead of the
branch-folder setup above, a ready-to-use workflow is included at
`.github/workflows/pages.yml`. To use it:

1. **Settings → Pages → Source: GitHub Actions**.
2. Push to `main`. The workflow uploads the `docs/` folder as the Pages
   artifact and deploys it.
