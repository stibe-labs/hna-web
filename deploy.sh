#!/bin/bash
# HNA Web - Deploy to Cloudflare Workers
# Usage: ./deploy.sh

set -e

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building for Cloudflare Workers..."
npx opennextjs-cloudflare build

echo "🚀 Deploying to Cloudflare Workers..."
npx wrangler deploy

echo "✅ Deployed to Cloudflare Workers!"
