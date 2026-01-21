import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { galleryAPI } from '../services/dataService';

// const galleryData = [
//   { id: 1, title: "Beautiful Islamic Calligraphy", image: "assets/gallery-01.jpg" },
//   { id: 2, title: "Historic Mosque Architecture", image: "assets/gallary-02.jpg" },
//   { id: 3, title: "Quranic Verses Display", image: "assets/gallary-03.jpg" },
//   { id: 4, title: "Islamic Cultural Festival", image: "assets/gallary-04.jpg" },
//   { id: 5, title: "Grand Mosque Interior", image: "assets/gallary-05.jpg" },
//   { id: 6, title: "Ramadan Celebrations", image: "assets/gallay-06.jpg" },
//   { id: 7, title: "Islamic Art & Patterns", image: "assets/gallary-07.jpg" },
//   { id: 8, title: "Ummah Unity Event", image: "assets/gallary-08.jpg" },
//   { id: 9, title: "Quran Competition Finals", image: "assets/gallary-09.jpg" },
//   { id: 10, title: "Mosque Dome & Minarets", image: "assets/gallay-10.jpg" },
//   { id: 11, title: "Islamic Educational Programs", image: "assets/gallary-11.jpg" },
//   { id: 12, title: "Historical Islamic Manuscripts", image: "assets/gallry-14.jpg" },
//   { id: 13, title: "Cultural Heritage Preservation", image: "assets/gallery-01.jpg" },
//   { id: 14, title: "Islamic Geometric Art", image: "assets/gallary-02.jpg" },
//   { id: 15, title: "Eid Festival Gathering", image: "assets/gallary-03.jpg" },
//   { id: 16, title: "Beautiful Islamic Tiles", image: "assets/gallary-04.jpg" },
//   { id: 17, title: "Halal Expo Exhibition", image: "assets/gallary-05.jpg" },
//   { id: 18, title: "Islamic Science & Innovation", image: "assets/gallay-06.jpg" },
//   { id: 19, title: "Community Service Initiative", image: "assets/gallary-07.jpg" },
//   { id: 20, title: "Islamic Fashion Week", image: "assets/gallary-08.jpg" },
//   { id: 21, title: "Mosque Courtyard Evening", image: "assets/gallary-09.jpg" },
//   { id: 22, title: "Islamic Knowledge Gathering", image: "assets/gallay-10.jpg" },
//   { id: 23, title: "Sufi Spiritual Music", image: "assets/gallary-11.jpg" },
//   { id: 24, title: "Islamic Calligraphy Workshop", image: "assets/gallry-14.jpg" },
//   { id: 25, title: "Global Muslim Solidarity", image: "assets/gallery-01.jpg" },
//   { id: 26, title: "Young Scholars Discussion", image: "assets/gallary-02.jpg" },
//   { id: 27, title: "Islamic Architecture Tour", image: "assets/gallary-03.jpg" },
//   { id: 28, title: "Community Iftar Gathering", image: "assets/gallary-04.jpg" },
//   { id: 29, title: "Islamic Heritage Museum", image: "assets/gallary-05.jpg" },
//   { id: 30, title: "Unity in Diversity", image: "assets/gallay-06.jpg" },
// ];

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadGallery = async () => {
      try {
        const allGallery = await galleryAPI.getAllGallery();
        const enabledGallery = allGallery.filter(g => g.enabled === true);
        setGalleryData(enabledGallery.slice(0, 7)); // Show first 7
      } catch (err) {
        console.error('Error loading gallery:', err);
      } finally {
        setLoading(false);
      }
    };
  
  useEffect(() => {
    loadGallery();
  }, []);

  
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedGallery = galleryData.slice(
    startIdx,
    startIdx + itemsPerPage
  );

   if (loading || !galleryData) {
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
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="opacity-80 mt-2">
          Moments captured from around the world
        </p>
      </div>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] mb-12">
          {paginatedGallery.map((item, index) => {
            const spanClass =
              index % 5 === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1';
            return (
              <div
                key={item.id}
                className={`${spanClass} relative group overflow-hidden rounded-xl cursor-pointer`}
              >
                <img
                  src={item.image}
                  onError={(e) =>
                    (e.target.src =
                      'https://placehold.co/600x600?text=Image+Unavailable')
                  }
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-center p-2">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <Pagination
          total={galleryData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </section>
  );
}
