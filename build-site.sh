#!/usr/bin/env bash

set -euo pipefail
# ^ Ensures script stops immediately if any command fails

echo "🔍 Checking required environment variables..."

if [[ -z "${JEKYLL_ENV:-}" ]]; then
  echo "❌ Error: JEKYLL_ENV is not set."
  echo "   Please run the script like:"
  echo "     JEKYLL_ENV=<SOME_VALUE> ./build-site.sh"
  exit 1
fi

echo "🚀 Starting build..."

echo "📦 Building JavaScript"
node ./build.prod.js

echo "✅ JavaScript build completed."

echo "🧱 Building Jekyll site..."

JEKYLL_CMD=(bundle exec jekyll build)

# only add --baseurl if SITE_BASEURL exists and is not empty
if [[ -n "${SITE_BASEURL:-}" ]]; then
  echo "🔧 Using baseurl: $SITE_BASEURL"
  JEKYLL_CMD+=(--baseurl "$SITE_BASEURL")
else
  echo "⚙️ No SITE_BASEURL set, building normally."
fi

"${JEKYLL_CMD[@]}"

echo "✅ Jekyll site built successfully."
