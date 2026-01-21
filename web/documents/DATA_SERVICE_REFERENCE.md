# 📚 Data Service API Reference

## Overview

The `dataService.js` is the **centralized data management layer** for your application. It provides a clean, consistent API for all CRUD operations and automatically syncs with localStorage for offline support.

---

## 🎯 Quick Start

```javascript
import { eventsAPI, newsAPI, galleryAPI, authAPI } from '../services/dataService';

// Get enabled events
const events = await eventsAPI.getEnabledEvents();

// Create new item
const newEvent = await eventsAPI.createEvent({ title: 'Event', date: '2026-02-10' });

// Delete item
await eventsAPI.deleteEvent(1);

// Toggle enable/disable
await eventsAPI.toggleEvent(1);
```

---

## 📋 API Modules

### 1. Events API (`eventsAPI`)

#### Methods

| Method | Parameters | Returns | Notes |
|--------|-----------|---------|-------|
| `getAllEvents()` | none | `Promise<Event[]>` | All events (enabled & disabled) |
| `getEventById(id)` | `id: number` | `Promise<Event>` | Single event by ID |
| `getEnabledEvents()` | none | `Promise<Event[]>` | Only enabled events (public) |
| `createEvent(data)` | `data: Object` | `Promise<Event>` | Creates new event |
| `updateEvent(id, data)` | `id: number, data: Object` | `Promise<Event>` | Updates existing event |
| `deleteEvent(id)` | `id: number` | `Promise<{success: true}>` | Deletes event |
| `toggleEvent(id)` | `id: number` | `Promise<Event>` | Toggles enabled status |

#### Event Data Structure

```javascript
{
  id: number,
  title: string,
  date: string,           // "2026-02-10"
  time?: string,          // "10:00 AM"
  location: string,
  description?: string,
  content?: string,
  image?: string,         // "/assets/event-01.jpg"
  featured?: boolean,
  enabled: boolean,
  status: string,         // "upcoming", "ongoing", "past"
  capacity?: number,
  registered?: number,
  category?: string       // "conference", "workshop", etc.
}
```

#### Usage Example

```javascript
// In a React component
import { eventsAPI } from '../services/dataService';
import { useState, useEffect } from 'react';

export function EventsList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        // Get only enabled events for public display
        const data = await eventsAPI.getEnabledEvents();
        setEvents(data);
      } catch (error) {
        console.error('Failed to load events:', error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div>Loading events...</div>;

  return (
    <div>
      {events.map(event => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.date} - {event.location}</p>
        </div>
      ))}
    </div>
  );
}
```

---

### 2. News API (`newsAPI`)

#### Methods

| Method | Parameters | Returns | Notes |
|--------|-----------|---------|-------|
| `getAllNews()` | none | `Promise<News[]>` | All articles |
| `getNewsById(id)` | `id: number` | `Promise<News>` | Single article |
| `getEnabledNews()` | none | `Promise<News[]>` | Only enabled articles |
| `createNews(data)` | `data: Object` | `Promise<News>` | Creates new article |
| `updateNews(id, data)` | `id: number, data: Object` | `Promise<News>` | Updates article |
| `deleteNews(id)` | `id: number` | `Promise<{success: true}>` | Deletes article |
| `toggleNews(id)` | `id: number` | `Promise<News>` | Toggles enabled status |

#### News Data Structure

```javascript
{
  id: number,
  title: string,
  date: string,           // "2026-01-15"
  author?: string,
  summary?: string,
  content: string,
  image?: string,
  featured?: boolean,
  enabled: boolean,
  category?: string,      // "education", "community", etc.
  views?: number,
  likes?: number
}
```

#### Usage Example

```javascript
// Create new news article
const newArticle = await newsAPI.createNews({
  title: 'Breaking News',
  author: 'John Doe',
  summary: 'News summary',
  content: 'Full article content...',
  category: 'updates'
});

// Get featured articles
const featuredNews = (await newsAPI.getEnabledNews())
  .filter(n => n.featured === true);
```

