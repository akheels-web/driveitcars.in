import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'VIP Car Rental Hyderabad | CEO & Executive Car Hire Services | DRIVEIT',
  description:
    'Premier VIP car rental, CEO car rental & executive car hire in Hyderabad with DRIVEIT. Mercedes Maybach, S-Class, BMW 7 Series, Rolls Royce & Fortuner convoys for board meetings, CXO visits & delegates.',
  alternates: {
    canonical: 'https://www.driveitcars.in/vip-car-rental-hyderabad',
  },
  openGraph: {
    title: 'VIP & CEO Car Rental Hyderabad | Executive Luxury Hire | DRIVEIT',
    description:
      'Hyderabad’s #1 VIP, CEO and executive car rental service. Tailored for corporate boards, visiting CXOs, international delegations & high-profile events with discreet security protocol.',
    url: 'https://www.driveitcars.in/vip-car-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/benz3.png',
        width: 1200,
        height: 630,
        alt: 'VIP Car Rental Hyderabad - CEO & Executive Car Hire',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VIP Car Rental Hyderabad | Executive & CEO Car Hire | DRIVEIT',
    description:
      'Book executive VIP and CEO car rentals in Hyderabad. Mercedes Maybach, S-Class, BMW 7 Series & convoy vehicles with protocol chauffeurs.',
  },
};

const VIP_FAQS = [
  {
    question: 'What defines DRIVEIT’s VIP car rental and CEO car rental service in Hyderabad?',
    answer:
      'Our VIP and CEO car rental service is engineered for corporate leadership, international investors, government dignitaries, and celebrities. It features top-tier flagship vehicles (Mercedes-Maybach, S-Class, BMW 7 Series, Rolls Royce, and Fortuner Legender escorts), suited security-trained protocol chauffeurs, NDAs for confidentiality, corporate GST invoicing, and real-time operations coordination.',
  },
  {
    question: 'How do you handle executive car rental for corporate board meetings in HITEC City?',
    answer:
      'We coordinate fleet deployments for single-day board meetings or multi-day tech conferences across HITEC City, Gachibowli Financial District, Mindspace, and HICC Novotel. Our dedicated corporate account managers ensure synchronized arrivals, airport tarmac or terminal meet-and-greets, and continuous standby service.',
  },
  {
    question: 'Can you provide VIP convoy and escort car rentals in Hyderabad?',
    answer:
      'Yes. For high-security VIP movements and political/celebrity delegations, we deploy multi-vehicle convoys combining luxury sedans (Mercedes S-Class / BMW 7 Series) with matching security escort SUVs (Toyota Fortuner Legender & Innova Crysta), complete with synchronized communication and experienced highway drivers.',
  },
  {
    question: 'What billing options are available for executive car hire in Hyderabad?',
    answer:
      'We offer flexible corporate billing options including GST input credit tax invoices, monthly retainers, corporate credit accounts, and direct company bank transfers with zero hidden surcharges.',
  },
  {
    question: 'Do you offer VIP tarmac and Aero Plaza airport pickup at RGIA Hyderabad?',
    answer:
      'Yes, we provide 24/7 dedicated VIP airport pickup and drop at Rajiv Gandhi International Airport (RGIA Shamshabad) with terminal placard reception, luggage concierge, and seamless transit via the PVNR Expressway and Outer Ring Road.',
  },
];

