/**
 * Human-readable labels and badge styles for content taxonomy values.
 * Badge classes are deliberately muted — colour carries meaning sparingly.
 */

export const projectCategoryLabels: Record<string, string> = {
  "policy-analysis": "Policy Analysis",
  "empirical-study": "Empirical Study",
  framework: "Framework",
  technical: "Technical Project",
  workflow: "Workflow",
};

export const projectStatusLabels: Record<string, string> = {
  "in-progress": "In progress",
  completed: "Completed",
  ongoing: "Ongoing",
};

export const publicationStatusLabels: Record<string, string> = {
  published: "Published",
  accepted: "Accepted",
  "under-review": "Under Review",
  conference: "Conference Papers",
  "policy-report": "Policy Reports",
  professional: "Professional Articles",
};

export const decisionLabels: Record<string, string> = {
  acceptable: "Acceptable",
  misconduct: "Misconduct",
  "disclosure-problem": "Disclosure Problem",
  unclear: "Unclear",
};

export const decisionBadgeClasses: Record<string, string> = {
  acceptable:
    "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-900",
  misconduct:
    "bg-red-50 text-red-800 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-900",
  "disclosure-problem":
    "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900",
  unclear:
    "bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700",
};

export const permissionLabels: Record<string, string> = {
  permitted: "Permitted",
  "not-permitted": "Not permitted",
  conditional: "Permitted with conditions",
  unclear: "Unclear",
};

export const disclosureLabels: Record<string, string> = {
  disclosed: "Disclosed",
  "not-disclosed": "Not disclosed",
  partial: "Partially disclosed",
};

export const concernLabels: Record<string, string> = {
  none: "None",
  low: "Low",
  moderate: "Moderate",
  high: "High",
};

export const docTypeLabels: Record<string, string> = {
  "staff-guide": "Staff Guide",
  "student-guide": "Student Guide",
  "policy-brief": "Policy Brief",
  sop: "Standard Operating Procedure",
  "disclosure-guide": "Disclosure Guide",
  "api-documentation": "API Documentation",
  "user-guide": "User Guide",
  "help-article": "Help-Centre Article",
  "methods-guide": "Methods Guide",
};

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
