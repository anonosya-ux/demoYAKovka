/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0-%D0%B8-%D1%86%D0%B5%D0%BD%D1%8B-%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%BB%D0%BA-%D1%8F%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0',
        destination: '/rooms',
        permanent: true,
      },
      {
        source: '/%D0%B3%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%BB%D1%8B%D0%B6%D0%BD%D1%8B%D0%B9-%D1%81%D0%B5%D0%B7%D0%BE%D0%BD',
        destination: '/ski-season',
        permanent: true,
      },
      {
        source: '/%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BC%D0%B5%D1%80%D0%BE%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%B8%D0%B9',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/%D0%BA%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D1%8B',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0-%D0%B8-%D1%86%D0%B5%D0%BD%D1%8B-%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%BB%D0%BA-%D1%8F%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0/%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82',
        destination: '/rooms/standard',
        permanent: true,
      },
      {
        source: '/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0-%D0%B8-%D1%86%D0%B5%D0%BD%D1%8B-%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%BB%D0%BA-%D1%8F%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0/%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82-%D0%BF%D0%BB%D1%8E%D1%81',
        destination: '/rooms/standard-plus',
        permanent: true,
      },
      {
        source: '/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0-%D0%B8-%D1%86%D0%B5%D0%BD%D1%8B-%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%BB%D0%BA-%D1%8F%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0/%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9',
        destination: '/rooms/family',
        permanent: true,
      },
      {
        source: '/%D0%BD%D0%BE%D0%BC%D0%B5%D1%80%D0%B0-%D0%B8-%D1%86%D0%B5%D0%BD%D1%8B-%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%B3%D0%BB%D0%BA-%D1%8F%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0/%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D1%8E%D1%81',
        destination: '/rooms/family-plus',
        permanent: true,
      }
    ]
  },
};

export default nextConfig;
