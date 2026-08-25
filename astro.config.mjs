// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/**
 * SITE_URL  — the full production URL of the deployed site.
 *             For a GitHub Pages *user* site:    https://<username>.github.io
 *             For a GitHub Pages *project* site: https://<username>.github.io
 *             For a custom domain:               https://www.example.com
 *
 * BASE_PATH — the sub-path the site is served from.
 *             User site / custom domain: "/"
 *             Project site (repo named e.g. "portfolio"): "/portfolio"
 *
 * Both can be set as environment variables (see .env.example) or edited here.
 */
const site = process.env.SITE_URL ?? "https://biranchipoudyal.github.io";
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "ignore",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
