#!/usr/bin/env bash

set -euo pipefail
# ^ Ensures script stops immediately if any command fails

echo "🚀 Starting production build..."

echo "📦 Building JavaScript"
node ./build.prod.js

echo "✅ JavaScript build completed."

echo "🧱 Building Jekyll site..."
JEKYLL_ENV=production bundle exec jekyll build

echo "✅ Jekyll site built successfully."
