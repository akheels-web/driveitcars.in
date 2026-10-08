import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Groom Entry Luxury Car Hyderabad | Baraat Luxury Car Rental | DRIVEIT',
  description:
    'Book the ultimate groom entry luxury car in Hyderabad with DRIVEIT. Rolls Royce, Mercedes-AMG G-Wagon, Range Rover & Fortuner Legender for high-energy, commanding baraat arrivals.',
  alternates: {
    canonical: 'https://www.driveitcars.in/groom-entry-luxury-car-hyderabad',
  },
  openGraph: {
    title: 'Groom Entry Luxury Car Hyderabad | Baraat Car Hire | DRIVEIT',
    description:
      'Lead your wedding baraat like a king. Rent Rolls Royce Phantom, Mercedes G-Wagon, Range Rover Sport & open-top convertibles for groom entry in Hyderabad with suited chauffeurs.',
    url: 'https://www.driveitcars.in/groom-entry-luxury-car-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/g-wagon.png',
        width: 1200,
        height: 630,
        alt: 'Groom Entry Luxury Car Hyderabad - Mercedes G Wagon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groom Entry Luxury Car Hyderabad | DRIVEIT Cars',
    description:
      'Book luxury cars for groom entry and baraat processions in Hyderabad. Rolls Royce, G-Wagon, Range Rover with suited chauffeurs.',
  },
};

const GROOM_FAQS = [
  {
    question: 'Which luxury cars are most popular for groom entry in Hyderabad?',
    answer:
      'The top cars for groom entries and baraat processions in Hyderabad are the presidential Rolls Royce Phantom (for royal Nizami grandeur), the thunderous Mercedes-AMG G-Wagon G63 (for high-energy celebrity presence), the commanding Range Rover Sport (for panoramic sunroof standing), and classic open-top convertibles.',
  },
  {
    question: 'How do chauffeurs handle the slow pace of a traditional baraat procession?',
    answer:
      'Our wedding chauffeurs are specially trained in baraat crawling etiquette. They smoothly pace the vehicle in low gear to match the speed of the dhol, brass band, and dancing relatives without riding the clutch or jerking, ensuring the groom’s ride is smooth and majestic.',
  },
  {
    question: 'Can the groom stand through the sunroof or ride on the open-top during the baraat?',
    answer:
      'Yes! Many of our groom entry vehicles (Range Rover, Mercedes G-Wagon, Fortuner, and convertibles) feature expansive sunroofs or open-top cabins specifically suited for the groom to stand, greet guests, and enjoy rose-petal showers and drone video capture.',
  },
  {
    question: 'What is the cost of renting a groom entry luxury car in Hyderabad?',
    answer:
      'Groom entry luxury car tariffs in Hyderabad are provided on request based on the selected vehicle (convertibles, Range Rover, Rolls Royce, or Mercedes G-Wagon), event duration, and venue location. Contact our team for custom wedding quotes.',
  },
  {
    question: 'Can you provide matching security escort cars for the groom’s convoy?',
    answer:
      'Yes, we frequently arrange full VIP groom convoys pairing the groom’s flagship car (Rolls Royce or G-Wagon) with matching white Toyota Fortuner Legender or Innova Crysta escort SUVs for groomsmen and immediate family.',
  },
];

