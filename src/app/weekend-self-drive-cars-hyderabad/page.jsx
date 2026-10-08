import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Weekend Self Drive Cars Hyderabad | Outstation Getaway Offers | DRIVEIT',
  description:
    'Special weekend self drive cars in Hyderabad starting Friday evening to Monday. Unlimited kms packages for Srisailam, Nagarjuna Sagar, Ananthagiri & Hampi with DRIVEIT.',
  alternates: {
    canonical: 'https://www.driveitcars.in/weekend-self-drive-cars-hyderabad',
  },
  openGraph: {
    title: 'Weekend Self Drive Cars Hyderabad | Outstation Road Trips | DRIVEIT',
    description:
      'Rent weekend self drive cars in Hyderabad. Hatchbacks, sedans & SUVs for Friday to Monday getaways with doorstep drop & 24/7 on-road support.',
    url: 'https://www.driveitcars.in/weekend-self-drive-cars-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/cars/5-Thar.png',
        width: 1200,
        height: 630,
        alt: 'Weekend Self Drive Cars Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weekend Self Drive Cars Hyderabad | Road Trip Getaways',
    description: 'Book weekend self drive cars in Hyderabad. Thar 4x4, Creta, Innova Crysta for your getaway.',
  },
};

const ROAD_TRIPS = [
  {
    dest: 'Ananthagiri Hills & Vikarabad',
    dist: '80 Km (2 Hours)',
    bestCar: 'Mahindra Thar 4x4 / Hyundai Creta',
    desc: 'Dense coffee plantations, serene ghat bends, and forest trekking. Perfect quick weekend monsoon drive.',
  },
  {
    dest: 'Nagarjuna Sagar Dam & Ethipothala Falls',
    dist: '150 Km (3.5 Hours)',
    bestCar: 'Maruti Suzuki Dzire / Hyundai Creta',
    desc: 'Breathtaking reservoir views, waterfalls, and Buddhist monuments along scenic smooth state highways.',
  },
  {
    dest: 'Srisailam Jyotirlinga & Tiger Reserve',
    dist: '215 Km (5 Hours)',
    bestCar: 'Toyota Innova Crysta / Mahindra XUV700',
    desc: 'Deep forest ghat roads through Nallamala hills. 7-seater SUVs offer best comfort and steep hill safety.',
  },
  {
    dest: 'Warangal & Laknavaram Lake',
    dist: '145 Km (3 Hours)',
    bestCar: 'Suzuki Baleno / Hyundai Verna',
    desc: 'UNESCO heritage Thousand Pillar Temple, Warangal Fort, and hanging suspension bridge over Laknavaram Lake.',
  },
  {
    dest: 'Gandikota (Grand Canyon of India)',
    dist: '380 Km (7 Hours)',
    bestCar: 'Toyota Fortuner / Innova Crysta',
    desc: 'Gorge of Pennar river, Belum Caves, and ancient fort ruins. A true highway road trip for driving enthusiasts.',
  },
  {
    dest: 'Bidar Fort & Gurudwara',
    dist: '140 Km (3 Hours)',
    bestCar: 'Suzuki Brezza / Hyundai Creta',
    desc: 'Massive Mahmud Gawan architecture, ancient bastions, and royal palace complexes across Karnataka border.',
  },
];

