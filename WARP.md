# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

CapyPay-App is an Astro-based web application using TypeScript with strict configuration. The project follows Astro's minimal starter template structure.

## Development Commands

### Core Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands (e.g., `npm run astro add`, `npm run astro check`)

### Testing and Linting
No test framework or linting tools are currently configured in this project.

## Architecture

### Project Structure
- **src/pages/** - File-based routing; each `.astro` or `.md` file becomes a route based on its filename
- **src/components/** - Reusable Astro/React/Vue/Svelte/Preact components (not yet created)
- **public/** - Static assets (images, fonts, etc.) served as-is

### TypeScript Configuration
The project uses Astro's strict TypeScript configuration (`astro/tsconfigs/strict`). All TypeScript code should adhere to strict type checking rules.

### Astro-Specific Patterns
- **Component Frontmatter**: Logic and imports go in the `---` frontmatter section of `.astro` files
- **Routing**: Automatic file-based routing from `src/pages/`
- **Static Generation**: By default, all pages are statically generated at build time

## Development Guidelines

### Adding New Pages
Create `.astro` files in `src/pages/`. The file path determines the URL route (e.g., `src/pages/about.astro` → `/about`)

### Adding Components
Create reusable components in `src/components/` (directory needs to be created). Components can be Astro components or framework components (React, Vue, etc.).

### Static Assets
Place images, fonts, and other static files in `public/`. Reference them with root-relative paths (e.g., `/favicon.svg`)
