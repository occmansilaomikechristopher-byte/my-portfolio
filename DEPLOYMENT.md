# Portfolio Update Guide (Step by Step)

Use this guide whenever you want to change your portfolio and publish updates to GitHub Pages.

## 1) Open the correct project folder

Project folder:

`C:\Users\MANSILAO FAMILY\Downloads\my-portfolio\my-portfolio-main\my-portfolio`

---

## 2) Edit the files you want

### A) Root static portfolio (main website)
Edit these files:
- `index.html`
- `style.css`
- `script.js`
- `assets/...` (images)

Live URL:
- `https://occmansilaomikechristopher-byte.github.io/my-portfolio/`

### B) React app (sub-page)
Edit files in:
- `my-portfolio/src/App.jsx`
- `my-portfolio/src/App.css`
- `my-portfolio/src/index.css`
- other files in `my-portfolio/src/`

Live URL:
- `https://occmansilaomikechristopher-byte.github.io/my-portfolio/react-app/`

---

## 3) (Recommended) Test React app locally

Open terminal and run:

```powershell
cd "C:\Users\MANSILAO FAMILY\Downloads\my-portfolio\my-portfolio-main\my-portfolio\my-portfolio"
npm install
npm run dev
```

For production check:

```powershell
npm run build
```

---

## 4) Commit and push your changes

Go to repo root and push:

```powershell
cd "C:\Users\MANSILAO FAMILY\Downloads\my-portfolio\my-portfolio-main\my-portfolio"
git add .
git commit -m "Update portfolio"
git push origin main
```

---

## 5) Wait for automatic deploy

Your GitHub Actions workflow deploys automatically after every push to `main`.

Wait about 1–3 minutes, then open:
- Root: `https://occmansilaomikechristopher-byte.github.io/my-portfolio/`
- React app: `https://occmansilaomikechristopher-byte.github.io/my-portfolio/react-app/`

---

## 6) If changes are not visible

Do a hard refresh:
- `Ctrl + F5`

Or open the site in Incognito/Private mode.

---

## Quick command block (copy/paste)

```powershell
cd "C:\Users\MANSILAO FAMILY\Downloads\my-portfolio\my-portfolio-main\my-portfolio"
git add .
git commit -m "Update portfolio"
git push origin main
```
