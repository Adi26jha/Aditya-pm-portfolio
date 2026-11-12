# Using Antigravity on this project

Open this folder in Antigravity. It should pick up `AGENTS.md`, so both agents work to the same rules. Work with one agent at a time so edits don't collide.

| Job | Best tool | Why |
| --- | --- | --- |
| Writing case studies, editing copy, code and structure | Claude Code | Works from your source material and keeps claims accurate |
| Click-through QA in a real browser | Antigravity | Its browser agent drives Chrome and returns screenshots |
| Case study visuals | Antigravity | Built-in image generation next to the code |
| Trying out layout or interaction ideas | Antigravity | Fast to see the result, easy to discard |

## Prompts to paste

### 1. Browser QA
> Run `npm run dev` and open the site in the browser. Walk through it as a recruiter at 1440px and 390px wide, in light and dark mode: use every nav link, every outcome row in the hero, the CV download and the external links. Give me a list of anything broken, misaligned or hard to read, with screenshots. Report only. Do not change any files.

### 2. Case study diagram
> Read `AGENTS.md` and `src/content/work/<project>.md`. Create a simple flow diagram of <the flow I describe here> for the case study, matching the site: paper background #f5f2ea, ink #17181a, one vermilion accent #b93c0a, ruled lines, no gradients. Use only the steps I listed and no client names or real data. Save it to `public/images/case-studies/<project>/` and show it to me before adding it to the page.

### 3. Hero or section experiment
> On a new copy of `src/pages/index.astro` called `src/pages/lab.astro`, try <idea>. Do not change copy or metrics. Keep to the design rules in `AGENTS.md`. Show me a screenshot next to the current version. I'll decide whether to keep it, and I'll delete `lab.astro` before going live.

## Watch-outs
- Don't use generated images as if they were real product screenshots. Use real, redacted screens or clearly illustrative diagrams.
- Check every label inside a generated image. Image models misspell text and can invent steps.
