# Deploying to Vercel

This is a Vite + React app. Vercel builds it in the cloud — you don't need Node
installed locally. Everything here is already configured (`vercel.json` handles
SPA routing; Vercel auto-detects the Vite build).

## 1. Put the code on GitHub

1. Create a free account at https://github.com and make a **new empty repo**
   (e.g. `portfolio`) — don't add a README/license, keep it empty.
2. Connect this local repo to it and push (the repo is already committed):

   ```bash
   cd ~/portfolio
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```

## 2. Deploy on Vercel

1. Sign up at https://vercel.com with your GitHub account.
2. **Add New → Project** → import your `portfolio` repo → **Deploy**.
   - Vercel auto-detects: Framework **Vite**, Build `vite build`, Output `dist`.
   - No environment variables or extra settings needed.
3. In ~1 minute you get a live URL like `portfolio-xyz.vercel.app`.
4. Rename it to something clean under **Settings → Domains** (or **Project →
   Settings → General → Project Name**), e.g. `alexhashemakis.vercel.app`.

Every future `git push` to `main` redeploys automatically.

## 3. Add a custom domain (whenever you're ready)

The free `.vercel.app` URL always stays live. To add your own domain:

1. Buy it from a registrar (Namecheap, Cloudflare, etc.) — or directly in
   Vercel under **Project → Domains → Buy**.
2. **Project → Settings → Domains → Add**, type your domain.
3. Set the DNS records Vercel shows you at your registrar. Typically:
   - Apex `yourdomain.com` → **A** record → `76.76.21.21`
   - `www.yourdomain.com` → **CNAME** → `cname.vercel-dns.com`
4. HTTPS is provisioned automatically. Live within minutes.

You can add, swap, or remove domains anytime with no rebuild.

## Notes

- The live site is the **React app** built from `src/`.
- `preview.html` and `serve.py` are local review tools only — Vite ignores them
  at build time, so they are never part of the deployed site.
