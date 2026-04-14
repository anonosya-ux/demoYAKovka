import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Фотогалерея | Яковка',
  description: 'Фотографии горнолыжного комплекса и загородного отеля Яковка в Белокурихе. Номера, территория, склоны.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
