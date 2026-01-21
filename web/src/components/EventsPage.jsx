import { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Modal from './Modal';
import { eventsAPI } from '../services/dataService';

// const eventsData = [
//   {
//     id: 1,
//     title: "Quran Competition 2026",
//     date: "Mar 15, 2026",
//     status: "upcoming",
//     location: "Dubai, UAE",
//     image: "assets/Event-01.jpg",
//     summary: "Annual Quran memorization and recitation competition bringing together the finest Huffaz from around the world.",
//     content: "<p>Join us for the prestigious Quran Competition 2026, a celebration of Islamic scholarship and devotion.</p><p><strong>Key Details:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Tajweed Recitation Category</li><li>Hafiz Memorization Category</li><li>Youth Category (Under 18)</li><li>Prize Fund: $500,000</li></ul><p>Contestants from 60+ countries will showcase their dedication to preserving the Quran.</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Register Now</button>",
//   },
//   {
//     id: 2,
//     title: "Quran Meaning & Tafsir Event",
//     date: "Apr 20, 2026",
//     status: "upcoming",
//     location: "Istanbul, Turkey",
//     image: "assets/event-02.jpg",
//     summary: "Deep dive into Quranic interpretation with leading Islamic scholars and Mufassiroon.",
//     content: "<p>Explore the profound meanings of the Quran with renowned Islamic scholars.</p><p><strong>Program Highlights:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Daily Tafsir Sessions</li><li>Interactive Q&A with Scholars</li><li>Workshops on Quranic Arabic</li><li>Book Launch: 'Modern Tafsir Perspectives'</li></ul><p>Duration: 5 Days | Language: Arabic, English, Urdu</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Register Now</button>",
//   },
//   {
//     id: 3,
//     title: "Islamic History & Culture Expo",
//     date: "May 10, 2026",
//     status: "ongoing",
//     location: "Cairo, Egypt",
//     image: "assets/event-03.jpg",
//     summary: "Celebrate 1400+ years of Islamic civilization through exhibitions, artifacts, and cultural performances.",
//     content: "<p>Discover the rich heritage and contributions of Islamic civilization to world culture.</p><p><strong>Exhibition Areas:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Islamic Architecture Through Ages</li><li>Scientific Achievements & Innovations</li><li>Art, Calligraphy & Craftsmanship</li><li>Literature & Poetry</li><li>Traditional Clothing & Fashion</li></ul><p>Live demonstrations, workshops, and cultural performances daily.</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Get Tickets</button>",
//   },
//   {
//     id: 4,
//     title: "Quiz Competition on Islamic Knowledge",
//     date: "Jun 05, 2026",
//     status: "upcoming",
//     location: "London, UK",
//     image: "assets/Event-01.jpg",
//     summary: "Test your Islamic knowledge in this competitive quiz covering Quran, Hadith, Islamic History, and Fiqh.",
//     content: "<p>Challenge yourself in our comprehensive Islamic knowledge quiz competition.</p><p><strong>Competition Categories:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Individual Quiz Championship</li><li>Team Category (4 members)</li><li>Youth League (Ages 12-18)</li><li>University Challenge</li></ul><p><strong>Prize Pool:</strong> $100,000 | <strong>Registration Fee:</strong> Free for youth category</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Register Now</button>",
//   },
//   {
//     id: 5,
//     title: "Mosque Architecture & Design Symposium",
//     date: "Jul 12, 2026",
//     status: "upcoming",
//     location: "Kuala Lumpur, Malaysia",
//     image: "assets/event-02.jpg",
//     summary: "Explore contemporary mosque design and restoration of historical Islamic architecture.",
//     content: "<p>A comprehensive symposium on mosque architecture combining tradition with modern sustainability.</p><p><strong>Topics Covered:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Historical Mosque Preservation</li><li>Modern Sustainable Design</li><li>Calligraphy & Interior Decoration</li><li>Community Space Integration</li></ul><p>Featuring renowned architects and heritage conservationists from around the world.</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Register Now</button>",
//   },
//   {
//     id: 6,
//     title: "Islamic Awareness & Education Movement",
//     date: "Aug 01, 2026",
//     status: "ongoing",
//     location: "Global Online",
//     image: "assets/event-03.jpg",
//     summary: "Global campaign to promote Islamic education and counter misconceptions about Islam.",
//     content: "<p>Join our international movement to educate the world about true Islamic teachings and values.</p><p><strong>Campaign Initiatives:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Online Lectures & Webinars</li><li>Educational Documentary Series</li><li>Social Media Awareness Campaign</li><li>Community Outreach Programs</li></ul><p>Participants needed for content creation, translation, and community engagement.</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Join Movement</button>",
//   },
//   {
//     id: 7,
//     title: "Halal Expo 2026",
//     date: "Sep 08, 2026",
//     status: "upcoming",
//     location: "Singapore",
//     image: "assets/Event-01.jpg",
//     summary: "World's largest halal food, beverage, cosmetics, and lifestyle products exhibition.",
//     content: "<p>Experience the growing halal industry with 500+ exhibitors from 40+ countries.</p><p><strong>Exhibition Features:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Halal Food & Beverage Showcase</li><li>Cosmetics & Personal Care</li><li>Fashion & Modest Wear</li><li>Tourism & Hospitality</li><li>Financial Services</li><li>Networking & B2B Meetings</li></ul><p>Conferences, cooking demonstrations, and product launches throughout the event.</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Book Booth</button>",
//   },
//   {
//     id: 8,
//     title: "Educational Expo: Islamic Learning Pathways",
//     date: "Oct 01, 2026",
//     status: "upcoming",
//     location: "Beirut, Lebanon",
//     image: "assets/event-02.jpg",
//     summary: "Comprehensive educational expo featuring Islamic schools, universities, and online learning platforms.",
//     content: "<p>Discover educational opportunities in Islamic and secular fields across the Muslim world.</p><p><strong>Participating Institutions:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Top Islamic Universities</li><li>International School Networks</li><li>Online Learning Platforms</li><li>Scholarship Programs</li><li>Vocational Training Centers</li></ul><p>Meet educators, get counseling, and explore scholarship opportunities.</p><button class='bg-primary text-white px-6 py-2 rounded font-bold'>Register Now</button>",
//   },
//   {
//     id: 9,
//     title: "Islamic Finance & Economics Conference",
//     date: "Oct 15, 2026",
//     status: "previous",
//     location: "Bahrain",
//     image: "assets/event-03.jpg",
//     summary: "Discuss Islamic banking, Sukuk markets, and Shariah-compliant investments.",
//     content: "<p>A pivotal gathering of Islamic finance experts and economic leaders.</p><p><strong>Key Discussions:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Digital Islamic Finance</li><li>Cryptocurrency & Blockchain in Islamic Finance</li><li>Sustainable Development Goals</li><li>Investment in Muslim Communities</li></ul>",
//   },
//   {
//     id: 10,
//     title: "Interfaith Dialogue Summit",
//     date: "Nov 05, 2026",
//     status: "previous",
//     location: "Vienna, Austria",
//     image: "assets/Event-01.jpg",
//     summary: "Building bridges between Muslim, Christian, Jewish, and other faith communities worldwide.",
//     content: "<p>A historic gathering promoting understanding and cooperation between faiths.</p><p><strong>Goals:</strong></p><ul class='list-disc pl-5 mt-2 mb-4'><li>Interfaith Peace Initiatives</li><li>Joint Humanitarian Projects</li><li>Educational Exchange Programs</li><li>Combating Extremism Together</li></ul>",
//   },
// ];

export default function EventsPage({ onOpenModal = () => {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(true);
  const [eventsData, setEventsData] = useState([]);
  const itemsPerPage = 6;

  const filteredEvents =
    filterStatus === 'all'
      ? eventsData
      : eventsData.filter((event) => event.status === filterStatus);
  
    const loadLatestEvent = async () => {
        try {
          const allEvents = await eventsAPI.getAllEvents();
          const enabledEvents = allEvents.filter(e => e.enabled === true);
          
          if (enabledEvents.length > 0) {
            setEventsData(enabledEvents);
          }
        } catch (err) {
          console.error('Error loading latest event:', err);
        } finally {
          setLoading(false);
        }
      };
    
  useEffect(() => {
    loadLatestEvent();
  }, []);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedEvents = filteredEvents.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setCurrentPage(1);
  };

  if (loading || !eventsData) {
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
