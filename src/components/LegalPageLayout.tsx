import PageHero from '@/components/PageHero';

export default function LegalPageLayout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <main>
      <PageHero 
        title={title} 
        description="Официальная информация загородного отеля «Яковка»" 
        bgImage="/images/gallery/gallery_1.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          <div className="glass-card" style={{ 
            maxWidth: '900px', 
            margin: '0 auto',
            padding: '4rem',
            borderRadius: '2rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              fontSize: '1.125rem',
              lineHeight: 1.7,
              opacity: 0.85
            }}>
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
