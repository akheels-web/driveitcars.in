'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import GlobalFaqHandler from './GlobalFaqHandler';
import { SiteSettingsProvider } from '../context/SiteSettingsContext';

export default function SiteLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith('/studio');

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <SiteSettingsProvider>
      <div className="driveit-site">
      <GlobalFaqHandler />
      <Header />
      <div className={pathname?.startsWith('/blog') ? 'journal-content' : 'site-content'}>{children}</div>
      <Footer />
      </div>
    </SiteSettingsProvider>
  );
}
