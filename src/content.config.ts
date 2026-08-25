import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Content collections with schema validation.
 * Every editable piece of site content lives under src/content/.
 * See templates/ in the project root for copy-paste starting points.
 */

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    /** doctoral = the PhD project; theme = research theme; method = research method */
    type: z.enum(["doctoral", "theme", "method"]),
    summary: z.string(),
    order: z.number().default(99),
    updated: z.coerce.date().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum([
      "policy-analysis",
      "empirical-study",
      "framework",
      "technical",
      "workflow",
    ]),
    tools: z.array(z.string()).default([]),
    status: z
      .enum(["in-progress", "completed", "ongoing"])
      .default("in-progress"),
    order: z.number().default(99),
    updated: z.coerce.date(),
    /** Slugs of related projects (file names without .md). */
    related: z.array(z.string()).default([]),
    /** Slug of a related publication entry, if any. */
    relatedPublication: z.string().optional(),
    /** Downloadable materials: files placed under public/downloads/. */
    downloads: z
      .array(z.object({ label: z.string(), href: z.string() }))
      .default([]),
    /** URL of a live, deployed demo of this project, if one exists. */
    liveUrl: z.string().optional(),
    /** Highlight this project as a flagship item on the homepage. */
    featured: z.boolean().default(false),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    caseNumber: z.number(),
    title: z.string(),
    behaviour: z.string(),
    assessmentContext: z.string(),
    aiTool: z.string(),
    permission: z.enum(["permitted", "not-permitted", "conditional", "unclear"]),
    disclosure: z.enum(["disclosed", "not-disclosed", "partial"]),
    authorshipConcern: z.enum(["none", "low", "moderate", "high"]),
    verificationConcern: z.enum(["none", "low", "moderate", "high"]),
    policyRule: z.string(),
    decision: z.enum([
      "acceptable",
      "misconduct",
      "disclosure-problem",
      "unclear",
    ]),
    confidence: z.enum(["low", "medium", "high"]),
    updated: z.coerce.date(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.union([z.number(), z.string()]).default("[Year]"),
    venue: z.string(),
    status: z.enum([
      "published",
      "accepted",
      "under-review",
      "conference",
      "policy-report",
      "professional",
    ]),
    abstract: z.string().optional(),
    doi: z.string().optional(),
    link: z.string().optional(),
    /** Downloadable file placed under public/downloads/. */
    file: z.string().optional(),
    /** Full formatted citation (e.g. APA 7). Used by the copy button. */
    citation: z.string().optional(),
    /** True while the entry is an unedited placeholder. */
    placeholder: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    docType: z.enum([
      "staff-guide",
      "student-guide",
      "policy-brief",
      "sop",
      "disclosure-guide",
      "api-documentation",
      "user-guide",
      "help-article",
      "methods-guide",
    ]),
    audience: z.string(),
    order: z.number().default(99),
    updated: z.coerce.date(),
  }),
});

export const collections = { research, projects, cases, publications, writing };
