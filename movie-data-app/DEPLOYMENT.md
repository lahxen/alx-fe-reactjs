# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Netlify (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository for auto-deployment

3. **Set Environment Variables:**
   - In Netlify dashboard: Site Settings → Environment Variables
   - Add: `VITE_OMDB_API_KEY` = `e952fe06`

### Option 2: Vercel

1. **Deploy via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Or connect GitHub:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set `VITE_OMDB_API_KEY` in environment variables

### Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     },
     "homepage": "https://lahxen.github.io/alx-fe-reactjs"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

## Environment Variables

Make sure to set these in your deployment platform:

- `VITE_OMDB_API_KEY` = `e952fe06` (or your own API key)

## Build Commands

- **Install:** `npm install`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

Your app will be available at your chosen deployment URL! 🎬