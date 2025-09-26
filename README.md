# Chinmaya Rout — Portfolio (Deploy-ready)

This repo contains a static portfolio website and a GitHub Actions workflow that deploys the site to **GitHub Pages** automatically whenever you push to the **main** branch.

## Quick steps to deploy (one-shot)
1. Create a new GitHub repo (or use existing).  
2. Ensure your default branch is `main` (or change the workflow branches: value `main`).  
3. Push **all files** (including `.github/workflows/deploy.yml`) to the repository root.  
   ```
   git init
   git add .
   git commit -m "Initial portfolio upload"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
4. Go to **Actions** tab in GitHub — you should see the workflow `Deploy to GitHub Pages` running.  
5. After the workflow completes, go to **Settings → Pages** (or **Pages** in the sidebar) and confirm the site URL. GitHub Pages will usually say "Your site is published at https://<your-username>.github.io/<repo>/".

## If deployment failed — common causes & fixes
- **No `index.html` at repository root** — make sure `index.html` is in the root (not inside a nested folder).
- **Workflow didn't run / blocked** — check Actions tab for errors and logs. Commonly fixed by ensuring the workflow file is at `.github/workflows/deploy.yml` and you pushed to `main`.
- **Using GitHub Pages old settings (branch gh-pages)** — the provided workflow deploys via the new Pages API and will work even if Pages source is 'None' — but ensure branch `main` is used. If you want to use `gh-pages` branch instead, let me know and I'll provide a different workflow.
- **Cache or Jekyll processing problems** — add an empty file named `.nojekyll` in the repo root to prevent Jekyll from processing (we include one here).
- **Custom domain or CNAME issues** — if you have a CNAME or custom domain configured, GitHub Pages may require validation or DNS changes.
- **404 after deploy** — check the repository name vs URL. If using `https://<username>.github.io/<repo>/`, make sure you opened the repo subpath. For user pages (https://<username>.github.io/) repository must be named `<username>.github.io`.
- **Permissions** — the workflow uses the built-in `GITHUB_TOKEN` and standard actions; ensure Actions are enabled for the repo (Settings → Actions).

## Logs / Debugging
- Open the **Actions** tab → select the workflow run → review the step logs (Checkout, Upload artifact, Deploy). The logs show errors for missing files or permission issues.
