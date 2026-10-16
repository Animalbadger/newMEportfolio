import Image from "next/image";
import { displayName, PROFILE } from "@/lib/profile";

export function AboutSection() {
  const name = displayName(PROFILE);

  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-ink/8 bg-steel-panel px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            About me
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">
            {PROFILE.about.lead}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
            {PROFILE.about.body}
          </p>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {PROFILE.about.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 text-sm leading-snug text-ink-muted"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper"
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid gap-4 border-t border-ink/10 pt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint sm:grid-cols-2">
            <div>
              <dt className="text-ink-faint">School</dt>
              <dd className="mt-1 normal-case tracking-normal text-ink-muted">
                {PROFILE.education.university}
                <br />
                {PROFILE.education.degree} · {PROFILE.education.grad}
              </dd>
            </div>
            <div>
              <dt className="text-ink-faint">Transfer path</dt>
              <dd className="mt-1 normal-case tracking-normal text-ink-muted">
                {PROFILE.education.transfer}
              </dd>
            </div>
          </dl>
        </div>

        <aside className="flex flex-col items-start gap-3 lg:items-end">
          <div className="relative h-36 w-36 overflow-hidden rounded-full ring-1 ring-ink/10 sm:h-40 sm:w-40">
            <Image
              src="/photos/zaid-headshot.jpg"
              alt={`${name} — portrait`}
              fill
              sizes="160px"
              className="object-cover object-top"
            />
          </div>
          <p className="max-w-[10rem] font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint lg:text-right">
            {name}
            <br />
            Mechanical engineering
          </p>
        </aside>
      </div>
    </section>
  );
}
