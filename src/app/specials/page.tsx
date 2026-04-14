import Link from "next/link";
import { Tag, Clock, Gift } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function SpecialsPage() {
  return (
    <main>
      <PageHero 
        title="Спецпредложения" 
        description="Воспользуйтесь выгодными акциями для вашего идеального отдыха на Алтае." 
        bgImage="/images/gallery/gallery_1.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            
            {/* Акция 1 */}
            <div style={{ 
              borderRadius: 'var(--radius)', 
              overflow: 'hidden',
              border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column',
              boxShadow: 'var(--shadow-md)',
              background: '#fff'
            }} className="hover-lift">
              <div style={{ padding: '3rem 2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--accent))' }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--muted)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  <Tag size={16} /> Популярно
                </span>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>Скидка на раннее бронирование</h3>
                <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '2rem' }}>
                  Спланируйте свой отдых заранее и сэкономьте. При бронировании за 30 дней и более вы получаете гарантированную скидку 15% на все категории номеров.
                </p>
                <Link href="/booking" className="btn btn-outline" style={{ border: '2px solid var(--primary)', color: 'var(--primary)', width: '100%' }}>Забронировать со скидкой</Link>
              </div>
            </div>

            {/* Акция 2 */}
            <div style={{ 
              borderRadius: 'var(--radius)', 
              overflow: 'hidden',
              border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column',
              boxShadow: 'var(--shadow-md)',
              background: '#fff'
            }} className="hover-lift">
              <div style={{ padding: '3rem 2.5rem', position: 'relative' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--accent)' }} />
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(209,176,107,0.1)', padding: '0.5rem 1rem', borderRadius: '50px', color: 'var(--accent)', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  <Gift size={16} /> Семейный тариф
                </span>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>Дети отдыхают бесплатно</h3>
                <p style={{ opacity: 0.8, lineHeight: 1.6, marginBottom: '2rem' }}>
                  Супер акция для большой семьи. При длительном размещении от 3 суток, дети до 12 лет проживают в номере или коттедже совершенно бесплатно!
                </p>
                <Link href="/booking" className="btn btn-outline" style={{ border: '2px solid var(--accent)', color: 'var(--accent)', width: '100%' }}>Узнать подробности</Link>
              </div>
            </div>

            {/* Акция 3 */}
            <div style={{ 
              borderRadius: 'var(--radius)', 
              overflow: 'hidden',
              border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column',
              boxShadow: 'var(--shadow-md)',
              background: 'linear-gradient(145deg, var(--primary), #1a3a2a)',
              color: '#fff'
            }} className="hover-lift">
              <div style={{ padding: '3rem 2.5rem', position: 'relative' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', padding: '0.5rem 1rem', borderRadius: '50px', color: '#fff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                  <Clock size={16} /> Ограниченное время
                </span>
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.2 }}>Романтические выходные</h3>
                <p style={{ opacity: 0.9, lineHeight: 1.6, marginBottom: '2rem' }}>
                  Проведите незабываемые выходные со своей половинкой. В тариф входит бутылка шампанского при заезде и безлимитное посещение SPA-зоны и Бани.
                </p>
                <Link href="/booking" className="btn" style={{ background: '#fff', color: 'var(--primary)', width: '100%' }}>Выбрать даты</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
