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
      /** Original project title: used for <title>, and as the subtitle unless cardTitle is set. */
      title: z.string(),
      /** Title shown on home cards / "next" card when it differs from `title`. */
      cardTitle: z.string().optional(),
      /** Finding-style H1. */
      headline: z.string(),
      /** true => written by the assistant from existing copy; owner must rewrite. */
      headlineDerived: z.boolean().default(false),
      /** Meta description (<= ~200 chars). */
      description: z.string().max(200),
      /** Card summary (home page / next-case card). */
      summary: z.string(),
      /** "Key finding" line shown on selected-work cards. */
      finding: z.string().optional(),
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
      /** TL;DR / Impact block. */
      tldr: z.object({
        stats: z.array(z.object({ value: z.string(), label: z.string() })).min(1).max(4),
        bottomLine: z.string().optional(),
      }),
      /** External resources (Colab, Tableau Public, BigQuery, Sheets...). Never re-hosted. */
      links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    }),
});

export const collections = { caseStudies };
