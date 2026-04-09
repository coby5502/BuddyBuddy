#!/bin/bash
# BuddyBuddy 배포 스크립트
# Repo root에서 실행: bash scripts/deploy.sh

set -e
echo "🚀 BuddyBuddy 배포를 시작합니다..."

# ── 1. GitHub 푸시 ───────────────────────────────
echo ""
echo "📦 GitHub에 푸시합니다..."
echo "GitHub Personal Access Token이 필요합니다."
echo "토큰 생성 방법: https://github.com/settings/tokens/new"
echo "  → Expiration: 90 days"
echo "  → Scopes: repo (체크)"
echo ""
read -p "GitHub 사용자명: " GH_USER
read -s -p "GitHub Personal Access Token: " GH_TOKEN
echo ""

git remote set-url origin "https://${GH_USER}:${GH_TOKEN}@github.com/coby5502/BuddyBuddy.git"
git push origin main --force
echo "✅ GitHub 푸시 완료!"
echo "→ https://github.com/coby5502/BuddyBuddy"

# ── 2. Vercel 배포 ───────────────────────────────
echo ""
echo "🌐 Vercel에 배포합니다..."
echo "Vercel 토큰이 필요합니다."
echo "토큰 생성 방법: https://vercel.com/account/tokens"
echo ""
read -s -p "Vercel Token: " VERCEL_TOKEN
echo ""

# Install vercel CLI locally
npm install --save-dev vercel 2>/dev/null || true

# Build first
npm run build

# Deploy to Vercel
npx vercel --token "$VERCEL_TOKEN" --yes --prod

echo ""
echo "🎉 배포 완료!"
echo "Vercel 대시보드: https://vercel.com/dashboard"
