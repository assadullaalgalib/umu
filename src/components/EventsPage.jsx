import { useState } from 'react';
import Pagination from './Pagination';

const eventsData = [
  {
    "id": 1,
    "title": "Qur'an Recitation Competition",
    "date": "2026-01-26",
    "time": "10:00 AM",
    "location": "Dhaka Convention Center",
    "description": "The Moral Impact of the 'Al-Qur'an Meaning-Based Reading Competition' Behind the Victory of DUCSU Leaders - A transformative initiative fostering ethical awareness and leadership among young minds.",
    "content": "The Moral Impact of the 'Al-Qur'an Meaning-Based Reading Competition' Behind the Victory of DUCSU Leaders<br/><br/>Dhaka University Correspondent:<br/><br/>In the recent Dhaka University Central Students' Union (DUCSU) election, several victorious student leaders have identified the 'Al-Qur'an Meaning-Based Reading Competition' as a key source of their intellectual growth, moral development, and inner self-reflection. This initiative—religious in nature yet deeply contemplative—has drawn attention for its role in nurturing ethical awareness and a sense of responsibility among young people.<br/><br/>Analysts believe that such programs at the university level not only enhance religious understanding but also prepare students for social and political responsibility.<br/><br/><strong>Qur'anic Message and the Sense of Leadership</strong><br/><br/>One of the key organizers of the Al-Qur'an Meaning-Based Reading Competition stated:<br/><br/>'Our aim was not merely for students to recite the Qur'an, but to understand its meanings and messages. Because for leadership, the most essential qualities are ethical thinking and self-discipline.'<br/><br/>Students and teachers from various higher educational institutions across the country—including the University of Dhaka, BUET, and Dhaka Medical College—participated in the competition. According to the organizers, participants were encouraged to explore the connection between Qur'anic principles and real-life challenges.<br/><br/>A participating student shared:<br/><br/>'To engage in politics or leadership, one must have a strong ideological foundation. This competition taught me that leadership means a spirit of service, standing against injustice, and working for the welfare of humanity.'<br/><br/><strong>The Connection Between Thought, Ethics, and Inner Awakening</strong><br/><br/>A section of the university's academic community believes that the Al-Qur'an Meaning-Based Reading Competition has contributed significantly to moral practice and inner awakening among students.<br/><br/>A faculty member from the Department of Islamic History and Culture at the University of Dhaka commented:<br/><br/>'A generation that understands religion thoughtfully tends to play a responsible role in society. The emergence of such students in DUCSU leadership signals a positive change.'<br/><br/>Observations among students suggest that the competition has helped cultivate discipline, empathy, and sound decision-making skills. Even in a politically turbulent environment, students are showing growing interest in practicing value-based leadership.<br/><br/><strong>Moral Direction for a New Generation</strong><br/><br/>Many university teachers and alumni believe that the Al-Qur'an Meaning-Based Reading Competition has provided a new moral and intellectual direction for young people. It has evolved beyond a purely religious activity into a training ground for principled leadership.<br/><br/>In this context, several DUCSU election winners have openly acknowledged that their experiences in various competitions and initiatives organized by non-political organizations—such as United Muslim Ummah, Dawah Association, and Dawah Circle—have strengthened their confidence, reasoning ability, and moral values.<br/><br/><strong>Conclusion</strong><br/><br/>For a long time, DUCSU elections were synonymous with political tension, conflict, and intense rivalry. However, the changes observed in recent times may be rooted in such ethical and contemplative initiatives.<br/><br/>While the Al-Qur'an Meaning-Based Reading Competition may not be a center of political influence, its light has illuminated the hearts of many young leaders igniting the lamp of justice, ideals, and morality within them.",
    "image": "/assets/Quran compt.png.webp",
    "featured": true,
    "enabled": true,
    "status": "ongoing",
    "priority": "high",
    "capacity": 300,
    "registered": 150,
    "category": "competition"
  },
  {
    "id": 2,
    "title": "Palestine Program",
    "date": "2025-12-15",
    "time": "6:00 PM",
    "location": "Community Hall",
    "description": "Educational program raising awareness about Palestine and supporting humanitarian efforts",
    "content": "An informative session about the current situation in Palestine, featuring guest speakers, documentaries, and fundraising for humanitarian aid.",
    "image": "/assets/gallery-068.jpg",
    "featured": false,
    "enabled": true,
    "status": "previous",
    "priority": "mid",
    "capacity": 200,
    "registered": 180,
    "category": "educational"
  },
  {
    "id": 3,
    "title": "Islamic Conference",
    "date": "2025-11-20",
    "time": "9:00 AM",
    "location": "Grand Ballroom",
    "description": "Annual Islamic conference discussing contemporary issues and solutions",
    "content": "Scholars and community leaders gathered to discuss pressing issues facing Muslim communities worldwide, including education, social welfare, and technological advancement.",
    "image": "/assets/gallery-070.jpg",
    "featured": true,
    "enabled": true,
    "status": "previous",
    "priority": "high",
    "capacity": 500,
    "registered": 450,
    "category": "conference"
  },
  {
    "id": 4,
    "title": "Ummah Cultural Centre",
    "date": "2025-10-10",
    "time": "2:00 PM",
    "location": "Cultural Centre",
    "description": "Opening ceremony of the new Ummah Cultural Centre facility",
    "content": "Celebrating the inauguration of our new cultural centre with traditional performances, exhibitions, and community gatherings.",
    "image": "/assets/gallery-0138.jpg",
    "featured": false,
    "enabled": true,
    "status": "previous",
    "priority": "mid",
    "capacity": 400,
    "registered": 350,
    "category": "cultural"
  },
  {
    "id": 5,
    "title": "Ummah Library",
    "date": "2025-09-05",
    "time": "11:00 AM",
    "location": "Library Building",
    "description": "Grand opening of the Ummah Library with extensive Islamic literature collection",
    "content": "The new library features thousands of books on Islamic studies, history, and contemporary issues, available for community members.",
    "image": "/assets/event-02.jpg",
    "featured": false,
    "enabled": true,
    "status": "previous",
    "priority": "low",
    "capacity": 150,
    "registered": 120,
    "category": "educational"
  },
  {
    "id": 6,
    "title": "Ummah Scholarship Program",
    "date": "2025-08-15",
    "time": "4:00 PM",
    "location": "Education Centre",
    "description": "Announcement and distribution of scholarships for deserving students",
    "content": "Recognizing academic excellence and providing financial support for students pursuing Islamic education and related fields.",
    "image": "/assets/event-03.jpg",
    "featured": false,
    "enabled": true,
    "status": "previous",
    "priority": "mid",
    "capacity": 100,
    "registered": 80,
    "category": "educational"
  },
  {
    "id": 7,
    "title": "Al-Qur'an Distribution Program",
    "date": "2025-07-20",
    "time": "10:00 AM",
    "location": "Mosque Premises",
    "description": "Mass distribution of Al-Qur'an copies to community members",
    "content": "Providing free copies of the Holy Qur'an to households and individuals, ensuring accessibility to Islamic teachings.",
    "image": "/assets/gallery-031.jpg",
    "featured": false,
    "enabled": true,
    "status": "previous",
    "priority": "low",
    "capacity": 250,
    "registered": 200,
    "category": "religious"
  },
  {
    "id": 8,
    "title": "Bangladesh Halal Expo - 2026",
    "date": "2026-05-07",
    "time": "7-9 May 2026",
    "location": "China Bangladesh Friendship Conference Center",
    "description": "Principal Organizer & Host: United Muslim Ummah Foundation. Venue: Bangladesh China Friendship Conference Center. Date: 7–8–9th of May 2026. Meeting Point of the Global Halal Economy - The largest international trade fair for halal products and services.",
    "content": "Bangladesh Halal Expo 2026 stands as a trusted meeting point of the global halal economy, bringing together international exhibitors, buyers, innovators, and policymakers on one prestigious platform. Guided by the principles of halal, ethical trade, and sustainability, the Expo reflects a shared vision of inclusive growth and responsible commerce.<br/><div class='card about-highlights-card'><h4 style='color: var(--primary-green); margin-bottom: 15px; font-size: 1.4rem;'>2026 Highlights</h4><ul style='list-style: none'><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>15,000+ sqm International Exhibition Area</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Participation from 40+ Countries</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>700+ Hosted International Buyers</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Organized in collaboration with OIC-affiliated Institutions</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Specialized Zones: NOV, Private Label &amp; SEFPEX</li><li style='margin-bottom: 15px; display: flex; align-items: center'><span style='color: var(--gold); margin-right: 10px; font-size: 1.2rem;'>✓</span>Platform for Global B2B Meetings &amp; Halal Trade Forums</li></ul></div>",
    "image": "/assets/halal_expo.png",
    "featured": true,
    "enabled": true,
    "status": "upcoming",
    "priority": "high",
    "capacity": 150,
    "registered": 98,
    "category": "networking",
    "pdf": "/documents/halal-expo-2026.pdf"
  }
];

