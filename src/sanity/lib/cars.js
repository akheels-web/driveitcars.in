import { client } from './client'
import { urlForImage } from './image'

// Standard fleet cars fallback data for instant zero-downtime resilience
export const DEFAULT_FLEET = [
  {
    id: 'swift',
    name: 'Suzuki Swift',
    category: 'hatchback',
    image: '/assets/img/cars/Swift.png',
    seats: 5,
    modelYear: '2023',
    transmission: 'Manual',
    fuelType: 'Petrol',
    kmPerDay: '300/Day',
    extraKmRate: '9/Km',
    extraHrRate: '300/Hr',
    pricePerDay: 1999,
    pricePerMonth: 31999,
    monthlySavings: 'Save 47%',
    features: ['Air Conditioned', 'Spacious Boot', 'Fuel Efficient', 'Clean Interiors'],
    displayPages: ['home', 'self-drive-car', 'hatchback'],
  },
  {
    id: 'baleno',
    name: 'Suzuki Baleno',
    category: 'hatchback',
    image: '/assets/img/cars/Baleno.png',
    seats: 5,
    modelYear: '2023',
    transmission: 'Manual',
    fuelType: 'Petrol',
    kmPerDay: '300/Day',
    extraKmRate: '9/Km',
    extraHrRate: '300/Hr',
    pricePerDay: 2099,
    pricePerMonth: 33999,
    monthlySavings: 'Save 46%',
    features: ['Touchscreen Infotainment', 'Apple CarPlay', 'Spacious Legroom', 'Fastag Enabled'],
    displayPages: ['home', 'self-drive-car', 'hatchback'],
  },
  {
    id: 'i20',
    name: 'Hyundai i20',
    category: 'hatchback',
    image: '/assets/img/cars/i20.png',
    seats: 5,
    modelYear: '2023',
    transmission: 'Manual',
    fuelType: 'Petrol',
    kmPerDay: '300/Day',
    extraKmRate: '9/Km',
    extraHrRate: '300/Hr',
    pricePerDay: 2199,
    pricePerMonth: 34999,
    monthlySavings: 'Save 47%',
    features: ['Premium Cabin', 'Rear AC Vents', 'Wireless Charger', '100% Sanitized'],
    displayPages: ['home', 'self-drive-car', 'hatchback'],
  },
  {
    id: 'dzire',
    name: 'Suzuki Dzire',
    category: 'sedan',
    image: '/assets/img/cars/Dzire.png',
    seats: 5,
    modelYear: '2023',
    transmission: 'Manual',
    fuelType: 'Petrol / CNG',
    kmPerDay: '300/Day',
    extraKmRate: '10/Km',
    extraHrRate: '300/Hr',
    pricePerDay: 2199,
    pricePerMonth: 34999,
    monthlySavings: 'Save 47%',
    features: ['Plush Rear Seats', 'Excellent Mileage', 'Huge Boot Space', 'Smooth Highway Ride'],
    displayPages: ['home', 'self-drive-car', 'sedan'],
  },
  {
    id: 'creta',
    name: 'Hyundai Creta',
    category: 'suv5',
    image: '/assets/img/2023-6.png',
    seats: 5,
    modelYear: '2023',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    kmPerDay: '300/Day',
    extraKmRate: '11/Km',
    extraHrRate: '500/Hr',
    pricePerDay: 3299,
    pricePerMonth: 54999,
    monthlySavings: 'Save 45%',
    features: ['Panoramic Sunroof', 'Ventilated Seats', 'Cruise Control', 'High Ground Clearance'],
    displayPages: ['home', 'self-drive-car', 'suv5'],
  },
  {
    id: 'seltos',
    name: 'Kia Seltos',
    category: 'suv5',
    image: '/assets/img/cars/5-Seltos.png',
    seats: 5,
    modelYear: '2023',
    transmission: 'Manual / Automatic',
    fuelType: 'Petrol / Diesel',
    kmPerDay: '300/Day',
    extraKmRate: '11/Km',
    extraHrRate: '500/Hr',
    pricePerDay: 3299,
    pricePerMonth: 54999,
    monthlySavings: 'Save 45%',
    features: ['Bose Premium Audio', 'Connected Car Tech', 'High Safety Rating', 'Comfortable Drive'],
    displayPages: ['home', 'self-drive-car', 'suv5'],
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta',
    category: 'suv7',
    image: '/assets/img/crysta.png',
    seats: 7,
    modelYear: '2023',
    transmission: 'Manual / Automatic',
    fuelType: 'Diesel',
    kmPerDay: '300/Day',
    extraKmRate: '14/Km',
    extraHrRate: '600/Hr',
    pricePerDay: 4499,
    pricePerMonth: 74999,
    monthlySavings: 'Save 45%',
    features: ['Captain Chairs', 'Dual AC Vents', 'Huge Luggage Capacity', 'King of Highways'],
    displayPages: ['home', 'self-drive-car', 'suv7', 'cabs'],
  },
  {
    id: 'fortuner-legender',
    name: 'Fortuner Legender',
    category: 'luxury',
    image: '/assets/img/fortuner.png',
    seats: 7,
    modelYear: '2023',
    transmission: 'Automatic 4x4',
    fuelType: 'Diesel',
    kmPerDay: '300/Day',
    extraKmRate: '25/Km',
    extraHrRate: '1000/Hr',
    pricePerDay: 8999,
    pricePerMonth: 149999,
    monthlySavings: 'Save 44%',
    features: ['4x4 Off-Road Dominance', 'VIP Road Presence', 'JBL Audio', 'Ultra-Luxurious Leather'],
    displayPages: ['home', 'self-drive-car', 'luxurycars', 'suv7'],
  },
  {
    id: 'jaguar-xf',
    name: 'Jaguar XF',
    category: 'luxury',
    image: '/assets/img/jagg.png',
    seats: 5,
    modelYear: '2023',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    kmPerDay: '250/Day',
    extraKmRate: '35/Km',
    extraHrRate: '1500/Hr',
    pricePerDay: 14999,
    pricePerMonth: 249999,
    monthlySavings: 'Save 45%',
    features: ['British Luxury Styling', 'Meridian Sound System', 'Chauffeur Driven Option', 'Perfect Wedding Car'],
    displayPages: ['home', 'luxurycars'],
  },
  {
    id: 'luxury-bus-35',
    name: '35 Seater Luxury Bus',
    category: 'bus',
    image: '/assets/img/bus2.jpg',
    seats: 35,
    modelYear: '2023',
    transmission: 'Manual',
    fuelType: 'Diesel',
    kmPerDay: '300/Day',
    extraKmRate: '35/Km',
    extraHrRate: '1000/Hr',
    pricePerDay: 16999,
    pricePerMonth: 0,
    monthlySavings: '',
    features: ['Push-Back Luxury Seats', 'Dual AC Climate Control', 'PA Sound System', 'Expert Chauffeur Included'],
    displayPages: ['luxury-buses', 'outstation-bus'],
  },
];