---

### 3. Gallery API (`galleryAPI`)

#### Methods

| Method | Parameters | Returns | Notes |
|--------|-----------|---------|-------|
| `getAllGallery()` | none | `Promise<Item[]>` | All gallery items |
| `getGalleryById(id)` | `id: number` | `Promise<Item>` | Single item |
| `getEnabledGallery()` | none | `Promise<Item[]>` | Only enabled items |
| `uploadImage(data)` | `data: Object` | `Promise<Item>` | Adds new image |
| `updateGalleryItem(id, data)` | `id: number, data: Object` | `Promise<Item>` | Updates item metadata |
| `deleteImage(id)` | `id: number` | `Promise<{success: true}>` | Deletes image |
| `toggleImage(id)` | `id: number` | `Promise<Item>` | Toggles enabled status |

#### Gallery Item Structure

```javascript
{
  id: number,
  title: string,
  image: string,          // "/assets/gallery-01.jpg"
  thumbnail?: string,
  description?: string,
  category?: string,      // "events", "community", etc.
  date: string,           // "2025-11-15"
  enabled: boolean,
  featured?: boolean,
  uploadedBy?: string,
  tags?: string[]
}
```

#### Usage Example

```javascript
// Upload new image
const imageItem = await galleryAPI.uploadImage({
  title: 'Conference Photo',
  image: '/assets/event-photo.jpg',
  description: 'Beautiful moment from our conference',
  category: 'events',
  tags: ['conference', 'people', 'gathering']
});

// Get images by category
const eventPhotos = (await galleryAPI.getEnabledGallery())
  .filter(item => item.category === 'events');
```

---

### 4. Authentication API (`authAPI`)

#### Methods

| Method | Parameters | Returns | Notes |
|--------|-----------|---------|-------|
| `login(email, password)` | `email: string, password: string` | `Promise<{user, token}>` | Authenticates user |
| `logout()` | none | `{success: true}` | Clears auth data |
| `isAuthenticated()` | none | `boolean` | Checks if user logged in |
| `getCurrentUser()` | none | `User \| null` | Gets current user |

#### User Data Structure

```javascript
{
  id: string,
  email: string,
  name: string,
  role: string,          // "admin", "editor", etc.
  loginTime: string
}
```

#### Usage Example

```javascript
// Login
const { user, token } = await authAPI.login('admin@example.com', 'password');
console.log(user); // { id: 'user_1234', email: '...', name: 'admin', role: 'admin' }

// Check authentication in components
if (!authAPI.isAuthenticated()) {
  navigate('/login');
}

// Get current user
const user = authAPI.getCurrentUser();
console.log(user.email);

// Logout
authAPI.logout();
```

---

### 5. Dashboard API (`dashboardAPI`)

#### Methods

| Method | Parameters | Returns | Notes |
|--------|-----------|---------|-------|
| `getStats()` | none | `Promise<Stats>` | Dashboard statistics |

#### Statistics Structure

```javascript
{
  totalEvents: number,
  enabledEvents: number,
  totalNews: number,
  enabledNews: number,
  totalGalleryItems: number,
  enabledGalleryItems: number,
  totalEventAttendees: number,
  totalNewsViews: number
}
```

#### Usage Example

```javascript
// Get dashboard stats
const stats = await dashboardAPI.getStats();
console.log(stats.totalEvents);    // 10
console.log(stats.enabledEvents);  // 8
console.log(stats.totalNewsViews); // 5234
```

---

### 6. Config API (`configAPI`)

#### Methods

| Method | Parameters | Returns | Notes |
|--------|-----------|---------|-------|
| `getConfig()` | none | `Promise<Config>` | Site configuration |
| `updateConfig(data)` | `data: Object` | `Promise<Config>` | Updates config |

#### Config Structure

```javascript
{
  site: {
    name: string,
    tagline: string,
    description: string,
    contact: {
      email: string,
      phone: string,
      address: string
    },
    social: {
      facebook: string,
      twitter: string,
      linkedin: string,
      instagram: string
    }
  },
  about: {
    mission: string,
    vision: string,
    founded: string,
    team_size: string
  }
}
```

