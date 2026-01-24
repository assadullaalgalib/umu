import { useState } from 'react';
import Pagination from './Pagination';

const galleryData = [
  {
    "id": 1,
    "title": "Conference 2018 ",
    "image": "/assets/gallery-01.jpg",
    "thumbnail": "/assets/gallery-01-thumb.jpg",
    "description": "Highlights from our annual conference",
    "category": "events",
    "date": "2025-11-15",
    "enabled": true,
    "featured": true,
    "uploadedBy": "Admin",
    "tags": ["conference", "2018", "gathering"]
  },
  {
    "id": 2,
    "title": "Price ceremony Program",
    "image": "/assets/gallery-02.jpg",
    "thumbnail": "/assets/gallery-02-thumb.jpg",
    "description": "Our team engaging with the community",
    "category": "community",
    "date": "2025-10-20",
    "enabled": true,
    "featured": true,
    "uploadedBy": "Admin",
    "tags": ["community", "outreach", "volunteer"]
  },
  {
    "id": 3,
    "title": "Anti-terrorism Program",
    "image": "/assets/gallery-03.jpg",
    "thumbnail": "/assets/gallery-03-thumb.jpg",
    "description": "Students learning in our workshop",
    "category": "education",
    "date": "2025-09-10",
    "enabled": true,
    "featured": false,
    "uploadedBy": "Admin",
    "tags": ["education", "workshop", "learning"]
  },
  {
    "id": 4,
    "title": "Al-AQSA grand Mufti receaptions",
    "image": "/assets/gallery-04.jpg",
    "thumbnail": "/assets/gallery-04-thumb.jpg",
    "description": "Our dedicated team at the annual gathering",
    "category": "team",
    "date": "2025-08-15",
    "enabled": true,
    "featured": false,
    "uploadedBy": "Admin",
    "tags": ["team", "event", "celebration"]
  },
  {
    "id": 5,
    "title": "Grand Mufti of  Al-AQSA giveing chest",
    "image": "/assets/gallery-05.jpg",
    "thumbnail": "/assets/gallery-05-thumb.jpg",
    "description": "Annual charity drive supporting local causes",
    "category": "charity",
    "date": "2025-07-22",
    "enabled": true,
    "featured": false,
    "uploadedBy": "Admin",
    "tags": ["charity", "donation", "community"]
  }
]

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  // const [galleryData, setGalleryData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // const loadGallery = async () => {
  //     try {
  //       const allGallery = galleryData; //await galleryAPI.getAllGallery();
  //       const enabledGallery = allGallery.filter(g => g.enabled === true);
  //       setGalleryData(enabledGallery.slice(0, 7)); // Show first 7
  //     } catch (err) {
  //       console.error('Error loading gallery:', err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  
  // useEffect(() => {
  //   loadGallery();
  // }, []);

  
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedGallery = galleryData.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  //  if (loading || !galleryData) {
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
