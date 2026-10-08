import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Wedding Car Rental Hyderabad | Luxury Wedding Cars & Chauffeurs | DRIVEIT',
  description:
    'Premier wedding car rental in Hyderabad. Book luxury wedding cars: Rolls Royce, Mercedes-Benz, Range Rover, Audi, BMW & vintage open-top cars for groom baraats, bridal entries & vidai.',
  alternates: {
    canonical: 'https://www.driveitcars.in/wedding-car-rental-hyderabad',
  },
  openGraph: {
    title: 'Wedding Car Rental Hyderabad | Luxury Wedding Cars | DRIVEIT',
    description:
      'Make your grand wedding entrance unforgettable. Rent Rolls Royce, Mercedes S-Class, Range Rover, BMW & vintage wedding cars in Hyderabad with floral styling and suited chauffeurs.',
    url: 'https://www.driveitcars.in/wedding-car-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/rollsp.png',
        width: 1200,
        height: 630,
        alt: 'Wedding Car Rental Hyderabad - Rolls Royce & Mercedes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Car Rental Hyderabad | DRIVEIT Cars',
    description:
      'Luxury wedding car hire in Hyderabad. Rolls Royce, Mercedes, Range Rover & vintage convertibles for groom baraat and bridal entry.',
  },
};

const WEDDING_FAQS = [
  {
    question: 'How do I book a wedding car rental in Hyderabad with DRIVEIT?',
    answer:
      'Booking your luxury wedding car in Hyderabad is seamless: select your dream car (Rolls Royce, Mercedes-Maybach, Range Rover, BMW, or Vintage Roadster), share your wedding date, muhurtham timings, and venue address via WhatsApp (+91 6300041186) or direct phone, and DRIVEIT will confirm your vehicle with optional fresh floral decoration and suited chauffeur.',
  },
  {
    question: 'What luxury wedding cars are available in Hyderabad?',
    answer:
      'Our dedicated wedding fleet includes the presidential Rolls Royce Phantom and Ghost, Mercedes-Benz Maybach, S-Class and E-Class, Mercedes 2-seater convertible roadsters, Range Rover Evoque and Sport, BMW 5 & 7 Series, Audi A6 and Q7, classic vintage convertibles, and Toyota Fortuner Legender convoy escorts.',
  },
  {
    question: 'Do you provide fresh flower decoration for wedding cars in Hyderabad?',
    answer:
      'Yes! We offer customized premium floral decoration packages using fresh imported orchids, exotic carnations, Dutch roses, baby’s breath, and satin ribbons styled by expert floral designers before vehicle dispatch to your venue.',
  },
  {
    question: 'Are wedding cars provided with suited chauffeurs?',
    answer:
      'Yes, all our luxury wedding cars come with a professional, suited, background-verified chauffeur trained in wedding protocol, red-carpet door opening, and patient baraat procession pacing.',
  },
  {
    question: 'Can I rent wedding cars for pre-wedding photo and cinematic video shoots?',
    answer:
      'Absolutely. Our luxury convertibles, vintage open-tops, and Range Rovers are heavily booked for pre-wedding cinematic videos across scenic Hyderabad destinations, resorts in Gandipet, Golconda Fort, and heritage palaces.',
  },
  {
    question: 'How far in advance should I book a luxury wedding car in Hyderabad?',
    answer:
      'Due to high demand during auspicious muhurtham wedding dates in Telangana, we strongly recommend booking your preferred luxury car 2 to 4 weeks in advance to secure availability.',
  },
];

