'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import Header from './Header';
import Footer from './Footer';
import GlobalFaqHandler from './GlobalFaqHandler';

export default function SiteLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <GlobalFaqHandler />
      <Header />
      {children}
      <Footer />

      {/* Website Scripts loaded safely via next/script component */}
      <Script src="/assets/js/jquery-3.2.1.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery-migrate.js" strategy="afterInteractive" />
      <Script src="/assets/js/jquery-ui.js" strategy="afterInteractive" />
      <Script src="/assets/js/popper.js" strategy="afterInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/slicknav.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/clockpicker.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/lightgallery-all.min.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
    </>
  );
}
