/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // 1. Broken relative tag manager script URL from old static HTML
      {
        source: '/www.googletagmanager.com/:path*',
        destination: '/',
        permanent: true,
      },
      // 2. Specific legacy index variants -> homepage
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index-2.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      // 3. Typo / legacy area aliases
      {
        source: '/nagar-luxury-car-rental.html',
        destination: '/lb-nagar-luxury-car-rental',
        permanent: true,
      },
      {
        source: '/nagar-luxury-car-rental',
        destination: '/lb-nagar-luxury-car-rental',
        permanent: true,
      },
      // 4. Airport pickup variants
      {
        source: '/airport-pickup-&-Drop.html',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      {
        source: '/airport-pickup-&-Drop',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      {
        source: '/airport-pickup-&-drop.html',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      {
        source: '/airport-pickup-&-drop',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      {
        source: '/airport-pickup-%26-Drop.html',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      {
        source: '/airport-pickup-%26-Drop',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      {
        source: '/airport-pickup-%26-drop.html',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      {
        source: '/airport-pickup-%26-drop',
        destination: '/hyderabad-airport-car-rental',
        permanent: true,
      },
      // 5. In-station bus legacy page -> luxury buses
      {
        source: '/in-station-bus.html',
        destination: '/luxury-buses',
        permanent: true,
      },
      {
        source: '/in-station-bus',
        destination: '/luxury-buses',
        permanent: true,
      },
      // 6. Case normalization for Shaikpet
      {
        source: '/Shaikpet',
        destination: '/sheikpet',
        permanent: true,
      },
      {
        source: '/Shaikpet.html',
        destination: '/sheikpet',
        permanent: true,
      },
      {
        source: '/Shaikpet-luxury-car-rental',
        destination: '/sheikpet-luxury-car-rental',
        permanent: true,
      },
      {
        source: '/Shaikpet-luxury-car-rental.html',
        destination: '/sheikpet-luxury-car-rental',
        permanent: true,
      },
      // 7. General catch-all: all legacy .html URLs -> clean URLs
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
