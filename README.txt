# Adharul Imron: Data Analyst Portfolio

Live site: **[i-adharul.github.io](https://i-adharul.github.io)**

My data analytics portfolio from my time in growth and product marketing and the RevoU Full Stack Data Analysis program. It collects case studies on customer segmentation, KPI dashboards, churn analysis, SQL, Tableau and spreadsheets.

I now work as a developer, so my software projects live in a separate place: see my [GitHub profile](https://github.com/i-adharul).

## What's inside

**Case studies (E-commerceU)**

| Case study | Tools |
|---|---|
| Marketing strategy based on customer segmentation | Python, RFM, K-means |
| KPI dashboards for C-level, managerial and operational level | Tableau |
| Exploratory data analysis and churn analysis of the 2021 revenue decline | Cohort retention, revenue per transaction |
| Feature roll-out adoption analysis | Funnel and adoption analysis |

**Course work (RevoU)**

| Assignment | Tools |
|---|---|
| SQL: San Francisco Ford GoBike Share and Hacker News retention cohorts | BigQuery |
| Tableau and Google Data Studio: e-commerce dashboard, Singapore Airbnb listings | Tableau, Google Data Studio |
| Spreadsheet and Statistics, including an A/B test with a z-test | Google Sheets |
| BBCA stock price candlestick chart | Google Finance, Google Sheets, Tableau Public |

## Tech stack

- [Astro](https://astro.build) with MDX for content, static output
- Tailwind CSS 4 and the Inter variable font
- Light and dark theme, responsive layout
- Sitemap generated at build time, plus an Open Graph image for link previews
- Deployed to GitHub Pages with GitHub Actions on every push to `main`

## Project structure

```
src/
  content/case-studies/   one MDX file per case study (file name = URL slug)
  components/             Astro components (cards, TOC, figures, theme toggle)
  data/home.ts            hero, skills and contact text
  layouts/                page layouts
  pages/                  home, case-study route, 404
  site.ts                 site-wide facts (name, links, contact)
legacy/                   the original 2022 HTML pages, kept as the content reference
design/                   design mockups and the design notes
scripts/parity.mjs        checks the new pages against the legacy text
.github/workflows/        GitHub Pages deployment
```

The home page cards, the "next case study" links and the numbering all come from the front matter of the MDX files, so adding a case study means adding one file.

## Run locally

Requires Node.js 22 (the version used in CI).

```bash
npm ci
npm run dev        # dev server at http://localhost:4321
npm run build      # static site into dist/
npm run preview    # serve the built site
```

### Content parity check

The site started in 2022 as plain HTML (`legacy/`). When I rebuilt it with Astro, the goal was to change the design and not the words. After a build, this script compares every page with its legacy version, ignoring only a small list of UI labels and approved typo fixes:

```bash
npm run build && npm run parity
```

It exits with code 1 if any sentence is added, missing or reordered.

## History and credits

- The first version (May 2022) was built on the [Editorial](https://html5up.net/editorial) template by [HTML5 UP](https://html5up.net), released under [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) (see `LICENSE.txt`).
- The current Astro version is a redesign with the same content.

## Contact

[LinkedIn](https://www.linkedin.com/in/adharul-imron) · [i.adharul@gmail.com](mailto:i.adharul@gmail.com)
