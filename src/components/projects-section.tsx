"use client";

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
  { id: "mechanism", label: CATEGORY_LABELS.mechanism },
  { id: "thermal", label: CATEGORY_LABELS.thermal },
  { id: "structures", label: CATEGORY_LABELS.structures },
  { id: "automation", label: CATEGORY_LABELS.automation },
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
  // Static portfolio data is ready on first paint; loading/error are demoable states.
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
            Placeholder case studies with solid ME copy until real write-ups and
            drawings land. Filter by discipline; expand a row for detail.
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
                "rounded-sm border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                filter === item.id
                  ? "border-ink bg-ink text-steel-mist"
                  : "border-ink/15 bg-transparent text-ink-muted hover:border-ink/35 hover:text-ink",
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
          <div className="pb-8 pl-0 sm:pl-10">
            <p className="max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
              {project.description}
            </p>
            <Separator className="my-5 max-w-2xl bg-ink/10" />
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
          </div>
        </div>
      </div>
    </li>
  );
}

function ProjectsLoading() {
  return (
    <div className="space-y-4" aria-busy="true" aria-label="Loading projects">
      {Array.from({ length: 4 }).map((_, i) => (
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
        Try another discipline, or clear the filter to see everything.
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
        Something went wrong fetching the project list. Retry to reload
        placeholders.
      </p>
      <Button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-sm bg-ink text-steel-mist hover:bg-ink/90"
      >
        Retry
      </Button>
    </div>
  );
}
