'use client';

import { useState } from 'react';
import Link from 'next/link';

const CAR_OFFERS = [
  {
    id: 1,
    name: 'Maruti Swift Dzire',
    category: 'sedan',
    badge: 'Popular Daily Deal',
    badgeColor: '#10b981',
    dailyPrice: '1,999',
    monthlyPrice: '29,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual / Automatic',
    fuel: 'Petrol / Diesel',
    image: '/seadns.jpg',
    features: ['Zero Security Deposit', 'Free Doorstep Delivery', 'Unlimited KMs Option'],
  },
  {
    id: 2,
    name: 'Hyundai Creta',
    category: 'suv',
    badge: 'Top Rated SUV',
    badgeColor: '#ffb907',
    dailyPrice: '2,999',
    monthlyPrice: '44,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: '/suv.jpg',
    features: ['Panoramic Sunroof', 'Cruise Control', '100% Comprehensive Insurance'],
  },
  {
    id: 3,
    name: 'Toyota Innova Crysta',
    category: 'suv',
    badge: 'Best For Family & Groups',
    badgeColor: '#3b82f6',
    dailyPrice: '3,899',
    monthlyPrice: '58,999',
    monthlySavings: 'Save 49%',
    seats: 7,
    transmission: 'Manual',
    fuel: 'Diesel',
    image: '/banner8.avif',
    features: ['Spacious 7-Seater', 'Rear AC Vents', 'Outstation Ready'],
  },
  {
    id: 4,
    name: 'Mahindra Thar 4x4',
    category: 'suv',
    badge: 'Weekend Explorer',
    badgeColor: '#ef4444',
    dailyPrice: '3,499',
    monthlyPrice: '52,999',
    monthlySavings: 'Save 49%',
    seats: 4,
    transmission: 'Manual 4x4',
    fuel: 'Diesel',
    image: '/banner6.avif',
    features: ['True 4x4 Off-Road', 'Convertible Hard Top', 'Muscular Road Presence'],
  },
  {
    id: 5,
    name: 'Toyota Fortuner 4x4',
    category: 'suv',
    badge: 'Executive VIP Choice',
    badgeColor: '#8b5cf6',
    dailyPrice: '5,999',
    monthlyPrice: '89,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Automatic 4x4',
    fuel: 'Diesel',
    image: '/banner10.avif',
    features: ['Commanding Presence', 'Leather Interiors', 'VIP Escort Ready'],
  },
  {
    id: 6,
    name: 'Range Rover Evoque',
    category: 'luxury',
    badge: 'Wedding & Luxury VIP',
    badgeColor: '#d97706',
    dailyPrice: '11,999',
    monthlyPrice: '1,79,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: '/rangerover.webp',
    features: ['Panoramic Glass Roof', 'Meridian Sound System', 'Red Carpet Arrival'],
  },
];

