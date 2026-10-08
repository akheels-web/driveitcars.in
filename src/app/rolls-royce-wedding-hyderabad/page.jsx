import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Rolls Royce Wedding Hyderabad | Phantom & Ghost Wedding Car Hire | DRIVEIT',
  description:
    'Rent Rolls Royce for wedding in Hyderabad with DRIVEIT. Majestic Rolls Royce Phantom, Ghost & Cullinan for royal groom baraat entries, bride send-offs & VIP reception arrivals.',
  alternates: {
    canonical: 'https://www.driveitcars.in/rolls-royce-wedding-hyderabad',
  },
  openGraph: {
    title: 'Rolls Royce Wedding Hyderabad | Royal Wedding Car Hire | DRIVEIT',
    description:
      'Experience royal Nizami grandeur with a Rolls Royce wedding car in Hyderabad. Phantom & Ghost with starlight headliner, suicide coach doors and white-gloved chauffeur.',
    url: 'https://www.driveitcars.in/rolls-royce-wedding-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/rollsp.png',
        width: 1200,
        height: 630,
        alt: 'Rolls Royce Wedding Hyderabad - Rolls Royce Phantom',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rolls Royce Wedding Hyderabad | DRIVEIT Cars',
    description:
      'Book Rolls Royce wedding cars in Hyderabad. The ultimate pinnacle of royal wedding luxury for groom baraat and bride vidai.',
  },
};

const ROLLS_ROYCE_WEDDING_FAQS = [
  {
    question: 'How do I book a Rolls Royce for a wedding in Hyderabad?',
    answer:
      'Booking a Rolls Royce for your wedding in Hyderabad is simple: share your wedding date, muhurtham timing, pickup location, and venue details via WhatsApp (+91 6300041186) or direct phone. DRIVEIT will reserve your chosen Rolls Royce Phantom or Ghost with dedicated chauffeur and optional fresh flower styling.',
  },
  {
    question: 'What is the price of renting a Rolls Royce for a wedding in Hyderabad?',
    answer:
      'Rolls Royce wedding packages in Hyderabad are tailored for baraat processions and full-day wedding events. All packages include a suited white-gloved chauffeur, fuel, and commercial passenger insurance. Contact our luxury desk for custom quotes.',
  },
  {
    question: 'Can the groom stand through the sunroof or ride in the Rolls Royce during the baraat?',
    answer:
      'The Rolls Royce features majestic coach (suicide) doors and expansive rear seating ideal for slow baraat processions, photography, and video shoots. Our chauffeurs maintain disciplined low-speed gearing to match the rhythm of the baraat band and procession.',
  },
  {
    question: 'Which wedding venues in Hyderabad do you deliver the Rolls Royce to?',
    answer:
      'We deliver to all premier wedding palaces and luxury hotels across Hyderabad, including Taj Falaknuma Palace, ITC Kohenur, Novotel Hyderabad Airport & HICC, Golconda Resorts, JRC Conventions, and private estates in Banjara Hills and Jubilee Hills.',
  },
  {
    question: 'Do you offer fresh flower decoration on the Rolls Royce?',
    answer:
      'Yes, we provide non-abrasive, vehicle-safe floral decorations featuring exotic white and red roses, baby’s breath, orchids, and satin ribbons designed specifically so the luxury paintwork remains immaculate.',
  },
];

