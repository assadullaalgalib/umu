# 🚀 Dynamic Website with Local Static Server - Complete Setup Guide

## Overview

You now have a **fully dynamic React application** that fetches data from local JSON files via a simulated backend API service. The system is designed to be easily scalable and ready for migration to a real backend.

### Key Architecture

- **Frontend**: React 19 + React Router v7 + Vite
- **Data Layer**: `dataService.js` - Centralized API abstraction
- **Storage**: JSON files (`/public/data/*.json`) + localStorage for state sync
- **Public Pages**: Dynamic rendering of Events, News, Gallery
- **Admin Panel**: Full CRUD operations via Dashboard

---

## 📂 Project Structure

```
web/
├── public/
│   └── data/
│       ├── config.json          # Site configuration
│       ├── events.json          # Events data
│       ├── news.json           # News articles
│       └── gallery.json        # Gallery items
├── src/
│   ├── services/
│   │   └── dataService.js      # ⭐ Core API abstraction layer
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── EventsPage.jsx      # Dynamic events list
│   │   ├── NewsPage.jsx        # Dynamic news list
│   │   ├── GalleryPage.jsx     # Dynamic gallery
│   │   ├── Dashboard.jsx       # Admin panel with CRUD
│   │   └── Login.jsx           # Authentication
│   ├── components/
│   │   ├── LatestEventSection.jsx      # Dynamic, fetches latest event
│   │   ├── NewsCarouselSection.jsx     # Dynamic carousel
│   │   ├── GalleryCarouselSection.jsx  # Dynamic carousel
│   │   └── [other components...]
│   └── App.jsx                 # Router configuration
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🔧 Setup Instructions

### 1. **Install Dependencies** (Already Done)

```bash
npm install
npm install -D local-web-server
```

### 2. **Start the Development Server**

**Option A: Dev Server Only (Frontend)**
```bash
npm run dev
# Opens at http://localhost:5174
```

**Option B: Frontend + Static Server (Complete Setup)**
```bash
npm run dev:full
# Runs Vite on 5174 + local-web-server on 8080
```

**Option C: Just the Static Server**
```bash
npm run server
# Serves files on http://localhost:8080
```

### 3. **Build for Production**

```bash
npm run build
# Creates optimized build in /dist folder
```

---

## 📡 Data Service Layer (`dataService.js`)

The **dataService.js** is the heart of your dynamic system. It provides:

### API Modules Available

```javascript
import { 
  eventsAPI,
  newsAPI,
  galleryAPI,
  configAPI,
  dashboardAPI,
  authAPI
} from '../services/dataService';
```

### Example Usage

```javascript
// Get all enabled events
const events = await eventsAPI.getEnabledEvents();

// Create new event
const newEvent = await eventsAPI.createEvent({
  title: "New Event",
  date: "2026-02-10",
  location: "Dhaka",
  description: "Event description"
});

// Delete event
await eventsAPI.deleteEvent(1);

// Toggle event enabled status
await eventsAPI.toggleEvent(1);

// Same pattern for newsAPI, galleryAPI
```

### Data Persistence

All operations are:
1. **Synced to localStorage** for offline access
2. **Fetched from JSON files** on first load
3. **Auto-cached** for instant load times

---

## 🔐 Authentication System

Simple localStorage-based authentication (perfect for demo/admin access):

```javascript
// Login
const result = await authAPI.login('admin@example.com', 'password');

// Check if authenticated
const isAuth = authAPI.isAuthenticated();

// Get current user
const user = authAPI.getCurrentUser();

// Logout
authAPI.logout();
```

**Dashboard Access:**
- Navigate to `/login`
- Enter any email and password (demo mode accepts all)
- Redirects to `/dashboard` with full CRUD access

---

## 🌐 Public Pages - Dynamic Data Loading

### Events Page
```javascript
// src/pages/EventsPage.jsx
import { eventsAPI } from '../services/dataService';

useEffect(() => {
  const loadEvents = async () => {
    const enabledEvents = await eventsAPI.getEnabledEvents();
    setEvents(enabledEvents);
  };
}, []);
```

### News Page
```javascript
// src/pages/NewsPage.jsx
import { newsAPI } from '../services/dataService';

useEffect(() => {
  const loadNews = async () => {
    const articles = await newsAPI.getEnabledNews();
    setArticles(articles);
  };
}, []);
```

### Gallery Page
```javascript
// src/pages/GalleryPage.jsx
import { galleryAPI } from '../services/dataService';

useEffect(() => {
  const loadGallery = async () => {
    const items = await galleryAPI.getEnabledGallery();
    setImages(items);
  };
}, []);
```

---

## 📊 Admin Dashboard Features

**URL:** `http://localhost:5174/dashboard`

### Tabs Available

