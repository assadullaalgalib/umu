import { useState } from 'react';
import Pagination from './Pagination';

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
  },
  {
    "id": 5,
    "title": "Heavy World Conscience in the Cries of the Innocent",
    "date": "2026-01-27",
    "author": "United Muslim Ummah",
    "summary": "The ongoing violence in Gaza is severely affecting children and civilians, shaking global conscience",
    "content": "The ongoing violence and military operations in Gaza Strip are increasing the suffering of ordinary people day by day. Especially the pain and cries of children are shaking the world conscience. Terrified faces amidst the ruins, the cries of injured children, and the pain of losing family—these scenes are today a reflection of a horrific humanitarian crisis.\n\nIn various photos that have been circulating recently, it can be seen that countless children are being injured due to shelling and attacks, some are losing parents, some are losing homes. School-going children don't have books and notebooks in their hands today, they have fear and uncertainty. Due to lack of safe shelter, many families are forced to spend days under the open sky.\n\nInternational human rights organizations are repeatedly warning that international humanitarian laws are being violated in this conflict and children's protection is under extreme threat. The crisis of food, water, medical care and shelter is becoming more acute day by day. Hospitals are facing shortage of necessary medicines and medical equipment.\n\nHuman rights activists are calling on world leaders and international community to immediately stop the violence and ensure humanitarian assistance. At the same time, demands have been raised to strengthen initiatives for ceasefire and peaceful solutions.\n\nMay the tears in the eyes of innocent children and the suffering of helpless people not remain confined to pictures only—this is a difficult question for world humanity. Only the establishment of peace and justice can show the way to liberation from this humanitarian disaster.",
    "image": "/assets/gallery-066.jpg",
    "featured": true,
    "enabled": true,
    "category": "humanitarian",
    "views": 2500,
    "likes": 890
  }
];

export default function NewsPage({ onOpenModal = () => {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  // const [newsData, setNewsData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const loadNews = async () => {
  //     try {
  //       const allNews = await newsAPI.getAllNews();
  //       const enabledNews = allNews.filter(n => n.enabled === true);
  //       setNewsData(enabledNews.slice(0, 4)); // Show first 4
  //     } catch (err) {
  //       console.error('Error loading news:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  //   useEffect(() => {
  //     loadNews();
  //   }, []);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedNews = newsData.slice(startIdx, startIdx + itemsPerPage);

  // if (loading) {
  //   return (
  //     <section className="py-24">
  //       <div className="text-center">
  //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
  //         <p className="text-gray-600">Loading news...</p>
  //       </div>
  //     </section>
  //   );
  // }

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