/**
 * Fetch cars for a specific page slug or category from Sanity CMS with instant fallback.
 */
export async function getCarsForPage(pageSlug, defaultCategory = null) {
  try {
    const query = `*[_type == "car" && ($pageSlug in displayPages || category == $defaultCategory || ($pageSlug == "home" && isFeatured == true))] | order(sortOrder asc, _createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      category,
      displayPages,
      image,
      seats,
      modelYear,
      transmission,
      fuelType,
      kmPerDay,
      extraKmRate,
      extraHrRate,
      pricePerDay,
      pricePerMonth,
      monthlySavings,
      idealFor,
      features,
      isFeatured,
      sortOrder
    }`;

    const cmsCars = await client.fetch(query, {
      pageSlug,
      defaultCategory: defaultCategory || pageSlug,
    });

    if (cmsCars && cmsCars.length > 0) {
      return cmsCars.map((car) => {
        let imageUrl = '/assets/img/cars/Swift.png';
        if (car.image) {
          const generatedUrl = urlForImage(car.image)?.width(800)?.url();
          if (generatedUrl) imageUrl = generatedUrl;
        }

        return {
          id: car._id,
          name: car.name,
          slug: car.slug || car._id,
          category: car.category || defaultCategory || 'all',
          image: imageUrl,
          seats: car.seats || 5,
          modelYear: car.modelYear || '2023',
          transmission: car.transmission || 'Manual',
          fuelType: car.fuelType || 'Petrol',
          kmPerDay: car.kmPerDay || '300/Day',
          extraKmRate: car.extraKmRate || '9/Km',
          extraHrRate: car.extraHrRate || '300/Hr',
          pricePerDay: car.pricePerDay || 2000,
          pricePerMonth: car.pricePerMonth || 32000,
          monthlySavings: car.monthlySavings || 'Save 45%',
          idealFor: car.idealFor || '',
          features: car.features && car.features.length > 0 ? car.features : ['Air Conditioned', '100% Sanitized'],
        };
      });
    }
  } catch (error) {
    console.warn(`Sanity getCarsForPage error for [${pageSlug}]:`, error.message);
  }

  // Fallback to default fleet filtered by category or page
  return DEFAULT_FLEET.filter((car) => {
    if (pageSlug === 'home') return true;
    if (car.displayPages?.includes(pageSlug)) return true;
    if (defaultCategory && car.category === defaultCategory) return true;
    return false;
  });
}
