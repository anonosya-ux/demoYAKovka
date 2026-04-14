import Link from "next/link";
import { Users, BedDouble, ChevronRight } from "lucide-react";
import type { RoomType } from "@/data/rooms";

interface RoomCardProps {
  room: RoomType;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="hover-lift glass-card" style={{ 
      borderRadius: '2rem',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      border: '1px solid rgba(255, 255, 255, 0.8)'
    }}>
      {/* Image Area */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', backgroundColor: 'var(--muted)' }}>
        {/* We will use regular img for simplicity until proper assets are linked */}
        <img 
          src={room.images[0]} 
          alt={room.name} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="room-img"
        />
        <style dangerouslySetInnerHTML={{__html:`
          .hover-lift:hover .room-img { transform: scale(1.05); }
        `}} />
        <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--primary)', boxShadow: 'var(--shadow-sm)' }}>
          Популярно
        </div>
      </div>

      {/* Content Area */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
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
          <Link href={`/rooms/${room.slug}`} className="btn" style={{ 
            backgroundColor: 'var(--background)', 
            border: '1px solid var(--border)',
            fontSize: '0.875rem'
          }}>
            Подробнее
          </Link>
          <Link href="/booking" className="btn btn-primary" style={{ padding: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.875rem' }}>
            Бронь <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
