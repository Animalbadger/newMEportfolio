"use client";

/**
 * Full-bleed light atmosphere: soft white→gray wash, faint grid,
 * and gear silhouettes kept very light for a modern clean look.
 */
export function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_75%_15%,#ffffff_0%,#f7f8fa_42%,#eef0f3_78%,#e6e8ed_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_12%_88%,rgba(61,107,140,0.06),transparent_50%)]" />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(28,31,38,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(28,31,38,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 50%, transparent 100%)",
        }}
      />

      <svg
        className="absolute -right-[18%] top-[8%] h-[92%] w-auto text-ink/[0.04] sm:-right-[8%] lg:right-[-2%]"
        viewBox="0 0 640 640"
        fill="currentColor"
      >
        <g className="origin-center animate-spin-slow">
          <path d="M320 40c18 0 34 10 41 26l18 42 46-8c17-3 34 5 42 20l22 40 44 14c16 5 27 20 27 37v45l38 28c14 10 20 28 15 45l-14 44 24 40c9 15 7 34-5 47l-32 34 4 46c2 17-7 33-22 41l-42 20-8 46c-3 17-16 30-33 33l-45 8-20 42c-8 16-24 26-42 26h-44l-28 38c-10 14-28 20-45 15l-44-14-40 24c-15 9-34 7-47-5l-34-32-46 4c-17 2-33-7-41-22l-20-42-46-8c-17-3-30-16-33-33l-8-45-42-20c-16-8-25-24-22-41l4-46-32-34c-12-13-14-32-5-47l24-40-14-44c-5-17 1-35 15-45l38-28v-45c0-17 11-32 27-37l44-14 22-40c8-15 25-23 42-20l46 8 18-42c7-16 23-26 41-26h44z" />
          <circle cx="320" cy="320" r="118" className="fill-white/70" />
          <circle
            cx="320"
            cy="320"
            r="72"
            className="fill-none stroke-ink/15"
            strokeWidth="10"
          />
          <circle cx="320" cy="320" r="28" className="fill-ink/10" />
        </g>
      </svg>

      <svg
        className="absolute left-[-6%] bottom-[6%] h-[38%] w-auto text-ink/[0.035] sm:left-[2%]"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <g className="origin-center animate-spin-reverse">
          <path d="M100 12l12 28 30-6 10 28 28 12-6 30 28 12-12 28-28 10 6 30-28 12-12-28-30 6-10-28-28-12 6-30-28-12 12-28 28-10z" />
          <circle cx="100" cy="100" r="36" className="fill-white/80" />
          <circle cx="100" cy="100" r="14" className="fill-ink/12" />
        </g>
      </svg>

      <svg
        className="absolute inset-0 h-full w-full text-ink/10"
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

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-steel-panel" />
    </div>
  );
}
