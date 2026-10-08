import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Mercedes Rental Hyderabad | S-Class, E-Class, G-Wagon & Maybach | DRIVEIT',
  description:
    'Rent Mercedes in Hyderabad with DRIVEIT. Showroom-condition Mercedes-Benz S-Class, E-Class, G-Wagon, Maybach & C-Class for self-drive, weddings, VIP arrivals & chauffeur hire.',
  alternates: {
    canonical: 'https://www.driveitcars.in/mercedes-rental-hyderabad',
  },
  openGraph: {
    title: 'Mercedes Rental Hyderabad | S-Class, E-Class & Maybach | DRIVEIT',
    description:
      'Premier Mercedes rental in Hyderabad. Drive Mercedes-Benz S-Class, E-Class, G-Wagon & Maybach with doorstep delivery in Banjara Hills, Jubilee Hills, HITEC City & RGIA Airport.',
    url: 'https://www.driveitcars.in/mercedes-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/benz.png',
        width: 1200,
        height: 630,
        alt: 'Mercedes Rental Hyderabad - Mercedes Benz S-Class & E-Class',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mercedes Rental Hyderabad | DRIVEIT Cars',
    description:
      'Book Mercedes-Benz luxury car rentals in Hyderabad. Self-drive and chauffeur-driven Mercedes S-Class, E-Class, G-Wagon & Maybach.',
  },
};

const MERCEDES_FAQS = [
  {
    question: 'How do I book a Mercedes rental in Hyderabad with DRIVEIT?',
    answer:
      'Booking a Mercedes rental in Hyderabad is simple: select your preferred model (S-Class, E-Class, Maybach, or G-Wagon), choose your dates and rental mode (self-drive or executive chauffeur), share basic KYC documents on WhatsApp or call +91 6300041186, and receive guaranteed doorstep delivery anywhere in Hyderabad or RGIA Shamshabad Airport.',
  },
  {
    question: 'Can I rent a Mercedes-Benz for self-drive in Hyderabad?',
    answer:
      'Yes, DRIVEIT offers self-drive Mercedes rentals in Hyderabad for drivers aged 21 and above with a valid Indian driving licence or International Driving Permit. Experience the thrill and German engineering of Mercedes-Benz with complete privacy.',
  },
  {
    question: 'What models are available for Mercedes rental in Hyderabad?',
    answer:
      'Our elite Mercedes fleet includes the flagship Mercedes-Benz S-Class 500, executive Mercedes-Benz E-Class 250, ultra-luxury Mercedes-Maybach, iconic Mercedes G-Wagon (G-Class), and sporty 2-seater convertible roadsters.',
  },
  {
    question: 'Is Mercedes rental available for weddings and groom entries in Hyderabad?',
    answer:
      'Yes! Mercedes-Benz is our most sought-after wedding car in Hyderabad. We cater to grand groom baraat arrivals, bride entries, and VIP guest transport across Banjara Hills, Jubilee Hills, and 5-star wedding venues with custom floral decoration options and red-carpet chauffeur services.',
  },
  {
    question: 'What is the security deposit for renting a Mercedes in Hyderabad?',
    answer:
      'We require a transparent, fully refundable security deposit depending on the model and duration. The deposit is refunded within 24 to 48 hours following vehicle return and digital inspection.',
  },
];

