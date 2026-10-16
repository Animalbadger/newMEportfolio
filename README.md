# Zaid — Mechanical Engineering Portfolio

Employer-ready personal portfolio for **Zaid**: interactive project case studies, skills, and résumé/contact CTAs. Built so Fahad can link it from a résumé quickly while real project content is swapped in.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui
- npm

No auth, no database — static content with client interactivity.

## Run locally

Requires **Node.js 20+** (LTS recommended).

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4327](http://127.0.0.1:4327).

| Script        | Description                          |
| ------------- | ------------------------------------ |
| `npm run dev` | Dev server on port **4327**          |
| `npm run build` | Production build                   |
| `npm run start` | Serve production build on **4327** |
| `npm run lint`  | ESLint                             |

## Customize

| What              | Where                                      |
| ----------------- | ------------------------------------------ |
| Name, email, links, résumé URL | `src/lib/profile.ts`          |
| Projects & skills | `src/lib/projects.ts`                      |
| Résumé PDF        | Replace `public/resume.pdf`                |
| Domain / deploy   | Point any host (Vercel, Netlify, etc.) at this repo; set the custom domain in that host’s dashboard. Update Open Graph URLs later if needed. |

Brand display uses `PROFILE.firstName` (and optional `lastName`). Search for `PROFILE` or `@/lib/profile` when renaming.

## Placeholder vs real

**Placeholder (replace with real content):**

- Project write-ups, outcomes, and years in `src/lib/projects.ts`
- Contact email, LinkedIn, GitHub URLs in `src/lib/profile.ts`
- `public/resume.pdf` (minimal stub PDF)
- Skill list until aligned with the résumé

**Real / shipped:**

- Site structure, ME visual direction, interactive project list (filters, expand, loading/error/empty states)
- Responsive layout and motion

## Cloud Agent environment

See `.cursor/environment.json` for install/start hints used by Cursor Cloud Agents (`npm install`, `npm run dev`).
