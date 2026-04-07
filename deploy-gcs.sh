#!/usr/bin/env bash
# Deploy ci_snow_1 build to Google Cloud Storage
# Usage: ./deploy-gcs.sh [GCS_BUCKET]
# Example: ./deploy-gcs.sh gs://www.capitalsnow.ca



set -e

export PATH=$HOME/google-cloud-sdk/bin:$PATH

BUCKET_NAME=${1:-"snow_web"}
PROJECT_ID=${2:-"ci-project-489202"}
WEB_DIR="/home/tuancnh/code/ci_snow_1"

echo ""
echo "=========================================="
echo "  CI Lawn — GCS Static Site Deploy"
echo "=========================================="
echo ""

# ── Step 1: Build ──────────────────────────────────────────
echo "→ Building production bundle..."
cd "$WEB_DIR"
npm run build
echo "  ✓ Build complete → dist/"

# ── Step 2: Check auth ─────────────────────────────────────
echo ""
echo "→ Checking authentication..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" 2>/dev/null | grep -q "@"; then
  echo "  Not logged in. Opening browser..."
  gcloud auth login --no-launch-browser
fi
echo "  ✓ Authenticated as: $(gcloud auth list --filter=status:ACTIVE --format='value(account)' 2>/dev/null | head -1)"

# ── Step 3: Set project ────────────────────────────────────
echo ""
gcloud config set project "$PROJECT_ID" --quiet
echo "  ✓ Project set: $PROJECT_ID"

# ── Step 4: Enable required APIs ──────────────────────────
echo ""
echo "→ Enabling Cloud Storage API..."
gcloud services enable storage.googleapis.com --quiet
echo "  ✓ Storage API enabled"

# ── Step 5: Create bucket if not exists ───────────────────
echo ""
echo "→ Setting up bucket: gs://$BUCKET_NAME"
if gsutil ls "gs://$BUCKET_NAME" &>/dev/null; then
  echo "  ✓ Bucket already exists"
else
  gsutil mb -p "$PROJECT_ID" -l US "gs://$BUCKET_NAME"
  echo "  ✓ Bucket created"
fi

# ── Step 6: Configure for static website hosting ──────────
echo ""
echo "→ Configuring website settings..."
gsutil web set -m index.html -e index.html "gs://$BUCKET_NAME"
echo "  ✓ Website config set (main: index.html, 404: index.html)"

# ── Step 7: Make bucket public ─────────────────────────────
echo ""
echo "→ Making bucket publicly accessible..."
gsutil iam ch allUsers:objectViewer "gs://$BUCKET_NAME"
echo "  ✓ Public access enabled"

# ── Step 8: Upload files ───────────────────────────────────
echo ""
echo "→ Uploading files from dist/..."

# 8a. Hashed JS/CSS assets — 1-year immutable cache (Vite hashes filenames)
gsutil -m -h "Cache-Control:public, max-age=31536000, immutable" \
  cp -r dist/assets "gs://$BUCKET_NAME/"
echo "  ✓ /assets (1-year cache)"

# 8b. index.html — no-cache (always fresh for SPA routing)
gsutil -h "Cache-Control:no-cache, no-store, must-revalidate" \
  cp dist/index.html "gs://$BUCKET_NAME/index.html"
echo "  ✓ index.html (no-cache)"

# 8c. Images — 1-day cache (local images: logo, background, etc.)
if [ -d dist/images ]; then
  gsutil -m -h "Cache-Control:public, max-age=86400" \
    cp -r dist/images "gs://$BUCKET_NAME/"
  echo "  ✓ /images (1-day cache)"
fi

# 8d. Static assets: favicon, icons — 1-day cache
for file in dist/favicon.svg dist/icons.svg; do
  if [ -f "$file" ]; then
    gsutil -h "Cache-Control:public, max-age=86400" \
      cp "$file" "gs://$BUCKET_NAME/"
  fi
done
echo "  ✓ favicon / icons (1-day cache)"

# ── Step 9: Print URLs ─────────────────────────────────────
echo ""
echo "=========================================="
echo "  ✅ DEPLOYMENT COMPLETE!"
echo "=========================================="
echo ""
echo "  Public URL:"
echo "  https://storage.googleapis.com/$BUCKET_NAME/index.html"
echo ""
echo "  GCS Website URL (if CNAME configured):"
echo "  http://$BUCKET_NAME.storage.googleapis.com"
echo ""
echo "  To update: just run this script again"
echo "=========================================="
echo ""
