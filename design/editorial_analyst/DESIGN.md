---
name: Editorial Analyst
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#3e4947'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#6e7977'
  outline-variant: '#bdc9c6'
  surface-tint: '#006a63'
  primary: '#005c55'
  on-primary: '#ffffff'
  primary-container: '#0f766e'
  on-primary-container: '#a3faef'
  inverse-primary: '#80d5cb'
  secondary: '#006b5f'
  on-secondary: '#ffffff'
  secondary-container: '#6df5e1'
  on-secondary-container: '#006f64'
  tertiary: '#7f4025'
  on-tertiary: '#ffffff'
  tertiary-container: '#9c573a'
  on-tertiary-container: '#ffe5db'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#9cf2e8'
  primary-fixed-dim: '#80d5cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#00504a'
  secondary-fixed: '#71f8e4'
  secondary-fixed-dim: '#4fdbc8'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005048'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#ffb598'
  on-tertiary-fixed: '#370e00'
  on-tertiary-fixed-variant: '#72361b'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  caption:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  metric-stat:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.03em
  metric-stat-mobile:
    fontFamily: Inter
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an editorial, high-precision aesthetic tailored for a senior data analyst. The interface balances academic rigor with contemporary digital publishing: intellectual, understated, and impeccably organized.

### Core Tenets
- **Analytical Clarity:** Visual noise is eliminated to give raw metrics, case studies, and charts immediate legibility. Data acts as primary graphic art.
- **Editorial Authority:** Generous margins, deliberate typographic rhythm, and restrained visual treatments convey confidence without corporate sterility.
- **Subtle Modernism:** Tactile softness through precise borders, muted backgrounds, and zero heavy dropped shadows. Depth is communicated through hairline framing and surface tonality.

## Colors

The palette is intentionally restrained to a single foundational hue paired with slate neutrals.

- **Primary Accent (`#0F766E` / Light, `#14B8A6` / Dark):** Deep teal acts as the focal anchor for primary interactions, active filters, and key data callouts.
- **Neutrals (Slate Architecture):**
  - **Light Mode:** Canvas `#F8FAFC`, Surface `#FFFFFF`, Subtle Borders `#E2E8F0`, Primary Text `#0F172A`, Secondary Text `#64748B`.
  - **Dark Mode:** Canvas `#0F172A`, Surface `#1E293B`, Subtle Borders `#334155`, Primary Text `#F8FAFC`, Secondary Text `#94A3B8`.
- **Semantic Usage:** Teal is never used for decorative fills across massive surface areas; it serves exclusively as an editorial highlighter, link treatment, interactive state indicator, and chart focal color.

## Typography

Typographic discipline drives the entire identity. Using `Inter` across all tiers provides uniform geometric precision, differentiated by dramatic shifts in weight and tracking.

- **Weight Contrast:** Headings maintain heavy weights (`600` Semibold, `700` Bold) with tightened negative letter spacing for an editorial broadsheet feel. Body copy remains at `400` Regular with generous line height for effortless scanning.
- **Tabular Figures:** All statistical readouts, table values, chart annotations, and metadata dates must employ `font-variant-numeric: tabular-nums` (or OpenType `tnum`) to maintain exact spatial alignment across multi-row metrics.

## Layout & Spacing

The structural layout uses a centered, max-width fluid container (max 1120px) to simulate an editorial monograph.

### Grid & Viewport Rules
- **Desktop (1024px+):** 12-column grid with `2rem` gutters and `3rem` screen margins. Allows asymmetrical compositions (e.g., 4-column overview narrative beside an 8-column visual breakdown).
- **Tablet (768px - 1023px):** 8-column grid with `1.5rem` gutters and `2rem` screen margins.
- **Mobile (< 768px):** Single-column stacked flow with `1rem` margins and uniform `1rem` gutters between adjacent components.

