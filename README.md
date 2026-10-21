# SUARA — Sistem Unggah Aduan Rahasia dan Aman

An interactive, responsive React + TypeScript prototype for a Pendidikan Pancasila project. It is designed for desktop and mobile browsers and can be deployed to Vercel.

## Features

- Editorial-style serif typography, layered gradients, translucent surfaces, hover states, and page transitions.
- Responsive news carousel and a searchable news index with five news stories, illustrative thumbnails, article detail views, and constitutional analysis.
- Longer editorial news summaries followed by analysis of relevant UUD NRI Tahun 1945 articles.
- Report form with required email-or-phone contact field, image upload preview, and generated demo reference code.
- Demo tracking timeline and sample message center with simulated staff-response and support conversations.
- Expanded constitutional-rights guide with relevant Indonesian laws and regulations.

## Run locally

Install Node.js LTS, open this folder in a terminal, then run:

```bash
npm install
npm run dev
```

To test a production build:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push the project folder to a GitHub repository.
2. Import that repository at https://vercel.com/.
3. Use the default Vite settings (`npm run build`, output directory `dist`).
4. Deploy and share the resulting `.vercel.app` URL.

## Important prototype limits

SUARA is an educational prototype, not an official government or police service. Report submissions, image previews, tracking updates, notifications, and messages are local simulations. They are not sent to authorities, are not shared across devices, and are not permanently stored. Use fictional contact details and test information only. The news thumbnails are illustrative images, not photographs from the linked reports. News summaries are original editorial summaries; use each source link for the complete original reporting.

A production version would need a secure backend, access controls, privacy and safeguarding review, verified official integrations, and moderation before any real reports, contacts, or conversations could be handled.
