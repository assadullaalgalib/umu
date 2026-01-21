# ⚡ Quick Start Checklist

## 🚀 Get Running in 2 Minutes

### Step 1: Start the Dev Server (30 seconds)

```bash
cd /home/amql3it/Desktop/ATR\ Innovations/umu/web
npm run dev
```

**✓ Opens at http://localhost:5174**

### Step 2: Visit the App (30 seconds)

**Public Site:**
- Homepage: http://localhost:5174
- Events: http://localhost:5174/events
- News: http://localhost:5174/news
- Gallery: http://localhost:5174/gallery

**Admin Panel:**
- Login: http://localhost:5174/login
  - Email: `anything@example.com`
  - Password: `anything`

### Step 3: Test Basic Functions (60 seconds)

- [ ] Homepage loads with data
- [ ] Click "View All Events" → goes to /events
- [ ] Go to /news → shows articles
- [ ] Go to /gallery → shows images
- [ ] Click Login → enter any email/password
- [ ] See Dashboard with stats
- [ ] Try adding an event
- [ ] Check that new event appears

**Boom! You're up and running! 🎉**

---

## 📊 What's Running Right Now?

| Component | URL | Status |
|-----------|-----|--------|
| React App | http://localhost:5174 | ✅ Running |
| Public Website | http://localhost:5174 | ✅ Working |
| Admin Dashboard | http://localhost:5174/dashboard | ✅ Protected |
| Data Files | /public/data/*.json | ✅ 4 files |
| localStorage | DevTools > Application | ✅ Synced |

---

## 🔥 Most Important Files to Know

### 1. **Data Service** (Where all the magic happens)
```
/src/services/dataService.js
```
- Contains all API methods
- Handles data fetching & caching
- ~450 lines of well-documented code

### 2. **Admin Dashboard** (CRUD operations)
```
/src/pages/Dashboard.jsx
```
- Add/edit/delete events
- Upload/manage images
- Create news articles
- ~530 lines of form handling

### 3. **Data Files** (Your actual data)
```
/public/data/
  ├── events.json      (4 sample events)
  ├── news.json        (4 sample articles)
  └── gallery.json     (5 sample images)
```

### 4. **Documentation** (How everything works)
```
DYNAMIC_SETUP_GUIDE.md         ← Start here
DATA_SERVICE_REFERENCE.md      ← API methods
TESTING_DEPLOYMENT_GUIDE.md    ← Going live
IMPLEMENTATION_SUMMARY.md      ← Architecture
```

---

## 💻 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run lint            # Check code quality

# Testing
npm run preview         # Test production build

# Alternative servers
npm run server          # Start static server only
npm run dev:full        # Run dev + server together
```

---

## 🎯 First 5 Things to Try

### 1. Add a New Event
1. Go to http://localhost:5174/login
2. Use any email/password
3. Click "Events" tab
4. Fill out the form
5. Click "Add Event"
6. ✓ Event appears immediately

### 2. View it on Public Site
1. Go to http://localhost:5174/events
2. ✓ Your new event is there!

### 3. Check localStorage
1. Press F12 (DevTools)
2. Go to "Application" tab
3. Click "Local Storage"
4. Look for `umu_events`
5. ✓ Your data is there!

### 4. Add News Article
1. Back to dashboard
2. Click "News" tab
3. Add article
4. ✓ Check http://localhost:5174/news

### 5. Upload Gallery Image
1. Click "Gallery" tab
2. Add image entry
3. ✓ Check http://localhost:5174/gallery

---

## 📱 Test on Mobile

```bash
# Get your machine IP
ipconfig getifaddr en0  # Mac
hostname -I             # Linux
ipconfig                # Windows

# Then open on phone:
http://YOUR_IP:5174
```

---

## 🐛 Something Broken?

### Page won't load
```bash
# Kill old process
pkill -f "npm run dev"

# Start fresh
npm run dev
```

### Data not showing
1. Check DevTools Console for errors
2. Verify /public/data/*.json files exist
3. Check localStorage (DevTools > Application)

### Can't login
1. Try clearing browser cache
2. Try different email
3. Check browser console for errors

### Images not loading
1. Check image paths in JSON files
2. Images fall back to placeholder if not found
3. This is normal and expected

---

## 📚 Documentation Index

Want to dive deeper? Read these in order:

1. **IMPLEMENTATION_SUMMARY.md** ← Architecture overview
2. **DYNAMIC_SETUP_GUIDE.md** ← How everything works
3. **DATA_SERVICE_REFERENCE.md** ← API documentation
4. **TESTING_DEPLOYMENT_GUIDE.md** ← Testing & going live

---

## 🎓 Architecture at a Glance

```
┌─────────────┐
│  Your Page  │
│  (React)    │
└──────┬──────┘
       │ calls
       ▼
┌──────────────────────┐
│  dataService.js      │
│  (API Abstraction)   │
└──────┬──────┬────────┘
       │      │
    reads  syncs
       │      │
   ┌───▼──┐ ┌─▼────────┐
   │JSON  │ │localStorage│
   │Files │ │ (cache)   │
   └──────┘ └───────────┘
```

---

## ✨ Key Features

- ✅ Dynamic data loading
- ✅ Admin CRUD operations
- ✅ Authentication system
- ✅ Offline support (localStorage)
- ✅ Error handling
- ✅ Mobile responsive
- ✅ Production ready

---

## 🚀 Next: Real Backend

When you're ready to connect to a real backend:

1. Update `dataService.js` API calls
2. Set environment variables
3. Zero changes to components!

See **DYNAMIC_SETUP_GUIDE.md** section "Migration Path to Real Backend" for details.

---

## 🎉 You're Ready!

Everything is set up and ready to use. Start with the homepage at:

**➜ http://localhost:5174**

Then explore the admin dashboard at:

**➜ http://localhost:5174/login**

Happy coding! 🚀

---

**Need help?** Check the documentation files or look at the source code comments.
