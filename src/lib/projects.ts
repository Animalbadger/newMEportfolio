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
  category: "mechanism" | "thermal" | "structures" | "automation";
  year: string;
};

export const PROJECTS: Project[] = [
  {
    id: "cam-follower-fixture",
    title: "Cam-Follower Indexing Fixture",
    summary:
      "A plate cam and oscillating follower that indexes parts every 90° with under 0.2 mm repeatability.",
    description:
      "Designed a modular cam-follower fixture for a benchtop assembly cell. Modeled the plate cam profile in SolidWorks, validated rise/dwell timing with motion analysis, then machined the cam blank and follower arm on a mill. The fixture replaces a manual rotate-and-clamp step and keeps cycle timing consistent across operators.",
    role: "Lead designer & fabricator",
    tools: ["SolidWorks", "Motion Study", "CNC Mill", "GD&T"],
    outcomes: [
      "±0.15 mm positional repeatability on a 120 mm pitch circle",
      "Cycle time cut from ~18 s to ~7 s per part",
      "Interchangeable cam plates for 3 product variants",
    ],
    status: "complete",
    category: "mechanism",
    year: "2025",
  },
  {
    id: "heat-sink-optimization",
    title: "Forced-Convection Heat Sink Study",
    summary:
      "Parametric extruded-fin sink optimized for a 40 W LED driver under constrained fan flow.",
    description:
      "Built a parametric heat-sink family and ran comparative CFD and lumped-thermal checks to balance fin pitch, thickness, and base mass. Prototyped the winning geometry in aluminum and verified junction temperatures with thermocouples under a controlled ducted fan. Documentation includes design trade-offs and manufacturing notes for extrusion vs. CNC.",
    role: "Thermal analyst",
    tools: ["SolidWorks", "ANSYS Fluent", "MATLAB", "Thermocouples"],
    outcomes: [
      "12 °C lower peak case temperature vs. vendor stock sink",
      "15% mass reduction while holding T_j under limit",
      "Design-of-experiments matrix of 24 geometries",
    ],
    status: "complete",
    category: "thermal",
    year: "2025",
  },
  {
    id: "composite-bracket",
    title: "Lightweight Composite Bracket",
    summary:
      "Carbon-fiber sandwich bracket for a drone payload bay — stiffness first, then weight.",
    description:
      "Replaced a machined aluminum payload bracket with a CFRP sandwich laminate. Used FEA to set ply orientation, core thickness, and fastener insert strategy. Built a vacuum-bagged prototype and ran a three-point bend + fastener pull-out check against the aluminum baseline.",
    role: "Structures lead",
    tools: ["FEA", "Composite layup", "Vacuum bagging", "Instron"],
    outcomes: [
      "41% mass reduction at equal stiffness target",
      "Validated insert pull-out above 1.5× design load",
      "Layup schedule and cure notes ready for team handoff",
    ],
    status: "complete",
    category: "structures",
    year: "2024",
  },
  {
    id: "line-follower-chassis",
    title: "Differential-Drive Line Follower",
    summary:
      "Compact chassis, gearbox selection, and PID tuning for a reliable competition robot.",
    description:
      "Designed a rigid yet serviceable chassis with accessible battery and sensor mounts. Sized motors and gear reduction for traction on painted concrete, then implemented a PID line-follow controller with sensor calibration routines. Focused on maintainability: tool-less wheel swaps and labeled harnessing.",
    role: "Mechatronics designer",
    tools: ["SolidWorks", "Arduino", "PID control", "3D printing"],
    outcomes: [
      "Consistent lap times under ±3% across three battery ages",
      "Under 800 g dry mass with full sensor suite",
      "Field-serviceable in under two minutes",
    ],
    status: "complete",
    category: "automation",
    year: "2024",
  },
  {
    id: "epicyclic-demo",
    title: "Epicyclic Gear Train Demonstrator",
    summary:
      "Transparent planetary gearbox teaching aid with interchangeable carriers and sun gears.",
    description:
      "Concept and early CAD for a desktop planetary gear demonstrator used in kinematics labs. Goals: visible tooth engagement, quick ratio swaps, and a hand-crank + optional stepper drive. Currently in concept review with faculty for spring fabrication.",
    role: "Concept designer",
    tools: ["SolidWorks", "Gear generator", "FDM prototyping"],
    outcomes: [
      "Three planned ratio sets (3:1, 4:1, 5:1)",
      "Clear housing for classroom visibility",
      "BOM drafted for acrylic + printed gears",
    ],
    status: "concept",
    category: "mechanism",
    year: "2026",
  },
];

export const SKILL_GROUPS = [
  {
    title: "Design & CAD",
    items: [
      "SolidWorks (parts, assemblies, drawings)",
      "GD&T & tolerance stacks",
      "DFM / DFA reviews",
      "Motion & mechanism synthesis",
    ],
  },
  {
    title: "Analysis",
    items: [
      "Static & modal FEA",
      "Introductory CFD / thermal",
      "MATLAB & Python scripting",
      "Hand calcs & free-body checks",
    ],
  },
  {
    title: "Make & Test",
    items: [
      "Manual mill & lathe",
      "FDM / SLA prototyping",
      "Fixtures & go/no-go gauges",
      "Basic instrumentation",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Technical writing & BOMs",
      "Design reviews",
      "Git for CAD/docs",
      "Shop safety & planning",
    ],
  },
] as const;

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  mechanism: "Mechanisms",
  thermal: "Thermal",
  structures: "Structures",
  automation: "Automation",
};
