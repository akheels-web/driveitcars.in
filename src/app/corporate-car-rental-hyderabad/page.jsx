import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Corporate Car Rental Hyderabad | Executive Chauffeur & Monthly Retainers | DRIVEIT',
  description:
    'Premier corporate car rental in Hyderabad with DRIVEIT. Executive sedans, luxury cars, Innova Crysta & employee shuttles for IT enterprises in HITEC City, Gachibowli & Financial District. 100% GST invoices.',
  alternates: {
    canonical: 'https://www.driveitcars.in/corporate-car-rental-hyderabad',
  },
  openGraph: {
    title: 'Corporate Car Rental Hyderabad | Executive Business Travel | DRIVEIT',
    description:
      'Hyderabad’s trusted corporate car rental partner. Dedicated account managers, suited executive chauffeurs, monthly corporate subscriptions & airport transfers with corporate billing.',
    url: 'https://www.driveitcars.in/corporate-car-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/benz2.png',
        width: 1200,
        height: 630,
        alt: 'Corporate Car Rental Hyderabad - Executive Business Fleet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Car Rental Hyderabad | DRIVEIT Cars',
    description:
      'Reliable B2B corporate car rental and executive chauffeur services in Hyderabad. GST billing, zero surge, 24/7 dedicated fleet support.',
  },
};

const CORPORATE_FAQS = [
  {
    question: 'How does corporate car rental in Hyderabad work with DRIVEIT?',
    answer:
      'DRIVEIT partners with enterprises, tech MNCs, consulting firms, and startups across Hyderabad to provide on-demand executive rentals, monthly fleet retainers, and 24/7 airport transfers. We assign a dedicated corporate account manager, provide consolidated monthly GST billing with input tax credits, and guarantee punctual, verified chauffeurs.',
  },
  {
    question: 'What types of corporate car rental packages do you provide in Hyderabad?',
    answer:
      'We offer flexible corporate packages: Spot Rentals (4h/40km or 8h/80km local business meetings), 24/7 RGIA Shamshabad Airport Transfers with flight delay tracking, Monthly Corporate Car Retainers with dedicated vehicles and chauffeurs, and Corporate Group Coaches (18 to 35-seater AC buses) for conferences and offsites.',
  },
  {
    question: 'Can our company get monthly corporate car rental with GST input credit in Hyderabad?',
    answer:
      'Yes, 100%. All our corporate rentals are tax-compliant with official GST invoices, enabling your enterprise to claim full GST input tax credit. Monthly corporate retainers also offer substantial savings of up to 45% compared to daily rental rates.',
  },
  {
    question: 'What standards do your executive chauffeurs follow in Hyderabad?',
    answer:
      'Our executive chauffeurs are background-verified, wear formal corporate suits or uniforms, speak fluent English, Hindi, and Telugu, and sign non-disclosure agreements (NDAs) to safeguard confidential client discussions. All vehicles are stocked with complimentary bottled water, sanitizers, and phone charging docks.',
  },
  {
    question: 'Which business districts in Hyderabad do you cover?',
    answer:
      'We cover 100% of Hyderabad’s commercial corridors: HITEC City, Gachibowli Financial District, Mindspace, Cyber Towers, Knowledge City, Kokapet SEZ, Banjara Hills, Begumpet, Genome Valley, and direct express runs to Rajiv Gandhi International Airport (RGIA Shamshabad).',
  },
];

