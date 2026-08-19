# Turn the Cup — Support Site

Support, Privacy Policy and Terms of Use pages for **Turn the Cup** (`com.entertainment.turnthecup`). The repository name still says `morning_whisper_support` — that was the app's old name and survives only in the repo path and the GitHub Pages base URL.

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

Run the development servers:

```bash
# Run both frontend and backend together
npm run dev:all

# Or run separately:
npm run dev        # Frontend (http://localhost:5173)
npm run dev:server # Backend (http://localhost:3001)
```

### Build

```bash
npm run build          # Local build
npm run build:github   # Build for GitHub Pages
npm run preview        # Preview local build
```

## Pages

- `/` or `/contact` - Contact Support page
- `/privacy` - Privacy Policy page
- `/terms` - Terms of Use page

## Setup

### Environment Variables

Create a `.env` file:

```env
RESEND_API_KEY=re_your_api_key_here
PORT=3001
```

### Resend API Key

1. Sign up at https://resend.com/
2. Get your API key from the dashboard
3. Add it to `.env` file

The backend uses `onboarding@resend.dev` as the "from" email (no DNS verification needed).

## Deployment

### Frontend (GitHub Pages)

1. Push to `main` branch
2. GitHub Actions automatically deploys
3. Site: `https://igorishchenko.github.io/morning_whisper_support/`

### Backend (Railway/Render/Fly.io)

1. Deploy `server.js` to a hosting service
2. Set `RESEND_API_KEY` environment variable
3. Add backend URL to GitHub Secrets as `VITE_API_URL`
4. Redeploy frontend

## Technologies

- React 18
- React Router DOM
- Vite
- Resend (email sending)
- Express (backend API)

