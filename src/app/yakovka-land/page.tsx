import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/config";
import PageHero from "@/components/PageHero";

export default function YakovkaLandPage() {
  return (
    <main>
      <PageHero 
        title="Yakovka Land" 
        description="Масштабный инвестиционный проект развития загородного премиум-кластера в предгорьях Алтая. Эко-отель с панорамными видами." 
        bgImage="/images/gallery/gallery_1.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', padding: '3rem', borderRadius: '2rem' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--radius)', overflow: 'hidden', height: '500px', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="/images/hero-fallback.jpg" alt="Рендер Yakovka Land" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)' }} />
              <p style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: '#fff', fontSize: '1.125rem', fontWeight: 500, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Визуализация будущего комплекса</p>
            </div>
            <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>О проекте</h2>
                <div style={{ width: '60px', height: '3px', backgroundColor: 'var(--accent)', marginTop: '0.5rem', marginBottom: '1.5rem' }} />
                <p style={{ fontSize: '1.125rem', opacity: 0.85, lineHeight: 1.8, marginBottom: '1rem' }}>
                  Проект <b>Yakovka Land</b> — это уникальная возможность инвестировать в один из самых перспективных туристических регионов России. Мы расширяем успешный горнолыжный комплекс «Яковка» в круглогодичный эко-резорт высочайшего уровня.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ background: 'var(--muted)', padding: '1.5rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--accent)' }}>
                  <p style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>45+</p>
                  <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>Новых премиальных шале</p>
                </div>
                <div style={{ background: 'var(--muted)', padding: '1.5rem', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--primary)' }}>
                  <p style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '0.5rem' }}>SPA</p>
                  <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>Современный банный комплекс</p>
                </div>
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <a href={`mailto:${siteConfig.contacts.email}`} className="btn btn-accent px-8 py-3 text-lg" style={{ display: 'inline-flex' }}>
                  Получить презентацию для инвесторов
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
