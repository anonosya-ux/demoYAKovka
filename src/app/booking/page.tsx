import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Онлайн-бронирование | Яковка',
  description: 'Забронируйте номер в загородном отеле Яковка. Быстрое и удобное бронирование онлайн.',
};

export default function BookingPage() {
  return (
    <>
      <PageHero 
        title="Бронирование" 
        description="Гарантия лучшей цены при бронировании на официальном сайте" 
        bgImage="/images/gallery/gallery_2.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-3rem' }}>
          <div className="glass-card" style={{ padding: '0.5rem', borderRadius: '1.5rem', minHeight: '60vh' }}>
            <BookingWidget />
          </div>
        </div>
      </section>
    </>
  );
}
