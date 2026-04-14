"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function FloatingBookBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling down, hide when at the top
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 40,
        transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.8) translateY(20px)',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <MagneticButton magneticStrength={30}>
        <Link 
          href="/booking" 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent)',
            color: '#fff',
            boxShadow: '0 8px 32px rgba(209, 176, 107, 0.4)',
            cursor: 'pointer'
          }}
          className="book-pulse"
          title="Забронировать номер"
        >
          <CalendarDays size={28} />
          
          {/* We keep the custom CSS for pulse effects scoped locally inside this component */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes pulse-ring {
              0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(209, 176, 107, 0.7); }
              70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(209, 176, 107, 0); }
              100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(209, 176, 107, 0); }
            }
            .book-pulse {
              animation: pulse-ring 2.5s infinite;
            }
            .book-pulse:hover {
              animation: none;
              transform: scale(1.1) !important;
              background-color: #dfbf7c !important;
            }
          `}} />
        </Link>
      </MagneticButton>
    </div>
  );
}
