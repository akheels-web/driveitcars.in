'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSiteSettings } from '../context/SiteSettingsContext';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  const settings = useSiteSettings();
  const isBlog = pathname === '/blog' || pathname?.startsWith('/blog/');

  // Do not render website footer or floating buttons inside Sanity Studio.
  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.columns}>
            <div className={styles.brand}>
              <Link href="/" className={styles.logoLink} aria-label="DriveItCars home">
                <img
                  loading="lazy"
                  src={settings.footerLogoUrl || settings.logoUrl || '/logo2.png'}
                  alt="DriveItCars Self Drive Cars Hyderabad"
                  className={styles.logo}
                />
              </Link>
              <p className={styles.about}>{settings.footerAbout}</p>
              <ul className={styles.trustTags} aria-label="Rental benefits">
                {(settings.footerTrustTags || ['100% Insured', '24/7 Road Support', 'Sanitized Cars']).map((tag, idx) => (
                  <li key={idx}><span aria-hidden="true">✓</span> {tag}</li>
                ))}
              </ul>
            </div>

            <nav aria-labelledby="footer-services-heading">
              <h2 id="footer-services-heading" className={styles.heading}>Self drive &amp; airport</h2>
              <ul className={styles.links}>
                  <li><Link href="/self-drive-car">Self Drive Cars Hyderabad</Link></li>
                  <li><Link href="/hyderabad-airport-car-rental">Hyderabad Airport Car Rental</Link></li>
                  <li><Link href="/hyderabad-airport-car-rental#self-drive">HYD Airport Self Drive</Link></li>
                  <li><Link href="/cabs">Airport Pickup &amp; Drop Hyderabad</Link></li>
                  <li><Link href="/self-drive-suv-hyderabad">Self Drive SUV Hyderabad</Link></li>
                  <li><Link href="/luxurycars">Airport Luxury Car Rental</Link></li>
                  <li><Link href="/weekend-self-drive-cars-hyderabad">Weekend Self Drive Cars</Link></li>
                  <li><Link href="/weekly-self-drive-cars-hyderabad">Weekly Self Drive Cars Hyderabad</Link></li>
                  <li><Link href="/monthly-self-drive-cars-hyderabad">Monthly Self Drive Cars</Link></li>
              </ul>
            </nav>

            <nav aria-labelledby="footer-areas-heading">
              <h2 id="footer-areas-heading" className={styles.heading}>Top IT hubs &amp; areas</h2>
              <ul className={styles.links}>
                  <li><Link href="/hitech-city">Self Drive Cars HITEC City</Link></li>
                  <li><Link href="/gachibowli">Self Drive Cars Gachibowli</Link></li>
                  <li><Link href="/madhapur">Self Drive Cars Madhapur</Link></li>
                  <li><Link href="/kondapur">Self Drive Cars Kondapur</Link></li>
                  <li><Link href="/banjara-hills">Banjara Hills Luxury Cars</Link></li>
                  <li><Link href="/jubilee-hills">Jubilee Hills Car Hire</Link></li>
                  <li><Link href="/secunderabad">Secunderabad Car Rentals</Link></li>
                  <li><Link href="/kukatpally">Kukatpally Car Rental</Link></li>
              </ul>
            </nav>

            <div className={styles.contact}>
              <h2 className={styles.heading}>Head office</h2>
              <address className={styles.address}>
                <p><i className="fa fa-map-marker" aria-hidden="true" /><span>{settings.address}</span></p>
                <p><i className="fa fa-phone" aria-hidden="true" /><a href={`tel:${(settings.phoneNumber || '+916300041186').replace(/\s+/g, '')}`}>{settings.phoneNumber}</a></p>
                <p><i className="fa fa-envelope" aria-hidden="true" /><a href={`mailto:${settings.email || 'driveitcars@gmail.com'}`}>{settings.email}</a></p>
                <p><i className="fa fa-clock-o" aria-hidden="true" /><span>{settings.workingHours}</span></p>
              </address>
            </div>
          </div>

          <div className={styles.specialistGroups}>
            <details className={styles.specialistGroup}>
              <summary>Luxury &amp; VIP car rentals in Hyderabad</summary>
              <ul className={styles.specialistLinks}>
                  <li><Link href="/mercedes-rental-hyderabad">Mercedes Rental Hyderabad</Link></li>
                  <li><Link href="/bmw-rental-hyderabad">BMW Rental Hyderabad</Link></li>
                  <li><Link href="/audi-rental-hyderabad">Audi Rental Hyderabad</Link></li>
                  <li><Link href="/range-rover-rental-hyderabad">Range Rover Rental Hyderabad</Link></li>
                  <li><Link href="/luxury-chauffeur-hyderabad">Luxury Chauffeur Hyderabad</Link></li>
                  <li><Link href="/vip-car-rental-hyderabad">VIP Car Rental Hyderabad</Link></li>
                  <li><Link href="/vip-car-rental-hyderabad">Executive Car Rental Hyderabad</Link></li>
                  <li><Link href="/vip-car-rental-hyderabad">CEO Car Rental Hyderabad</Link></li>
              </ul>
            </details>
            <details className={styles.specialistGroup}>
              <summary>Wedding car rentals in Hyderabad</summary>
              <ul className={styles.specialistLinks}>
                  <li><Link href="/wedding-car-rental-hyderabad">Wedding Car Rental Hyderabad</Link></li>
                  <li><Link href="/wedding-car-rental-hyderabad">Luxury Wedding Cars Hyderabad</Link></li>
                  <li><Link href="/bridal-entry-car-hyderabad">Bridal Entry Car Hyderabad</Link></li>
                  <li><Link href="/groom-entry-luxury-car-hyderabad">Groom Entry Luxury Car Hyderabad</Link></li>
                  <li><Link href="/rolls-royce-wedding-hyderabad">Rolls Royce Wedding Hyderabad</Link></li>
                  <li><Link href="/mercedes-rental-hyderabad">Mercedes Wedding Car Hyderabad</Link></li>
                  <li><Link href="/vintage-wedding-car-hyderabad">Vintage Wedding Car Hyderabad</Link></li>
              </ul>
            </details>
            <details className={styles.specialistGroup}>
              <summary>Corporate &amp; business car rentals in Hyderabad</summary>
              <ul className={styles.specialistLinks}>
                  <li><Link href="/corporate-car-rental-hyderabad">Corporate Car Rental Hyderabad</Link></li>
                  <li><Link href="/luxury-chauffeur-hyderabad">Executive Chauffeur Hyderabad</Link></li>
                  <li><Link href="/monthly-corporate-car-rental-hyderabad">Monthly Corporate Car Rental Hyderabad</Link></li>
                  <li><Link href="/monthly-corporate-car-rental-hyderabad">Corporate Fleet Lease Hyderabad</Link></li>
                  <li><Link href="/vip-car-rental-hyderabad">CXO &amp; Director Car Rental</Link></li>
                  <li><Link href="/hyderabad-airport-car-rental">Corporate Airport Transfers RGIA</Link></li>
              </ul>
            </details>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>{settings.copyrightText}</p>
            <nav aria-label="Legal and partnership">
              <ul className={styles.legalLinks}>
                  <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                  <li><Link href="/partner">Partner With Us</Link></li>
              </ul>
            </nav>
            <p className={styles.serviceNote}>Hyderabad Self Drive Cars | Corporate Car Rental | Luxury Wedding Car Hire | Outstation Coaches</p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      {!isBlog && <>
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
      </>}
    </>
  );
}
