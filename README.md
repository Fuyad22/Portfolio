# Portfolio Website (HTML + CSS + JS)

A simple, responsive, single-page portfolio.

## How to run

### Option 1: Open directly
- Double-click `index.html` to open it in your browser.

### Option 2: VS Code Live Server (recommended)
1. Install the extension **Live Server**.
2. Right-click `index.html` → **Open with Live Server**.

## Customize

Edit these values in `index.html`:
- Your name
- Location / role / availability
- Project titles + links ("Live" / "Code")
- Social links (GitHub / LinkedIn)
- Contact email (`mailto:you@example.com`)

Optional: tweak colors in `css/styles.css` under `:root`.

## Push to GitHub

### 1) Initialize git + commit

Run these commands in this folder:

```bash
git init
git add .
git commit -m "Initial commit"
```

If `git commit` complains about missing identity, set it once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 2) Create a GitHub repo

1. Go to https://github.com/new
2. Create a new repository (example name: `portfolio`)
3. Copy the repository URL (HTTPS)

### 3) Add remote + push

Replace the URL below with yours:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## Publish with GitHub Pages

1. In your repo on GitHub: **Settings** → **Pages**
2. **Build and deployment** → **Source**: `Deploy from a branch`
3. **Branch**: `main` and **Folder**: `/ (root)`

Your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO/`
