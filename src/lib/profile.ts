/**
 * Central profile — keep in sync with the résumé where possible.
 * (No résumé download on-site — employers reach this page from the résumé.)
 */
export const PROFILE = {
  firstName: "Zaid",
  lastName: "Alsalihi",
  title: "Mechanical Engineering Student",
  tagline:
    "HVAC/MEP analysis, field coordination, and design that connects drawings to the shop floor.",
  location: "Southern California · Open to internships & full-time roles",
  phone: "(714) 348-6483",
  email: "zaidalsalihi9@gmail.com",
  linkedin: "https://www.linkedin.com/in/zaid-alsalihi",
  github: "",
  education: {
    university: "California State Polytechnic University, Pomona",
    degree: "B.S. in Mechanical Engineering",
    grad: "Dec 2026",
    transfer: "Cypress College — A.S. Mathematics & A.S. Physics (May 2024)",
  },
  about: {
    lead:
      "I’m a first-generation college graduate in my family. My mom raised me on her own, and we immigrated to the United States in 2013 — that path shaped how I show up: hardworking, grateful, and focused on building useful things.",
    body:
      "At Cal Poly Pomona I’m studying mechanical engineering with an emphasis on building systems, design, and analysis. I started at Cypress College (A.S. in Mathematics and Physics), co-founded the engineering society there, and have spent summers in industry — HVAC/MEP analysis at ACCO Engineered Systems and mechanical construction coordination at Murray Company. Outside class I led aerodynamics work for the Flying Broncos and completed NASA community-college engineering programs.",
    highlights: [
      "First-generation college graduate; immigrated to the U.S. in 2013",
      "Raised by a single mother",
      "Cal Poly Pomona B.S. Mechanical Engineering · Dec 2026",
      "Cypress College A.S. Mathematics & A.S. Physics · May 2024",
      "Curtis and Jill Scheetz Family Outstanding Campus Leader Scholarship",
      "Maximizing Engineering Potential (MEP) & NSF Bridge Program",
    ],
  },
} as const;

export function displayName(profile = PROFILE): string {
  return [profile.firstName, profile.lastName].filter(Boolean).join(" ");
}

export function brandName(profile = PROFILE): string {
  return profile.firstName.toUpperCase();
}
