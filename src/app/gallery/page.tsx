import fs from 'fs';
import path from 'path';
import GalleryComponent from '@/components/Gallery';
import PageHero from '@/components/PageHero';

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  let images: { id: string; src: string; alt: string; }[] = [];
  
  try {
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      images = files
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map((file, i) => ({
          id: i.toString(),
          src: `/images/gallery/${file}`,
          alt: `Фотография Яковка ${i + 1}`
        }));
    }
  } catch (e) {
    console.error("Failed to load gallery images", e);
  }

  return (
    <>
      <PageHero 
        title="Фотогалерея" 
        description="Погрузитесь в атмосферу отдыха на Алтае" 
        bgImage="/images/gallery/gallery_3.jpeg" 
      />

      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, marginTop: '-2rem' }}>
          {images.length > 0 ? (
            <GalleryComponent images={images} />
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted-foreground)' }}>
              Фотографии загружаются...
            </div>
          )}
        </div>
      </section>
    </>
  );
}
