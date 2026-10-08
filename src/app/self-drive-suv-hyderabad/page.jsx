import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Self Drive SUV Hyderabad | 5 & 7 Seater SUVs (Thar, Creta, Fortuner, Innova)',
  description:
    'Rent self drive SUV in Hyderabad with DRIVEIT. Book Mahindra Thar 4x4, Creta, Brezza, Innova Crysta, XUV700 & Fortuner Legender. Unlimited kms, zero deposit & 24/7 delivery.',
  alternates: {
    canonical: 'https://www.driveitcars.in/self-drive-suv-hyderabad',
  },
  openGraph: {
    title: 'Self Drive SUV Hyderabad | 5 & 7 Seater SUVs | DRIVEIT',
    description:
      'Book self drive SUVs in Hyderabad. Drive Thar 4x4, Creta, Innova Crysta, XUV700 & Fortuner. Best rates, sanitized cars, doorstep delivery.',
    url: 'https://www.driveitcars.in/self-drive-suv-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/suv.jpg',
        width: 1200,
        height: 630,
        alt: 'Self Drive SUV Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Drive SUV Hyderabad | 5 & 7 Seater SUVs',
    description: 'Rent self drive SUVs in Hyderabad. Thar 4x4, Creta, Fortuner, Innova Crysta with DRIVEIT.',
  },
};

const SUV_FLEET = [
  {
    name: 'Mahindra Thar 4x4',
    type: '5 Seater SUV',
    image: '/assets/img/cars/5-Thar.png',
    fuel: 'Diesel',
    trans: 'Manual / Automatic',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'Iconic 4x4 off-roader with removable hard top, high ground clearance, and rugged road presence.',
    ideal: 'Off-roading, Vikarabad, Ananthagiri Hills, Solo & Duo adventures',
  },
  {
    name: 'Hyundai Creta',
    type: '5 Seater SUV',
    image: '/assets/img/2023-6.png',
    fuel: 'Petrol / Diesel',
    trans: 'Automatic',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'Panoramic sunroof, ventilated seats, smooth automatic drive, and comfortable plush cabin.',
    ideal: 'City commutes, corporate travel, highway cruising',
  },
  {
    name: 'Maruti Suzuki Brezza',
    type: '5 Seater SUV',
    image: '/assets/img/cars/5-Brezza.png',
    fuel: 'Petrol',
    trans: 'Manual',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'High fuel efficiency, reliable compact SUV, chilled air conditioning, and generous headroom.',
    ideal: 'Budget weekend getaways, city drives, Nagarjuna Sagar',
  },
  {
    name: 'Kia Seltos',
    type: '5 Seater SUV',
    image: '/assets/img/cars/5-Seltos.png',
    fuel: 'Diesel',
    trans: 'Automatic',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'Sporty design, Bose audio, connected tech, and responsive highway performance.',
    ideal: 'Tech professionals, long distance touring',
  },
  {
    name: 'Toyota Innova Crysta',
    type: '7 Seater SUV / MPV',
    image: '/assets/img/crysta.png',
    fuel: 'Diesel',
    trans: 'Manual / Automatic',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'The undisputed King of Indian highways. Captain seats, huge luggage boot, and bulletproof reliability.',
    ideal: 'Family vacations, Tirupati, Srisailam, Shirdi outstation trips',
  },
  {
    name: 'Toyota Fortuner Legender',
    type: '7 Seater Luxury SUV',
    image: '/assets/img/fortuner.png',
    fuel: 'Diesel 4x4',
    trans: 'Automatic',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'Maximum VIP road presence, monstrous 4x4 torque, premium leather interiors, and unmatched prestige.',
    ideal: 'VIP events, weddings, executive travel, high-profile outstation tours',
  },
  {
    name: 'Mahindra XUV700',
    type: '7 Seater SUV',
    image: '/assets/img/cars/7-XUV700.png',
    fuel: 'Diesel',
    trans: 'Automatic',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'Advanced ADAS safety features, dual digital screens, panoramic Skyroof, and powerful turbo engine.',
    ideal: 'Modern tech-lovers, luxury group road trips',
  },
  {
    name: 'Maruti Suzuki Ertiga',
    type: '7 Seater Family SUV',
    image: '/assets/img/cars/7-Ertiga.png',
    fuel: 'Petrol / CNG',
    trans: 'Manual',
    kmPerDay: '300 Km/Day',
    price: 'Tariff on Request',
    desc: 'Best value 7-seater car in Hyderabad with excellent fuel economy and flexible folding seats.',
    ideal: 'Budget family road trips, temple tours, airport group pickups',
  },
];

