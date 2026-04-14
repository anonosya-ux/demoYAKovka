"use client";

import Link from "next/link";
import { Users, BedDouble, ChevronRight } from "lucide-react";
import type { RoomType } from "@/data/rooms";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface RoomCardProps {
  room: RoomType;
}

export default function RoomCard({ room }: RoomCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for capturing mouse position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Smooth springs for rotation
  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Map mouse position to rotation values (-7 to +7 degrees)
  const rotateX = useTransform(smoothY, [0, 1], [7, -7]);
  const rotateY = useTransform(smoothX, [0, 1], [-7, 7]);

  // Glare effect mapping based on mouse position
  const glareX = useTransform(smoothX, [0, 1], [-100, 200]);
  const glareY = useTransform(smoothY, [0, 1], [-100, 200]);
  const glareOpacity = useTransform(smoothX, [0, 0.5, 1], [0, 0.15, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate relative mouse position (0 to 1)
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    x.set(relX);
    y.set(relY);
  };

  const handleMouseLeave = () => {
    // Reset to center
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX, 
        rotateY,
        transformPerspective: 1200,
        borderRadius: '2rem',
        height: '100%',
        willChange: 'transform',
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="glass-card room-card-inner" style={{ 
        borderRadius: '2rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        border: '1px solid rgba(255, 255, 255, 0.8)'
      }}>
        
        {/* Dynamic Glare Overlay */}
        <motion.div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%)',
            opacity: glareOpacity,
            x: glareX,
            y: glareY,
            pointerEvents: 'none',
            zIndex: 10,
            mixBlendMode: 'overlay'
          }}
        />

        {/* Image Area */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden', backgroundColor: 'var(--muted)' }}>
          {/* Subtle parallax scale on image */}
          <motion.img 
            src={room.images[0]} 
            alt={room.name} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              scale: 1.05
            }}
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', boxShadow: 'var(--shadow-sm)', zIndex: 11 }}>
            Популярно
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1, transform: 'translateZ(30px)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>
            {room.name}
          </h3>
          
          <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', marginBottom: '1.5rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {room.description}
          </p>

          {/* Features List */}
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--foreground)' }}>
              <Users size={16} style={{ color: 'var(--accent)' }} />
              <span>{room.capacity}</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--foreground)' }}>
              <BedDouble size={16} style={{ color: 'var(--accent)' }} />
              <span>{room.beds}</span>
            </li>
          </ul>

          {/* Buttons */}
          <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <Link href={`/rooms/${room.slug}`} className="btn hover:bg-white" style={{ 
              backgroundColor: 'transparent', 
              border: '1px solid var(--border)',
              fontSize: '0.875rem',
              transition: 'all 0.3s'
            }}>
              Подробнее
            </Link>
            <Link href="/booking" className="btn btn-primary" style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem', transform: 'translateZ(10px)' }}>
              Бронь <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
