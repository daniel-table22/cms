#!/bin/bash

# CONFIGURATION
PROD_URL="https://majestic-rhythm-cd26cbae12.strapiapp.com/"

echo "🚀 Starting production deployment..."

# STEP: Push local config and data to production
echo "📤 Transferring local config and content to production..."
yarn strapi transfer --to=$PROD_URL

if [ $? -eq 0 ]; then
  echo "🎉 Successfully deployed to production!"
else
  echo "❌ Deployment failed."
  exit 1
fi