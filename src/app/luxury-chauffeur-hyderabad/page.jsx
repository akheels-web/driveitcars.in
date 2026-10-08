import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Executive Chauffeur Hyderabad | Luxury Chauffeur Service | DRIVEIT',
  description:
    'Book verified executive chauffeur service in Hyderabad with DRIVEIT. Suited, background-verified executive chauffeurs with Mercedes, BMW, Audi, Innova Crysta & Fortuner. 24/7 corporate & airport travel.',
  alternates: {
    canonical: 'https://www.driveitcars.in/luxury-chauffeur-hyderabad',
  },
  openGraph: {
    title: 'Executive Chauffeur Hyderabad | Luxury VIP Chauffeur Service | DRIVEIT',
    description:
      'Hyderabad’s elite executive chauffeur service. Suited chauffeurs, punctual meet-and-greet, English-fluent drivers for corporate executives, dignitaries, and RGIA airport transfers.',
    url: 'https://www.driveitcars.in/luxury-chauffeur-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/benz2.png',
        width: 1200,
        height: 630,
        alt: 'Executive Chauffeur Service Hyderabad - DRIVEIT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Chauffeur Hyderabad | DRIVEIT Cars',
    description:
      'Book verified executive chauffeur services in Hyderabad. Suited drivers, Mercedes, BMW, Audi & Innova Crysta for corporate and VIP travel.',
  },
};

const CHAUFFEUR_FAQS = [
  {
    question: 'What makes DRIVEIT’s luxury chauffeur service in Hyderabad unique?',
    answer:
      'Our luxury chauffeurs are rigorously vetted, background-verified professionals trained in executive protocol, defensive highway driving, and discreet VIP service. They wear clean corporate attire or suits, speak fluent English, Hindi, and Telugu, and maintain spotlessly sanitized luxury vehicles with complimentary bottled water and phone chargers.',
  },
  {
    question: 'Which vehicles are available with luxury chauffeur service in Hyderabad?',
    answer:
      'We offer luxury chauffeur services across multiple elite categories: Mercedes-Benz E-Class & S-Class, BMW 5 & 7 Series, Audi A6 & Q7, Toyota Innova Crysta (Captain Chairs), and Toyota Fortuner Legender, as well as 35-seater luxury coaches for corporate delegations.',
  },
  {
    question: 'Can I book a luxury chauffeur for RGIA Hyderabad Airport transfers?',
    answer:
      'Yes, 24/7. Our chauffeur monitors your flight status in real-time, arrives at the arrival terminal with a personalized digital or printed name placard, assists with luggage loading, and escorts you seamlessly to your destination across HITEC City, Gachibowli, or Banjara Hills.',
  },
  {
    question: 'Do you offer monthly or corporate retainer chauffeur packages in Hyderabad?',
    answer:
      'Yes! We provide dedicated executive chauffeur retainers for corporate enterprises, CXOs, consulates, and expatriates with customized monthly billing, dedicated vehicles, and backup driver guarantees.',
  },
  {
    question: 'How do I book a luxury chauffeur in Hyderabad?',
    answer:
      'Simply call +91 6300041186 or WhatsApp us with your travel itinerary, pickup address, and preferred vehicle. We confirm your chauffeur details, contact number, and vehicle registration within 15 minutes.',
  },
];

