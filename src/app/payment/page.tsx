import LegalPageLayout from "@/components/LegalPageLayout";
import Link from "next/link";
import { CreditCard, Banknote, Landmark } from "lucide-react";

export default function PaymentPage() {
  return (
    <LegalPageLayout title="Способы оплаты">
      <p style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
        Для вашего удобства в загородном отеле «Яковка» предусмотрено несколько способов оплаты услуг и проживания.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem', marginTop: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
          <div style={{ background: '#fff', p: '1rem', borderRadius: '50%', color: 'var(--primary)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CreditCard size={24} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Онлайн оплата на сайте</h3>
            <p style={{ margin: 0 }}>При бронировании через наш <Link href="/booking" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>модуль онлайн-бронирования</Link> (Контур.Отель), вы можете безопасно оплатить проживание банковской картой (Visa, Mastercard, МИР).</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
          <div style={{ background: '#fff', p: '1rem', borderRadius: '50%', color: 'var(--primary)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Landmark size={24} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Безналичный расчет для юр. лиц</h3>
            <p style={{ margin: 0 }}>Мы работаем с юридическими лицами. Для выставления счета на оплату корпоративного заезда свяжитесь с нашим администратором, и мы подготовим все закрывающие документы (Акты, УПД).</p>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', padding: '1.5rem', backgroundColor: 'var(--muted)', borderRadius: 'var(--radius)' }}>
          <div style={{ background: '#fff', p: '1rem', borderRadius: '50%', color: 'var(--primary)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Banknote size={24} />
          </div>
          <div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Оплата при заселении</h3>
            <p style={{ margin: 0 }}>Оплатить остаток залога или дополнительные услуги (баня, прокат, питание) можно на ресепшене отеля наличными средствами или через терминал (картой).</p>
          </div>
        </div>
      </div>
    </LegalPageLayout>
  );
}
