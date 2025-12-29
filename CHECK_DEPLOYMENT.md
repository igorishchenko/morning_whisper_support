# Check Your GitHub Pages Deployment

## Quick Checklist

1. **Is GitHub Pages enabled?**
   - Go to: `https://github.com/igorishchenko/morning_whisper_support/settings/pages`
   - Source should be: **GitHub Actions** (not "Deploy from a branch")
   - If not set, select "GitHub Actions" and save

2. **Has the workflow run?**
   - Go to: `https://github.com/igorishchenko/morning_whisper_support/actions`
   - Look for "Deploy to GitHub Pages" workflow
   - Check if it completed successfully (green checkmark)
   - If it failed, click on it to see the error

3. **What's the correct URL?**
   
   **If repo is `morning_whisper_support`:**
   - ✅ `https://igorishchenko.github.io/morning_whisper_support/`
   - ✅ `https://igorishchenko.github.io/morning_whisper_support/contact`
   - ❌ `https://igorishchenko.github.io/contact` (wrong - missing base path)

   **If you want it at root:**
   - You need a repo named `igorishchenko.github.io` (special repo name)
   - OR change base path to `/` in vite.config.js

4. **Wait for deployment**
   - After pushing, wait 1-2 minutes
   - GitHub Pages can take time to update
   - Try hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

## Common Issues

### "There isn't a GitHub Pages site here"
- GitHub Pages source not set to "GitHub Actions"
- Workflow hasn't run or failed
- Accessing wrong URL (missing base path)

### 404 on all pages
- Workflow might have failed
- Check Actions tab for errors
- Verify the build completed successfully

### Assets not loading
- Base path mismatch
- Check that GITHUB_PAGES='true' is set in workflow
- Verify dist/index.html has correct asset paths

