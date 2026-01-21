# UMU Website - React.js Component Documentation

## 🎯 Project Overview

The United Muslim Ummah (UMU) website has been successfully migrated from vanilla HTML/CSS/JavaScript to a modern React.js single-page application. All functionality, UI components, and features from test.html have been converted to reusable React components.

## 📁 Component Architecture

### Core Components

#### **App.jsx** - Root Component
Main application component handling:
- Page routing and navigation state
- Modal state management
- Event handlers for navigation and modal operations
- Conditional rendering of pages based on current state

```jsx
const [currentPage, setCurrentPage] = useState('home');
const [modalState, setModalState] = useState({
  isOpen: false,
  type: null,
  data: null,
});
```

**Pages Available:**
- `home` - Home page with hero, stats, mission, events, gallery, news, contact
- `events` - Full events listing page
- `news` - Full news portal page
- `gallery` - Full gallery page

---

### Layout Components

#### **Navbar.jsx**
Navigation header component
- **Features:**
  - Sticky positioning with shadow
  - Desktop navigation with active state
  - Mobile hamburger menu toggle
  - Brand logo with text
  - Join/Login button
- **Props:**
  - `currentPage`: Current active page
  - `onNavigate`: Navigation callback

```jsx
<Navbar currentPage={currentPage} onNavigate={handleNavigate} />
```

#### **Footer.jsx**
Footer component
- **Features:**
  - Logo and branding
  - Quick navigation links
  - Copyright information
- **Props:**
  - `onNavigate`: Navigation callback

```jsx
<Footer onNavigate={handleNavigate} />
```

---

### Home Page Sections

#### **Hero.jsx**
Hero section with main message
- **Features:**
  - Logo display
  - Main headline "United Muslim Ummah"
  - Tagline "Global Islamic Community"
  - CTA buttons (Our Mission, Join Community)
  - Responsive background image
- **Props:**
  - `onScroll`: Scroll-to-section callback

#### **StatsCounter.jsx**
Animated statistics section
- **Features:**
  - 4 animated counters
  - Smooth counting animation (0 to target)
  - Displays:
    - 1900+ Million Muslims
    - 60 Member Countries
    - 100% Percent United
    - 50 Peace Initiatives
- **Auto-animates on mount**

#### **MissionSection.jsx**
Mission and Vision cards
- **Features:**
  - Two-column layout
  - Mission card with icon
  - Vision card with icon
  - Hover shadow effects
  - Scroll margin for smooth anchoring

#### **LatestEventSection.jsx**
Featured event showcase
- **Features:**
  - Latest event display (Quran Competition 2026)
  - Event image and details
  - Status badge (upcoming/ongoing/previous)
  - View Details button → Opens Modal
  - View All Events → Navigates to Events Page
- **Props:**
  - `onOpenModal`: Modal open callback
  - `onNavigate`: Navigation callback

#### **GalleryCarouselSection.jsx**
Photo carousel
- **Features:**
  - Horizontal scroll carousel
  - 7 gallery items
  - Hover scale effect
  - Previous/Next navigation buttons
  - Smooth scroll behavior
  - Click to navigate to full gallery
- **Props:**
  - `onNavigate`: Navigation callback

#### **NewsCarouselSection.jsx**
News carousel
- **Features:**
  - Horizontal scroll carousel
  - 4 news items (from 25 total)
  - Card layout with image and details
  - Click-to-open modal
  - View All News → Navigates to News Page
- **Props:**
  - `onOpenModal`: Modal open callback
  - `onNavigate`: Navigation callback

#### **ContactSection.jsx**
Contact form section
- **Features:**
  - Contact information display
  - Contact form with fields:
    - Full Name
    - Email Address
    - Message
  - Organization contact details:
    - Headquarters: Dubai, UAE
    - Email: info@ummaah.org
    - Phone: +971 (0) 4 123 4567
  - Form submission handling
  - Success message display

---

### Page Components

#### **EventsPage.jsx**
Full events listing page
- **Features:**
  - 10 total events
  - Filter tabs: All, Upcoming, Ongoing, Previous
  - 6 items per page with pagination
  - Event cards with:
    - Image
    - Status badge
    - Date and location
    - Title and summary
    - View Details button
  - Smart pagination with page numbers
  - Click-to-open modal for details
