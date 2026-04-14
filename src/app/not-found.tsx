import Link from 'next/link';
import { ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="section" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'var(--background)'
    }}>
      <div className="glass-card" style={{ 
        padding: '4rem', 
        borderRadius: '2rem', 
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '2rem',
          color: 'var(--accent)'
        }}>
          <ShieldAlert size={80} />
        </div>
        <h1 style={{ 
          fontSize: '3rem', 
          lineHeight: 1.2, 
          marginBottom: '1rem',
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary)'
        }}>
          404. Страница не найдена
        </h1>
        <p style={{ 
          color: 'var(--muted-foreground)', 
          fontSize: '1.25rem', 
          marginBottom: '2.5rem' 
        }}>
          Возможно, она была перемещена или вы ошиблись в адресе.
        </p>
        <Link href="/" className="btn btn-primary" style={{ display: 'inline-flex' }}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
