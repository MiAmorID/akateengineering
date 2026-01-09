import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  category: string;
  title: string;
}

const GallerySection = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  // Placeholder images configuration
  const placeholderImages: GalleryImage[] = [
    // Products (8)
    { id: '1', src: 'https://via.placeholder.com/400x400?text=Product+1', category: 'products', title: 'Product 1' },
    { id: '2', src: 'https://via.placeholder.com/400x400?text=Product+2', category: 'products', title: 'Product 2' },
    { id: '3', src: 'https://via.placeholder.com/400x400?text=Product+3', category: 'products', title: 'Product 3' },
    { id: '4', src: 'https://via.placeholder.com/400x400?text=Product+4', category: 'products', title: 'Product 4' },
    { id: '5', src: 'https://via.placeholder.com/400x400?text=Product+5', category: 'products', title: 'Product 5' },
    { id: '6', src: 'https://via.placeholder.com/400x400?text=Product+6', category: 'products', title: 'Product 6' },
    { id: '7', src: 'https://via.placeholder.com/400x400?text=Product+7', category: 'products', title: 'Product 7' },
    { id: '8', src: 'https://via.placeholder.com/400x400?text=Product+8', category: 'products', title: 'Product 8' },
    // Services (8)
    { id: '9', src: 'https://via.placeholder.com/400x400?text=Service+1', category: 'services', title: 'Service 1' },
    { id: '10', src: 'https://via.placeholder.com/400x400?text=Service+2', category: 'services', title: 'Service 2' },
    { id: '11', src: 'https://via.placeholder.com/400x400?text=Service+3', category: 'services', title: 'Service 3' },
    { id: '12', src: 'https://via.placeholder.com/400x400?text=Service+4', category: 'services', title: 'Service 4' },
    { id: '13', src: 'https://via.placeholder.com/400x400?text=Service+5', category: 'services', title: 'Service 5' },
    { id: '14', src: 'https://via.placeholder.com/400x400?text=Service+6', category: 'services', title: 'Service 6' },
    { id: '15', src: 'https://via.placeholder.com/400x400?text=Service+7', category: 'services', title: 'Service 7' },
    { id: '16', src: 'https://via.placeholder.com/400x400?text=Service+8', category: 'services', title: 'Service 8' },
  ];

  // Initialize images on mount
  useEffect(() => {
    const allImages = [...placeholderImages];
    setImages(allImages);
    
    // Extract unique categories
    const uniqueCategories = Array.from(new Set(allImages.map(img => img.category)));
    setCategories(uniqueCategories);
    
    // Set initial filter to all
    setFilteredImages(allImages);
  }, []);

  // Filter images based on active filter
  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    if (filter === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category === filter));
    }
  };

  // Handle lightbox navigation
  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages.length]);

  // Handle touch/swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Gallery
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <button
            onClick={() => handleFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105 capitalize ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => setSelectedImageIndex(index)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold text-lg">{image.title}</p>
                  <p className="text-sm text-gray-200 capitalize">{image.category}</p>
                </div>
              </div>

              {/* View Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No images message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 text-white hover:bg-white/20 p-2 rounded-full transition-all"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-4xl w-full h-auto flex flex-col items-center justify-center animate-in scale-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main Image */}
            <img
              src={filteredImages[selectedImageIndex].src}
              alt={filteredImages[selectedImageIndex].title}
              className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
            />

            {/* Image Info */}
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImageIndex].title}</h3>
              <p className="text-sm text-gray-300 capitalize mb-4">{filteredImages[selectedImageIndex].category}</p>
              <p className="text-sm text-gray-400">
                {selectedImageIndex + 1} / {filteredImages.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <div className="flex gap-4 mt-8">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all transform hover:scale-110 backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all transform hover:scale-110 backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}

            {/* Navigation Info */}
            <p className="text-gray-400 text-sm mt-4">
              Use arrow keys to navigate • Swipe on mobile • ESC to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
