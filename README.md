# Morning Whisper Support

A simple React application for Morning Whisper support pages.

## Features

- **Contact Support** - Contact form for user inquiries
- **Privacy Policy** - Privacy policy page
- **Terms of Use** - Terms of service page

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Pages

- `/` or `/contact` - Contact Support page
- `/privacy` - Privacy Policy page
- `/terms` - Terms of Use page

## Deployment

This app is configured for GitHub Pages deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy

1. **Deploy Frontend to GitHub Pages:**
   - Push to `main` branch
   - GitHub Actions will automatically deploy
   - Site will be at: `https://yourusername.github.io/morning_whisper_support/`

2. **Deploy Backend Separately:**
   - Deploy `server.js` to Railway, Render, or Fly.io
   - Set `RESEND_API_KEY` environment variable
   - Add backend URL to GitHub Secrets as `VITE_API_URL`

## Technologies

- React 18
- React Router DOM
- Vite
- Resend (for email sending)
- Express (backend API)
- Modern CSS

## Email Setup

This app uses Resend to send contact form emails. See [RESEND_SETUP.md](./RESEND_SETUP.md) for setup instructions.

### Quick Start

1. Create a `.env` file with your Resend API key:
   ```
   RESEND_API_KEY=re_your_api_key_here
   PORT=3001
   ```

2. Start the development servers:
   ```bash
   # Option 1: Run both together
   npm run dev:all
   
   # Option 2: Run separately
   npm run dev        # Frontend (Terminal 1)
   npm run dev:server # Backend (Terminal 2)
   ```

