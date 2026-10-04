import { client } from './client';

export const LOCATION_DEFAULTS = {
  'gachibowli': {
    name: 'Gachibowli',
    h1Title: 'Luxury Car Rental & Self Drive Car Rental in Gachibowli',
    introParagraph1: "Looking for the best car rental service in Gachibowli? DriveIt Cars provides premium luxury car rental and self-drive car rental services to corporate professionals, IT employees, families, and travelers. Situated near Hyderabad's major Financial District and IT parks, Gachibowli is an ideal hub for reliable on-demand transportation.",
    introParagraph2: "Be it an executive luxury sedan for business meetings, an automatic SUV for weekend getaways, or a monthly self-drive subscription, we provide flexible rental options tailored to your schedule with zero deposit on select vehicles.",
    introParagraph3: "Enjoy prompt doorstep delivery across DLF Cybercity, Financial District, ORR Exit 19, and surrounding tech zones with 24/7 road assistance.",
    serviceAreas: ['Financial District', 'DLF Cybercity', 'ORR Exit 19', 'Wipro Circle', 'Gowlidoddy'],
  },
  'banjara-hills': {
    name: 'Banjara Hills',
    h1Title: 'Self Drive Car & Luxury Car Rental in Banjara Hills',
    introParagraph1: "DriveIt Cars delivers premier self-drive car rentals and luxury wedding cars in Banjara Hills, Hyderabad's prestigious upscale neighborhood. Whether visiting for business, attending high-profile events, or exploring the city, our immaculate fleet meets the highest standards.",
    introParagraph2: "Choose from world-class luxury vehicles including BMW, Mercedes-Benz, Audi, and Jaguar, alongside popular self-drive SUVs like Toyota Fortuner, Mahindra Thar, and Hyundai Creta with unlimited freedom.",
    introParagraph3: "Fast doorstep delivery across Road No. 1, 2, 10, 12, Care Hospital, and Taj Krishna area with instant digital verification.",
    serviceAreas: ['Road No. 1 & 2', 'Road No. 10 & 12', 'Taj Krishna Hub', 'Star Hospitals Circle', 'MLA Colony'],
  },
  'hitech-city': {
    name: 'Hitech City',
    h1Title: 'Self Drive Cars & Luxury Car Rental in Hitech City',
    introParagraph1: "Experience seamless mobility in Cyberabad with DriveIt's self-drive car rentals in Hitech City. Tailored for tech professionals, business executives, and visiting travelers seeking independent travel without driver interference.",
    introParagraph2: "Rent well-maintained automatic hatchbacks, executive sedans, and high-clearance SUVs for daily office commutes, client meetings, or weekend road trips. Transparent pricing with no hidden charges.",
    introParagraph3: "Fast 15-minute doorstep drop across Cyber Towers, Mindspace IT Park, Inorbit Mall zone, and Madhapur.",
    serviceAreas: ['Cyber Towers', 'Mindspace Madhapur', 'Inorbit Mall Area', 'Raheja Mindspace', 'Kavuri Hills'],
  },
  'jubilee-hills': {
    name: 'Jubilee Hills',
    h1Title: 'Self Drive & Luxury Wedding Car Rental in Jubilee Hills',
    introParagraph1: "DriveIt Cars provides premium self-drive cars, luxury VIP event transport, and wedding cars in Jubilee Hills. Discover total driving pleasure in prestigious, fully insured vehicles maintained to showroom perfection.",
    introParagraph2: "From luxury convertibles and executive sedans to rugged 4x4 SUVs and spacious group coaches, we deliver luxury at honest, competitive prices.",
    introParagraph3: "Prompt doorstep service across Road No. 36, 45, Film Nagar junction, and Apollo Hospitals hub.",
    serviceAreas: ['Road No. 36', 'Road No. 45', 'Journalist Colony', 'Apollo Hospitals Hub', 'Prashasan Nagar'],
  },
  'masab-tank': {
    name: 'Masab Tank',
    h1Title: 'Self Drive Cars & Car Rental in Masab Tank',
    introParagraph1: "DriveIt Cars Central Hub is proudly stationed in Masab Tank, Hyderabad. Conveniently connected to Banjara Hills, Mehdipatnam, and the Airport Expressway, we offer instant walk-in pickups and swift doorstep drops.",
    introParagraph2: "Rent sanitized hatchbacks, sedans, 5-seater SUVs, and 7-seater family cars at direct fleet owner prices with 10-minute digital KYC verification.",
    introParagraph3: "Visit our central operations office at Mehar Mansion, Shantinagar Colony, or order a car to your home.",
    serviceAreas: ['Shantinagar Colony', 'NMDC Circle', 'Mehar Mansion Hub', 'Mahaveer Hospital Rd', 'AC Guards'],
  },
  'secunderabad': {
    name: 'Secunderabad',
    h1Title: 'Self Drive Car Rental Services in Secunderabad',
    introParagraph1: "Searching for the most dependable self-drive car rental in Secunderabad? DriveIt Cars provides clean, sanitized cars for personal, family, and outstation trips across the twin cities.",
    introParagraph2: "Skip crowded public transport and travel on your own schedule. Enjoy unlimited freedom, clear transparent fuel terms, and 24/7 customer assistance.",
    introParagraph3: "Direct doorstep delivery near Secunderabad Railway Station, Paradise Circle, Clock Tower, and Trimulgherry.",
    serviceAreas: ['Secunderabad Station', 'Paradise Circle', 'Clock Tower', 'Trimulgherry', 'Marredpally'],
  },
  'kukatpally': {
    name: 'Kukatpally',
    h1Title: 'Self Drive Car Rental in Kukatpally & KPHB',
    introParagraph1: "DriveIt Cars offers flexible self-drive car rental in Kukatpally and KPHB Colony. Perfect for family outings, shopping trips, outstation getaways, and daily city transit.",
    introParagraph2: "Choose from economical manual and automatic hatchbacks, comfort sedans, and 7-seater family SUVs like Ertiga and Innova Crysta.",
    introParagraph3: "Doorstep delivery available across KPHB Phases 1 to 9, Forum Sujana Mall area, and JNTU Road.",
    serviceAreas: ['KPHB Phase 1-9', 'JNTU Circle', 'Forum Sujana Mall Hub', 'Vivekananda Nagar', 'Y-Junction'],
  },
  'mehdipatnam': {
    name: 'Mehdipatnam',
    h1Title: 'Self Drive Cars in Mehdipatnam & Airport Route',
    introParagraph1: "Rent reliable self-drive cars in Mehdipatnam with DriveIt Cars. Located directly on the PVNR Expressway corridor towards Rajiv Gandhi International Airport, we ensure rapid car delivery for travelers.",
    introParagraph2: "Affordable daily, weekly, and monthly rates on popular cars like Swift, Baleno, Dzire, Creta, and Thar. No hidden fees.",
    introParagraph3: "Convenient pickup spots around Rythu Bazar, Pillar 1 to 50, and Sarojini Devi Eye Hospital area.",
    serviceAreas: ['PVNR Expressway Pillars', 'Rythu Bazar', 'Rethi Bowli', 'Murad Nagar', 'Attapur Border'],
  },
  'ameerpet': {
    name: 'Ameerpet',
    h1Title: 'Self Drive Car Rental in Ameerpet & SR Nagar',
    introParagraph1: "DriveIt Cars provides budget-friendly self-drive car hire in Ameerpet and SR Nagar. Ideal for students, professionals, and city shoppers seeking independent mobility.",
    introParagraph2: "Book online in minutes with minimal documentation. Well-maintained fleet equipped with airbags, ABS, and chilled AC.",
    introParagraph3: "Fast doorstep handover near Ameerpet Metro Station, Mythrivanam, and Balkampet.",
    serviceAreas: ['Ameerpet Metro Hub', 'Mythrivanam', 'SR Nagar Main Rd', 'Balkampet', 'Dharam Karam Rd'],
  },
  'begumpet': {
    name: 'Begumpet',
    h1Title: 'Self Drive & Luxury Car Rental in Begumpet',
    introParagraph1: "Looking for top-rated car rentals in Begumpet? DriveIt Cars delivers premium self-drive vehicles and chauffeur-driven luxury cars for airport runs and business travel.",
    introParagraph2: "Fully insured cars, regular sanitization, and flexible hourly or daily packages to suit your personal schedule.",
    introParagraph3: "Doorstep delivery available near Begumpet Airport, Prakash Nagar Metro, and Shoppers Stop area.",
    serviceAreas: ['Begumpet Airport Zone', 'Prakash Nagar', 'Rasoolpura', 'Mayur Marg', 'Kundanbagh'],
  },
  'lb-nagar': {
    name: 'LB Nagar',
    h1Title: 'Self Drive Car Rental in LB Nagar & East Hyderabad',
    introParagraph1: "DriveIt Cars extends high quality self-drive car rentals to LB Nagar, Kothapet, and East Hyderabad. Head out for outstation road trips towards Vijayawada or explore the city with total comfort.",
    introParagraph2: "Spacious 5-seater and 7-seater SUVs available with full insurance and breakdown support.",
    introParagraph3: "Quick doorstep handover across LB Nagar Ring Road, Chintalkunta, and Sagar Ring Road.",
    serviceAreas: ['LB Nagar Ring Road', 'Kothapet', 'Chintalkunta', 'Sagar Ring Road', 'Mansoorabad'],
  },
};

