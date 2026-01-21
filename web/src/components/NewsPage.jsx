import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { newsAPI } from '../services/dataService';

// const generateNewsData = (count) => {
//   const newsImages = [
//     "assets/gallary-02.jpg",
//     "assets/gallary-03.jpg",
//     "assets/gallary-04.jpg",
//     "assets/gallary-05.jpg",
//     "assets/gallay-06.jpg",
//     "assets/gallary-07.jpg",
//     "assets/gallary-08.jpg",
//     "assets/gallary-09.jpg",
//     "assets/gallay-10.jpg",
//     "assets/gallary-11.jpg",
//   ];

//   return Array.from({ length: count }, (_, i) => ({
//     id: i + 1,
//     title: `News Title ${i + 1}: Global Initiative`,
//     date: new Date(2026, i % 12, ((i * 3) % 28) + 1).toLocaleDateString(
//       "en-US",
//       { month: "short", day: "numeric", year: "numeric" }
//     ),
//     image: newsImages[i % newsImages.length],
//     summary: `Summary for News ${
//       i + 1
//     }. This is a brief description of the content shown in the card view.`,
//     content: `<p>This is the full detailed content for <strong>News ${
//       i + 1
//     }</strong>.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,
//   }));
// };

// const newsData = generateNewsData(25);

export default function NewsPage({ onOpenModal = () => {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
      try {
        const allNews = await newsAPI.getAllNews();
        const enabledNews = allNews.filter(n => n.enabled === true);
        setNewsData(enabledNews.slice(0, 4)); // Show first 4
      } catch (err) {
        console.error('Error loading news:', err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      loadNews();
    }, []);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedNews = newsData.slice(startIdx, startIdx + itemsPerPage);

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
    <section className="min-h-screen">
      <div className="bg-gray-100 py-12 text-center border-b border-gray-200">
        <h1 className="text-4xl font-black text-primary">News Portal</h1>
        <p className="text-gray-500 mt-2">Latest updates from the Ummah</p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-300 cursor-pointer h-full flex flex-col"
              onClick={() => onOpenModal('news', news)}
            >
              <img
                src={news.image}
                onError={(e) =>
                  (e.target.src =
                    'https://placehold.co/800x500?text=Image+Unavailable')
                }
                className="w-full h-48 object-cover"
                alt={news.title}
              />
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-gold font-bold text-xs uppercase mb-2">
                  {news.date}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3 leading-tight">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                  {news.summary}
                </p>
                <span className="text-primary font-bold text-sm mt-auto">
                  Read Full Story →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          total={newsData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
