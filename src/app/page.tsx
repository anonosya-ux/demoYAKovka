import Link from "next/link";
import { Coffee, Home, MountainSnow, ShieldCheck, CupSoda, Dog } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import FeatureCard from "@/components/FeatureCard";
import RoomCard from "@/components/RoomCard";
import FloatingReviews from "@/components/FloatingReviews";
import RevealText from "@/components/RevealText";
import { rooms } from "@/data/rooms";

export default function Home_Page() {
  const features = [
    {
      icon: <Home size={28} />,
      title: "Домашний уют",
      description: "Наш отель находится в далеке от городского шума. Где слышан звук ручья, где воздух чист и снег пушист."
    },
    {
      icon: <Coffee size={28} />,
      title: "Любимые блюда",
      description: "Домашняя кухня порадует Вас заказными обедами и ужинами, а также исполнением Ваших пожеланий нашими поварами."
    },
    {
      icon: <MountainSnow size={28} />,
      title: "Близко к склону",
      description: "Вы всегда сможете выйти из отеля и сразу оказаться на склоне горы, здание отеля находится в пешей доступности от горнолыжного склона."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Территория под видеонаблюдением",
      description: "Вы можете отдыхать спокойно, а мы присмотрим за вашим \"железным конем\"."
    },
    {
      icon: <CupSoda size={28} />,
      title: "Прохладительные и горячие напитки",
      description: "После дневного отдыха на природе вы можете позволить себе расслабиться в нашем уютном шале."
    },
    {
      icon: <Dog size={28} />,
      title: "Можно с животными",
      description: "Берите Вашего пушистого друга с собой! Проживание с питомцами до 8 кг — 500 ₽/сутки, свыше 8 кг — 1000 ₽/сутки."
    }
  ];

  return (
    <>
      <HeroVideo />

      {/* About Section */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          <div className="glass-card" style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: '4rem',
            borderRadius: '2rem'
          }}>
            <RevealText el="h2" text="Добро пожаловать в Яковку" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--primary)' }} />
            <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent)', margin: '0 auto' }}></div>
            <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
              Загородный отель «Яковка» находится в курортном городе Белокуриха, по улице Угрюмова, у подножия одноименной горы Яковка. Предлагаем нашим гостям зимний и летний семейный отдых с детьми в условиях домашнего уюта и гостеприимства. Для проживающих в шале действуют сезонные скидки и спецпредложения. Домашняя кухня, баня, зона барбекю, уютный зал для посиделок с друзьями. У нас есть все необходимое для комфортного отдыха. Будем рады видеть Вас!
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
              В зимний сезон это полный комплекс услуг для активного горнолыжного отдыха. Склоны горы «Яковка» прекрасно подходят для всех увлеченных горнолыжным спортом. Расположение трасс на северной стороне – главный плюс данного горнолыжного склона (очень удобные спуски для начинающих, пологие и широкие склоны помогут вам освоить горные лыжи в короткие сроки). Снежный покров держится дольше, чем на других склонах.
            </p>
            <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.8 }}>
              В летний период времени работает открытый бассейн. Для спортсменов имеется гимнастический батут и спортивная площадка. Вас ждут увлекательные экскурсии и знакомство с достопримечательностями Белокурихи и Горного Алтая.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <Link href="/about" className="btn btn-outline" style={{ border: '2px solid var(--primary)', color: 'var(--primary)' }}>
                Подробнее о курорте
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ backgroundColor: 'var(--muted)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <RevealText el="h2" text="Наши преимущества" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--primary)' }} />
            <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>Всё для вашего комфортного отдыха</p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            {features.map((item, index) => (
              <FeatureCard 
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-end',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <RevealText el="h2" text="Номера и цены" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--primary)' }} />
              <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>Уютное размещение у подножия горы</p>
            </div>
            <Link href="/rooms" className="btn btn-primary">
              Посмотреть все номера
            </Link>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {/* Show only 4 rooms on homepage */}
            {rooms.slice(0, 4).map((room) => (
              <div key={room.id} style={{ 
                // Responsive trick to keep square-ish cards without tailwind
                boxSizing: 'border-box'
              }}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Interactive Reviews */}
      <FloatingReviews />

      {/* CTA Callout */}
      <section className="hero-gradient" style={{ padding: '6rem 0', color: 'var(--primary-foreground)', textAlign: 'center' }}>
        <div className="container">
          <RevealText el="h2" text="Идеальное место для Ваших мероприятий" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '1.5rem', justifyContent: 'center' }} />
          <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
            Свадьбы, корпоративы, дни рождения. У нас есть банкетный зал, уютная летняя веранда и зелёная зона для выездных регистраций.
          </p>
          <Link href="/events" className="btn btn-accent" style={{ fontSize: '1.125rem', padding: '0.875rem 2rem' }}>
            Обсудить мероприятие
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="glass-card" style={{ padding: '4rem', borderRadius: '2rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <RevealText el="h2" text="Как нас найти" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--primary)' }} />
              <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>
                Алтайский край, г. Белокуриха, ул. Угрюмова, д. 4
              </p>
            </div>

            <div className="map-container" style={{ height: '500px', width: '100%', backgroundColor: 'var(--muted)' }}>
            {/* Embedded Yandex Map */}
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
      </section>
    </>
  );
}
