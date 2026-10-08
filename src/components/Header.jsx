'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSiteSettings } from '../context/SiteSettingsContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [areaAccordionOpen, setAreaAccordionOpen] = useState(false);
  const pathname = usePathname();
  const settings = useSiteSettings();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAreaAccordionOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Do not render website header inside Sanity Studio
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <>
      {/* ========== HEADER TOP ========== */}
      <section className="gauto-header-top-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12 text-lg-start text-center">
              <div className="header-top-left">
                <i className="fa fa-phone" style={{ color: '#ffb907', marginRight: 6 }} />
                <span>
                  Need Help? Call:{' '}
                  <a href={`tel:${(settings.phoneNumber || '+916300041186').replace(/\s+/g, '')}`} style={{ color: '#ffb907', fontWeight: 700 }}>
                    {settings.phoneNumber}
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-12 text-lg-end text-center mt-lg-0 mt-1 d-none d-sm-block">
              <div className="header-top-right">
                <i className="fa fa-envelope" style={{ color: '#ffb907', marginRight: 4 }} />
                <a href={`mailto:${settings.email || 'driveitcars@gmail.com'}`}>{settings.email}</a>
                <span className="mx-2" style={{ color: '#555' }}>|</span>
                <i className="fa fa-map-marker" style={{ color: '#ffb907', marginRight: 4 }} />
                <span>Masab Tank, Hyd</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAIN HEADER ========== */}
      <header className="gauto-main-header-area" style={{ padding: '10px 0' }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-lg-3 col-8">
              <div className="site-logo">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    loading="lazy"
                    src={settings.logoUrl || '/logo.png'}
                    alt="Driveit Cars - Self Drive Cars in Hyderabad"
                    className="main-header-logo"
                    style={{
                      height: '72px',
                      maxHeight: '76px',
                      width: 'auto',
                      maxWidth: '260px',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Promo (Mon-Sun & Address) */}
            <div className="col-lg-6 d-none d-lg-block">
              <div className="header-promo d-flex justify-content-center gap-4">
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img loading="lazy" src="/assets/img/clock.png" alt="Car rental Hyderabad" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Mon to Sun</h3>
                    <p>7:00am – 10:00pm</p>
                  </div>
                </div>
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img
                      loading="lazy"
                      src="/assets/img/map-marker.svg"
                      alt="Masab Tank, Hyderabad"
                      width="40"
                      height="40"
                      style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                    />
                  </div>
                  <div className="header-promo-info">
                    <h3>Address</h3>
                    <p>Masab Tank, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action (Desktop Call Button / Mobile Menu Toggle) */}
            <div className="col-lg-3 col-4 text-end">
              <div className="mobile-header-actions" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                {/* Desktop Call Button */}
                <div className="header-action d-none d-lg-block">
                  <a href="tel:+916300041186">
                    <i className="fa fa-phone" /> Request a call
                  </a>
                </div>

                {/* Mobile Hamburger Toggle Button Only */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="mobile-nav-toggle-btn d-lg-none"
                  aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
                  aria-expanded={mobileMenuOpen}
                >
                  <i className={mobileMenuOpen ? 'fa fa-times' : 'fa fa-bars'} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ========== DESKTOP NAVIGATION ========== */}
      <section className="gauto-mainmenu-area d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mainmenu">
                <nav>
                  <ul id="gauto_navigation">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/self-drive-car">Self Drive Cars</Link></li>
                    <li><Link href="/hyderabad-airport-car-rental">Airport Rental</Link></li>
                    <li><Link href="/wedding-car-rental-hyderabad">Wedding Cars</Link></li>
                    <li><Link href="/luxurycars">Luxury Cars</Link></li>
                    <li><Link href="/luxury-buses">Luxury Buses</Link></li>
                    <li><Link href="/cabs">Cabs</Link></li>
                    <li className="has-dropdown area-dropdown">
                      <Link href="/self-drive-car">
                        Area Service <i className="fa fa-angle-down" style={{ marginLeft: 4, fontSize: 11 }} />
                      </Link>
                      <div className="submenu area-submenu">
                        <div className="area-column">
                          <div className="area-col-heading">
                            <i className="fa fa-map-marker" style={{ marginRight: 6, color: '#ffb907' }} />
                            Section 1 (A – K)
                          </div>
                          <div className="area-links-box">
                            <Link href="/ameerpet">Ameerpet</Link>
                            <Link href="/banjara-hills">Banjara Hills</Link>
                            <Link href="/begumpet">Begumpet</Link>
                            <Link href="/bowenpally">Bowenpally</Link>
                            <Link href="/film-nagar">Film Nagar</Link>
                            <Link href="/gachibowli">Gachibowli</Link>
                            <Link href="/guttala-begumpet">Guttala Begumpet</Link>
                            <Link href="/habsiguda">Habsiguda</Link>
                            <Link href="/himmatnagar">Himmatnagar</Link>
                            <Link href="/hitech-city">Hitech City</Link>
                            <Link href="/jubilee-hills">Jubilee Hills</Link>
                            <Link href="/khairatabad">Khairatabad</Link>
                            <Link href="/kondapur">Kondapur</Link>
                            <Link href="/kukatpally">Kukatpally</Link>
                          </div>
                        </div>
                        <div className="area-column">
                          <div className="area-col-heading">
                            <i className="fa fa-map-marker" style={{ marginRight: 6, color: '#ffb907' }} />
                            Section 2 (L – Y)
                          </div>
                          <div className="area-links-box">
                            <Link href="/langer-house">Langer House</Link>
                            <Link href="/lb-nagar">LB Nagar</Link>
                            <Link href="/madhapur">Madhapur</Link>
                            <Link href="/masab-tank">Masab Tank</Link>
                            <Link href="/mehdipatnam">Mehdipatnam</Link>
                            <Link href="/nampally">Nampally</Link>
                            <Link href="/secunderabad">Secunderabad</Link>
                            <Link href="/Shaikpet">Shaikpet</Link>
                            <Link href="/sr-nagar">SR Nagar</Link>
                            <Link href="/sun-city">Sun City</Link>
                            <Link href="/tarnaka">Tarnaka</Link>
                            <Link href="/tolichowki">Tolichowki</Link>
                            <Link href="/vijay-nagar-colony">Vijay Nagar Colony</Link>
                            <Link href="/yousufguda">Yousufguda</Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><Link href="/blog">Blogs</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MOBILE SLIDE-OVER NAVIGATION DRAWER ========== */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(3px)',
            zIndex: 9998,
          }}
        />
      )}

      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '85%',
          maxWidth: '340px',
          height: '100vh',
          background: '#111827',
          color: '#ffffff',
          zIndex: 9999,
          boxShadow: '-6px 0 25px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '18px 20px',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0b1120',
          }}
        >
          <img
            src="/logo2.png"
            alt="DriveIt Cars"
            style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
          />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              color: '#ffffff',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '18px',
            }}
          >
            <i className="fa fa-times" />
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <nav style={{ padding: '16px 0', flexGrow: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="mobile-nav-item">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-home" /> Home
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/self-drive-car"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-car" /> Self Drive Cars
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/hyderabad-airport-car-rental"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-plane" /> Airport Car Rental
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/wedding-car-rental-hyderabad"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
                style={{ color: '#ffb907' }}
              >
                <i className="fa fa-heart" /> Wedding Cars
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/luxurycars"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-diamond" /> Luxury Cars
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/vip-car-rental-hyderabad"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
                style={{ color: '#ffb907' }}
              >
                <i className="fa fa-star" /> VIP &amp; CEO Car Rental
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/luxury-buses"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-bus" /> Luxury Buses
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/cabs"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-taxi" /> Cabs &amp; Outstation
              </Link>
            </li>

            {/* Expandable Area Service Dropdown */}
            <li className="mobile-nav-item">
              <button
                type="button"
                onClick={() => setAreaAccordionOpen(!areaAccordionOpen)}
                className="mobile-nav-link"
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-map-marker" style={{ width: '24px', color: '#ffb907' }} />
                  Area Service Locations
                </span>
                <i
                  className={`fa ${areaAccordionOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                  style={{ fontSize: '12px', color: '#ffb907' }}
                />
              </button>

              {areaAccordionOpen && (
                <div
                  style={{
                    background: '#1f2937',
                    padding: '12px 16px',
                    margin: '4px 14px 10px',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 185, 7, 0.2)',
                  }}
                >
                  {/* Section 1 */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffb907', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Section 1 (A – K)
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                      {[
                        { name: 'Ameerpet', href: '/ameerpet' },
                        { name: 'Banjara Hills', href: '/banjara-hills' },
                        { name: 'Begumpet', href: '/begumpet' },
                        { name: 'Bowenpally', href: '/bowenpally' },
                        { name: 'Film Nagar', href: '/film-nagar' },
                        { name: 'Gachibowli', href: '/gachibowli' },
                        { name: 'Guttala Begumpet', href: '/guttala-begumpet' },
                        { name: 'Habsiguda', href: '/habsiguda' },
                        { name: 'Himmatnagar', href: '/himmatnagar' },
                        { name: 'Hitech City', href: '/hitech-city' },
                        { name: 'Jubilee Hills', href: '/jubilee-hills' },
                        { name: 'Khairatabad', href: '/khairatabad' },
                        { name: 'Kondapur', href: '/kondapur' },
                        { name: 'Kukatpally', href: '/kukatpally' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            color: '#e5e7eb',
                            fontSize: '12px',
                            padding: '4px 6px',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            display: 'block',
                            background: 'rgba(255,255,255,0.04)',
                          }}
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#ffb907', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Section 2 (L – Y)
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                      {[
                        { name: 'Langer House', href: '/langer-house' },
                        { name: 'LB Nagar', href: '/lb-nagar' },
                        { name: 'Madhapur', href: '/madhapur' },
                        { name: 'Masab Tank', href: '/masab-tank' },
                        { name: 'Mehdipatnam', href: '/mehdipatnam' },
                        { name: 'Nampally', href: '/nampally' },
                        { name: 'Secunderabad', href: '/secunderabad' },
                        { name: 'Shaikpet', href: '/Shaikpet' },
                        { name: 'SR Nagar', href: '/sr-nagar' },
                        { name: 'Sun City', href: '/sun-city' },
                        { name: 'Tarnaka', href: '/tarnaka' },
                        { name: 'Tolichowki', href: '/tolichowki' },
                        { name: 'Vijay Nagar', href: '/vijay-nagar-colony' },
                        { name: 'Yousufguda', href: '/yousufguda' },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            color: '#e5e7eb',
                            fontSize: '12px',
                            padding: '4px 6px',
                            textDecoration: 'none',
                            borderRadius: '4px',
                            display: 'block',
                            background: 'rgba(255,255,255,0.04)',
                          }}
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li className="mobile-nav-item">
              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-newspaper-o" /> Blogs &amp; Guides
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                <i className="fa fa-envelope" /> Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Drawer Bottom Actions */}
        <div
          style={{
            padding: '16px 20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            background: '#0b1120',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <a
            href="tel:+916300041186"
            style={{
              background: '#ffb907',
              color: '#111827',
              fontWeight: 800,
              fontSize: '13px',
              padding: '11px',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <i className="fa fa-phone" /> Call +91 6300041186
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars,%20I%20am%20looking%20to%20rent%20a%20car."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#25D366',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '13px',
              padding: '11px',
              borderRadius: '8px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <i className="fa fa-whatsapp" /> WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
