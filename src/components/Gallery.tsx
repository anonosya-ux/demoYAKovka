"use client";

import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) setSelectedIndex((selectedIndex + 1) % images.length);
  };

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {images.map((src, index) => (
          <div 
            key={index}
            onClick={() => openLightbox(index)}
            style={{ 
              position: 'relative', 
              aspectRatio: '4/3', 
              borderRadius: 'var(--radius)', 
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="hover-lift"
          >
            <Image 
              src={src} 
              alt={`Фото ${index + 1}`} 
              fill 
              style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} 
              className="gallery-img"
            />
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hover-lift:hover .gallery-img { transform: scale(1.05); }
      `}} />

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          backgroundColor: 'rgba(0,0,0,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(10px)'
        }} onClick={closeLightbox}>
          <button style={{ position: 'absolute', top: '2rem', right: '2rem', color: '#fff', zIndex: 101 }} onClick={closeLightbox}>
            <X size={40} />
          </button>
          
          <button style={{ position: 'absolute', left: '2rem', color: '#fff', zIndex: 101 }} onClick={showPrev}>
            <ChevronLeft size={48} />
          </button>

          <div style={{ position: 'relative', width: '80vw', height: '80vh' }} onClick={e => e.stopPropagation()}>
            <Image 
              src={images[selectedIndex]} 
              alt={`Увеличенное фото ${selectedIndex + 1}`} 
              fill 
              style={{ objectFit: 'contain' }} 
              priority
            />
          </div>

          <button style={{ position: 'absolute', right: '2rem', color: '#fff', zIndex: 101 }} onClick={showNext}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </>
  );
}
