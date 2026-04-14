import Link from "next/link";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { navigationLinks, footerLinks } from "@/data/navigation";
import { siteConfig } from "@/data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      background: 'linear-gradient(180deg, rgba(30, 45, 38, 1) 0%, rgba(20, 30, 25, 1) 100%)', 
      color: 'var(--primary-foreground)',
      paddingTop: '6rem',
      paddingBottom: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(209,176,107,0.5), transparent)' }} />
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Column 1: Brand & Desc */}
          <div>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 600 }}>
                Яковка
              </span>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '300px' }}>
              Загородный отель у подножия одноименной горы Яковка. Комфортный семейный отдых в Белокурихе круглый год.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={siteConfig.links.vk} target="_blank" rel="noreferrer" 
                 className="hover-lift"
                 style={{ 
                   display: 'flex', alignItems: 'center', justifyContent: 'center',
                   width: '44px', height: '44px', borderRadius: '50%',
                   backgroundColor: 'rgba(255,255,255,0.05)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   transition: 'all 0.3s ease',
                   color: '#fff'
                 }}>
                VK
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Меню</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navigationLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Информация</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerLinks.legal.map(link => (
                <li key={link.href}>
                  <Link href={link.href} style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.projects.map(link => (
                <li key={link.href} style={{ marginTop: '1rem' }}>
                  <Link href={link.href} style={{ color: 'var(--accent)', fontWeight: 500 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Контакты</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.8)' }}>
                <MapPin size={20} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent)' }} />
                <span>{siteConfig.contacts.address}</span>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }}>
                <Phone size={20} style={{ flexShrink: 0, color: 'var(--accent)' }} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {siteConfig.contacts.phones.map(phone => (
                    <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`}>{phone}</a>
                  ))}
                </div>
              </li>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'rgba(255,255,255,0.8)' }}>
                <Mail size={20} style={{ flexShrink: 0, color: 'var(--accent)' }} />
                <a href={`mailto:${siteConfig.contacts.email}`}>{siteConfig.contacts.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.875rem'
        }}>
          <p>© {currentYear} Загородный отель «Яковка». Все права защищены.</p>
          <p>{siteConfig.contacts.legal.name} ИНН: {siteConfig.contacts.legal.inn}</p>
        </div>
      </div>
    </footer>
  );
}
