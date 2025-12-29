# GitHub Pages Setup Checklist

## Current Configuration

Your site is configured to be at: `igorishchenko.github.io/morning_whisper_support/`

If you want it at the root (`igorishchenko.github.io/`), you need to change the base path.

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/igorishchenko/morning_whisper_support`
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
4. Save

## Step 2: Check Deployment Status

1. Go to **Actions** tab in your repository
2. Check if the "Deploy to GitHub Pages" workflow has run
3. If it shows errors, check the logs
4. If it hasn't run, push a commit to trigger it

## Step 3: Verify the Correct URL

**If your repo is named `morning_whisper_support`:**
- Site URL: `https://igorishchenko.github.io/morning_whisper_support/`
- Contact: `https://igorishchenko.github.io/morning_whisper_support/contact`

**If you want it at the root (`igorishchenko.github.io/`):**
- You need to either:
  - Rename the repo to match your username (e.g., `igorishchenko.github.io`)
  - OR change the base path to `/` in vite.config.js

## Step 4: Wait for Deployment

- GitHub Pages deployments can take 1-2 minutes
- Check the Actions tab to see when deployment completes
- The site may be cached, try hard refresh (Cmd+Shift+R)

## Troubleshooting

### "There isn't a GitHub Pages site here"
- GitHub Pages isn't enabled, OR
- Deployment hasn't completed yet, OR
- You're accessing the wrong URL

### 404 on routes
- Make sure you're using the correct base path URL
- Check that React Router basename is set correctly
- Verify the 404.html file is in the dist folder

