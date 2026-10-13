'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Footer() {
  const pathname = usePathname();
  const settings = useSiteSettings();

  // Do not render website footer or floating buttons inside Sanity Studio
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <>
      <footer className="gauto-footer-area">
        <div className="footer-top-area" style={{ padding: '60px 0 40px' }}>
          <div className="container">
            <div className="row">
              {/* Section 1: Brand & Trust */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="single-footer">
                  <div className="footer-logo" style={{ marginBottom: 22 }}>
                    <Link href="/">
                      <img
                        loading="lazy"
                        src={settings.footerLogoUrl || settings.logoUrl || '/logo2.png'}
                        alt="DriveIt Self Drive Cars Hyderabad"
                        style={{ height: '60px', maxHeight: '66px', width: 'auto', maxWidth: '230px', objectFit: 'contain', display: 'block' }}
                      />
                    </Link>
                  </div>
                  <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
                    {settings.footerAbout}
                  </p>
                  <div className="footer-trust-tags" style={{ marginBottom: '18px' }}>
                    {(settings.footerTrustTags || ['100% Insured', '24/7 Road Support', 'Sanitized Cars']).map((tag, idx) => (
                      <span key={idx} style={{ display: 'inline-block', fontSize: '12px', background: 'rgba(255,185,7,0.12)', color: '#ffb907', padding: '3px 8px', borderRadius: '4px', marginRight: '6px', marginBottom: '6px' }}>
                        ✓ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Section 2: Fleet & Services */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="single-footer">
                  <h3 style={{ fontSize: '17px', color: '#fff', borderBottom: '2px solid #ffb907', paddingBottom: '10px', marginBottom: '18px', display: 'inline-block' }}>
                    Self Drive &amp; Airport
                  </h3>
                  <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><Link href="/self-drive-car" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Self Drive Cars Hyderabad</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/hyderabad-airport-car-rental" style={{ color: '#ffb907', fontWeight: 600, fontSize: '14px', transition: '0.2s' }}>Hyderabad Airport Car Rental</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/hyderabad-airport-car-rental#self-drive" style={{ color: '#ffb907', fontWeight: 600, fontSize: '14px', transition: '0.2s' }}>HYD Airport Self Drive</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/cabs" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Airport Pickup &amp; Drop Hyderabad</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/self-drive-suv-hyderabad" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Self Drive SUV Hyderabad</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/luxurycars" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Airport Luxury Car Rental</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/weekend-self-drive-cars-hyderabad" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Weekend Self Drive Cars</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/weekly-self-drive-cars-hyderabad" style={{ color: '#ffb907', fontWeight: 600, fontSize: '14px', transition: '0.2s' }}>Weekly Self Drive Cars Hyderabad</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/monthly-self-drive-cars-hyderabad" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Monthly Self Drive Cars</Link></li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Popular Service Areas (SEO Hub) */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="single-footer">
                  <h3 style={{ fontSize: '17px', color: '#fff', borderBottom: '2px solid #ffb907', paddingBottom: '10px', marginBottom: '18px', display: 'inline-block' }}>
                    Top IT Hubs &amp; Areas
                  </h3>
                  <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><Link href="/hitech-city" style={{ color: '#ffb907', fontWeight: 600, fontSize: '14px', transition: '0.2s' }}>Self Drive Cars HITEC City</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/gachibowli" style={{ color: '#ffb907', fontWeight: 600, fontSize: '14px', transition: '0.2s' }}>Self Drive Cars Gachibowli</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/madhapur" style={{ color: '#ffb907', fontWeight: 600, fontSize: '14px', transition: '0.2s' }}>Self Drive Cars Madhapur</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/kondapur" style={{ color: '#ffb907', fontWeight: 600, fontSize: '14px', transition: '0.2s' }}>Self Drive Cars Kondapur</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/banjara-hills" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Banjara Hills Luxury Cars</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/jubilee-hills" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Jubilee Hills Car Hire</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/secunderabad" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Secunderabad Car Rentals</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/kukatpally" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Kukatpally Car Rental</Link></li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Contact & Head Office */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="single-footer">
                  <h3 style={{ fontSize: '17px', color: '#fff', borderBottom: '2px solid #ffb907', paddingBottom: '10px', marginBottom: '18px', display: 'inline-block' }}>
                    Head Office
                  </h3>
                  <div className="footer-address">
                    <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6', marginBottom: 14 }}>
                      <i className="fa fa-map-marker" style={{ color: '#ffb907', marginRight: 8 }} />
                      {settings.address}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', color: '#bbb', fontSize: '14px' }}>
                      <li style={{ marginBottom: 8 }}>
                        <i className="fa fa-phone" style={{ color: '#ffb907', marginRight: 8 }} />
                        <a href={`tel:${(settings.phoneNumber || '+916300041186').replace(/\s+/g, '')}`} style={{ color: '#ffb907', fontWeight: 600 }}>
                          {settings.phoneNumber}
                        </a>
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        <i className="fa fa-envelope" style={{ color: '#ffb907', marginRight: 8 }} />
                        <a href={`mailto:${settings.email || 'driveitcars@gmail.com'}`} style={{ color: '#bbb' }}>
                          {settings.email}
                        </a>
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        <i className="fa fa-clock-o" style={{ color: '#ffb907', marginRight: 8 }} />
                        <span>{settings.workingHours}</span>
                      </li>
                    </ul>
                    <div className="footer-policy-links" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '13px' }}>
                      <Link href="/terms-conditions" style={{ color: '#888' }}>Terms &amp; Conditions</Link>
                      <span style={{ color: '#555' }}>|</span>
                      <Link href="/privacy" style={{ color: '#888' }}>Privacy Policy</Link>
                      <span style={{ color: '#555' }}>|</span>
                      <Link href="/partner" style={{ color: '#ffb907' }}>Partner With Us</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury & VIP Car Rentals SEO Strip */}
            <div className="row mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="col-12">
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#ffb907', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    ✦ Luxury &amp; VIP Car Rentals Hyderabad:
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', fontSize: '13px', alignItems: 'center' }}>
                  <Link href="/mercedes-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Mercedes Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/bmw-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>BMW Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/audi-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Audi Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/range-rover-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Range Rover Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/luxury-chauffeur-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Luxury Chauffeur Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/vip-car-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>VIP Car Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/vip-car-rental-hyderabad" style={{ color: '#bbb' }}>Executive Car Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/vip-car-rental-hyderabad" style={{ color: '#bbb' }}>CEO Car Rental Hyderabad</Link>
                </div>
              </div>
            </div>

            {/* Wedding Car Rentals SEO Strip */}
            <div className="row mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="col-12">
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#ffb907', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    ✦ Wedding Car Rentals Hyderabad:
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', fontSize: '13px', alignItems: 'center' }}>
                  <Link href="/wedding-car-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Wedding Car Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/wedding-car-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Luxury Wedding Cars Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/bridal-entry-car-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Bridal Entry Car Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/groom-entry-luxury-car-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Groom Entry Luxury Car Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/rolls-royce-wedding-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Rolls Royce Wedding Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/mercedes-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Mercedes Wedding Car Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/vintage-wedding-car-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Vintage Wedding Car Hyderabad</Link>
                </div>
              </div>
            </div>

            {/* Corporate & Executive Car Rentals SEO Strip */}
            <div className="row mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="col-12">
                <div style={{ marginBottom: '10px' }}>
                  <span style={{ color: '#ffb907', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                    ✦ Corporate &amp; Business Car Rentals Hyderabad:
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', fontSize: '13px', alignItems: 'center' }}>
                  <Link href="/corporate-car-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Corporate Car Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/luxury-chauffeur-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Executive Chauffeur Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/monthly-corporate-car-rental-hyderabad" style={{ color: '#ffb907', fontWeight: 600 }}>Monthly Corporate Car Rental Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/monthly-corporate-car-rental-hyderabad" style={{ color: '#bbb' }}>Corporate Fleet Lease Hyderabad</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/vip-car-rental-hyderabad" style={{ color: '#bbb' }}>CXO &amp; Director Car Rental</Link>
                  <span style={{ color: '#444' }}>•</span>
                  <Link href="/hyderabad-airport-car-rental" style={{ color: '#bbb' }}>Corporate Airport Transfers RGIA</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-area" style={{ borderTop: '1px solid #222', padding: '20px 0', background: '#0a0a0a' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center mb-md-0 mb-2">
                <div className="copyright" style={{ color: '#888', fontSize: '13px' }}>
                  {settings.copyrightText}
                </div>
              </div>
              <div className="col-md-6 text-md-end text-center">
                <div style={{ color: '#666', fontSize: '12px' }}>
                  Hyderabad Self Drive Cars | Corporate Car Rental | Luxury Wedding Car Hire | Outstation Coaches
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <a
        href={`https://api.whatsapp.com/send?phone=${(settings.whatsappNumber || '+916300041186').replace(/[^0-9]/g, '')}&text=${encodeURIComponent(
          'Hi DRIVEIT Cars, I would like to enquire about renting a car in Hyderabad. Please share available models, tariffs, and booking process.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        id="whatsappFloatBtn"
        className="whatsapp-float-btn"
        aria-label="Chat with DRIVEIT Cars on WhatsApp"
      >
        {/* Official WhatsApp Logo SVG */}
        <svg
          viewBox="0 0 32 32"
          width="32"
          height="32"
          className="whatsapp-official-svg"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M16.002 0.002C7.168 0.002 0.002 7.168 0.002 16.002c0 2.825 0.74 5.578 2.146 7.998L0.002 32l8.225-2.158c2.342 1.278 4.982 1.954 7.775 1.954 8.834 0 16-7.166 16-16s-7.166-15.994-15.998-15.994zM25.334 22.616c-0.387 1.092-1.928 2.002-3.178 2.27-0.854 0.18-1.968 0.326-5.714-1.228-4.792-1.986-7.876-6.852-8.114-7.174-0.232-0.318-1.916-2.55-1.916-4.862 0-2.316 1.214-3.454 1.644-3.928 0.434-0.474 0.944-0.594 1.26-0.594 0.316 0 0.632 0.004 0.908 0.016 0.294 0.014 0.686-0.112 1.074 0.82 0.398 0.958 1.358 3.316 1.478 3.554 0.118 0.238 0.198 0.514 0.040 0.832-0.158 0.318-0.238 0.514-0.474 0.792-0.238 0.278-0.5 0.62-0.714 0.832-0.238 0.238-0.486 0.496-0.208 0.974 0.278 0.474 1.236 2.042 2.656 3.308 1.824 1.626 3.36 2.13 3.834 2.368 0.474 0.238 0.752 0.198 1.03-0.118 0.278-0.318 1.192-1.388 1.508-1.864 0.318-0.474 0.634-0.396 1.072-0.238 0.438 0.158 2.774 1.308 3.25 1.546 0.474 0.238 0.792 0.356 0.908 0.554 0.118 0.198 0.118 1.148-0.268 2.24z" />
        </svg>
        <span className="tooltip-float">Chat on WhatsApp</span>
      </a>
      <a
        href={`tel:${(settings.phoneNumber || '+916300041186').replace(/\s+/g, '')}`}
        className="phone-float-btn"
        aria-label="Call DRIVEIT Fleet Desk"
      >
        <i className="fa fa-phone" />
        <span className="tooltip-float">Call Us</span>
      </a>
    </>
  );
}
