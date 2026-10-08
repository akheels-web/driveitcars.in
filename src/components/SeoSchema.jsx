import React from 'react';

export default function SeoSchema({ schema }) {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function buildCarRentalSchema({
  name = 'DRIVEIT Self Drive Cars Hyderabad',
  description = 'Premier self drive car rentals in Hyderabad with doorstep delivery, zero deposit options, and well-maintained fleet.',
  url = 'https://www.driveitcars.in',
  areaServed = 'Hyderabad',
  priceRange = '₹1499 - ₹15000',
} = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name,
    description,
    url,
    logo: 'https://www.driveitcars.in/logo2.png',
    image: 'https://www.driveitcars.in/suv.jpg',
    telephone: '+916300041186',
    priceRange,
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Mehar Mansion, Rd No 2, Shantinagar Colony, Masab Tank',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      postalCode: '500028',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 17.400682,
      longitude: 78.452804,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    areaServed: Array.isArray(areaServed) ? areaServed : [areaServed, 'Hyderabad', 'Telangana'],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Self Drive Car Rental',
          description: 'Hatchbacks, sedans, SUVs, and luxury cars for daily, weekend, and monthly self drive hire in Hyderabad.',
        },
      },
    ],
  };
}

export function buildFaqSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question || faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer || faq.a,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items = []) {
  if (!items || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://www.driveitcars.in${item.url}`,
    })),
  };
}