const CHAUFFEUR_PACKAGES = [
  {
    id: 'mercedes-chauffeur',
    name: 'Mercedes-Benz Executive Chauffeur',
    tag: 'Corporate & Board Meetings',
    image: '/assets/img/benz2.png',
    rate8hr: '₹11,999 (8 Hr / 80 Km)',
    airportRate: '₹5,999 (RGIA Transfer)',
    features: ['Suited Executive Chauffeur', 'Flight Delay Monitoring', 'Mineral Water & Mints', 'High-Speed Wi-Fi on Request'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes-Benz luxury chauffeur service in Hyderabad.',
  },
  {
    id: 'bmw-chauffeur',
    name: 'BMW 5 & 7 Series VIP Chauffeur',
    tag: 'VIP Dignitaries & CEOS',
    image: '/assets/img/bmw.png',
    rate8hr: '₹10,999 (8 Hr / 80 Km)',
    airportRate: '₹5,499 (RGIA Transfer)',
    features: ['Protocol-Trained Driver', 'Red-Carpet Door Opening', 'Smooth Highway Navigation', 'Discreet Non-Disclosure Service'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the BMW luxury chauffeur service in Hyderabad.',
  },
  {
    id: 'innova-crysta-chauffeur',
    name: 'Innova Crysta Captain Seats Chauffeur',
    tag: 'Executive Team & Luggage',
    image: '/assets/img/crysta.png',
    rate8hr: '₹4,499 (8 Hr / 80 Km)',
    airportRate: '₹2,799 (RGIA Transfer)',
    features: ['Reclining Captain Chairs', 'Large Check-in Boot Space', 'Expert Highway Chauffeur', 'Dual Climate AC Control'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Innova Crysta luxury chauffeur in Hyderabad.',
  },
  {
    id: 'fortuner-chauffeur',
    name: 'Fortuner Legender VIP Chauffeur',
    tag: 'Security & Escort Convoys',
    image: '/assets/img/fortuner.png',
    rate8hr: '₹8,999 (8 Hr / 80 Km)',
    airportRate: '₹4,999 (RGIA Transfer)',
    features: ['Commanding VIP Stature', 'Executive Security Ready', 'All-Terrain Capability', 'Punctual 24/7 Handover'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Fortuner Legender chauffeur in Hyderabad.',
  },
];

export default function LuxuryChauffeurHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Luxury Chauffeur Hyderabad',
    description:
      'Premier luxury chauffeur service in Hyderabad. Suited, background-verified executive drivers with Mercedes, BMW, Audi & Innova Crysta for corporate, VIP & airport travel.',
    url: 'https://www.driveitcars.in/luxury-chauffeur-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Gachibowli', 'Banjara Hills', 'Jubilee Hills', 'RGIA Shamshabad Airport'],
    priceRange: '₹2799 - ₹19999',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Cars', url: '/luxurycars' },
    { name: 'Luxury Chauffeur Hyderabad', url: '/luxury-chauffeur-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(CHAUFFEUR_FAQS);

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
                  ✦ PROTOCOL • PUNCTUALITY • PRESTIGE
                </span>
                <h3>Luxury Chauffeur Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/luxurycars">Luxury Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Luxury Chauffeur Hyderabad</li>
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
                  ✦ EXECUTIVE PROTOCOL • SUITED DRIVERS • 24/7 AIRPORT TRANSFERS
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Executive Chauffeur Hyderabad — Luxury Chauffeur &amp; Corporate Driver Services
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Elevate your business and VIP travel with DRIVEIT's dedicated <strong>executive chauffeur Hyderabad</strong> and <strong>luxury chauffeur service</strong>. Designed for discerning corporate executives, visiting CEOs, foreign delegates, high-net-worth families, and celebrity VIPs, our chauffeur service guarantees an oasis of tranquility and punctuality amid Hyderabad's bustling traffic. Travel seamlessly between corporate hubs in <strong>HITEC City, Gachibowli Financial District, Mindspace, Banjara Hills</strong>, and <strong>Rajiv Gandhi International Airport (RGIA)</strong>.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Every chauffeur is uniformed, polite, background-verified, and trained in executive etiquette and defensive driving. With zero surge pricing, flight-delay tracking, and corporate GST billing, you are guaranteed on-time pickup and complete peace of mind.
                </p>

                {/* Quick Link Navigation */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/corporate-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    🏢 Corporate Car Rental
                  </Link>
                  <Link href="/monthly-corporate-car-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    📅 Monthly Corporate Leases
                  </Link>
                  <Link href="/vip-car-rental-hyderabad" style={{ background: '#ffb907', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    👑 VIP &amp; CEO Car Rental
                  </Link>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Rental
                  </Link>
                  <Link href="/bmw-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚘 BMW Rental
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

      {/* Chauffeur Packages Grid */}
      <section className="section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                EXECUTIVE PACKAGES &amp; TARIFFS
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Luxury Chauffeur Fleet &amp; Rates in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Fixed, transparent billing with suited chauffeurs, fuel, and commercial passenger insurance included.
              </p>
            </div>
          </div>

          <div className="row">
            {CHAUFFEUR_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="col-lg-6 mb-4">
                <div
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', borderBottom: '1px solid #f1f5f9' }}>
                    <div style={{ flex: '1 1 200px', background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', minHeight: '180px' }}>
                      <img loading="lazy" src={pkg.image} alt={pkg.name} style={{ maxHeight: '130px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }} />
                    </div>
                    <div style={{ flex: '2 1 260px', padding: '20px' }}>
                      <span style={{ background: '#0f172a', color: '#ffb907', fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '14px', display: 'inline-block', marginBottom: '8px' }}>
                        {pkg.tag}
                      </span>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>{pkg.name}</h3>
                      <div style={{ marginBottom: '8px' }}>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#ffb907' }}>8 Hr / 80 Km: {pkg.rate8hr}</div>
                        <div style={{ fontSize: '13px', color: '#64748b' }}>Airport Run: {pkg.airportRate}</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '18px' }}>
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} style={{ fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <i className="fa fa-check" style={{ color: '#ffb907', fontSize: '11px' }} /> {feat}
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <a href="tel:+916300041186" style={{ background: '#0f172a', color: '#fff', textAlign: 'center', padding: '10px 4px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <i className="fa fa-phone" /> Call Chauffeur Desk
                      </a>
                      <a href={`https://api.whatsapp.com/send?phone=+916300041186&text=${encodeURIComponent(pkg.whatsappMsg)}`} target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#fff', textAlign: 'center', padding: '10px 4px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                        <i className="fa fa-whatsapp" /> Book on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chauffeur Service Standards */}
      <section className="section_70">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                5-STAR CHAUFFEUR STANDARDS
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                The DRIVEIT Executive Chauffeur Pledge
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-user-circle" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Suited &amp; Groomed</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Smart corporate attire with formal shoes and disciplined grooming standards.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-shield" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Background Verified</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>100% police background verified with clean commercial driving histories.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-comments" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Multilingual Fluency</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>English, Hindi, and Telugu fluency for effortless communication with international guests.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '26px', color: '#ffb907', marginBottom: '10px' }}><i className="fa fa-lock" /></div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>Strict Confidentiality</h4>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Non-disclosure discipline respecting executive phone calls and passenger privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FaqSection
        items={CHAUFFEUR_FAQS}
        title="Frequently Asked Questions — Luxury Chauffeur Hyderabad"
        subtitle="Common questions about booking executive chauffeur services in Hyderabad"
      />
    </>
  );
}