- **Events Include:**
  1. Quran Competition 2026 (Dubai)
  2. Quran Meaning & Tafsir Event (Istanbul)
  3. Islamic History & Culture Expo (Cairo)
  4. Quiz Competition on Islamic Knowledge (London)
  5. Mosque Architecture & Design Symposium (Kuala Lumpur)
  6. Islamic Awareness & Education Movement (Global Online)
  7. Halal Expo 2026 (Singapore)
  8. Educational Expo (Beirut)
  9. Islamic Finance & Economics Conference (Bahrain)
  10. Interfaith Dialogue Summit (Vienna)

#### **NewsPage.jsx**
News portal page
- **Features:**
  - 25 generated news items
  - 6 items per page with pagination
  - News cards with:
    - Image
    - Date
    - Title
    - Summary
    - Read Full Story link
  - Click-to-open modal for full content
- **Data:** Generated automatically with dates and variations

#### **GalleryPage.jsx**
Full gallery page
- **Features:**
  - 30 gallery items
  - Masonry-style grid with varying sizes
  - 12 items per page
  - Some items larger (col-span-2 row-span-2)
  - Hover overlay showing title
  - Scale zoom on hover
  - Pagination support

---

### Utility Components

#### **Modal.jsx**
Reusable modal overlay for content display
- **Features:**
  - Full-screen overlay with backdrop
  - Slide-up animation
  - Image header with gradient
  - Content rendering (supports HTML)
  - Close button (top-right)
  - Click-outside-to-close
  - Prevents body scroll when open
  - Supports both News and Event types
- **Props:**
  - `isOpen`: Modal visibility
  - `type`: 'news' or 'event'
  - `data`: Content object with image, title, date, location, content
  - `onClose`: Close callback

```jsx
<Modal
  isOpen={modalState.isOpen}
  type={modalState.type}
  data={modalState.data}
  onClose={handleCloseModal}
/>
```

#### **Pagination.jsx**
Reusable pagination controls
- **Features:**
  - Previous/Next buttons
  - Page number buttons
  - Smart display (first, last, current ±1)
  - Disabled states
  - Current page highlight
  - Responsive button styling
- **Props:**
  - `total`: Total items
  - `itemsPerPage`: Items per page
  - `currentPage`: Current page number
  - `onChange`: Page change callback

```jsx
<Pagination
  total={newsData.length}
  itemsPerPage={itemsPerPage}
  currentPage={currentPage}
  onChange={setCurrentPage}
/>
```

---

## 🎨 Styling & Theme

### Color Palette
```
Primary Green: #0F6A3B
Primary Dark: #0B4F2B
Gold: #B28800
Gold Light: #E6C77A
Text Primary: #1F2937
Text Muted: #6B7280
Sky Light: #F5F9FC
```

### Animations
```
fadeIn: 0.5s ease-out
slideUp: 0.5s ease-out
scroll-behavior: smooth
```

### Tailwind Classes Used
- Layout: `container`, `flex`, `grid`, `gap-*`
- Spacing: `p-*`, `m-*`, `py-*`, `px-*`
- Colors: `bg-primary`, `text-gold`, `border-gray-*`
- Effects: `shadow-*`, `hover:shadow-*`, `rounded-*`
- Responsive: `md:`, `lg:`, `max-w-*`

---

## 📊 Data Structure

### Event Data Structure
```jsx
{
  id: 1,
  title: "Event Name",
  date: "Mar 15, 2026",
  status: "upcoming|ongoing|previous",
  location: "City, Country",
  image: "assets/image.jpg",
  summary: "Brief description",
  content: "<p>Detailed HTML content</p>"
}
```

### News Data Structure
```jsx
{
  id: 1,
  title: "News Title",
  date: "Jan 15, 2026",
  image: "assets/image.jpg",
  summary: "Brief description",
  content: "<p>Detailed HTML content</p>"
}
```

### Gallery Data Structure
```jsx
{
  id: 1,
  title: "Image Title",
  image: "assets/image.jpg"
}
```

---

## 🔄 State Flow

### App State Management
```
App
├── currentPage (home|events|news|gallery)
├── modalState
│   ├── isOpen (boolean)
│   ├── type (news|event)
│   └── data (content object)
└── Handlers
    ├── handleNavigate(pageId)
    ├── handleScroll(sectionId)
    ├── handleOpenModal(type, data)
    └── handleCloseModal()
```

### Component State Examples
```jsx
// StatsCounter
const [counters, setCounters] = useState({
  muslims: 0,
  countries: 0,
  united: 0,
  initiatives: 0
});

// ContactSection
const [submitted, setSubmitted] = useState(false);

// Pagination Components
const [currentPage, setCurrentPage] = useState(1);
```

---

## 🔗 Navigation Flow

