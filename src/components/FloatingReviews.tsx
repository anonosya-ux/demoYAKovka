"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  { id: 1, name: "Елена С.", text: "Потрясающее место для отдыха с семьей! Воздух чистейший, до склона Яковка буквально пара шагов. Огромное спасибо за гостеприимство.", rating: 5, date: "15 Января 2026" },
  { id: 2, name: "Дмитрий М.", text: "Тихо, уютно, очень вкусно кормят в местном кафе! Баня на дровах после катания — просто абсолютный топ. Обязательно вернемся.", rating: 5, date: "02 Марта 2026" },
  { id: 3, name: "Анна В.", text: "Шикарные виды из семейного номера! Детям понравилось, нам было тепло. Отличный загородный отель для выходных на Алтае.", rating: 5, date: "22 Декабря 2025" },
  { id: 4, name: "Сергей Т.", text: "Останавливаемся тут каждый горнолыжный сезон. Очень удобно, что есть свой прокат инвентаря и бесплатная парковка под охраной.", rating: 5, date: "10 Февраля 2026" },
  { id: 5, name: "Виктория Л.", text: "Изумительная природа и заботливый персонал. Летом шикарный открытый бассейн. Однозначно 5 звезд и наша рекомендация всем!", rating: 5, date: "05 Августа 2025" },
];

export default function FloatingReviews() {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <div style={{ 
      position: 'relative', 
      width: '100%', 
      overflow: 'hidden', 
      marginTop: '8rem', 
      marginBottom: '4rem', 
      paddingTop: '6rem', 
      paddingBottom: '6rem' 
    }}>
      
      {/* Background Ambience */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1000px',
        height: '500px',
        backgroundColor: 'rgba(209, 176, 107, 0.1)', // accent color with opacity
        borderRadius: '100%',
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: -10
      }} />
      
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 10, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center', 
        marginBottom: '4rem' 
      }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--primary)', fontWeight: 700, lineHeight: 1.2 }}>
          Отзывы Наших Гостей
        </h2>
        <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent)', margin: '1.5rem auto' }} />
        <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '42rem' }}>
          Живые эмоции и впечатления от отдыха на Горнолыжном Курорте «Яковка»
        </p>
      </div>

      {/* Endless Marquee Wrapper */}
      <div style={{ position: 'relative', display: 'flex', overflow: 'hidden', width: '100%' }}>
        {/* Shadow overlays for smooth fading edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '8rem',
          background: 'linear-gradient(to right, var(--background), transparent)',
          zIndex: 20, pointerEvents: 'none'
        }}></div>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '8rem',
          background: 'linear-gradient(to left, var(--background), transparent)',
          zIndex: 20, pointerEvents: 'none'
        }}></div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          style={{ 
            display: "flex", 
            gap: "1.5rem", 
            padding: "0 1.5rem",
            width: "max-content" 
          }}
        >
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="glass-card hover-lift"
              style={{
                padding: '2rem',
                borderRadius: '2rem',
                width: '380px',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
              }}
            >
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p style={{ 
                color: 'var(--foreground)', 
                fontSize: '1.125rem', 
                lineHeight: 1.7, 
                fontStyle: 'italic', 
                marginBottom: '2rem', 
                opacity: 0.9,
                height: '100px',
                overflow: 'hidden'
              }}>
                "{review.text}"
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'flex-end', 
                borderTop: '1px solid rgba(44, 83, 68, 0.2)', // primary color border
                paddingTop: '1rem', 
                marginTop: 'auto' 
              }}>
                <div>
                  <span style={{ fontWeight: 700, color: 'var(--primary)', display: 'block' }}>{review.name}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--primary)', opacity: 0.6, fontWeight: 500 }}>Гость курорта</span>
                </div>
                <span style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>{review.date}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
