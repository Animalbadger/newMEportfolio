export type ProjectStatus = "complete" | "in-progress" | "concept";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  /** cad / drawing get a bit more room in the gallery */
  kind?: "cad" | "drawing" | "photo";
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  tools: string[];
  outcomes: string[];
  status: ProjectStatus;
  category: "design" | "industry" | "aerospace";
  year: string;
  featured?: boolean;
  course?: string;
  process?: string[];
  contributions?: string[];
  images?: ProjectImage[];
  pending?: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "heat-insert-machine",
    title: "Automated 3D-Printed Part Repair Machine",
    summary:
      "A vision-guided three-axis heat-set insert machine that finds holes in 3D-printed parts and presses threaded inserts with consistent depth — built for ME 3250 at Cal Poly Pomona.",
    description:
      "Threaded inserts give 3D-printed parts durable, reusable threads, but installing them by hand is slow and inconsistent. For ME 3250, I established and built an automated heat-insert machine: a rigid aluminum base with integrated Y-axis motion, a belt-driven X-axis and lead-screw Z-axis gantry, a stainless work bed with insert staging on dowel pins, and a heated toolhead that picks and seats inserts. The system uses stepper-driven motion, homing sensors, and a Pi camera for hole detection — similar in architecture to a compact CNC/3D-printer gantry, purpose-built for repair and insert placement.",
    role: "Mechanical design & fabrication lead · ME 3250",
    tools: [
      "SolidWorks",
      "GD&T drawings",
      "PLA additive manufacturing",
      "Aluminum & stainless machining",
      "Linear rails / rods / bearings",
      "NEMA 17 · GT2 belt · T8 lead screw",
    ],
    outcomes: [
      "Designed and fabricated the 12×12×0.5 in aluminum base as the structural foundation",
      "Integrated Y-axis belt drive (NEMA 17, 20-tooth pulley, ~16 in belt) with steel rods and linear bearings",
      "Machined/tapped mounting features; 8×8×0.125 in stainless bed plate with epoxy-set dowel pins for insert staging",
      "Produced SolidWorks models and GD&T drawings for the base and bed plate",
      "Built and iterated the mechanical gantry (X belt / Z lead screw), mounts, and shop assembly for repeatable motion",
    ],
    status: "complete",
    category: "design",
    year: "2026",
    featured: true,
    course: "ME 3250.04 · Automated Heat Insert Machine · Prof. John Caffrey",
    contributions: [
      "Base assembly — rigidity, alignment, and mounting for the full XYZ system",
      "Y-axis motion on the base — rods, bearings, belt drive, and motor housing",
      "Stainless bed plate, clamping under the slider, and insert staging geometry",
      "Solid models, exploded views, and GD&T 2D drawings for fabrication",
      "Mechanical gantry structure (X/Z), 3D-printed mounts, and physical build/integration (non-electrical)",
    ],
    process: [
      "Problem framing — replace manual heat-set insert installation with a low-cost automated cell (~$400 budget class constraint) that improves alignment and insertion depth.",
      "Architecture — three primary mechanical assemblies: base, horizontal/vertical motion gantry, and tool/clamp path; inserts staged on dowel pins beside the workspace.",
      "Base design — 12×12×0.5 in aluminum plate sized for stiffness; drilled and tapped for M5 mounts; PLA support mounts and plate slider printed and bolted on.",
      "Y-axis integration — two steel rods, linear bearings, NEMA 17 belt drive (~16 in GT2 belt, 20-tooth pulley) for smooth, controlled table motion.",
      "Work surface — 8×8×0.125 in stainless bed plate on the slider (headless M3); holes for dowel pins epoxied in place to stage inserts in columns.",
      "Gantry motion — linear-rail X (belt) and lead-screw Z (T8) for toolhead positioning; iterated mounts, spacers, and lead-screw support during build for clearance and alignment.",
      "Documentation — SolidWorks assembly views plus GD&T callouts on the aluminum base and stainless bed for flatness, hole position, and fit.",
      "Bring-up — assembled physical machine, verified structural rigidity and Y-axis motion, and integrated subsystems for testing (camera/electrical stack handled separately).",
    ],
    images: [
      {
        src: "/photos/heat-insert/toolhead-exploded.png",
        alt: "Exploded SolidWorks view of the heated toolhead and clamp assembly",
        caption: "Exploded toolhead & clamp assembly — SolidWorks",
        kind: "cad",
      },
      {
        src: "/photos/heat-insert/x-axis-exploded.png",
        alt: "Exploded CAD of belt-driven X-axis with linear rail and NEMA 17",
        caption: "X-axis exploded — belt, rail, pulleys, stepper",
        kind: "cad",
      },
      {
        src: "/photos/heat-insert/z-axis-exploded.png",
        alt: "Exploded CAD of lead-screw Z-axis linear actuator",
        caption: "Z-axis exploded — lead screw, rail, motor",
        kind: "cad",
      },
      {
        src: "/photos/heat-insert/z-axis-detail.png",
        alt: "Detailed CAD close-up of Z-axis lead screw, coupler, and linear rail",
        caption: "Z-axis detail — coupler, lead screw, carriage",
        kind: "cad",
      },
      {
        src: "/photos/heat-insert/cad-vs-build.png",
        alt: "Side-by-side physical prototype and color CAD assembly of the machine",
        caption: "CAD assembly vs. physical build",
        kind: "cad",
      },
      {
        src: "/photos/heat-insert/toolhead-assembly.png",
        alt: "SolidWorks render of the assembled heated toolhead",
        caption: "Toolhead assembly render",
        kind: "cad",
      },
      {
        src: "/photos/heat-insert/sensor-housing.png",
        alt: "CAD of camera and sensor housings on the gantry rail",
        caption: "Sensor / camera housing mounts",
        kind: "cad",
      },
      {
        src: "/photos/heat-insert/drawing-base-plate.png",
        alt: "SolidWorks manufacturing drawing of the 12 by 12 inch aluminum base plate by Zaid A.",
        caption: "Base plate drawing — 6061-T651, M5 taps, GD&T (Zaid A.)",
        kind: "drawing",
      },
      {
        src: "/photos/heat-insert/drawing-bed-plate.png",
        alt: "SolidWorks drawing of the 8 by 8 inch stainless steel bed plate with reamed hole patterns",
        caption: "Bed plate steel drawing — reamed insert staging holes",
        kind: "drawing",
      },
      {
        src: "/photos/heat-insert/gantry-assembled.jpg",
        alt: "Assembled three-axis heat-insert machine on aluminum base",
        caption: "Assembled gantry on the aluminum base",
        kind: "photo",
      },
      {
        src: "/photos/heat-insert/toolhead-test.png",
        alt: "Heated toolhead positioned over a 3D-printed part on the bed",
        caption: "Toolhead over a printed part on the bed",
        kind: "photo",
      },
      {
        src: "/photos/heat-insert/assembly-wiring.jpg",
        alt: "Machine during assembly with stepper drivers and linear stages",
        caption: "Shop assembly — motion hardware laid out",
        kind: "photo",
      },
      {
        src: "/photos/zaid-workshop.jpg",
        alt: "Zaid observing the heat-insert machine on the workbench",
        caption: "At the bench with the prototype",
        kind: "photo",
      },
    ],
    pending: ["Demo videos of motion and insert placement"],
  },
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
    ],
    status: "complete",
    category: "industry",
    year: "2026",
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
];

export const SKILL_GROUPS = [
  {
    title: "Design & CAD",
    items: [
      "SolidWorks",
      "GD&T & drawings",
      "AutoCAD",
      "Revit",
      "3D printing & prototyping",
    ],
  },
  {
    title: "Analysis",
    items: [
      "Thermal & fluid calculations",
      "Aerodynamics (XFLR5)",
      "MATLAB",
      "Excel modeling",
      "Equipment & data comparison",
    ],
  },
  {
    title: "Make & field",
    items: [
      "Machine design & assembly",
      "Linear motion systems",
      "Shop & lab builds",
      "Field surveys & job walks",
      "Mechanical drawings",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Project coordination",
      "Technical presentations",
      "Team leadership",
      "Cross-discipline teamwork",
      "Vendor & client meetings",
    ],
  },
] as const;

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  design: "Design / build",
  industry: "Industry",
  aerospace: "Aerospace",
};
