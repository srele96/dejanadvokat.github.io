#!/usr/bin/env bash

set -euo pipefail
# ^ Ensures script stops immediately if any command fails

echo "🚀 Starting production build..."

echo "📦 Building JavaScript"
node ./build.prod.js

echo "✅ JavaScript build completed."

echo "🧱 Building Jekyll site..."

JEKYLL_ENV=production
JEKYLL_CMD=(bundle exec jekyll build)

# only add --baseurl if BASEURL exists and is not empty
if [[ -n "${BASEURL:-}" ]]; then
  echo "🔧 Using baseurl: $BASEURL"
  JEKYLL_CMD+=(--baseurl "$BASEURL")
else
  echo "⚙️ No baseurl set, building normally."
fi

JEKYLL_ENV=production "${JEKYLL_CMD[@]}"

echo "✅ Jekyll site built successfully."
