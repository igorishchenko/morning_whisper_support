# Deployment Guide for GitHub Pages

This guide explains how to deploy the Morning Whisper Support site to GitHub Pages.

## Architecture

Since GitHub Pages only serves static files, you need to deploy two parts separately:

1. **Frontend** → GitHub Pages (this guide)
2. **Backend API** → Separate hosting service (Railway, Render, etc.)

## Part 1: Deploy Frontend to GitHub Pages

### Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - Save

2. **Set up GitHub Secrets (optional):**
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add a secret named `VITE_API_URL` with your backend API URL
   - Example: `https://your-backend.railway.app/api`

3. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy
   - Your site will be available at: `https://yourusername.github.io/morning_whisper_support/`

### Manual Deployment

1. **Build the frontend:**
   ```bash
   GITHUB_PAGES=true npm run build
   ```

2. **Deploy to GitHub Pages:**
   - Go to repository **Settings** → **Pages**
   - Select **Deploy from a branch**
   - Choose `gh-pages` branch and `/` folder
   - Or use the `dist` folder from your build

3. **Update base path in vite.config.js:**
   - If your repo name is different, update the `base` variable in `vite.config.js`

## Part 2: Deploy Backend API

You need to deploy `server.js` to a hosting service that supports Node.js. Here are recommended options:

### Option 1: Railway (Easiest)

1. **Sign up at [Railway](https://railway.app/)**
2. **Create a new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
3. **Configure the service:**
   - Railway will auto-detect `server.js`
   - Add environment variable: `RESEND_API_KEY=re_your_key_here`
   - Railway will provide a URL like: `https://your-app.railway.app`
4. **Update your frontend:**
   - Set `VITE_API_URL=https://your-app.railway.app/api` in GitHub Secrets

### Option 2: Render

1. **Sign up at [Render](https://render.com/)**
2. **Create a new Web Service:**
   - Connect your GitHub repository
   - Build command: `npm install`
   - Start command: `node server.js`
   - Add environment variable: `RESEND_API_KEY=re_your_key_here`
3. **Get your URL:**
   - Render provides: `https://your-app.onrender.com`
   - Update `VITE_API_URL` in GitHub Secrets

### Option 3: Fly.io

1. **Install Fly CLI:**
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. **Create fly.toml:**
   ```toml
   app = "your-app-name"
   primary_region = "iad"
   
   [build]
   
   [http_service]
     internal_port = 3001
     force_https = true
     auto_stop_machines = true
     auto_start_machines = true
     min_machines_running = 0
   ```

3. **Deploy:**
   ```bash
   fly launch
   fly secrets set RESEND_API_KEY=re_your_key_here
   ```

## Configuration

### Update Base Path

If your GitHub Pages URL is different, update `vite.config.js`:

```javascript
const base = process.env.GITHUB_PAGES ? '/your-repo-name/' : '/'
```

### Environment Variables

**Frontend (GitHub Pages):**
- `VITE_API_URL` - Your backend API URL (set in GitHub Secrets)

**Backend (Railway/Render/etc.):**
- `RESEND_API_KEY` - Your Resend API key
- `PORT` - Port number (usually auto-set by hosting service)

## Testing Deployment

1. **Test the frontend:**
   - Visit your GitHub Pages URL
   - Check that all pages load correctly

2. **Test the contact form:**
   - Fill out the contact form
   - Submit it
   - Check `ischenko.vadyus@gmail.com` for the email

## Troubleshooting

### 404 Errors on Routes

If you get 404 errors when navigating to routes:
- Make sure `base` path in `vite.config.js` matches your repo name
- GitHub Pages needs a `404.html` file that redirects to `index.html`

### CORS Errors

- Make sure your backend CORS is configured to allow your GitHub Pages domain
- Update `server.js` if needed:
  ```javascript
  app.use(cors({
    origin: ['https://yourusername.github.io', 'http://localhost:5173']
  }))
  ```

### API Connection Errors

- Verify `VITE_API_URL` is set correctly
- Check that your backend is running and accessible
- Test the backend URL directly: `https://your-backend.com/api/health`

## Custom Domain (Optional)

1. **Add CNAME file:**
   - Create `public/CNAME` with your domain: `support.yourdomain.com`
2. **Configure DNS:**
   - Add CNAME record pointing to `yourusername.github.io`
3. **Update GitHub Pages settings:**
   - Go to Settings → Pages → Custom domain
   - Enter your domain

