# Biranchi Poudyal — Portfolio Website

A professional portfolio website for Biranchi Poudyal, PhD candidate researching
generative AI, epistemic agency, academic integrity and responsible AI in
education. Built with **Astro**, **TypeScript**, **Tailwind CSS** and
**Markdown content collections**, and designed to deploy as a static site to
**GitHub Pages**.

## What's included

- Nine main sections: Home, About, Research, Projects, Case Portfolio,
  Publications, Technical Writing, CV and Contact.
- Content-collection-backed pages for research themes/methods, project case
  studies, fictional academic-integrity cases, publications and writing
  samples — all editable as Markdown with schema validation.
- A live, working site search, category/status/decision filters, a copy
  citation / download BibTeX button on every publication, and an interactive
  "Try the framework" tool on the Academic Integrity Decision Framework page.
- Dark mode, breadcrumbs, print-friendly project/case pages, a custom 404
  page, sitemap and `robots.txt`, and full SEO/Open Graph metadata.
- A featured **live tool** spotlight linking to
  [assignment-thinking-assistant.vercel.app](https://assignment-thinking-assistant.vercel.app/).

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview   # serve the built site locally to sanity-check it
```

`npm run build` outputs the static site to `dist/`.

## Environment variables

Copy `.env.example` to `.env` and fill in real values:

```bash
cp .env.example .env
```

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Full production URL, used for canonical links, sitemap and Open Graph tags. |
| `BASE_PATH` | Sub-path the site is served from (`/` for a user site or custom domain; `/repo-name` for a GitHub Pages project site). |

These are also read from GitHub Actions repository **Variables** when
deploying (see below) — you don't need a committed `.env` for CI.

The Contact page shows direct contact details (email, phone, LinkedIn,
website, Google Scholar, ORCID, GitHub, location) rather than a submission
form — there is no form backend to configure.

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. (Optional) Go to **Settings → Secrets and variables → Actions →
   Variables** and add:
   - `SITE_URL` — e.g. `https://your-username.github.io`
   - `BASE_PATH` — `/` for a user site (`your-username.github.io` repo) or
     `/your-repo-name` for a project site
   If you skip this, the workflow computes sensible defaults automatically
   from your repository name.
4. Push to `main`. The included workflow
   (`.github/workflows/deploy.yml`) builds the site and deploys it to
   GitHub Pages automatically.
5. Your site will be live at `https://<username>.github.io` (user site) or
   `https://<username>.github.io/<repo-name>` (project site).

### Using a custom domain

1. Add a `public/CNAME` file containing your domain, e.g.:
   ```
   www.yourdomain.com
   ```
2. Set the repository Variables `SITE_URL` to `https://www.yourdomain.com`
   and `BASE_PATH` to `/`.
3. In your DNS provider, point the domain at GitHub Pages (a `CNAME` record
   to `<username>.github.io` for a subdomain, or GitHub's documented `A`
   records for an apex domain).
4. In **Settings → Pages**, enter the custom domain and enable **Enforce
   HTTPS** once DNS has propagated.

## Updating content

All editable content lives under `src/content/` as Markdown files validated
against schemas in `src/content.config.ts`. Copy-paste starting points for
each type are in `templates/`.

| To update... | Edit this file |
| --- | --- |
| Your name, tagline, email, phone, social links | `src/config.ts` |
| Homepage hero text, expertise list, biography excerpt | `src/pages/index.astro` |
| Full biography, PhD details, values | `src/pages/about/index.astro` |
| Doctoral research summary | `src/content/research/doctoral-research.md` |
| Research themes / methods | `src/content/research/theme-*.md`, `method-*.md` |
| Projects | `src/content/projects/*.md` (template: `templates/project-template.md`) |
| Fictional case studies | `src/content/cases/*.md` (template: `templates/case-template.md`) |
| Publications | `src/content/publications/*.md` (template: `templates/publication-template.md`) |
| Technical writing samples | `src/content/writing/*.md` (template: `templates/writing-template.md`) |
| CV summary page | `src/pages/cv/index.astro` |
| **CV PDF download** | Replace `public/Biranchi-Poudyal-CV.pdf` with your real CV, same filename |
| Contact details / profile links | `src/config.ts` (`profiles` object) |

To add a new project, publication, case or writing sample: copy the matching
file from `templates/` into the corresponding `src/content/<type>/` folder,
rename it, and fill in the frontmatter and body. The site rebuilds it
automatically — no other code changes are needed.

### Placeholder content

Every unverified detail is marked with square brackets, e.g.
`[Add university name]`, or with an explicit "editable placeholder" label
(publications, CV sections). Search the codebase for `[Add` to find every
remaining placeholder before publishing real content. No fabricated
qualifications, employment, awards, publications or statistics are included
anywhere on this site.

## Project structure

```
src/
  components/       Reusable UI components (cards, header, footer, tools)
  content/          Editable Markdown content (research, projects, cases, publications, writing)
  content.config.ts Content collection schemas (validation)
  layouts/          Page shells (BaseLayout, PageLayout)
  lib/              Small helpers (labels, path prefixing)
  pages/            Route files (one file/folder per URL)
  styles/           Tailwind entry point and global CSS
public/             Static assets served as-is (favicon, CV PDF, robots.txt)
templates/          Copy-paste starting points for new content
.github/workflows/  GitHub Pages deployment workflow
```

## Accessibility & quality notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`), skip-to-content
  link, and visible focus rings throughout.
- All interactive controls (filters, theme toggle, mobile menu, search) are
  keyboard operable and use appropriate ARIA attributes.
- Animations are limited to a subtle scroll-reveal and count-up effect, both
  fully disabled for users with `prefers-reduced-motion: reduce`.
- Project, case and writing pages have dedicated print styles.
