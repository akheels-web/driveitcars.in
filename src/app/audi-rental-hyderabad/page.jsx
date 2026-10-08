import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Audi Rental Hyderabad | Audi A6, Q7 & A4 Luxury Car Hire | DRIVEIT',
  description:
    'Rent Audi in Hyderabad with DRIVEIT. Showroom-condition Audi A6, Audi Q7 & Audi A4 available for self drive, corporate meetings, weddings & RGIA airport transfers.',
  alternates: {
    canonical: 'https://www.driveitcars.in/audi-rental-hyderabad',
  },
  openGraph: {
    title: 'Audi Rental Hyderabad | Audi A6 & Audi Q7 Car Hire | DRIVEIT',
    description:
      'Premier Audi car rental in Hyderabad. Drive Audi A6, Q7 & sports roadsters with Quattro performance and white-glove delivery in Banjara Hills, Jubilee Hills & HITEC City.',
    url: 'https://www.driveitcars.in/audi-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/audi2.png',
        width: 1200,
        height: 630,
        alt: 'Audi Rental Hyderabad - Audi A6 & Audi Q7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audi Rental Hyderabad | DRIVEIT Cars',
    description:
      'Rent Audi luxury cars in Hyderabad. Quattro technology, matrix LED styling, self-drive and executive chauffeur options with DRIVEIT.',
  },
};

const AUDI_FAQS = [
  {
    question: 'How do I hire an Audi car rental in Hyderabad?',
    answer:
      'Hiring an Audi with DRIVEIT is fast and hassle-free: choose your preferred Audi model (Audi A6, Audi Q7, or 2-seater sports convertible), submit KYC documents (driving licence + Aadhaar/passport) via WhatsApp at +91 6300041186, and get doorstep handover across Hyderabad or at RGIA Shamshabad Airport.',
  },
  {
    question: 'Can I rent an Audi for self drive in Hyderabad?',
    answer:
      'Yes! DRIVEIT offers self-drive Audi rentals in Hyderabad. Experience Audi’s legendary Quattro all-wheel drive, dual touchscreen MMI, and dynamic handling with 100% privacy.',
  },
  {
    question: 'What is the price of Audi rental in Hyderabad?',
    answer:
      'Audi car rentals in Hyderabad start from ₹12,999/day for the executive Audi A6 and ₹19,999/day for the flagship 7-seater Audi Q7 SUV. Wedding packages and airport transfer slots are available at transparent, fixed prices.',
  },
  {
    question: 'Is the Audi Q7 available for 7 passengers in Hyderabad?',
    answer:
      'Yes, the Audi Q7 is a spacious 7-seater luxury SUV featuring 3-row seating, panoramic glass roof, Quattro AWD, and massive luggage capacity — perfect for VIP families and wedding party transit.',
  },
  {
    question: 'Can I book an Audi for wedding baraat or pre-wedding shoots in Hyderabad?',
    answer:
      'Yes, Audi is one of the most popular luxury wedding choices in Hyderabad. We deliver immaculate, polished vehicles with optional floral styling for groom baraat arrivals and pre-wedding photo sessions.',
  },
];

