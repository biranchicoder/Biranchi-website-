/**
 * Prefix an internal path with the configured base path so links keep working
 * when the site is deployed to a sub-path (e.g. a GitHub Pages project site).
 *
 * Always use `url("/about/")` instead of writing `/about/` directly in
 * components and pages.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
