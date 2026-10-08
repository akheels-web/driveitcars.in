import { client } from './client';

export const LOCATION_DEFAULTS = {
  'hitech-city': {
    name: 'Hitech City',
    h1Title: 'Self Drive Cars in HITEC City Hyderabad',
    introParagraph1: "Searching for the best self drive cars in HITEC City Hyderabad? DRIVEIT Cars offers an unmatched fleet of sanitized, modern self-drive cars tailored for IT executives, tech professionals, and travelers. Whether you need a fuel-efficient hatchback for your daily commute to Cyber Towers, an automatic sedan for client meetings, or a spacious 7-seater SUV for a weekend highway getaway, we deliver right to your doorstep.",
    introParagraph2: "Skip surge pricing and intrusive drivers. Our self drive cars HITEC City fleet includes Maruti Swift, Baleno, Hyundai Creta, Mahindra Thar 4x4, Toyota Innova Crysta, and luxury BMW & Fortuner Legender. All vehicles come with 100% privacy, comprehensive insurance, transparent pricing, and 24/7 on-road breakdown assistance.",
    introParagraph3: "We offer guaranteed 15-minute express doorstep handover across Cyber Towers, Raheja Mindspace, Knowledge City, Inorbit Mall, Bio-Diversity Park, and Durgam Cheruvu Cable Bridge corridor.",
    serviceAreas: ['Cyber Towers', 'Mindspace IT Park', 'Knowledge City', 'Inorbit Mall Zone', 'Durgam Cheruvu Hub', 'Kavuri Hills', 'T-Hub 2.0'],
    seoTitle: 'Self Drive Cars HITEC City Hyderabad | Fast Doorstep Drop | DRIVEIT',
    seoDescription: 'Rent self drive cars in HITEC City Hyderabad. Sanitized automatic & manual hatchbacks, sedans, SUVs at Cyber Towers, Mindspace & DLF. Zero deposit, 24/7 delivery.',
    customFaqs: [
      { question: 'How do I book self drive cars in HITEC City Hyderabad?', answer: 'Booking self drive cars in HITEC City is quick and 100% digital with DRIVEIT. Simply select your car on our website or contact us via WhatsApp/call at +91 6300041186. Upload your valid driving licence and Aadhaar card for 10-minute digital verification, and we will deliver the vehicle to your doorstep in HITEC City.' },
      { question: 'Can I get a self drive SUV in HITEC City for weekend getaways?', answer: 'Yes! We have an extensive lineup of self drive SUVs in HITEC City including Hyundai Creta, Mahindra Thar 4x4, Toyota Fortuner, and Toyota Innova Crysta. All SUVs are highway-ready with high ground clearance, perfect for trips to Srisailam, Ananthagiri Hills, or Goa.' },
      { question: 'Is security deposit required for renting self drive cars in HITEC City?', answer: 'We offer zero deposit options on select fleet models for verified IT corporate professionals. For other vehicles, we charge a nominal, 100% refundable security deposit refunded within 24 hours of vehicle return.' },
      { question: 'Do you offer monthly self drive car subscriptions in HITEC City?', answer: 'Yes, we provide flexible monthly self drive car subscriptions in HITEC City with discounts up to 45% off daily rates. Free regular servicing, zero maintenance hassle, and doorstep delivery are included.' },
    ],
  },
  'gachibowli': {
    name: 'Gachibowli',
    h1Title: 'Self Drive Cars in Gachibowli Hyderabad',
    introParagraph1: "Looking for reliable self drive cars in Gachibowli Hyderabad? DRIVEIT Cars delivers premium self-drive hatchbacks, sedans, SUVs, and luxury vehicles directly to your residence, office, or hotel. Stationed next to Hyderabad's booming Financial District, Gachibowli is our primary delivery corridor with rapid vehicle dispatch.",
    introParagraph2: "Whether you are an IT professional working at Microsoft, Google, or Wipro, or a family heading out on the Nehru Outer Ring Road (ORR) for a weekend getaway, our self drive cars in Gachibowli offer total independence. Choose from manual and automatic models with zero hidden charges.",
    introParagraph3: "Fast 15-minute doorstep delivery across DLF Cybercity, Financial District, Waverock, Wipro Circle, Gowlidoddy, ISB Road, and ORR Exit 19.",
    serviceAreas: ['Financial District', 'DLF Cybercity', 'Waverock Campus', 'Wipro Circle', 'ORR Exit 19', 'Gowlidoddy', 'ISB Road'],
    seoTitle: 'Self Drive Cars Gachibowli Hyderabad | Best Rates | DRIVEIT',
    seoDescription: 'Hire self drive cars in Gachibowli Hyderabad. Affordable daily & monthly car rentals near Financial District, DLF Cybercity, ORR Exit 19. Unlimited kms, 24/7 support.',
    customFaqs: [
      { question: 'Where in Gachibowli can I receive my self drive car?', answer: 'We deliver self drive cars across all parts of Gachibowli including Financial District, DLF Cybercity, Waverock, Wipro Circle, ISB Road, and ORR Exit 19. Doorstep delivery takes only 15–20 minutes upon booking confirmation.' },
      { question: 'Can I drive the car outstation from Gachibowli via ORR?', answer: 'Absolutely. With direct access to Outer Ring Road (ORR) from Gachibowli, you can seamlessly drive to Bengaluru highway, Vijayawada highway, or Rajiv Gandhi International Airport (RGIA Shamshabad) in under 25 minutes. All vehicles carry all-India permits.' },
      { question: 'What documents are needed for self drive car rental in Gachibowli?', answer: 'You only need an original valid Driving Licence (minimum 1 year old) and an Aadhaar Card or Passport. KYC verification is done digitally in under 10 minutes.' },
    ],
  },
  'madhapur': {
    name: 'Madhapur',
    h1Title: 'Self Drive Cars in Madhapur Hyderabad',
    introParagraph1: "Searching for self drive cars in Madhapur Hyderabad? DRIVEIT Cars is Cyberabad's most trusted self-drive car rental provider. Situated in the beating heart of Hyderabad's tech and dining scene, Madhapur demands swift, flexible mobility. Rent sanitized cars with zero driver interference and transparent fuel policies.",
    introParagraph2: "From compact hatchbacks like Maruti Swift and Baleno for navigating vibrant Madhapur lanes to rugged SUVs like Thar and Creta for outstation escapades, we cater to all driving needs. Available for daily, weekend, and monthly subscription rentals.",
    introParagraph3: "Prompt delivery available along 100 Feet Road, Durgam Cheruvu Cable Bridge, Avasa Hotel junction, Kavuri Hills, Madhapur Metro Station, and Inorbit Mall.",
    serviceAreas: ['100 Feet Road', 'Durgam Cheruvu Cable Bridge', 'Kavuri Hills', 'Madhapur Metro Station', 'Avasa Hotel Junction', 'Image Hospitals Area'],
    seoTitle: 'Self Drive Cars Madhapur Hyderabad | Rent A Car | DRIVEIT',
    seoDescription: 'Rent self drive cars in Madhapur Hyderabad. Hatchbacks, sedans & SUVs near Durgam Cheruvu, Metro, Inorbit & Avasa. Instant KYC verification, zero deposit options.',
    customFaqs: [
      { question: 'How fast can I get a self drive car in Madhapur?', answer: 'We provide rapid 15 to 30 minute doorstep delivery across Madhapur, including 100 Feet Road, Kavuri Hills, and near Durgam Cheruvu Cable Bridge.' },
      { question: 'Can I rent self drive cars in Madhapur for monthly office commute?', answer: 'Yes! Our monthly self drive car subscriptions in Madhapur are popular among tech professionals, offering up to 45% savings compared to daily rental rates, with free doorstep servicing and 0 maintenance costs.' },
      { question: 'Are both manual and automatic cars available in Madhapur?', answer: 'Yes, our Madhapur fleet features both manual and smooth automatic transmission options across hatchbacks (Baleno, Swift), sedans (Dzire, Verna), and SUVs (Creta, Thar, Innova Crysta).' },
    ],
  },
  'kondapur': {
    name: 'Kondapur',
    h1Title: 'Self Drive Cars in Kondapur Hyderabad',
    introParagraph1: "Hire the finest self drive cars in Kondapur Hyderabad with DRIVEIT Cars. Connecting HITEC City, Gachibowli, and Miyapur, Kondapur is one of Hyderabad's fastest-growing residential and commercial epicenters. Experience ultimate privacy and convenience with our fully insured, sanitized fleet.",
    introParagraph2: "Whether you are planning a family outing around Sarath City Capital Mall, heading to Botanical Garden, or taking a weekend highway trip towards Srisailam or Bidar, our self drive cars in Kondapur offer the ideal solution at honest, pocket-friendly rates.",
    introParagraph3: "Enjoy quick doorstep drops near Botanical Garden Road, Kothaguda Junction, Sarath City Capital Mall, Hafeezpet Road, and Raghava Ratna Towers.",
    serviceAreas: ['Botanical Garden Rd', 'Sarath City Capital Mall', 'Kothaguda Junction', 'Hafeezpet Road', 'Raghava Ratna Towers', 'Chirec Public School Zone'],
    seoTitle: 'Self Drive Cars Kondapur Hyderabad | Affordable Rentals | DRIVEIT',
    seoDescription: 'Looking for self drive cars in Kondapur Hyderabad? Hire well-maintained cars near Botanical Garden, Kothaguda & Sarath City Mall. Fast doorstep delivery, 24/7 support.',
    customFaqs: [
      { question: 'Can I get doorstep delivery of self drive cars in Kondapur?', answer: 'Yes, we deliver self drive cars directly to your home, apartment complex, or hotel in Kondapur, including near Botanical Garden, Kothaguda, and Sarath City Mall within 20 minutes.' },
      { question: 'What self drive car models are available in Kondapur?', answer: 'We provide a diverse fleet in Kondapur: hatchbacks (Maruti Swift, Baleno), sedans (Maruti Dzire, Hyundai Verna), 5-seater SUVs (Hyundai Creta, Mahindra Thar, Brezza), and 7-seater family cars (Innova Crysta, Ertiga).' },
      { question: 'Can I take the self drive car from Kondapur for an outstation road trip?', answer: 'Yes! All DRIVEIT self drive cars have valid All-India tourist permits, fastag, comprehensive insurance, and 24/7 roadside assistance for smooth interstate and highway journeys.' },
    ],
  },
  'banjara-hills': {
    name: 'Banjara Hills',
    h1Title: 'Self Drive Car & Luxury Car Rental in Banjara Hills',
    introParagraph1: "DriveIt Cars delivers premier self-drive car rentals and luxury wedding cars in Banjara Hills, Hyderabad's prestigious upscale neighborhood. Whether visiting for business, attending high-profile events, or exploring the city, our immaculate fleet meets the highest standards.",
    introParagraph2: "Choose from world-class luxury vehicles including BMW, Mercedes-Benz, Audi, and Jaguar, alongside popular self-drive SUVs like Toyota Fortuner, Mahindra Thar, and Hyundai Creta with unlimited freedom.",
    introParagraph3: "Fast doorstep delivery across Road No. 1, 2, 10, 12, Care Hospital, and Taj Krishna area with instant digital verification.",
    serviceAreas: ['Road No. 1 & 2', 'Road No. 10 & 12', 'Taj Krishna Hub', 'Star Hospitals Circle', 'MLA Colony'],
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
    h1Title: `Self Drive Cars & Car Rental in ${formattedName} Hyderabad`,
    introParagraph1: `Looking for the most reliable self-drive car rental service in ${formattedName} Hyderabad? DRIVEIT Cars makes it effortless to drive around Hyderabad with complete freedom and comfort. Choose from our wide fleet of sanitized hatchbacks, sedans, SUVs, and luxury wedding cars.`,
    introParagraph2: `Whether planning a corporate commute, a family holiday, or a monthly subscription, our flexible plans suit your requirements with transparent pricing and zero driver interference.`,
    introParagraph3: `We provide guaranteed on-time doorstep delivery across ${formattedName} and surrounding landmarks with 24/7 on-road customer assistance.`,
    serviceAreas: [`${formattedName} Main Road`, `${formattedName} Hub`, 'Hyderabad Metro Access'],
    seoTitle: `Self Drive Cars ${formattedName} Hyderabad | Best Rates | DRIVEIT`,
    seoDescription: `Rent self drive cars in ${formattedName}, Hyderabad with DRIVEIT. Wide range of hatchbacks, sedans & SUVs with fast doorstep delivery and zero deposit options.`,
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
        seoTitle: data.seoTitle || getDefaultLocationData(cleanSlug).seoTitle,
        seoDescription: data.seoDescription || getDefaultLocationData(cleanSlug).seoDescription,
        customFaqs: data.customFaqs && data.customFaqs.length > 0 ? data.customFaqs : (getDefaultLocationData(cleanSlug).customFaqs || null),
        locationImage: data.locationImage || null,
      };
    }
  } catch (err) {
    console.warn(`Sanity getLocationData fallback for [${slug}]:`, err.message);
  }
  return getDefaultLocationData(cleanSlug);
}

export async function getLocationMetadata(slug) {
  const loc = await getLocationData(slug);
  const cleanSlug = slug.replace(/-luxury-car-rental$/, '');
  const title = loc.seoTitle || `Self Drive Cars ${loc.name} Hyderabad | Best Rates | DRIVEIT`;
  const description = loc.seoDescription || `Rent self drive cars in ${loc.name}, Hyderabad with DRIVEIT. Wide range of hatchbacks, sedans, SUVs & luxury cars with doorstep delivery and zero deposit options.`;
  const canonicalUrl = `https://www.driveitcars.in/${cleanSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'DRIVEIT Cars Hyderabad',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: 'https://www.driveitcars.in/assets/img/cars/Swift.png',
          width: 1200,
          height: 630,
          alt: `Self Drive Cars in ${loc.name} Hyderabad`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
