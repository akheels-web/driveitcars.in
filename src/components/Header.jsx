'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSiteSettings } from '../context/SiteSettingsContext';
import styles from './Header.module.css';

const services = [
  { name: 'Airport rental', detail: 'Arrivals, departures & transfers', href: '/hyderabad-airport-car-rental' },
  { name: 'Wedding cars', detail: 'A memorable arrival', href: '/wedding-car-rental-hyderabad' },
  { name: 'Luxury cars', detail: 'Premium cars for your plans', href: '/luxurycars' },
  { name: 'Corporate rentals', detail: 'Business travel & fleet enquiries', href: '/corporate-car-rental-hyderabad' },
  { name: 'Luxury buses', detail: 'Travel together, comfortably', href: '/luxury-buses' },
  { name: 'Cabs & outstation', detail: 'City journeys & trips beyond', href: '/cabs' },
  { name: 'VIP car hire', detail: 'Executive & occasion travel', href: '/vip-car-rental-hyderabad' },
  { name: 'Monthly rentals', detail: 'A car for your longer stay', href: '/monthly-self-drive-cars-hyderabad' },
];
const locationGroups = [
  { name: 'A – K', places: [
    ['Ameerpet', '/ameerpet'], ['Banjara Hills', '/banjara-hills'], ['Begumpet', '/begumpet'],
    ['Bowenpally', '/bowenpally'], ['Film Nagar', '/film-nagar'], ['Gachibowli', '/gachibowli'],
    ['Guttala Begumpet', '/guttala-begumpet'], ['Habsiguda', '/habsiguda'], ['Himmatnagar', '/himmatnagar'],
    ['HITEC City', '/hitech-city'], ['Jubilee Hills', '/jubilee-hills'], ['Khairatabad', '/khairatabad'],
    ['Kondapur', '/kondapur'], ['Kukatpally', '/kukatpally'],
  ] },
  { name: 'L – Y', places: [
    ['Langer House', '/langer-house'], ['LB Nagar', '/lb-nagar'], ['Madhapur', '/madhapur'],
    ['Masab Tank', '/masab-tank'], ['Mehdipatnam', '/mehdipatnam'], ['Nampally', '/nampally'],
    ['Secunderabad', '/secunderabad'], ['Shaikpet', '/sheikpet'], ['SR Nagar', '/sr-nagar'],
    ['Sun City', '/sun-city'], ['Tarnaka', '/tarnaka'], ['Tolichowki', '/tolichowki'],
    ['Vijay Nagar Colony', '/vijay-nagar-colony'], ['Yousufguda', '/yousufguda'],
  ] },
];

