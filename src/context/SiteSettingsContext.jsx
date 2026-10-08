'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { client } from '../sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  try {
    return builder.image(source);
  } catch (err) {
    return null;
  }
}

const DEFAULT_SETTINGS = {
  phoneNumber: '+91 6300041186',
  whatsappNumber: '+91 6300041186',
  email: 'driveitcars@gmail.com',
  address: '10-2-289/83, Mehar Mansion, Rd Number 2, Shantinagar Colony, Masab Tank, Hyderabad, Telangana 500028',
  workingHours: 'Mon - Sun: 7:00 AM – 10:00 PM',
  logoUrl: '/logo.png',
  footerLogoUrl: '/logo2.png',
  footerAbout: 'DriveIt is Hyderabad’s leading car rental platform offering premium self-drive cars, luxury wedding cars, and group travel buses with transparent pricing and doorstep delivery.',
  footerTrustTags: ['100% Insured', '24/7 Road Support', 'Sanitized Cars'],
  copyrightText: 'Copyright © 2026. DRIVEIT CARS. All Rights Reserved.',
  socialLinks: [],
};

const SiteSettingsContext = createContext(DEFAULT_SETTINGS);

export function SiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  useEffect(() => {
    let isMounted = true;
    async function loadSettings() {
      try {
        const data = await client.fetch(`*[_type == "siteSettings"][0]`);
        if (data && isMounted) {
          let logoSrc = DEFAULT_SETTINGS.logoUrl;
          if (data.logo) {
            try {
              const u = urlFor(data.logo)?.url();
              if (u) logoSrc = u;
            } catch (e) {}
          }
          let footerLogoSrc = DEFAULT_SETTINGS.footerLogoUrl;
          if (data.footerLogo) {
            try {
              const fu = urlFor(data.footerLogo)?.url();
              if (fu) footerLogoSrc = fu;
            } catch (e) {}
          }

          setSettings({
            phoneNumber: data.phoneNumber || DEFAULT_SETTINGS.phoneNumber,
            whatsappNumber: data.whatsappNumber || DEFAULT_SETTINGS.whatsappNumber,
            email: data.email || DEFAULT_SETTINGS.email,
            address: data.address || DEFAULT_SETTINGS.address,
            workingHours: data.workingHours || DEFAULT_SETTINGS.workingHours,
            logoUrl: logoSrc,
            footerLogoUrl: footerLogoSrc,
            footerAbout: data.footerAbout || DEFAULT_SETTINGS.footerAbout,
            footerTrustTags: data.footerTrustTags && data.footerTrustTags.length > 0 ? data.footerTrustTags : DEFAULT_SETTINGS.footerTrustTags,
            copyrightText: data.copyrightText || DEFAULT_SETTINGS.copyrightText,
            socialLinks: data.socialLinks || [],
          });
        }
      } catch (err) {
        // Fallback silently to defaults
      }
    }
    loadSettings();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <SiteSettingsContext.Provider value={settings}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
