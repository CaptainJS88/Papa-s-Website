# Deployment Guide

## 🚀 Deploy to Netlify (Easiest - Free)

Netlify is a great free option for Next.js projects. It offers:
- ✅ Free tier with generous limits
- ✅ Easy GitHub integration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Full Next.js support including API routes
- ✅ Simple setup process

### Steps to Deploy:

1. **Push your code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Netlify**:
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign up" (you can use GitHub, email, or Google)
   - Complete the signup process

3. **Import your project**:
   - Click "Add new site" → "Import an existing project"
   - Click "Deploy with GitHub"
   - Authorize Netlify to access your GitHub (if prompted)
   - Select your repository: `CaptainJS88/Papa-s-Website`
   - Netlify will auto-detect the settings (the `netlify.toml` file handles configuration)
   - Click "Deploy site"

4. **That's it!** Your site will be live in ~2-3 minutes

### Your Site URL:
You'll get a URL like: `your-project-name-123abc.netlify.app`

### Environment Variables (if needed later):
If you add any API keys or secrets, add them in:
- Netlify Dashboard → Your Site → Site configuration → Environment variables

---

## 🌐 Alternative Free Options

### Railway
- Visit [railway.app](https://railway.app)
- Connect GitHub repository
- Auto-detects Next.js
- Free tier available (with usage limits)

### Render
- Visit [render.com](https://render.com)
- Connect GitHub repository
- Select "Web Service"
- Build command: `npm install && npm run build`
- Start command: `npm start`
- Free tier available (may spin down after inactivity)

### Vercel (Alternative)
- Visit [vercel.com](https://vercel.com)
- Sign up with GitHub
- Import repository
- Auto-detects Next.js settings
- Note: Some users may experience GitHub connection issues

---

## 📝 Pre-Deployment Checklist

- [ ] Test your build locally: `npm run build`
- [ ] Ensure all environment variables are documented
- [ ] Update contact form API if needed (currently logs to console)
- [ ] Test all pages and functionality
- [ ] Check that images/assets load correctly

---

## 🔧 Troubleshooting

### Build Errors
- Run `npm run build` locally to catch errors early
- Check that all dependencies are in `package.json`

### API Routes Not Working
- Ensure you're using a platform that supports serverless functions (Vercel, Netlify, Railway, Render)
- Don't use static hosting like GitHub Pages for API routes

### Environment Variables
- Add any required environment variables in your hosting platform's dashboard
- Never commit secrets to GitHub

---

## 💡 Recommended: Netlify

For a showcase project, **Netlify is a great choice** because:
- Easy setup with GitHub integration
- Excellent Next.js support
- Free custom domain support
- Great performance and CDN
- Professional appearance
- Reliable and widely used

Your site will get a URL like: `your-project-name-123abc.netlify.app`
