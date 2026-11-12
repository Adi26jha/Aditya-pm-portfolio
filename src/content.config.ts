import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    /** One or two sentences for the homepage row. */
    summary: z.string(),
    area: z.string(),
    company: z.string(),
    period: z.string(),
    role: z.string(),
    /** Shown largest on the homepage row and in the case study header. */
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).min(1),
    order: z.number(),
    /** Flip to true once the body holds a real case study. Adds the public page and homepage link. */
    published: z.boolean().default(false),
  }),
});

export const collections = { work };
