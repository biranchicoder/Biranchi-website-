---
title: "API Documentation Sample: Policy Extraction Endpoint"
summary: "Reference documentation for a policy-extraction API endpoint, demonstrating developer-facing technical writing."
docType: api-documentation
audience: "Software developers"
order: 6
updated: 2026-07-28
---

> **Demonstration writing sample.** This documents the internal extraction
> interface of my AI Policy Extraction System in public-API style to
> demonstrate developer documentation. It is not a hosted public API.

## Extract policy fields

Extracts structured policy information from a captured document.

```
POST /v1/extract
```

### Request body

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `document_text` | string | yes | Plain text of the captured policy document. |
| `institution` | string | yes | Institution identifier from the source register. |
| `capture_date` | string | yes | ISO 8601 date the document was captured. |
| `schema_version` | string | no | Extraction schema version. Defaults to the latest. |

### Example request

```json
{
  "document_text": "Students may use generative AI tools for...",
  "institution": "example-university",
  "capture_date": "2026-03-14"
}
```

### Response

Returns an extraction record. Every record is created with
`"verification": "unverified"` — records must pass human verification before
research use.

```json
{
  "institution": "example-university",
  "capture_date": "2026-03-14",
  "schema_version": "1.2",
  "fields": {
    "permission_model": "permitted-with-conditions",
    "disclosure_required": true,
    "verification_expected": true,
    "defined_terms": ["generative AI", "unauthorised assistance"]
  },
  "confidence_flags": [],
  "verification": "unverified"
}
```

### Errors

| Status | Meaning | Resolution |
| --- | --- | --- |
| `400` | Missing required field or empty `document_text`. | Check the request body against the table above. |
| `422` | Model output failed schema validation. | Retry; if persistent, file the document for manual coding. |
| `429` | Rate limit exceeded. | Respect the `Retry-After` header. |

### Notes for integrators

- Treat all extracted values as claims requiring verification, not as data.
- `confidence_flags` lists fields the extractor marked as uncertain; route
  flagged records to verification first.
