import { client } from '@/sanity/lib/client';

export default async function sitemap() {
  const baseUrl = 'https://www.driveitcars.in';
  const now = new Date();

  // Tier 1: Core High-Priority Self Drive & Luxury Hubs (1.0 Priority)
  const coreHubs = [
    { path: '', priority: 1.0, changeFrequency: 'daily' },
    { path: '/self-drive-car', priority: 1.0, changeFrequency: 'daily' },
    { path: '/hyderabad-airport-car-rental', priority: 1.0, changeFrequency: 'daily' },
    { path: '/self-drive-suv-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/luxurycars', priority: 1.0, changeFrequency: 'daily' },
    { path: '/mercedes-rental-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/bmw-rental-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/audi-rental-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/range-rover-rental-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/luxury-chauffeur-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/vip-car-rental-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/weekend-self-drive-cars-hyderabad', priority: 1.0, changeFrequency: 'daily' },
    { path: '/monthly-self-drive-cars-hyderabad', priority: 1.0, changeFrequency: 'daily' },
  ];

  // Tier 2: Key Tech Corridor Hubs & Primary Vehicle Categories (0.9 Priority)
  const keyCorridorsAndCategories = [
    '/hitech-city',
    '/gachibowli',
    '/madhapur',
    '/kondapur',
    '/banjara-hills',
    '/jubilee-hills',
    '/suv5',
    '/suv7',
    '/sedan',
    '/hatchback',
    '/cabs',
    '/luxury-buses',
    '/best-car-rental-in-hyderabad',
    '/luxury-car-in-hyderabad',
  ].map((path) => ({ path, priority: 0.9, changeFrequency: 'daily' }));

  // Tier 3: Locality Service Pages in Hyderabad (0.8 Priority)
  const localityPages = [
    '/ameerpet',
    '/begumpet',
    '/bowenpally',
    '/film-nagar',
    '/guttala-begumpet',
    '/habsiguda',
    '/himmatnagar',
    '/khairatabad',
    '/kukatpally',
    '/langer-house',
    '/lb-nagar',
    '/masab-tank',
    '/mehdipatnam',
    '/nampally',
    '/outstation-bus',
    '/secunderabad',
    '/Shaikpet',
    '/sr-nagar',
    '/sun-city',
    '/tarnaka',
    '/tolichowki',
    '/vijay-nagar-colony',
    '/yousufguda',
  ].map((path) => ({ path, priority: 0.8, changeFrequency: 'weekly' }));

  // Tier 4: Company & Trust Pages (0.6 Priority)
  const trustPages = [
    '/about',
    '/contact',
    '/reviews',
    '/partner',
    '/privacy',
    '/terms-conditions',
    '/blog',
  ].map((path) => ({ path, priority: 0.6, changeFrequency: 'monthly' }));

  const staticEntries = [...coreHubs, ...keyCorridorsAndCategories, ...localityPages, ...trustPages].map(
    (item) => ({
      url: `${baseUrl}${item.path}`,
      lastModified: now,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
    })
  );

  // Dynamic Sanity Blog Posts
  let dynamicBlogEntries = [];
  try {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]{
      "slug": slug.current,
      _updatedAt
    }`);
    if (posts && posts.length > 0) {
      dynamicBlogEntries = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post._updatedAt ? new Date(post._updatedAt) : now,
        changeFrequency: 'weekly',
        priority: 0.7,
      }));
    }
  } catch (err) {
    // Graceful fallback if Sanity query fails during build
  }

  return [...staticEntries, ...dynamicBlogEntries];
}
