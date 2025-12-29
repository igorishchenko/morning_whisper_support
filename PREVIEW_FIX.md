# Preview 404 Fix

If you're getting 404 errors when running `npm run preview`, try these steps:

## Quick Fix

1. **Rebuild the project:**
   ```bash
   npm run build
   ```

2. **Run preview:**
   ```bash
   npm run preview
   ```

3. **Access the site at:** `http://localhost:4173`

## If Still Getting 404s

The issue might be that the build and preview are using different base paths. 

**For local preview (base path `/`):**
```bash
npm run build
npm run preview
```

**For GitHub Pages preview (base path `/morning_whisper_support/`):**
```bash
npm run build:github
npm run preview:github
```

Then access at: `http://localhost:4173/morning_whisper_support/`

## Troubleshooting

- Make sure you've run `npm run build` before `npm run preview`
- Clear the `dist` folder and rebuild if needed: `rm -rf dist && npm run build`
- Check that assets exist in `dist/assets/` folder
- Verify the `dist/index.html` has correct asset paths (should start with `/assets/` for local preview)