const SUV_FAQS = [
  {
    question: 'Why choose a self drive SUV in Hyderabad over a sedan or hatchback?',
    answer:
      'A self drive SUV in Hyderabad offers 190mm–225mm ground clearance, superior highway stability, elevated road visibility, and ample boot space for luggage. Whether navigating monsoon waterlogging in Cyberabad or driving on rough ghat roads toward Srisailam, Araku, or Goa, SUVs offer unmatched safety and peace of mind.',
  },
  {
    question: 'Which self drive SUVs in Hyderabad are best for 7 people?',
    answer:
      'For 7 passengers, our Toyota Innova Crysta, Toyota Fortuner Legender, Mahindra XUV700, and Maruti Ertiga are the top choices. Innova Crysta provides the most luxurious second-row captain seats, while Fortuner offers unbeatable 4x4 power.',
  },
  {
    question: 'Can I rent a Mahindra Thar 4x4 for self drive in Hyderabad?',
    answer:
      'Yes! DRIVEIT provides well-maintained Mahindra Thar 4x4 diesel self drive cars in Hyderabad. They come with all-terrain tyres, automatic/manual transmissions, convertible/hard top options, and comprehensive zero-dep insurance.',
  },
  {
    question: 'Is there a speed limit for self drive SUVs in Hyderabad?',
    answer:
      'In compliance with Telangana transport safety norms and RTO regulations, commercial self drive cars have a speed governor set at 80 km/h on city and state roads, and 100 km/h where permissible on the Outer Ring Road (ORR) expressways.',
  },
  {
    question: 'Do you deliver self drive SUVs to Rajiv Gandhi International Airport (RGIA) or HITEC City?',
    answer:
      'Yes, we provide 24/7 doorstep delivery of all self drive SUVs across Hyderabad including Shamshabad Airport, HITEC City, Gachibowli, Madhapur, Kondapur, Jubilee Hills, and Secunderabad within 30 minutes of booking.',
  },
];

