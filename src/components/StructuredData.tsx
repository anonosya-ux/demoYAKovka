import Script from 'next/script';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Hotel' | 'TouristAttraction' | 'WebSite';
  data: Record<string, any>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script
      id={`json-ld-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="worker"
    />
  );
}
