# Portfolio project guide

## Purpose

This is Alice Eriksson's bilingual portfolio site. It is a Next.js App Router project using TypeScript, React Server Components, `next/font`, and CSS Modules. The site presents projects, background, professional experience, and contact information in Swedish and English.

## Stack and commands

- Next.js `16.2.4`, React `19.2.5`, TypeScript, pnpm.
- Start development: `pnpm dev`.
- Lint: `pnpm lint`.
- Type-check: `pnpm exec tsc --noEmit`.
- Production build: `pnpm build`.
- Package manager: pnpm. Keep `pnpm-lock.yaml` in sync when dependencies change.

Run lint and type-check after code or content changes. Existing unrelated warnings should be distinguished from new warnings.

## Repository structure

```text
src/
  app/
    [locale]/
      page.tsx              # Locale home page
      [...slug]/page.tsx    # Projects, about, experience and contact routes
      layout.tsx            # Shared localized shell, fonts, header and footer
    page.tsx                # Root redirect
    globals.css             # Global styles and design tokens
  components/
    layout/                 # Header, navigation, language switcher and footer
    pages/                  # Page-level components and CSS Modules
    Hero/                   # Home hero
    ProjectCard/            # Reusable project card
  content/
    content.ts              # Locales, route maps, shared page copy and home copy
    projects.ts             # Localized project data
    experience.ts           # Localized experience, education and courses data
  proxy.tsx                 # Locale prefixing for paths without a locale
public/                     # Static assets
```

## Routing and locales

Supported locales are `sv` and `en`.

Public routes are defined in `src/content/content.ts`:

- Swedish home: `/sv`
- Swedish projects: `/sv/projekt`
- Swedish about: `/sv/om`
- Swedish experience: `/sv/cv`
- Swedish contact: `/sv/kontakt`
- English home: `/en`
- English projects: `/en/projects`
- English about: `/en/about`
- English experience: `/en/experience`
- English contact: `/en/contact`

The internal page key is `experience` for both locales. Swedish may remain publicly named `cv`; do not rename the Swedish URL just to match the internal key.

When adding or renaming a localized page, update all of these together:

1. `routes` in `src/content/content.ts`.
2. `pageSlugs` and its `PageKey` type.
3. The switch in `src/app/[locale]/[...slug]/page.tsx`.
4. `generateStaticParams` behavior if the route needs special handling.
5. Navigation labels and links.

`getLocalizedPath()` translates the current page when switching language. It maps translated slugs and preserves trailing project slugs, for example `/sv/projekt/pax` to `/en/projects/pax`. If a matching page cannot be found, it falls back to the target locale home.

The root `/` redirects to `/en`. `src/proxy.tsx` prefixes paths without a locale with the default locale (`en`). Paths containing a locale pass through unchanged.

## Content model

Keep user-facing copy in content files rather than hardcoding it in page components.

- Shared values such as name and external links live in `content.shared`.
- Locale-specific copy lives under `content.sv` and `content.en`.
- Project data lives in `src/content/projects.ts` and should have both locale variants.
- Experience data lives in `src/content/experience.ts` and should have both locale variants.
- Home page section labels and introductory copy live under each locale's `home.sections`.

When adding content to a page, update both languages unless the user explicitly wants one language only. Preserve the user's wording and do not invent professional claims.

## Styling and design system

The design system is defined in `src/app/globals.css`. Use its tokens instead of introducing one-off values:

- `--site-max-width` and `--site-padding` for page geometry.
- `--space-*` and `--space-section` for spacing.
- `--font-size-*` and line-height tokens for typography.
- `--color-*` for colors and borders.
- `--radius-*` for corners.
- `--shadow-card` and `--shadow-card-hover` for elevation.
- `--transition-fast` for short interactions.

Page and component styles belong in colocated CSS Modules. Keep page containers aligned to `var(--site-max-width)` and use the same spacing, typography, borders, and radii across pages. Responsive behavior should be mobile-safe and preserve readable line lengths.

Typography rule: `Rock_3D` is used only for the logo in `Header`. All other interface text, headings, labels, and 404 content use `DM Sans` through `--font-body`.

Respect `prefers-reduced-motion` for hover and transition effects. Keep focus-visible states clear and keyboard accessible.

## Component conventions

- Use `next/link` for internal links.
- External links should use `target="_blank"` with `rel="noreferrer"` or `rel="noopener noreferrer"` as appropriate.
- Email links must use `mailto:`.
- Prefer semantic elements (`header`, `main`, `section`, `article`, `nav`) and labelled sections where needed.
- Keep client components limited to interactive behavior. `MainNav` and `LanguageSwitcher` are client components because they need pathname/state information.

## Known development notes

- A Turbopack panic followed by repeated `GET /en` requests is a dev-server/tooling problem, not automatically a routing loop. Clearing `.next` or testing with Webpack can help diagnose it.
- Preserve unrelated working-tree changes. Do not reset or delete user files without a clearly scoped request.