### Navigation Paths
```
Home (/)
├── Hero
├── Stats
├── Mission (scroll)
├── Latest Event → Events Page
├── Gallery Carousel → Gallery Page
├── News Carousel → News Page
└── Contact (scroll)

Events Page (/events)
├── Filter by status
├── Pagination
└── Click event → Modal

News Page (/news)
├── Pagination
└── Click news → Modal

Gallery Page (/gallery)
├── Pagination
└── View gallery grid

Contact Section
└── Form submission
```

---

## 🚀 Component Usage Examples

### Navigate to Page
```jsx
onNavigate('events');  // Go to events page
onNavigate('home');    // Go to home page
```

### Open Modal
```jsx
handleOpenModal('event', eventData);
handleOpenModal('news', newsData);
```

### Scroll to Section
```jsx
handleScroll('mission-section');
handleScroll('contact-section');
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default styles
- **md**: 768px and up (Medium devices)
- **lg**: 1024px and up (Large devices)

### Key Responsive Elements
- Navigation: Hidden on mobile, visible on md+
- Hamburger menu: Visible on mobile, hidden on md+
- Grid columns: 1 col (mobile) → 2 cols (md) → 3-4 cols (lg)
- Hero: Text size adjusts: sm (mobile) → lg (md) → xl (lg)
- Padding: Smaller on mobile, larger on desktop

---

## 🐛 Error Handling

### Image Loading
All images have fallback:
```jsx
onError={(e) => 
  e.target.src = 'https://placehold.co/800x500?text=Image+Unavailable'
}
```

### Modal Safety
```jsx
if (!isOpen || !data) return null;
```

### Navigation Safety
```jsx
document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
```

---

## 📈 Performance Features

1. **Lazy Rendering**: Pages only render when active
2. **Optimized Re-renders**: State isolated to necessary components
3. **CSS Classes**: Tailwind purges unused styles
4. **Image Optimization**: Fallback placeholders for missing images
5. **No External Dependencies**: Minimal bundle size

---

## 🔧 Development & Maintenance

### Adding New Events
Edit [src/components/EventsPage.jsx](src/components/EventsPage.jsx) `eventsData` array:
```jsx
const eventsData = [
  {
    id: 11,
    title: "New Event",
    date: "Dec 25, 2026",
    status: "upcoming",
    location: "City",
    image: "assets/image.jpg",
    summary: "Description",
    content: "<p>Details</p>"
  },
  // ...
];
```

### Adding New News
Edit [src/components/NewsPage.jsx](src/components/NewsPage.jsx) `generateNewsData()`:
```jsx
const newsData = generateNewsData(30); // Increase number
```

### Adding Gallery Items
Edit [src/components/GalleryPage.jsx](src/components/GalleryPage.jsx) `galleryData` array:
```jsx
{ id: 31, title: "New Image", image: "assets/image.jpg" }
```

---

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
# Output: dist/ folder with optimized files
```

### Development Server
```bash
npm run dev
# Server: http://localhost:5174/
```

### Production Output
- `dist/index.html` - Main HTML file
- `dist/assets/index-*.js` - Compiled React app (228.68 KB gzip)
- `dist/assets/index-*.css` - Compiled styles (22.36 KB gzip)
- `dist/assets/*.png` - Image assets

---

## ✅ Functionality Checklist

- ✅ Navigation between pages
- ✅ Home page with all sections
- ✅ Hero section with buttons
- ✅ Animated counters
- ✅ Mission & Vision cards
- ✅ Latest event showcase
- ✅ Gallery carousel
- ✅ News carousel
- ✅ Contact form
- ✅ Events page with filtering
- ✅ Events pagination
- ✅ News page with pagination
- ✅ Gallery page with pagination
- ✅ Modal for event/news details
- ✅ Mobile menu toggle
- ✅ Smooth scrolling
- ✅ Responsive design
- ✅ Image fallbacks
- ✅ Form submission

---

## 🎓 Key Improvements

1. **Reusability**: Components can be used in multiple places
2. **Maintainability**: Clear separation of concerns
3. **Performance**: Optimized re-renders and bundle size
4. **Scalability**: Easy to add new features or pages
5. **Accessibility**: Semantic HTML and proper ARIA labels
6. **Mobile-First**: Responsive design built in
7. **State Management**: Centralized in App.jsx
8. **Type Safety**: Ready for TypeScript migration

---

## 📞 Support

For questions or issues:
1. Check component props documentation
2. Review component examples in this file
3. Check React/Tailwind documentation
4. Review test.html for original implementation

---

**Last Updated**: January 19, 2026
**Version**: 1.0 React Migration
**Status**: ✅ Complete and Tested
