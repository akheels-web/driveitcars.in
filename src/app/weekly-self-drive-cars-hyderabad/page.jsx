import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Weekly Self Drive Cars Hyderabad | Save Up to 25% on 7-Day Rentals | DRIVEIT',
  description:
    'Book weekly self drive cars in Hyderabad starting @ ₹8,999/week. Save up to 25% on 7-day rentals for Swift, Baleno, Creta, Thar, Innova Crysta & Fortuner. Manual & Automatic, zero deposit, free doorstep delivery.',
  alternates: {
    canonical: 'https://www.driveitcars.in/weekly-self-drive-cars-hyderabad',
  },
  openGraph: {
    title: 'Weekly Self Drive Cars Hyderabad | 7-Day Car Rental Deals | DRIVEIT',
    description:
      'Save 25% with 7-day weekly car rentals in Hyderabad. Manual & automatic hatchbacks, mini SUVs, 5 & 7-seater SUVs, sedans. Doorstep delivery across HITEC City, Gachibowli, & Airport.',
    url: 'https://www.driveitcars.in/weekly-self-drive-cars-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/cars/Swift.png',
        width: 1200,
        height: 630,
        alt: 'Weekly Self Drive Cars Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weekly Self Drive Cars Hyderabad | DRIVEIT Cars',
    description:
      'Book 7-day weekly self drive car rentals in Hyderabad. Save up to 25% with zero deposit and doorstep delivery.',
  },
};

const WEEKLY_FAQS = [
  {
    question: 'How do weekly self drive car rentals in Hyderabad work with DRIVEIT?',
    answer:
      'Our weekly car rental package provides you with a fully sanitized, GPS-equipped vehicle for 7 consecutive days (168 hours) at a flat discounted rate that saves up to 25% compared to booking 7 separate daily rentals. You enjoy unlimited freedom, flexible fuel terms, zero security deposit options, and doorstep delivery across Hyderabad.',
  },
  {
    question: 'Which top demanding cars are available for weekly rental in Hyderabad?',
    answer:
      'All 28 of our top-demanding fleet cars are available on weekly plans: 5-Seater Hatchbacks (Swift Manual/Automatic, Baleno, i20), Mini SUVs (Fronx, Venue, Punch), 5-Seater SUVs (Brezza, Nexon, Harrier, Seltos, Creta, Thar 4x4, Thar Roxx), 7-Seater SUVs/MUVs (XUV 700, Carens, Ertiga, Innova Crysta, Innova Hycross, Fortuner, Carnival, Scorpio-N, XL6), and Sedans (Verna, Dzire, Ciaz, Virtus, Slavia). Both Manual and Automatic transmissions are available.',
  },
  {
    question: 'How much can I save by choosing a weekly car rental instead of daily rentals?',
    answer:
      'You save between 20% and 25% on average. For example, a Maruti Swift that costs ₹1,499/day (₹10,493 for 7 days) costs only ₹8,999 on our weekly package. Similarly, an Innova Crysta or Creta offers substantial multi-day savings with 2,100 km included for the week.',
  },
  {
    question: 'Can I extend my weekly rental to a monthly car rental subscription?',
    answer:
      'Yes, easily. If your travel plans or project stays in Hyderabad extend beyond one week, our support desk will upgrade your booking into a monthly subscription at even greater discounts (up to 50% off) without needing to return the vehicle.',
  },
  {
    question: 'Is doorstep delivery available for weekly rentals in Hyderabad and Shamshabad Airport?',
    answer:
      'Yes! We deliver directly to your residence, hotel, corporate office in HITEC City / Gachibowli / Financial District, or directly at Rajiv Gandhi International Airport (RGIA Shamshabad) 24/7.',
  },
];

