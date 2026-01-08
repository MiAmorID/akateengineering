# AKATE Engineering — Website

CV. AKATE ENGINEERING INDONESIA — a simple Vite + React + TypeScript starter customized for the AKATE Engineering marketing site.

---

## Company profile

**CV. AKATE Engineering Indonesia**

- Tagline: **Engineering Solutions**
- Subtagline: **Consulting • Fabrication • Innovation**
- About: Established in Wanaherang, Gunung Putri, Bogor Regency, CV. AKATE Engineering Indonesia began by providing fabrication and machining services including lathe, milling, and drilling operations. After nearly 3 years of operation, AKATE Engineering has evolved into a comprehensive company offering engineering solutions, Special Purpose Machines, general fabrication, machining services, and expanding into industrial equipment distribution and trading.
- Partner line: *Your trusted partner for comprehensive engineering solutions, precision fabrication, and cutting-edge FEA analysis.*

---

## Quick start

Prerequisites:
- Node.js 18+ (recommended)
- npm or yarn

Install dependencies, run dev server:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

The dev server will usually be at `http://localhost:5173` (it may try another port if 5173 is in use).

---

## Hero slider images

Place your hero images in `public/hero/` and name them like:
- `slide-1.jpg` (or `.webp`)
- `slide-2.jpg`
- `slide-3.jpg`

Recommended: 16:9 aspect ratio (1600x900), compressed WebP or optimized JPG (<= 400 KB each).

If you use different filenames, update the `images` array in `src/components/Hero.tsx`.

---

## Theme & colors

Primary accent color (used across the site): `--accent` — currently set to `#2563eb` (blue). You can change it in:

- `src/index.css` (`:root`)
- `src/styles/variants/variant-a.css`
- `src/styles/variants/variant-b.css`

Buttons use a blue gradient derived from this accent.

---

## Git & deploy to GitHub Pages (Automated)

This project includes a GitHub Actions workflow that builds the site and deploys the `dist/` output to GitHub Pages.

1. If this project is not yet a git repo, run locally:

```bash
# initialize, commit, and push to your GitHub repo
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/MiAmorID/akateengineering.git
git push -u origin main
```

2. The included workflow (`.github/workflows/deploy.yml`) watches `main` and will build + deploy automatically. The first run may take a couple of minutes.

3. NOTE — GitHub Pages base path:

If your site is published at `https://<username>.github.io/<repo>/`, the vite build needs the correct `base` path so assets are resolved properly. The repo contains a helper in `vite.config.ts` that toggles the `base` to `'/akateengineering/'` when the build runs in the GitHub Pages workflow. No extra changes are required if you keep the repo name `akateengineering` and push to `main`.

---

## Troubleshooting

- If `npm run dev` reports a port in use, the dev server will automatically try the next port. You can also set `PORT=5173 npm run dev`.
- If images don't appear, check `public/hero/` for correct filenames and confirm the dev server was restarted after adding files.

---

## Contributing

PRs welcome — keep changes scoped and add a short description to commits. If you want me to push and configure the remote/workflow for you, I can do that (I will need permission to push or you can add the remote locally and run the commands above).

---

## License

MIT — feel free to change this to your preferred license.

---

If you'd like, I can also add sample placeholder images to `public/hero/` so the slider displays immediately after you run the site.
