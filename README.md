# EkoCentral Professional Website

Welcome to the **EkoCentral** Next.js web application repository. This project powers the professional digital presence for EkoCentral, showcasing services, products, and important contact details with a modern and highly responsive design.

## Technical Overview

The application is built using a modern, performance-first tech stack:
- **[Next.js](https://nextjs.org)**: App Router (version 16.x) configured for Static Site Generation (SSG) via `output: 'export'`.
- **[React](https://react.dev)**: Version 19, taking advantage of the latest UI paradigms.
- **[Tailwind CSS v4](https://tailwindcss.com/)**: For rapid, utility-first UI development and responsive design.
- **[Framer Motion](https://www.framer.com/motion/)**: To deliver seamless layout transitions and fluid micro-interactions.
- **[Lucide React](https://lucide.dev/)**: For clean, modern SVG iconography.

## Documentation and Instructions

For a comprehensive breakdown of the application architecture, routing structure, configuration, and architectural choices, please read the project documentation:
- 📖 [**DOCUMENTATION.md**](./DOCUMENTATION.md)

If you are an AI assistant or an LLM (such as Cursor, Windsurf, Cline, Claude, or Antigravity) helping to maintain or build upon this project, please consult the explicit instructions provided in the corresponding agent files located in the root of this project:
- `.cursorrules`
- `.windsurfrules`
- `.clinerules`
- `.antigravityrules`
- `CLAUDE.md`

## Getting Started

To run the application locally:

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **View the site:**
   Since the project is configured to deploy to a GitHub Pages subpath, the application runs on a configured base path.
   Open your browser and navigate to: [http://localhost:3000/ekocentral-page](http://localhost:3000/ekocentral-page)

## Deployment

This application is built as a static export and served via GitHub Pages under the `/ekocentral-page/` repository subpath. The configuration logic required to manage assets and images in this environment is outlined in `next.config.ts` and `imageLoader.ts`. Any changes made to assets should respect these configurations.
