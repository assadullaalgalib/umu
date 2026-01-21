import { useState, useEffect } from 'react';
import { eventsAPI } from '../services/dataService';

export default function LatestEventSection({ onOpenModal = () => {}, onNavigate = () => {} }) {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadLatestEvent = async () => {
    try {
      const allEvents = await eventsAPI.getAllEvents();
      const enabledEvents = allEvents.filter(e => e.enabled === true && e.priority === "high");
      console.log(enabledEvents);
      
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
