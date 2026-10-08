import { client } from '../../src/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';

import HeroSlider from '../components/HeroSlider';
import CarOffersSection from '../components/CarOffersSection';
import FaqSection from '../components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildBreadcrumbSchema,
} from '../components/SeoSchema';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata = {
  title: 'Self Drive Cars Hyderabad | Daily, Weekly & Monthly Car Rentals | DRIVEIT',
  description:
    '#1 Self drive cars in Hyderabad. Daily, weekly & monthly car rentals for Swift, Baleno, Creta, Thar, Thar Roxx, Innova Crysta, XUV700 & Fortuner. Manual & Automatic, zero deposit, fast doorstep delivery. Enquire now for best rates.',
  alternates: {
    canonical: 'https://www.driveitcars.in',
  },
  openGraph: {
    title: 'Self Drive Cars in Hyderabad | Daily, Weekly & Monthly Car Rental | DRIVEIT',
    description:
      'Book self drive cars on daily, weekly, and monthly rentals in Hyderabad with DRIVEIT. Manual & automatic hatchbacks, mini SUVs, 5 & 7-seater SUVs, sedans. Zero deposit, 24/7 delivery.',
    url: 'https://www.driveitcars.in',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/suv.jpg',
        width: 1200,
        height: 630,
        alt: 'Daily Weekly Monthly Self Drive Cars Hyderabad DRIVEIT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Drive Cars Hyderabad | Daily, Weekly & Monthly Rentals',
    description: 'Premier self drive car rental in Hyderabad with daily, weekly & monthly packages across HITEC City, Gachibowli & Airport.',
  },
};

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
  const formattedCars = (cars && cars.length > 0)
    ? cars.map((c) => {
        let imgUrl = null;
        if (c.image) {
          try {
            imgUrl = urlFor(c.image)?.url();
          } catch (err) {}
        }
        return {
          ...c,
          imageUrl: imgUrl || '/assets/img/cars/Swift.png',
        };
      })
    : [];

  return (
    <>
      <SeoSchema
        schema={buildCarRentalSchema({
          name: 'DRIVEIT Self Drive Cars & Luxury Car Rentals Hyderabad',
          description:
            'Book daily, weekly, and monthly self drive cars in Hyderabad with DRIVEIT. Manual & automatic hatchbacks, mini SUVs, 5 & 7-seater SUVs, and sedans with zero deposit options, unlimited kms, 24/7 delivery.',
          url: 'https://www.driveitcars.in',
          areaServed: [
            'Hyderabad',
            'HITEC City',
            'Gachibowli',
            'Madhapur',
            'Kondapur',
            'Banjara Hills',
            'Jubilee Hills',
            'Secunderabad',
            'Kukatpally',
            'Telangana',
          ],
        })}
      />
      <SeoSchema
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'DRIVEIT Cars Hyderabad',
          url: 'https://www.driveitcars.in',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.driveitcars.in/self-drive-car?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <SeoSchema schema={buildBreadcrumbSchema([{ name: 'Home', url: '/' }])} />
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
                        link: b.buttonLink || '/self-drive-car',
                      }
                    : null;
                })
                .filter(Boolean)
            : null
        }
      />

      {/* ========== Daily & Monthly Car Rental Offers (Interactive Explore Section) ========== */}
      <CarOffersSection initialCars={formattedCars} />

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
                  <i className="fa fa-car" style={{ marginRight: 6 }} /> {landingPage?.aboutBadge || "Hyderabad's Premier Car Rental"}
                </span>
                <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#111827', lineHeight: '1.25', marginBottom: '18px' }}>
                  {landingPage?.aboutHeading ? (
                    landingPage.aboutHeading
                  ) : (
                    <>Experience True Freedom of the Open Road with <span style={{ color: '#ffb907' }}>DriveIt</span></>
                  )}
                </h2>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
                  {landingPage?.aboutDescription1 || "DriveIt is Hyderabad’s trusted self-drive car rental and luxury travel platform. Whether you need an affordable hatchback for daily commutes, a luxury sedan for VIP transfers, a spacious 7-seater SUV for a family weekend getaway, or luxury buses for weddings, we make booking fast, transparent, and seamless."}
                </p>
                <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  {landingPage?.aboutDescription2 || "Enjoy unlimited freedom with no driver interference. Choose flexible daily, weekly, or monthly subscription plans with hassle-free doorstep delivery across 20+ localities including Hitech City, Gachibowli, Banjara Hills, Jubilee Hills, and Shamshabad Airport."}
                </p>

                {/* 4 Feature Highlights Grid */}
                <div className="row g-3" style={{ marginBottom: '28px' }}>
                  {(landingPage?.aboutFeatures && landingPage.aboutFeatures.length > 0 ? landingPage.aboutFeatures : [
                    { icon: 'fa-shield', title: 'Fully Insured Fleet', description: 'Sanitized & safety-inspected' },
                    { icon: 'fa-tag', title: 'Transparent Pricing', description: 'Zero hidden fees or surprises' },
                    { icon: 'fa-map-marker', title: 'Doorstep Delivery', description: 'Prompt delivery anywhere in Hyd' },
                    { icon: 'fa-headphones', title: '24/7 Road Assistance', description: 'Dedicated customer care team' },
                  ]).map((feat, idx) => (
                    <div className="col-sm-6 mb-3" key={idx}>
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
                          <i className={`fa ${feat.icon || 'fa-check'}`} />
                        </div>
                        <div>
                          <h5 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 2px' }}>{feat.title}</h5>
                          <p style={{ fontSize: '13px', color: '#6b7280', margin: 0 }}>{feat.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to Actions */}
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link
                    href={landingPage?.aboutCtaLink || "/self-drive-car"}
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
                    {landingPage?.aboutCtaText || "Explore Fleet"} <i className="fa fa-arrow-right" />
                  </Link>
                  <a
                    href={`tel:${(landingPage?.aboutPhone || '+916300041186').replace(/\s+/g, '')}`}
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
                    <i className="fa fa-phone" style={{ color: '#ffb907' }} /> {landingPage?.aboutPhone || "+91 6300041186"}
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
                  src={landingPage?.aboutImage ? urlFor(landingPage.aboutImage)?.url() : '/image2.avif'}
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
                    <div style={{ color: '#ffb907', fontWeight: 800, fontSize: '18px' }}>
                      {landingPage?.aboutStat1Number || '10,000+ Trips'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#d1d5db' }}>
                      {landingPage?.aboutStat1Label || 'Happy Travelers in Hyderabad'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: '#ffb907', fontWeight: 800, fontSize: '16px' }}>
                      {landingPage?.aboutStat2Number || '★ 4.9 / 5.0'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#d1d5db' }}>
                      {landingPage?.aboutStat2Label || 'Verified Customer Rating'}
                    </div>
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
              {landingPage?.bookingBadge || "Easy 4-Step Process"}
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              {landingPage?.bookingHeading || "How To Book a Self-Drive Car Online"}
            </h2>
          </div>
          <div className="row">
            {(landingPage?.bookingSteps && landingPage.bookingSteps.length > 0 ? landingPage.bookingSteps : [
              { stepNumber: '1', title: 'Choose Your Car', description: 'Select from our wide range of hatchbacks, sedans, and SUVs.' },
              { stepNumber: '2', title: 'Enter Dates & Details', description: 'Choose your rental duration and preferred doorstep delivery location.' },
              { stepNumber: '3', title: 'Quick Verification', description: 'Submit your Driving License and ID proof via instant WhatsApp.' },
              { stepNumber: '4', title: 'Drive & Return', description: 'Enjoy your trip with unlimited freedom and return smoothly.' },
            ]).map((step, idx) => (
              <div className="col-md-3" key={idx}>
                <div className="step-box">
                  <div className="step-num">{step.stepNumber || idx + 1}</div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== THE DRIVEIT ADVANTAGE (SINGLE-LINE STRIP) ========== */}
      <section className="driveit-advantage-strip" style={{ background: '#0f172a', padding: '36px 0', borderTop: '3px solid #ffb907', borderBottom: '3px solid #ffb907' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 text-lg-start text-center mb-lg-0 mb-3">
              <span style={{ color: '#ffb907', fontSize: '11px', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                {landingPage?.advantageSubtitle || "Why Drive With Us"}
              </span>
              <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, margin: 0 }}>
                {landingPage?.advantageTitle || "The DRIVEIT Advantage"}
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
                {(landingPage?.advantageItems && landingPage.advantageItems.length > 0 ? landingPage.advantageItems : [
                  { icon: 'fa-key', title: '100% Privacy', subtitle: 'No driver interference' },
                  { icon: 'fa-shield', title: 'Zero Deposit', subtitle: 'Quick verification' },
                  { icon: 'fa-tag', title: 'Best Rates', subtitle: 'No hidden charges' },
                  { icon: 'fa-map-marker', title: 'Doorstep Drop', subtitle: 'Across all Hyderabad' },
                ]).map((adv, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.06)', padding: '12px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <i className={`fa ${adv.icon || 'fa-check'}`} style={{ color: '#ffb907', fontSize: '20px', flexShrink: 0 }} />
                    <div>
                      <h5 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, margin: '0 0 2px' }}>{adv.title}</h5>
                      <p style={{ color: '#94a3b8', fontSize: '11px', margin: 0 }}>{adv.subtitle}</p>
                    </div>
                  </div>
                ))}
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
              {landingPage?.whyChooseSubtitle || "Why Travelers Trust Us"}
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
              {landingPage?.whyChooseHeading || "Why Choose DriveIt Cars?"}
            </h2>
          </div>
          <div className="row">
            {(landingPage?.whyChooseCards && landingPage.whyChooseCards.length > 0 ? landingPage.whyChooseCards : [
              { icon: 'fa-shield-alt', title: 'Trustworthy & Reliable', description: 'Fully insured, well-maintained cars with transparent pricing and no hidden charges.' },
              { icon: 'fa-car', title: 'Wide Fleet Variety', description: 'From hatchbacks to luxury SUVs and buses, we have the perfect vehicle for every need.' },
              { icon: 'fa-clock', title: 'Flexible Rental Plans', description: 'Hourly, daily, weekly, and customized rentals – pay only for what you use.' },
              { icon: 'fa-rupee-sign', title: 'Competitive Rates', description: 'Affordable prices without compromising on quality, safety, or service.' },
              { icon: 'fa-headset', title: '24/7 On-Road Support', description: 'Our team is always available to assist you with bookings, queries, and road assistance.' },
              { icon: 'fa-handshake', title: 'Hassle-free Booking', description: 'Easy online booking, quick verification, and doorstep delivery options available.' },
            ]).map((card, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="icon-box">
                  <div className="icon"><i className={`fa ${card.icon || 'fa-check'}`} /></div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
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
                <img
                  loading="lazy"
                  src={landingPage?.partnerImage ? urlFor(landingPage.partnerImage)?.url() : '/assets/img/toyota-offer-2.png'}
                  alt="Hourly self drive car rental Hyderabad"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="promo-box-right">
                <h3>{landingPage?.partnerHeading || "Share your Car and Earn"}</h3>
                <p style={{ color: '#bbb', marginBottom: '20px' }}>
                  {landingPage?.partnerDescription || "Have an idle car? Partner with DriveIt and earn guaranteed monthly income with full vehicle insurance coverage."}
                </p>
                <Link href={landingPage?.partnerButtonLink || "/partner"} className="gauto-btn">
                  {landingPage?.partnerButtonText || "Partner With Us"}
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
            src={landingPage?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.231332524019!2d78.45280357383254!3d17.400682483488747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97844e874967%3A0xec0fefe2fefa1e15!2sDRIVEIT%20Self%20drive%20Cars%20%7C%20Car%20Rentals%20in%20Hyderabad%20%7C%20Rent%20a%20Car%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1695815700234!5m2!1sen!2sin"}
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