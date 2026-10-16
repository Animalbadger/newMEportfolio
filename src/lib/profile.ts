/**
 * Central profile — keep in sync with the résumé where possible.
 * (No résumé download on-site — employers reach this page from the résumé.)
 */
export const PROFILE = {
  firstName: "Zaid",
  lastName: "Alsalihi",
  title: "Mechanical Engineering Student",
  tagline:
    "Curious across mechanical engineering — design, analysis, and hands-on builds from the lab to the field.",
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
      "I’m a first-generation college student in my family. We immigrated to the United States in 2013, and I grew up in a single-parent household — so I’m used to figuring things out, staying organized, and owning the work in front of me.",
    body:
      "At Cal Poly Pomona I’m studying mechanical engineering and keeping my interests wide open — design, analysis, manufacturing, aerospace, and real-world systems. I started at Cypress College (A.S. in Mathematics and Physics), co-founded the engineering society there, and have spent summers in industry on thermal/fluid systems and mechanical project coordination. Outside class I led aerodynamics for the Flying Broncos and completed NASA community-college engineering programs.",
    highlights: [
      "First-generation college student · immigrated to the U.S. in 2013",
      "Cal Poly Pomona B.S. Mechanical Engineering · Dec 2026",
      "Cypress College A.S. Mathematics & A.S. Physics · May 2024",
      "Curtis and Jill Scheetz Family Outstanding Campus Leader Scholarship",
      "Maximizing Engineering Potential & NSF Bridge Program",
    ],
  },
} as const;

export function displayName(profile = PROFILE): string {
  return [profile.firstName, profile.lastName].filter(Boolean).join(" ");
}

export function brandName(profile = PROFILE): string {
  return profile.firstName.toUpperCase();
}
