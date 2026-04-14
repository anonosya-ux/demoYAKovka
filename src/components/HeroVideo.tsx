"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function HeroVideo() {
  const ref = useRef(null);
  
  // Parallax configuration
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} style={{ 
      position: 'relative', 
      height: '100vh', 
      minHeight: '600px',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: backgroundY, position: 'absolute', inset: -100, zIndex: -2 }}
        transition={{ ease: "linear" }}
      >
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/videos/hero.mov" type="video/mp4" />
          {/* Fallback image */}
          <img src="/images/gallery/gallery_1.jpg" alt="Отель Яковка" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </video>
      </motion.div>

      {/* Dark Overlay with Gradient */}
      <div className="hero-gradient" style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.6 }}></div>

      {/* Parallax Content Container */}
      <motion.div 
        style={{ y: textY, opacity }} 
        className="container" 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Liquid Glass Content Wrapper */}
        <div className="glass-card" style={{
          maxWidth: '56rem',
          margin: '0 auto',
          padding: '4rem 2rem',
          borderRadius: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            fontWeight: 700, 
            marginBottom: '1rem',
            textShadow: '0 8px 24px rgba(0,0,0,0.5)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--primary-foreground)'
          }}>
            Загородный отель<br/>
            <span style={{ color: 'var(--accent)' }}>«Яковка»</span>
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
            maxWidth: '650px', 
            margin: '0 auto 2.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            opacity: 0.95,
            fontWeight: 400,
            color: "white"
          }} className="text-balance">
            Элегантный отдых у подножия живописной горы в Белокурихе. Погружение в сибирскую природу с абсолютным комфортом.
          </p>

          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <MagneticButton magneticStrength={25}>
              <Link
                href="/rooms"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  borderRadius: '2rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                className="hover:scale-105 hover:shadow-lg"
              >
                Выбрать номер <ArrowRight size={20} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity, position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', opacity: 0.7 }}
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ width: '30px', height: '50px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '9999px', position: 'relative' }}
        >
          <div style={{ width: '6px', height: '6px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)' }}></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
