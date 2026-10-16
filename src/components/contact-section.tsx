import { PROFILE } from "@/lib/profile";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden bg-ink px-5 py-20 text-steel-mist sm:px-8 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(201,214,224,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201,214,224,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-copper/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
          Next step
        </p>
        <h2
          id="contact-heading"
          className="mt-3 max-w-xl font-display text-4xl tracking-tight sm:text-5xl"
        >
          Résumé & contact
        </h2>
        <p className="mt-4 max-w-lg text-steel-mist/70">
          Placeholder links until real email, LinkedIn, GitHub, and PDF are
          wired in. Update them in{" "}
          <code className="font-mono text-[13px] text-copper">
            src/lib/profile.ts
          </code>
          .
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="rounded-sm bg-copper px-6 text-ink hover:bg-copper/90"
          >
            <a href={PROFILE.resumeUrl}>{PROFILE.resumeLabel}</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-sm border-steel-mist/30 bg-transparent px-6 text-steel-mist hover:bg-steel-mist/10"
          >
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[12px] uppercase tracking-[0.16em] text-steel-mist/65">
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
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
