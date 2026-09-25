#!/bin/bash
# Run this in Terminal.app (outside Cursor) to create + push the public repo.
set -euo pipefail
cd "/Users/chandu/Documents/ALL/Fun_ Websites/rex-salon"

CREDS=$(printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain get)
GH_USER=$(printf '%s\n' "$CREDS" | sed -n 's/^username=//p')
GH_TOKEN=$(printf '%s\n' "$CREDS" | sed -n 's/^password=//p')

if [[ -z "${GH_USER}" || -z "${GH_TOKEN}" ]]; then
  echo "No GitHub credentials in Keychain. Run: gh auth login"
  exit 1
fi

echo "GitHub user: ${GH_USER}"

STATUS=$(curl -sS -o /tmp/regs-create.json -w "%{http_code}" -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GH_TOKEN}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/user/repos \
  -d '{"name":"regs-website","description":"Marketing website with WhatsApp booking","private":false,"auto_init":false}')

echo "Create repo HTTP: ${STATUS}"
if [[ "${STATUS}" != "201" && "${STATUS}" != "422" ]]; then
  cat /tmp/regs-create.json
  exit 1
fi

git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/${GH_USER}/regs-website.git"

git push -u "https://${GH_USER}:${GH_TOKEN}@github.com/${GH_USER}/regs-website.git" HEAD:main

echo ""
echo "GitHub: https://github.com/${GH_USER}/regs-website"
echo ""
echo "Next — deploy on Vercel:"
echo "  1. Open https://vercel.com/new"
echo "  2. Import ${GH_USER}/regs-website"
echo "  3. Framework: Vite, Build: npm run build, Output: dist"
echo "  4. Deploy"
