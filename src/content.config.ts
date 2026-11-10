import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Case-study collection. One MDX file per project; the file name is the URL slug
 * (ecommerceu_segmentation.mdx -> /ecommerceu_segmentation.html, matching the legacy URL).
 * The home page reads its cards from this collection (single source of truth).
 */
const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.mdx' }),
  schema: ({ image }) =>
    z.object({
      /** Original page <title> (legacy <title>, approved typo fixes only). */
      title: z.string(),
      /** Original page H1 when it differs from <title> (legacy <h1>). Defaults to `title`. */
      heading: z.string().optional(),
      /** Original home-card title (legacy index.html) when it differs from the page title. */
      cardTitle: z.string().optional(),
      /** Meta description (<= ~200 chars). */
      description: z.string().max(200),
      /** Card summary: the original paragraph from legacy/index.html. */
      summary: z.string(),
      /** flagship = E-commerceU case study ("Case study 0N"); course = course project. */
      kind: z.enum(['flagship', 'course']).default('flagship'),
      /** selected = home "Selected Work"; more = home "Course work & more". */
      tier: z.enum(['selected', 'more']).default('selected'),
      /** Position in the global sequence; drives home order, eyebrow numbering and "Next case study". */
      order: z.number().int().positive(),
      chips: z.array(z.string()).default([]),
      /** Card thumbnail (real chart) + alt text. Omit and set typeCard for a typographic card. */
      thumb: image().optional(),
      thumbAlt: z.string().optional(),
      typeCard: z.object({ label: z.string(), text: z.string() }).optional(),
      /** TOC depth: 2 = sections only, 3 = also sub-sections (e.g. one per SQL task). */
      tocDepth: z.union([z.literal(2), z.literal(3)]).default(2),
      /** Optional TL;DR / Impact block (component kept, currently unused: owner wants original text only). */
      tldr: z
        .object({
          stats: z.array(z.object({ value: z.string(), label: z.string() })).min(1).max(4),
          bottomLine: z.string().optional(),
        })
        .optional(),
      /** Optional header link row (currently unused: links stay inline in the original text). */
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    }),
});

export const collections = { caseStudies };
