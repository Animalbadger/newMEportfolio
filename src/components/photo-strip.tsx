import Image from "next/image";
import { displayName, PROFILE } from "@/lib/profile";

const PHOTOS = [
  {
    src: "/photos/zaid-headshot.jpg",
    alt: `${displayName(PROFILE)} — headshot`,
    label: "Portrait",
    className: "aspect-square object-cover object-top",
    sizes: "96px",
  },
  {
    src: "/photos/zaid-workshop.jpg",
    alt: `${displayName(PROFILE)} with a custom motion system on the bench`,
    label: "Build & test",
    className: "aspect-[16/10] object-cover object-center",
    sizes: "(max-width: 640px) 45vw, 220px",
  },
  {
    src: "/photos/zaid-cnc.jpg",
    alt: `${displayName(PROFILE)} operating a CNC mill`,
    label: "Shop floor",
    className: "aspect-[16/10] object-cover object-[center_35%]",
    sizes: "(max-width: 640px) 45vw, 220px",
  },
] as const;

export function PhotoStrip() {
  return (
    <section
      aria-label="Photos of Zaid in the shop"
      className="border-y border-ink/8 bg-white px-5 py-10 sm:px-8 sm:py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
            In the shop
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink-muted">
            Hands-on work — prototyping on the bench and machining in the lab.
          </p>
        </div>

        <ul className="flex flex-wrap items-end gap-3 sm:gap-4">
          {PHOTOS.map((photo) => (
            <li key={photo.src} className="group">
              <figure className="space-y-1.5">
                <div
                  className={
                    photo.src.includes("headshot")
                      ? "relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-ink/10 sm:h-24 sm:w-24"
                      : "relative h-[4.5rem] w-[7.5rem] overflow-hidden rounded-md ring-1 ring-ink/10 sm:h-24 sm:w-40"
                  }
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes={photo.sizes}
                    className={photo.className}
                    priority={photo.src.includes("headshot")}
                  />
                </div>
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
                  {photo.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
