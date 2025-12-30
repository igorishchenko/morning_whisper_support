# Backend API Setup

The contact form needs a backend API to send emails. GitHub Pages (where your frontend is hosted) cannot run server-side code, so you need to deploy the backend separately.

## Quick Setup Options

### Option 1: Railway (Recommended - Easiest)

1. **Sign up at [Railway](https://railway.app/)** (free tier available)

2. **Create a new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `morning_whisper_support` repository

3. **Configure the service:**
   - Railway will auto-detect `server.js`
   - Add environment variables:
     - `RESEND_API_KEY` = `re_your_resend_api_key_here`
     - `RESEND_FROM_EMAIL` = `Morning Whisper Support <onboarding@resend.dev>` (optional, defaults to Resend test domain)
   - Railway will provide a URL like: `https://your-app.railway.app`
   - **Note:** For production, verify your domain in Resend and use your own domain email

4. **Update GitHub Secrets:**
   - Go to: `https://github.com/igorishchenko/morning_whisper_support/settings/secrets/actions`
   - Click "New repository secret"
   - Name: `VITE_API_URL`
   - Value: `https://your-app.railway.app/api`
   - Click "Add secret"

5. **Redeploy:**
   - Push a commit to trigger a new deployment
   - Or go to Actions → "Deploy to GitHub Pages" → "Run workflow"

### Option 2: Render

1. **Sign up at [Render](https://render.com/)**

2. **Create a new Web Service:**
   - Connect your GitHub repository
   - Build command: `npm install`
   - Start command: `node server.js`
   - Add environment variables:
     - `RESEND_API_KEY` = `re_your_key_here`
     - `RESEND_FROM_EMAIL` = `Morning Whisper Support <onboarding@resend.dev>` (optional)

3. **Get your URL:**
   - Render provides: `https://your-app.onrender.com`
   - Add to GitHub Secrets as `VITE_API_URL=https://your-app.onrender.com/api`

### Option 3: Fly.io

1. **Install Fly CLI:**
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Deploy:**
   ```bash
   cd /path/to/morning_whisper_support
   fly launch
   fly secrets set RESEND_API_KEY=re_your_key_here
   ```

3. **Get your URL and add to GitHub Secrets**

## Testing

After setting up the backend:

1. **Test the backend directly:**
   ```bash
   curl -X POST https://your-backend-url.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test message"}'
   ```

2. **Test the contact form:**
   - Go to your GitHub Pages site
   - Fill out the contact form
   - Submit it
   - Check `ischenko.vadyus@gmail.com` for the email

## Current Status

If you see "Backend API is not configured" error:
- The backend hasn't been deployed yet
- OR `VITE_API_URL` secret hasn't been set in GitHub
- Users can still contact you directly at: `ischenko.vadyus@gmail.com`

## Free Tier Limits

- **Railway:** $5 free credit/month
- **Render:** Free tier available (spins down after inactivity)
- **Fly.io:** Free tier available

All are sufficient for a contact form.

