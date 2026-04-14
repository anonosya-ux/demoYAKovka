import { Metadata } from 'next';
import RoomCard from '@/components/RoomCard';
import { rooms } from '@/data/rooms';
import PageHero from '@/components/PageHero';
import KonturAvailabilityCalendar from '@/components/KonturAvailabilityCalendar';

export const metadata: Metadata = {
  title: 'Номера и цены | Яковка',
  description: 'Просторные и уютные номера различной вместимости в загородном отеле Яковка. Цены, описание, фото.',
};

export default function RoomsPage() {
  return (
    <>
      <PageHero 
        title="Номерной фонд" 
        description="Идеальные условия для отдыха с семьей или друзьями" 
        bgImage="/images/gallery/gallery_2.jpg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>

          <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '3rem', borderRadius: '2rem' }}>
             <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Наши номера</h2>
             
             <div style={{ color: 'var(--muted-foreground)', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p>
                Загородный отель «Яковка» — уютный отель у подножья Алтайских гор, в Белокурихе. Здание выполнено из безопасных, экологичных материалов. Мы предлагаем отдыхающим уютные номера по доступным ценам, с полным набором услуг для комфортного проживания. У каждого номера есть свое лицо, созданное с большим вниманием к старине профессиональными дизайнерами и хозяевами!
              </p>
              <p>
                Номерной фонд включает двух — трёхместные номера категорий «Стандарт», «Стандарт Плюс», «Семейный», «Семейный Плюс», с видами на лес и горы. В каждом номере душ, санузел, умывальник, телевизор со спутниковыми каналами, бесплатный выход в Интернет через WI-FI.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'var(--foreground)' }}>
                <li>Бесплатно дети 0-3 -х лет, без предоставления спального места и завтрака;</li>
                <li>4-12 лет — доплата 500 руб/1сут за предоставление дополнительного спального места и завтрака;</li>
                <li>13-18 лет — доплата 700 руб/1сут;</li>
                <li>18+ лет — доплата 1000 руб/1сут.</li>
              </ul>
              <p>
                В здании гостиницы расположено кафе, пункт проката горнолыжного и сноубордического инвентаря. Преимущество проживания на базе «Яковка» — непосредственная близость к собственным горнолыжным трассам и к курортной зоне Белокурихи. Спокойное катание и комфортное размещение вам обеспечены! Всегда можем предложить услуги инструкторов с лицензией по горным лыжам и сноуборду.
              </p>
              <p>
                Для людей, проживающих в ГЛК «Яковка», действует множество скидок и интересных предложений. Подробную информацию по каждому из них, а также стоимость дополнительных услуг можно узнать у наших администраторов.
              </p>
             </div>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <KonturAvailabilityCalendar />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2.5rem' 
          }}>
            {rooms.map((room) => (
              <div key={room.id} style={{ boxSizing: 'border-box' }}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
