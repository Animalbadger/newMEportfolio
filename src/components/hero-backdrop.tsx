"use client";

/**
 * Full-bleed mechanical atmosphere: blueprint grid, brushed steel wash,
 * and a slowly rotating gear silhouette — no stock photos required.
 */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Atmospheric gradient plane */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_20%,#d9e2ea_0%,#c5d0db_38%,#aebbc8_72%,#9aabbb_100%)]" />

      {/* Soft warm wash from copper accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(184,115,51,0.14),transparent_55%)]" />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(26,35,50,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(26,35,50,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* Fine hatch for material feel */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-35deg, rgba(26,35,50,0.7) 0 1px, transparent 1px 7px)",
        }}
      />

      {/* Dominant gear / mechanism silhouette — edge-to-edge visual plane */}
      <svg
        className="absolute -right-[18%] top-[8%] h-[92%] w-auto text-ink/[0.07] sm:-right-[8%] lg:right-[-2%]"
        viewBox="0 0 640 640"
        fill="currentColor"
      >
        <g className="origin-center animate-spin-slow">
          <path d="M320 40c18 0 34 10 41 26l18 42 46-8c17-3 34 5 42 20l22 40 44 14c16 5 27 20 27 37v45l38 28c14 10 20 28 15 45l-14 44 24 40c9 15 7 34-5 47l-32 34 4 46c2 17-7 33-22 41l-42 20-8 46c-3 17-16 30-33 33l-45 8-20 42c-8 16-24 26-42 26h-44l-28 38c-10 14-28 20-45 15l-44-14-40 24c-15 9-34 7-47-5l-34-32-46 4c-17 2-33-7-41-22l-20-42-46-8c-17-3-30-16-33-33l-8-45-42-20c-16-8-25-24-22-41l4-46-32-34c-12-13-14-32-5-47l24-40-14-44c-5-17 1-35 15-45l38-28v-45c0-17 11-32 27-37l44-14 22-40c8-15 25-23 42-20l46 8 18-42c7-16 23-26 41-26h44z" />
          <circle cx="320" cy="320" r="118" className="fill-steel-mist/40" />
          <circle
            cx="320"
            cy="320"
            r="72"
            className="fill-none stroke-ink/25"
            strokeWidth="10"
          />
          <circle cx="320" cy="320" r="28" className="fill-ink/20" />
        </g>
      </svg>

      {/* Secondary smaller pinion */}
      <svg
        className="absolute left-[-6%] bottom-[6%] h-[38%] w-auto text-ink/[0.06] sm:left-[2%]"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <g className="origin-center animate-spin-reverse">
          <path d="M100 12l12 28 30-6 10 28 28 12-6 30 28 12-12 28-28 10 6 30-28 12-12-28-30 6-10-28-28-12 6-30-28-12 12-28 28-10z" />
          <circle cx="100" cy="100" r="36" className="fill-steel-mist/50" />
          <circle cx="100" cy="100" r="14" className="fill-ink/25" />
        </g>
      </svg>

      {/* Dimension callout lines */}
      <svg
        className="absolute inset-0 h-full w-full text-ink/15"
        preserveAspectRatio="none"
      >
        <line
          x1="8%"
          y1="78%"
          x2="42%"
          y2="78%"
          stroke="currentColor"
          strokeWidth="1"
          className="animate-draw"
        />
        <line
          x1="8%"
          y1="76%"
          x2="8%"
          y2="80%"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="42%"
          y1="76%"
          x2="42%"
          y2="80%"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      {/* Bottom edge fade into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-steel-panel" />
    </div>
  );
}
