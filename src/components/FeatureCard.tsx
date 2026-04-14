"use client";

import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: 'var(--background)', 
      borderRadius: 'var(--radius)', 
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }}>
      <div style={{ 
        width: '64px', 
        height: '64px', 
        borderRadius: '50%', 
        backgroundColor: 'rgba(196, 163, 90, 0.1)', 
        color: 'var(--accent)',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: '1.5rem'
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{title}</h3>
      <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6, fontSize: '0.95rem' }}>
        {description}
      </p>
    </div>
  );
}