const ROLLS_ROYCE_MODELS = [
  {
    id: 'phantom',
    name: 'Rolls Royce Phantom VII / VIII',
    badge: 'The Emperor of Weddings',
    image: '/assets/img/rollsp.png',
    rateBaraat: 'Tariff on Request',
    rateFullDay: 'Custom Quote',
    features: ['Starlight Fiber-Optic Ceiling', 'Rear Privacy Curtains', 'Spirit of Ecstasy Mascot', 'Whisper V12 Engine'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Rolls Royce Phantom for our wedding in Hyderabad.',
  },
  {
    id: 'ghost',
    name: 'Rolls Royce Ghost',
    badge: 'Modern Royal Splendor',
    image: '/assets/img/rolls-roy.png',
    rateBaraat: 'Tariff on Request',
    rateFullDay: 'Custom Quote',
    features: ['Illuminated Grille Accent', 'Effortless Coach Doors', 'Plush Lambswool Carpets', 'Pristine White Interior'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Rolls Royce Ghost for our wedding in Hyderabad.',
  },
  {
    id: 'cullinan',
    name: 'Rolls Royce Cullinan SUV',
    badge: 'The Sovereign Luxury SUV',
    image: '/assets/img/rollsc.png',
    rateBaraat: 'Tariff on Request',
    rateFullDay: 'Custom Quote',
    features: ['All-Terrain Royal Presence', 'Viewing Suite Tailgate', 'Unrivaled Stature', 'Executive Rear Lounge'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Rolls Royce Cullinan for our wedding in Hyderabad.',
  },
];

export default function RollsRoyceWeddingHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Rolls Royce Wedding Hyderabad',
    description:
      'Premier Rolls Royce wedding car rental in Hyderabad. Rent Rolls Royce Phantom, Ghost, and Cullinan for royal weddings, groom baraats & bridal entries.',
    url: 'https://www.driveitcars.in/rolls-royce-wedding-hyderabad',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Shamshabad', 'Secunderabad'],
    priceRange: 'Tariff on Request',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wedding Cars', url: '/wedding-car-rental-hyderabad' },
    { name: 'Rolls Royce Wedding Hyderabad', url: '/rolls-royce-wedding-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(ROLLS_ROYCE_WEDDING_FAQS);

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
                  ✦ THE ULTIMATE SYMBOL OF ROYAL NIZAMI CELEBRATION
                </span>
                <h3>Rolls Royce Wedding Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/wedding-car-rental-hyderabad">Wedding Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Rolls Royce Wedding Hyderabad</li>
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
                  ✦ ROLLS ROYCE PHANTOM • ROLLS ROYCE GHOST • ROLLS ROYCE CULLINAN
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Rolls Royce Wedding Hyderabad — Royal Wedding Car Hire &amp; Baraat Luxury
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Nothing in the automotive world rivals the breathtaking grandeur of arriving in a <strong>Rolls Royce wedding in Hyderabad</strong>. Revered for over a century by royal Nizams and global royalty, the iconic Spirit of Ecstasy grille and whisper-quiet V12 engine command supreme reverence. When the groom leads the baraat in a gleaming white <strong>Rolls Royce Phantom</strong> or the newlywed couple departs in an opulent <strong>Rolls Royce Ghost</strong>, the entrance becomes legendary.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  With white-gloved professional chauffeurs in corporate suits, non-damaging fresh floral arrangements, and punctual dispatch to <strong>Taj Falaknuma, ITC Kohenur, Banjara Hills, Jubilee Hills, and Shamshabad convention palaces</strong>, DRIVEIT delivers Hyderabad's pinnacle wedding transport.
                </p>

                {/* Wedding Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/wedding-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    💐 All Wedding Cars
                  </Link>
                  <Link href="/groom-entry-luxury-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🤵 Groom Entry Cars
                  </Link>
                  <Link href="/bridal-entry-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👰 Bridal Entry Cars
                  </Link>
                  <Link href="/vintage-wedding-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🎩 Vintage Wedding Cars
                  </Link>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Wedding Cars
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
                THE PINNACLE OF LUXURY
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Our Rolls Royce Wedding Fleet in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Showroom polished, air-conditioned, and dispatched with suited white-gloved chauffeurs.
              </p>
            </div>
          </div>

          <div className="row">
            {ROLLS_ROYCE_MODELS.map((car) => (
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
                      {car.badge}
                    </span>
                    <img
                      loading="lazy"
                      src={car.image}
                      alt={`${car.name} Rolls Royce wedding Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '16px', fontWeight: 800, color: '#ffb907' }}>{car.rateBaraat}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>Full Day: {car.rateFullDay}</div>
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

      {/* Interactive FAQ Section with Schema */}
      <FaqSection
        items={ROLLS_ROYCE_WEDDING_FAQS}
        title="Frequently Asked Questions — Rolls Royce Wedding Hyderabad"
        subtitle="Common questions regarding renting Rolls Royce wedding cars in Hyderabad"
      />
    </>
  );
}
