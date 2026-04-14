"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";

export default function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Different elements move at different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  return (
    <section ref={containerRef} className="section" style={{ backgroundColor: 'var(--background)', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <RevealText el="h2" text="Атмосфера отдыха" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--primary)' }} />
          <p style={{ color: 'var(--muted-foreground)', marginTop: '1rem', fontSize: '1.125rem' }}>Погрузитесь в красоту алтайской природы</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '1rem',
          minHeight: '600px',
          height: '60vh',
          position: 'relative'
        }}>
          
          {/* Main Large Image */}
          <motion.div 
            style={{ 
              gridColumn: '1 / 8', 
              gridRow: '1 / 3', 
              y: y1,
              scale: scale,
              zIndex: 1,
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
          >
            <img 
              src="/images/gallery/gallery_1.jpg" 
              alt="Отель Яковка" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Fast Moving Image */}
          <motion.div 
            style={{ 
              gridColumn: '8 / 13', 
              gridRow: '1 / 2', 
              y: y2,
              zIndex: 3,
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
              marginTop: '4rem',
              marginLeft: '-2rem'
            }}
          >
            <img 
              src="/images/gallery/gallery_2.jpg" 
              alt="Интерьер Яковки" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Slow/Reverse Moving Image */}
          <motion.div 
            style={{ 
              gridColumn: '7 / 12', 
              gridRow: '2 / 3', 
              y: y3,
              zIndex: 2,
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              marginTop: '-4rem'
            }}
          >
            <img 
              src="/images/gallery/gallery_3.jpg" 
              alt="Горнолыжный склон Яковка" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
