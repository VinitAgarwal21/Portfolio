# 🌴 Personal Portfolio Website

A clean, responsive, single-page personal portfolio website built with **React 18 + Vite + Tailwind CSS**, featuring a subtle and creative **Vice City / Sunset-inspired aesthetic**.

Now equipped with **full backend synchronization** to import and parse real data from **GitHub** and **LinkedIn**!

---

## ✨ Design & Experience Highlights

- **Eye-Friendly Sunset Aesthetic**:
  - Soft atmospheric dusk auras (warm rose `#f43f5e`, coral `#fb7185`, twilight purple `#8b5cf6`, and ocean teal `#14b8a6`).
  - Subtle, stylized vector sunset sun and distant palm silhouettes on the horizon that ground the page without distracting or competing with text.
  - Zero harsh neon halos or vibrating saturations: gentle, comfortable contrast for long reading sessions.
- **Modern, Accessible Typography**:
  - Headings in [`Outfit`](https://fonts.google.com/specimen/Outfit) and [`Plus Jakarta Sans`](https://fonts.google.com/specimen/Plus+Jakarta+Sans) for clear, geometric elegance.
  - Body text in crisp, comfortable [`Inter`](https://fonts.google.com/specimen/Inter) with relaxed line heights.
- **Interactive Avatar in Navbar**:
  - Profile picture in the navbar that **smoothly expands on hover** with elevated shadow and a subtle sunset ring border.
- **Dark & Light Mode**:
  - Toggle anytime via the sun/moon button in the navbar.
  - **Dark Mode**: Deep obsidian slate (`#090d16`) with clean white headings and soft slate body text.
  - **Light Mode**: Clean, warm off-white (`#f8fafc`) with deep charcoal headings and WCAG AAA contrast.
  - Persists preference in `localStorage` and respects system `prefers-color-scheme`.
- **Dynamic Data Importer & Backend**:
  - **GitHub API**: Automatically imports your repositories, descriptions, stargazers, topics/tags, live demo URLs, and profile avatar.
  - **LinkedIn Parser**: Parses LinkedIn data exports (CSV, JSON, or copy-pasted experience blocks) into clean work history cards.
  - **One-Click Apply & Save**: Saves directly to `src/data/portfolioData.js` so it stays permanently updated!

---

## ⚡ How to Import Data from GitHub & LinkedIn

You have **two convenient ways** to import your data:

### Method 1: Using the Web UI (In Your Browser)
1. Start your portfolio:
   ```bash
   npm run dev
   ```
2. Click the **Download / Import icon** (`↓`) in the top-right of the navbar.
3. **GitHub Tab**:
   - Enter your GitHub username (e.g. `your-username`).
   - Click **"Fetch"** to see a live preview of your top repositories, topics, stars, and avatar.
4. **LinkedIn Tab**:
   - Paste your LinkedIn experience text or your exported `Positions.csv` / JSON.
   - Click **"Parse Experience Data"** to extract roles, companies, dates, and bullet points.
5. Click **"Apply to Portfolio"**. The portfolio will update instantly in real-time, and if the backend server is running, it will automatically save to `src/data/portfolioData.js`!

### Method 2: Using the Backend CLI Script
Run the automated sync script directly from your terminal:
```bash
npm run sync <your_github_username>
```
*(Example: `npm run sync vinit-agarwal`)*

This script connects directly to the GitHub API, parses your top repositories, extracts language tags, and automatically writes the formatted data into `src/data/portfolioData.js`.

---

## 🚀 Running the Full Stack

### 1. Run Backend Server (Express on port 5000):
```bash
npm run server
```

### 2. Run Frontend Development Server (Vite on port 3000):
```bash
npm run dev
```

### 3. Build for Production:
```bash
npm run build
```

---

## 📁 File Structure

```text
Portfolio/
├── index.html                   # HTML entry with Outfit, Plus Jakarta Sans & Inter fonts
├── package.json                 # React, Vite, Express, Tailwind CSS, Lucide icons
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Sunset palette, modern fonts, soft shadows
├── vite.config.js               # Vite config with relative base & /api proxy
├── README.md                    # Documentation & deployment guide
├── server/
│   ├── index.js                 # Express server with /api/github, /api/linkedin, /api/save
│   ├── githubParser.js          # GitHub REST API fetcher & repository mapper
│   ├── linkedinParser.js        # LinkedIn CSV, JSON & text parser
│   └── dataWriter.js            # Safe updater for src/data/portfolioData.js
├── scripts/
│   └── sync.js                  # CLI synchronization utility
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main single-page application & theme provider
    ├── index.css                # Global styles, subtle grid, custom scrollbars
    ├── data/
    │   └── portfolioData.js     # ⭐ CENTRAL DATA FILE
    └── components/
        ├── Navbar.jsx           # Sticky glassmorphic navbar with expandable avatar & sync trigger
        ├── SyncModal.jsx        # Data Import Modal for GitHub & LinkedIn
        ├── ThemeToggle.jsx      # Light/Dark mode switcher
        ├── ViceBackground.jsx   # Soft dusk aura, sun disc, subtle grid & palm silhouettes
        ├── Hero.jsx             # Clean name, typewriter effect, CTA buttons & stats
        ├── Skills.jsx           # Categorized skills with progress bars & filter pills
        ├── Experience.jsx       # Vertical timeline of career milestones
        ├── Projects.jsx         # Responsive project grid with tag filters
        ├── ProjectCard.jsx      # Project card with lazy loading, fallback & GitHub link
        ├── Contact.jsx          # "Call Me", "Email Me", social icons & contact form
        └── Footer.jsx           # Copyright, quick links & back-to-top button
```

---

## 🌐 Deployment Instructions

- **Vercel / Netlify**: Simply push to GitHub and deploy! The frontend is fully decoupled and will fetch GitHub data directly in the browser even if running as a static site.
- **GitHub Pages**: Run `npm run build` and deploy the `dist/` directory.
