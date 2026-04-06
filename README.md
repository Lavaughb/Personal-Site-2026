# Lavaugh Brown — Personal Site 2026

A sleek, dark-themed portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Designed to be fast, responsive, and visually striking.

> **Let's Talk Tech.**

---

## Preview

| Section | Description |
|---------|------------|
| **Hero** | Animated intro with headline and call-to-action |
| **About** | Bio, background, and tech stack |
| **Experience** | Tabbed work history with role details |
| **Projects** | Featured project cards with links |
| **Contact** | Get-in-touch CTA with direct email |

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Language | TypeScript |
| Deployment | Vercel |

---

## Design

- **Theme** — Dark grey backgrounds with crimson red (`#dc143c`) accents
- **Typography** — Geist Sans + Geist Mono for a clean dev aesthetic
- **Layout** — Single scrollable page, fully responsive (desktop + mobile)
- **Motion** — Fade-up entrances, animated underlines, consistent cubic-bezier easing
- **Details** — Numbered section headings, sticky navbar, social sidebars, hamburger menu

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/Lavaughb/Personal-Site-2026.git
cd Personal-Site-2026

# Install dependencies
npm install

# Run locally
npm run dev
```

Open **http://localhost:3000** to view the site.

---

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata
    page.tsx          # Main page — assembles all sections
    globals.css       # Theme variables, scrollbar, selection
  components/
    Navbar.tsx        # Sticky header + mobile menu
    Hero.tsx          # Landing section
    About.tsx         # Bio + skills grid
    Experience.tsx    # Tabbed job history
    Projects.tsx      # Featured project cards
    Contact.tsx       # CTA section
    Footer.tsx        # Credit line
    SocialSidebar.tsx # Fixed social links + email
```

---

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger auto-deploy.

---

## Connect

- **GitHub** — [@Lavaughb](https://github.com/Lavaughb)
- **LinkedIn** — [lavaughb](https://www.linkedin.com/in/lavaughb/)
- **Email** — Lavaugh.Brown@gmail.com

---

Built by Lavaugh Brown
