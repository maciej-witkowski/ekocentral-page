# EkoCentral Professional Website - Project Documentation

## 1. Project Overview
This project is a modern, responsive, and SEO-optimized professional website for EkoCentral, built using cutting-edge web technologies. The website is designed to serve as a high-performance digital presence, showcasing the company's services, products, and contact information.

## 2. Technical Stack
- **Framework:** Next.js (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Static Site Generation (SSG) via GitHub Pages

## 3. Architecture & Implementation Details

### 3.1 Next.js App Router
The application uses the Next.js App Router (`app` directory) for routing and layouts. Key routes include:
- `/` - Home Page
- `/o-nas` - About Us
- `/oferta` - Services/Offer
- `/produkty` - Products
- `/nasi-dostawcy` / `/dostawcy` - Suppliers
- `/blog` - Blog section
- `/kontakt` - Contact Information
- `/privacy-policy` - Privacy Policy
- `/integris` - Integris-specific page

### 3.2 Component Structure
The UI is modularized in `src/components`, categorized into:
- `layout`: Reusable layout components (Navbar, Footer).
- `shared`: Generic, reusable UI components.
- Page-specific directories (`home`, `about`, `services`, `contact`, etc.) containing components relevant only to those sections.

### 3.3 GitHub Pages Deployment Configuration
To ensure proper functionality when deployed to GitHub Pages under the `/ekocentral-page` sub-path, specific configurations are in place:
1. **Next.js Config (`next.config.ts`)**:
   - `output: 'export'` - Enables Static HTML export.
   - `basePath: '/ekocentral-page'` - Configures Next.js to serve the application from this sub-path.
   - `assetPrefix: '/ekocentral-page/'` - Ensures CSS and JS assets are loaded correctly.
2. **Custom Image Loader (`imageLoader.ts`)**:
   - Because standard Next.js Image Component optimization isn't supported with static exports, a custom image loader prepends the `/ekocentral-page` basePath to local images to avoid broken links in production.

### 3.4 Styling and Animations
- **Tailwind CSS (v4)** is used for all utility-based styling, ensuring a fully responsive design.
- **Framer Motion** is integrated to provide smooth page transitions, scroll animations, and interactive hover effects.

## 4. Technical Decisions
- **Static Export**: The decision to use `output: 'export'` was made to eliminate the need for a Node.js server, allowing free and reliable hosting on GitHub Pages.
- **React 19**: Adopting the latest React features for improved performance and modern hooks.
- **Tailwind v4**: Utilizing the newest Tailwind features for simplified configuration (`@tailwindcss/postcss`) and improved build times.

## 5. Instructions for LLMs / AI Agents
For AI-assisted development, refer to the agentic rules files included in this project (`.antigravityrules`, `CLAUDE.md`). These files encode standard industry practices and project-specific constraints (such as the Next.js static export settings and routing paths) to ensure smooth collaboration.

## 6. Development Instructions
To run the project locally:
```bash
npm install
npm run dev
```

*Note: Since the `basePath` is configured, the local development server will be available at `http://localhost:3000/ekocentral-page`.*
