import { getCollection } from 'astro:content';

/** All case studies, normalised for cards, sorted by `order`. */
export async function getProjects() {
  const entries = (await getCollection('caseStudies')).sort((a, b) => a.data.order - b.data.order);
  return entries.map((e) => ({
    slug: e.id,
    href: `/${e.id}.html`,
    title: e.data.cardTitle ?? e.data.title,
    summary: e.data.summary,
    finding: e.data.finding,
    chips: e.data.chips,
    image: e.data.thumb,
    alt: e.data.thumbAlt ?? '',
    typeCard: e.data.typeCard,
    tier: e.data.tier,
    kind: e.data.kind,
    order: e.data.order,
  }));
}
export type Project = Awaited<ReturnType<typeof getProjects>>[number];
