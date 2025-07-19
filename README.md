# 🚀 Next.js Starter Kit

A modern, clean, and scalable starter template built with Next.js 15+, TypeScript, Tailwind CSS, and NextAuth — designed for fast development with best practices.

## ✨ Features

- ⚛️ **Next.js App Router** — App directory & routing ready
- 🔐 **NextAuth.js Authentication** — Secure credential-based login using JWT
- 🟦 **TypeScript & Tailwind CSS** — Strong typing & utility-first styling
- 🧹 **ESLint + Prettier + Husky + Lint-Staged** — Code quality & formatting enforced
- 🧾 **Conventional Commits** — Commitlint with Husky pre-commit hook
- 🧩 **Reusable UI Components** — Button, Input, etc.
- ☀️ **Light UI Design** — Modern and clean by default

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint + Prettier](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/)
- [clsx](https://github.com/lukeed/clsx)

---

## 🚀 Getting Started

```bash
git clone https://github.com/Ganiramadhan/nextjs-starter.git
cd nextjs-starter
pnpm install
pnpm dev
```

---

## 🌍 Internationalization (i18n)

- Translation files are stored in `public/locales/{lang}/common.json`
- Default locale: `en`
- Supported locales: `en`, `id`

Change language via routing:
```
/en/auth/sign-in
/id/auth/sign-in
```

---

## 🛠️ Development Commands

| Command           | Description                     |
| ---------------- | ------------------------------- |
| `pnpm dev`        | Start development server        |
| `pnpm lint`       | Run ESLint                      |
| `pnpm format`     | Format code with Prettier       |
| `pnpm build`      | Build for production            |

---

## 🧹 Git Hooks (Husky + Commitlint)

Pre-commit hook runs:

- Linting & formatting (via `lint-staged`)
- Commit message validation (via `commitlint` with Conventional Commits)

To skip hooks: `git commit --no-verify`

---

## 📁 Project Structure

```
app/
  auth/
    sign-in/
      page.tsx
    sign-up/
      page.tsx
  layout.tsx
  page.tsx
components/
  Button.tsx
  Input.tsx
  i18n-provider.tsx
hooks/
  useTheme.ts
lib/
  i18n.ts
public/
  locales/
    en/
      common.json
    id/
      common.json
styles/
  globals.css
```

---

## 📄 License

MIT License © 2025 [Gani Ramadhan](https://github.com/Ganiramadhan)
