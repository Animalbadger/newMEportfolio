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
  category: "industry" | "aerospace" | "robotics" | "campus";
  year: string;
};

export const PROJECTS: Project[] = [
  {
    id: "acco-thermal-systems",
    title: "Thermal & Fluid Systems Analysis",
    summary:
      "Pipe pressure-loss checks, equipment comparison tools, and field surveys supporting mechanical system design decisions in industry.",
    description:
      "As an engineering intern at ACCO Engineered Systems, I analyzed mechanical drawings and equipment schedules to calculate pressure losses across chilled- and hot-water pipe sections and check pump suitability for design flows. I compared manufacturer data across major equipment brands, built an Excel calculator for capacity derating by model, size, and line length, and presented the tool to the team. Field work included documenting existing equipment and room dimensions on client job walks, plus duct takeoffs for a facility retrofit estimate.",
    role: "Engineering Intern · ACCO Engineered Systems",
    tools: ["Excel (VLOOKUP)", "FastDUCT", "Mechanical drawings", "Field surveys"],
    outcomes: [
      "Pressure-loss checks across 153 chilled- and hot-water pipe sections (300–700 GPM)",
      "Equipment derating calculator presented to 60+ team members",
      "Field data from 26 client job walks for scoping and estimating",
      "Duct takeoffs across two floors of a public facility",
    ],
    status: "complete",
    category: "industry",
    year: "2026",
  },
  {
    id: "murray-project-coordination",
    title: "Mechanical Project Coordination",
    summary:
      "Vendor coordination, drawing markups, and team training on large mechanical installations and public infrastructure work.",
    description:
      "As an operations intern at Murray Company Mechanical Contractors, I coordinated with vendors and joined job walks and weekly client meetings to verify installation requirements for critical equipment at the Hyperion Water Treatment Plant. I reviewed and marked up engineering drawings on projects valued at $100K–$300K, prepared weekly coordination documents (RFIs, work orders, submittals, proposals), and presented permitting-process training to 100+ employees.",
    role: "Operations Intern · Murray Company",
    tools: ["Bluebeam", "Drawing review", "RFIs & submittals", "Job walks"],
    outcomes: [
      "Supported critical equipment installs at a major water treatment plant",
      "Flagged design issues on $100K–$300K public projects",
      "At least four coordination documents prepared per week",
      "Technical training delivered to 100+ staff, including leadership",
    ],
    status: "complete",
    category: "industry",
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
    category: "robotics",
    year: "2022",
  },
  {
    id: "engineering-society",
    title: "Cypress College Engineering Society",
    summary:
      "Co-founded the student engineering society — CAD tutorials, 3D-printing competitions, and community events.",
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
    category: "campus",
    year: "2022",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Design & CAD",
    items: [
      "SolidWorks",
      "AutoCAD",
      "Revit",
      "Bluebeam markups",
      "3D printing & prototyping",
    ],
  },
  {
    title: "Analysis",
    items: [
      "Thermal & fluid calculations",
      "Aerodynamics (XFLR5)",
      "MATLAB",
      "Excel modeling (VLOOKUP)",
      "Equipment & data comparison",
    ],
  },
  {
    title: "Make & field",
    items: [
      "Shop & lab builds",
      "Field surveys & job walks",
      "Mechanical drawings",
      "Duct / system takeoffs",
      "Sensor integration",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Project coordination docs",
      "Vendor & client meetings",
      "Technical presentations",
      "Team leadership",
      "Cross-discipline teamwork",
    ],
  },
] as const;

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  industry: "Industry",
  aerospace: "Aerospace",
  robotics: "Robotics",
  campus: "Campus",
};
