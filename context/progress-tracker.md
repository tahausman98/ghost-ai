# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Design System & UI Primitives (`context/feature-specs/01-design-system.md`)

## Current Goal

- Install and configure shadcn/ui, add the 7 specified UI primitives, install lucide-react, and create `lib/utils.ts` with `cn()`, matching the dark theme in `globals.css`.

## Completed

- Design System & UI Primitives (`context/feature-specs/01-design-system.md`): shadcn/ui installed and configured, 7 primitives added (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react installed, `lib/utils.ts` exports `cn()`, dark theme wired into `globals.css`. Verified via `next build` and a temporary routed smoke-test page (all 7 components rendered, removed after verification).

## In Progress

- None.

## Next Up

- Add the next planned feature unit here.

## Open Questions

- None currently.

## Architecture Decisions

- The installed shadcn/ui registry version uses the `base-nova` style on `@base-ui/react` (not Radix), and ships a separate `cn` npm package rather than a hand-written `clsx` + `tailwind-merge` helper — `lib/utils.ts` re-exports it (`export { cn } from "cn"`). Composition uses a `render` prop (e.g. `<DialogTrigger render={<Button/>} />`) instead of Radix's `asChild`.
- `globals.css` now defines the full token table from `context/ui-context.md` (`--bg-base`, `--text-primary`, `--accent-primary`, etc.) in `:root`, and maps shadcn's semantic tokens (`--background`, `--primary`, `--card`, ...) onto those same values so generated `components/ui/*` files stay untouched but render in the project's dark palette. Both sets are exposed as Tailwind utilities via `@theme inline` (shadcn's names plus the custom `bg-base`, `text-copy-primary`, `border-surface-border`, `text-brand`, `bg-accent-dim`, etc. from the ui-context table).
- Since the theme is dark-only, `<html>` in `app/layout.tsx` carries a permanent `dark` class (rather than a `prefers-color-scheme` toggle) so the `dark:` variant classes baked into several generated components (button, input, tabs, textarea) always resolve — otherwise they'd only activate under the OS's dark-mode preference, contradicting the "dark only, no light mode" requirement.

## Session Notes

- Add context needed to resume work in the next session.
