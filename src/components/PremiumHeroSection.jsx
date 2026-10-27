'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './PremiumHeroSection.module.css';

const SHOWCASE_VEHICLES = [
  {
    id: 'suv',
    tabLabel: 'SUVs & 4x4',
    name: 'Mahindra Thar 4x4 & Roxx',
    badge: 'Off-Road Champion • VIP Road Presence',
    image: '/assets/img/cars/5-Thar.png',
    seats: '4-5 Seats',
    transmission: 'Auto & Manual 4WD',
    fuel: 'Diesel / Petrol',
    feature: 'Convertible Hard Top • Security Deposit',
    categoryKey: 'suv5',
  },
  {
    id: 'suv7',
    tabLabel: '7-Seater',
    name: 'Toyota Innova Crysta & Fortuner',
    badge: 'Undisputed Highway & Family Legend',
    image: '/assets/img/cars/7-Innova Crysta.png',
    seats: '7-8 Seats',
    transmission: 'Automatic & Manual',
    fuel: '2.4L Diesel',
    feature: 'Massive Boot Space (4+ Large Bags)',
    categoryKey: 'suv7',
  },
  {
    id: 'luxury',
    tabLabel: 'Luxury',
    name: 'Mercedes-Benz & BMW Flagship',
    badge: 'Executive CXO & Wedding Splendor',
    image: '/assets/img/benz2.png',
    seats: '5 Seater Luxury',
    transmission: '9G-Tronic Automatic',
    fuel: 'Turbo Petrol',
    feature: 'Suited Chauffeur or Self-Drive',
    categoryKey: 'all',
  },
  {
    id: 'hatchback',
    tabLabel: 'Hatchback',
    name: 'Maruti Swift & Nexa Baleno',
    badge: 'Smart City Drive • 22+ km/l Mileage',
    image: '/assets/img/cars/Swift.png',
    seats: '5 Seats',
    transmission: 'AMT Auto & Manual',
    fuel: 'Petrol / High Mileage',
    feature: 'Clutch-Free Commute • Security Deposit',
    categoryKey: 'hatchback',
  },
];

const LOCATIONS = [
  'Doorstep Handover (Anywhere in Hyderabad)',
  'RGIA Shamshabad Airport (Terminal Handover)',
  'Masab Tank Central Hub (Main HQ)',
  'HITEC City & Cyber Towers',
  'Gachibowli & Financial District',
  'Madhapur & 100 Feet Road',
  'Kondapur & Botanical Garden',
  'Banjara Hills & Jubilee Hills',
  'Secunderabad & Begumpet',
  'Kukatpally & Miyapur',
  'LB Nagar & Dilsukhnagar',
];

const PLANS = [
  { label: 'Daily Rental (24 Hours)', value: 'Daily Rental (24 Hours)' },
  { label: 'Weekend Getaway (Fri – Mon)', value: 'Weekend Getaway' },
  { label: 'Weekly Package', badge: 'Save 25%', value: 'Weekly Package (7 Days)' },
  { label: 'Monthly Subscription', badge: 'Save 50%', value: 'Monthly Subscription (30 Days)' },
];

const CATEGORIES = [
  { label: 'All Categories (28+ Fleet Models)', key: 'all' },
  { label: 'Commanding 5-Seater SUVs', subtitle: 'Creta, Thar, Brezza', key: 'suv5' },
  { label: 'Spacious 7-Seater MUVs', subtitle: 'Innova, Fortuner, XUV700', key: 'suv7' },
  { label: '5-Seater Hatchbacks', subtitle: 'Swift, Baleno, i20', key: 'hatchback' },
  { label: 'Compact & Mini SUVs', subtitle: 'Fronx, Venue, Punch', key: 'minisuv' },
  { label: 'Executive Sedans', subtitle: 'Verna, Dzire, Virtus, Ciaz', key: 'sedan' },
];

