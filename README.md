# AV Card

A virtual dollar card product built from a Figma design: a marketing landing page plus a dashboard for creating cards, moving money and reviewing transactions.

## Running it

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Script           | What it does               |
| ---------------- | -------------------------- |
| `pnpm dev`       | Development server         |
| `pnpm build`     | Production build           |
| `pnpm start`     | Serve the production build |
| `pnpm lint`      | ESLint                     |
| `pnpm typecheck` | TypeScript, no emit        |
| `pnpm format`    | Prettier write             |

## Pages

| Route                     | What's there                                                                    |
| ------------------------- | ------------------------------------------------------------------------------- |
| `/`                       | Landing page: hero, benefits, features, audience, FAQs, newsletter              |
| `/dashboard`              | Balance card, quick actions, cashback banner, recent transactions, top expenses |
| `/dashboard/cards`        | Virtual cards, card actions, card transactions, intra-card transfer             |
| `/dashboard/transactions` | Searchable, filterable transaction table with CSV export                        |

The profile panel opens from the user in the navbar (or the user row in the mobile menu) on any dashboard page.

Cards starts on the "no cards yet" screen. Walk through the fee summary and PIN and the page switches to your cards; a reload starts over, so both states are reachable.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui on Base UI · TanStack Table · React Hook Form with Zod

## Layout

```
src/
  app/
    (marketing)/         Landing page and its sections
    (dashboard)/         Dashboard layout and pages
      dashboard/
        _components/     Pieces shared across dashboard pages
        cards/           Cards page and its own components
        transactions/    Transactions page and its own components
  components/ui/         shadcn components
  data/                  Placeholder content
  interfaces/            Types for that content
  hooks/  lib/           Small helpers
```

Components live next to the route that uses them in `_components`, and move up to `dashboard/_components` once a second page needs them. Cross-folder imports use the `@dashboard/*` alias.

## Responsiveness

The design covers 1440px and 440px. Everything in between, and down to 360px, is adapted from those two.
