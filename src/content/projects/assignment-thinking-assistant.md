---
title: "Assignment Thinking Assistant"
summary: "A live web tool that coaches students through structured thinking on an assignment — planning, questioning and evaluating their own reasoning — instead of generating answers for them."
category: technical
tools: ["TypeScript", "Web application", "Prompt design", "Vercel deployment"]
status: ongoing
order: 0
featured: true
updated: 2026-07-28
liveUrl: "https://assignment-thinking-assistant.vercel.app/"
related: ["responsible-human-ai-content-workflow", "academic-integrity-decision-framework"]
downloads: []
---

## Overview

The Assignment Thinking Assistant is a live, publicly deployed web application
I built to put my research principles into working software. Rather than
producing text a student could submit, it is designed to scaffold the
student's *own* thinking about an assignment — prompting planning, questioning
assumptions and structuring reasoning — so that AI assistance strengthens
epistemic agency instead of substituting for it.

**Try it live:** [assignment-thinking-assistant.vercel.app](https://assignment-thinking-assistant.vercel.app/)

## Problem

Most generative-AI writing tools optimise for producing finished text quickly.
That is exactly the failure mode my research is concerned with: it can
displace the thinking assessment is meant to develop and certify. I wanted to
test whether a tool built the other way around — optimising for the quality of
the student's thinking process, not the fluency of an output — was practically
buildable and usable.

## My role

Designed and built the application end-to-end: interaction design, prompting
strategy, and deployment.

## Research question

Can an AI-assisted tool be designed so that its primary output is improved
student reasoning — planning, self-questioning, evaluative judgement — rather
than submittable text, while remaining genuinely useful enough that students
would choose to use it?

## Method

Applied design research: building a working prototype, using it against real
assignment prompts, and iterating the interaction flow based on where it
either produced usable text (a failure mode to close off) or produced genuine
thinking prompts (the intended behaviour).

## Tools

TypeScript web application, deployed on Vercel; prompt design grounded in the
Academic Integrity Decision Framework and the Responsible Human–AI Content
Workflow developed elsewhere in this portfolio.

## Process

The assistant guides a student through an assignment brief by asking
structuring questions — what is actually being asked, what counts as evidence,
what the student already thinks and why — rather than drafting content on the
student's behalf. This mirrors the "AI assists, human authors" boundary at the
centre of my academic-integrity research.

## Findings

- [Add verified usage observations here once formally evaluated]

## Outputs

- The deployed application: [assignment-thinking-assistant.vercel.app](https://assignment-thinking-assistant.vercel.app/)
- [Add source repository link when published]

## Impact

- [Add verified impact here — e.g. user feedback, adoption]

## Limitations

- A single well-designed interaction flow cannot guarantee a student engages
  thoughtfully with it; determined misuse of any tool remains possible.
- Not yet formally evaluated against learning outcomes.
- Built and maintained by one developer; feature scope is intentionally narrow.

## Lessons learned

- The hardest design problem was not the AI prompting — it was resisting the
  temptation to make the tool more "helpful" in ways that quietly turned it
  back into an answer-generator.
- [Add further lessons as the project develops]

## Related publication

- [Add related publication when available]

## Downloadable materials

- No downloadable materials — this project is a live web application.
