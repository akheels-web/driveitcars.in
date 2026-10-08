import HeroSlider from '@/components/HeroSlider';
import FaqSection from '@/components/FaqSection';
import Link from 'next/link';
import SeoSchema, {
  buildCarRentalSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Airport Pickup & Drop Hyderabad | Chauffeur Cab Services | DRIVEIT',
  description:
    'Book 24/7 airport pickup & drop in Hyderabad. Chauffeur driven sedans, Innova Crysta & luxury cabs at RGIA Shamshabad. Zero surge pricing, flight tracking.',
  alternates: {
    canonical: 'https://www.driveitcars.in/cabs',
  },
  openGraph: {
    title: 'Airport Pickup & Drop Hyderabad | Chauffeur Cabs | DRIVEIT',
    description:
      'Reliable airport transfers in Hyderabad. Verified chauffeurs, clean AC cars, zero surge pricing at Rajiv Gandhi International Airport.',
    url: 'https://www.driveitcars.in/cabs',
    siteName: 'DRIVEIT Cars Hyderabad',
  },
};

const CAB_FAQS = [
  {
    question: 'How do airport pickup and drop transfers work with DRIVEIT?',
    answer:
      'We provide fixed-rate airport pickup and airport drop services between Rajiv Gandhi International Airport (RGIA Shamshabad) and any location in Hyderabad. Our drivers track your flight arrival time and wait at the arrival gate with zero cancellation risk.',
  },
  {
    question: 'Is there surge pricing during night or peak morning airport hours?',
    answer:
      'No. DRIVEIT operates on a transparent, flat pricing policy with zero surge pricing, even during midnight and early-morning hours.',
  },
  {
    question: 'Can I book an Innova Crysta for large group airport transfers?',
    answer:
      'Yes, we provide 7-seater and 8-seater Innova Crysta and MUVs with massive luggage capacity for international and domestic arrivals.',
  },
];

const CABS_FLEET = [
  {
    id: 1,
    name: 'Hatchback Cab (Swift / WagonR)',
    seats: '5 Seater',
    model: '2023 - 2024',
    idealFor: 'City rides, office commutes, quick airport drops',
    image: '/assets/img/Hatchback.jpg',
    features: ['Air Conditioned', 'Spacious Boot Space', 'Expert City Driver'],
  },
  {
    id: 2,
    name: 'Sedan Dzire / Etios',
    seats: '5 Seater',
    model: '2023 - 2024',
    idealFor: 'Business meetings, executive travel & airport transfers',
    image: '/assets/img/Sedan.jpg',
    features: ['Comfortable Legroom', 'Chauffeur Driven', 'Large Luggage Boot'],
  },
  {
    id: 3,
    name: 'Sedan Ertiga MUV',
    seats: '7 Seater',
    model: '2023 - 2024',
    idealFor: 'Family city outings, weddings & budget outstation',
    image: '/assets/img/Sedan 7seater.jpg',
    features: ['Dual AC Vents', 'Foldable 3rd Row', 'Smooth Highway Ride'],
  },
  {
    id: 4,
    name: 'Innova 7 Seater',
    seats: '7 Seater',
    model: '2023 - 2024',
    idealFor: 'Long-distance tours, outstation trips & VIP transit',
    image: '/assets/img/Suv 7 Seater1.jpg',
    features: ['Captain Seats', 'Premium Highway Comfort', 'High Reliability'],
  },
  {
    id: 5,
    name: 'Innova Crysta Premium',
    seats: '7 / 8 Seater',
    model: '2023 - 2024',
    idealFor: 'Luxury family travel, corporate delegations & weddings',
    image: '/banner8.avif',
    features: ['Plush Leather Seats', 'Superior Suspension', 'Expansive Luggage Room'],
  },
  {
    id: 6,
    name: 'MUV 8 Seater (Group Travel)',
    seats: '8 Seater',
    model: '2023 - 2024',
    idealFor: 'Large group travel, pilgrimage tours & events',
    image: '/assets/img/Muv 7 Seater.jpg',
    features: ['Spacious 8 Passenger Capacity', 'Dual AC', 'Experienced Highway Chauffeur'],
  },
];

