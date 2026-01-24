// API Service to handle all data operations
// For now, uses JSON files. Later will use real API endpoints with .env configuration

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5174/api';

// Helper function to fetch JSON data
const fetchFromJSON = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to fetch from ${filePath}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching JSON:', error);
    return null;
  }
};

// ==================== EVENTS API ====================
export const eventsAPI = {
  async getAllEvents() {
    return await fetchFromJSON('/data/events.json');
  },

  async getEventById(id) {
    const events = await this.getAllEvents();
    return events?.find(e => e.id === parseInt(id));
  },

  async createEvent(eventData) {
    // TODO: Replace with actual API call
    const events = await this.getAllEvents();
    const newEvent = {
      id: Math.max(...events.map(e => e.id), 0) + 1,
      ...eventData,
      createdAt: new Date().toISOString(),
    };
    return newEvent;
  },

  async updateEvent(id, eventData) {
    // TODO: Replace with actual API call
    return { id, ...eventData, updatedAt: new Date().toISOString() };
  },

  async deleteEvent(id) {
    // TODO: Replace with actual API call
    return { success: true, id };
  },
};

// ==================== GALLERY API ====================
export const galleryAPI = {
  async getAllGallery() {
    return await fetchFromJSON('/data/gallery.json');
  },

  async getGalleryItem(id) {
    const gallery = await this.getAllGallery();
    return gallery?.find(g => g.id === parseInt(id));
  },

  async uploadImage(imageData) {
    // TODO: Replace with actual file upload API
    const gallery = await this.getAllGallery();
    const newItem = {
      id: Math.max(...gallery.map(g => g.id), 0) + 1,
      ...imageData,
      uploadedAt: new Date().toISOString(),
    };
    return newItem;
  },

  async deleteImage(id) {
    // TODO: Replace with actual API call
    return { success: true, id };
  },

  async updateImageMetadata(id, metadata) {
    // TODO: Replace with actual API call
    return { id, ...metadata, updatedAt: new Date().toISOString() };
  },
};

// ==================== NEWS API ====================
export const newsAPI = {
  async getAllNews() {
    return await fetchFromJSON('/data/news.json');
  },

  async getNewsById(id) {
    const news = await this.getAllNews();
    return news?.find(n => n.id === parseInt(id));
  },

  async createNews(newsData) {
    // TODO: Replace with actual API call
    const news = await this.getAllNews();
    const newNews = {
      id: Math.max(...news.map(n => n.id), 0) + 1,
      ...newsData,
      publishedAt: new Date().toISOString(),
    };
    return newNews;
  },

  async updateNews(id, newsData) {
    // TODO: Replace with actual API call
    return { id, ...newsData, updatedAt: new Date().toISOString() };
  },

  async deleteNews(id) {
    // TODO: Replace with actual API call
    return { success: true, id };
  },
};

// ==================== ABOUT PAGE API ====================
export const aboutAPI = {
  async getAboutContent() {
    // Return default about content structure
    const aboutContent = {
      id: 1,
      title: 'About United Muslim Ummah',
      sections: {
        whoWeAre: {
          title: 'Who We Are',
          content: 'United Muslim Ummah (UMU) is a global organization dedicated to fostering unity, understanding, and cooperation among Muslim communities worldwide.',
        },
        mission: {
          title: 'Our Mission',
          content: 'To unite Muslims globally in pursuing shared humanitarian goals while respecting diverse cultures and traditions.',
        },
        vision: {
          title: 'Our Vision',
          content: 'A world where Muslims live with dignity, security, and prosperity.',
        },
        coreValues: [
          { title: 'Unity', description: 'We believe in the power of collective action' },
          { title: 'Justice', description: 'Fairness, equality, and dignity for all' },
          { title: 'Compassion', description: 'Mercy and empathy guide our approach' },
          { title: 'Excellence', description: 'We strive for the highest standards' },
          { title: 'Integrity', description: 'Honesty, transparency, and ethical conduct' },
          { title: 'Inclusivity', description: 'We celebrate diversity' },
        ],
      },
    };
    return aboutContent;
  },

  async updateAboutContent(content) {
    // TODO: Replace with actual API call
    return {
      ...content,
      updatedAt: new Date().toISOString(),
    };
  },
};

// ==================== CONTACT API ====================
export const contactAPI = {
  async getContactInfo() {
    return {
      email: 'info@ummaah.org',
      phone: '+971 4 123 4567',
      address: 'Dubai, UAE',
      socialMedia: {
        facebook: 'https://facebook.com/ummaah',
        twitter: 'https://twitter.com/ummaah',
        instagram: 'https://instagram.com/ummaah',
      },
    };
  },

  async submitContactForm(formData) {
    // TODO: Replace with actual API call
    return {
      success: true,
      message: 'Message submitted successfully',
      submittedAt: new Date().toISOString(),
      data: formData,
    };
  },

  async updateContactInfo(contactData) {
    // TODO: Replace with actual API call
    return {
      ...contactData,
      updatedAt: new Date().toISOString(),
    };
  },
};

// ==================== SETTINGS API ====================
export const settingsAPI = {
  async getSettings() {
    return {
      id: 1,
      siteName: 'United Muslim Ummah',
      siteDescription: 'Global Islamic Community Platform',
      logo: '/assets/logo.png',
      colors: {
        primary: '#0F6A3B',
        secondary: '#B28800',
        accent: '#F5F9FC',
      },
      socialLinks: {
        facebook: '',
        twitter: '',
        instagram: '',
        linkedin: '',
      },
    };
  },

  async updateSettings(settings) {
    // TODO: Replace with actual API call
    return {
      ...settings,
      updatedAt: new Date().toISOString(),
    };
  },
};

// ==================== USER/AUTH API ====================
export const authAPI = {
  async login(email, password) {
    // TODO: Replace with actual API call
    // For demo purposes, accept any non-empty credentials
    if (email && password) {
      const user = {
        id: 1,
        email: email,
        name: 'Admin User',
        role: 'admin',
        token: 'demo-token-' + Date.now(),
      };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('authToken', user.token);
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  async logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    return { success: true };
  },

  async getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  async isAuthenticated() {
    return !!localStorage.getItem('authToken');
  },

  async refreshToken() {
    // TODO: Replace with actual API call
    const newToken = 'demo-token-' + Date.now();
    localStorage.setItem('authToken', newToken);
    return { success: true, token: newToken };
  },
};

// ==================== DASHBOARD STATS API ====================
export const dashboardAPI = {
  async getStats() {
    const events = await eventsAPI.getAllEvents();
    const news = await newsAPI.getAllNews();
    const gallery = await galleryAPI.getAllGallery();

    return {
      totalEvents: events?.length || 0,
      totalNews: news?.length || 0,
      totalGalleryItems: gallery?.length || 0,
      recentActivities: [
        { id: 1, type: 'event', title: 'New event created', timestamp: new Date().toISOString() },
        { id: 2, type: 'news', title: 'News article published', timestamp: new Date().toISOString() },
      ],
    };
  },

  async getActivityLog() {
    // TODO: Implement actual activity logging
    return [
      { id: 1, action: 'Created Event', user: 'Admin', timestamp: new Date().toISOString() },
      { id: 2, action: 'Updated Gallery', user: 'Admin', timestamp: new Date().toISOString() },
    ];
  },
};

export default {
  eventsAPI,
  galleryAPI,
  newsAPI,
  aboutAPI,
  contactAPI,
  settingsAPI,
  authAPI,
  dashboardAPI,
};
