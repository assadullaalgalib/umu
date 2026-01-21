import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Modal from './Modal';
import { eventsAPI } from '../services/dataService';

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

export default function EventsPage({ onOpenModal = () => {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');
  // const [loading, setLoading] = useState(false);
  // const [eventsData, setEventsData] = useState([]);
  const itemsPerPage = 6;

  const filteredEvents =
    filterStatus === 'all'
      ? eventsData
      : eventsData.filter((event) => event.status === filterStatus);
  
  //   const loadLatestEvent = async () => {
  //       try {
  //         const allEvents = await eventsAPI.getAllEvents();
  //         const enabledEvents = allEvents.filter(e => e.enabled === true);
          
  //         if (enabledEvents.length > 0) {
  //           setEventsData(enabledEvents);
  //         }
  //       } catch (err) {
  //         console.error('Error loading latest event:', err);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };
    
  // useEffect(() => {
  //   loadLatestEvent();
  // }, []);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  // if (loading || !eventsData) {
  //   return (
  //     <section className="container mx-auto px-4 py-24 max-w-6xl">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
  //         <p className="text-gray-600">Loading latest event...</p>
  //       </div>
  //     </section>
  //   );
  // }

  return (
    <section className="min-h-screen">
      <div className="bg-primary py-12 text-white text-center">
        <h1 className="text-4xl font-bold">All Community Events</h1>
        <p className="opacity-80 mt-2">
          Join us in our upcoming gatherings and look back at our journey
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['all', 'upcoming', 'ongoing', 'previous'].map((status) => (
            <button
              key={status}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                filterStatus === status
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              onClick={() => handleFilterChange(status)}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)} Events
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedEvents.map((event) => {
            let badgeColor = 'bg-gray-500';
            if (event.status === 'upcoming')
              badgeColor = 'bg-gold text-primary-dark';
            if (event.status === 'ongoing')
              badgeColor = 'bg-green-600 text-white';

            return (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    onError={(e) =>
                      (e.target.src =
                        'https://placehold.co/800x500?text=Image+Unavailable')
                    }
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 right-4 ${badgeColor} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 font-bold mb-2 flex items-center gap-2">
                    <span>📅 {event.date}</span>
                    <span>•</span>
                    <span>📍 {event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                    {event.summary}
                  </p>
                  <button
                    onClick={() => onOpenModal('event', event)}
                    className="text-primary font-bold text-sm hover:text-gold transition-colors text-left"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {paginatedEvents.length > 0 && (
          <Pagination
            total={filteredEvents.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        )}

        {paginatedEvents.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No events found.
          </div>
        )}
      </div>
    </section>
  );
}