export default function PremiumHeroSection() {
  const [serviceType, setServiceType] = useState('self-drive'); // 'self-drive' | 'chauffeur' | 'airport' | 'wedding'
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
  const [selectedPlan, setSelectedPlan] = useState(PLANS[0].value);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null); // 'location' | 'plan' | 'category' | null
  const bookingFormRef = useRef(null);

  useEffect(() => {
    if (!openDropdown) return;
    bookingFormRef.current
      ?.querySelector(`#hero-${openDropdown}-options [aria-selected="true"]`)
      ?.focus();
  }, [openDropdown]);

  const closeDropdown = () => {
    bookingFormRef.current
      ?.querySelector(`[aria-controls="hero-${openDropdown}-options"]`)
      ?.focus();
    setOpenDropdown(null);
  };

  const handleDropdownKeys = (event) => {
    const option = event.target.closest('[role="option"]');
    const trigger = event.target.closest('[aria-haspopup="listbox"]');
    if (trigger && ['ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      setOpenDropdown(trigger.getAttribute('aria-controls').replace('hero-', '').replace('-options', ''));
      return;
    }
    if (!option) return;
    const options = Array.from(option.parentElement.querySelectorAll('[role="option"]'));
    const index = options.indexOf(option);
    const targetIndex = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1
      : event.key === 'ArrowDown' ? (index + 1) % options.length
        : event.key === 'ArrowUp' ? (index - 1 + options.length) % options.length : null;
    if (targetIndex !== null) {
      event.preventDefault();
      options[targetIndex].focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeDropdown();
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (bookingFormRef.current && !bookingFormRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  const activeCar = SHOWCASE_VEHICLES[activeShowcaseIdx];

  const handleShowcaseSelect = (idx) => {
    setActiveShowcaseIdx(idx);
    const matchedCategory = SHOWCASE_VEHICLES[idx].categoryKey;
    if (matchedCategory) {
      setSelectedCategory(matchedCategory);
    }
  };

  const handleSearchFleet = () => {
    // If special service like wedding, direct to dedicated page if selected
    if (serviceType === 'wedding') {
      window.location.href = '/wedding-car-rental-hyderabad';
      return;
    }
    if (serviceType === 'airport') {
      window.location.href = '/hyderabad-airport-car-rental';
      return;
    }

    // Dispatch filter event to CarOffersSection
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('driveit-filter-category', {
          detail: { category: selectedCategory },
        })
      );
      const offersSection = document.getElementById('fleet-offers');
      if (offersSection) {
        offersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = 'fleet-offers';
      }
    }
  };

  const generateWhatsappUrl = () => {
    const serviceLabels = {
      'self-drive': 'Self Drive Car Rental',
      'chauffeur': 'Chauffeur Driven Car',
      'airport': 'RGIA Airport Pickup/Drop',
      'wedding': 'Wedding & Luxury Car Rental',
    };
    const catLabel =
      CATEGORIES.find((c) => c.key === selectedCategory)?.label || selectedCategory;

    const message = `Hi DriveItCars, I would like to enquire about:
• Service: ${serviceLabels[serviceType] || 'Car Rental'}
• Pickup Hub: ${selectedLocation}
• Plan / Duration: ${selectedPlan}
• Preferred Car: ${catLabel}
Please share vehicle availability, best tariffs, and booking confirmation.`;

    return `https://api.whatsapp.com/send?phone=916300041186&text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <section className={`${styles.hero} premium-hero-wrapper`}>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* Top Trust & Authority Eyebrow */}
        <div className="hero-trust-eyebrow-container">
          <div className="hero-trust-eyebrow">
            <span className="hero-rating-badge">
              <span className="stars">★★★★★</span>
              <strong>4.9 / 5.0</strong>
              <span className="reviews-count">(1,200+ Google Reviews)</span>
            </span>
            <span className="eyebrow-divider">•</span>
            <span className="hero-authority-badge">
              <i className="fa fa-shield" /> HYDERABAD&apos;S PREMIER CAR RENTAL FLEET
            </span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="row align-items-center g-4 g-xl-5">
          {/* ================= LEFT COLUMN: RESERVATION ENGINE ================= */}
          <div className="col-lg-6 col-xl-6">
            <div className="hero-content-left">
              <h1 className="hero-main-title">
                Drive On Your Terms Across <span className="highlight-city">Hyderabad.</span>
                <span className="hero-sub-title-accent">
                  Premium Self Drive & Chauffeur Fleet
                </span>
              </h1>
              <p className="hero-lead-text">
                Security deposit on select fleet • Limited KMs available • 30-minute
                doorstep delivery across 26+ Hyderabad hubs &amp; RGIA Shamshabad Airport.
              </p>

              {/* Sixt-Style Elevated Booking Card */}
              <div className="hero-booking-card">
                {/* Service Mode Tabs */}
                <div className="booking-service-tabs">
                  <button
                    type="button"
                    className={`service-tab-btn ${serviceType === 'self-drive' ? 'active' : ''}`}
                    onClick={() => setServiceType('self-drive')}
                    aria-pressed={serviceType === 'self-drive'}
                  >
                    <i className="fa fa-car" /> Self Drive
                  </button>
                  <button
                    type="button"
                    className={`service-tab-btn ${serviceType === 'chauffeur' ? 'active' : ''}`}
                    onClick={() => setServiceType('chauffeur')}
                    aria-pressed={serviceType === 'chauffeur'}
                  >
                    <i className="fa fa-user-circle-o" /> Chauffeur
                  </button>
                  <button
                    type="button"
                    className={`service-tab-btn ${serviceType === 'airport' ? 'active' : ''}`}
                    onClick={() => setServiceType('airport')}
                    aria-pressed={serviceType === 'airport'}
                  >
                    <i className="fa fa-plane" /> Airport
                  </button>
                  <button
                    type="button"
                    className={`service-tab-btn ${serviceType === 'wedding' ? 'active' : ''}`}
                    onClick={() => setServiceType('wedding')}
                    aria-pressed={serviceType === 'wedding'}
                  >
                    <i className="fa fa-diamond" /> Wedding
                  </button>
                </div>

                {/* Form Controls */}
                <div className="booking-form-grid" ref={bookingFormRef} onKeyDown={handleDropdownKeys}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
                  }}>
                  {/* Field 1: Pickup Location */}
                  <div className={`booking-form-group ${openDropdown === 'location' ? 'dropdown-active' : ''}`}>
                    <label className="form-field-label">
                      <i className="fa fa-map-marker text-gold" /> PICKUP HUB / LOCATION
                    </label>
                    <div className="custom-dropdown-container">
                      <button
                        type="button"
                        className={`custom-dropdown-trigger ${openDropdown === 'location' ? 'is-open' : ''}`}
                        onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
                        aria-haspopup="listbox"
                        aria-label={`Pickup hub / location: ${selectedLocation}`}
                        aria-controls="hero-location-options"
                        aria-expanded={openDropdown === 'location'}
                      >
                        <span className="dropdown-trigger-content">
                          <span className="dropdown-trigger-text">{selectedLocation}</span>
                        </span>
                        <span className={`dropdown-chevron ${openDropdown === 'location' ? 'rotated' : ''}`}>
                          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </button>

                      {openDropdown === 'location' && (
                        <div id="hero-location-options" className="custom-dropdown-menu" role="listbox" aria-label="Pickup hub / location">
                          {LOCATIONS.map((loc, idx) => {
                            const isSelected = loc === selectedLocation;
                            return (
                              <button type="button"
                                key={idx}
                                className={`custom-dropdown-option ${isSelected ? 'selected' : ''}`}
                                onClick={() => {
                                  setSelectedLocation(loc);
                                  closeDropdown();
                                }}
                                role="option"
                                aria-selected={isSelected}
                                tabIndex={isSelected ? 0 : -1}
                              >
                                <span className="option-text-group">
                                  <span className="option-main-text">
                                    <i className="fa fa-map-marker option-icon" /> {loc}
                                  </span>
                                </span>
                                {isSelected && (
                                  <span className="option-checkmark">
                                    <i className="fa fa-check" />
                                  </span>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Field 2: Rental Plan */}
                  <div className={`booking-form-group ${openDropdown === 'plan' ? 'dropdown-active' : ''}`}>
                    <label className="form-field-label">
                      <i className="fa fa-calendar-check-o text-gold" /> RENTAL PLAN
                    </label>
                    <div className="custom-dropdown-container">
                      {(() => {
                        const currentPlanObj = PLANS.find((p) => p.value === selectedPlan) || PLANS[0];
                        return (
                          <>
                            <button
                              type="button"
                              className={`custom-dropdown-trigger ${openDropdown === 'plan' ? 'is-open' : ''}`}
                              onClick={() => setOpenDropdown(openDropdown === 'plan' ? null : 'plan')}
                              aria-haspopup="listbox"
                              aria-label={`Rental plan: ${currentPlanObj.label}`}
                              aria-controls="hero-plan-options"
                              aria-expanded={openDropdown === 'plan'}
                            >
                              <span className="dropdown-trigger-content">
                                <span className="dropdown-trigger-text">{currentPlanObj.label}</span>
                                {currentPlanObj.badge && (
                                  <span className="dropdown-trigger-badge">{currentPlanObj.badge}</span>
                                )}
                              </span>
                              <span className={`dropdown-chevron ${openDropdown === 'plan' ? 'rotated' : ''}`}>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </button>

                            {openDropdown === 'plan' && (
                              <div id="hero-plan-options" className="custom-dropdown-menu" role="listbox" aria-label="Rental plan">
                                {PLANS.map((p, idx) => {
                                  const isSelected = p.value === selectedPlan;
                                  return (
                                    <button type="button"
                                      key={idx}
                                      className={`custom-dropdown-option ${isSelected ? 'selected' : ''}`}
                                      onClick={() => {
                                        setSelectedPlan(p.value);
                                        closeDropdown();
                                      }}
                                      role="option"
                                      aria-selected={isSelected}
                                      tabIndex={isSelected ? 0 : -1}
                                    >
                                      <span className="option-text-group">
                                        <span className="option-main-text">
                                          <i className="fa fa-calendar-check-o option-icon" /> {p.label}
                                        </span>
                                      </span>
                                      <span className="option-meta-group">
                                        {p.badge && (
                                          <span className="option-deal-badge">{p.badge}</span>
                                        )}
                                        {isSelected && (
                                          <span className="option-checkmark">
                                            <i className="fa fa-check" />
                                          </span>
                                        )}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Field 3: Car Category */}
                  <div className={`booking-form-group full-width-field ${openDropdown === 'category' ? 'dropdown-active' : ''}`}>
                    <label className="form-field-label">
                      <i className="fa fa-sliders text-gold" /> FLEET CATEGORY
                    </label>
                    <div className="custom-dropdown-container">
                      {(() => {
                        const currentCatObj = CATEGORIES.find((c) => c.key === selectedCategory) || CATEGORIES[0];
                        return (
                          <>
                            <button
                              type="button"
                              className={`custom-dropdown-trigger ${openDropdown === 'category' ? 'is-open' : ''}`}
                              onClick={() => setOpenDropdown(openDropdown === 'category' ? null : 'category')}
                              aria-haspopup="listbox"
                              aria-label={`Fleet category: ${currentCatObj.label}${currentCatObj.subtitle ? `, ${currentCatObj.subtitle}` : ''}`}
                              aria-controls="hero-category-options"
                              aria-expanded={openDropdown === 'category'}
                            >
                              <span className="dropdown-trigger-content">
                                <span className="dropdown-trigger-text">{currentCatObj.label}</span>
                                {currentCatObj.subtitle && (
                                  <span className="dropdown-trigger-sub">({currentCatObj.subtitle})</span>
                                )}
                              </span>
                              <span className={`dropdown-chevron ${openDropdown === 'category' ? 'rotated' : ''}`}>
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#475569" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </span>
                            </button>

                            {openDropdown === 'category' && (
                              <div id="hero-category-options" className="custom-dropdown-menu" role="listbox" aria-label="Fleet category">
                                {CATEGORIES.map((cat, idx) => {
                                  const isSelected = cat.key === selectedCategory;
                                  return (
                                    <button type="button"
                                      key={idx}
                                      className={`custom-dropdown-option ${isSelected ? 'selected' : ''}`}
                                      onClick={() => {
                                        setSelectedCategory(cat.key);
                                        closeDropdown();
                                      }}
                                      role="option"
                                      aria-selected={isSelected}
                                      tabIndex={isSelected ? 0 : -1}
                                    >
                                      <span className="option-text-group">
                                        <span className="option-main-text">
                                          <i className="fa fa-car option-icon" /> {cat.label}
                                        </span>
                                        {cat.subtitle && (
                                          <span className="option-sub-text">{cat.subtitle}</span>
                                        )}
                                      </span>
                                      {isSelected && (
                                        <span className="option-checkmark">
                                          <i className="fa fa-check" />
                                        </span>
                                      )}
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="hero-action-buttons-grid">
                  <button
                    type="button"
                    onClick={handleSearchFleet}
                    className="btn-hero-primary"
                  >
                    <span>Check Available Cars</span>
                    <i className="fa fa-arrow-right" />
                  </button>
                  <a
                    href={generateWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-hero-whatsapp"
                  >
                    <i className="fa fa-whatsapp" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>

                {/* Micro Help Footnote */}
                <div className="hero-booking-footer-note">
                  <span>
                    <i className="fa fa-bolt text-gold" /> <strong>Fast Handover:</strong> 10-Min digital verification
                  </span>
                  <span className="dot-sep">•</span>
                  <a href="tel:+916300041186" className="direct-call-link">
                    <i className="fa fa-phone" /> Call: +91 6300041186
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE SHOWROOM CAR ================= */}
          <div className="col-lg-6 col-xl-6">
            <div className="hero-showroom-card">
              {/* Category Pill Switcher */}
              <div className="showroom-category-switcher">
                {SHOWCASE_VEHICLES.map((vehicle, idx) => (
                  <button
                    key={vehicle.id}
                    type="button"
                    className={`showroom-pill-btn ${activeShowcaseIdx === idx ? 'active' : ''}`}
                    onClick={() => handleShowcaseSelect(idx)}
                    aria-pressed={activeShowcaseIdx === idx}
                  >
                    {vehicle.tabLabel}
                  </button>
                ))}
              </div>

              {/* Showroom Vehicle Visual Stage */}
              <div className="showroom-stage-viewport">
                {/* Center Showroom Car */}
                <div className="showroom-car-container">
                  <img
                    key={activeCar.id}
                    src={activeCar.image}
                    alt={activeCar.name}
                    className="showroom-car-image animate-fade-in"
                  />
                </div>

                {/* Micro-Trust Capsules Cluster (Floating on Desktop, Clean Centered Row on Mobile/Tablet) */}
                <div className="showroom-badges-cluster">
                  <div className="floating-badge badge-top-left">
                    <span className="badge-text">
                      <strong>Security Deposit</strong> on select cars
                    </span>
                  </div>

                  <div className="floating-badge badge-top-right">
                    <span className="badge-text">
                      <strong>10-Min KYC</strong> instant approval
                    </span>
                  </div>

                  <div className="floating-badge badge-bottom-right">
                    <span className="badge-text">
                      <strong>Doorstep Drop</strong> across 26 Hubs
                    </span>
                  </div>
                </div>
              </div>

              {/* Active Vehicle Spec Summary Box */}
              <div className="showroom-vehicle-details">
                <div className="vehicle-details-header">
                  <div>
                    <h3 className="vehicle-name">{activeCar.name}</h3>
                    <p className="vehicle-badge-text">
                      <i className="fa fa-check-circle text-gold" /> {activeCar.badge}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleSearchFleet}
                    className="btn-quick-view-fleet"
                  >
                    View Fleet <i className="fa fa-angle-right" />
                  </button>
                </div>

                {/* Spec Badges Row */}
                <div className="vehicle-spec-pills-row">
                  <span className="spec-pill">
                    <i className="fa fa-users" /> {activeCar.seats}
                  </span>
                  <span className="spec-pill">
                    <i className="fa fa-cogs" /> {activeCar.transmission}
                  </span>
                  <span className="spec-pill">
                    <i className="fa fa-tint" /> {activeCar.fuel}
                  </span>
                  <span className="spec-pill highlight-pill">
                    <i className="fa fa-star" /> {activeCar.feature}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FULL-WIDTH TRUST STRIP (DIRECTLY BELOW HERO) ================= */}
      <div className="hero-bottom-trust-strip">
        <div className="container">
          <div className="row g-2 g-md-4 align-items-stretch">
            <div className="col-6 col-md-3">
              <div className="trust-strip-item">
                <div className="trust-strip-icon">
                  <i className="fa fa-shield" />
                </div>
                <div className="trust-strip-info">
                  <h4>Security Deposit</h4>
                  <p className="trust-desc-desktop">Flexible deposit options on verified fleet</p>
                  <p className="trust-desc-mobile">Security Deposit on verified fleet</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="trust-strip-item">
                <div className="trust-strip-icon">
                  <i className="fa fa-plane" />
                </div>
                <div className="trust-strip-info">
                  <h4>RGIA Airport Drop</h4>
                  <p className="trust-desc-desktop">24/7 terminal handover at Shamshabad</p>
                  <p className="trust-desc-mobile">24/7 Shamshabad handover</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="trust-strip-item">
                <div className="trust-strip-icon">
                  <i className="fa fa-car" />
                </div>
                <div className="trust-strip-info">
                  <h4>Sanitized Fleet</h4>
                  <p className="trust-desc-desktop">28+ inspected models with FASTag</p>
                  <p className="trust-desc-mobile">28+ inspected models with FASTag</p>
                </div>
              </div>
            </div>

            <div className="col-6 col-md-3">
              <div className="trust-strip-item">
                <div className="trust-strip-icon">
                  <i className="fa fa-clock-o" />
                </div>
                <div className="trust-strip-info">
                  <h4>30-Min Delivery</h4>
                  <p className="trust-desc-desktop">Fast doorstep delivery across 26 hubs</p>
                  <p className="trust-desc-mobile">Fast drop across 26 hubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
