import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Range Rover Rental Hyderabad | Evoque & Sport Luxury Car Hire | DRIVEIT',
  description:
    'Rent Range Rover in Hyderabad with DRIVEIT. Command the road with Range Rover Evoque & Range Rover Sport for self drive, grand weddings, VIP convoys & airport arrivals.',
  alternates: {
    canonical: 'https://www.driveitcars.in/range-rover-rental-hyderabad',
  },
  openGraph: {
    title: 'Range Rover Rental Hyderabad | Evoque & Sport Car Hire | DRIVEIT',
    description:
      'Premier Range Rover rental in Hyderabad. Drive Range Rover Evoque & Sport with British luxury, panoramic sunroof, and white-glove delivery across Jubilee Hills, Banjara Hills & HITEC City.',
    url: 'https://www.driveitcars.in/range-rover-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/rangerover.webp',
        width: 1200,
        height: 630,
        alt: 'Range Rover Rental Hyderabad - Range Rover Evoque & Sport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Range Rover Rental Hyderabad | DRIVEIT Cars',
    description:
      'Rent Range Rover luxury SUVs in Hyderabad. British royal styling, terrain response, self-drive and VIP chauffeur options with DRIVEIT.',
  },
};

const RANGE_ROVER_FAQS = [
  {
    question: 'How do I rent a Range Rover in Hyderabad with DRIVEIT?',
    answer:
      'Booking a Range Rover rental in Hyderabad is simple: select your preferred model (Range Rover Evoque or Range Rover Sport/Vogue), submit KYC documentation (valid driving licence and Aadhaar or Passport) via WhatsApp (+91 6300041186), and enjoy prompt doorstep delivery anywhere in Hyderabad or at RGIA Shamshabad Airport.',
  },
  {
    question: 'Can I rent a Range Rover for self drive in Hyderabad?',
    answer:
      'Yes, DRIVEIT offers self-drive Range Rover rentals in Hyderabad for eligible drivers. Experience Land Rover’s iconic Terrain Response, commanding driving position, and supreme British craftsmanship with complete privacy.',
  },
  {
    question: 'What is the cost of Range Rover rental in Hyderabad?',
    answer:
      'Range Rover rental in Hyderabad starts at ₹14,999/day for the stylish Range Rover Evoque and ₹29,999/day for the flagship Range Rover Sport / Vogue. Transparent packages are available for wedding functions, pre-wedding shoots, and VIP airport pickups.',
  },
  {
    question: 'Is Range Rover suitable for Hyderabadi weddings and groom entries?',
    answer:
      'Absolutely! The Range Rover is one of the most photographed and prestigious wedding cars in Hyderabad. Its muscular road presence, floating roofline, and opulent leather cabin make it the quintessential choice for groom baraats and celebrity arrivals.',
  },
  {
    question: 'Do you offer Range Rover delivery to 5-star hotels and Hyderabad Airport?',
    answer:
      'Yes, we provide VIP white-glove doorstep delivery to Rajiv Gandhi International Airport (RGIA Shamshabad Aero Plaza), Taj Falaknuma, ITC Kohenur, Park Hyatt, and private residences in Banjara Hills and Jubilee Hills.',
  },
];

