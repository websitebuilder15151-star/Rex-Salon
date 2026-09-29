#!/bin/bash
# Push Rex-Salon to the new GitHub account.
# Run in Terminal.app:
#   bash "/Users/chandu/Documents/ALL/Fun_ Websites/rex-salon/scripts/push-to-github.sh"

set -euo pipefail
cd "/Users/chandu/Documents/ALL/Fun_ Websites/rex-salon"

REPO="https://github.com/websitebuilder15151-star/Rex-Salon.git"
GH_BIN="/tmp/gh/gh_2.67.0_macOS_arm64/bin/gh"

echo "=== 1) Login to NEW GitHub account (websitebuilder15151-star) ==="
if [[ -x "$GH_BIN" ]]; then
  export PATH="$(dirname "$GH_BIN"):$PATH"
fi

if ! command -v gh >/dev/null 2>&1; then
  echo "gh not found. Install with: brew install gh"
  echo "Or push with a Personal Access Token (see below)."
else
  gh auth status 2>/dev/null || gh auth login --hostname github.com --git-protocol https --web
fi

echo ""
echo "=== 2) Point remote & push ==="
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO"

git push -u origin main

echo ""
echo "Done: $REPO"
