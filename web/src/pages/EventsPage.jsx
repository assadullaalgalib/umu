import { useState, useEffect } from "react";
import { eventsAPI } from "../services/dataService";
import Header from "../components/Header";

export function EventsPage() {
  const [filter, setFilter] = useState("all");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadEvents = async () => {
    try {
      setLoading(true);
      // Always get fresh data from localStorage/JSON
      const allEvents = await eventsAPI.getAllEvents();
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