export default function EventsPage({ onOpenModal = () => {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');
  const [pdfModal, setPdfModal] = useState({ isOpen: false, pdfUrl: null, title: null });
  // const [loading, setLoading] = useState(false);
  // const [eventsData, setEventsData] = useState([]);
  const itemsPerPage = 6;

  const openPdfModal = (pdfUrl, title) => {
    setPdfModal({ isOpen: true, pdfUrl, title });
  };

  const closePdfModal = () => {
    setPdfModal({ isOpen: false, pdfUrl: null, title: null });
  };

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
                  {event.pdf && (
                    <button
                      onClick={() => openPdfModal(event.pdf, event.title)}
                      className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-sm mb-3"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      View PDF
                    </button>
                  )}
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

      {/* PDF Modal */}
      {pdfModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closePdfModal} />
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative z-10 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-primary">{pdfModal.title} - PDF Document</h3>
              <button
                onClick={closePdfModal}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <div className="flex gap-4 mb-4">
                <a
                  href={pdfModal.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                  Open in New Tab
                </a>
                <a
                  href={pdfModal.pdfUrl}
                  download
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                  </svg>
                  Download PDF
                </a>
              </div>
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src={pdfModal.pdfUrl}
                  className="w-full h-[600px]"
                  title={`${pdfModal.title} PDF`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