// Generates fallback for any locality that doesn't have custom text yet
export function getDefaultLocationData(slug) {
  if (LOCATION_DEFAULTS[slug]) {
    return LOCATION_DEFAULTS[slug];
  }
  const formattedName = slug
    .replace(/-luxury-car-rental$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    name: formattedName,
    h1Title: `Self Drive Cars & Luxury Car Rental in ${formattedName}`,
    introParagraph1: `Looking for the most reliable self-drive car rental service in ${formattedName}? DriveIt Cars makes it effortless to drive around Hyderabad with complete freedom and comfort. Choose from our wide fleet of sanitized hatchbacks, sedans, SUVs, and luxury wedding cars.`,
    introParagraph2: `Whether planning a corporate commute, a family holiday, or a monthly subscription, our flexible plans suit your requirements with transparent pricing and zero driver interference.`,
    introParagraph3: `We provide guaranteed on-time doorstep delivery across ${formattedName} and surrounding landmarks with 24/7 on-road customer assistance.`,
    serviceAreas: [`${formattedName} Main Road`, `${formattedName} Hub`, 'Hyderabad Metro Access'],
  };
}

export async function getLocationData(slug) {
  const cleanSlug = slug.replace(/-luxury-car-rental$/, '');
  try {
    const data = await client.fetch(
      `*[_type == "locationPage" && (slug.current == $slug || slug.current == $cleanSlug)][0]`,
      { slug, cleanSlug }
    );
    if (data) {
      return {
        name: data.name || getDefaultLocationData(cleanSlug).name,
        h1Title: data.h1Title || getDefaultLocationData(cleanSlug).h1Title,
        introParagraph1: data.introParagraph1 || getDefaultLocationData(cleanSlug).introParagraph1,
        introParagraph2: data.introParagraph2 || getDefaultLocationData(cleanSlug).introParagraph2,
        introParagraph3: data.introParagraph3 || getDefaultLocationData(cleanSlug).introParagraph3,
        serviceAreas: data.serviceAreas && data.serviceAreas.length > 0 ? data.serviceAreas : getDefaultLocationData(cleanSlug).serviceAreas,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        customFaqs: data.customFaqs || null,
        locationImage: data.locationImage || null,
      };
    }
  } catch (err) {
    console.warn(`Sanity getLocationData fallback for [${slug}]:`, err.message);
  }
  return getDefaultLocationData(cleanSlug);
}