export default function CarOffersSection({ initialCars = [] }) {
  const [activeTab, setActiveTab] = useState('all');
  const [planType, setPlanType] = useState('daily'); // 'daily' | 'monthly'

  const activeFleet = (initialCars && initialCars.length > 0)
    ? initialCars.map((car, idx) => {
        let cat = 'sedan';
        if (['suv5', 'suv7', 'suv'].includes(car.category)) cat = 'suv';
        else if (['luxury'].includes(car.category)) cat = 'luxury';
        else if (['sedan'].includes(car.category)) cat = 'sedan';
        else if (['hatchback'].includes(car.category)) cat = 'hatchback';
        
        const dailyPriceStr = typeof car.pricePerDay === 'number' 
          ? car.pricePerDay.toLocaleString('en-IN') 
          : String(car.pricePerDay || '1,999');
          
        const monthlyPriceStr = typeof car.pricePerMonth === 'number' && car.pricePerMonth > 0
          ? car.pricePerMonth.toLocaleString('en-IN')
          : String(car.pricePerMonth || '29,999');

        return {
          id: car._id || car.id || idx,
          name: car.name,
          category: cat,
          rawCategory: car.category,
          badge: car.badge || (cat === 'luxury' ? 'VIP Luxury' : 'Popular Deal'),
          badgeColor: car.badgeColor || (cat === 'luxury' ? '#d97706' : '#ffb907'),
          dailyPrice: dailyPriceStr,
          monthlyPrice: monthlyPriceStr,
          monthlySavings: car.monthlySavings || 'Save 50%',
          seats: car.seats || 5,
          transmission: car.transmission || 'Manual',
          fuel: car.fuelType || car.fuel || 'Petrol',
          image: car.imageUrl || car.image || '/assets/img/cars/Swift.png',
          features: car.features && car.features.length > 0 
            ? car.features 
            : ['Zero Security Deposit', 'Doorstep Delivery', '100% Sanitized'],
        };
      })
    : CAR_OFFERS;

  const filteredCars = activeFleet.filter((car) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'hatchback') return car.category === 'hatchback';
    if (activeTab === 'suv') return car.category === 'suv';
    if (activeTab === 'sedan') return car.category === 'sedan';
    if (activeTab === 'luxury') return car.category === 'luxury';
    return true;
  });

  return (
    <section className="car-offers-section section_70" style={{ background: '#f8fafc', padding: '80px 0' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="site-heading text-center" style={{ width: '100%', maxWidth: '720px', margin: '0 auto 35px' }}>
          <h4
            style={{
              color: '#ffb907',
              fontSize: '13px',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '8px',
              display: 'block',
            }}
          >
            Exclusive Rental Deals
          </h4>
          <h2
            style={{
              fontSize: '34px',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 10px',
              display: 'block',
              width: '100%',
              lineHeight: 1.25,
            }}
          >
            Daily &amp; Monthly Car Rental Offers
          </h2>
          <p style={{ color: '#64748b', fontSize: '15px', margin: 0 }}>
            Choose your preferred vehicle and rental plan. Enjoy flat discounted rates with zero hidden charges and doorstep delivery across Hyderabad.
          </p>
        </div>

        {/* Pricing Mode Toggle (Daily vs Monthly) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '28px',
            padding: '0 10px',
            width: '100%',
          }}
        >
          <div
            className="pricing-plan-toggle"
            style={{
              background: '#ffffff',
              padding: '4px',
              borderRadius: '40px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
              display: 'flex',
              border: '1px solid #e2e8f0',
              maxWidth: '460px',
              width: '100%',
            }}
          >
            <button
              type="button"
              onClick={() => setPlanType('daily')}
              style={{
                flex: 1,
                border: 'none',
                background: planType === 'daily' ? '#ffb907' : 'transparent',
                color: planType === 'daily' ? '#000000' : '#475569',
                fontWeight: 700,
                fontSize: '13px',
                padding: '10px 14px',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              <i className="fa fa-calendar-check-o" /> <span>Daily Deals</span>
            </button>
            <button
              type="button"
              onClick={() => setPlanType('monthly')}
              style={{
                flex: 1,
                border: 'none',
                background: planType === 'monthly' ? '#ffb907' : 'transparent',
                color: planType === 'monthly' ? '#000000' : '#475569',
                fontWeight: 700,
                fontSize: '13px',
                padding: '10px 14px',
                borderRadius: '30px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                whiteSpace: 'nowrap',
              }}
            >
              <i className="fa fa-refresh" /> <span>Monthly</span>{' '}
              <span
                style={{
                  background: '#10b981',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '2px 6px',
                  borderRadius: '10px',
                }}
              >
                Save 50%
              </span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '35px',
          }}
        >
          {[
            { id: 'all', label: 'All Fleet' },
            { id: 'hatchback', label: 'Hatchbacks' },
            { id: 'sedan', label: 'Sedans' },
            { id: 'suv', label: 'SUVs & 7-Seaters' },
            { id: 'luxury', label: 'Luxury Cars' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                border: 'none',
                background: activeTab === tab.id ? '#0f172a' : '#ffffff',
                color: activeTab === tab.id ? '#ffb907' : '#475569',
                fontWeight: 700,
                fontSize: '13px',
                padding: '8px 18px',
                borderRadius: '20px',
                boxShadow: activeTab === tab.id ? '0 4px 12px rgba(15,23,42,0.18)' : '0 2px 6px rgba(0,0,0,0.03)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: activeTab === tab.id ? '1px solid #0f172a' : '1px solid #e2e8f0',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cars Showcase Grid */}
        <div className="row g-4">
          {filteredCars.map((car) => {
            const price = planType === 'daily' ? `₹${car.dailyPrice}` : `₹${car.monthlyPrice}`;
            const unit = planType === 'daily' ? '/day' : '/month';
            const whatsappMsg = `Hi DRIVEIT Cars, I am interested in the ${planType.toUpperCase()} rental offer for ${car.name} (${price}${unit}). Please share availability and booking details.`;

            return (
              <div className="col-lg-4 col-md-6 mb-4" key={car.id}>
                <div
                  className="car-explore-card"
                  style={{
                    background: '#ffffff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                >
                  {/* Card Header & Badge */}
                  <div style={{ position: 'relative' }}>
                    <img
                      src={car.image}
                      alt={car.name}
                      style={{
                        width: '100%',
                        height: '210px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: '#0f172a',
                        color: '#ffb907',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                        letterSpacing: '0.4px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      ★ {car.badge}
                    </span>

                    {planType === 'monthly' && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: '#10b981',
                          color: '#ffffff',
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '20px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        }}
                      >
                        {car.monthlySavings}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <h4 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', margin: 0 }}>{car.name}</h4>
                      <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                        {car.category}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '14px' }}>
                      <span style={{ fontSize: '24px', fontWeight: 900, color: '#0f172a' }}>{price}</span>
                      <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 600 }}>{unit}</span>
                      {planType === 'monthly' && (
                        <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, marginLeft: 6 }}>
                          (Effective ~₹{Math.round(parseInt(car.monthlyPrice.replace(',', '')) / 30)}/day)
                        </span>
                      )}
                    </div>

                    {/* Specs Pill List */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                        <i className="fa fa-users" style={{ marginRight: 5, color: '#ffb907' }} /> {car.seats} Seats
                      </span>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                        <i className="fa fa-cogs" style={{ marginRight: 5, color: '#ffb907' }} /> {car.transmission}
                      </span>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '12px', fontWeight: 600, padding: '4px 10px', borderRadius: '6px' }}>
                        <i className="fa fa-tint" style={{ marginRight: 5, color: '#ffb907' }} /> {car.fuel}
                      </span>
                    </div>

                    {/* Included Features */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flexGrow: 1 }}>
                      {car.features.map((feat, i) => (
                        <li key={i} style={{ fontSize: '13px', color: '#475569', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa fa-check-circle" style={{ color: '#10b981', fontSize: '14px' }} />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="car-card-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto' }}>
                      <a
                        href="tel:+916300041186"
                        className="car-card-btn car-card-call"
                        style={{
                          background: '#0f172a',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '12px',
                          padding: '10px 8px',
                          borderRadius: '8px',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <i className="fa fa-phone" style={{ color: '#ffb907' }} /> Enquire Now
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?phone=+916300041186&text=${encodeURIComponent(whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="car-card-btn car-card-whatsapp"
                        style={{
                          background: '#25D366',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '12px',
                          padding: '10px 8px',
                          borderRadius: '8px',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '5px',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <i className="fa fa-whatsapp" style={{ fontSize: '14px' }} /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Fleet CTA */}
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link
            href="/self-drive-car"
            style={{
              background: '#ffb907',
              color: '#000000',
              fontWeight: 800,
              fontSize: '14px',
              padding: '13px 32px',
              borderRadius: '30px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 16px rgba(255, 185, 7, 0.35)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            Explore Complete Fleet &amp; Rates <i className="fa fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
