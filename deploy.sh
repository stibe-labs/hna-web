#!/bin/bash
# HNA Web - Deploy to VPS via GitHub
# Usage: ./deploy.sh

set -e

SERVER="root@187.127.147.191"
REMOTE_REPO="/var/www/hna-repo"
REMOTE_APP="$REMOTE_REPO/hna-website"
PORT=3030
PM2_APP_NAME="hna-website"

echo "📥 Pulling latest code from GitHub..."
ssh "$SERVER" "cd $REMOTE_REPO && git pull origin main"

echo "📦 Installing dependencies on server..."
ssh "$SERVER" "cd $REMOTE_APP && npm install"

echo "🔨 Building Next.js project on server..."
ssh "$SERVER" "cd $REMOTE_APP && npm run build"

echo "🔄 Restarting or Starting PM2 app..."
# We use || to start the app if it's not already running
ssh "$SERVER" "cd $REMOTE_APP && (PORT=$PORT pm2 restart $PM2_APP_NAME --update-env || PORT=$PORT pm2 start npm --name \"$PM2_APP_NAME\" -- start)"

echo "✅ Deployed! The app is running on Port $PORT."
