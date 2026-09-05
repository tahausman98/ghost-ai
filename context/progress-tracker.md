# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Editor Chrome (`context/feature-specs/02-editor.md`)

## Current Goal

- Editor chrome base components are complete. Define and start the next feature unit (e.g. canvas foundations).

## Completed

- Design System & UI Primitives (`context/feature-specs/01-design-system.md`): shadcn/ui installed and configured, 7 primitives added (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), lucide-react installed, `lib/utils.ts` exports `cn()`, dark theme wired into `globals.css`. Verified via `next build` and a temporary routed smoke-test page (all 7 components rendered, removed after verification).
- Editor Chrome (`context/feature-specs/02-editor.md`): added `components/editor/editor-navbar.tsx` (fixed `h-14` top navbar, left/center/right sections, sidebar toggle button swapping `PanelLeftOpen`/`PanelLeftClose` based on an `isSidebarOpen` prop, right section left empty) and `components/editor/project-sidebar.tsx` (fixed floating overlay below the navbar, `isOpen`/`onClose` props, slides in/out via `translate-x` transition without affecting layout flow, header with title + close button, shadcn `Tabs` for "My Projects"/"Shared" each with an empty placeholder, full-width `New Project` button with `Plus` icon at the bottom). The existing `components/ui/dialog.tsx` (from phase 1) already supports title/description/footer using the project's dark theme tokens, so no new dialog file was created per the spec's "do not build actual dialogs yet." Verified with `tsc --noEmit`, `eslint`, `next build`, and a temporary routed smoke-test page driven with Playwright (screenshots of sidebar open/closed/re-toggled, tab switch, and dialog open, zero console errors) — removed after verification.

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
