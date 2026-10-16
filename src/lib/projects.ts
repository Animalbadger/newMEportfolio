export type ProjectStatus = "complete" | "in-progress" | "concept";

export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  /** cad / drawing / analysis get a bit more room in the gallery */
  kind?: "cad" | "drawing" | "analysis" | "photo";
};

export type ProjectVideo = {
  src: string;
  poster?: string;
  caption: string;
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
  category: "design" | "robotics";
  year: string;
  featured?: boolean;
  course?: string;
  process?: string[];
  contributions?: string[];
  /** Override the contributions section heading (default: What I established & built) */
  contributionsLabel?: string;
  images?: ProjectImage[];
  videos?: ProjectVideo[];
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
    id: "can-arm",
    title: "Can Arm — 3-DOF Transfer Robot",
    summary:
      "A servo-driven robotic arm that automatically picks and relocates cans — custom SolidWorks parts, geared gripper, and Arduino sequencing from CAD to bench.",
    description:
      "Built for Intro to Design (Project 3), the Can Arm is a compact 3-DOF manipulator that transfers objects (empty soda cans) through a fully programmed servo sequence — no hand-cranking, no potentiometer babysitting. I designed and fabricated the mechanical stack in SolidWorks: base and cover, arm and arm holder, rotating assembly with ball bearing, servo mounts, and a left/right claw pair closed by an MG995-driven gear mesh. COTS MG995 servos and an Arduino kit handled actuation and control; a variable DC supply fed the motors through a breadboard while the Arduino drove a repeatable open-loop trajectory (home → grasp → lift → rotate → place). The arm mounts to a 3D-printed base on a wooden plank for stiffness — the same shop instincts as my heat-insert gantry and internship drawing reviews: design for printability, document with BOM/schematics, then iterate until the sequence hits every time.",
    role: "Design & build · Intro to Design Project 3",
    tools: [
      "SolidWorks (parts, assembly, drawings)",
      "FDM 3D printing (PLA)",
      "MG995 high-torque servos",
      "Arduino sequencing",
      "Geared end-effector design",
      "DC bench supply & breadboard wiring",
    ],
    outcomes: [
      "Full Can Arm Assembly with BOM — base, arm, rotating assembly, claws, covers",
      "Part drawings for claws, arm, holders, base, and servo attachments (mm detailing)",
      "3-DOF architecture sized to the transfer task (base rotate, shoulder extend, claw close)",
      "Motor-driven geared gripper reliable on cylindrical cans",
      "Automated Arduino sequence that homes, manipulates, and places without manual inputs",
      "Stable wooden-plank mount for weight-bearing during demos",
    ],
    status: "complete",
    category: "robotics",
    year: "2024",
    course:
      "Intro to Design · Project 3: Robot Arm · Low Budget Engineering Squad",
    contributions: [
      "SolidWorks design of structural and gripper parts (claws, arm, holders, base, covers)",
      "Assembly drawing with BOM (CA78943) and rotating-assembly schematic (RA87634)",
      "Detail drawings for right/left claw, arm, arm holder, servo holder, base cover",
      "Physical build — print, assemble MG995 stack, zip-tie cable management, bench bring-up",
      "Mechatronics integration — Arduino signal lines, DC supply to servos, scripted transfer path",
    ],
    process: [
      "Requirements — automate can transfer with a low-budget team; choose 3 DOF so the mechanism stays simple without sacrificing the task.",
      "Architecture — custom printed structure + COTS MG995s and Arduino; claw gear train for synchronized grasp on cylinders.",
      "CAD — model base (BA 23899), arm (AR36749), arm holder (AH76293), rotating assembly (RA87634), left/right claws (LC35489 / RC47890), covers and servo attachments.",
      "Documentation — Can Arm Assembly sheet with section views + BOM; individual part drawings with mm dimensions and section callouts for print/fab.",
      "Fabrication — FDM-print structural parts; integrate three MG995s with horns; add ball bearing in the rotating assembly for smoother yaw.",
      "Controls — scrap flaky potentiometer teleop; hard-code a servo angle sequence that homes, closes the claw, lifts, rotates the base, and places the can.",
      "Integration — power servos from a bench DC supply (~6.5 V) via breadboard; Arduino handles PWM; mount the base to a wooden plank for demo stability.",
      "Validation — repeat the transfer sequence until placement is consistent; iterate zip-ties, mounts, and claw mesh for reliability.",
    ],
    images: [
      {
        src: "/photos/can-arm/assembly-bom.png",
        alt: "SolidWorks Can Arm Assembly drawing with section view and bill of materials",
        caption: "Can Arm Assembly — section B-B + BOM (CA78943)",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/drawing-rotating-assem.png",
        alt: "SolidWorks rotating assembly drawing with claw and servo BOM",
        caption: "Rotating assembly schematic — claws, bearing, MG995",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/drawing-right-claw.png",
        alt: "Detailed SolidWorks drawing of the right claw part",
        caption: "Right claw detail drawing (RC47890)",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/drawing-left-claw.png",
        alt: "Detailed SolidWorks drawing of the left claw part",
        caption: "Left claw detail drawing (LC35489)",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/drawing-arm.png",
        alt: "SolidWorks drawing of the robotic arm link",
        caption: "Arm link drawing (AR36749)",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/drawing-arm-holder.png",
        alt: "SolidWorks drawing of the arm holder",
        caption: "Arm holder drawing (AH76293)",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/drawing-servo-holder.png",
        alt: "SolidWorks drawing of the rotating servo holder with section view",
        caption: "Rotating servo holder (RH76447)",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/drawing-base-cover.png",
        alt: "SolidWorks drawing of the base cover",
        caption: "Base cover drawing (BC12777)",
        kind: "drawing",
      },
      {
        src: "/photos/can-arm/photo-gripper-close.jpg",
        alt: "Close-up of the geared claw gripper and MG995 servo on the Can Arm",
        caption: "Geared claw + MG995 — end-effector close-up",
        kind: "photo",
      },
      {
        src: "/photos/can-arm/photo-gripper-scale.jpg",
        alt: "Can Arm gripper next to a hand for scale on the workbench",
        caption: "Gripper scale check on the bench",
        kind: "photo",
      },
      {
        src: "/photos/can-arm/photo-full-setup.png",
        alt: "Full Can Arm setup with Arduino, breadboard, and DC power supply",
        caption: "Full setup — arm, Arduino, breadboard, bench supply",
        kind: "photo",
      },
      {
        src: "/photos/can-arm/photo-bench-setup.png",
        alt: "Can Arm on wooden base during powered testing",
        caption: "Powered test on wooden base mount",
        kind: "photo",
      },
    ],
    videos: [
      {
        src: "/videos/can-arm-motion.mp4",
        poster: "/videos/can-arm-motion-poster.jpg",
        caption: "Bench bring-up — joint motion and gripper under Arduino control",
      },
    ],
  },
  {
    id: "shoe-tester",
    title: "Shoe Durability & Quality Testing Machine",
    summary:
      "A compact ~2×2 ft gait-cycle tester that rolls through heel strike, mid-stance, and toe-off — flywheel linkage, spring-assisted loading (~75 lb/in), Dorner conveyor, and multi-zone load cells for sole wear and load-transfer study.",
    description:
      "Commercial footwear testers are either crude vertical presses that miss the rolling contact of real walking, or full robotic gait labs that are too expensive for most engineering spaces. I designed a laboratory-scale shoe durability and quality testing machine that sits in an approximate 2 ft × 2 ft footprint while still reproducing the stance-phase sequence that actually wears a sole: heel strike → mid-stance peak → toe-off load transfer. The architecture is deliberately mechanical — a revolving linkage on a ~30 lb rotating flywheel converts motor rotation into repeated foot motion; when kinematics showed the flywheel mass alone could not hit human-scale walking forces (~165–195 lb), I sized a spring-assist pack to ~75 lb/in using Hooke’s law at ~50 rpm. The frame is AISI 1020 steel, checked in SolidWorks Simulation (beam model) under 150 lbf vertical + 22.5 lbf lateral: peak stress ~0.349 ksi, max deflection ~2.1×10⁻⁴ in, first natural frequency ~889 Hz vs. ~41.7 Hz motor drive — stiffness and resonance margin without guessing. A Dorner 2200-class low-profile conveyor carries the shoe under a foot mold instrumented with ~550 lbf compressive load cells at heel, mid-foot, and forefoot (HX711 24-bit ADC) so load progression across the stance phase is measurable, not assumed. Biomechanics drove every trade: literature on gait (Winter, Perry) and robotic footwear testers (Nguyen et al.) pushed the design away from “stamp and crush” and toward continuous directional load transfer on a compact, repeatable platform.",
    role: "Mechanical design & analysis · ME executive design study",
    tools: [
      "SolidWorks (assembly + Simulation FEA)",
      "Gait biomechanics (stance-phase loading)",
      "Linkage / flywheel kinematics",
      "Spring design (Hooke’s law · ~75 lb/in)",
      "Impulse-momentum impact estimates",
      "Dorner 2200 conveyor selection",
      "Load cells · HX711 24-bit ADC",
      "Cost & motor sizing trade studies",
    ],
    outcomes: [
      "Full CAD assembly of frame, flywheel linkage, foot mold, and conveyor integration in a ~2×2 ft lab footprint",
      "Spring system sized to ~75 lb/in (≈2 in OD, 1 in ID, 3 in free length, 0.14 in wire) to reach ~165–195 lb walking loads at ~50 rpm",
      "Frame FEA on AISI 1020 — ~0.349 ksi peak stress, ~2.1×10⁻⁴ in deflection, ~889 Hz first mode vs. ~42 Hz drive",
      "Heel-strike impact estimate ~534 lbf and friction ~176 lbf (μ≈0.33) to size conveyor contact loads for a 143 lb reference body weight",
      "Multi-zone load-cell layout (heel / mid-foot / forefoot) with ~550 lbf cells and HX711 readout for stance-phase load transfer",
      "Subsystem cost breakdown showing a path well below commercial robotic gait simulators",
    ],
    status: "complete",
    category: "design",
    year: "2026",
    course:
      "Mechanical Engineering · Shoe Testing Machine · Dr. Amir Rezaei",
    contributionsLabel: "Design scope & analysis ownership",
    contributions: [
      "Problem framing — replace human-subject variability with a repeatable mechanical gait-cycle platform for sole wear and load distribution",
      "Mechanism architecture — revolving linkage + flywheel (~30 lb rotating assembly) for heel-strike → mid-stance → toe-off motion, not vertical stamping",
      "Spring-assist sizing — free-body / Hooke’s-law work when flywheel inertia alone under-delivered human walking force",
      "Structural FEA — AISI 1020 beam-element frame under operating vertical/lateral loads; vibration screen vs. motor frequency",
      "Conveyor & instrumentation — Dorner 2200-class treadmill path; foot-mold load cells + HX711 for plantar load progression",
      "Impact / friction calculations and costed BOM-level trade study for motors, bearings, springs, sensors, and structure",
    ],
    process: [
      "Biomechanics first — map the stance phase (heel strike, mid-stance peak, toe-off) from gait literature; reject pure compression presses because they miss rolling contact and forefoot load transfer.",
      "Benchmark the field — study commercial presses vs. expensive robotic gait simulators (Nguyen et al.); aim for a simplified but mechanically honest tester that a lab can actually house and afford.",
      "Mechanism choice — revolving linkage on a flywheel so continuous rotation becomes repeated downward/forward foot motion; estimate ~30 lb rotating mass and run Newton’s-law / kinematic checks at ~50 rpm.",
      "Force gap → springs — rotating assembly alone cannot hit ~165–195 lb walking loads; size a spring pack to ~75 lb/in (2 in OD / 1 in ID / 3 in free / 0.14 in wire) so assist force fills the gap without industrial servos.",
      "Frame stiffness — SolidWorks Simulation beam model in AISI 1020; apply 150 lbf vertical + 22.5 lbf lateral; confirm tiny stress/deflection and first natural frequency (~889 Hz) far above motor frequency (~41.7 Hz).",
      "Treadmill path — select Dorner 2200-class low-profile conveyor for a tight 2×2 ft envelope; size contact from gait curve (~1.2× BW heel strike ≈172 lb on 143 lb BW) plus impulse impact (~534 lbf) and friction (~176 lbf at μ=0.33).",
      "Sense the sole — foot mold with compressive load cells (~550 lbf, ±0.276 lb class accuracy) at heel, mid-foot, and forefoot; HX711 24-bit ADC so stance-phase load migration is a measured trend, not a sketch.",
      "Motors & cost — DC drive sized for ~50 rpm under load (torque vs. packaging vs. industrial servo cost); subsystem cost table keeps the architecture cheaper than robotic gait labs while staying mechanically complete.",
      "Design closure — lock CAD assembly (frame + linkage + mold + conveyor), document FEA/spring/gait tables, and leave a clear path for adjustable weight brackets, conveyor tracking calibration, and closed-loop motor control.",
    ],
    images: [
      {
        src: "/photos/shoe-tester/fig-cad-assembly.png",
        alt: "SolidWorks CAD assembly of the shoe testing machine with frame, conveyor, linkage, and foot mold",
        caption: "Final CAD assembly — frame, conveyor, linkage, foot mold",
        kind: "cad",
      },
      {
        src: "/photos/shoe-tester/fig-linkage-flywheel.png",
        alt: "Revolving linkage and flywheel mechanism that converts rotation into gait-cycle foot motion",
        caption: "Revolving linkage + flywheel — rotation → gait motion",
        kind: "cad",
      },
      {
        src: "/photos/shoe-tester/fig-conveyor.png",
        alt: "Conveyor and treadmill layout based on a Dorner 2200-class platform",
        caption: "Dorner 2200-class conveyor / treadmill layout",
        kind: "cad",
      },
      {
        src: "/photos/shoe-tester/fig-foot-loadcells.png",
        alt: "Foot mold geometry with load-cell placement at heel, mid-foot, and forefoot",
        caption: "Foot mold — load cells at heel, mid-foot, forefoot",
        kind: "cad",
      },
      {
        src: "/photos/shoe-tester/fig-frame-fea.png",
        alt: "SolidWorks Simulation structural frame analysis showing stress and displacement on AISI 1020 steel",
        caption: "Frame FEA — AISI 1020, ~0.349 ksi / ~2.1e-4 in",
        kind: "analysis",
      },
      {
        src: "/photos/shoe-tester/fig-spring-model.png",
        alt: "Simplified mass-spring free-body model of the shoe testing mechanism",
        caption: "Spring / FBD model — dynamic loading assist",
        kind: "analysis",
      },
      {
        src: "/photos/shoe-tester/fig-gait-load-curve.png",
        alt: "Estimated gait-cycle loading curve including heel strike, mid-stance, and toe-off",
        caption: "Gait-cycle load curve — heel strike → toe-off",
        kind: "analysis",
      },
      {
        src: "/photos/shoe-tester/table-walking-loads.png",
        alt: "Table of estimated walking load conditions across gait phases",
        caption: "Table — estimated walking load conditions",
        kind: "analysis",
      },
      {
        src: "/photos/shoe-tester/table-spring.png",
        alt: "Table of selected spring design parameters and stiffness",
        caption: "Table — spring design parameters (~75 lb/in)",
        kind: "analysis",
      },
      {
        src: "/photos/shoe-tester/table-cost.png",
        alt: "Cost analysis and component breakdown table for the shoe testing machine",
        caption: "Table — cost / component breakdown",
        kind: "analysis",
      },
    ],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Design & CAD",
    items: [
      "SolidWorks (parts, assemblies, drawings)",
      "GD&T & manufacturing drawings",
      "BOM & assembly schematics",
      "AutoCAD / Revit",
      "Design for 3D printing",
    ],
  },
  {
    title: "Analysis",
    items: [
      "SolidWorks Simulation (FEA)",
      "Linkage / spring / impact sizing",
      "Thermal & fluid calculations",
      "Aerodynamics (XFLR5)",
      "MATLAB",
      "Excel modeling (VLOOKUP)",
      "Equipment & data comparison",
    ],
  },
  {
    title: "Make & mechatronics",
    items: [
      "Machine design & gantry builds",
      "Servo / stepper integration",
      "Arduino sequencing",
      "Linear motion systems",
      "Shop fabrication & bring-up",
    ],
  },
  {
    title: "Collaboration",
    items: [
      "Project coordination & RFIs",
      "Technical presentations",
      "Team leadership",
      "Field surveys & job walks",
      "Cross-discipline teamwork",
    ],
  },
] as const;

export const CATEGORY_LABELS: Record<Project["category"], string> = {
  design: "Design / build",
  robotics: "Robotics",
};
