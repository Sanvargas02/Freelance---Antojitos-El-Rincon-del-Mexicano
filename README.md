# El Rincón del Mexicano

Informative restaurant website built with [Astro](https://astro.build). Mexican-themed colors (white, red, green), responsive layout, and an **Order now** flow that opens a popup with links to Uber Eats, DoorDash, and WhatsApp.

## Setup

1. **Install dependencies** (requires [Node.js](https://nodejs.org/) and npm):

   ```bash
   npm install
   ```

2. **Run the dev server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:4321](http://localhost:4321) in your browser.

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview the production build**:

   ```bash
   npm run preview
   ```

## Customize

- **Menu items**: Edit `src/data/menu.ts` to add or change dishes (image, title, price, description, category).
- **Order links**: In `src/components/OrderModal.astro`, set:
  - `uberEatsUrl` – your Uber Eats store link
  - `doorDashUrl` – your DoorDash store link
  - `whatsappNumber` – phone in E.164 format (e.g. `5215551234567`)
- **Location**: In `src/components/LocationSection.astro`, update `address`, `phone`, and `mapEmbedUrl` (Google Maps embed URL).

## Project structure

- `src/pages/index.astro` – Homepage
- `src/layouts/Layout.astro` – HTML shell and global styles
- `src/components/` – Header, Hero, MenuSection, MenuItemCard, OrderModal, About, Location, Footer
- `src/data/menu.ts` – Menu data
- `public/` – Static assets (e.g. favicon)