export default function cabsPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Airport Pickup & Drop Hyderabad',
    description:
      'Reliable 24/7 airport pickup & drop transfers and chauffeur cab services in Hyderabad at Rajiv Gandhi International Airport (RGIA).',
    url: 'https://www.driveitcars.in/cabs',
    areaServed: ['Rajiv Gandhi International Airport (RGIA)', 'Hyderabad', 'HITEC City', 'Gachibowli', 'Telangana'],
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Airport Pickup & Drop Cabs', url: '/cabs' },
  ]);

  const faqSchema = buildFaqSchema(CAB_FAQS);

  return (
    <>
      <SeoSchema schema={rentalSchema} />
      <SeoSchema schema={breadcrumbSchema} />
      <SeoSchema schema={faqSchema} />
      {/* ========== HERO SLIDER ========== */}
      <HeroSlider />

      {/* ========== REDESIGNED CABS INTRO SECTION ========== */}
      <section className="about-page-area section_70" style={{ background: '#ffffff', padding: '75px 0 65px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="cabs-intro-content text-center" style={{ maxWidth: '850px', margin: '0 auto' }}>
                <span
                  style={{
                    background: 'rgba(255, 185, 7, 0.15)',
                    color: '#d49500',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '14px',
                  }}
                >
                  <i className="fa fa-taxi" style={{ marginRight: 6 }} /> Affordable Chauffeur-Driven Cabs in Hyderabad
                </span>
                <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#111827', lineHeight: '1.3', marginBottom: '18px' }}>
                  Reliable City Cabs, 24/7 Airport Transfers &amp; Outstation Travel
                </h2>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.75', marginBottom: '32px' }}>
                  For a hassle-free, comfortable, and affordable travel experience, book verified cab rentals in Hyderabad with <strong>DriveIt</strong>. Whether you need a fuel-efficient hatchback for local errands, an executive sedan for business appointments, or a spacious 7/8-seater MUV like the Innova Crysta for outstation vacations and weddings, our professional chauffeurs ensure a punctual, safe, and pleasant journey across Telangana and beyond.
                </p>

                {/* 4 Feature Highlights */}
                <div className="row g-3 text-start">
                  <div className="col-md-3 col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fff8e6', color: '#ffb907', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: 10 }}>
                        <i className="fa fa-user-circle" />
                      </div>
                      <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Verified Chauffeurs</h5>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Polite, licensed, and route-expert drivers</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fff8e6', color: '#ffb907', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: 10 }}>
                        <i className="fa fa-plane" />
                      </div>
                      <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>24/7 Airport Drops</h5>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Zero-delay RGIA Shamshabad transfers</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fff8e6', color: '#ffb907', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: 10 }}>
                        <i className="fa fa-money" />
                      </div>
                      <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Transparent Fares</h5>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>No surge pricing or hidden surprises</p>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: '#fff8e6', color: '#ffb907', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: 10 }}>
                        <i className="fa fa-snowflake-o" />
                      </div>
                      <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Clean &amp; Sanitized</h5>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>Fresh AC interiors before every trip</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CABS FLEET SHOWCASE ========== */}
      <section className="cabs-fleet-area section_70" style={{ background: '#f8fafc', padding: '70px 0' }}>
        <div className="container">
          <div className="site-heading text-center" style={{ width: '100%', maxWidth: '750px', margin: '0 auto 45px' }}>
            <h4 style={{ color: '#ffb907', fontSize: '13px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
              Our Cab Options
            </h4>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', margin: '0 0 10px', display: 'block', width: '100%' }}>
              Choose Your Cab for City &amp; Outstation Rides
            </h2>
            <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
              All cabs are chauffeur-driven, sanitized, fully insured, and available for local hours or intercity round trips.
            </p>
          </div>

          <div className="row g-4">
            {CABS_FLEET.map((cab) => {
              const whatsappMsg = `Hi DRIVEIT Cars, I am contacting you to enquire about booking the ${cab.name}. Please share availability, city/outstation rates, and booking details.`;

              return (
                <div className="col-lg-4 col-md-6 mb-4" key={cab.id}>
                  <div
                    className="single-offers"
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                    }}
                  >
                    <div className="offer-image" style={{ position: 'relative' }}>
                      <img
                        loading="lazy"
                        src={cab.image}
                        alt={cab.name}
                        style={{
                          width: '100%',
                          height: '210px',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: '#0f172a',
                          color: '#ffb907',
                          fontSize: '11px',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: '20px',
                        }}
                      >
                        {cab.seats}
                      </span>
                    </div>

                    <div className="offer-text" style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 6px' }}>
                        {cab.name}
                      </h3>
                      <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px', fontStyle: 'italic' }}>
                        {cab.idealFor}
                      </p>

                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                        <li style={{ fontSize: '13px', color: '#334155', fontWeight: 600 }}>
                          <i className="fa fa-calendar" style={{ color: '#ffb907', marginRight: 5 }} /> Model: {cab.model}
                        </li>
                        <li style={{ fontSize: '13px', color: '#334155', fontWeight: 600 }}>
                          <i className="fa fa-users" style={{ color: '#ffb907', marginRight: 5 }} /> {cab.seats}
                        </li>
                      </ul>

                      <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', marginBottom: '18px', flexGrow: 1 }}>
                        {cab.features.map((f, idx) => (
                          <div key={idx} style={{ fontSize: '12px', color: '#475569', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <i className="fa fa-check" style={{ color: '#10b981', fontSize: '12px' }} />
                            {f}
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons: Call & Car-Specific WhatsApp */}
                      <div className="offer-action" style={{ marginTop: 'auto' }}>
                        <a
                          href="tel:+916300041186"
                          className="offer-btn-1"
                        >
                          <i className="fa fa-phone" /> Enquire Now
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?phone=+916300041186&text=${encodeURIComponent(whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="offer-btn-2"
                        >
                          <i className="fa fa-whatsapp" /> WhatsApp Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== UNIFIED FAQ ACCORDION COMPONENT ========== */}
      <FaqSection
        items={CAB_FAQS}
        title="Frequently Asked Questions — Airport Pickup & Drop Hyderabad"
        subtitle="Common questions about chauffeur cab bookings, airport transfers, and luggage capacity"
      />
    </>
  );
}