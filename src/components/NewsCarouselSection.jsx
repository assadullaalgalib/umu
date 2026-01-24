import { useState, useEffect } from 'react';
import { newsAPI } from '../services/dataService';

const newsData = [
  {
    "id": 1,
    "title": "Latest Innovation in Islamic Education",
    "date": "2026-01-15",
    "author": "Dr. Ahmed Hassan",
    "summary": "Discovering new ways to teach Islamic values in modern society",
    "content": "In recent years, educational methodologies have evolved significantly. Our organization is pioneering new approaches to Islamic education that blend traditional teachings with modern pedagogical techniques.",
    "image": "/assets/news-01.jpg",
    "featured": true,
    "enabled": true,
    "category": "education",
    "views": 1250,
    "likes": 342
  },
  {
    "id": 2,
    "title": "ATR Innovations Launches Community Support Program",
    "date": "2026-01-10",
    "author": "Media Team",
    "summary": "New initiative to support underprivileged families in Dhaka",
    "content": "We are proud to announce the launch of our comprehensive community support program. This initiative aims to provide financial assistance, educational support, and healthcare services to families in need.",
    "image": "/assets/news-02.jpg",
    "featured": true,
    "enabled": true,
    "category": "community",
    "views": 2100,
    "likes": 567
  },
  {
    "id": 3,
    "title": "Tech Skills Training Now Open for Applications",
    "date": "2026-01-05",
    "author": "HR Department",
    "summary": "Free training program for aspiring tech professionals",
    "content": "We are offering free technology skills training covering web development, digital marketing, and data analysis. This program is open to all passionate learners aged 18-35.",
    "image": "/assets/news-03.jpg",
    "featured": false,
    "enabled": true,
    "category": "training",
    "views": 3450,
    "likes": 892
  },
  {
    "id": 4,
    "title": "Success Stories: Lives Changed Through Our Programs",
    "date": "2025-12-28",
    "author": "Success Stories Team",
    "summary": "Read how our initiatives have transformed communities",
    "content": "Meet the individuals whose lives have been positively impacted by our programs. From students who became entrepreneurs to families who found stability, these stories inspire us to do more.",
    "image": "/assets/news-04.jpg",
    "featured": false,
    "enabled": true,
    "category": "stories",
    "views": 1890,
    "likes": 523
  }
];

function NewsCarouselSection({ onOpenModal = () => {}, onNavigate = () => {} }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    try {
      const allNews = newsData; // Using local data instead of API call
      const enabledNews = allNews.filter(n => n.enabled === true);
      setArticles(enabledNews.slice(0, 4)); // Show first 4
    } catch (err) {
      console.error('Error loading news:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadNews, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleViewAllNews = () => {
    window.location.href = '/news';
  };

  if (loading) {
    return (
      <section className="py-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading news...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-primary">
            News & Updates
          </h2>
          <button
            onClick={handleViewAllNews}
            className="text-primary font-bold hover:text-gold transition-colors text-sm"
          >
            Read All News →
          </button>
        </div>

        {/* Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No news articles available yet.</p>
            </div>
          ) : (
            <div id="news-carousel" className="flex gap-6 overflow-x-auto snap-x pb-4">
              {articles.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-72 sm:w-80 bg-white rounded-xl shadow-md overflow-hidden snap-center cursor-pointer hover:-translate-y-1 transition-transform border border-gray-100 flex flex-col"
                  onClick={() => onOpenModal('news', item)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      onError={(e) =>
                        (e.target.src =
                          'https://placehold.co/800x500?text=' + encodeURIComponent(item.title))
                      }
                      className="w-full h-full object-cover"
                      alt={item.title}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-gold font-bold text-xs uppercase mb-2">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                    <h4 className="font-bold text-primary text-lg mb-2 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default NewsCarouselSection;