function Icon({ name }) {
  const paths = {
    phone: 'M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z',
    menu: 'M4 8h16M4 16h16', close: 'm6 6 12 12M6 18 18 6',
    chevron: 'm7 10 5 5 5-5', arrow: 'M6 18 18 6M6 6h12v12',
  };
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d={paths[name]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
function Logo({ settings, light = false, onNavigate }) {
  const fallback = light ? '/logo2.png' : '/logo.png';
  return (
    <Link href="/" className={styles.brand} onClick={onNavigate} aria-label="DriveItCars home">
      <img src={(light ? settings.footerLogoUrl : settings.logoUrl) || fallback} alt="DriveItCars" width={176} height={50}
        onError={(event) => { if (event.currentTarget.getAttribute('src') !== fallback) event.currentTarget.src = fallback; }} />
      <span>Hyderabad car rentals</span>
    </Link>
  );
}
export default function Header() {
  const pathname = usePathname();
  const settings = useSiteSettings();
  if (pathname?.startsWith('/studio')) return null;
  // Route changes reset disclosure state, including browser Back and Forward.
  return <HeaderContent key={pathname} pathname={pathname || '/'} settings={settings} />;
}
function HeaderContent({ pathname, settings }) {
  const [dropdown, setDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef(null);
  const dialogRef = useRef(null);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);
  const serviceRef = useRef(null);
  const locationRef = useRef(null);
  const previousOverflow = useRef(null);
  const phone = (settings.phoneNumber || '+916300041186').replace(/[^+0-9]/g, '');
  const whatsapp = (settings.whatsappNumber || '+916300041186').replace(/\D/g, '');
  const whatsappHref = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent('Hi DriveItCars, I would like help choosing a rental car. Please share availability and rental details.')}`;
  const current = (href) => pathname === href ? 'page' : href !== '/' && pathname.startsWith(`${href}/`) ? 'true' : undefined;
  const serviceActive = services.some((service) => current(service.href));
  const locationActive = locationGroups.some((group) => group.places.some(([, href]) => current(href)));
  const restorePage = useCallback(() => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }, []);
  const closeMobile = useCallback(() => { if (dialogRef.current?.open) dialogRef.current.close(); }, []);
  const finishMobileClose = () => { setMobileOpen(false); restorePage(); toggleRef.current?.focus(); };
  const closeNavigation = () => { setDropdown(null); closeMobile(); };
  const openMobile = () => {
    setDropdown(null);
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current.showModal();
    document.body.style.overflow = 'hidden';
    setMobileOpen(true);
    closeRef.current?.focus();
  };
  const containDialogFocus = (event) => {
    if (event.key !== 'Tab') return;
    const targets = [...event.currentTarget.querySelectorAll('a[href], button:not([disabled]), summary, [tabindex]')]
      .filter((element) => element.tabIndex >= 0 && element.getClientRects().length > 0);
    const first = targets[0];
    const last = targets[targets.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };
  useEffect(() => restorePage, [restorePage]);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 1100px)');
    const onChange = (event) => { if (event.matches) closeMobile(); };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [closeMobile]);
  useEffect(() => {
    if (!dropdown) return;
    const onPointer = (event) => { if (!rootRef.current?.contains(event.target)) setDropdown(null); };
    const onKey = (event) => {
      if (event.key !== 'Escape') return;
      setDropdown(null);
      (dropdown === 'services' ? serviceRef : locationRef).current?.focus();
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('focusin', onPointer);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('pointerdown', onPointer); document.removeEventListener('focusin', onPointer); document.removeEventListener('keydown', onKey); };
  }, [dropdown]);
  const renderLocations = () => locationGroups.map((group) => (
    <div className={styles.locationGroup} key={group.name}>
      <p>{group.name}</p>
      {group.places.map(([name, href]) => <Link key={href} href={href} aria-current={current(href)} onClick={closeNavigation}>{name}</Link>)}
    </div>
  ));
  return (
    <header className={styles.header} ref={rootRef}>
      <div className={styles.bar}>
        <Logo settings={settings} onNavigate={closeNavigation} />
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <Link className={styles.navLink} href="/" aria-current={current('/')} onClick={closeNavigation}>Home</Link>
          <Link className={styles.navLink} href="/self-drive-car" aria-current={current('/self-drive-car')} onClick={closeNavigation}>Self-drive cars</Link>
          <div className={styles.disclosure}>
            <button className={styles.navLink} ref={serviceRef} type="button" aria-expanded={dropdown === 'services'} aria-controls="header-services" data-active={serviceActive || undefined} onClick={() => setDropdown(dropdown === 'services' ? null : 'services')}>Services <Icon name="chevron" /></button>
            {dropdown === 'services' && (
              <div className={`${styles.panel} ${styles.servicesPanel}`} id="header-services">
                <div className={styles.panelHeading}><span>A car for every occasion</span><span>Explore our services</span></div>
                <div className={styles.servicesGrid}>
                  {services.map((service) => <Link key={service.href} href={service.href} aria-current={current(service.href)} onClick={closeNavigation}><span><strong>{service.name}</strong><small>{service.detail}</small></span><Icon name="arrow" /></Link>)}
                </div>
              </div>
            )}
          </div>
          <div className={styles.disclosure}>
            <button className={styles.navLink} ref={locationRef} type="button" aria-expanded={dropdown === 'locations'} aria-controls="header-locations" data-active={locationActive || undefined} onClick={() => setDropdown(dropdown === 'locations' ? null : 'locations')}>Locations <Icon name="chevron" /></button>
            {dropdown === 'locations' && (
              <div className={`${styles.panel} ${styles.locationsPanel}`} id="header-locations">
                <div className={styles.panelHeading}><span>Find us around Hyderabad</span><span>Choose your area</span></div>
                <div className={styles.locationsGrid}>{renderLocations()}</div>
              </div>
            )}
          </div>
          <Link className={styles.navLink} href="/blog" aria-current={current('/blog')} onClick={closeNavigation}>Guides</Link>
          <Link className={styles.navLink} href="/contact" aria-current={current('/contact')} onClick={closeNavigation}>Contact</Link>
        </nav>
        <div className={styles.actions}>
          <a className={styles.callButton} href={`tel:${phone}`}><Icon name="phone" /><span>Call to book</span><Icon name="arrow" /></a>
          <a className={styles.mobileCall} href={`tel:${phone}`} aria-label="Call DriveItCars"><Icon name="phone" /></a>
          <button ref={toggleRef} className={styles.menuToggle} type="button" aria-label="Open navigation" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={openMobile}><Icon name="menu" /></button>
        </div>
      </div>
      <dialog className={styles.drawer} id="mobile-navigation" ref={dialogRef} aria-labelledby="mobile-navigation-title" onClose={finishMobileClose}
        onKeyDown={containDialogFocus}
        onCancel={(event) => { event.preventDefault(); closeMobile(); }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeMobile();
        }}>
        <div className={styles.drawerHeading}>
          <Logo settings={settings} light onNavigate={closeNavigation} />
          <button ref={closeRef} type="button" className={styles.closeButton} onClick={closeMobile} aria-label="Close navigation"><Icon name="close" /></button>
        </div>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <p className={styles.drawerTitle} id="mobile-navigation-title">Where would you like to go?</p>
          <Link href="/" aria-current={current('/')} onClick={closeNavigation}>Home <Icon name="arrow" /></Link>
          <Link href="/self-drive-car" aria-current={current('/self-drive-car')} onClick={closeNavigation}>Self-drive cars <Icon name="arrow" /></Link>
          <details className={styles.mobileDisclosure}>
            <summary>Services <Icon name="chevron" /></summary>
            <div className={styles.mobileServices}>{services.map((service) => <Link key={service.href} href={service.href} aria-current={current(service.href)} onClick={closeNavigation}>{service.name}</Link>)}</div>
          </details>
          <details className={styles.mobileDisclosure}>
            <summary>Locations <Icon name="chevron" /></summary>
            <div className={styles.locationsGrid}>{renderLocations()}</div>
          </details>
          <Link href="/blog" aria-current={current('/blog')} onClick={closeNavigation}>Guides <Icon name="arrow" /></Link>
          <Link href="/contact" aria-current={current('/contact')} onClick={closeNavigation}>Contact <Icon name="arrow" /></Link>
        </nav>
        <div className={styles.drawerActions}>
          <a className={styles.callButton} href={`tel:${phone}`}><Icon name="phone" />Call to book</a>
          <a className={styles.whatsappButton} href={whatsappHref} target="_blank" rel="noopener noreferrer">Chat on WhatsApp <Icon name="arrow" /></a>
        </div>
      </dialog>
    </header>
  );
}
