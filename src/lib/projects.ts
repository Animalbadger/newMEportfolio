export type ProjectStatus = "complete" | "in-progress" | "concept";

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  tools: string[];
  outcomes: string[];
  status: ProjectStatus;
  category: "hvac" | "construction" | "aerospace" | "leadership";
  year: string;
};

export const PROJECTS: Project[] = [
  {
    id: "acco-hvac-analysis",
    title: "HVAC Systems Design & Analysis",
    summary:
      "Pressure-loss analysis, mini-split capacity tools, and field surveys supporting HVAC scoping and cost estimates at ACCO Engineered Systems.",
    description:
      "As an engineering intern at ACCO Engineered Systems, I analyzed mechanical drawings and equipment schedules to calculate pressure losses across chilled- and hot-water pipe sections and check pump suitability for design flows. I compared manufacturer data for LG, Daikin, and Mitsubishi mini-splits, built an Excel VLOOKUP calculator for capacity derating by model, size, and line length, and presented the tool to the team. Field work included documenting existing HVAC equipment and room dimensions on client job walks, plus FastDUCT takeoffs for a public-health facility ductwork retrofit.",
    role: "Engineering Intern · ACCO Engineered Systems",
    tools: ["FastDUCT", "Excel (VLOOKUP)", "Mechanical drawings", "Field surveys"],
    outcomes: [
      "Pressure-loss checks across 153 chilled- and hot-water pipe sections (300–700 GPM)",
      "Mini-split derating calculator presented to 60+ team members",
      "Field data from 26 client job walks for scoping and estimating",
      "Duct takeoffs across two floors of a public health facility",
    ],
    status: "complete",
    category: "hvac",
    year: "2026",
  },
  {
    id: "murray-project-coordination",
    title: "Mechanical Construction Coordination",
    summary:
      "Vendor coordination, drawing markups, and permitting training on water-treatment and City of Los Angeles projects at Murray Company.",
    description:
      "As an operations intern at Murray Company Mechanical Contractors, I coordinated with vendors and joined job walks and weekly client meetings to verify installation requirements for critical equipment at the Hyperion Water Treatment Plant. I reviewed and marked up City of Los Angeles Bureau of Engineering drawings on projects valued at $100K–$300K, prepared weekly coordination documents (RFIs, PTWOs, submittals, Special Plant Accommodations, proposals), and presented City of Los Angeles permitting training to 100+ employees.",
    role: "Operations Intern · Murray Company",
    tools: ["Bluebeam", "Drawing review", "RFIs & submittals", "Job walks"],
    outcomes: [
      "Supported critical equipment installs at Hyperion Water Treatment Plant",
      "Flagged design issues on $100K–$300K City of LA projects",
      "At least four coordination documents prepared per week",
      "Permitting training delivered to 100+ staff, including leadership",
    ],
    status: "complete",
    category: "construction",
    year: "2025",
  },
  {
    id: "flying-broncos-aero",
    title: "Flying Broncos — Aerodynamics Lead",
    summary:
      "Led a small aero team evaluating airfoils and wing geometries in XFLR5 for Cal Poly Pomona’s aircraft design effort.",
    description:
      "As Aerodynamics Lead for the Flying Broncos, I led three engineering students using XFLR5 to evaluate lift, drag, and stability across airfoils and wing geometries. We worked with structural, controls, and payload teams to iterate the design and improve performance between design cycles.",
    role: "Aerodynamics Lead · Cal Poly Pomona",
    tools: ["XFLR5", "Airfoil analysis", "Team leadership"],
    outcomes: [
      "Led a three-student aerodynamics team",
      "Contributed to a 12% drag reduction between design iterations",
      "Cross-team coordination with structures, controls, and payload",
    ],
    status: "complete",
    category: "aerospace",
    year: "2024–25",
  },
  {
    id: "nasa-ncas-rover",
    title: "NASA NCAS Autonomous Rover",
    summary:
      "Community College Aerospace Scholars team rover with sensors for autonomous object retrieval — Best Team Award.",
    description:
      "Through NASA Community College Aerospace Scholars at Cypress College, I collaborated on an autonomous rover using color, ultrasonic, and pressure sensors. The team focused on reliable sensing and retrieval performance under competition constraints.",
    role: "Team member · NASA NCAS",
    tools: ["Sensors", "Autonomous systems", "Team design"],
    outcomes: [
      "30% reduction in object-retrieval time",
      "Best Team Award",
      "Hands-on sensor integration and testing",
    ],
    status: "complete",
    category: "aerospace",
    year: "2022",
  },
  {
    id: "engineering-society",
    title: "Cypress College Engineering Society",
    summary:
      "Co-founded the student engineering society — AutoCAD tutorials, 3D-printing competitions, and community events.",
    description:
      "I co-founded the engineering society at Cypress College to give students a place to learn practical tools and build together. We ran AutoCAD tutorials, 3D-printing design competitions, and student events that lowered the barrier to joining engineering culture on campus.",
    role: "Co-Founder",
    tools: ["AutoCAD", "3D printing", "Event organizing"],
    outcomes: [
      "AutoCAD tutorials for 5–10 students at a time",
      "3D-printing design competitions and student events",
      "Built a lasting peer-learning community",
    ],
    status: "complete",
    category: "leadership",
    year: "2022",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Engineering",
    items: [
      "HVAC pressure-loss calculations",
      "Ductwork takeoffs & FastDUCT",
      "Mechanical drawings & equipment research",
      "Field surveys & job walks",
      "Aerodynamics analysis (XFLR5)",
    ],
  },
  {
    title: "Software & CAD",
    items: [
      "SolidWorks",
      "AutoCAD & Revit",
      "Bluebeam",
      "Microsoft Excel (VLOOKUP)",
      "MATLAB",
    ],
  },
  {
    title: "Project delivery",
    items: [
      "RFIs, submittals & coordination docs",
      "Cost estimating support",
      "Vendor & client meetings",
      "Permitting process (City of LA)",
      "Gantt charts & risk tracking",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Aerodynamics team lead",
      "Society co-founder",
      "Technical training & presentations",
      "MEP / NSF Bridge Program",
      "Cross-functional collaboration",
    ],
  },
] as const;

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  hvac: "HVAC / MEP",
  construction: "Construction",
  aerospace: "Aerospace",
  leadership: "Leadership",
};