### Rhythm
White space is deliberate and generous. Sections are separated by large rhythm spaces (`4rem` to `6rem`), while related components stay tightly coupled using the standard spacing tokens.

## Elevation & Depth

This system discards heavy dropshadows in favor of razor-thin architectural boundaries and subtle background shifts.

- **Hairline Framing:** Depth is achieved via crisp 1px borders using `#E2E8F0` (light) and `#334155` (dark).
- **Surface Elevation:** Card containers and hover states lift visually through slight tonal transitions:
  - Surface default: Base canvas color or plain white.
  - Surface elevated / hover: Subtle 1-step tone shift with an ultra-diffused, ambient shadow: `box-shadow: 0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.04)`.
- **Figure Framing:** Data visual containers rest on a micro-tinted background (`#F1F5F9` in light mode, `#1E293B` in dark mode) inset inside the primary card to isolate the visualization from descriptive copy.

## Shapes

The design system maintains a controlled curvature scale (`roundedness: 2`, matching 8px to 12px for primary containers).

- **Standard Containers & Cards:** `0.5rem` to `0.75rem` (8px–12px). Crisp enough to feel technical and structured, soft enough to avoid harsh brutality.
- **Micro Elements (Chips, Badges):** `0.375rem` (6px) or fully rounded pill configurations for status markers.
- **Form Elements & Buttons:** `0.5rem` (8px) for balanced proportions alongside form fields.

## Components

### Top Navigation Bar
- **Structure:** Sticky full-width header anchored to the top viewport with a backdrop blur (`backdrop-filter: blur(8px)`) and a 1px bottom border (`#E2E8F0` / `#334155`).
- **Layout:** Horizontal distribution:
  - Left: Analyst Name & Title (`headline-sm`, semibold).
  - Right: Inline nav links (`Work`, `Skills`, `Contact`) followed by an icon-only theme toggle button.
- **Interaction:** Active link indicated by a crisp teal text highlight or subtle underline.

### Project & Case Study Cards
- **Treatment:** Bounded by a 1px border with `rounded-lg` (8–12px) corners. Background: pure `#FFFFFF` (light) or `#1E293B` (dark).
- **Hover State:** Border transitions smoothly to `#CBD5E1` (light) / `#475569` (dark) with an ambient 2px rise.
- **Structure:**
  - Header: Sector / timeline tag with date in tabular figures.
  - Body: Project title (`headline-md`) followed by a concise 2-sentence impact summary.
  - Metrics Strip: Key performance outcomes displayed in bold tabular typography.

### Data Visualization Containers (Figure Cards)
- **Container:** Dedicated card wrapper enclosing charts, schema diagrams, or interactive notebooks.
- **Canvas:** Set against a muted inner background to frame plots cleanly.
- **Caption Block:** Bottom-aligned horizontal metadata bar with `caption` typography (`#64748B` / `#94A3B8`), showing data source, sample size (N), tool stack (e.g., Python / d3.js), and last updated date.

### Buttons & Interactive Controls
- **Primary:** Filled `#0F766E` with pure white text, semibold weight, `0.5rem` corner radius. Subtle hover shift to `#115E59`.
- **Secondary / Ghost:** Transparent background, 1px border matching the subtle neutral tone, `#0F172A` text (light) or `#F8FAFC` (dark).
- **Focus Rings:** High-visibility 2px offset ring in deep teal for complete accessibility.

### Metric Chips & Skill Badges
- **Appearance:** Low-contrast background `#F1F5F9` (light) / `#334155` (dark), 1px border, `0.25rem` padding vertical, `0.5rem` padding horizontal.
- **Typography:** `body-sm`, medium weight, monospace-aligned tabular numerals where quantitative values are presented.

### Form Inputs & Contact Fieldsets
- **Field Styling:** Clean rectangular inputs with `0.5rem` radius, subtle 1px border, inset `0.75rem` padding.
- **State Changes:** On focus, border color shifts decisively to the teal accent with zero outer fuzzy glow.