"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import PageHero from "@/components/PageHero";

export default function SkiSeasonPage() {
  return (
    <main>
      <PageHero 
        title="Горнолыжный сезон" 
        description="Активный зимний отдых, на чистом горном воздухе, в комфортных условиях с профессиональным обслуживанием." 
        bgImage="/images/gallery/gallery_1.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'start' }}>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '3rem', borderRadius: '2rem' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Трассы и подъемники</h2>
              <p style={{ fontSize: '1.125rem', opacity: 0.85, lineHeight: 1.8 }}>
                Зона катания включает 4 трассы. Две для катания на горных лыжах и сноубордах, и еще две для терренкура. Общая протяженность трасс 1450 м. Длина склона горы Яковка составляет 1000 м, перепад высот до 200 м. 
              </p>
              <p style={{ fontSize: '1.125rem', opacity: 0.85, lineHeight: 1.8 }}>
                Расположение трасс на северной стороне – главный плюс данного горнолыжного склона. Снежный покров держится дольше, чем на других склонах. Катание весной, в «бархатный сезон» — золотой период для горнолыжников. Есть бугельный подъемник.
              </p>
              <div style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent)' }}>
                <p style={{ fontWeight: 600, color: 'var(--primary)' }}>Открытие сезона:</p>
                <p>начинается в ноябре с установлением стабильного снежного покрова и длится по март.</p>
              </div>
            </div>
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', height: '400px', boxShadow: 'var(--shadow-md)' }}>
              <Image src="/images/hero-fallback.jpg" alt="Склоны" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--accent)' }}>Тарифы на подъемник</h2>
            <p style={{ fontSize: '1.125rem', opacity: 0.9 }}>Цены могут меняться, пожалуйста уточняйте у администратора</p>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              { time: "1 час", price: "700 ₽" },
              { time: "2 часа", price: "1000 ₽" },
              { time: "3 часа", price: "1500 ₽" },
              { time: "1 день (11:00-17:00)", price: "2000 ₽" },
            ].map((plan, i) => (
              <div key={i} style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: 'var(--radius)', 
                padding: '2rem', 
                minWidth: '250px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>{plan.time}</h3>
                <p style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--accent)' }}>{plan.price}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
             <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Режим работы: День профилактики — понедельник.</p>
             <Link href="/booking" className="btn btn-accent text-lg px-8 py-3">
               Забронировать номер
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