const WEDDING_FLEET = [
  {
    id: 'rolls-royce-phantom',
    name: 'Rolls Royce Phantom / Ghost',
    badge: 'Royal Nizami Grandeur',
    image: '/assets/img/rollsp.png',
    rateBaraat: '₹34,999 (4 Hr Baraat)',
    rateFullDay: '₹64,999 (12 Hr Full Day)',
    features: ['Starlight Headliner', 'Coach Doors for Photos', 'Suited Executive Chauffeur', 'Red-Carpet Protocol'],
    link: '/rolls-royce-wedding-hyderabad',
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Rolls Royce for our wedding in Hyderabad.',
  },
  {
    id: 'mercedes-maybach-s-class',
    name: 'Mercedes-Maybach / S-Class',
    badge: 'Presidential Elegance',
    image: '/assets/img/benz3.png',
    rateBaraat: '₹19,999 (4 Hr Baraat)',
    rateFullDay: '₹34,999 (12 Hr Full Day)',
    features: ['First-Class Rear Lounge', 'Burmester 3D Sound', 'Floral Decoration Ready', 'Maximum VIP Prestige'],
    link: '/mercedes-rental-hyderabad',
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes-Maybach / S-Class for our wedding in Hyderabad.',
  },
  {
    id: 'mercedes-convertible',
    name: 'Mercedes 2-Seater Open-Top Convertible',
    badge: 'Cinematic Bridal Entry',
    image: '/assets/img/benz2s.png',
    rateBaraat: '₹14,999 (4 Hr Baraat)',
    rateFullDay: '₹24,999 (12 Hr Full Day)',
    features: ['Drop-Top Open Air', 'Ideal for Flower Shower Entry', 'Exotic Sports Styling', 'Pre-Wedding Shoot Ready'],
    link: '/bridal-entry-car-hyderabad',
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Mercedes Convertible for bridal entry in Hyderabad.',
  },
  {
    id: 'range-rover-sport',
    name: 'Range Rover Sport / Vogue',
    badge: 'Dominant Groom Baraat',
    image: '/assets/img/range-rover1.png',
    rateBaraat: '₹18,999 (4 Hr Baraat)',
    rateFullDay: '₹32,999 (12 Hr Full Day)',
    features: ['Commanding High Stature', 'Panoramic Glass Sunroof', 'Air Suspension Comfort', 'Groom Sunroof Standing'],
    link: '/groom-entry-luxury-car-hyderabad',
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Range Rover for groom entry in Hyderabad.',
  },
  {
    id: 'vintage-royal-car',
    name: 'Classic Vintage Open Tourer',
    badge: 'Timeless Heritage Romance',
    image: '/assets/img/bentely.png',
    rateBaraat: '₹21,999 (4 Hr Baraat)',
    rateFullDay: '₹38,999 (12 Hr Full Day)',
    features: ['Open-Top Nizami Aesthetic', 'Slow Baraat Crawl Gearing', 'Photogenic Masterpiece', 'White-Glove Driver'],
    link: '/vintage-wedding-car-hyderabad',
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Vintage Wedding Car in Hyderabad.',
  },
  {
    id: 'audi-q7-suv',
    name: 'Audi Q7 7-Seater Luxury SUV',
    badge: 'VIP Family & Baraat Escort',
    image: '/assets/img/audi.png',
    rateBaraat: '₹14,999 (4 Hr Baraat)',
    rateFullDay: '₹24,999 (12 Hr Full Day)',
    features: ['7-Passenger Capacity', 'Dual Climate AC Control', 'Massive Luggage Room', 'VIP Convoy Ready'],
    link: '/audi-rental-hyderabad',
    whatsappMsg: 'Hi DRIVEIT Cars, I want to book the Audi Q7 for wedding transit in Hyderabad.',
  },
];

