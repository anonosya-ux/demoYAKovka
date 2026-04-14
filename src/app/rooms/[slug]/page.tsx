import { notFound } from 'next/navigation';
import { rooms } from '@/data/rooms';
import Link from 'next/link';
import { Users, BedDouble, Check, ChevronLeft } from 'lucide-react';
import BookingWidget from '@/components/BookingWidget';
import PageHero from '@/components/PageHero';

export function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const room = rooms.find((r) => r.slug === resolvedParams.slug);
  if (!room) return { title: 'Номер не найден' };

  return {
    title: `${room.name} | Отель Яковка`,
    description: room.description,
  };
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const room = rooms.find((r) => r.slug === resolvedParams.slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      <PageHero 
        title={room.name} 
        description={`Идеально подходит: ${room.capacity.toLowerCase()}`} 
        bgImage={room.images[0]} 
      >
        <Link href="/rooms" className="hover-lift" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '0.75rem 1.5rem', borderRadius: '50px', color: '#fff', fontWeight: 500, fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.2)' }}>
          <ChevronLeft size={18} /> К списку номеров
        </Link>
      </PageHero>

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', padding: '3rem', borderRadius: '2rem' }}>
            
            {/* Room Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Image Gallery Mockup */}
              <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', backgroundColor: 'var(--muted)', height: '400px' }}>
                <img src={room.images[0]} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem' }}>Описание</h2>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                  {room.description}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', padding: '1.5rem', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Users size={24} style={{ color: 'var(--accent)' }}/>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>Вместимость</div>
                    <div style={{ fontWeight: 500 }}>{room.capacity}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <BedDouble size={24} style={{ color: 'var(--accent)' }}/>
                  <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)' }}>Кровати</div>
                    <div style={{ fontWeight: 500 }}>{room.beds}</div>
                  </div>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Удобства в номере</h2>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none' }}>
                  {room.amenities.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <Check size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <span style={{ color: 'var(--foreground)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'sticky', top: '100px' }}>
                <BookingWidget />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
