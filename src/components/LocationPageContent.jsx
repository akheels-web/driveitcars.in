import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import { getLocationData } from '@/sanity/lib/locations';
import { getCarsForPage } from '@/sanity/lib/cars';

export default async function LocationPageContent({ slug }) {
  const loc = await getLocationData(slug);
  const cars = await getCarsForPage(slug);

  return (
    <>
      {/* ========== BREADCRUMB ========== */}
      <section className="gauto-breadcromb-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <h3>{loc.name} Car Rentals</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>{loc.name}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== ABOUT LOCATION SECTION ========== */}
      <section className="about-page-area section_70">
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
                  ✦ 24/7 SELF DRIVE &amp; LUXURY CAR RENTALS
                </span>
                <h1 style={{ color: '#ffb907', fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>
                  {loc.h1Title}
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  {loc.introParagraph1}
                </p>
                {loc.introParagraph2 && (
                  <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                    {loc.introParagraph2}
                  </p>
                )}
                {loc.introParagraph3 && (
                  <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '20px' }}>
                    {loc.introParagraph3}
                  </p>
                )}

                {/* Service Area Landmarks */}
                {loc.serviceAreas && loc.serviceAreas.length > 0 && (
                  <div style={{ marginTop: '15px', marginBottom: '25px' }}>
                    <strong style={{ fontSize: '13px', color: '#111827', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '8px' }}>
                      📍 Prominent Landmarks &amp; Hubs Served in {loc.name}:
                    </strong>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {loc.serviceAreas.map((area, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: '#f1f5f9',
                            color: '#334155',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 600,
                            border: '1px solid #e2e8f0',
                          }}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FLEET CARDS GRID ========== */}
      <section className="gauto-offers-area section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="site-heading text-center" style={{ marginBottom: '35px' }}>
            <span
              style={{
                color: '#ffb907',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '6px',
              }}
            >
              Sanitized Fleet in {loc.name}
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              DRIVEIT Available Cars in {loc.name}
            </h2>
          </div>

          <div className="row">
            {cars.map((car, idx) => {
              const whatsappText = encodeURIComponent(
                `Hi DRIVEIT Cars, I am contacting you to enquire about booking the ${car.name} in ${loc.name}. Please share availability and rates.`
              );

              return (
                <div className="col-lg-4 col-md-6 mb-4" key={car.id || idx}>
                  <div className="single-offers" style={{ background: '#ffffff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                    <div className="offer-image" style={{ width: '100%', height: '195px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        loading="lazy"
                        src={car.image || '/assets/img/cars/Swift.png'}
                        alt={`${car.name} rental in ${loc.name}`}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="offer-text" style={{ padding: '20px' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111827', margin: '0 0 10px' }}>
                        {car.name}
                      </h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', gap: '14px', flexWrap: 'wrap', color: '#6b7280', fontSize: '13px' }}>
                        <li><i className="fa fa-car" style={{ color: '#ffb907', marginRight: 5 }} /> {car.modelYear || '2023'}</li>
                        <li><i className="fa fa-users" style={{ color: '#ffb907', marginRight: 5 }} /> {car.seats || 5} Seater</li>
                        <li><i className="fa fa-cogs" style={{ color: '#ffb907', marginRight: 5 }} /> {car.transmission || 'Manual'}</li>
                        <li><i className="fa fa-gas-pump" style={{ color: '#ffb907', marginRight: 5 }} /> {car.fuelType || 'Petrol'}</li>
                      </ul>
                      <div className="offer-action" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                        <a href="tel:+916300041186" className="offer-btn-1">
                          <i className="fa fa-phone" /> Enquire Now
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?phone=+916300041186&text=${whatsappText}`}
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

      {/* ========== FAQ SECTION ========== */}
      <FaqSection
        items={loc.customFaqs}
        title={`Frequently Asked Questions — ${loc.name}`}
        subtitle={`Everything you need to know about self drive & luxury car rentals in ${loc.name}`}
      />
    </>
  );
}
