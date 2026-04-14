'use client';

import { useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
          color: '#ef4444' // red-500 equivalent
        }}>
          <AlertCircle size={80} />
        </div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          lineHeight: 1.2, 
          marginBottom: '1rem',
          fontFamily: 'var(--font-heading)',
          color: 'var(--primary)'
        }}>
          Упс, что-то пошло не так!
        </h1>
        <p style={{ 
          color: 'var(--muted-foreground)', 
          fontSize: '1.125rem', 
          marginBottom: '2.5rem' 
        }}>
          Произошла непредвиденная ошибка при загрузке данных. Мы уже работаем над устранением проблемы.
        </p>
        <button 
          onClick={() => reset()}
          className="btn btn-accent" 
          style={{ display: 'inline-flex' }}
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}