const MERCEDES_FLEET = [
  {
    id: 'mercedes-s-class',
    name: 'Mercedes-Benz S-Class 500',
    tag: 'Flagship Luxury',
    image: '/assets/img/benz.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'Petrol / Automatic',
    rateDay: 'Tariff on Request',
    weddingRate: 'Custom Quote',
    features: ['Burmester 3D Sound', 'Rear Executive Recliner', 'Air Suspension', 'Ambient Lighting'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Mercedes-Benz S-Class 500 in Hyderabad.',
  },
  {
    id: 'mercedes-e-class',
    name: 'Mercedes-Benz E-Class 250',
    tag: 'Executive Elegance',
    image: '/assets/img/benz2.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'Diesel / Automatic',
    rateDay: 'Tariff on Request',
    weddingRate: 'Custom Quote',
    features: ['Panamerica Grille', 'Dual Panoramic Sunroof', 'Chauffeur Package', 'Superior Legroom'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Mercedes-Benz E-Class in Hyderabad.',
  },
  {
    id: 'mercedes-maybach',
    name: 'Mercedes-Maybach S-Class',
    tag: 'Ultra VIP Luxury',
    image: '/assets/img/benz3.png',
    model: '2023 Edition',
    seats: '4-5 Seats',
    fuel: 'Twin-Turbo / Automatic',
    rateDay: 'Tariff on Request',
    weddingRate: 'Custom Quote',
    features: ['First-Class Lounge Seats', 'Silver Champagne Flutes', 'Chauffeur Included', 'Maximum Prestige'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Mercedes-Maybach in Hyderabad.',
  },
  {
    id: 'mercedes-g-wagon',
    name: 'Mercedes-AMG G-Wagon (G63)',
    tag: 'Celebrity Icon',
    image: '/assets/img/g-wagon.png',
    model: '2023 Edition',
    seats: '5 Seats',
    fuel: 'V8 Biturbo / 4MATIC',
    rateDay: 'Tariff on Request',
    weddingRate: 'Custom Quote',
    features: ['Side-Exit Exhaust Roar', 'Legendary 4x4 Dominance', 'Unmatched Road Presence', 'VIP Entrance'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Mercedes G-Wagon in Hyderabad.',
  },
  {
    id: 'mercedes-cabriolet',
    name: 'Mercedes-Benz 2-Seater Convertible',
    tag: 'Sport & Romance',
    image: '/assets/img/benz2s.png',
    model: '2023 Edition',
    seats: '2 Seats',
    fuel: 'Turbo Petrol / Automatic',
    rateDay: 'Tariff on Request',
    weddingRate: 'Custom Quote',
    features: ['Drop-Top Convertible', 'Pre-Wedding Shoot Ready', 'Exotic Sports Styling', 'Pure Driving Thrill'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about booking the Mercedes 2-Seater Convertible in Hyderabad.',
  },
];

export default function MercedesRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Mercedes Rental Hyderabad',
    description:
      'Premier Mercedes rental in Hyderabad. Book Mercedes-Benz S-Class, E-Class, Maybach, and G-Wagon for self-drive, weddings, corporate VIPs & airport transfers.',
    url: 'https://www.driveitcars.in/mercedes-rental-hyderabad',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'HITEC City', 'Gachibowli', 'RGIA Shamshabad Airport'],
    priceRange: 'Tariff on Request',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Cars', url: '/luxurycars' },
    { name: 'Mercedes Rental Hyderabad', url: '/mercedes-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(MERCEDES_FAQS);

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
                  ✦ THE THREE-POINTED STAR EXPERIENCE
                </span>
                <h3>Mercedes Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/luxurycars">Luxury Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Mercedes Rental Hyderabad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Hero Section */}
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
                  ✦ MERCEDES-BENZ S-CLASS • E-CLASS • MAYBACH • G-WAGON
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Mercedes Rental Hyderabad — Luxury Self Drive &amp; Chauffeur Hire
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Experience the pinnacle of German automotive prestige with DRIVEIT's dedicated <strong>Mercedes rental Hyderabad</strong> service. Whether you require an imposing <strong>Mercedes-Benz S-Class</strong> for a state visit or CEO board meeting in HITEC City, an executive <strong>E-Class</strong> for airport transfers at Rajiv Gandhi International Airport (RGIA), or a thunderous <strong>Mercedes-AMG G-Wagon</strong> for a celebrity grand entry, DRIVEIT delivers showroom-immaculate Mercedes vehicles across Hyderabad with unmatched professionalism.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Choose complete driving sovereignty with our <strong>Mercedes self drive rental in Hyderabad</strong>, or sit back in serene comfort with our suited, uniformed executive chauffeurs. With doorstep delivery to <strong>Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kondapur</strong>, and 5-star hotels like Taj Falaknuma Palace and ITC Kohenur, we guarantee a red-carpet experience every single mile.
                </p>

                {/* Luxury Category Jump Pill Bar */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/bmw-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚘 BMW Rental Hyderabad
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
                SHOWROOM CONDITION • FULLY INSURED • ZERO SURGE
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Our Mercedes-Benz Fleet in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Handpicked, impeccably maintained Mercedes models available for daily self-drive, executive corporate retainers, and wedding celebrations.
              </p>
            </div>
          </div>

          <div className="row">
            {MERCEDES_FLEET.map((car) => (
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
                      alt={`${car.name} Mercedes rental Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
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

      {/* Pricing Matrix & Rental Packages */}
      <section className="section_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading text-center mb-4">
                <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                  TRANSPARENT TARIFFS • NO HIDDEN EXTRAS
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                  Mercedes Rental Hyderabad Packages &amp; Pricing
                </h2>
              </div>

              <div className="table-responsive" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#0f172a', color: '#ffb907' }}>
                    <tr>
                      <th style={{ padding: '14px 16px' }}>Mercedes Model</th>
                      <th style={{ padding: '14px 16px' }}>Self Drive (24 Hrs)</th>
                      <th style={{ padding: '14px 16px' }}>Chauffeur Driven (8 Hrs / 80 Km)</th>
                      <th style={{ padding: '14px 16px' }}>RGIA Airport Transfer</th>
                      <th style={{ padding: '14px 16px' }}>Wedding Baraat Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Mercedes-Benz E-Class</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Mercedes-Benz S-Class 500</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Mercedes-Maybach</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Mercedes G-Wagon (G63)</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Mercedes 2-Seater Convertible</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Tariff on Request</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Custom Quote</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '10px', textAlign: 'center' }}>
                *All packages include comprehensive commercial insurance. Fuel packages and customized outstation rates available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DRIVEIT for Mercedes Rental */}
      <section className="section_70" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                WHY CHOOSE DRIVEIT
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                Hyderabad’s #1 Mercedes Rental Destination
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-shield" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>100% Showroom Condition</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Every Mercedes undergoes a 40-point safety and cleanliness audit before handover.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-plane" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Airport VIP Handover</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Direct handover at RGIA Shamshabad Aero Plaza terminal with flight delay tracking.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-clock-o" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>24-48h Deposit Refund</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Rapid digital security deposit reimbursement directly to your UPI or bank account.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-map-marker" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Doorstep Delivery</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Delivered to your doorstep in Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, or Madhapur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with Schema */}
      <FaqSection
        items={MERCEDES_FAQS}
        title="Frequently Asked Questions — Mercedes Rental Hyderabad"
        subtitle="Key questions about renting Mercedes-Benz luxury cars in Hyderabad"
      />
    </>
  );
}