export default function WeddingCarRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Wedding Car Rental Hyderabad',
    description:
      'Premier wedding car rental service in Hyderabad. Rent Rolls Royce, Mercedes-Benz, Range Rover, BMW, and vintage cars for weddings, groom baraats & bridal entries.',
    url: 'https://www.driveitcars.in/wedding-car-rental-hyderabad',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Shamshabad', 'Secunderabad', 'Telangana'],
    priceRange: '₹14999 - ₹64999',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Cars', url: '/luxurycars' },
    { name: 'Wedding Car Rental Hyderabad', url: '/wedding-car-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(WEDDING_FAQS);

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
                  ✦ ROYAL NIZAMI CELEBRATIONS &amp; GRAND ENTRIES
                </span>
                <h3>Wedding Car Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/luxurycars">Luxury Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Wedding Car Rental Hyderabad</li>
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
                  ✦ ROLLS ROYCE • MERCEDES-BENZ • RANGE ROVER • VINTAGE CLASSICS
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Wedding Car Rental Hyderabad — Luxury Wedding Cars &amp; Royal Chauffeurs
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Your wedding day is a once-in-a-lifetime milestone deserving of breathtaking grandeur. At DRIVEIT, we provide the finest <strong>wedding car rental Hyderabad</strong> fleet, curating red-carpet automotive experiences for royal Hyderabadi weddings, groom baraat processions, and cinematic bridal entries. From the peerless stature of a <strong>Rolls Royce wedding car</strong> to the opulent executive poise of a <strong>Mercedes-Benz S-Class</strong>, an adventurous <strong>Range Rover</strong>, and romantic <strong>vintage open-top tourers</strong>, our showroom-conditioned vehicles set the stage for timeless memories.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Serving iconic wedding venues across <strong>Banjara Hills, Jubilee Hills, Gachibowli, Shamshabad, Taj Falaknuma Palace, ITC Kohenur, Novotel HICC, and JRC Conventions</strong>, our services feature suited executive chauffeurs, optional fresh floral decorations, and synchronized arrival timings.
                </p>

                {/* Wedding Sub-Category Jump Bar */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/rolls-royce-wedding-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    👑 Rolls Royce Wedding
                  </Link>
                  <Link href="/vintage-wedding-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🎩 Vintage Wedding Car
                  </Link>
                  <Link href="/bridal-entry-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👰 Bridal Entry Car
                  </Link>
                  <Link href="/groom-entry-luxury-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🤵 Groom Entry Luxury Car
                  </Link>
                  <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ⭐ Mercedes Wedding Car
                  </Link>
                  <Link href="/range-rover-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🚙 Range Rover Wedding
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Fleet Grid */}
      <section className="section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                SHOWROOM POLISHED • RED CARPET READY • SUITED CHAUFFEURS
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Luxury Wedding Cars Available in Hyderabad
              </h2>
              <p style={{ color: '#64748b', maxWidth: '680px', margin: '8px auto 0', fontSize: '15px' }}>
                Explore our handpicked collection of exotic wedding sedans, convertibles, SUVs, and vintage motorcars.
              </p>
            </div>
          </div>

          <div className="row">
            {WEDDING_FLEET.map((car) => (
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
                      alt={`${car.name} wedding car rental Hyderabad`}
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

                    <div style={{ marginBottom: '16px' }}>
                      <Link href={car.link} style={{ color: '#0f172a', fontSize: '13px', fontWeight: 700, textDecoration: 'underline' }}>
                        View Dedicated Details &amp; Gallery →
                      </Link>
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

      {/* Wedding Packages Matrix */}
      <section className="section_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading text-center mb-4">
                <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                  CURATED HYDERABADI PACKAGES
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                  Wedding Car Rental Packages &amp; Tariffs
                </h2>
              </div>

              <div className="table-responsive" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#0f172a', color: '#ffb907' }}>
                    <tr>
                      <th style={{ padding: '14px 16px' }}>Vehicle Class</th>
                      <th style={{ padding: '14px 16px' }}>Baraat Package (4 Hrs / 40 Km)</th>
                      <th style={{ padding: '14px 16px' }}>Full Wedding Day (12 Hrs / 100 Km)</th>
                      <th style={{ padding: '14px 16px' }}>Fresh Flower Decoration</th>
                      <th style={{ padding: '14px 16px' }}>Suited Chauffeur</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Rolls Royce Phantom / Ghost</td>
                      <td style={{ padding: '14px 16px' }}>₹34,999</td>
                      <td style={{ padding: '14px 16px' }}>₹64,999</td>
                      <td style={{ padding: '14px 16px' }}>Optional Premium</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Included (White Glove)</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Mercedes-Maybach / S-Class</td>
                      <td style={{ padding: '14px 16px' }}>₹19,999</td>
                      <td style={{ padding: '14px 16px' }}>₹34,999</td>
                      <td style={{ padding: '14px 16px' }}>Optional Premium</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Included (Suited)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Classic Vintage Open Tourer</td>
                      <td style={{ padding: '14px 16px' }}>₹21,999</td>
                      <td style={{ padding: '14px 16px' }}>₹38,999</td>
                      <td style={{ padding: '14px 16px' }}>Included Floral Trim</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Included (Uniformed)</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Mercedes / Audi Convertible (2-Seater)</td>
                      <td style={{ padding: '14px 16px' }}>₹14,999</td>
                      <td style={{ padding: '14px 16px' }}>₹24,999</td>
                      <td style={{ padding: '14px 16px' }}>Optional Silk/Fresh</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Included / Self Drive</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Range Rover Sport / Evoque</td>
                      <td style={{ padding: '14px 16px' }}>₹16,999</td>
                      <td style={{ padding: '14px 16px' }}>₹29,999</td>
                      <td style={{ padding: '14px 16px' }}>Optional Premium</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Included (Suited)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose DRIVEIT for Weddings */}
      <section className="section_70" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                WEDDING PERFECTION GUARANTEE
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                Why Hyderabad Families Trust DRIVEIT for Their Big Day
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-heart" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Spotless Vehicle Sanitization</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Every car is meticulously detailed, interior scented, and vacuumed before arrival.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-clock-o" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>100% On-Time Muhurtham</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Chauffeurs arrive at your home or hotel 30 minutes ahead of scheduled baraat timings.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-camera" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Photographer Friendly</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>Chauffeurs coordinate with your wedding photo and drone team for majestic cinematic angles.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div style={{ background: '#fff', padding: '26px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                <div style={{ fontSize: '28px', color: '#ffb907', marginBottom: '12px' }}><i className="fa fa-shield" /></div>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Guaranteed Model Security</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>The exact model, color, and trim you reserve is delivered with zero last-minute substitution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with Schema */}
      <FaqSection
        items={WEDDING_FAQS}
        title="Frequently Asked Questions — Wedding Car Rental Hyderabad"
        subtitle="Key details regarding wedding car bookings, baraat processions & floral packages"
      />
    </>
  );
}
