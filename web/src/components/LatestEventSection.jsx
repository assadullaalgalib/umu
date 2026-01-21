import { useState, useEffect } from 'react';
import { eventsAPI } from '../services/dataService';

const eventsData = [
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
    "title": "Islamic History & Culture Olympiad 2026",
    "date": "2026-02-10",
    "time": "10:00 AM",
    "location": "Dhaka Convention Center",
    "description": "Annual Islamic conference bringing together scholars and leaders",
    "content": "Join us for our annual Islamic conference where we discuss contemporary issues facing Muslim communities worldwide. Expert speakers will share insights on education, technology, and social welfare.",
    "image": "/assets/event-01.jpg",
    "featured": true,
    "enabled": true,
    "status": "upcoming",
    "priority": "high",
    "capacity": 500,
    "registered": 234,
    "category": "conference"
  }
];


export default function LatestEventSection({ onOpenModal = () => {}, onNavigate = () => {} }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadLatestEvent = async () => {
    try {
      const allEvents = eventsData;
      const enabledEvents = allEvents.filter(e => e.enabled === true && e.priority === "high");
      // console.log(enabledEvents);
      
      if (enabledEvents.length > 0) {
        setEvent(enabledEvents[0]); // Get first enabled event
      }
    } catch (err) {
      console.error('Error loading latest event:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLatestEvent();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadLatestEvent, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleViewAllEvents = () => {
    window.location.href = '/events';
  };

  if (loading || !event) {
    return (
      <section className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading latest event...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-24 max-w-6xl">
      {/* Header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-primary">Latest Event</h2>
          <p className="text-gray-500 mt-1">Join our next big gathering</p>
        </div>

        <button
          onClick={handleViewAllEvents}
          className="text-primary font-bold hover:text-gold transition-colors text-sm"
        >
          View All Events →
        </button>
      </div>

      {/* Event Card */}
      <div className="bg-primary rounded-3xl text-white overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img
            src={event.image}
            onError={(e) =>
              (e.target.src = 'https://placehold.co/800x500?text=' + encodeURIComponent(event.title))
            }
            className="w-full h-full object-cover"
            alt={event.title}
          />
          <div className="absolute top-4 left-4 bg-gold text-primary-dark font-bold px-3 py-1 rounded shadow-md text-sm">
            {event.status?.toUpperCase() || 'UPCOMING'}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-left">
          <div className="flex items-center gap-3 text-gold/80 font-bold text-sm mb-3">
            <span>📅 {new Date(event.date).toLocaleDateString()}</span>
            <span>📍 {event.location}</span>
          </div>
          <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
          <p className="text-gray-200 mb-8 leading-relaxed">
            {event.description || event.summary}
          </p>
          <div>
            <button
              onClick={() => onOpenModal('event', event)}
              className="bg-[#B28926] text-primary px-8 py-3 rounded-lg font-bold hover:bg-gold hover:text-primary-dark transition-all"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
