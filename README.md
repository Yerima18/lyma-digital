# Lyma Digital — Premium Web Development Agency

A premium web development agency portfolio built with React, TypeScript, and Tailwind CSS. Featuring smooth scroll animations, project modals, responsive design, and an integrated contact form.

Built by **Lyma Adam Bagri**.

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Build Tool:** Vite 6
- **Routing:** React Router DOM v7
- **Animations:** CSS keyframes + IntersectionObserver

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the app:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── components/       # Reusable UI components
│   ├── Header.tsx    # Fixed navbar with mobile menu
│   ├── Footer.tsx    # Social links, contact info, credits
│   ├── Hero.tsx      # Animated hero section
│   ├── Logo.tsx      # SVG monogram logo
│   └── ...
├── pages/            # Route pages
│   ├── Home.tsx
│   ├── ProjectsPage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── ...
├── public/           # Static assets (project screenshots)
├── constants.tsx     # Project data, testimonials, pricing
├── types.ts          # TypeScript interfaces
└── App.tsx           # Router and layout
```

## License

MIT
