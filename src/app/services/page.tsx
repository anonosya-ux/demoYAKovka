import Link from "next/link";
import { Coffee, Wifi, Flame, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesPage() {
  return (
    <main>
      <PageHero 
        title="Дополнительные услуги" 
        description="Комплекс услуг инфраструктуры «Яковка» для вашего максимального комфорта." 
        bgImage="/images/gallery/gallery_3.jpeg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            <div style={{ padding: '3rem', backgroundColor: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }} className="hover-lift">
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(209,176,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                <Flame size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Русская баня на дровах</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '2rem' }}>
                Традиционная баня с душистыми вениками и зонами отдыха. Идеальное расслабление после дня на склоне. Оздоровление и детокс в горах.
              </p>
            </div>

            <div style={{ padding: '3rem', backgroundColor: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }} className="hover-lift">
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(44,83,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                <Coffee size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Кафе и питание</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '2rem' }}>
                Вкуснейшие комплексные обеды и ужины от шеф-повара. Мы используем фермерские алтайские продукты. Завтраки включены в стоимость номеров.
              </p>
            </div>

            <div style={{ padding: '3rem', backgroundColor: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }} className="hover-lift">
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(209,176,107,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                <Sparkles size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Прокат снаряжения</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: '2rem' }}>
                Горные лыжи, сноуборды, защитные шлемы и ботинки. Весь инвентарь новейший, обслуживается ежедневно нашими специалистами.
              </p>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
             <Link href="/booking" className="btn btn-primary px-8 py-3 text-lg">
               Забронировать номер с доп. услугами
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