const RANGE_ROVER_FLEET = [
  {
    id: 'range-rover-evoque',
    name: 'Range Rover Evoque',
    tag: 'Modern British Luxury',
    image: '/assets/img/range-rover.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'Ingenium Turbo / Automatic',
    rateDay: '₹14,999/Day',
    weddingRate: '₹22,999 / Package',
    features: ['Meridian Surround Audio', 'Panoramic Glass Roof', 'Terrain Response AWD', 'Flush Deployable Handles'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Range Rover Evoque in Hyderabad.',
  },
  {
    id: 'range-rover-sport',
    name: 'Range Rover Sport / Vogue',
    tag: 'Presidential Road Presence',
    image: '/assets/img/range-rover1.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'Twin-Turbo V6 / 4x4',
    rateDay: '₹29,999/Day',
    weddingRate: '₹42,999 / Package',
    features: ['Command Driving Position', 'Electronic Air Suspension', 'Semi-Aniline Leather', 'Unbeatable Stature'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Range Rover Sport in Hyderabad.',
  },
];

export default function RangeRoverRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Range Rover Rental Hyderabad',
    description:
      'Premier Range Rover luxury SUV rental in Hyderabad. Rent Range Rover Evoque & Sport for self drive, royal weddings, corporate VIPs & airport transfers.',
    url: 'https://www.driveitcars.in/range-rover-rental-hyderabad',
    areaServed: ['Hyderabad', 'Jubilee Hills', 'Banjara Hills', 'HITEC City', 'Gachibowli', 'RGIA Airport'],
    priceRange: '₹14999 - ₹29999',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Cars', url: '/luxurycars' },
    { name: 'Range Rover Rental Hyderabad', url: '/range-rover-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(RANGE_ROVER_FAQS);

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
                  ✦ BRITISH ROYAL HERITAGE &amp; SUPREME STATURE
                </span>
                <h3>Range Rover Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/luxurycars">Luxury Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Range Rover Rental Hyderabad</li>
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
                  ✦ RANGE ROVER EVOQUE • RANGE ROVER SPORT • SELF DRIVE &amp; CHAUFFEUR
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Range Rover Rental Hyderabad — Luxury Self Drive &amp; Wedding SUV Hire
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Command the streets of Hyderabad with unparalleled luxury and unstoppable presence through DRIVEIT's dedicated <strong>Range Rover rental Hyderabad</strong> fleet. Synonymous with British aristocracy, world-class design, and peerless all-terrain mastery, the Range Rover transforms every journey into a commanding statement. From VIP arrivals in <strong>Jubilee Hills &amp; Banjara Hills</strong> to glamorous groom entries and high-profile corporate delegations across the <strong>Financial District</strong>, nothing matches the aura of a Range Rover.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Experience our pristine <strong>Range Rover self drive Hyderabad</strong> rentals or choose our executive chauffeur package with white-glove doorstep delivery to your luxury residence, hotel, or directly at RGIA Shamshabad Airport.
                </p>

                {/* Brand Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Rental Hyderabad
                  </Link>
                  <Link href="/bmw-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚘 BMW Rental Hyderabad
                  </Link>
                  <Link href="/audi-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🏎️ Audi Rental Hyderabad
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
                ROYAL STATURE • ADVANCED 4X4 • UNRIVALED LUXURY
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Our Range Rover Fleet in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Available for self-drive, grand wedding baraat processions, and VIP corporate travel across Telangana.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            {RANGE_ROVER_FLEET.map((car) => (
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
                      alt={`${car.name} Range Rover rental Hyderabad`}
                      style={{ maxHeight: '170px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '20px', fontWeight: 800, color: '#ffb907' }}>{car.rateDay}</span>
                      <span style={{ fontSize: '13px', color: '#64748b' }}>Wedding: {car.weddingRate}</span>
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
                  Range Rover Rental Hyderabad Rates &amp; Packages
                </h2>
              </div>

              <div className="table-responsive" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#0f172a', color: '#ffb907' }}>
                    <tr>
                      <th style={{ padding: '14px 16px' }}>Range Rover Model</th>
                      <th style={{ padding: '14px 16px' }}>Self Drive (24 Hrs)</th>
                      <th style={{ padding: '14px 16px' }}>Chauffeur Driven (8 Hrs / 80 Km)</th>
                      <th style={{ padding: '14px 16px' }}>RGIA Airport Transfer</th>
                      <th style={{ padding: '14px 16px' }}>Wedding Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Range Rover Evoque</td>
                      <td style={{ padding: '14px 16px' }}>₹14,999</td>
                      <td style={{ padding: '14px 16px' }}>₹12,499</td>
                      <td style={{ padding: '14px 16px' }}>₹5,999</td>
                      <td style={{ padding: '14px 16px' }}>₹22,999</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Range Rover Sport / Vogue</td>
                      <td style={{ padding: '14px 16px' }}>₹29,999</td>
                      <td style={{ padding: '14px 16px' }}>₹24,999</td>
                      <td style={{ padding: '14px 16px' }}>₹11,999</td>
                      <td style={{ padding: '14px 16px' }}>₹42,999</td>
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
        items={RANGE_ROVER_FAQS}
        title="Frequently Asked Questions — Range Rover Rental Hyderabad"
        subtitle="Common questions about hiring Range Rover luxury SUVs in Hyderabad"
      />
    </>
  );
}
