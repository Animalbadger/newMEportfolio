import { brandName, displayName, PROFILE } from "@/lib/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-steel-panel px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-sm tracking-[0.12em] text-ink">
          {brandName(PROFILE)}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
          © 2026 {displayName(PROFILE)} · Mechanical engineering portfolio
        </p>
      </div>
    </footer>
  );
}