export default function SelfDriveSuvHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Self Drive SUV Hyderabad',
    description:
      'Rent 5-seater and 7-seater self drive SUVs in Hyderabad. Thar 4x4, Creta, Brezza, Innova Crysta, XUV700 & Fortuner Legender with unlimited kms and doorstep delivery.',
    url: 'https://www.driveitcars.in/self-drive-suv-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Telangana'],
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Self Drive Cars', url: '/self-drive-car' },
    { name: 'Self Drive SUV Hyderabad', url: '/self-drive-suv-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(SUV_FAQS);

  return (
    <>
      <SeoSchema schema={rentalSchema} />
      <SeoSchema schema={breadcrumbSchema} />
      <SeoSchema schema={faqSchema} />

      {/* ========== BREADCRUMB ========== */}
      <section className="gauto-breadcromb-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <h3>Self Drive SUV Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/self-drive-car">Self Drive Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Self Drive SUV Hyderabad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRO SECTION ========== */}
      <section className="about-page-area section_70" style={{ paddingBottom: '30px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-page-left">
                <span
                  style={{
                    background: 'rgba(255, 185, 7, 0.15)',
                    color: '#d49500',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '12px',
                  }}
                >
                  ✦ 5-SEATER &amp; 7-SEATER HIGH-CLEARANCE FLEET
                </span>
                <h1 style={{ color: '#ffb907', fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>
                  Self Drive SUV Hyderabad — 5 &amp; 7 Seater SUVs at Best Rates
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Looking for the most reliable <strong>self drive SUV Hyderabad</strong> service? DRIVEIT Cars delivers an unmatched collection of rugged, powerful, and impeccably maintained 5-seater and 7-seater self drive SUVs right to your doorstep. Whether you want to conquer off-road trails in a <strong>Mahindra Thar 4x4</strong>, glide through Outer Ring Road in a panoramic-sunroof <strong>Hyundai Creta</strong>, or carry the entire family on a pilgrimage in a <strong>Toyota Innova Crysta</strong>, we have the ideal SUV waiting for you.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Driving an SUV in Hyderabad gives you high seating position, commanding 360-degree road views, massive luggage space, and the ground clearance needed to cruise through Telangana highways without worrying about speed breakers or monsoon water hazards. All DRIVEIT SUVs come with zero hidden charges, 100% transparent fuel terms, FASTag equipped, and 24/7 on-road mechanical assistance.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
                  <Link href="/suv5" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px' }}>
                    View 5-Seater SUVs
                  </Link>
                  <Link href="/suv7" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px', background: '#0f172a' }}>
                    View 7-Seater SUVs
                  </Link>
                  <Link href="/weekend-self-drive-cars-hyderabad" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px', background: '#2563eb' }}>
                    Weekend Getaway Packages
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SUV FLEET GRID ========== */}
      <section className="gauto-offers-area section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="site-heading text-center" style={{ marginBottom: '35px' }}>
            <span style={{ color: '#ffb907', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Handpicked Fleet
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              Top Self Drive SUVs Available in Hyderabad
            </h2>
          </div>

          <div className="row">
            {SUV_FLEET.map((suv, idx) => {
              const whatsappText = encodeURIComponent(
                `Hi DRIVEIT Cars, I want to book the self drive SUV [${suv.name}] in Hyderabad. Please share availability and rates.`
              );

              return (
                <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                  <div className="single-offers" style={{ background: '#ffffff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                    <div className="offer-image" style={{ width: '100%', height: '195px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        loading="lazy"
                        src={suv.image}
                        alt={`${suv.name} self drive SUV Hyderabad`}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="offer-text" style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: 0 }}>
                          {suv.name}
                        </h3>
                        <span style={{ color: '#92400e', background: '#fef3c7', padding: '3px 8px', borderRadius: '6px', fontWeight: 700, fontSize: '12px' }}>{suv.price}</span>
                      </div>
                      <span style={{ display: 'inline-block', fontSize: '12px', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '4px', fontWeight: 600, marginBottom: '10px' }}>
                        {suv.type}
                      </span>
                      <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', marginBottom: '12px' }}>
                        {suv.desc}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', gap: '12px', flexWrap: 'wrap', color: '#6b7280', fontSize: '12px' }}>
                        <li><i className="fa fa-gas-pump" style={{ color: '#ffb907', marginRight: 4 }} /> {suv.fuel}</li>
                        <li><i className="fa fa-cogs" style={{ color: '#ffb907', marginRight: 4 }} /> {suv.trans}</li>
                        <li><i className="fa fa-road" style={{ color: '#ffb907', marginRight: 4 }} /> {suv.kmPerDay}</li>
                      </ul>
                      <div className="offer-action" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <a href="tel:+916300041186" className="offer-btn-1">
                          <i className="fa fa-phone" /> Enquire Now
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?phone=+916300041186&text=${whatsappText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="offer-btn-2"
                        >
                          <i className="fa fa-whatsapp" /> WhatsApp Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== WHY RENT SUV SECTION ========== */}
      <section className="about-page-area section_70">
        <div className="container">
          <div className="site-heading text-center" style={{ marginBottom: '35px' }}>
            <span style={{ color: '#ffb907', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              The SUV Advantage
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              Why Hire a Self Drive SUV in Hyderabad?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255, 185, 7, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <i className="fa fa-mountain" style={{ color: '#d49500', fontSize: '20px' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>High Ground Clearance</h4>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                  Hyderabad speed bumps and monsoon water hazards pose zero risk. High clearance ensures smooth, scraping-free driving even with full passengers and luggage.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255, 185, 7, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <i className="fa fa-users" style={{ color: '#d49500', fontSize: '20px' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>Whole Family in One Vehicle</h4>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                  Skip splitting the group into two cabs. Rent a 7-seater Innova Crysta or XUV700 so parents, children, and friends travel together with laughter and comfort.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div style={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', height: '100%' }}>
                <div style={{ width: '48px', height: '48px', background: 'rgba(255, 185, 7, 0.15)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <i className="fa fa-compass" style={{ color: '#d49500', fontSize: '20px' }} />
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>Highway &amp; Ghat Safety</h4>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6' }}>
                  Equipped with multi-airbags, ABS with EBD, electronic stability control, and sturdy chassis dynamics, our SUVs provide superior safety on highway runs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LOCALITY HUBS CROSS LINKS ========== */}
      <section style={{ background: '#0f172a', padding: '40px 0', color: '#fff' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 style={{ color: '#ffb907', fontSize: '24px', fontWeight: 800, marginBottom: '10px' }}>
                Doorstep Self Drive SUV Delivery Across Hyderabad IT Hubs
              </h3>
              <p style={{ color: '#cbd5e1', fontSize: '14px', marginBottom: '14px' }}>
                Get 15-minute delivery of your self drive SUV in HITEC City, Gachibowli, Madhapur, Kondapur, Jubilee Hills, and Banjara Hills.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Link href="/hitech-city" style={{ color: '#ffb907', fontSize: '13px', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '16px' }}>HITEC City SUV Rental</Link>
                <Link href="/gachibowli" style={{ color: '#ffb907', fontSize: '13px', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '16px' }}>Gachibowli SUV Rental</Link>
                <Link href="/madhapur" style={{ color: '#ffb907', fontSize: '13px', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '16px' }}>Madhapur SUV Rental</Link>
                <Link href="/kondapur" style={{ color: '#ffb907', fontSize: '13px', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '16px' }}>Kondapur SUV Rental</Link>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-3 mt-lg-0">
              <a href="tel:+916300041186" className="gauto-btn">
                <i className="fa fa-phone" style={{ marginRight: 6 }} /> Call +91 6300041186
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <FaqSection
        items={SUV_FAQS}
        title="Frequently Asked Questions — Self Drive SUV Hyderabad"
        subtitle="Common questions about renting 5-seater and 7-seater self drive SUVs in Hyderabad"
      />
    </>
  );
}
