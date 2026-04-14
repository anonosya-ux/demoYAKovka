"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealText from "./RevealText";

interface PageHeroProps {
  title: string;
  description: string;
  bgImage: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, description, bgImage, children }: PageHeroProps) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} style={{ 
      position: 'relative', 
      height: '60vh', 
      minHeight: '400px',
      maxHeight: '600px',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden',
      marginTop: '0'
    }}>
      
      {/* Background Parallax Layer */}
      <motion.div 
        style={{ y: backgroundY, position: 'absolute', inset: -100, zIndex: -2 }}
        transition={{ ease: "linear" }}
      >
        <img src={bgImage} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </motion.div>

      {/* Dark Overlay with Gradient */}
      <div className="hero-gradient" style={{ position: 'absolute', inset: 0, zIndex: -1, opacity: 0.7 }}></div>

      {/* Parallax Content Container */}
      <motion.div 
        style={{ y: textY, opacity }} 
        className="container" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div style={{
          maxWidth: '56rem',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '6rem'
        }}>
          <RevealText 
            el="h1" 
            text={title}
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              fontWeight: 700, 
              marginBottom: '1rem',
              textShadow: '0 8px 24px rgba(0,0,0,0.6)',
              lineHeight: 1.1,
              color: '#ffffff'
            }} 
          />
          
          {description && (
            <div style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', 
              maxWidth: '650px', 
              margin: '0 auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              opacity: 0.9,
              fontWeight: 400,
              color: "#f8f9fa"
            }}>
              <RevealText el="p" text={description} staggerDelay={0.02} style={{ justifyContent: 'center' }} />
            </div>
          )}
          
          {children && (
            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              {children}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
