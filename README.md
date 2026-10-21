# SUARA — Sistem Unggah Aduan Rahasia dan Aman

An interactive, responsive React + TypeScript prototype for a Pendidikan Pancasila project. It is designed for desktop and mobile browsers and can be deployed to Vercel.

## Features

- Editorial serif typography, a navy/charcoal/champagne palette, layered gradients, translucent surfaces, hover states, and page transitions.
- Responsive news carousel and searchable news index with eight news stories, source-linked photographs, article detail views, and constitutional analysis.
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

SUARA is an educational prototype, not an official government or police service. Report submissions, image previews, tracking updates, notifications, and messages are local simulations. They are not sent to authorities, are not shared across devices, and are not permanently stored. Use fictional contact details and test information only. News text is written in original wording and summarizes source reporting; each article includes a link to the publisher. Photos are hotlinked from publisher or agency image CDNs with credits; some are contextual photographs related to the topic rather than images captured during the exact event. Images require an internet connection and may stop loading if a publisher changes its URL.

A production version would need a secure backend, access controls, privacy and safeguarding review, verified official integrations, and moderation before any real reports, contacts, or conversations could be handled.


## Revisi desain dan fitur

- Visual editorial dengan warna navy, charcoal, dan champagne, serif typography, translucent panels, gradients, and page transitions.
- Eight news items with direct photo URLs and source credits where available. Photos are hotlinked from the cited publisher/CDN; an internet connection is required for them to load.
- Expanded “Hakmu” table with the 23 constitutional provisions requested, full article wording, examples, and related responsibilities.
- Separate “Pembaruan laporan” and “Dukungan & panduan” conversations. The support side uses a local rule-based guide chatbot; it is not a hosted AI service.
- The report form previews selected image files and validates a contact field for the prototype flow.

## Important prototype behavior

The site is an interactive school-project prototype, not an official reporting service. Reports, tracking, notifications, and the sample case-update conversation are local simulations. The guide chatbot runs in the browser and does not connect to a live operator. Do not enter real sensitive personal data. A shared database and verified institutional integration would be needed for real submissions or cross-device case updates.