---

## 💾 Data Persistence

### How It Works

1. **First Load**: Fetches from JSON files in `/public/data/`
2. **Automatic Sync**: Stores in localStorage for offline access
3. **Smart Fallback**: Uses localStorage if server unavailable
4. **LocalStorage Keys**:
   - `umu_events` - Events data
   - `umu_news` - News articles
   - `umu_gallery` - Gallery items
   - `umu_config` - Site configuration
   - `umu_sync_status` - Last sync timestamp

### Example: Offline Fallback

```javascript
// This automatically works offline!
const events = await eventsAPI.getEnabledEvents();
// If server is down, it uses localStorage data automatically
```

---

## 🔄 Error Handling

All API methods throw errors that can be caught:

```javascript
try {
  const events = await eventsAPI.getAllEvents();
} catch (error) {
  console.error('Error:', error.message);
  // Handle error appropriately
}
```

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `"Failed to fetch /data/events.json"` | JSON file not found | Check `/public/data/` folder |
| `"Event not found"` | Invalid ID | Verify event ID exists |
| `"Email and password required"` | Missing credentials | Provide both email & password |
| `"LocalStorage sync failed"` | Storage quota exceeded | Clear browser data |

---

## 🚀 Advanced Usage

### Filtering & Searching

```javascript
// Get featured events
const featured = (await eventsAPI.getAllEvents())
  .filter(e => e.featured === true && e.enabled === true);

// Search by title
const results = (await newsAPI.getAllNews())
  .filter(n => n.title.toLowerCase().includes('conference'));

// Sort by date
const sorted = (await eventsAPI.getAllEvents())
  .sort((a, b) => new Date(a.date) - new Date(b.date));
```

### Batch Operations

```javascript
// Load all data simultaneously
const [events, news, gallery] = await Promise.all([
  eventsAPI.getAllEvents(),
  newsAPI.getAllNews(),
  galleryAPI.getAllGallery()
]);
```

### Conditional Loading

```javascript
// Load only if authenticated
if (authAPI.isAuthenticated()) {
  const events = await eventsAPI.getAllEvents();
  // Process admin data
}
```

---

## 🔗 Migration to Real Backend

All methods are designed for **zero-impact migration**:

```javascript
// Original (JSON-based)
const events = await eventsAPI.getAllEvents();

// Migrated (API-based)
// No component code changes needed!
// Just update dataService.js to call your backend
```

See [DYNAMIC_SETUP_GUIDE.md](./DYNAMIC_SETUP_GUIDE.md#-migration-path-to-real-backend) for migration steps.

---

## 📖 Full Documentation Index

- [DYNAMIC_SETUP_GUIDE.md](./DYNAMIC_SETUP_GUIDE.md) - Complete setup & architecture
- [src/services/dataService.js](../src/services/dataService.js) - Source code with comments
- [src/pages/Dashboard.jsx](../src/pages/Dashboard.jsx) - Usage examples
- Component files - Real-world usage examples

---

## 💡 Tips & Best Practices

1. **Always check `enabled` flag** for public pages:
   ```javascript
   const publicEvents = await eventsAPI.getEnabledEvents();
   ```

2. **Handle loading states**:
   ```javascript
   const [loading, setLoading] = useState(true);
   // ... fetch logic ...
   setLoading(false);
   ```

3. **Show error messages to users**:
   ```javascript
   const [error, setError] = useState(null);
   try {
     // ... fetch ...
   } catch (err) {
     setError('Failed to load data');
   }
   ```

4. **Cache data when possible**:
   ```javascript
   // Only fetch once on component mount
   useEffect(() => { /* fetch */ }, []);
   ```

5. **Validate data before using**:
   ```javascript
   if (event?.title && event?.date) {
     // Safe to use
   }
   ```

---

**Happy coding!** 🚀
