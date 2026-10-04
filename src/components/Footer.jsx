'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

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
                        src="/logo2.png"
                        alt="DriveIt Self Drive Cars Hyderabad"
                        style={{ height: '60px', maxHeight: '66px', width: 'auto', maxWidth: '230px', objectFit: 'contain', display: 'block' }}
                      />
                    </Link>
                  </div>
                  <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.7', marginBottom: '16px' }}>
                    DriveIt is Hyderabad’s leading car rental platform offering premium self-drive cars, luxury wedding cars, and group travel buses with transparent pricing and doorstep delivery.
                  </p>
                  <div className="footer-trust-tags" style={{ marginBottom: '18px' }}>
                    <span style={{ display: 'inline-block', fontSize: '12px', background: 'rgba(255,185,7,0.12)', color: '#ffb907', padding: '3px 8px', borderRadius: '4px', marginRight: '6px', marginBottom: '6px' }}>✓ 100% Insured</span>
                    <span style={{ display: 'inline-block', fontSize: '12px', background: 'rgba(255,185,7,0.12)', color: '#ffb907', padding: '3px 8px', borderRadius: '4px', marginRight: '6px', marginBottom: '6px' }}>✓ 24/7 Road Support</span>
                    <span style={{ display: 'inline-block', fontSize: '12px', background: 'rgba(255,185,7,0.12)', color: '#ffb907', padding: '3px 8px', borderRadius: '4px', marginBottom: '6px' }}>✓ Sanitized Cars</span>
                  </div>

                </div>
              </div>

              {/* Section 2: Fleet & Services */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="single-footer">
                  <h3 style={{ fontSize: '17px', color: '#fff', borderBottom: '2px solid #ffb907', paddingBottom: '10px', marginBottom: '18px', display: 'inline-block' }}>
                    Our Fleet &amp; Services
                  </h3>
                  <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><Link href="/self-drive-car" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Self Drive Cars in Hyderabad</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/luxurycars" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Luxury Car Rentals</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/luxury-buses" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Luxury Buses &amp; Mini Coaches</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/cabs" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Outstation Cabs &amp; Tours</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/hatchback" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Hatchback Rental (Swift, Baleno)</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/sedan" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Sedan Rentals (Dzire, Verna)</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/suv5" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>5-Seater SUVs (Creta, Seltos)</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/suv7" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>7-Seater SUVs (Innova Crysta)</Link></li>
                  </ul>
                </div>
              </div>

              {/* Section 3: Popular Service Areas (SEO Hub) */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="single-footer">
                  <h3 style={{ fontSize: '17px', color: '#fff', borderBottom: '2px solid #ffb907', paddingBottom: '10px', marginBottom: '18px', display: 'inline-block' }}>
                    Popular Locations
                  </h3>
                  <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: 10 }}><Link href="/hitech-city" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Car Rental in Hitech City</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/gachibowli" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Self Drive in Gachibowli</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/banjara-hills" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Banjara Hills Luxury Cars</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/jubilee-hills" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Jubilee Hills Car Hire</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/secunderabad" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Secunderabad Car Rentals</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/ameerpet" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Ameerpet &amp; SR Nagar Rentals</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/begumpet" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>Begumpet Car Hire</Link></li>
                    <li style={{ marginBottom: 10 }}><Link href="/lb-nagar" style={{ color: '#bbb', fontSize: '14px', transition: '0.2s' }}>LB Nagar &amp; East Hyderabad</Link></li>
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
                      10-2-289/83, Mehar Mansion, Rd Number 2, Shantinagar Colony, Masab Tank, Hyderabad, Telangana 500028.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', color: '#bbb', fontSize: '14px' }}>
                      <li style={{ marginBottom: 8 }}>
                        <i className="fa fa-phone" style={{ color: '#ffb907', marginRight: 8 }} />
                        <a href="tel:+916300041186" style={{ color: '#ffb907', fontWeight: 600 }}>+91 6300041186</a>
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        <i className="fa fa-envelope" style={{ color: '#ffb907', marginRight: 8 }} />
                        <a href="mailto:driveitcars@gmail.com" style={{ color: '#bbb' }}>driveitcars@gmail.com</a>
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        <i className="fa fa-clock-o" style={{ color: '#ffb907', marginRight: 8 }} />
                        <span>Mon - Sun: 7:00 AM – 10:00 PM</span>
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
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom-area" style={{ borderTop: '1px solid #222', padding: '20px 0', background: '#0a0a0a' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-md-start text-center mb-md-0 mb-2">
                <div className="copyright" style={{ color: '#888', fontSize: '13px' }}>
                  Copyright © 2026. <span style={{ color: '#ffb907' }}>DRIVEIT CARS</span>. All Rights Reserved.
                </div>
              </div>
              <div className="col-md-6 text-md-end text-center">
                <div style={{ color: '#666', fontSize: '12px' }}>
                  Hyderabad Self Drive Cars | Luxury Wedding Car Rental | Outstation Coaches
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a href="#" id="chatFloatBtn" className="chat-float-btn" aria-label="Online Chat"><i className="fa fa-comment" /><span className="tooltip-chat">Online Chat</span></a>
      <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%20I%20want%20to%20book%20" target="_blank" className="whatsapp-float" aria-label="WhatsApp Us"><i className="fa fa-whatsapp" /></a>
      <a href="tel:+916300041186" className="phone-float" aria-label="Call Us"><i className="fa fa-phone" /></a>
    </>
  );
}
