# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/6021cb92-6f6f-428b-adcd-7e827a5b2350

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6021cb92-6f6f-428b-adcd-7e827a5b2350) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6021cb92-6f6f-428b-adcd-7e827a5b2350) and click on Share -> Publish.

### SPA (Single Page App) Routing / 404 on Refresh

If you deploy this app (React Router + Vite) to static hosting and refresh a non-root route (e.g. `/about-us`), you may see a 404 because the server tries to fetch `/about-us/index.html` which does not exist. Fixes:

- Netlify: add a `public/_redirects` file with: `/* /index.html 200` (already included).
- Vercel: use `vercel.json` with a catch‑all rewrite to `/index.html` (already included).
- GitHub Pages: add a `404.html` that loads the SPA. The build script copies `index.html` to `404.html` automatically.

Build script enhancement: `npm run build` now also creates `dist/404.html` for hosts (like GitHub Pages) that serve the 404 page for unknown paths.

If you use another platform, ensure there is a fallback rewrite so every unknown path serves `index.html`.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