const WEEKEND_CARS = [
  {
    name: 'Mahindra Thar 4x4',
    type: 'Adventure SUV',
    weekendDeal: 'Tariff on Request (Fri 6pm – Mon 9am)',
    image: '/assets/img/cars/5-Thar.png',
    features: 'Diesel 4x4 • 5 Seater • All-Terrain',
  },
  {
    name: 'Hyundai Creta Automatic',
    type: 'Compact Luxury SUV',
    weekendDeal: 'Tariff on Request (Fri 6pm – Mon 9am)',
    image: '/assets/img/2023-6.png',
    features: 'Sunroof • Chilled AC • Auto Transmission',
  },
  {
    name: 'Toyota Innova Crysta',
    type: '7 Seater Family King',
    weekendDeal: 'Tariff on Request (Fri 6pm – Mon 9am)',
    image: '/assets/img/crysta.png',
    features: '7 Captain Seats • Big Boot • Diesel',
  },
  {
    name: 'Suzuki Baleno',
    type: 'Duo & Small Family',
    weekendDeal: 'Tariff on Request (Fri 6pm – Mon 9am)',
    image: '/assets/img/cars/Baleno.png',
    features: 'High Mileage • Apple CarPlay • Fastag',
  },
];

const WEEKEND_FAQS = [
  {
    question: 'How does the Weekend Self Drive package work in Hyderabad?',
    answer:
      'Our weekend package is designed for maximum convenience: pick up or receive doorstep delivery on Friday evening (e.g. 6:00 PM) and return Monday morning (e.g. 9:00 AM or 10:00 AM). You get a flat bundled weekend discount rate with generous km allowances.',
  },
  {
    question: 'Can I take the self drive car outside Hyderabad and interstate?',
    answer:
      'Yes, 100%! All DRIVEIT self drive cars have commercial All-India Tourist Permits and FASTag. You can freely cross into Andhra Pradesh, Karnataka, Maharashtra, or Goa with zero legal hassle.',
  },
  {
    question: 'What if the car breaks down during my weekend trip?',
    answer:
      'Every weekend rental includes complimentary 24/7 Roadside Assistance (RSA). In case of a tyre puncture, dead battery, or mechanical breakdown anywhere on state or national highways, our pan-India network assists you immediately.',
  },
  {
    question: 'When should I book weekend self drive cars in Hyderabad?',
    answer:
      'Weekend demand in Hyderabad peaks on Thursdays and Fridays, especially for Mahindra Thar, Innova Crysta, and Creta. We strongly advise reserving 24 to 48 hours in advance via our website or WhatsApp (+91 6300041186) to secure your preferred vehicle.',
  },
];

