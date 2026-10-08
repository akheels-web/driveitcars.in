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
                  Hyderabad Self Drive Cars | Luxury Wedding Car Rental | Outstation Coaches
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <a href="#" id="chatFloatBtn" className="chat-float-btn" aria-label="Online Chat"><i className="fa fa-comment" /><span className="tooltip-chat">Online Chat</span></a>
      <a href={`https://api.whatsapp.com/send?phone=${(settings.whatsappNumber || '+916300041186').replace(/[^0-9]/g, '')}&text=Hi%20DRIVEIT%20Cars%20I%20want%20to%20book%20`} target="_blank" className="whatsapp-float" aria-label="WhatsApp Us"><i className="fa fa-whatsapp" /></a>
      <a href={`tel:${(settings.phoneNumber || '+916300041186').replace(/\s+/g, '')}`} className="phone-float" aria-label="Call Us"><i className="fa fa-phone" /></a>
    </>
  );
}