const WEEKLY_FLEET_HIGHLIGHTS = [
  {
    name: 'Maruti Swift Manual & Automatic',
    category: '5-Seater Hatchback',
    weeklyRate: '₹8,999/week',
    dailyEquiv: '~₹1,285/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/Swift.png',
    fuel: 'Petrol',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Maruti Baleno Manual & Automatic',
    category: '5-Seater Hatchback',
    weeklyRate: '₹10,499/week',
    dailyEquiv: '~₹1,499/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/Baleno.png',
    fuel: 'Petrol',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Maruti Suzuki Fronx Mini SUV',
    category: '5-Seater Mini SUV',
    weeklyRate: '₹12,999/week',
    dailyEquiv: '~₹1,857/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/Fronx.png',
    fuel: 'Petrol Turbo',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Hyundai Creta Manual & Automatic',
    category: '5-Seater SUV',
    weeklyRate: '₹16,999/week',
    dailyEquiv: '~₹2,428/day',
    savings: 'Save 25%',
    image: '/assets/img/2023-6.png',
    fuel: 'Diesel / Petrol',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Mahindra Thar 4x4 & Thar Roxx',
    category: 'Adventure 4x4 SUV',
    weeklyRate: '₹19,999/week',
    dailyEquiv: '~₹2,857/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/5-Thar.png',
    fuel: 'Diesel mHawk',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Toyota Innova Crysta 7-Seater',
    category: '7-Seater Premium MUV',
    weeklyRate: '₹22,999/week',
    dailyEquiv: '~₹3,285/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/7-Innova Crysta.png',
    fuel: '2.4L Diesel',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Mahindra XUV 700 7-Seater',
    category: '7-Seater Luxury SUV',
    weeklyRate: '₹21,999/week',
    dailyEquiv: '~₹3,142/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/7-XUV700.png',
    fuel: 'Diesel / Petrol',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Hyundai Verna & Swift Dzire',
    category: '5-Seater Executive Sedan',
    weeklyRate: '₹11,999/week',
    dailyEquiv: '~₹1,714/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/seden-dzire.png',
    fuel: 'Petrol / CNG',
    trans: 'Manual & Automatic',
    kmIncluded: '2,100 Km/Week',
  },
  {
    name: 'Toyota Fortuner 4x4',
    category: 'VIP Highway SUV',
    weeklyRate: '₹34,999/week',
    dailyEquiv: '~₹4,999/day',
    savings: 'Save 25%',
    image: '/assets/img/cars/7-Fortuner.png',
    fuel: '2.8L Diesel',
    trans: 'Manual & Automatic 4x4',
    kmIncluded: '2,100 Km/Week',
  },
];

export default function WeeklySelfDriveCarsPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Weekly Self Drive Cars Hyderabad',
    description:
      'Book 7-day weekly self drive car rentals in Hyderabad starting @ ₹8,999/week. Save 25% with zero deposit options, doorstep delivery across HITEC City, Gachibowli & Shamshabad Airport.',
    url: 'https://www.driveitcars.in/weekly-self-drive-cars-hyderabad',
    areaServed: [
      'Hyderabad',
      'HITEC City',
      'Gachibowli',
      'Madhapur',
      'Kondapur',
      'Banjara Hills',
      'Jubilee Hills',
      'Shamshabad Airport',
      'Telangana',
    ],
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Self Drive Cars', url: '/self-drive-car' },
    { name: 'Weekly Self Drive Cars Hyderabad', url: '/weekly-self-drive-cars-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(WEEKLY_FAQS);

  return (
    <>
      <SeoSchema schema={rentalSchema} />
      <SeoSchema schema={breadcrumbSchema} />
      <SeoSchema schema={faqSchema} />

      {/* Breadcrumb Header */}
      <section className="gauto-breadcromb-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <span
                  style={{
                    background: 'rgba(255,185,7,0.2)',
                    color: '#ffb907',
                    fontWeight: 700,
                    fontSize: '11px',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: 8,
                  }}
                >
                  ✦ 7-DAY PACKAGES • SAVE 25% • ZERO DEPOSIT
                </span>
                <h3>Weekly Self Drive Cars Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/self-drive-car">Self Drive Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Weekly Self Drive Cars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Description */}
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
                  ✦ FLAT 25% DISCOUNT ON 7-DAY RENTALS
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Weekly Self Drive Cars in Hyderabad — Top Demanding Fleet with Manual &amp; Automatic Transmission
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Planning a 7-day business trip to Hyderabad's IT corridors, visiting family for a week-long celebration, or testing a car before purchasing? DRIVEIT’s dedicated <strong>weekly self drive cars Hyderabad</strong> packages give you the ideal sweet spot between daily spot rentals and long-term commitments. Enjoy a flat <strong>25% discount</strong> over individual daily tariffs with 2,100 km included, zero security deposit options, and doorstep delivery across <strong>HITEC City, Gachibowli, Madhapur, Kondapur, Banjara Hills, Jubilee Hills</strong>, and <strong>RGIA Shamshabad Airport</strong>.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Choose from all 28 top demanding car models: fuel-efficient <strong>5-Seater Hatchbacks</strong> (Swift, Baleno, i20), modern <strong>Mini SUVs</strong> (Fronx, Venue, Punch), commanding <strong>5-Seater SUVs</strong> (Brezza, Nexon, Harrier, Seltos, Creta, Thar 4x4, Thar Roxx), family <strong>7-Seater SUVs &amp; MUVs</strong> (XUV 700, Carens, Ertiga, Innova Crysta, Hycross, Fortuner, Carnival), and elegant <strong>5-Seater Sedans</strong> (Verna, Dzire, Ciaz, Virtus, Slavia). Both <strong>Manual and Automatic</strong> transmissions are available with instant digital KYC.
                </p>

                {/* Sub-Category Jump Bar */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/self-drive-car" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    🚗 All Self Drive Cars
                  </Link>
                  <Link href="/weekend-self-drive-cars-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🌄 Weekend Self Drive
                  </Link>
                  <Link href="/monthly-self-drive-cars-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    📅 Monthly Car Subscription (Save 50%)
                  </Link>
                  <Link href="/self-drive-suv-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚙 Self Drive SUV Hyderabad
                  </Link>
                  <Link href="/hyderabad-airport-car-rental" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ✈️ Airport Car Rental
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Weekly Fleet Cards */}
      <section className="section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                7-DAY VALUE PACKAGES
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Popular Weekly Self Drive Car Rental Tariffs in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                All weekly packages include 2,100 km, 24/7 on-road breakdown support, FASTag, comprehensive insurance, and doorstep handover.
              </p>
            </div>
          </div>

          <div className="row">
            {WEEKLY_FLEET_HIGHLIGHTS.map((car, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-4">
                <div
                  className="single-offers"
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    className="offer-image"
                    style={{
                      height: '210px',
                      background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: '#0f172a',
                        color: '#ffb907',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {car.category}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: '#2563eb',
                        color: '#fff',
                        fontSize: '11px',
                        fontWeight: 800,
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {car.savings}
                    </span>
                    <img
                      loading="lazy"
                      src={car.image}
                      alt={`${car.name} weekly self drive car rental Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>{car.weeklyRate}</div>
                      <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 700 }}>Effective {car.dailyEquiv}</div>
                    </div>

                    <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                        ⚙️ {car.trans}
                      </span>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                        ⛽ {car.fuel}
                      </span>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                        🛣️ {car.kmIncluded}
                      </span>
                    </div>

                    <div className="offer-action" style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <a
                        href="tel:+916300041186"
                        className="offer-btn-1"
                        style={{
                          background: '#0f172a',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '10px 4px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                        }}
                      >
                        <i className="fa fa-phone" /> Call Desk
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?phone=+916300041186&text=${encodeURIComponent(
                          `Hi DRIVEIT Cars, I want to book the ${car.name} on the 7-day WEEKLY rental package (${car.weeklyRate}). Please share availability and delivery options.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="offer-btn-2"
                        style={{
                          background: '#25D366',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '10px 4px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                        }}
                      >
                        <i className="fa fa-whatsapp" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with Schema */}
      <FaqSection
        items={WEEKLY_FAQS}
        title="Frequently Asked Questions — Weekly Self Drive Cars Hyderabad"
        subtitle="Everything you need to know about 7-day car rentals, kilometer allowances, and savings"
      />
    </>
  );
}
