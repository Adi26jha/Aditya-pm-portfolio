# Aditya Jha, product portfolio

Astro static site. See `AGENTS.md` for project rules and `docs/ANTIGRAVITY.md` for the Antigravity workflow.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:4321.

## Add a case study
1. Copy `docs/case-study-template.md` into `src/content/work/`, or fill in the body of an existing project file.
2. Preview at `http://localhost:4321/work/<file-name>/`.
3. Set `published: true`. The public page and the homepage link appear on the next build.

## Teardowns
Self-initiated product teardowns live at `/case-studies/<slug>/`. Each one is listed in `src/data/teardowns.ts` and stays dev-only until you set `published: true` there.

## Update CV facts
Edit `src/data/profile.ts` and replace `public/Aditya_Jha_PM_CV.pdf`.

## Deploy to Netlify
- Quick: run `npm run build`, then drag the `dist` folder into your Netlify site's Deploys page.
- Automatic: push this folder to GitHub and link the repo in Netlify. `netlify.toml` already holds the settings.

If the address changes, update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.
