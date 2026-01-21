import { useState, useEffect } from "react";
import { eventsAPI } from "../services/dataService";
import Header from "../components/Header";

const eventsData = [
  {
    "id": 1,
    "title": "Islamic Conference 2026",
    "date": "2026-02-10",
    "time": "10:00 AM",
    "location": "Dhaka Convention Center",
    "description": "Annual Islamic conference bringing together scholars and leaders",
    "content": "Join us for our annual Islamic conference where we discuss contemporary issues facing Muslim communities worldwide. Expert speakers will share insights on education, technology, and social welfare.",
    "image": "/assets/event-01.jpg",
    "featured": true,
    "enabled": true,
    "status": "upcoming",
    "priority": "low",
    "capacity": 500,
    "registered": 234,
    "category": "conference"
  },
  {
    "id": 2,
    "title": "Youth Workshop Series",
    "date": "2026-01-25",
    "time": "2:00 PM",
    "location": "ATR Innovation Hub",
    "description": "Interactive workshop for young professionals on technology and entrepreneurship",
    "content": "Learn cutting-edge skills in web development, digital marketing, and business management from industry experts.",
    "image": "/assets/event-02.jpg",
    "featured": true,
    "enabled": true,
    "status": "upcoming",
    "priority": "mid",
    "capacity": 100,
    "registered": 87,
    "category": "workshop"
  },
  {
    "id": 3,
    "title": "Community Service Day",
    "date": "2026-03-15",
    "time": "8:00 AM",
    "location": "Multiple Locations",
    "description": "Join us in giving back to our community through volunteer work",
    "content": "Together we make a difference. Participate in various community service activities including education support, environmental cleanup, and healthcare awareness.",
    "image": "/assets/event-03.jpg",
    "featured": false,
    "enabled": true,
    "status": "ongoing",
    "priority": "mid",
    "capacity": 200,
    "registered": 145,
    "category": "volunteer"
  },
  {
  "id": 4,
  "title": "Bangladesh Halal Expo - 2026",
  "date": "2026-02-07",
  "time": "6:00 PM",
  "location": "China Bangladesh Friendship Conference Center",
  "description": "Bangladesh Halal Expo 2026 stands as a trusted meeting point of the global halal economy, bringing together international exhibitors, buyers, innovators, and policymakers on one prestigious platform. Guided by the principles of halal, ethical trade, and sustainability, the Expo reflects a shared vision of inclusive growth and responsible commerce.",
  "content": "Bangladesh Halal Expo 2026 stands as a trusted meeting point of the global halal economy, bringing together international exhibitors, buyers, innovators, and policymakers on one prestigious platform. Guided by the principles of halal, ethical trade, and sustainability, the Expo reflects a shared vision of inclusive growth and responsible commerce.<br/><div class='card about-highlights-card'><h4 style='color: var(--primary-green); margin-bottom: 15px; font-size: 1.4rem;'>2026 Highlights</h4><ul style='list-style: none'><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>15,000+ sqm International Exhibition Area</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Participation from 40+ Countries</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>700+ Hosted International Buyers</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Organized in collaboration with OIC-affiliated Institutions</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Specialized Zones: NOV, Private Label &amp; SEFPEX</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Platform for Global B2B Meetings &amp; Halal Trade Forums</li></ul></div>",
  "image": "/assets/halal_expo.png",
  "featured": false,
  "enabled": true,
  "status": "upcoming",
  "priority": "high",
  "capacity": 150,
  "registered": 98,
  "category": "networking"
  },
  {
    "id": 5,
    "title": "Islamic Conference 2026",
    "date": "2026-02-10",
    "time": "10:00 AM",
    "location": "Dhaka Convention Center",
    "description": "Annual Islamic conference bringing together scholars and leaders",
    "content": "Join us for our annual Islamic conference where we discuss contemporary issues facing Muslim communities worldwide. Expert speakers will share insights on education, technology, and social welfare.",
    "image": "/assets/event-01.jpg",
    "featured": true,
    "enabled": true,
    "status": "upcoming",
    "priority": "low",
    "capacity": 500,
    "registered": 234,
    "category": "conference"
  }
];

export function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEvents = async () => {
    try {
      setLoading(true);
      // Always get fresh data from localStorage/JSON
      const allEvents = eventsData; //await eventsAPI.getAllEvents();
      const enabledEvents = allEvents.filter(e => e.enabled === true);
      setEvents(enabledEvents);
      setError(null);
    } catch (err) {
      setError('Failed to load events');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadEvents, 2000);
    return () => clearInterval(interval);
  }, []);

  const filtered = filter === "all"
    ? events
    : events.filter((e) => e.status === filter);

  if (loading) {
    return (
      <section id="events" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading events...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="events" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="page-section">
      <Header
        title="All Community Events"
        subtitle="Join us in our upcoming gatherings and look back at our journey"
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["all", "upcoming", "ongoing", "previous"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                filter === t
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((e, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-bold text-primary text-lg">
                {e.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 capitalize">
                {e.type} event
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Header = ({ title, subtitle }) => (
  <div className="bg-primary py-12 text-white text-center">
    <h1 className="text-4xl font-bold">{title}</h1>
    <p className="opacity-80 mt-2">{subtitle}</p>
  </div>
);
export default EventsPage;