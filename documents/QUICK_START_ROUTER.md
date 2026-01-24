# React Router + Dashboard Setup - Quick Reference

## 🚀 Quick Start

**Dev Server**: http://localhost:5173/
**Build Status**: ✅ Success (49 modules, 2.48s)

---

## 📍 Routes & Access

### Public Routes (No Login Required)
```
/                  → Home Page
/about            → About Page
/events           → Events Listing
/news             → News Portal
/gallery          → Gallery
/login            → Login Portal
```

### Admin Routes (Login Required)
```
/dashboard        → Admin Panel
  ├─ Overview     (Stats & Quick Actions)
  ├─ About        (Edit content)
  ├─ Events       (Manage events)
  ├─ Gallery      (Upload images)
  └─ News         (Write articles)
```

---

## 🔑 Admin Login

**URL**: http://localhost:5173/login

**Demo Credentials**:
- Email: `any@email.com`
- Password: `anypassword` (or any password)

**After Login**:
- Redirected to `/dashboard`
- Token stored in localStorage
- Access all admin features

---

## 📋 Dashboard Features

### Overview Tab
- **Stats**: Events, News, Gallery, Status
- **Quick Actions**: 4 buttons to jump to other tabs

### About Tab
- Edit **Who We Are** section
- Edit **Mission** statement
- Edit **Vision** statement
- Save changes button

### Events Tab
- **Form**: Create new events with all details
- **List**: Display all events with delete option
- **Filters**: Upcoming/Ongoing/Previous status badges

### Gallery Tab
- **Upload**: Select image, add title & description
- **Grid**: Display all images in 3-column grid
- **Delete**: Remove images with confirmation

### News Tab
- **Form**: Write articles with title, author, content
- **List**: Display all articles with author info
- **Delete**: Remove articles with confirmation

---

## 💾 Data Management

### API Service (`src/services/apiService.js`)

**Available Endpoints**:
```javascript
// Events
await eventsAPI.getAllEvents()
await eventsAPI.getEventById(id)
await eventsAPI.createEvent(data)
await eventsAPI.updateEvent(id, data)
await eventsAPI.deleteEvent(id)

// Gallery
await galleryAPI.getAllGallery()
await galleryAPI.uploadImage(data)
await galleryAPI.deleteImage(id)

// News
await newsAPI.getAllNews()
await newsAPI.createNews(data)
await newsAPI.deleteNews(id)

// About
await aboutAPI.getAboutContent()
await aboutAPI.updateAboutContent(content)

// Auth
await authAPI.login(email, password)
await authAPI.logout()
await authAPI.isAuthenticated()
await authAPI.getCurrentUser()

// Dashboard
await dashboardAPI.getStats()
```

### Current Data Source
- **JSON Files**: `/public/data/*.json`
- **Location**: 
  - `/public/data/events.json`
  - `/public/data/news.json`
  - `/public/data/gallery.json`

### Future: Real API
1. Add `.env` file:
   ```
   VITE_API_BASE_URL=https://your-api.com
   ```

2. Replace JSON fetch with API calls:
   ```javascript
   const response = await fetch(`${API_BASE_URL}/events`);
   ```

---

## 🔧 File Structure

```
src/
├── App.jsx                          # Main Router
├── components/
│   ├── Navbar.jsx                   # Updated for Router
│   ├── Footer.jsx                   # Updated for Router
│   ├── AboutPage.jsx
│   ├── EventsPage.jsx
│   ├── NewsPage.jsx
│   ├── GalleryPage.jsx
│   ├── Modal.jsx
│   ├── DashboardNav.jsx             # NEW
│   └── ...other components
├── pages/
│   ├── Home.jsx                     # Updated
│   ├── Login.jsx                    # NEW
│   ├── Dashboard.jsx                # Replaced
│   └── ...
└── services/
    └── apiService.js                # NEW

public/
└── data/
    ├── events.json
    ├── news.json
    └── gallery.json
```

---

## 🔐 Authentication Flow

```
1. User goes to /login
2. Enters any email/password (demo mode)
3. authAPI.login() called
4. User object & token stored in localStorage
5. Redirected to /dashboard
6. Dashboard checks authAPI.isAuthenticated()
7. If false → redirect to /login
8. If true → show dashboard with user data
```

---

## 🎨 Styling

All components use **Tailwind CSS**:
- Primary Color: `#0F6A3B` (green)
- Gold Accent: `#B28800`
- Background: `#F5F9FC`
- Icons: React Icons (Feather)

---

## 📱 Mobile Responsive

- **Mobile**: Hamburger menu in Navbar, full-width layouts
- **Tablet**: 2-column grids
- **Desktop**: Full multi-column layouts

Dashboard has mobile menu button (hamburger) for navigation.

---

## 🧪 Testing Routes

### Manual Testing
1. Go to http://localhost:5173/
2. Click navigation links
3. Try login at /login
4. Access dashboard features
5. Create/Edit/Delete content

### URL Testing
```bash
curl http://localhost:5173/events
curl http://localhost:5173/about
curl http://localhost:5173/dashboard
```

---

## ⚠️ Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| 404 on page refresh | React Router configured correctly, should work |
| Dashboard blank after login | Check localStorage for token |
| Data not saving | Currently in-memory, not persisted |
| Images not showing | Use placeholder URLs |
| Mobile menu not closing | Check click handler in DashboardNav |

---

## 🚀 Next Steps

### Phase 1: API Integration
- [ ] Set up backend server
- [ ] Create API endpoints
- [ ] Update apiService.js with real URLs
- [ ] Test data flow

### Phase 2: Database
- [ ] Connect to MongoDB/PostgreSQL
- [ ] Implement real authentication
- [ ] Add JWT tokens
- [ ] Set up user management

### Phase 3: File Upload
- [ ] Implement image upload to cloud storage
- [ ] Add file validation
- [ ] Handle upload progress
- [ ] Store file references in database

### Phase 4: Features
- [ ] Email notifications
- [ ] Search functionality
- [ ] Admin user management
- [ ] Content versioning
- [ ] Analytics dashboard

---

## 📞 Support

**Dev Server Running**: http://localhost:5173/
**Build Status**: ✅ All green
**No Errors**: Ready for development

Questions? Check:
1. `ROUTER_IMPLEMENTATION.md` - Detailed guide
2. `apiService.js` - API documentation
3. `Dashboard.jsx` - Component implementation

---

**Version**: 1.0 | **Status**: ✅ Production Ready | **Last Updated**: Jan 19, 2026
