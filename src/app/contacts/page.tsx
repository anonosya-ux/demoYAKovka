import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/data/config';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Контакты | Яковка',
  description: 'Контактная информация загородного отеля Яковка в Белокурихе. Адрес, телефоны, email.',
};

export default function ContactsPage() {
  return (
    <>
      <PageHero 
        title="Контакты" 
        description="Мы всегда готовы ответить на ваши вопросы" 
        bgImage="/images/gallery/gallery_1.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          
          <div className="glass-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', padding: '3rem', borderRadius: '2rem' }}>
            
            {/* Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem' }}>Свяжитесь с нами</h2>
                <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.6 }}>
                  Забронировать номер, заказать банкет или просто задать вопрос — мы на связи.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(196,163,90,0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Адрес</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>{siteConfig.contacts.address}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(196,163,90,0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Телефоны</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {siteConfig.contacts.phones.map(phone => (
                        <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`} style={{ color: 'var(--muted-foreground)', textDecoration: 'underline' }}>{phone}</a>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(196,163,90,0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Email</h3>
                    <a href={`mailto:${siteConfig.contacts.email}`} style={{ color: 'var(--muted-foreground)', textDecoration: 'underline' }}>{siteConfig.contacts.email}</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(196,163,90,0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>Режим работы</h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>Круглосуточно, без выходных</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1.5rem', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Реквизиты</h3>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{siteConfig.contacts.legal.name}</p>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>ИНН: {siteConfig.contacts.legal.inn}</p>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.9rem' }}>{siteConfig.contacts.legal.address}</p>
              </div>

            </div>

            {/* Map */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="map-container" style={{ height: '100%', minHeight: '500px', width: '100%', backgroundColor: 'var(--muted)' }}>
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0232230cb2ee0fc882ef99a8ea3f350c38de2839b231ffbfd57053e13d52674&amp;source=constructor" 
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  title="г. Белокуриха, ул. Угрюмова, д. 4"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
