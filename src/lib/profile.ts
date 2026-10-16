/**
 * Central profile — update these fields when the full name or links are known.
 * Search for `PROFILE` / import from `@/lib/profile` across the app.
 * (No résumé download — employers reach this site from the résumé.)
 */
export const PROFILE = {
  firstName: "Zaid",
  /** Leave empty until last name is confirmed; brand uses firstName alone. */
  lastName: "",
  title: "Mechanical Engineering Student",
  tagline:
    "Designing mechanisms that move with intent — from CAD to fabrication.",
  location: "Open to internships & co-ops",
  email: "zaid@example.com",
  linkedin: "https://www.linkedin.com/in/zaid",
  github: "https://github.com/zaid",
} as const;

export function displayName(profile = PROFILE): string {
  return [profile.firstName, profile.lastName].filter(Boolean).join(" ");
}

export function brandName(profile = PROFILE): string {
  return profile.firstName.toUpperCase();
}
