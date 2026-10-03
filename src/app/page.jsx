import { client } from '../../src/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

import HeroSlider from '../components/HeroSlider';
import CarOffersSection from '../components/CarOffersSection';
import FaqSection from '../components/FaqSection';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  try {
    return builder.image(source);
  } catch (err) {
    return null;
  }
}

const DEFAULT_CARS = [
  {
    name: 'Maruti Swift Dzire',
    pricePerDay: '1,999',
    seats: 5,
    transmission: 'Manual',
    fuelType: 'Diesel',
    image: '/seadns.jpg',
  },
  {
    name: 'Hyundai Creta',
    pricePerDay: '2,999',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: '/suv.jpg',
  },
  {
    name: 'Toyota Innova Crysta',
    pricePerDay: '3,899',
    seats: 7,
    transmission: 'Manual',
    fuelType: 'Diesel',
    image: '/banner8.avif',
  },
  {
    name: 'Range Rover Evoque',
    pricePerDay: '11,999',
    seats: 5,
    transmission: 'Automatic',
    fuelType: 'Petrol',
    image: '/rangerover.webp',
  },
];

export default async function Page() {
  let landingPage = null;
  let cars = [];

  try {
    landingPage = await client.fetch(`*[_type == "landingPage"][0]`);
  } catch (e) {
    // Graceful fallback if Sanity is offline
  }

  try {
    const sanityCars = await client.fetch(`*[_type == "car"] | order(_createdAt desc)`);
    if (sanityCars && sanityCars.length > 0) {
      cars = sanityCars;
    }
  } catch (e) {
    // Graceful fallback
  }

  const banners = landingPage?.heroBanners || [];
  const displayCars = cars && cars.length > 0 ? cars : DEFAULT_CARS;

  return (
    <>
      {/* ========== HERO SLIDING BANNER ========== */}
      <HeroSlider
        customBanners={
          banners && banners.length > 0
            ? banners
                .map((b) => {
                  const img = urlFor(b.image);
                  return img
                    ? {
                        src: img.url(),
                        alt: b.heading || 'DriveIt Cars Hyderabad',
                      }
                    : null;
                })
                .filter(Boolean)
            : null
        }
      />

      {/* ========== Daily & Monthly Car Rental Offers (Interactive Explore Section) ========== */}
      <CarOffersSection />

      {/* ========== REDESIGNED ABOUT DRIVEIT SECTION ========== */}
      <section className="about-driveit-modern section_70" id="about" style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-modern-content">
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
                    marginBottom: '14px',
                  }}
                >
                  <i className="fa fa-car" style={{ marginRight: 6 }} /> Hyderabad's Premier Car Rental
                </span>
                <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#111827', lineHeight: '1.25', marginBottom: '18px' }}>
                  Experience True Freedom of the Open Road with <span style={{ color: '#ffb907' }}>DriveIt</span>
                </h2>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
                  DriveIt is Hyderabad’s trusted self-drive car rental and luxury travel platform. Whether you need an affordable hatchback for daily commutes, a luxury sedan for VIP transfers, a spacious 7-seater SUV for a family weekend getaway, or luxury buses for weddings, we make booking fast, transparent, and seamless.
                </p>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  Enjoy unlimited freedom with no driver interference. Choose flexible daily, weekly, or monthly subscription plans with hassle-free doorstep delivery across 20+ localities including Hitech City, Gachibowli, Banjara Hills, Jubilee Hills, and Shamshabad Airport.
                </p>

                {/* 4 Feature Highlights Grid */}
                <div className="row g-3" style={{ marginBottom: '28px' }}>
                  <div className="col-sm-6 mb-3">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: '#fff8e6',
                          color: '#ffb907',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          flexShrink: 0,
                        }}
                      >
                        <i className="fa fa-shield" />
                      </div>
                      <div>
                        <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px' }}>Fully Insured Fleet</h5>
                        <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>Sanitized &amp; safety-inspected</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: '#fff8e6',
                          color: '#ffb907',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          flexShrink: 0,
                        }}
                      >
                        <i className="fa fa-tag" />
                      </div>
                      <div>
                        <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px' }}>Transparent Pricing</h5>
                        <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>Zero hidden fees or surprises</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: '#fff8e6',
                          color: '#ffb907',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          flexShrink: 0,
                        }}
                      >
                        <i className="fa fa-map-marker" />
                      </div>
                      <div>
                        <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px' }}>Doorstep Delivery</h5>
                        <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>Prompt delivery anywhere in Hyd</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 mb-3">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '10px',
                          background: '#fff8e6',
                          color: '#ffb907',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          flexShrink: 0,
                        }}
                      >
                        <i className="fa fa-headphones" />
                      </div>
                      <div>
                        <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px' }}>24/7 Road Assistance</h5>
                        <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>Dedicated customer care team</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Actions */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link
                    href="/self-drive-car"
                    className="gauto-btn"
                    style={{
                      background: '#ffb907',
                      color: '#000',
                      fontWeight: 700,
                      padding: '12px 28px',
                      borderRadius: '30px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    Explore Fleet <i className="fa fa-arrow-right" />
                  </Link>
                  <a
                    href="tel:+916300041186"
                    style={{
                      color: '#111827',
                      fontWeight: 700,
                      fontSize: '15px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 18px',
                      borderRadius: '30px',
                      border: '1px solid #e5e7eb',
                    }}
                  >
                    <i className="fa fa-phone" style={{ color: '#ffb907' }} /> +91 6300041186
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="col-lg-6">
              <div
                className="about-modern-visual"
                style={{
                  position: 'relative',
                  padding: '10px',
                  borderRadius: '24px',
                  background: 'linear-gradient(145deg, #f8f9fa, #ffffff)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #f0f0f0',
                }}
              >
                <img
                  src="/image2.avif"
                  alt="Self drive car rental in Hyderabad"
                  className="img-fluid"
                  style={{
                    borderRadius: '18px',
                    width: '100%',
                    height: 'auto',
                    maxHeight: '440px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '24px',
                    left: '24px',
                    right: '24px',
                    background: 'rgba(17, 24, 39, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  <div>
                    <div style={{ color: '#ffb907', fontWeight: 800, fontSize: '18px' }}>10,000+ Trips</div>
                    <div style={{ fontSize: '12px', color: '#d1d5db' }}>Happy Travelers in Hyderabad</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#ffb907', fontWeight: 800, fontSize: '16px' }}>★ 4.9 / 5.0</div>
                    <div style={{ fontSize: '12px', color: '#d1d5db' }}>Verified Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== How To Book a Self-Drive Car Online ========== */}
      <section className="section_70" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="site-heading text-center">
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
              Easy 4-Step Process
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              How To Book a Self-Drive Car Online
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="step-box">
                <div className="step-num">1</div>
                <h4>Choose Your Car</h4>
                <p>Select from our wide range of hatchbacks, sedans, and SUVs.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="step-box">
                <div className="step-num">2</div>
                <h4>Enter Dates &amp; Details</h4>
                <p>Choose your rental duration and preferred doorstep delivery location.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="step-box">
                <div className="step-num">3</div>
                <h4>Quick Verification</h4>
                <p>Submit your Driving License and ID proof via instant WhatsApp.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="step-box">
                <div className="step-num">4</div>
                <h4>Drive &amp; Return</h4>
                <p>Enjoy your trip with unlimited freedom and return smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== THE DRIVEIT ADVANTAGE (SINGLE-LINE STRIP) ========== */}
      <section className="driveit-advantage-strip" style={{ background: '#0f172a', padding: '36px 0', borderTop: '3px solid #ffb907', borderBottom: '3px solid #ffb907' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 text-lg-start text-center mb-lg-0 mb-3">
              <span style={{ color: '#ffb907', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                Why Drive With Us
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, margin: 0 }}>
                The DRIVEIT Advantage
              </h3>
            </div>
            <div className="col-lg-9">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className="fa fa-key" style={{ color: '#ffb907', fontSize: '20px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, margin: '0 0 2px' }}>100% Privacy</h5>
                    <p style={{ color: '#94a3b8', fontSize: '11px', margin: 0 }}>No driver interference</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className="fa fa-shield" style={{ color: '#ffb907', fontSize: '20px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, margin: '0 0 2px' }}>Zero Deposit</h5>
                    <p style={{ color: '#94a3b8', fontSize: '11px', margin: 0 }}>Quick verification</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className="fa fa-tag" style={{ color: '#ffb907', fontSize: '20px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, margin: '0 0 2px' }}>Best Rates</h5>
                    <p style={{ color: '#94a3b8', fontSize: '11px', margin: 0 }}>No hidden charges</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <i className="fa fa-map-marker" style={{ color: '#ffb907', fontSize: '20px', flexShrink: 0 }} />
                  <div>
                    <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, margin: '0 0 2px' }}>Doorstep Drop</h5>
                    <p style={{ color: '#94a3b8', fontSize: '11px', margin: 0 }}>Across all Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Why Choose Us ========== */}
      <section className="section_70" style={{ background: '#fafafa' }}>
        <div className="container">
          <div className="site-heading text-center" style={{ width: '100%', maxWidth: '720px', margin: '0 auto 40px' }}>
            <h4
              style={{
                color: '#ffb907',
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '8px',
                clear: 'both',
              }}
            >
              Why Travelers Trust Us
            </h4>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 800,
                color: '#111827',
                display: 'block',
                width: '100%',
                margin: 0,
                lineHeight: 1.3,
              }}
            >
              Why Choose DriveIt Cars?
            </h2>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="icon-box">
                <div className="icon"><i className="fa fa-shield-alt" /></div>
                <h4>Trustworthy &amp; Reliable</h4>
                <p>Fully insured, well-maintained cars with transparent pricing and no hidden charges.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="icon-box">
                <div className="icon"><i className="fa fa-car" /></div>
                <h4>Wide Fleet Variety</h4>
                <p>From hatchbacks to luxury SUVs and buses, we have the perfect vehicle for every need.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="icon-box">
                <div className="icon"><i className="fa fa-clock" /></div>
                <h4>Flexible Rental Plans</h4>
                <p>Hourly, daily, weekly, and customized rentals – pay only for what you use.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="icon-box">
                <div className="icon"><i className="fa fa-rupee-sign" /></div>
                <h4>Competitive Rates</h4>
                <p>Affordable prices without compromising on quality, safety, or service.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="icon-box">
                <div className="icon"><i className="fa fa-headset" /></div>
                <h4>24/7 On-Road Support</h4>
                <p>Our team is always available to assist you with bookings, queries, and road assistance.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="icon-box">
                <div className="icon"><i className="fa fa-handshake" /></div>
                <h4>Hassle-free Booking</h4>
                <p>Easy online booking, quick verification, and doorstep delivery options available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ACCORDION COMPONENT (FIXED) ========== */}
      <FaqSection />

      {/* ========== PROMO & PARTNER CTA ========== */}
      <section className="gauto-promo-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="promo-box-left">
                <img loading="lazy" src="/assets/img/toyota-offer-2.png" alt="Hourly self drive car rental Hyderabad" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="promo-box-right">
                <h3>Share your Car and Earn</h3>
                <p style={{ color: '#bbb', marginBottom: '20px' }}>
                  Have an idle car? Partner with DriveIt and earn guaranteed monthly income with full vehicle insurance coverage.
                </p>
                <Link href="/partner" className="gauto-btn">
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== GOOGLE MAPS LOCATION ========== */}
      <section className="gauto-contact-area">
        <div className="container-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.231332524019!2d78.45280357383254!3d17.400682483488747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97844e874967%3A0xec0fefe2fefa1e15!2sDRIVEIT%20Self%20drive%20Cars%20%7C%20Car%20Rentals%20in%20Hyderabad%20%7C%20Rent%20a%20Car%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1695815700234!5m2!1sen!2sin"
            width="100%"
            height={280}
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DriveIt Cars Office Location"
          />
        </div>
      </section>
    </>
  );
}