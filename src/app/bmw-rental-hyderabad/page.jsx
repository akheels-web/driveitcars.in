import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'BMW Rental Hyderabad | 5 Series & 7 Series Self Drive & Chauffeur | DRIVEIT',
  description:
    'Rent BMW in Hyderabad with DRIVEIT. Drive the ultimate machine — BMW 5 Series & BMW 7 Series for self drive, corporate meetings, weddings & airport transfers.',
  alternates: {
    canonical: 'https://www.driveitcars.in/bmw-rental-hyderabad',
  },
  openGraph: {
    title: 'BMW Rental Hyderabad | 5 & 7 Series Car Hire | DRIVEIT',
    description:
      'Premier BMW rental in Hyderabad. Drive BMW 5 Series & 7 Series with showroom condition, zero deposit options, and doorstep delivery across HITEC City, Gachibowli & Banjara Hills.',
    url: 'https://www.driveitcars.in/bmw-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/bmw.png',
        width: 1200,
        height: 630,
        alt: 'BMW Rental Hyderabad - BMW 5 Series & 7 Series',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMW Rental Hyderabad | DRIVEIT Cars',
    description:
      'Rent BMW luxury cars in Hyderabad. BMW 5 Series & 7 Series for self drive, wedding events, and executive corporate travel.',
  },
};

const BMW_FAQS = [
  {
    question: 'How can I rent a BMW in Hyderabad for self drive?',
    answer:
      'Renting a BMW for self-drive in Hyderabad with DRIVEIT is simple and 100% digital: share your driving licence and Aadhaar or Passport on WhatsApp (+91 6300041186), select your preferred model (BMW 5 Series or 7 Series), and have the vehicle delivered to your doorstep or hotel in under 2 hours.',
  },
  {
    question: 'What is the daily rental rate for BMW rental in Hyderabad?',
    answer:
      'BMW rental tariffs in Hyderabad are available on request based on hire requirements (self-drive, corporate chauffeur, wedding package, or RGIA airport transfer). Contact our concierge team for custom all-inclusive quotes.',
  },
  {
    question: 'Can I hire a BMW with an executive chauffeur in Hyderabad?',
    answer:
      'Yes! DRIVEIT provides professional, verified chauffeurs in corporate attire with extensive route knowledge of Hyderabad’s IT Corridor, Financial District, and Outer Ring Road for stress-free luxury travel.',
  },
  {
    question: 'Can I rent a BMW for Hyderabad Airport (RGIA Shamshabad) pickup and drop?',
    answer:
      'Absolutely. We offer 24/7 airport terminal handover at RGIA Shamshabad Aero Plaza with flight tracking, placard meet-and-greet, and zero wait times.',
  },
  {
    question: 'Is BMW rental in Hyderabad available for weddings and pre-wedding shoots?',
    answer:
      'Yes, our BMW 5 Series and 7 Series are top choices for groom entries, bridal transfers, and cinematic pre-wedding film shoots across Hyderabad and Secunderabad.',
  },
];

