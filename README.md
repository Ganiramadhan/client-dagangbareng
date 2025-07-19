# DagangBareng Client

A modern e-commerce frontend built with Next.js, Tailwind CSS, and NextAuth for authentication.

## 🚀 Features

- 🌐 Built with Next.js and TypeScript
- 🎨 Styled with Tailwind CSS
- 🔐 Authentication via NextAuth (Credentials Provider)
- 🛒 E-commerce landing page with products and services
- 📱 Responsive design

## 📦 Setup

1. Clone this repo:
   ```bash
   git clone https://github.com/your-username/dagangbareng-client.git
   cd dagangbareng-client
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file and add the following:
   ```env
   NEXTAUTH_SECRET=your_secret_key
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Run development server:
   ```bash
   pnpm dev
   ```

## 📁 Folder Structure

- `/components` – UI components (Button, Input, etc.)
- `/app` – Next.js app routes
- `/public` – Static assets (images, etc.)
- `/schemas` – Validation schemas using Zod

## 🛡️ License

MIT
