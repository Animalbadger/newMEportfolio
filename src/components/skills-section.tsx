import { SKILL_GROUPS } from "@/lib/projects";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-ink/8 bg-white px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
          Toolkit
        </p>
        <h2
          id="skills-heading"
          className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl"
        >
          Skills & tools
        </h2>
        <p className="mt-3 max-w-lg text-ink-muted">
          A cross-section of CAD, analysis, hands-on builds, and collaboration
          from coursework, internships, and campus teams.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5 border-t border-ink/15 pt-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-snug text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
