/**
 * Site-wide configuration.
 *
 * This is the single place to update your name, tagline, description and
 * contact details. Values in square brackets are placeholders — replace them
 * with your real profiles before going live (or leave them; the site labels
 * them as "to be added").
 */
export const siteConfig = {
  name: "Biranchi Poudyal",
  title: "Biranchi Poudyal — Generative AI & Education Researcher",
  tagline:
    "Researcher in Generative AI, Academic Integrity and Human–AI Education",
  description:
    "Portfolio of Biranchi Poudyal, PhD candidate researching generative AI, epistemic agency, academic integrity, assessment policy and responsible AI in education.",
  location: "Sydney, Australia",

  /** Contact email shown on the Contact page. */
  email: "biranchiacademia@gmail.com",

  /** Contact phone number shown on the Contact page (E.164-style format). */
  phone: "+61 466 413 999",

  /**
   * Professional profiles. Replace the placeholder URLs with your real
   * profiles. Any entry whose URL still contains "[" is rendered as a
   * clearly-labelled placeholder rather than a broken link.
   */
  profiles: {
    linkedin: "https://np.linkedin.com/in/biranchi-poudyal-a624a9124",
    website: "http://www.biranchipoudyal.com.np/",
    googleScholar: "https://scholar.google.com/citations?user=ZpMf554AAAAJ&hl=en",
    orcid: "https://orcid.org/0000-0002-7210-5480",
    github: "https://github.com/biranchicoder",
  },

  /** Path (under /public) of the downloadable CV. */
  cvFile: "/Biranchi-Poudyal-CV.pdf",

  /**
   * Search-engine ownership verification codes. Get these from Google
   * Search Console ("HTML tag" verification method) and Bing Webmaster
   * Tools, then paste just the content value here — leave empty to omit
   * the tag entirely.
   */
  googleSiteVerification: "",
  bingSiteVerification: "",
} as const;

/** Returns true when a config value is still an unedited placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.includes("[");
}
