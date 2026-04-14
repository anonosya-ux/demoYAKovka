"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/config";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`header-container ${isScrolled ? 'scrolled glass-effect' : 'transparent'}`}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
        backgroundColor: isScrolled ? undefined : 'transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: '1.75rem', 
            fontWeight: 600, 
            color: isScrolled ? 'var(--primary)' : '#fff',
            letterSpacing: '0.05em'
          }}>
            Яковка
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  style={{ 
                    color: isScrolled ? 'var(--foreground)' : '#fff', 
                    fontWeight: 500,
                    opacity: 0.85,
                    fontSize: '0.95rem',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.color = isScrolled ? 'var(--accent)' : '#fff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.opacity = '0.85';
                    e.currentTarget.style.color = isScrolled ? 'var(--foreground)' : '#fff';
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <a href={`tel:${siteConfig.contacts.phones[0].replace(/[^\d+]/g, '')}`} 
             style={{ 
               display: 'flex', alignItems: 'center', gap: '0.5rem', 
               color: isScrolled ? 'var(--foreground)' : '#fff',
               transition: 'color 0.3s',
               whiteSpace: 'nowrap'
             }} 
             className="hidden-mobile"
          >
            <Phone size={18} />
            <span style={{ fontWeight: 500 }}>{siteConfig.contacts.phones[0]}</span>
          </a>
          <Link href="/booking" className={`btn ${isScrolled ? 'btn-primary' : 'btn-accent'} hidden-mobile`} style={{ padding: '0.6rem 1.5rem' }}>
            Бронировать
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: isScrolled ? 'var(--foreground)' : '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1200px) {
          .desktop-nav { display: none !important; }
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: block; }
        }
        @media (min-width: 1201px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none; }
        }
      `}} />

      {/* Mobile Menu Overlay */}
      <div style={{
          position: 'fixed', inset: 0, top: '4.5rem',
          backgroundColor: 'var(--background)',
          zIndex: 40,
          padding: '2rem 1.5rem',
          overflowY: 'auto',
          transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
          opacity: isMobileMenuOpen ? 1 : 0,
          visibility: isMobileMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', listStyle: 'none' }}>
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--foreground)' }}
                >
                  {link.label}
                </Link>
                {link.subLinks && (
                  <ul style={{ listStyle: 'none', marginLeft: '1rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {link.subLinks.map(sub => (
                      <li key={sub.href}>
                        <Link 
                          href={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          style={{ color: 'var(--muted-foreground)', fontSize: '1.1rem' }}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary text-center" style={{ width: '100%' }}>
              Забронировать номер
            </Link>
          </div>
      </div>
    </header>
  );
}
