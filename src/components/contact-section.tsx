import { PROFILE } from "@/lib/profile";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden border-t border-ink/8 bg-white px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(28,31,38,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(28,31,38,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-copper/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
          Next step
        </p>
        <h2
          id="contact-heading"
          className="mt-3 max-w-xl font-display text-4xl tracking-tight text-ink sm:text-5xl"
        >
          Get in touch
        </h2>
        <p className="mt-4 max-w-lg text-ink-muted">
          This site is the portfolio link from the résumé. Reach out for
          internships, co-ops, or project conversations — update contact details
          in{" "}
          <code className="font-mono text-[13px] text-copper">
            src/lib/profile.ts
          </code>
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-md bg-ink px-6 text-white hover:bg-ink/90"
          >
            <a href={`mailto:${PROFILE.email}`}>Email {PROFILE.firstName}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-md border-ink/15 bg-white px-6 text-ink hover:bg-steel-panel"
          >
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[12px] uppercase tracking-[0.16em] text-ink-faint">
          <li>
            <a
              href={PROFILE.linkedin}
              className="transition-colors hover:text-copper"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={PROFILE.github}
              className="transition-colors hover:text-copper"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={`mailto:${PROFILE.email}`}
              className="transition-colors hover:text-copper"
            >
              {PROFILE.email}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
