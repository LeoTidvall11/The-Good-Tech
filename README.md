# The Good Tech

A news website focused on positive technology stories. Built as a school assignment using HTML, Tailwind CSS v4, and JavaScript with Vite as the build tool.

## About

The site covers tech categories such as AI, Crypto, Space, Health, Ocean, Sustainability, Energy, Odd, and Breakthroughs. Articles are rendered dynamically from a local data file using vanilla JavaScript.

### Pages

- **index.html** — Home page with a news card grid and a category sidebar
- **categories.html** — Full category browser with carousels and a grid layout
- **article.html** — Individual article view, loaded via URL parameter (`?id=`)
- **privacy-policy.html**, **terms-of-service.html**, **contact-us.html** — Footer pages

## Tech Stack

- HTML5
- Tailwind CSS v4 (utility-first CSS framework)
- Vanilla JavaScript (ES modules)
- Vite (build tool / dev server)
- Font Awesome (icons)
- Google Fonts — Fraunces & Inter

## Getting Started

**Prerequisites:** Node.js installed on your machine.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
