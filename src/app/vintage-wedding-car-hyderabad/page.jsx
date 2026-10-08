import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Vintage Wedding Car Hyderabad | Classic & Open-Top Car Hire | DRIVEIT',
  description:
    'Rent vintage wedding cars in Hyderabad with DRIVEIT. Classic open-top vintage tourers & retro convertibles for majestic groom baraats, romantic bridal entries & pre-wedding shoots.',
  alternates: {
    canonical: 'https://www.driveitcars.in/vintage-wedding-car-hyderabad',
  },
  openGraph: {
    title: 'Vintage Wedding Car Hyderabad | Classic Open-Top Hire | DRIVEIT',
    description:
      'Turn your Hyderabadi wedding into a heritage fairytale. Rent classic open-top vintage wedding cars with uniform chauffeurs, flower decorations, and cinematic photoshoot ready.',
    url: 'https://www.driveitcars.in/vintage-wedding-car-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/bentely.png',
        width: 1200,
        height: 630,
        alt: 'Vintage Wedding Car Rental Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vintage Wedding Car Hyderabad | DRIVEIT Cars',
    description:
      'Book vintage and classic open-top wedding cars in Hyderabad for unforgettable groom entries and bridal arrivals.',
  },
};

const VINTAGE_FAQS = [
  {
    question: 'How do I book a vintage wedding car in Hyderabad with DRIVEIT?',
    answer:
      'To book a vintage wedding car in Hyderabad, simply reach out on WhatsApp (+91 6300041186) or call us with your wedding date, muhurtham timing, and venue location. We confirm your open-top classic tourer with a uniformed chauffeur and optional flower garlands.',
  },
  {
    question: 'Are vintage cars in Hyderabad reliable and safe for baraat processions?',
    answer:
      'Yes, absolutely. Our vintage wedding cars undergo comprehensive mechanical overhauls, cooling checks, and transmission tuning before every event. They are specifically geared for the slow, celebratory crawling pace of a Hyderabadi baraat without overheating.',
  },
  {
    question: 'Can the vintage car be used for pre-wedding cinematic shoots in Hyderabad?',
    answer:
      'Yes! Our classic open-top vintage cars are the #1 choice for pre-wedding films, drone photography, and couple portraits across Hyderabad heritage landmarks like Chowmahalla Palace, Qutb Shahi Tombs, and Gandipet resorts.',
  },
  {
    question: 'What is the price of renting a vintage wedding car in Hyderabad?',
    answer:
      'Vintage wedding car rentals in Hyderabad start from ₹21,999 for a 4-hour baraat or bridal entry package, and ₹38,999 for full-day event coverage. Packages include the vehicle, uniformed vintage chauffeur, fuel, and floral styling.',
  },
  {
    question: 'Can the bride and groom stand or ride with the top open during flower petal showers?',
    answer:
      'Yes! The open-top convertibles and vintage roadsters are designed precisely for open-air rose-petal showers, cold pyro entries, and majestic greetings to guests.',
  },
];

const VINTAGE_MODELS = [
  {
    id: 'vintage-royal-tourer',
    name: 'Classic British Royal Tourer',
    badge: 'Nizami Heritage Icon',
    image: '/assets/img/bentely.png',
    rateBaraat: '₹21,999 (4 Hr / 40 Km)',
    rateFullDay: '₹38,999 (12 Hr / 100 Km)',
    features: ['Open-Air Convertible Top', 'Chrome Spoke Wheels', 'Dual Trumpet Horns', 'Slow Baraat Crawl Gearing'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Classic Royal Tourer for our wedding in Hyderabad.',
  },
  {
    id: 'classic-cabriolet',
    name: 'Mercedes Classic Open-Top Roadster',
    badge: 'Romantic Elegance',
    image: '/assets/img/benz2s.png',
    rateBaraat: '₹16,999 (4 Hr / 40 Km)',
    rateFullDay: '₹28,999 (12 Hr / 100 Km)',
    features: ['Convertible Soft-Top', 'Pre-Wedding Shoot Ready', 'Spotless White Exterior', 'Red-Carpet Chauffeur'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes Classic Roadster for our wedding in Hyderabad.',
  },
];

export default function VintageWeddingCarHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Vintage Wedding Car Hyderabad',
    description:
      'Premier vintage wedding car hire in Hyderabad. Rent classic open-top convertibles and retro roadsters for groom baraats, bridal entries & pre-wedding shoots.',
    url: 'https://www.driveitcars.in/vintage-wedding-car-hyderabad',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'Old City Hyderabad', 'Secunderabad', 'Shamshabad'],
    priceRange: '₹16999 - ₹38999',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wedding Cars', url: '/wedding-car-rental-hyderabad' },
    { name: 'Vintage Wedding Car Hyderabad', url: '/vintage-wedding-car-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(VINTAGE_FAQS);

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
                  ✦ TIMELESS HERITAGE &amp; RETRO SOPHISTICATION
                </span>
                <h3>Vintage Wedding Car Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/wedding-car-rental-hyderabad">Wedding Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Vintage Wedding Car Hyderabad</li>
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
                  ✦ CLASSIC OPEN-TOP TOURERS • RETRO ROADSTERS • NIZAMI ROMANCE
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Vintage Wedding Car Hyderabad — Classic &amp; Open-Top Wedding Car Hire
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Step into an era of aristocratic romance and Nizami splendor with DRIVEIT's exclusive <strong>vintage wedding car Hyderabad</strong> collection. Classic cars evoke a sense of timeless charm that modern vehicles simply cannot duplicate. With polished chrome grilles, wide flowing fenders, dual trumpet horns, and open-air convertible tops, our vintage cars provide the perfect canvas for rose-petal showers, emotional vidai departures, and show-stopping groom baraat arrivals.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Our vintage vehicles are maintained by master mechanics and piloted by uniformed chauffeurs, delivering unforgettable arrivals across <strong>Taj Falaknuma, Banjara Hills, Jubilee Hills, and Golconda Resorts</strong>.
                </p>

                {/* Wedding Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/wedding-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    💐 All Wedding Cars
                  </Link>
                  <Link href="/bridal-entry-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👰 Bridal Entry Cars
                  </Link>
                  <Link href="/groom-entry-luxury-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🤵 Groom Entry Cars
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
                TIMELESS RETRO CLASSICS
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Our Vintage Wedding Collection in Hyderabad
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            {VINTAGE_MODELS.map((car) => (
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
                      alt={`${car.name} vintage wedding car Hyderabad`}
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
        items={VINTAGE_FAQS}
        title="Frequently Asked Questions — Vintage Wedding Car Hyderabad"
        subtitle="Key details about hiring classic open-top vintage cars for weddings in Hyderabad"
      />
    </>
  );
}
