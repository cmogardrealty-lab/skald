# Citeworthy

Marketing site for Citeworthy: tool-assisted web design and SEO, built for the age of AI search. A statically generated single page (Next.js App Router, TypeScript, Tailwind CSS v4).

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

Every route is statically generated at build time (`○ (Static)`), including `/robots.txt`, `/sitemap.xml`, and the generated Open Graph image.

## Deploy

Zero-config on [Vercel](https://vercel.com/new): connect the GitHub repo and deploy, no project settings required.

## Before launch

Placeholders that still need real values, all in [`src/lib/site-config.ts`](src/lib/site-config.ts) unless noted:

- Production `url`, `email`, and social links.
- Founder name (also used in the `Person` JSON-LD block in [`src/app/layout.tsx`](src/app/layout.tsx)).
- Real screenshots and a real metric on the [Work](src/components/work.tsx) cards.
