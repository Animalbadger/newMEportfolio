"use client";

import { brandName, displayName, PROFILE } from "@/lib/profile";
import { Button } from "@/components/ui/button";
import { HeroBackdrop } from "@/components/hero-backdrop";

export function Hero() {
  const name = displayName(PROFILE);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-steel-mist"
      aria-labelledby="hero-brand"
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:justify-center lg:pb-24">
        <div className="max-w-2xl">
          <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.22em] text-copper delay-100">
            {PROFILE.title}
          </p>

          <h1
            id="hero-brand"
            className="animate-fade-up mt-4 font-display text-[clamp(4.5rem,14vw,9.5rem)] leading-[0.85] tracking-[-0.02em] text-ink delay-200"
          >
            {brandName(PROFILE)}
          </h1>

          <p className="animate-fade-up mt-6 max-w-md text-lg leading-relaxed text-ink-muted sm:text-xl delay-300">
            {PROFILE.tagline}
          </p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3 delay-400">
            <Button
              asChild
              size="lg"
              className="rounded-md bg-ink px-6 text-white hover:bg-ink/90"
            >
              <a href="#projects">View projects</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-md border-ink/15 bg-white/70 px-6 text-ink hover:bg-white"
            >
              <a href="#contact">Get in touch</a>
            </Button>
          </div>

          <p className="animate-fade-up mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint delay-500">
            {name} · {PROFILE.location}
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-6 right-5 z-10 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint sm:block sm:right-8"
        aria-hidden
      >
        Precision · Materials · Motion
      </div>
    </section>
  );
}
