import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Case-study collection. One MDX file per project; the file name is the URL slug
 * (ecommerceu_segmentation.mdx -> /ecommerceu_segmentation.html, matching the legacy URL).
 */
const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.mdx' }),
  schema: z.object({
    /** Original project title (kept for <title>, breadcrumbs, cards). */
    title: z.string(),
    /** Finding-style H1. */
    headline: z.string(),
    /** true => written by the assistant from existing copy; owner must rewrite. */
    headlineDerived: z.boolean().default(false),
    /** Meta description (<= ~160 chars). */
    description: z.string().max(200),
    /** Card summary (home page / next-case card). */
    summary: z.string(),
    kind: z.enum(['flagship', 'course']).default('flagship'),
    /** Position in the sequence; drives "Case study 0N" and "Next case study". */
    order: z.number().int().positive(),
    chips: z.array(z.string()).default([]),
    /** TL;DR / Impact block. */
    tldr: z.object({
      stats: z.array(z.object({ value: z.string(), label: z.string() })).min(1).max(4),
      bottomLine: z.string().optional(),
    }),
    /** External resources (Colab, Tableau Public, BigQuery...). Never re-hosted. */
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
  }),
});

export const collections = { caseStudies };