const CORPORATE_FLEET = [
  {
    id: 'executive-sedan',
    name: 'Executive Sedan (Dzire / Ciaz / City)',
    category: 'Corporate Daily Meetings & Commutes',
    image: '/assets/img/cars/Dzire.png',
    rate8hr: 'Tariff on Request',
    rateMonthly: 'Custom Retainer',
    features: ['Plush Ergonomic Seats', 'Dual Climate AC', 'Smooth City Commute', 'Professional Chauffeur Included'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about Executive Sedan corporate rental in Hyderabad.',
  },
  {
    id: 'innova-crysta-corp',
    name: 'Toyota Innova Crysta (Captain Chairs)',
    category: 'Client Delegations & Airport Runs',
    image: '/assets/img/crysta.png',
    rate8hr: 'Tariff on Request',
    rateMonthly: 'Custom Retainer',
    features: ['Reclining Captain Chairs', 'Large Check-In Luggage Boot', 'Express Highway Stability', 'WiFi on Request'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about Innova Crysta corporate car hire in Hyderabad.',
  },
  {
    id: 'mercedes-e-class-corp',
    name: 'Mercedes-Benz E-Class Executive',
    category: 'CXO & Board Member Travel',
    image: '/assets/img/benz2.png',
    rate8hr: 'Tariff on Request',
    rateMonthly: 'Custom Retainer',
    features: ['Panoramic Sunroof', 'Burmester Sound System', 'Suited Protocol Chauffeur', 'Red-Carpet Corporate Presence'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about Mercedes-Benz corporate rental in Hyderabad.',
  },
  {
    id: 'bmw-5-series-corp',
    name: 'BMW 5 Series M-Sport',
    category: 'Visiting Investors & Directors',
    image: '/assets/img/bmw.png',
    rate8hr: 'Tariff on Request',
    rateMonthly: 'Custom Retainer',
    features: ['Dynamic Luxury Cockpit', 'Harman Kardon Audio', 'Punctual VIP Airport Meet', 'Strict NDA Compliance'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about BMW 5 Series corporate car hire in Hyderabad.',
  },
  {
    id: 'fortuner-legender-corp',
    name: 'Toyota Fortuner Legender',
    category: 'Senior Executives & Site Visits',
    image: '/assets/img/fortuner.png',
    rate8hr: 'Tariff on Request',
    rateMonthly: 'Custom Retainer',
    features: ['Commanding Pilot Stature', 'All-Terrain Site Inspection', 'High Ground Clearance', 'VIP Security Presence'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about Fortuner Legender corporate hire in Hyderabad.',
  },
  {
    id: 'luxury-bus-corp',
    name: '35-Seater Corporate Luxury Coach',
    category: 'Employee Offsites & Delegations',
    image: '/assets/img/bus2.jpg',
    rate8hr: 'Tariff on Request',
    rateMonthly: 'Custom Contract',
    features: ['Push-Back Luxury Seats', 'Dual Climate AC Vents', 'PA Sound System', 'Experienced Highway Captain'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about 35-Seater corporate coach rental in Hyderabad.',
  },
];

export default function CorporateCarRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Corporate Car Rental Hyderabad',
    description:
      'Premier corporate car rental and executive chauffeur service in Hyderabad. Tailored B2B fleet solutions for enterprises in HITEC City, Gachibowli & Financial District with GST billing.',
    url: 'https://www.driveitcars.in/corporate-car-rental-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Gachibowli Financial District', 'Mindspace', 'Banjara Hills', 'RGIA Shamshabad Airport'],
    priceRange: 'Tariff on Request',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Corporate Car Rental Hyderabad', url: '/corporate-car-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(CORPORATE_FAQS);

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
                  ✦ B2B MOBILITY PARTNER FOR HYDERABAD ENTERPRISES
                </span>
                <h3>Corporate Car Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Corporate Car Rental Hyderabad</li>
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
                  ✦ 100% GST INVOICES • SUITED CHAUFFEURS • MONTHLY RETAINERS
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Corporate Car Rental Hyderabad — Executive Chauffeur &amp; Monthly Corporate Fleet
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  In Hyderabad’s fast-moving business ecosystem — spanning the tech corridors of <strong>HITEC City, Gachibowli Financial District, Mindspace, and Kokapet</strong> — reliable, punctual, and prestigious ground transportation is a business necessity. DRIVEIT is Hyderabad’s premier corporate car rental provider, powering the mobility needs of global multinational corporations, leading tech giants, pharmaceutical leaders, consulting firms, and visiting delegations.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Whether you require an on-demand <strong>executive chauffeur Hyderabad</strong> for visiting clients, seamless 24/7 airport transfers to Rajiv Gandhi International Airport (RGIA Shamshabad), or a cost-effective <strong>monthly corporate car rental Hyderabad</strong> retainer with dedicated vehicles, DRIVEIT delivers spotless fleet standards, guaranteed replacement vehicles, and transparent corporate credit billing with full GST input tax credits.
                </p>

                {/* Corporate Sub-Category Jump Bar */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/monthly-corporate-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    📅 Monthly Corporate Car Rental
                  </Link>
                  <Link href="/luxury-chauffeur-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🤵 Executive Chauffeur Hyderabad
                  </Link>
                  <Link href="/vip-car-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👑 VIP &amp; CEO Car Rental
                  </Link>
                  <Link href="/hyderabad-airport-car-rental" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ✈️ Airport Corporate Transfers
                  </Link>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Executive Rental
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
                CORPORATE FLEET SOLUTIONS
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Corporate Vehicles &amp; Business Tariffs in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Fully sanitized, GPS-tracked vehicles with suited chauffeurs, bottled water, and centralized corporate invoicing.
              </p>
            </div>
          </div>

          <div className="row">
            {CORPORATE_FLEET.map((car) => (
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
                      {car.category}
                    </span>
                    <img
                      loading="lazy"
                      src={car.image}
                      alt={`${car.name} corporate car rental Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#92400e', background: '#fef3c7', padding: '5px 10px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <i className="fa fa-tag" style={{ color: '#d97706', fontSize: '13px' }} />
                        Spot &amp; Monthly: {car.rate8hr}
                      </div>
                      <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                        <i className="fa fa-check-circle" /> GST Invoicing &amp; Retainer Plans
                      </div>
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
                        <i className="fa fa-phone" /> Call Desk
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

      {/* Corporate Pillars */}
      <section className="section_70">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                ENTERPRISE GRADE MOBILITY
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                Why Companies Partner with DRIVEIT for Corporate Travel
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-file-text-o" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>100% GST Tax Invoices</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Itemized corporate invoices with GST input tax credits and monthly credit billing.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-user-tie" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Executive Chauffeurs</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Suited, police-verified drivers fluent in English, Hindi, and Telugu with strict NDA ethics.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-repeat" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Guaranteed Replacement</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Zero downtime — instant replacement vehicle dispatched in case of scheduled servicing.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-plane" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>RGIA Airport Flight Tracking</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Automated real-time flight tracking with zero surge pricing and arrival gate placard reception.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with Schema */}
      <FaqSection
        items={CORPORATE_FAQS}
        title="Frequently Asked Questions — Corporate Car Rental Hyderabad"
        subtitle="Key details regarding corporate agreements, monthly retainers & executive chauffeur services"
      />
    </>
  );
}
