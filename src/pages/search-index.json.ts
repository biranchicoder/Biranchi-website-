import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

interface SearchRecord {
  title: string;
  description: string;
  url: string;
  section: string;
}

export const GET: APIRoute = async () => {
  const [projects, cases, publications, writing, research] = await Promise.all([
    getCollection("projects"),
    getCollection("cases"),
    getCollection("publications"),
    getCollection("writing"),
    getCollection("research"),
  ]);

  const records: SearchRecord[] = [
    ...projects.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      url: `/projects/${p.id}/`,
      section: "Project",
    })),
    ...cases.map((c) => ({
      title: `Case ${String(c.data.caseNumber).padStart(2, "0")}: ${c.data.title}`,
      description: c.data.behaviour,
      url: `/cases/${c.id}/`,
      section: "Case",
    })),
    ...publications.map((p) => ({
      title: p.data.title,
      description: p.data.abstract ?? `${p.data.venue} · ${p.data.year}`,
      url: `/publications/#${p.id}`,
      section: "Publication",
    })),
    ...writing.map((w) => ({
      title: w.data.title,
      description: w.data.summary,
      url: `/writing/${w.id}/`,
      section: "Technical Writing",
    })),
    ...research.map((r) => ({
      title: r.data.title,
      description: r.data.summary,
      url: "/research/",
      section:
        r.data.type === "doctoral"
          ? "Doctoral Research"
          : r.data.type === "theme"
            ? "Research Theme"
            : "Research Method",
    })),
    {
      title: "About",
      description:
        "Professional biography, PhD research, research interests and values.",
      url: "/about/",
      section: "Page",
    },
    {
      title: "Curriculum Vitae",
      description: "Education, research experience, publications and skills.",
      url: "/cv/",
      section: "Page",
    },
    {
      title: "Contact",
      description: "Get in touch about research, collaboration or roles.",
      url: "/contact/",
      section: "Page",
    },
  ];

  return new Response(JSON.stringify(records), {
    headers: { "Content-Type": "application/json" },
  });
};