const GROOM_FLEET = [
  {
    id: 'mercedes-g-wagon-groom',
    name: 'Mercedes-AMG G-Wagon (G63)',
    badge: '#1 Celebrity Groom Arrival',
    image: '/assets/img/g-wagon.png',
    rate: 'Tariff on Request',
    features: ['Thunderous V8 Biturbo Roar', 'Side-Exit Exhaust Soundtrack', 'Unmatched Street Dominance', 'VIP Escort Stature'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes G-Wagon for groom entry in Hyderabad.',
  },
  {
    id: 'rolls-royce-groom',
    name: 'Rolls Royce Phantom',
    badge: 'Royal Emperor Entry',
    image: '/assets/img/rollsp.png',
    rate: 'Tariff on Request',
    features: ['Starlight Headliner', 'Coach Suicide Doors', 'White-Glove Chauffeur', 'Nizami Grandeur'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Rolls Royce for groom entry in Hyderabad.',
  },
  {
    id: 'range-rover-groom',
    name: 'Range Rover Sport / Vogue',
    badge: 'Panoramic Sunroof Standing',
    image: '/assets/img/range-rover1.png',
    rate: 'Tariff on Request',
    features: ['Commanding High Stature', 'Panoramic Glass Sunroof', 'Air Suspension Comfort', 'Groom Sunroof Standing'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Range Rover for groom entry in Hyderabad.',
  },
  {
    id: 'fortuner-legender-convoy',
    name: 'Toyota Fortuner Legender',
    badge: 'Macho Groom & Escort Pilot',
    image: '/assets/img/fortuner2.jpg',
    rate: 'Tariff on Request',
    features: ['Aggressive Legender Styling', 'High Ground Clearance', 'VIP Convoy Favorite', 'Powerful Road Stature'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Fortuner Legender for groom entry in Hyderabad.',
  },
];

export default function GroomEntryLuxuryCarHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Groom Entry Luxury Car Hyderabad',
    description:
      'Premier groom entry luxury car rental in Hyderabad. Rent Rolls Royce, Mercedes-AMG G-Wagon, Range Rover & Fortuner Legender for grand baraat arrivals.',
    url: 'https://www.driveitcars.in/groom-entry-luxury-car-hyderabad',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Shamshabad', 'Secunderabad'],
    priceRange: 'Tariff on Request',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Wedding Cars', url: '/wedding-car-rental-hyderabad' },
    { name: 'Groom Entry Luxury Car Hyderabad', url: '/groom-entry-luxury-car-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(GROOM_FAQS);

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
                  ✦ MAJESTIC BARAAT ARRIVALS &amp; ROYAL STATURE
                </span>
                <h3>Groom Entry Luxury Car Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/wedding-car-rental-hyderabad">Wedding Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Groom Entry Luxury Car Hyderabad</li>
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
                  ✦ MERCEDES G-WAGON • ROLLS ROYCE • RANGE ROVER SPORT • FORTUNER
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Groom Entry Luxury Car Hyderabad — Grand Baraat Car Hire &amp; Royal Processions
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Lead your wedding procession with unstoppable authority and regal magnetism. With DRIVEIT's dedicated <strong>groom entry luxury car Hyderabad</strong> fleet, the groom's baraat arrival becomes the crowning highlight of the evening. Whether you choose the thunderous V8 side-exhaust roar of a <strong>Mercedes-AMG G-Wagon</strong>, the timeless imperial poise of a <strong>Rolls Royce Phantom</strong>, or a high-stance <strong>Range Rover Sport</strong> with a panoramic sunroof, your entrance sets an unforgettable tone.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Our suited chauffeurs are experienced with the crawl pace of Indian baraat music bands, dhol players, and celebratory firework displays, providing flawless performance at venues across <strong>Banjara Hills, Jubilee Hills, Gachibowli, Shamshabad, and Secunderabad</strong>.
                </p>

                {/* Wedding Navigation Strip */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/wedding-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    💐 All Wedding Cars
                  </Link>
                  <Link href="/bridal-entry-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👰 Bridal Entry Cars
                  </Link>
                  <Link href="/rolls-royce-wedding-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👑 Rolls Royce Wedding
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
                COMMAND THE BARAAT
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Top Groom Entry Vehicles in Hyderabad
              </h2>
            </div>
          </div>

          <div className="row">
            {GROOM_FLEET.map((car) => (
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
                      alt={`${car.name} groom entry luxury car Hyderabad`}
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
        items={GROOM_FAQS}
        title="Frequently Asked Questions — Groom Entry Luxury Car Hyderabad"
        subtitle="Key details regarding baraat crawling, sunroof standing, and convoy packages"
      />
    </>
  );
}
