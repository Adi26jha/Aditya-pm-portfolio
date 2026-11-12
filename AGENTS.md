# Aditya Jha PM portfolio: rules for coding agents

Applies to any agent working here (Claude Code, Antigravity). The audience is hiring managers and recruiters for PM and APM roles in EU fintech, HR-tech and B2B SaaS. They give the site about 30 seconds.

## Stack
Astro 5 static site, plain CSS, no client-side framework. Hosted on Netlify. Node 22.

- `npm run dev`: local server, also shows unpublished case studies
- `npm run build`: production build into `dist/`
- `npm run check`: type check

## Where things live
- `src/data/profile.ts`: all CV facts, including hero outcomes, approach and experience
- `src/content/work/*.md`: one file per project. Frontmatter drives the homepage row, the body is the case study
- `src/styles/global.css`: every colour and font token is on `:root`, with dark values in the `prefers-color-scheme` block
- `docs/case-study-template.md`: copy this to add a project
- `src/data/teardowns.ts` + `src/components/teardowns/`: self-initiated, scroll-animated teardowns, styled by `src/styles/story.css`. Animate an element by giving it class `r`.

## Non-negotiable
1. Never invent or round a metric, customer, scope or responsibility. Every claim must trace to the CV or to material Aditya supplied. If something is missing, ask.
2. Keep Aditya's verbs accurate: "designed" and "prototyped" must not become "shipped" or "led".
3. Never publish client names, real worker or payment data, or unredacted product screens from Komp.AI.
4. Set `published: true` only when the case study body is complete and Aditya has approved it.
5. Keep the page fast: no new runtime dependency or client-side JavaScript without a clear reason. Respect `prefers-reduced-motion`.
6. Keep contrast at WCAG AA in light and dark, and the layout free of horizontal scroll down to 320px.
7. Teardowns answer public prompts. Credit the prompt, write an original answer, never copy someone else's published answer, and label estimates and assumptions as such.
8. Keep the design language: paper and ink palette, one vermilion accent, Newsreader / Instrument Sans / IBM Plex Mono, ruled lines, no gradients, no card shadows.