const AUDI_FLEET = [
  {
    id: 'audi-a6',
    name: 'Audi A6 Matrix Edition',
    tag: 'Executive Luxury',
    image: '/assets/img/audi2.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'TFSI Turbo Petrol',
    rateDay: '₹12,999/Day',
    weddingRate: '₹18,999 / Package',
    features: ['Matrix LED Lights', 'Audi Virtual Cockpit', 'Bang & Olufsen Audio', 'Dual Touch MMI'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Audi A6 in Hyderabad.',
  },
  {
    id: 'audi-q7',
    name: 'Audi Q7 Quattro SUV',
    tag: '7-Seater Luxury SUV',
    image: '/assets/img/audi.png',
    model: '2023 Edition',
    seats: '7 Seats',
    fuel: 'Quattro AWD / Diesel',
    rateDay: '₹19,999/Day',
    weddingRate: '₹27,999 / Package',
    features: ['Quattro All-Wheel Drive', 'Panoramic Sunroof', 'Air Suspension', '7-Seater Spacious Cabin'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Audi Q7 in Hyderabad.',
  },
  {
    id: 'audi-2-seater',
    name: 'Audi 2-Seater Roadster',
    tag: 'Sports & Pre-Wedding',
    image: '/assets/img/audi2s.png',
    model: '2023 Edition',
    seats: '2 Seats',
    fuel: 'Turbocharged Sport',
    rateDay: '₹16,999/Day',
    weddingRate: '₹23,999 / Package',
    features: ['Exotic Sport Silhouette', 'Cinematic Shoot Favorite', 'High RPM Soundtrack', 'Drop-Top Fun'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Audi 2-Seater in Hyderabad.',
  },
];

export default function AudiRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Audi Rental Hyderabad',
    description:
      'Premier Audi car rental in Hyderabad. Rent Audi A6, Audi Q7, and Audi sports cars for self drive, corporate events, weddings & airport pickups.',
    url: 'https://www.driveitcars.in/audi-rental-hyderabad',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'HITEC City', 'Gachibowli', 'Madhapur', 'RGIA Airport'],
    priceRange: '₹12999 - ₹19999',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Cars', url: '/luxurycars' },
    { name: 'Audi Rental Hyderabad', url: '/audi-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(AUDI_FAQS);

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
                  ✦ PROGRESS THROUGH TECHNOLOGY IN HYDERABAD
                </span>
                <h3>Audi Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/luxurycars">Luxury Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Audi Rental Hyderabad</li>
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
                  ✦ AUDI A6 • AUDI Q7 • AUDI ROADSTER • QUATTRO POWER
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Audi Rental Hyderabad — Self Drive &amp; Chauffeur-Driven Audi Car Hire
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Step into progressive automotive luxury with DRIVEIT's dedicated <strong>Audi rental Hyderabad</strong> service. Known for aerodynamic sophistication, iconic Matrix LED lighting, and world-championship Quattro all-wheel-drive technology, an Audi commands attention without shouting. Whether arriving at high-stakes business summits in <strong>HITEC City Cyber Towers</strong>, cruising to luxury resorts across Gandipet, or creating breathtaking wedding moments in <strong>Banjara Hills &amp; Jubilee Hills</strong>, our Audi fleet provides pure refinement.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Rent the executive <strong>Audi A6</strong> sedan, the commanding 7-seater <strong>Audi Q7</strong> luxury SUV, or the spirited <strong>Audi sports roadster</strong> for self drive or chauffeur-driven luxury in Hyderabad.
                </p>

                {/* Brand Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Rental Hyderabad
                  </Link>
                  <Link href="/bmw-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚘 BMW Rental Hyderabad
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
                THE FOUR RINGS OF EXCELLENCE
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Our Audi Fleet in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Available for self-drive, executive corporate retainers, and wedding celebrations with white-glove doorstep delivery.
              </p>
            </div>
          </div>

          <div className="row">
            {AUDI_FLEET.map((car) => (
              <div key={car.id} className="col-lg-4 col-md-6 mb-4">
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
                      alt={`${car.name} Audi rental Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffb907' }}>{car.rateDay}</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>Wedding: {car.weddingRate}</span>
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
                  Audi Rental Hyderabad Pricing &amp; Packages
                </h2>
              </div>

              <div className="table-responsive" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#0f172a', color: '#ffb907' }}>
                    <tr>
                      <th style={{ padding: '14px 16px' }}>Audi Model</th>
                      <th style={{ padding: '14px 16px' }}>Self Drive (24 Hrs)</th>
                      <th style={{ padding: '14px 16px' }}>Chauffeur Driven (8 Hrs / 80 Km)</th>
                      <th style={{ padding: '14px 16px' }}>RGIA Airport Transfer</th>
                      <th style={{ padding: '14px 16px' }}>Wedding Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Audi A6 Matrix Edition</td>
                      <td style={{ padding: '14px 16px' }}>₹12,999</td>
                      <td style={{ padding: '14px 16px' }}>₹10,499</td>
                      <td style={{ padding: '14px 16px' }}>₹4,999</td>
                      <td style={{ padding: '14px 16px' }}>₹18,999</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Audi Q7 Quattro SUV (7-Seater)</td>
                      <td style={{ padding: '14px 16px' }}>₹19,999</td>
                      <td style={{ padding: '14px 16px' }}>₹16,499</td>
                      <td style={{ padding: '14px 16px' }}>₹7,999</td>
                      <td style={{ padding: '14px 16px' }}>₹27,999</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Audi 2-Seater Roadster</td>
                      <td style={{ padding: '14px 16px' }}>₹16,999</td>
                      <td style={{ padding: '14px 16px' }}>₹14,999</td>
                      <td style={{ padding: '14px 16px' }}>₹6,999</td>
                      <td style={{ padding: '14px 16px' }}>₹23,999</td>
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
        items={AUDI_FAQS}
        title="Frequently Asked Questions — Audi Rental Hyderabad"
        subtitle="Helpful information about hiring Audi luxury cars in Hyderabad"
      />
    </>
  );
}
