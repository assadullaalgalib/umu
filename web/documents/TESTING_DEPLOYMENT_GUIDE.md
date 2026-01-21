# 🧪 Testing & Deployment Guide

## Quick Start Commands

```bash
# Development
npm run dev              # Start Vite dev server (port 5174)
npm run server          # Start static server (port 8080)
npm run dev:full        # Run both simultaneously

# Production
npm run build           # Create optimized build
npm run preview         # Preview production build locally

# Quality
npm run lint            # Check code quality
```

---

## 🎬 Testing Workflows

### 1. Public Website Testing

**URL:** `http://localhost:5174`

#### Homepage
- [ ] Hero section loads
- [ ] Latest event displays dynamically
- [ ] News carousel shows articles
- [ ] Gallery carousel displays images
- [ ] All links work correctly

#### Events Page
- [ ] Navigate to `/events`
- [ ] All enabled events display
- [ ] Filters work (upcoming, ongoing, past)
- [ ] Event details modal opens
- [ ] Images load correctly

#### News Page
- [ ] Navigate to `/news`
- [ ] All articles display with metadata
- [ ] Author and date shown correctly
- [ ] Click article shows details
- [ ] Pagination works (if implemented)

#### Gallery Page
- [ ] Navigate to `/gallery`
- [ ] All gallery items display
- [ ] Hover effects work
- [ ] Images load with fallback
- [ ] Responsive layout on mobile

### 2. Admin Dashboard Testing

**URL:** `http://localhost:5174/login`

#### Login
```
Email: any@example.com
Password: anything
(Demo mode accepts all credentials)
```

#### Dashboard Overview Tab
- [ ] Statistics display correctly
- [ ] Quick action buttons visible
- [ ] Responsive on mobile
- [ ] Logout button works

#### Events Tab
- [ ] Form displays all fields
- [ ] Can add new event
- [ ] Event appears in list
- [ ] Can delete event
- [ ] Data persists on refresh

#### Gallery Tab
- [ ] Upload form displays
- [ ] Can add new image
- [ ] Image appears in list
- [ ] Can delete image
- [ ] Metadata updates correctly

#### News Tab
- [ ] Form displays properly
- [ ] Can create new article
- [ ] Article appears in list
- [ ] Can delete article
- [ ] Changes reflect on public site

### 3. Data Persistence Testing

#### localStorage Verification
1. Open DevTools (F12)
2. Go to "Application" tab
3. Click "Local Storage"
4. Select your domain
5. Verify keys:
   - `umu_events`
   - `umu_news`
   - `umu_gallery`
   - `umu_config`

#### Testing Offline Mode
1. Open DevTools
2. Go to "Network" tab
3. Check "Offline" checkbox
4. Refresh page
5. Data should still load from localStorage

---

## 🌐 Environment Setup

### Development Environment

```bash
# .env.local (create in /web folder)
VITE_API_BASE_URL=http://localhost:5174
VITE_APP_NAME=ATR Innovations
```

### Production Environment

```bash
# .env.production (create in /web folder)
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_NAME=ATR Innovations
```

---

## 📦 Build & Deployment

### 1. Local Build Testing

```bash
# Build production version
npm run build

# Start preview server
npm run preview

# Visit http://localhost:4173
```

### 2. Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] No console errors
- [ ] All assets load correctly
- [ ] Images display properly
- [ ] Forms submit successfully
- [ ] No broken links
- [ ] Mobile responsive
- [ ] Performance acceptable

### 3. Vercel Deployment (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

**Vercel Configuration (`vercel.json`):**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "env": {
    "VITE_API_BASE_URL": "https://api.yourdomain.com"
  }
}
```

### 4. Netlify Deployment

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `dist`
- Functions Directory: `netlify/functions`

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[env]
VITE_API_BASE_URL = "https://api.yourdomain.com"
```

### 5. Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build & Run:**
```bash
docker build -t umu-app .
docker run -p 3000:3000 umu-app
```

---

## 🔍 Performance Testing

### Bundle Size Check

```bash
npm run build

# Check dist folder size
du -sh dist/

# Expected: ~320 KB JS + 28 KB CSS
```

### Lighthouse Testing

1. Open DevTools
2. Go to "Lighthouse" tab
3. Run audit
4. Check scores:
   - Performance: >80
   - Accessibility: >90
   - Best Practices: >90
   - SEO: >90

---

## 🚨 Debugging

### Enable Debug Logging

Add to `dataService.js`:
```javascript
const DEBUG = true;

function log(...args) {
  if (DEBUG) console.log('[dataService]', ...args);
}
```

### Check Network Requests

```bash
# DevTools > Network tab
# Monitor all fetch requests
# Check response status & payloads
```

### Browser Console Errors

```javascript
// React errors appear in console
// Check for missing imports
// Verify data structure
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| 404 for JSON files | Verify `/public/data/` folder exists |
| localStorage full | Clear browser data |
| CORS errors | Check API_BASE_URL configuration |
| Images not loading | Check image paths in data |
| Blank page | Check browser console for JS errors |

---

## 📊 Production Checklist

Before deploying to production:

- [ ] All tests pass
- [ ] No console errors
- [ ] Environment variables set
- [ ] API endpoints configured
- [ ] Database migrated
- [ ] Backups created
- [ ] SSL certificate installed
- [ ] CDN configured
- [ ] Analytics installed
- [ ] Error tracking setup
- [ ] Monitoring enabled
- [ ] Documentation updated

---

## 🔐 Security Considerations

### For Production:

1. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.local` for local development
   - Set production vars in hosting platform

2. **Authentication**
   - Replace demo auth with real auth provider
   - Use JWT or OAuth2
   - Implement refresh tokens
   - Add rate limiting

3. **API Security**
   - Add CORS headers
   - Implement request signing
   - Use HTTPS only
   - Add input validation
   - Implement CSRF protection

4. **Data Protection**
   - Encrypt sensitive data
   - Use secure cookies
   - Implement session management
   - Add audit logging

---

## 📈 Monitoring & Analytics

### Setup Google Analytics

```javascript
// In index.html head
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Setup Error Tracking (Sentry)

```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

---

## 🔄 Continuous Integration/Deployment

### GitHub Actions Example

**.github/workflows/deploy.yml:**
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '20'
      
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      
      - name: Deploy to Vercel
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
        run: vercel --prod --token $VERCEL_TOKEN
```

---

## 📚 References

- [Vite Docs](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Netlify Deployment](https://netlify.com/docs)

---

## 🎉 Next Steps

1. Test all features locally
2. Gather feedback from stakeholders
3. Set up production environment
4. Deploy to staging
5. Run full QA
6. Deploy to production
7. Monitor for issues
8. Gather user feedback
9. Plan improvements

---

**You're all set! Happy deploying! 🚀**
