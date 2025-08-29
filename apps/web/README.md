# Planting Roots Realty – Website (`apps/web`)

This is the main marketing and listings website for Planting Roots Realty, built with React, Vite, Tailwind CSS, and TypeScript. It lives inside the `plantingrootsrealty` monorepo under `apps/web`. It uses `pnpm` as the package manager.

Content is sourced from [Sanity](https://www.sanity.io/) via a read-only integration. Sanity is **not included** in this repo — it is managed separately.

---

## 📁 Project Structure

This folder is part of a larger monorepo. Key structure:
plantingrootsrealty/
├── apps/
│ ├── web/ → This folder (the public-facing website)
│ └── cms/ → Sanity Studio (managed separately)
├── packages/ → Shared components/utilities
└── …

---

## 🛠 Setup & Development

### Install dependencies

From the monorepo root:

````bash
pnpm install
### Install dependencies

This installs all dependencies across the monorepo, including shared packages.

### Run development server

```bash
pnpm dev --filter web
````

Open your browser to [http://localhost:3000](http://localhost:3000) (or the port shown in the console) to view the app.

---

## Environment Variables

Create an `.env` file in the root of the repo with the following:

```env
VITE_PUBLIC_SANITY_PROJECT_ID=
VITE_PUBLIC_SANITY_DATASET=
VITE_PUBLIC_SANITY_API_VERSION=
VITE_PUBLIC_SANITY_PREVIEW_TOKEN=
```

Replace the placeholders with your actual credentials and URLs.
These credentials connect the site to the headless Sanity CMS (read-only access).

---

## Git & Deployment

### Save SSH Key Passphrase (Optional)

If your SSH key has a passphrase and you want to avoid entering it every time:

```bash
# Start SSH agent
eval "$(ssh-agent -s)"

# Add your SSH key (update the path if necessary)
ssh-add ~/.ssh/id_ed25519_personal
```

Add these lines to your shell profile (`~/.zshrc`, `~/.bashrc`, etc.) to automate this on terminal start.

---

### Push Changes to CMS Repository

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Verify your remote:

```bash
git remote -v
```

If the remote is missing or incorrect, add it with:

```bash
git remote add origin git@github.com:your-username/your-cms-repo.git
```

Replace `your-username/your-cms-repo` with your actual GitHub path.

For the backend repo to push:

```
git subtree push --prefix apps/api api main
```

---

## Build & Preview

### Build production-ready files

```bash
pnpm build
```

### Preview the production build locally

```bash
pnpm preview
```

The `build` command outputs the production assets to the `dist/` folder.

---

## Deployment Notes

- The site is deployed via Vercel, using apps/web as the project root.
- Configure all required environment variables via Vercel’s dashboard.
- No Sanity Studio is hosted here — only Sanity integration (via its API).
- The Cloudflare-managed domain points to Vercel.

---

## Additional Tips

- Keep `.env` files out of Git to protect secrets.

- Use `.gitignore` to exclude `node_modules/`, `.env`, and other local files.

- Use pnpm workspaces to manage dependencies across the monorepo.
- Shared UI components and utilities may live in /packages.
- For CMS edits or schema changes, use the Sanity Studio project, managed separately.

---

Happy coding! 🚀
