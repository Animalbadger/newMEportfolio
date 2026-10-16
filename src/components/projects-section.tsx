"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import {
  CATEGORY_LABELS,
  PROJECTS,
  type Project,
  type ProjectStatus,
} from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type Filter = "all" | Project["category"];
type LoadState = "loading" | "ready" | "error";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "design", label: CATEGORY_LABELS.design },
  { id: "robotics", label: CATEGORY_LABELS.robotics },
];

const STATUS_LABEL: Record<ProjectStatus, string> = {
  complete: "Complete",
  "in-progress": "In progress",
  concept: "Concept",
};

function statusTone(status: ProjectStatus) {
  if (status === "complete")
    return "border-copper/40 bg-copper/10 text-copper-deep";
  if (status === "in-progress")
    return "border-ink/20 bg-ink/5 text-ink-muted";
  return "border-dashed border-ink/25 bg-transparent text-ink-muted";
}

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("ready");
  const [isPending, startTransition] = useTransition();
  const loadGeneration = useRef(0);

  useEffect(() => {
    if (loadState !== "loading") return;
    const generation = ++loadGeneration.current;
    const timer = window.setTimeout(() => {
      if (loadGeneration.current === generation) {
        setLoadState("ready");
      }
    }, 700);
    return () => window.clearTimeout(timer);
  }, [loadState]);

  const visible = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  function onFilter(next: Filter) {
    setOpenId(null);
    setLoadState("loading");
    startTransition(() => {
      setFilter(next);
    });
  }

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-steel-panel px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-copper">
            Selected work
          </p>
          <h2
            id="projects-heading"
            className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl"
          >
            Projects
          </h2>
          <p className="mt-3 max-w-lg text-ink-muted">
            Two design-and-build highlights for now — the heat-insert machine
            and the Can Arm transfer robot. Expand a row for CAD, drawings,
            video, and the full build story.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Project filters"
        >
          {FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              onClick={() => onFilter(item.id)}
              className={cn(
                "rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                filter === item.id
                  ? "border-ink bg-ink text-white"
                  : "border-ink/12 bg-white text-ink-muted hover:border-ink/30 hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          className={cn("mt-10", isPending && "opacity-70 transition-opacity")}
        >
          {loadState === "loading" && <ProjectsLoading />}
          {loadState === "error" && (
            <ProjectsError onRetry={() => setLoadState("loading")} />
          )}
          {loadState === "ready" && visible.length === 0 && <ProjectsEmpty />}
          {loadState === "ready" && visible.length > 0 && (
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {visible.map((project, index) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  index={index}
                  open={openId === project.id}
                  onToggle={() =>
                    setOpenId((current) =>
                      current === project.id ? null : project.id,
                    )
                  }
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `${project.id}-panel`;
  const isFeatured = Boolean(project.featured);

  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 py-6 text-left transition-colors hover:bg-ink/[0.02] sm:gap-6 sm:py-7"
      >
        <span className="font-mono text-xs text-ink-faint tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              {project.title}
            </span>
            {isFeatured && (
              <Badge
                variant="outline"
                className="rounded-sm border-copper/40 bg-copper/10 font-mono text-[10px] text-copper-deep"
              >
                Featured
              </Badge>
            )}
            <Badge
              variant="outline"
              className={cn(
                "rounded-sm font-mono text-[10px]",
                statusTone(project.status),
              )}
            >
              {STATUS_LABEL[project.status]}
            </Badge>
          </span>
          <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
            {project.summary}
          </span>
          <span className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-faint">
            <span>{CATEGORY_LABELS[project.category]}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
            <span aria-hidden>·</span>
            <span>{project.role}</span>
          </span>
        </span>
        <span
          className={cn(
            "mt-1 font-mono text-lg text-copper transition-transform duration-300",
            open && "rotate-45",
          )}
          aria-hidden
        >
          +
        </span>
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-8 pb-10 pl-0 sm:pl-10">
            {project.course && (
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                {project.course}
              </p>
            )}

            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.description}
            </p>

            {project.videos && project.videos.length > 0 && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  Demo video
                </p>
                <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                  {project.videos.map((video) => (
                    <li key={video.src}>
                      <figure className="space-y-1.5">
                        <div className="overflow-hidden rounded-md bg-ink/5 ring-1 ring-ink/10">
                          <video
                            className="aspect-video w-full bg-black object-contain"
                            controls
                            playsInline
                            preload="metadata"
                            poster={video.poster}
                          >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support embedded video.
                          </video>
                        </div>
                        <figcaption className="text-[11px] leading-snug text-ink-faint">
                          {video.caption}
                        </figcaption>
                      </figure>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.images && project.images.length > 0 && (
              <div className="space-y-8">
                {(
                  ["cad", "drawing", "analysis", "photo"] as const
                ).map((kind) => {
                  const group = project.images!.filter(
                    (img) => (img.kind ?? "photo") === kind,
                  );
                  if (group.length === 0) return null;
                  const title =
                    kind === "cad"
                      ? "CAD & mechanism views"
                      : kind === "drawing"
                        ? "Manufacturing drawings"
                        : kind === "analysis"
                          ? "Analysis, FEA & data"
                          : "Build photos";
                  const wide = kind !== "photo";
                  const contain =
                    kind === "drawing" || kind === "analysis";
                  return (
                    <div key={kind}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                        {title}
                      </p>
                      <ul
                        className={cn(
                          "mt-3 grid gap-3",
                          wide
                            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
                        )}
                      >
                        {group.map((image) => (
                          <li
                            key={image.src}
                            className={cn(
                              kind === "cad" &&
                                (image.src.includes("toolhead-exploded") ||
                                  image.src.includes("fig-cad-assembly")) &&
                                "sm:col-span-2",
                              kind === "analysis" &&
                                image.src.includes("fig-frame-fea") &&
                                "sm:col-span-2",
                              kind === "drawing" && "sm:col-span-1 lg:col-span-1",
                            )}
                          >
                            <figure className="space-y-1.5">
                              <div
                                className={cn(
                                  "relative overflow-hidden rounded-md bg-white ring-1 ring-ink/10",
                                  kind === "drawing" || kind === "analysis"
                                    ? "aspect-[4/3]"
                                    : kind === "cad"
                                      ? "aspect-[16/10]"
                                      : "aspect-[4/3]",
                                )}
                              >
                                <Image
                                  src={image.src}
                                  alt={image.alt}
                                  fill
                                  sizes={
                                    wide
                                      ? "(max-width: 640px) 100vw, 40vw"
                                      : "(max-width: 640px) 45vw, 200px"
                                  }
                                  className={cn(
                                    contain
                                      ? "object-contain p-2"
                                      : "object-cover",
                                  )}
                                />
                              </div>
                              <figcaption className="text-[11px] leading-snug text-ink-faint">
                                {image.caption}
                              </figcaption>
                            </figure>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            )}

            {project.contributions && project.contributions.length > 0 && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  {project.contributionsLabel ??
                    "What I established & built"}
                </p>
                <ul className="mt-3 max-w-2xl space-y-2 text-sm text-ink-muted">
                  {project.contributions.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.process && project.process.length > 0 && (
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  How it came together
                </p>
                <ol className="mt-3 max-w-2xl space-y-3">
                  {project.process.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm text-ink-muted">
                      <span className="font-mono text-[11px] text-ink-faint tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            <Separator className="max-w-2xl bg-ink/10" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  Tools
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-sm border border-ink/15 px-2 py-1 font-mono text-[11px] text-ink-muted"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint">
                  Outcomes
                </p>
                <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project.pending && project.pending.length > 0 && (
              <p className="max-w-2xl font-mono text-[11px] uppercase tracking-[0.12em] text-ink-faint">
                Coming next: {project.pending.join(" · ")}
              </p>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

function ProjectsLoading() {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Loading projects">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-3 border-b border-ink/10 py-6">
          <Skeleton className="h-8 w-2/3 rounded-sm bg-ink/10" />
          <Skeleton className="h-4 w-full max-w-xl rounded-sm bg-ink/8" />
          <Skeleton className="h-3 w-40 rounded-sm bg-ink/8" />
        </div>
      ))}
    </div>
  );
}

function ProjectsEmpty() {
  return (
    <div className="border border-dashed border-ink/20 px-6 py-16 text-center">
      <p className="font-display text-2xl text-ink">No projects in this filter</p>
      <p className="mt-2 text-sm text-ink-muted">
        Try another area, or clear the filter to see everything.
      </p>
    </div>
  );
}

function ProjectsError({ onRetry }: { onRetry: () => void }) {
  return (
    <div
      role="alert"
      className="border border-copper/30 bg-copper/5 px-6 py-14 text-center"
    >
      <p className="font-display text-2xl text-ink">Couldn’t load projects</p>
      <p className="mt-2 text-sm text-ink-muted">
        Something went wrong loading projects. Retry to reload.
      </p>
      <Button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-md bg-ink text-white hover:bg-ink/90"
      >
        Retry
      </Button>
    </div>
  );
}