const BMW_FLEET = [
  {
    id: 'bmw-5-series',
    name: 'BMW 5 Series',
    tag: 'Dynamic Executive',
    image: '/assets/img/bmw.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'TwinPower Turbo Petrol',
    rateDay: 'Tariff on Request',
    weddingRate: 'Custom Quote',
    features: ['Harman Kardon Audio', 'M-Sport Styling', 'Gesture Control', 'Live Cockpit Professional'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the BMW 5 Series rental in Hyderabad.',
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series Flagship',
    tag: 'Presidential Luxury',
    image: '/assets/img/bmw11.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'Twin-Turbo V6 / Automatic',
    rateDay: 'Tariff on Request',
    weddingRate: 'Custom Quote',
    features: ['Executive Lounge Seating', 'Sky Lounge Panoramic Glass', 'Rear Touch Display', 'Whisper-Quiet Cabin'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the BMW 7 Series in Hyderabad.',
  },
];

export default function BmwRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT BMW Rental Hyderabad',
    description:
      'Premier BMW rental in Hyderabad. Rent BMW 5 Series & 7 Series for self drive, executive corporate travel, weddings & airport transfers.',
    url: 'https://www.driveitcars.in/bmw-rental-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Gachibowli', 'Banjara Hills', 'Jubilee Hills', 'RGIA Airport'],
    priceRange: 'Tariff on Request',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Cars', url: '/luxurycars' },
    { name: 'BMW Rental Hyderabad', url: '/bmw-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(BMW_FAQS);

  return (
    <>
      <SeoSchema schema={rentalSchema} />
      <SeoSchema schema={breadcrumbSchema} />
      <SeoSchema schema={faqSchema} />

      {/* Breadcrumb Area */}
      <section className="gauto-breadcromb-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <span
                  style={{
                    color: '#ffb907',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  ✦ SHEER DRIVING PLEASURE IN HYDERABAD
                </span>
                <h3>BMW Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/luxurycars">Luxury Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>BMW Rental Hyderabad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
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
                  ✦ BMW 5 SERIES • BMW 7 SERIES • SELF DRIVE &amp; CHAUFFEUR
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  BMW Rental Hyderabad — Self Drive &amp; Chauffeur-Driven Luxury Cars
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Unleash the exhilaration of Bavarian engineering with DRIVEIT's dedicated <strong>BMW rental Hyderabad</strong> fleet. Renowned worldwide as the ultimate driving machine, BMW combines razor-sharp performance, iconic kidney grilles, and state-of-the-art cabin luxury. Whether cruising down the scenic Hyderabad Outer Ring Road, making a powerful impression at tech summits in <strong>HITEC City &amp; Gachibowli Financial District</strong>, or leading a regal wedding procession in <strong>Jubilee Hills</strong>, DRIVEIT provides pristine BMW vehicles tailored to your ambition.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Available in both thrilling <strong>BMW self drive Hyderabad</strong> options and fully managed executive chauffeur services with white-glove doorstep delivery to all Hyderabad hubs and RGIA Shamshabad Airport.
                </p>

                {/* Brand Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Rental Hyderabad
                  </Link>
                  <Link href="/audi-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🏎️ Audi Rental Hyderabad
                  </Link>
                  <Link href="/range-rover-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚙 Range Rover Rental
                  </Link>
                  <Link href="/luxury-chauffeur-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🤵 Luxury Chauffeur Hyderabad
                  </Link>
                  <Link href="/vip-car-rental-hyderabad" style={{ background: '#ffb907', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    👑 VIP &amp; CEO Car Rental
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase Grid */}
      <section className="section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                PERFORMANCE • PRESTIGE • PRECISION
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Our BMW Fleet in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Available for self-drive, executive corporate rentals, and grand wedding events with 24/7 roadside assistance.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {BMW_FLEET.map((car) => (
              <div key={car.id} className="col-lg-5 col-md-6 mb-4">
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
                      height: '220px',
                      background: 'radial-gradient(circle, #f1f5f9 0%, #e2e8f0 100%)',
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
                      {car.tag}
                    </span>
                    <img
                      loading="lazy"
                      src={car.image}
                      alt={`${car.name} BMW rental Hyderabad`}
                      style={{ maxHeight: '170px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'center', background: '#f8fafc', padding: '10px 14px', borderRadius: '8px' }}>
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                        <i className="fa fa-tag" style={{ color: '#d97706', marginRight: '6px' }} />
                        {car.rateDay}
                      </span>
                      <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Wedding: {car.weddingRate}</span>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', fontSize: '13px', color: '#475569' }}>
                      <li style={{ marginBottom: 6 }}><i className="fa fa-car" style={{ color: '#ffb907', width: 20 }} /> {car.model}</li>
                      <li style={{ marginBottom: 6 }}><i className="fa fa-users" style={{ color: '#ffb907', width: 20 }} /> {car.seats}</li>
                      <li style={{ marginBottom: 6 }}><i className="fa fa-cogs" style={{ color: '#ffb907', width: 20 }} /> {car.fuel}</li>
                    </ul>

                    <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {car.features.map((feat, idx) => (
                        <span key={idx} style={{ background: '#f1f5f9', color: '#334155', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: 500 }}>
                          ✓ {feat}
                        </span>
                      ))}
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
                        <i className="fa fa-phone" /> Call Now
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?phone=+916300041186&text=${encodeURIComponent(car.whatsappMsg)}`}
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

      {/* Pricing Matrix */}
      <section className="section_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading text-center mb-4">
                <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                  TRANSPARENT TARIFFS
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                  BMW Rental Hyderabad Rates &amp; Packages
                </h2>
              </div>

              <div className="table-responsive" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#0f172a', color: '#ffb907' }}>
                    <tr>
                      <th style={{ padding: '14px 16px' }}>BMW Model</th>
                      <th style={{ padding: '14px 16px' }}>Self Drive (24 Hrs)</th>
                      <th style={{ padding: '14px 16px' }}>Chauffeur Driven (8 Hrs / 80 Km)</th>
                      <th style={{ padding: '14px 16px' }}>RGIA Airport Transfer</th>
                      <th style={{ padding: '14px 16px' }}>Wedding / Baraat Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>BMW 5 Series</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>BMW 7 Series Flagship</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FaqSection
        items={BMW_FAQS}
        title="Frequently Asked Questions — BMW Rental Hyderabad"
        subtitle="Common questions about BMW self drive and chauffeur car hire in Hyderabad"
      />
    </>
  );
}