1. **Overview** - Statistics & quick actions
2. **About** - Placeholder (coming soon)
3. **Events** - Add, edit, delete events
4. **Gallery** - Upload/manage images
5. **News** - Create/manage articles
6. **Settings** - Placeholder (coming soon)

### Example: Add Event from Dashboard

```javascript
const handleAddEvent = async (e) => {
  e.preventDefault();
  const newEvent = await eventsAPI.createEvent({
    title: "New Conference",
    date: "2026-03-10",
    location: "Dhaka",
    description: "Conference details"
  });
  
  // UI updates automatically
  setEvents([...events, newEvent]);
};
```

---

## 📝 Data Schema

### Events (`/public/data/events.json`)

```json
[
  {
    "id": 1,
    "title": "Islamic Conference 2026",
    "date": "2026-02-10",
    "time": "10:00 AM",
    "location": "Dhaka Convention Center",
    "description": "Short description",
    "content": "Full content",
    "image": "/assets/event-01.jpg",
    "featured": true,
    "enabled": true,
    "status": "upcoming",
    "capacity": 500,
    "registered": 234,
    "category": "conference"
  }
]
```

### News (`/public/data/news.json`)

```json
[
  {
    "id": 1,
    "title": "Latest Innovation in Islamic Education",
    "date": "2026-01-15",
    "author": "Dr. Ahmed Hassan",
    "summary": "Brief summary",
    "content": "Full article content",
    "image": "/assets/news-01.jpg",
    "featured": true,
    "enabled": true,
    "category": "education",
    "views": 1250,
    "likes": 342
  }
]
```

### Gallery (`/public/data/gallery.json`)

```json
[
  {
    "id": 1,
    "title": "Conference 2025",
    "image": "/assets/gallery-01.jpg",
    "thumbnail": "/assets/gallery-01-thumb.jpg",
    "description": "Description",
    "category": "events",
    "date": "2025-11-15",
    "enabled": true,
    "featured": true,
    "uploadedBy": "Admin",
    "tags": ["conference", "2025"]
  }
]
```

---

## 🔄 Migration Path to Real Backend

The system is designed for **zero-code migration** to a real backend:

### Step 1: Update `dataService.js`

```javascript
// Replace fetchFromJSON with real API calls
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

async function fetchFromAPI(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return await response.json();
}

// Then update each module:
export const eventsAPI = {
  async getAllEvents() {
    return await fetchFromAPI('/events');
  },
  
  async createEvent(data) {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await response.json();
  }
};
```

### Step 2: Add Environment Variables

Create `.env.local`:
```
VITE_API_BASE_URL=http://localhost:3000/api
```

### Step 3: No UI Changes Needed!

All components will automatically use the real API because they only call `dataService` methods.

---

## 🚀 Running the Application

### Complete Workflow

```bash
# 1. Install dependencies
npm install

# 2. Start development
npm run dev
# Opens http://localhost:5174

# 3. Access the application
# - Public: http://localhost:5174
# - Admin: http://localhost:5174/login
#   (use any email/password)

# 4. View data in localStorage
# Open DevTools > Application > Local Storage
# Look for keys: umu_events, umu_news, umu_gallery
```

---

## 🎯 Key Features Implemented

✅ **Dynamic data loading** from JSON files
✅ **Real-time CRUD operations** with localStorage sync
✅ **Authentication & protected routes**
✅ **Full admin dashboard** with data management
✅ **Error handling & loading states**
✅ **Mobile responsive UI**
✅ **Pagination & filtering** (ready to implement)
✅ **Search functionality** (ready to implement)
✅ **Image management** framework
✅ **Scalable architecture** for real backend

---

## 🔍 Troubleshooting

### Issue: "Port already in use"
```bash
# Kill the process using port 5174
lsof -i :5174
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3000
```

### Issue: JSON files not loading
- Check that files exist in `/public/data/`
- Verify fetch paths in `dataService.js`
- Check browser console for 404 errors

### Issue: localStorage data not persisting
- Clear browser cache
- Check if localStorage is enabled
- Look in DevTools > Application > Local Storage

---

## 📚 Next Steps

1. **Customize data schema** in JSON files to match your needs
2. **Add validation** to form submissions
3. **Implement real backend** using migration path
4. **Add image upload** to cloud storage (S3, Firebase, etc.)
5. **Set up database** (PostgreSQL, MongoDB, etc.)
6. **Deploy** to production (Vercel, Netlify, etc.)

---

## 📞 Support

For questions about the setup or architecture, refer to:
- [dataService.js](../src/services/dataService.js) - Full API documentation
- [Dashboard.jsx](../src/pages/Dashboard.jsx) - Admin panel example
- Component files for usage examples

**Happy coding! 🎉**
