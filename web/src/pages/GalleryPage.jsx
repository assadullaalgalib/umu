import { useState, useEffect } from "react";
import { galleryAPI } from "../services/dataService";

export function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadGallery = async () => {
    try {
      setLoading(true);
      const allGallery = await galleryAPI.getAllGallery();
      const enabledItems = allGallery.filter(g => g.enabled === true);
      setImages(enabledItems);
      setError(null);
    } catch (err) {
      setError('Failed to load gallery');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGallery();
    
    // Poll for changes every 2 seconds
    const interval = setInterval(loadGallery, 2000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <section id="gallery" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="gallery" className="page-section">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="page-section">
      <div className="bg-primary py-12 text-white text-center">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="opacity-80 mt-2">
          Moments captured from our activities ({images.length} items)
        </p>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {images.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No gallery items available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((item) => (
              <div
                key={item.id}
                className="group relative h-[200px] bg-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-all"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=' + encodeURIComponent(item.title);
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-end p-4">
                  <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default GalleryPage;