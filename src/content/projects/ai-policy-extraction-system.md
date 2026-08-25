---
title: "AI Policy Extraction System"
summary: "A Python pipeline using web extraction and the Gemini API to collect, structure and organise university AI-policy information, with human verification of every record."
category: technical
tools: ["Python", "Web extraction", "Gemini API", "Structured JSON outputs", "Human verification workflow"]
status: in-progress
order: 4
updated: 2026-07-28
related: ["australian-university-genai-policy-analysis", "responsible-human-ai-content-workflow"]
downloads: []
---

## Overview

A technical pipeline that supports my policy research: it gathers publicly
available university AI-policy documents, uses the Gemini API to extract
structured information from them, and stores the results in a consistent
schema — with a mandatory human-verification step before any record is used
in research.

## Problem

Manually locating, reading and tabulating AI-policy provisions across dozens
of institutional websites is slow, error-prone and hard to repeat when policies
change. The research needed a repeatable way to build and refresh a structured
policy corpus without sacrificing accuracy.

## My role

Designed and built the system: source identification, extraction scripts,
prompt design for structured extraction, output schema, and the verification
workflow.

## System purpose

Turn scattered, inconsistently formatted public policy pages into a structured,
dated, verifiable data set that the policy-analysis projects can query and
re-run.

## Workflow

1. **Source list** — maintain a curated list of institutional policy URLs.
2. **Collection** — fetch and archive page content with retrieval dates,
   respecting robots.txt and request-rate limits.
3. **Extraction** — send archived text to the Gemini API with a fixed schema
   prompt that extracts fields such as permission model, disclosure rules and
   defined terms, returning structured JSON.
4. **Validation** — machine-check the JSON against the schema; flag missing or
   low-confidence fields.
5. **Human verification** — every extracted record is checked against the
   source document by a human before it enters the research data set; the
   verification status is stored on the record.
6. **Export** — verified records feed the coding matrix used in the
   policy-analysis project.

## Technology used

- **Python** — pipeline orchestration and data handling
- **Web extraction** — HTTP retrieval and HTML-to-text processing of public pages
- **Gemini API** — schema-guided extraction of policy fields from document text
- **JSON schema validation** — structural checks on all model output
- **Spreadsheet / CSV export** — for the human coding and verification layer

## Structured outputs

Each record captures: institution, document title and URL, retrieval date,
policy scope, permission model, disclosure requirements, verification
expectations, consequence provisions, defined terms, and verification status
(unverified / verified / corrected).

## Human-verification process

Model-extracted values are treated as *claims, not data*. A record only enters
the analysis after a human has compared each extracted field with the source
text. Corrections are logged, which also produces an error profile of the
extraction step itself.

## Findings

- [Add verified extraction-accuracy figures here once measured]

## Outputs

- Structured, dated policy corpus supporting the policy-analysis project
- Reusable extraction schema and prompt set
- [Add code repository link when published]

## Impact

- [Add verified impact here]

## Risks and limitations

- LLM extraction can misread, omit or hallucinate provisions; this is why
  unverified records are never used in analysis.
- Public web pages may lag the authoritative internal policy version.
- Site structures change, so collectors require maintenance.
- Automated collection is limited to public documents and polite request
  behaviour; no access-restricted material is gathered.

## Lessons learned

- Constraining the model to a strict output schema, and validating it,
  eliminates a large share of unusable output before human review.
- Logging human corrections turns verification effort into measurable evidence
  about where LLM extraction fails.
- [Add further lessons here]

## Related publication

- [Add related publication when available]

## Downloadable materials

- [Add schema documentation to public/downloads/ and list it in the frontmatter `downloads` field]
