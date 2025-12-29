# Resend Setup Instructions

The contact form uses Resend to send emails to `ischenko.vadyus@gmail.com`.

## Quick Setup Steps

1. **Get your Resend API Key**
   - Go to https://resend.com/
   - Sign up or log in to your account
   - Navigate to API Keys section
   - Create a new API key or use an existing one
   - Copy the API key

2. **Configure Environment Variables**
   - Create a `.env` file in the project root (if it doesn't exist)
   - Add your Resend API key:
     ```
     RESEND_API_KEY=re_your_api_key_here
     PORT=3001
     ```
   - For production, also set:
     ```
     VITE_API_URL=https://your-api-domain.com/api
     ```

3. **Update the "from" email address**
   - In `server.js`, update the `from` field:
     ```javascript
     from: 'Morning Whisper Support <onboarding@resend.dev>',
     ```
   - Replace with your verified domain email, e.g.:
     ```javascript
     from: 'Morning Whisper Support <support@yourdomain.com>',
     ```
   - Or use the Resend test domain: `onboarding@resend.dev` (for testing)

4. **Start the Development Servers**
   
   **Option 1: Run both servers separately (recommended for development)**
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend API
   npm run dev:server
   ```
   
   **Option 2: Run both together**
   ```bash
   npm run dev:all
   ```

5. **Verify Domain (for production)**
   - In Resend dashboard, go to Domains
   - Add and verify your domain
   - Update the `from` email in `server.js` to use your verified domain

## Development vs Production

### Development
- Frontend runs on: `http://localhost:5173`
- Backend API runs on: `http://localhost:3001`
- Vite proxy automatically forwards `/api/*` requests to the backend

### Production (GitHub Pages)

**Frontend:**
- Deploy to GitHub Pages using the included GitHub Actions workflow
- Set `VITE_API_URL` in GitHub Secrets (Settings → Secrets → Actions)
- Your site will be at: `https://yourusername.github.io/morning_whisper_support/`

**Backend:**
- Deploy `server.js` to a separate hosting service:
  - **Railway** (recommended - easiest setup)
  - **Render** (free tier available)
  - **Fly.io** (good for small apps)
  - **Heroku** (paid plans)
- Set `RESEND_API_KEY` environment variable on your hosting service
- Update `VITE_API_URL` in GitHub Secrets to point to your backend URL

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Testing

1. Start both servers
2. Fill out the contact form
3. Submit it
4. Check `ischenko.vadyus@gmail.com` for the email

## Troubleshooting

- **"Failed to send email"**: Check that your Resend API key is correct
- **CORS errors**: Make sure the backend server is running and CORS is enabled
- **Connection refused**: Ensure the backend server is running on port 3001
- **Invalid API key**: Verify your Resend API key in the `.env` file

## Free Tier

Resend free tier includes:
- 3,000 emails per month
- 100 emails per day
- All features needed for this contact form

