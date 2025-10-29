# AS CLIMATE GOAL

A responsive storytelling site that highlights the Alimat Sustainability Climate Goals initiative with rich imagery, curated resources, and smooth in-page navigation.@src/pages/Index.tsx#11-23 @src/components/Hero.tsx#7-59

## Features

- **Immersive hero header** with animated calls to action and smooth scroll cues to guide visitors deeper into the experience.@src/components/Hero.tsx#19-58
- **Sticky, responsive navigation bar** that switches between desktop links and a collapsible mobile menu while retaining smooth section scrolling.@src/components/Navbar.tsx#6-101
- **Curated learning sections** covering introductions, downloadable documents, and academic resources tailored to climate literacy in Africa.@src/components/Intro.tsx#22-66 @src/components/Documents.tsx#34-80 @src/components/Articles.tsx#72-196
- **Downloadable flagship publication** that spotlights African climate stories and action plans.@src/components/NegligenceBook.tsx#7-39
- **Contact-ready footer** with social outreach links, brand identity, and dynamic copyright.

## Tech Stack

- [React 18](https://react.dev/) with TypeScript and Vite for fast local development and production builds.@src/App.tsx#11-25 @package.json#6-11
- [Tailwind CSS](https://tailwindcss.com/) with custom theming for rapid, consistent styling.@package.json#6-11 @tailwind.config.ts#1-120
- Shadcn UI components, Radix UI primitives, and lucide-react icons for polished interactions.@package.json#13-62
- TanStack Query for future-ready data fetching patterns.@src/App.tsx#12-23

## Getting Started

1. **Install dependencies** (Node.js 18+ recommended):

   ```bash
   npm install
   ```

2. **Run the development server**:

   ```bash
   npm run dev
   ```

   Vite will print a local URL (typically `http://localhost:5173`).

3. **Build for production** when ready:

   ```bash
   npm run build
   ```

4. **Preview the production build** locally:

   ```bash
   npm run preview
   ```

All script definitions live in `package.json` under the `scripts` section.@package.json#6-11

## Key Scripts

- `npm run dev` – start Vite in development mode with hot module replacement.
- `npm run build` – compile an optimized production bundle.
- `npm run preview` – serve the production build locally for final QA.
- `npm run lint` – run ESLint across the project.

## Project Structure

```
pixel-scroll-page/
├── public/                # Static assets (logo, downloadable PDFs)
├── src/
│   ├── assets/            # Hero imagery and climate visuals
│   ├── components/        # Page sections and reusable UI pieces
│   ├── pages/             # Route-level components (Index, NotFound)
│   ├── main.tsx           # Entry file mounting the React app
│   └── App.tsx            # Route definitions and providers
├── index.html             # Root HTML template
├── package.json           # Dependencies and scripts
└── tailwind.config.ts     # Tailwind theme configuration
```

## Content Overview

- **Intro & Founder Story** – Articulates the mission, vision, and founder background to contextualize the initiative.@src/components/Intro.tsx#22-66 @src/components/About.tsx#6-36
- **Climate Business Ideas** – Highlights opportunity areas driving sustainability across Africa.@src/components/Climate.tsx#21-47
- **Educational Resources & Downloads** – Provides curated articles, scholarships, opportunities, and downloadable study materials.@src/components/Documents.tsx#34-80 @src/components/Articles.tsx#72-196
- **Call to Action** – Encourages readers to engage through flagship content and contact touchpoints.@src/components/NegligenceBook.tsx#7-39 @src/components/Footer.tsx#15-85

## Customization Tips

- Update section content by editing the respective component in `src/components`. For example, adjust hero messaging in `Hero.tsx` or add new resources in `Articles.tsx`.
- Tailor colors, typography, and spacing through `tailwind.config.ts` or global styles in `src/index.css`.
- Replace media assets by swapping files within `src/assets` and `public/` while keeping filenames consistent with imports.

## Deployment

Any static hosting platform that supports Vite builds (such as Netlify, Vercel, or GitHub Pages) can serve the site. Build the project (`npm run build`) and deploy the generated `dist/` directory according to your provider’s instructions.

