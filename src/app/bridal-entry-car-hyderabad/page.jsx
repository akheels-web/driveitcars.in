import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Bridal Entry Car Hyderabad | Open-Top & Luxury Cars for Bride Entry | DRIVEIT',
  description:
    'Book the perfect bridal entry car in Hyderabad with DRIVEIT. Open-top convertibles, floral decorated vintage cars & luxury SUVs for breathtaking, cinematic bride arrivals.',
  alternates: {
    canonical: 'https://www.driveitcars.in/bridal-entry-car-hyderabad',
  },
  openGraph: {
    title: 'Bridal Entry Car Hyderabad | Luxury Bride Entry Cars | DRIVEIT',
    description:
      'Make your bride entrance unforgettable. Rent open-top convertibles, vintage tourers & luxury sunroof SUVs with flower decoration and smoke effect coordination.',
    url: 'https://www.driveitcars.in/bridal-entry-car-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/benz2s.png',
        width: 1200,
        height: 630,
        alt: 'Bridal Entry Car Hyderabad - Convertible Luxury Car',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridal Entry Car Hyderabad | DRIVEIT Cars',
    description:
      'Rent open-top convertible and vintage cars for bride entry in Hyderabad. Floral decoration & professional chauffeur included.',
  },
};

const BRIDAL_FAQS = [
  {
    question: 'How do I choose the best bridal entry car in Hyderabad?',
    answer:
      'The most popular bridal entry cars are open-top convertibles (Mercedes Cabriolet, Audi Roadster) and classic vintage cars because they allow 360-degree visibility for photography, flower petal showers, and cold pyro sparklers. If you prefer royal privacy with grand emergence, the Rolls Royce Ghost or Mercedes S-Class is ideal.',
  },
  {
    question: 'Do you coordinate with the wedding event planner for the bridal entry timing?',
    answer:
      'Yes, our team and suited chauffeur coordinate directly with your wedding planner, event emcee, and DJ to ensure the car arrives, slows down, and rolls into the pathway right on cue with the bride’s entry theme music.',
  },
  {
    question: 'Can you decorate the bridal entry car with fresh flowers?',
    answer:
      'Yes! We provide custom bridal floral styling including cascading rose garlands, orchid door bouquets, baby’s breath wreaths, and matching satin ribbons tailored to the bride’s lehenga or wedding theme color palette.',
  },
  {
    question: 'What is the rental price for a bridal entry car in Hyderabad?',
    answer:
      'Bridal entry car package tariffs are available on request based on car selection, rental hours, floral decorations, and venue location. Contact our team for customized wedding packages.',
  },
  {
    question: 'Can the bride’s brother or father drive the car for the entry?',
    answer:
      'Yes! If your family wishes to have the father or brother drive the bride up to the mandap, we can arrange an authorized self-drive handover right at the venue after quick ID verification.',
  },
];

