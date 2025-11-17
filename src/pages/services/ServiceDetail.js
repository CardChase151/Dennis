import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Sofa, Droplets, Sparkles, Wrench, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';
import './ServiceDetail.css';

const serviceData = {
  upholstery: {
    title: 'Upholstery Cleaning',
    icon: Sofa,
    tagline: 'Restore Freshness & Beauty to Your Furniture',
    description: 'Professional deep steam cleaning for all types of upholstery. We specialize in fabric care, stain removal, and odor elimination to bring your furniture back to life.',
    services: [
      'Deep steam cleaning for all fabric types',
      'Advanced stain removal techniques',
      'Odor elimination and deodorization',
      'Fabric protection treatments',
      'Pet stain and odor treatment',
      'Leather cleaning and conditioning',
      'Scotchgard protection application',
      'Furniture restoration services'
    ]
  },
  'steam-cleaning': {
    title: 'Steam Cleaning',
    icon: Droplets,
    tagline: 'Deep Clean Carpets & Floors with Powerful Steam',
    description: 'High-powered steam cleaning that penetrates deep into carpet fibers and floor surfaces. Our process eliminates dirt, allergens, bacteria, and tough stains.',
    services: [
      'Hot water extraction carpet cleaning',
      'Deep sanitization and disinfection',
      'Allergen and bacteria removal',
      'Pet odor and stain treatment',
      'Scotchgard carpet protection',
      'Traffic area treatment',
      'Staircase cleaning',
      'Area rug cleaning'
    ]
  },
  'tile-grout': {
    title: 'Tile & Grout Cleaning',
    icon: Sparkles,
    tagline: 'Restore the Original Beauty of Your Tile',
    description: 'Specialized cleaning and restoration for tile and grout surfaces. We use professional-grade equipment to remove years of built-up dirt and grime.',
    services: [
      'Deep grout line cleaning',
      'Tile surface restoration',
      'Grout color sealing',
      'Mold and mildew removal',
      'Hard water stain removal',
      'Floor polishing and buffing',
      'Grout repair and resealing',
      'Natural stone cleaning'
    ]
  },
  other: {
    title: 'Other Services',
    icon: Wrench,
    tagline: 'Additional Professional Cleaning Solutions',
    description: 'We offer a comprehensive range of additional cleaning services to meet all your needs. From mattresses to air ducts, we have you covered.',
    services: [
      'Mattress deep cleaning',
      'Air duct cleaning',
      'Dryer vent cleaning',
      'Water damage restoration',
      'Odor removal services',
      'RV and boat interior cleaning',
      'Auto interior detailing',
      'Commercial facility cleaning'
    ]
  }
};

function ServiceDetail() {
  const { service } = useParams();
  const data = serviceData[service];
  const Icon = data?.icon;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [zoom, setZoom] = useState(1);

  // Mock images - will be replaced with Supabase images later
  const mockImages = Array(10).fill(null).map((_, i) => ({
    id: i,
    url: `https://via.placeholder.com/800x600/1a3a5c/ffffff?text=Service+Photo+${i + 1}`,
    thumbnail: `https://via.placeholder.com/300x200/2d5a87/ffffff?text=Photo+${i + 1}`
  }));

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    setZoom(1);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setZoom(1);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % mockImages.length);
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + mockImages.length) % mockImages.length);
    setZoom(1);
  };

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.5, 3));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.5, 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line
  }, [lightboxOpen]);

  if (!data) {
    return <div className="container py-5"><h2>Service not found</h2></div>;
  }

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero gradient-bg">
        <div className="container hero-content text-center">
          <div className="service-hero-icon">
            {Icon && <Icon size={64} />}
          </div>
          <h1 className="fade-in">{data.title}</h1>
          <p className="service-tagline fade-in delay-1">{data.tagline}</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="service-description py-5">
        <div className="container">
          <div className="description-card card">
            <h2 className="mb-3">What We Offer</h2>
            <p className="mb-4">{data.description}</p>
            <ul className="services-list">
              {data.services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="service-area py-4">
        <div className="container">
          <div className="area-card card text-center">
            <h3 className="mb-3">Serving Orange County & Beyond</h3>
            <p>Proudly serving Orange County, California and surrounding areas.</p>
            <p className="mt-2"><strong>Willing to travel within 30 miles</strong></p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="photo-gallery py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Our Work</h2>
          <div className="gallery-grid">
            {mockImages.map((img, index) => (
              <div
                key={img.id}
                className="gallery-item"
                onClick={() => openLightbox(index)}
              >
                <img src={img.thumbnail} alt={`${data.title} ${index + 1}`} />
                <div className="gallery-overlay">
                  <ZoomIn size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={32} />
            </button>

            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <ChevronLeft size={40} />
            </button>

            <div className="lightbox-image-container">
              <img
                src={mockImages[currentImage].url}
                alt={`${data.title} ${currentImage + 1}`}
                style={{ transform: `scale(${zoom})` }}
              />
            </div>

            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <ChevronRight size={40} />
            </button>

            <div className="lightbox-controls">
              <button onClick={zoomOut} disabled={zoom <= 1}>
                <ZoomOut size={20} />
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button onClick={zoomIn} disabled={zoom >= 3}>
                <ZoomIn size={20} />
              </button>
            </div>

            <div className="lightbox-counter">
              {currentImage + 1} / {mockImages.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="service-cta gradient-bg py-5">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle mb-4">
            Call us today for a free consultation and quote
          </p>
          <a href="tel:949-351-0796" className="btn btn-primary">
            Call 949-351-0796
          </a>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
