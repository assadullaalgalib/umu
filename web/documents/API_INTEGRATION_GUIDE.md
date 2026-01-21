# Real API Integration Guide

## Overview
The application is currently using JSON files for data storage. This guide shows how to integrate real API endpoints.

---

## Step 1: Environment Configuration

### Create `.env` file
```env
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_API_VERSION=v1
VITE_API_TIMEOUT=5000
```

### Access in Code
```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';
```

---

## Step 2: Update apiService.js

### Example: Replace Events API

**Current (JSON)**:
```javascript
export const eventsAPI = {
  async getAllEvents() {
    return await fetchFromJSON('/data/events.json');
  },
};
```

**New (Real API)**:
```javascript
export const eventsAPI = {
  async getAllEvents() {
    try {
      const response = await fetch(`${API_BASE_URL}/events`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  async createEvent(eventData) {
    const response = await fetch(`${API_BASE_URL}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  },

  async updateEvent(id, eventData) {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  },

  async deleteEvent(id) {
    const response = await fetch(`${API_BASE_URL}/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  },
};
```

---

## Step 3: Backend API Endpoints Required

### Events Endpoints
```
GET    /api/events              → Get all events
POST   /api/events              → Create event
GET    /api/events/:id          → Get event details
PUT    /api/events/:id          → Update event
DELETE /api/events/:id          → Delete event
```

### Gallery Endpoints
```
GET    /api/gallery             → Get all images
POST   /api/gallery/upload      → Upload image
DELETE /api/gallery/:id         → Delete image
```

### News Endpoints
```
GET    /api/news                → Get all articles
POST   /api/news                → Create article
DELETE /api/news/:id            → Delete article
```

### About Endpoints
```
GET    /api/about               → Get about content
PUT    /api/about               → Update about content
```

### Auth Endpoints
```
POST   /api/auth/login          → Login user
POST   /api/auth/logout         → Logout user
GET    /api/auth/me             → Get current user
POST   /api/auth/refresh        → Refresh token
```

### Dashboard Endpoints
```
GET    /api/dashboard/stats     → Get dashboard statistics
GET    /api/dashboard/activity  → Get activity log
```

---

## Step 4: File Upload Integration

### Update Gallery Upload
```javascript
export const galleryAPI = {
  async uploadImage(file, title, description) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);

    const response = await fetch(`${API_BASE_URL}/gallery/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: formData, // Don't set Content-Type, browser will set it
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  },
};
```

### Update Dashboard Upload Form
```jsx
const handleUploadImage = async (e) => {
  e.preventDefault();
  const fileInput = e.target.querySelector('input[type="file"]');
  const titleInput = e.target.querySelector('input[name="title"]');
  const descInput = e.target.querySelector('textarea[name="description"]');

  if (!fileInput.files.length) {
    alert('Please select an image');
    return;
  }

  try {
    const newImage = await galleryAPI.uploadImage(
      fileInput.files[0],
      titleInput.value,
      descInput.value
    );
    setGallery([...gallery, newImage]);
    e.target.reset();
    alert('Image uploaded successfully!');
  } catch (error) {
    alert('Upload failed: ' + error.message);
  }
};
```

---

## Step 5: Authentication Enhancement

### Real JWT Authentication
```javascript
export const authAPI = {
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        return { success: false, error: error.message };
      }

      const data = await response.json();
      
      // Store user and token
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('tokenExpiry', data.expiresIn);

      return { success: true, user: data.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async logout() {
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      localStorage.removeItem('tokenExpiry');
    }
  },

  async refreshToken() {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    });

    if (!response.ok) throw new Error('Token refresh failed');
    const data = await response.json();
    localStorage.setItem('authToken', data.token);
    return data;
  },
};
```

---

## Step 6: Error Handling & Interceptors

### Create Request Interceptor
```javascript
// src/services/httpClient.js

export const httpClient = {
  async request(url, options = {}) {
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    };

    const finalOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, finalOptions);

      // Handle token expiration
      if (response.status === 401) {
        const refreshed = await authAPI.refreshToken();
        if (refreshed) {
          // Retry with new token
          finalOptions.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
          return await fetch(url, finalOptions);
        } else {
          // Redirect to login
          window.location.href = '/login';
        }
      }

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || `HTTP ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Request error:', error);
      throw error;
    }
  },
};
```

---

## Step 7: API Response Format

### Standard Response Format
```json
{
  "success": true,
  "data": { /* actual data */ },
  "message": "Success",
  "timestamp": "2026-01-19T10:30:00Z"
}
```

### Error Response Format
```json
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE",
  "timestamp": "2026-01-19T10:30:00Z"
}
```

---

## Step 8: Migration Steps

### Phase 1: Single Module (Start with Events)
1. Update `eventsAPI` in `apiService.js`
2. Test events page
3. Test dashboard events tab
4. Verify all CRUD operations

### Phase 2: Complete Migration
1. Update all API modules one by one
2. Test each module separately
3. Test interaction between modules
4. Run full test suite

### Phase 3: Deployment
1. Set production API URL in `.env`
2. Test in production environment
3. Monitor logs for errors
4. Keep JSON files as fallback initially

---

## Step 9: Troubleshooting

### CORS Issues
**Problem**: `No 'Access-Control-Allow-Origin' header`

**Solution**: Configure CORS on backend
```javascript
// Node.js Express example
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
```

### Token Expiration
**Problem**: Dashboard shows 401 error

**Solution**: Implement token refresh (see interceptor above)

### Network Timeout
**Problem**: Requests hang

**Solution**: Add timeout handler
```javascript
const fetchWithTimeout = (url, options = {}, timeout = 5000) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), timeout)
    ),
  ]);
};
```

---

## Step 10: Testing

### API Testing Tools
- **Postman**: Test API endpoints directly
- **Insomnia**: REST client for testing
- **curl**: Command line testing

### Example Tests
```bash
# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'

# Get events
curl http://localhost:3000/api/events \
  -H "Authorization: Bearer YOUR_TOKEN"

# Create event
curl -X POST http://localhost:3000/api/events \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title":"Event","date":"2026-02-01","location":"Dubai"}'
```

---

## Complete Checklist

### Pre-Integration
- [ ] Backend API designed
- [ ] API endpoints documented
- [ ] Authentication method chosen
- [ ] Database schema created
- [ ] CORS configured
- [ ] Error handling planned

### Integration
- [ ] Update apiService.js
- [ ] Test each API module
- [ ] Implement file uploads
- [ ] Add error handling
- [ ] Test authentication flow
- [ ] Test protected routes

### Testing
- [ ] Unit tests written
- [ ] Integration tests done
- [ ] End-to-end tests passed
- [ ] Load testing completed
- [ ] Security audit done

### Deployment
- [ ] Production API URL set
- [ ] SSL/HTTPS configured
- [ ] Rate limiting enabled
- [ ] Logging configured
- [ ] Monitoring set up
- [ ] Backup strategy in place

---

## API Integration Summary

**Current State**: JSON files ✓
**Next Step**: Real API integration
**Effort**: 4-6 hours per module
**Total Time**: 24-32 hours for full integration
**Complexity**: Medium

---

**Note**: Keep JSON files as fallback during transition period for reliability testing.