const BRIDAL_FLEET = [
  {
    id: 'mercedes-convertible-bride',
    name: 'Mercedes-Benz Open-Top Cabriolet',
    badge: '#1 Most Popular Bride Entry',
    image: '/assets/img/benz2s.png',
    rate: 'Tariff on Request',
    features: ['Drop-Top Open Air', 'Rose Petal Shower Ready', 'White Pearl Body', 'Pre-Wedding Shoot Ready'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes Cabriolet for bridal entry in Hyderabad.',
  },
  {
    id: 'audi-roadster-bride',
    name: 'Audi 2-Seater Sports Roadster',
    badge: 'Chic Modern Bride Entry',
    image: '/assets/img/audi2s.png',
    rate: 'Tariff on Request',
    features: ['Sleek Sports Profile', 'High RPM Soundtrack', 'Open-Top Visibility', 'Cinematic Photography Favorite'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Audi Roadster for bridal entry in Hyderabad.',
  },
  {
    id: 'vintage-tourer-bride',
    name: 'Classic Vintage Open Tourer',
    badge: 'Royal Nizami Bride Entry',
    image: '/assets/img/bentely.png',
    rate: 'Tariff on Request',
    features: ['Regal Fairytale Stature', 'Slow Glide Pacing', 'Photogenic Masterpiece', 'White-Glove Chauffeur'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Vintage Tourer for bridal entry in Hyderabad.',
  },
  {
    id: 'range-rover-sunroof-bride',
    name: 'Range Rover Evoque Panoramic',
    badge: 'Opulent Queen Entry',
    image: '/assets/img/range-rover.png',
    rate: 'Tariff on Request',
    features: ['Panoramic Glass Roof', 'Plush Red Leather', 'Meridian Sound System', 'Grand Palace Arrival'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Range Rover for bridal entry in Hyderabad.',
  },
];

export default function BridalEntryCarHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Bridal Entry Car Hyderabad',
    description:
      'Premier bridal entry car rental in Hyderabad. Rent open-top convertibles, classic vintage tourers, and luxury SUVs for unforgettable bride arrivals.',
    url: 'https://www.driveitcars.in/bridal-entry-car-hyderabad',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Shamshabad', 'Secunderabad'],
    priceRange: 'Tariff on Request',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wedding Cars', url: '/wedding-car-rental-hyderabad' },
    { name: 'Bridal Entry Car Hyderabad', url: '/bridal-entry-car-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(BRIDAL_FAQS);

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
                  ✦ CINEMATIC, EMOTIONAL &amp; UNFORGETTABLE MOMENTS
                </span>
                <h3>Bridal Entry Car Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/wedding-car-rental-hyderabad">Wedding Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Bridal Entry Car Hyderabad</li>
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
                  ✦ OPEN-TOP CONVERTIBLES • VINTAGE CLASSICS • PANORAMIC SUNROOF SUVS
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Bridal Entry Car Hyderabad — Open-Top &amp; Luxury Cars for the Bride’s Grand Arrival
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  The bridal entry is the emotional highlight of every Indian wedding — the moment all eyes, cameras, and hearts turn to witness the bride's breathtaking arrival. With DRIVEIT's dedicated <strong>bridal entry car Hyderabad</strong> collection, you can step away from ordinary entries and create a movie-like spectacle. Arrive gracefully in an <strong>open-top Mercedes convertible</strong> showered with rose petals, a fairytale <strong>vintage open-air tourer</strong>, or a regal <strong>Range Rover Evoque</strong> decorated with fresh designer blossoms.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  We coordinate with your event planner, wedding decorators, and cinematography crew for seamless timing, smoke effects, and slow rolling pacing down the wedding aisle.
                </p>

                {/* Wedding Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/wedding-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    💐 All Wedding Cars
                  </Link>
                  <Link href="/groom-entry-luxury-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🤵 Groom Entry Luxury Cars
                  </Link>
                  <Link href="/vintage-wedding-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🎩 Vintage Wedding Cars
                  </Link>
                  <Link href="/rolls-royce-wedding-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👑 Rolls Royce Wedding
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
                THE QUEEN'S CHARIOT
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Featured Bridal Entry Cars in Hyderabad
              </h2>
            </div>
          </div>

          <div className="row">
            {BRIDAL_FLEET.map((car) => (
              <div key={car.id} className="col-lg-6 col-md-6 mb-4">
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
                      alt={`${car.name} bridal entry car Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {car.name}
                    </h3>
                    <div style={{ marginBottom: '14px', background: '#f8fafc', padding: '8px 12px', borderRadius: '8px', display: 'inline-block' }}>
                      <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>
                        <i className="fa fa-tag" style={{ color: '#d97706', marginRight: 6 }} />
                        {car.rate}
                      </span>
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
        items={BRIDAL_FAQS}
        title="Frequently Asked Questions — Bridal Entry Car Hyderabad"
        subtitle="Key details regarding open-top convertibles, floral decor, and bride arrival coordination"
      />
    </>
  );
}
