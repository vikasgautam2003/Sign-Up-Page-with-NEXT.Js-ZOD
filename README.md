# 🚀 Sign-Up Page – Next.js + Zod + shadcn/ui

A modern, production-ready **Sign-Up Page** built using **Next.js (App Router)**, **Zod** for schema validation, and **shadcn/ui** for elegant UI components. This project showcases a robust sign-up form with real-world constraints using **regex** and field-level validations.

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Zod** – Form schema validation
- **React Hook Form** – Form state management
- **@hookform/resolvers/zod** – Zod integration with React Hook Form
- **shadcn/ui** – Modern, customizable UI components
- **Tailwind CSS** – Utility-first styling

---

## ✅ Features

- 📬 **Email Validation** with regex for real-world domains
- 🔐 **Strong Password Enforcement** (min length, uppercase, symbols, etc.)
- 👤 **Username Constraints**
- 💻 Fully responsive layout using Tailwind
- 🎨 Consistent UI with shadcn's component library
- 💾 Easily extensible for backend integration


## 🧪 Validation Rules

Implemented using **Zod + regex** patterns:

- **Email**: Must be a valid, real-world email format  
- **Password**: Minimum 8 characters, at least 1 uppercase, 1 symbol, 1 digit  
- **Username**: Alphanumeric only, 3-20 characters  



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