const VIP_FLEET = [
  {
    id: 'maybach-vip',
    name: 'Mercedes-Maybach S-Class',
    role: 'CEO & Head of State Flagship',
    image: '/assets/img/benz3.png',
    rate: '₹39,999 / 8 Hr Package',
    features: ['First-Class Rear Lounge', 'Acoustic Sound Isolation', 'Executive Chauffeur Included', 'Champagne Console'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes-Maybach for CEO VIP car rental in Hyderabad.',
  },
  {
    id: 's-class-vip',
    name: 'Mercedes-Benz S-Class 500',
    role: 'Executive Board Member Sedan',
    image: '/assets/img/benz.png',
    rate: '₹19,999 / 8 Hr Package',
    features: ['Massaging Reclining Seats', 'Burmester High-End Audio', 'Air Suspension Comfort', 'Privacy Sunblinds'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes-Benz S-Class for executive car rental in Hyderabad.',
  },
  {
    id: 'bmw-7-vip',
    name: 'BMW 7 Series Flagship',
    role: 'CXO & Venture Capital Dignitaries',
    image: '/assets/img/bmw11.png',
    rate: '₹18,999 / 8 Hr Package',
    features: ['Executive Sky Lounge', 'Rear Touch Control Tablet', 'Dynamic Whisper Ride', 'High-Speed Wi-Fi Ready'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the BMW 7 Series for VIP car rental in Hyderabad.',
  },
  {
    id: 'fortuner-escort',
    name: 'Toyota Fortuner Legender Convoy',
    role: 'VIP Security & Escort SUV',
    image: '/assets/img/fortuner2.jpg',
    rate: '₹8,999 / 8 Hr Package',
    features: ['Commanding Pilot Stature', '4x4 Convoy Lead / Escort', 'Heavy Luggage Support', 'Executive Security Driver'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Fortuner Legender for VIP escort convoy in Hyderabad.',
  },
  {
    id: 'rolls-royce-vip',
    name: 'Rolls Royce Phantom / Ghost',
    role: 'Royal, Celebrity & Billionaire Stature',
    image: '/assets/img/rollsp.png',
    rate: 'Price On Consultation',
    features: ['Starlight Headliner', 'Coach Doors Opening', 'Unrivaled Global Status', 'Red Carpet Protocol'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about Rolls Royce presidential car rental in Hyderabad.',
  },
];

export default function VipCarRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT VIP & Executive Car Rental Hyderabad',
    description:
      'Premier VIP car rental, CEO car rental & executive car hire in Hyderabad. Mercedes Maybach, S-Class, BMW 7 Series & convoy escorts for corporate boards and high-profile delegations.',
    url: 'https://www.driveitcars.in/vip-car-rental-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Financial District Gachibowli', 'Jubilee Hills', 'Banjara Hills', 'RGIA Shamshabad Airport'],
    priceRange: '₹8999 - ₹49999',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Cars', url: '/luxurycars' },
    { name: 'VIP Car Rental Hyderabad', url: '/vip-car-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(VIP_FAQS);

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
                  ✦ PRESIDENTIAL • EXECUTIVE • DIGNITARY SERVICES
                </span>
                <h3>VIP Car Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/luxurycars">Luxury Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>VIP Car Rental Hyderabad</li>
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
                  ✦ CEO CAR RENTAL • EXECUTIVE CAR RENTAL • VIP CONVOY HIRE
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  VIP Car Rental Hyderabad — Executive &amp; CEO Luxury Car Hire
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  DRIVEIT is Hyderabad's trusted authority for high-stakes <strong>VIP car rental Hyderabad</strong>, <strong>executive car rental Hyderabad</strong>, and dedicated <strong>CEO car rental Hyderabad</strong>. When world-renowned business leaders, enterprise board members, venture capitalists, and foreign dignitaries visit Hyderabad's global tech capital in <strong>HITEC City, Gachibowli Financial District, Mindspace</strong>, and <strong>HICC Novotel</strong>, compromise is not an option.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  We provide discreet, synchronized ground logistics deploying flagship vehicles — including the <strong>Mercedes-Maybach, Mercedes-Benz S-Class, BMW 7 Series, Rolls Royce</strong>, and <strong>Toyota Fortuner Legender convoy escorts</strong>. Every assignment is backed by strict non-disclosure compliance, suited executive chauffeurs, corporate GST invoicing, and 24/7 dedicated operations dispatch.
                </p>

                {/* Brand Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/luxury-chauffeur-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    🤵 Luxury Chauffeur Hyderabad
                  </Link>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Rental
                  </Link>
                  <Link href="/bmw-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚘 BMW Rental
                  </Link>
                  <Link href="/audi-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🏎️ Audi Rental
                  </Link>
                  <Link href="/range-rover-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚙 Range Rover Rental
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Fleet Grid */}
      <section className="section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                EXECUTIVE &amp; PRESIDENTIAL FLEET
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                VIP &amp; CEO Vehicles Available in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Showroom condition, suited chauffeurs, mineral water, high-speed connectivity, and discreet privacy protocol.
              </p>
            </div>
          </div>

          <div className="row">
            {VIP_FLEET.map((car) => (
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
                      {car.role}
                    </span>
                    <img
                      loading="lazy"
                      src={car.image}
                      alt={`${car.name} VIP car rental Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ marginBottom: '14px' }}>
                      <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffb907' }}>{car.rate}</span>
                    </div>

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
                        <i className="fa fa-phone" /> Call VIP Desk
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

      {/* Corporate & VIP Pillars */}
      <section className="section_70">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                CORPORATE TRUST &amp; COMPLIANCE
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                Why Global Enterprises Choose DRIVEIT for CEO &amp; VIP Travel
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-file-text-o" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>GST Corporate Billing</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Full 100% tax-compliant invoices with corporate GST input credit and monthly vendor billing.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-handshake-o" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Dedicated Account Manager</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>A dedicated corporate concierge manages flight tracking, schedule changes, and fleet logistics.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-user-secret" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Confidentiality &amp; NDAs</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Strict privacy protocols ensuring private calls, merger discussions, and travel itineraries stay confidential.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-plane" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>RGIA VIP Terminal Tarmac</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Seamless airport arrivals with flight delay monitoring, meet-and-greet, and zero wait time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FaqSection
        items={VIP_FAQS}
        title="Frequently Asked Questions — VIP &amp; CEO Car Rental Hyderabad"
        subtitle="Key details regarding executive, CEO, and VIP car rentals in Hyderabad"
      />
    </>
  );
}
