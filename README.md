# 💕 BuddyBuddy

> 韓国人の先生と楽しく学ぼう — 한국인 선생님과 즐겁게 배워요

Korean language lesson booking platform targeting Japanese women. Built with Vite + React + React Router.

---

## Quick Start

```bash
npm install
npm run dev
```

## Deploy

### GitHub Push

```bash
# Option A: Personal Access Token
git remote set-url origin https://<YOUR_TOKEN>@github.com/coby5502/BuddyBuddy.git
git push origin main

# Option B: SSH
git remote set-url origin git@github.com:coby5502/BuddyBuddy.git
git push origin main
```

### Vercel (Recommended)

1. Push to GitHub first
2. Go to https://vercel.com/new
3. Import `coby5502/BuddyBuddy`
4. Framework: **Vite** (auto-detected)
5. Deploy → Done!

Or via CLI:
```bash
npx vercel --prod
```

---

## Tech Stack

- **Vite** + **React 18**
- **React Router v6** (BrowserRouter)
- **Tailwind CSS** with custom brand tokens
- **Context API** for lang/tutor state

## Screens

| Route | Screen |
|---|---|
| `/` | Home / Tutor List |
| `/tutor/:id` | Tutor Detail |
| `/booking` | Booking |
| `/confirm` | Confirm |
| `/complete` | Complete |
| `/signup` | Sign Up |
| `/tutor-register` | Tutor Register |
