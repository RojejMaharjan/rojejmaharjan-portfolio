# Rojej Maharjan — Personal Portfolio

A responsive dark cybersecurity/networking portfolio built with Next.js 14, TypeScript, and CSS.

## Requirements
- Node.js 18.17 or newer (Node.js 20 LTS is a good choice)
- npm
- Git (optional for local development, useful for deployment)

## Run locally on Ubuntu

```bash
cd ~/projects
unzip rojejmaharjan-portfolio.zip
cd rojejmaharjan-portfolio
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Before publishing
1. Review the text in `app/page.tsx` and correct any details that don't accurately represent you.
2. Replace the sample email address `hello@rojejmaharjan.com.np` with an email address you control.
3. Update the GitHub link to your real GitHub profile.
4. Add your own CV to `public/` only after you have prepared a public-safe version, then add a download link.
5. Add project screenshots or repositories only if they do not expose company information, internal IPs, credentials, or confidential configuration.
6. Run `npm run build` and fix any errors before deployment.

## Notes
- This is a starter website. It does not claim to be deployed or connected to your domain.
- The content and contact links are editable placeholders where indicated.
- The CSS currently imports Google Fonts. If you prefer no external font requests, remove the `@import` in `app/globals.css`.
