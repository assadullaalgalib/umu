import { useEffect, useState } from 'react';
import Pagination from './Pagination';

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);  const [selectedImage, setSelectedImage] = useState(null);  const itemsPerPage = 20;

  useEffect(() => {
    const loadGallery = async () => {
      try {
        console.log('Fetching gallery data...');
        const response = await fetch('/data/gallery.json');
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Gallery data loaded:', data.length, 'items');
        setGalleryData(data);
      } catch (err) {
        console.error('Error loading gallery:', err);
        // Fallback to empty array
        setGalleryData([]);
      } finally {
        setLoading(false);
      }
    };
    loadGallery();
  }, []);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedGallery = galleryData.slice(
    startIdx,
    startIdx + itemsPerPage
  );

  if (loading || !galleryData.length) {
    return (
      <section className="container mx-auto px-4 py-24 max-w-6xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
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
            return (
              <div
                key={item.id}
                className="col-span-1 row-span-1 relative group overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(item)}
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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors text-xl font-bold"
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              onError={(e) =>
                (e.target.src = 'https://placehold.co/800x600?text=Image+Unavailable')
              }
              className="w-full h-full object-contain rounded-lg"
              alt={selectedImage.title}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold">{selectedImage.title}</h3>
              <p className="text-sm opacity-80 mt-1">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}