export default function WeekendSelfDriveHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Weekend Self Drive Cars Hyderabad',
    description:
      'Special weekend self drive car rentals in Hyderabad. Friday to Monday road trip packages for Srisailam, Ananthagiri Hills, Nagarjuna Sagar, and outstation getaways.',
    url: 'https://www.driveitcars.in/weekend-self-drive-cars-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Gachibowli', 'Telangana'],
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Self Drive Cars', url: '/self-drive-car' },
    { name: 'Weekend Self Drive Cars Hyderabad', url: '/weekend-self-drive-cars-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(WEEKEND_FAQS);

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
                <h3>Weekend Self Drive Cars</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/self-drive-car">Self Drive Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Weekend Self Drive Cars Hyderabad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HERO / INTRO ========== */}
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
                  ✦ FRIDAY TO MONDAY GETAWAY PACKAGES
                </span>
                <h1 style={{ color: '#ffb907', fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>
                  Weekend Self Drive Cars Hyderabad — Road Trips &amp; Weekend Getaways
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Planning an escape from the city hustle this weekend? DRIVEIT Cars offers the most flexible and affordable <strong>weekend self drive cars Hyderabad</strong> packages. Whether you want to take a romantic retreat to Ananthagiri Hills, explore the ancient ruins of Warangal, or embark on a multi-day family pilgrimage to Srisailam, our sanitized hatchbacks, premium sedans, and rugged SUVs are fully prepped for the open highway.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Enjoy Friday evening delivery directly to your apartment or IT office in HITEC City, Gachibowli, Madhapur, or Kondapur, and simply return the car on Monday morning. With zero driver intrusion, unlimited music playlists, and complete freedom to stop whenever you see a scenic sunset, your weekend road trip starts the second you hold the keys.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
                  <a href="tel:+916300041186" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px' }}>
                    <i className="fa fa-phone" style={{ marginRight: 6 }} /> Reserve Weekend Car
                  </a>
                  <Link href="/self-drive-suv-hyderabad" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px', background: '#0f172a' }}>
                    Explore Self Drive SUVs
                  </Link>
                  <Link href="/monthly-self-drive-cars-hyderabad" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px', background: '#2563eb' }}>
                    Monthly Subscriptions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WEEKEND PACKAGES GRID ========== */}
      <section className="gauto-offers-area section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="site-heading text-center" style={{ marginBottom: '35px' }}>
            <span style={{ color: '#ffb907', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Special Weekend Deals
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              Top Cars for Weekend Self Drive in Hyderabad
            </h2>
          </div>

          <div className="row">
            {WEEKEND_CARS.map((car, idx) => {
              const whatsappText = encodeURIComponent(
                `Hi DRIVEIT Cars, I want to book the weekend self drive deal for [${car.name}] in Hyderabad. Please share availability.`
              );

              return (
                <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                  <div className="single-offers" style={{ background: '#ffffff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                    <div className="offer-image" style={{ width: '100%', height: '170px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        loading="lazy"
                        src={car.image}
                        alt={`${car.name} weekend self drive cars Hyderabad`}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="offer-text" style={{ padding: '16px' }}>
                      <span style={{ display: 'inline-block', fontSize: '11px', background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '4px', fontWeight: 700, marginBottom: '6px' }}>
                        {car.type}
                      </span>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 6px' }}>
                        {car.name}
                      </h3>
                      <div style={{ background: '#f1f5f9', padding: '8px 10px', borderRadius: '8px', marginBottom: '10px' }}>
                        <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Weekend Package:</span>
                        <strong style={{ fontSize: '14px', color: '#0f172a' }}>{car.weekendDeal}</strong>
                      </div>
                      <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px' }}>
                        {car.features}
                      </p>
                      <div className="offer-action" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                        <a href="tel:+916300041186" className="offer-btn-1" style={{ fontSize: '11px', padding: '8px 4px' }}>
                          <i className="fa fa-phone" /> Call
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?phone=+916300041186&text=${whatsappText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="offer-btn-2"
                          style={{ fontSize: '11px', padding: '8px 4px' }}
                        >
                          <i className="fa fa-whatsapp" /> WhatsApp
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

      {/* ========== TOP ROAD TRIPS FROM HYDERABAD ========== */}
      <section className="about-page-area section_70">
        <div className="container">
          <div className="site-heading text-center" style={{ marginBottom: '35px' }}>
            <span style={{ color: '#ffb907', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Travel Inspiration
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              Top Weekend Road Trips from Hyderabad
            </h2>
            <p style={{ color: '#6b7280', fontSize: '14px', maxWidth: '650px', margin: '8px auto 0' }}>
              Discover the most popular self drive road trip destinations within easy driving distance from Hyderabad.
            </p>
          </div>

          <div className="row">
            {ROAD_TRIPS.map((trip, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ display: 'inline-block', fontSize: '12px', background: '#eff6ff', color: '#1d4ed8', padding: '3px 10px', borderRadius: '16px', fontWeight: 600, marginBottom: '8px' }}>
                      📍 {trip.dist}
                    </span>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {trip.dest}
                    </h4>
                    <p style={{ color: '#64748b', fontSize: '13px', lineHeight: '1.6', marginBottom: '12px' }}>
                      {trip.desc}
                    </p>
                  </div>
                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px' }}>
                    <small style={{ color: '#94a3b8', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recommended Car:</small>
                    <div style={{ color: '#d97706', fontWeight: 600, fontSize: '13px' }}>{trip.bestCar}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <FaqSection
        items={WEEKEND_FAQS}
        title="Frequently Asked Questions — Weekend Self Drive Cars Hyderabad"
        subtitle="Got questions about booking self drive cars for weekend road trips? We have answers."
      />
    </>
  );
}
