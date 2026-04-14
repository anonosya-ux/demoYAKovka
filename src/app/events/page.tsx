"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import PageHero from "@/components/PageHero";

export default function EventsPage() {
  return (
    <main>
      <PageHero 
        title="Проведение мероприятий" 
        description="Загородный отель «Яковка» — отличное место для проведения семейных торжеств, свадеб, корпоративов и спортивных сборов." 
        bgImage="/images/gallery/gallery_2.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '4rem', padding: '3rem', borderRadius: '2rem' }}>
          {/* Свадьбы */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow-md)' }}>
              <Image src="/images/about-2.jpg" alt="Свадьбы" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Проведение свадьбы на Алтае</h2>
              <p style={{ fontSize: '1.125rem', opacity: 0.85, lineHeight: 1.8 }}>
                Загородный отель «Яковка» — отличное место для проведения семейных мероприятий. Мы проводим свадьбы разных уровней сложности уже более 15 лет. 
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', fontSize: '1.125rem' }}>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Летняя веранда на 60 человек</li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Зелёная зона для выездных регистраций</li>
                <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><span style={{ color: 'var(--accent)' }}>✦</span> Банкетный зал в Белокурихе вместительностью до 50 человек</li>
              </ul>
            </div>
          </div>

          {/* Корпоративы и Сборы */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Корпоративы и Спортивные сборы</h2>
              <p style={{ fontSize: '1.125rem', opacity: 0.85, lineHeight: 1.8 }}>
                ГЛК «Яковка» успешно проводит корпоративы для организаций. Работаем с крупными компаниями, предлагая полный цикл организации отдыха на природе.
              </p>
              <p style={{ fontSize: '1.125rem', opacity: 0.85, lineHeight: 1.8 }}>
                Наш горнолыжный комплекс — идеальное место для спортивных сборов зимой и летом. Комплекс имеет горнолыжные трассы, бугельные подъемники, площадки для мероприятий и прокат инвентаря.
              </p>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow-md)' }}>
              <Image src="/images/about-3.jpg" alt="Корпоративы" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          </div>
        </div>
      </section>

      <section className="section bg-muted text-center">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Хотите провести мероприятие?</h2>
          <p style={{ fontSize: '1.125rem', opacity: 0.8, maxWidth: '600px' }}>
            Близость леса, чистый горный воздух, комфортные условия проживания — всё это важные факторы при выборе места для проведения торжеств. Свяжитесь со специалистами для индивидуального расчета:
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href={`tel:${siteConfig.contacts.phones[0].replace(/[^\d+]/g, '')}`} className="btn btn-primary">
              {siteConfig.contacts.phones[0]}
            </a>
            <Link href="/booking" className="btn btn-accent">
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
