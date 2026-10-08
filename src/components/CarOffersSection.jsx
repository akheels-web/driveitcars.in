'use client';

import { useState } from 'react';
import Link from 'next/link';

// All 28 Regular Top Demanding Cars with Daily, Weekly & Monthly Pricing
export const TOP_DEMANDING_CARS = [
  // ================= 5 SEATER HATCHBACK CARS =================
  {
    id: 1,
    name: 'Maruti Swift Manual Transmission',
    category: 'hatchback',
    badge: '#1 Top Demanding Hatchback',
    badgeColor: '#10b981',
    dailyPrice: '1,499',
    weeklyPrice: '8,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '24,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual Transmission',
    fuel: 'Petrol',
    image: '/assets/img/cars/Swift.png',
    features: ['Zero Security Deposit', 'Free Doorstep Delivery', 'High Fuel Mileage (22+ km/l)'],
  },
  {
    id: 2,
    name: 'Maruti Swift Automatic',
    category: 'hatchback',
    badge: 'Effortless City Drive',
    badgeColor: '#10b981',
    dailyPrice: '1,699',
    weeklyPrice: '9,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '26,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Automatic (AMT)',
    fuel: 'Petrol',
    image: '/assets/img/cars/Swift.png',
    features: ['Clutch-Free Driving', 'Touchscreen SmartPlay', 'Smooth Traffic Commute'],
  },
  {
    id: 3,
    name: 'Maruti Baleno Manual & Automatic',
    category: 'hatchback',
    badge: 'Premium Nexa Hatchback',
    badgeColor: '#3b82f6',
    dailyPrice: '1,799',
    weeklyPrice: '10,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '28,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol',
    image: '/assets/img/cars/Baleno.png',
    features: ['Spacious Rear Legroom', '9-inch HD Display', '360 View Camera'],
  },
  {
    id: 4,
    name: 'Hyundai i20 Manual & Automatic',
    category: 'hatchback',
    badge: 'Sporty & Feature-Packed',
    badgeColor: '#ffb907',
    dailyPrice: '1,899',
    weeklyPrice: '10,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '29,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol',
    image: '/assets/img/cars/i20.png',
    features: ['Electric Sunroof', 'Bose Premium Audio', 'Air Purifier Equipped'],
  },

  // ================= 5 SEATER MINI SUV CARS =================
  {
    id: 5,
    name: 'Maruti Suzuki Fronx Manual & Automatic',
    category: 'minisuv',
    badge: 'Turbo Crossover Mini SUV',
    badgeColor: '#ec4899',
    dailyPrice: '2,199',
    weeklyPrice: '12,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '34,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol / Boosterjet Turbo',
    image: '/assets/img/cars/Fronx.png',
    features: ['High 190mm Ground Clearance', 'Wireless Apple CarPlay', 'Heads-Up Display'],
  },
  {
    id: 6,
    name: 'Hyundai Venue Manual & Automatic',
    category: 'minisuv',
    badge: 'Smart Compact Mini SUV',
    badgeColor: '#8b5cf6',
    dailyPrice: '2,299',
    weeklyPrice: '13,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '36,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol / Diesel',
    image: '/assets/img/cars/5-Venue.png',
    features: ['Bluelink Connected Car', 'Power Driver Seat', 'Cornering Lamps'],
  },
  {
    id: 7,
    name: 'Tata Punch Manual & Automatic',
    category: 'minisuv',
    badge: '5-Star Global NCAP Safety',
    badgeColor: '#10b981',
    dailyPrice: '1,999',
    weeklyPrice: '11,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '31,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol',
    image: '/assets/img/cars/Tata-Punch.png',
    features: ['High Seating & Road View', 'Tough SUV Dynamics', 'Traction Pro Mode'],
  },

  // ================= 5 SEATER SUV CARS =================
  {
    id: 8,
    name: 'Maruti Suzuki Brezza Manual & Automatic',
    category: 'suv5',
    badge: 'High Reliability Urban SUV',
    badgeColor: '#f97316',
    dailyPrice: '2,499',
    weeklyPrice: '14,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '39,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Smart Hybrid Petrol',
    image: '/assets/img/cars/5-Brezza.png',
    features: ['Electric Sunroof', '360 Degree Camera', 'Superb Fuel Mileage'],
  },
  {
    id: 9,
    name: 'Tata Nexon Manual & Automatic',
    category: 'suv5',
    badge: '5-Star Safety Champion',
    badgeColor: '#10b981',
    dailyPrice: '2,499',
    weeklyPrice: '14,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '39,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol / Diesel',
    image: '/assets/img/cars/5-NEXON.png',
    features: ['Ventilated Front Seats', 'Multi-Drive Modes', 'Full Digital Cluster'],
  },
  {
    id: 10,
    name: 'Tata Harrier Manual & Automatic',
    category: 'suv5',
    badge: 'Dominant Road Presence',
    badgeColor: '#dc2626',
    dailyPrice: '3,499',
    weeklyPrice: '19,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '54,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: '2.0L Kryotec Diesel',
    image: '/assets/img/cars/5-Harrier.png',
    features: ['Panoramic Sunroof', 'JBL 9-Speaker Audio', 'Land Rover D8 Platform'],
  },
  {
    id: 11,
    name: 'Kia Seltos Manual & Automatic',
    category: 'suv5',
    badge: 'Executive Highway SUV',
    badgeColor: '#3b82f6',
    dailyPrice: '2,899',
    weeklyPrice: '16,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '46,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol / Diesel',
    image: '/assets/img/cars/5-Seltos.png',
    features: ['Dual-Zone Climate Control', 'Panoramic Dual Screens', 'Bose Premium Audio'],
  },
  {
    id: 12,
    name: 'Hyundai Creta Manual & Automatic',
    category: 'suv5',
    badge: '#1 Most Demanded SUV',
    badgeColor: '#ffb907',
    dailyPrice: '2,899',
    weeklyPrice: '16,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '46,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol / Diesel',
    image: '/assets/img/2023-6.png',
    features: ['Panoramic Voice Sunroof', 'Ventilated Front Seats', 'Level 2 ADAS Safety'],
  },
  {
    id: 13,
    name: 'Mahindra Thar 4x4 Manual & Automatic',
    category: 'suv5',
    badge: 'Legendary 4x4 Off-Roader',
    badgeColor: '#ef4444',
    dailyPrice: '3,499',
    weeklyPrice: '19,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '52,999',
    monthlySavings: 'Save 50%',
    seats: 4,
    transmission: 'Manual 4x4 & Automatic',
    fuel: '2.2L mHawk Diesel',
    image: '/assets/img/cars/5-Thar.png',
    features: ['Shift-on-the-Fly 4WD', 'Convertible Hard Top', 'All-Terrain Muscular Stance'],
  },
  {
    id: 14,
    name: 'Mahindra Thar Roxx 5-Door Manual & Automatic',
    category: 'suv5',
    badge: 'All-New 5-Door Thar Roxx',
    badgeColor: '#d97706',
    dailyPrice: '3,999',
    weeklyPrice: '22,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '59,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Diesel mHawk',
    image: '/assets/img/cars/5-Thar.png',
    features: ['Spacious 5-Door Cabin', 'Panoramic Skyroof', 'Harman Kardon Audio'],
  },

  // ================= 7 SEATER SUV & MUV CARS =================
  {
    id: 15,
    name: 'Mahindra XUV 700 Manual & Automatic',
    category: 'suv7',
    badge: 'Flagship Luxury 7-Seater',
    badgeColor: '#8b5cf6',
    dailyPrice: '3,799',
    weeklyPrice: '21,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '58,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Manual & Automatic',
    fuel: 'Diesel / Petrol',
    image: '/assets/img/cars/7-XUV700.png',
    features: ['Panoramic Skyroof', 'Sony 3D Surround Sound', 'AdrenoX AI Cockpit'],
  },
  {
    id: 16,
    name: 'Kia Carens Manual & Automatic',
    category: 'suv7',
    badge: 'Plush 7-Seater Family Cruiser',
    badgeColor: '#3b82f6',
    dailyPrice: '2,799',
    weeklyPrice: '16,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '44,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol / Diesel',
    image: '/assets/img/cars/7-Kia Carens.png',
    features: ['One-Touch Electric Tumble', 'Roof AC Vents for 3 Rows', 'Bose 8-Speaker Audio'],
  },
  {
    id: 17,
    name: 'Maruti Suzuki Ertiga Manual & Automatic',
    category: 'suv7',
    badge: '#1 Best Mileage 7-Seater',
    badgeColor: '#10b981',
    dailyPrice: '2,499',
    weeklyPrice: '14,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '38,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Manual & Automatic',
    fuel: 'Smart Hybrid Petrol / CNG',
    image: '/assets/img/cars/7-Ertiga.png',
    features: ['Dual AC with 2nd Row Controls', 'Flexible 7-Seat Layout', 'Low Fuel Consumption'],
  },
  {
    id: 18,
    name: 'Toyota Innova Crysta Manual & Automatic',
    category: 'suv7',
    badge: 'Undisputed Highway King',
    badgeColor: '#ffb907',
    dailyPrice: '3,899',
    weeklyPrice: '22,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '59,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Manual & Automatic',
    fuel: '2.4L Diesel',
    image: '/assets/img/cars/7-Innova Crysta.png',
    features: ['Captain Seats 2nd Row', 'Rear Climate Control AC', 'Bulletproof Highway Reliability'],
  },
  {
    id: 19,
    name: 'Toyota Innova Hycross Automatic',
    category: 'suv7',
    badge: 'Hybrid Ultra-Luxury MPV',
    badgeColor: '#059669',
    dailyPrice: '4,499',
    weeklyPrice: '26,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '69,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Automatic (Self-Charging Hybrid)',
    fuel: 'Strong Hybrid Petrol',
    image: '/assets/img/cars/7-Innova Crysta.png',
    features: ['Ottoman Reclining Captain Seats', 'Panoramic Sunroof', 'Silent EV Mode Driving'],
  },
  {
    id: 20,
    name: 'Toyota Fortuner 4x4 Manual & Automatic',
    category: 'suv7',
    badge: 'Dominant VIP & Highway SUV',
    badgeColor: '#8b5cf6',
    dailyPrice: '5,999',
    weeklyPrice: '34,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '89,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Manual 4x4 & Automatic',
    fuel: '2.8L Diesel',
    image: '/assets/img/cars/7-Fortuner.png',
    features: ['4x4 High/Low Range', 'Commanding Road Presence', 'JBL 11-Speaker Audio'],
  },
  {
    id: 21,
    name: 'Kia Carnival Automatic Limousine',
    category: 'suv7',
    badge: 'VIP Ultra-Luxury Limousine',
    badgeColor: '#d97706',
    dailyPrice: '5,499',
    weeklyPrice: '31,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '84,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Automatic',
    fuel: '2.2L Diesel',
    image: '/assets/img/cars/7-KiaCarnival.png',
    features: ['Dual Sunroofs', 'Electric Sliding Lounge Doors', 'VIP Reclining Captain Chairs'],
  },

  // ================= 5 SEATER SEDAN CARS =================
  {
    id: 22,
    name: 'Hyundai Verna Manual & Automatic',
    category: 'sedan',
    badge: 'High-Speed Turbo Performance',
    badgeColor: '#dc2626',
    dailyPrice: '2,499',
    weeklyPrice: '14,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '39,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic (DCT)',
    fuel: '1.5L Turbo Petrol',
    image: '/assets/img/cars/seden-Verna.png',
    features: ['Bose 8-Speaker Audio', 'Heated & Ventilated Seats', 'Level 2 ADAS Safety'],
  },
  {
    id: 23,
    name: 'Maruti Swift Dzire Manual & Automatic',
    category: 'sedan',
    badge: '#1 Top Budget Executive Sedan',
    badgeColor: '#10b981',
    dailyPrice: '1,999',
    weeklyPrice: '11,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '29,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Petrol / CNG',
    image: '/assets/img/cars/seden-dzire.png',
    features: ['Rear AC Vents', '378L Boot Space', 'High Mileage Highway Ride'],
  },
  {
    id: 24,
    name: 'Maruti Suzuki Ciaz Manual & Automatic',
    category: 'sedan',
    badge: 'Executive Rear Legroom',
    badgeColor: '#3b82f6',
    dailyPrice: '2,299',
    weeklyPrice: '13,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '34,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic',
    fuel: 'Smart Hybrid Petrol',
    image: '/assets/img/cars/seden-Ciaz.png',
    features: ['Plush Leather Seats', 'Rear Sunshade', 'Super Smooth Highway Cruise'],
  },
  {
    id: 25,
    name: 'Volkswagen Virtus Manual & Automatic',
    category: 'sedan',
    badge: 'German High-Performance Sedan',
    categorySecondary: 'sedan',
    badgeColor: '#8b5cf6',
    dailyPrice: '2,799',
    weeklyPrice: '16,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '42,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Manual & Automatic (DSG)',
    fuel: 'TSI Turbo Petrol',
    image: '/assets/img/cars/seden-City.png',
    features: ['5-Star Global NCAP Safety', '521L Massive Boot', 'Dynamic Paddle Shifters'],
  },
  {
    id: 26,
    name: 'Skoda Slavia Automatic Only',
    category: 'sedan',
    badge: 'European Luxury & Refinement',
    categorySecondary: 'sedan',
    badgeColor: '#059669',
    dailyPrice: '2,799',
    weeklyPrice: '16,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '42,999',
    monthlySavings: 'Save 50%',
    seats: 5,
    transmission: 'Automatic Only (Torque Converter / DSG)',
    fuel: 'TSI Turbo Petrol',
    image: '/assets/img/cars/seden-City.png',
    features: ['Ventilated Front Seats', 'Electric Sunroof', 'Precision Steering Dynamics'],
  },
  {
    id: 27,
    name: 'Mahindra Scorpio-N Automatic Only',
    category: 'suv7',
    categorySecondary: 'sedan',
    badge: 'The Big Daddy of SUVs',
    badgeColor: '#ef4444',
    dailyPrice: '3,499',
    weeklyPrice: '20,499',
    weeklySavings: 'Save 25%',
    monthlyPrice: '52,999',
    monthlySavings: 'Save 50%',
    seats: 7,
    transmission: 'Automatic Only (4x4 Ready)',
    fuel: '2.2L mHawk Diesel',
    image: '/assets/img/cars/7-Compass.png',
    features: ['Frequency Selective Damping', 'Sony 12-Speaker 3D Audio', 'Muscular Road Stance'],
  },
  {
    id: 28,
    name: 'Maruti Suzuki XL6 Manual & Automatic',
    category: 'suv7',
    categorySecondary: 'sedan',
    badge: 'Premium 6-Seater Captain Chairs',
    badgeColor: '#3b82f6',
    dailyPrice: '2,699',
    weeklyPrice: '15,999',
    weeklySavings: 'Save 25%',
    monthlyPrice: '41,999',
    monthlySavings: 'Save 50%',
    seats: 6,
    transmission: 'Manual & Automatic',
    fuel: 'Smart Hybrid Petrol',
    image: '/assets/img/cars/7-Ertiga.png',
    features: ['All-Black Leather Interiors', 'Ventilated Front Seats', 'Cruise Control & Captain Chairs'],
  },
];

export default function CarOffersSection({ initialCars = [] }) {
  const [activeTab, setActiveTab] = useState('all');
  const [planType, setPlanType] = useState('daily'); // 'daily' | 'weekly' | 'monthly'
  const [searchQuery, setSearchQuery] = useState('');

  // Use the comprehensive 28 top demanding cars catalog as the primary fleet,
  // gracefully appending any custom CMS cars passed from Sanity
  const cmsCarsMapped = (initialCars && initialCars.length > 0)
    ? initialCars
        .filter((c) => !TOP_DEMANDING_CARS.some((tc) => tc.name.toLowerCase() === c.name?.toLowerCase()))
        .map((car, idx) => {
          let cat = 'sedan';
          if (['suv5', 'suv'].includes(car.category)) cat = 'suv5';
          else if (['suv7'].includes(car.category)) cat = 'suv7';
          else if (['hatchback'].includes(car.category)) cat = 'hatchback';
          else if (['minisuv'].includes(car.category)) cat = 'minisuv';

          const dailyPriceNum = typeof car.pricePerDay === 'number' ? car.pricePerDay : 2499;
          const weeklyPriceNum = Math.round(dailyPriceNum * 7 * 0.75);
          const monthlyPriceNum = Math.round(dailyPriceNum * 30 * 0.50);

          return {
            id: `cms-${car._id || idx}`,
            name: car.name,
            category: cat,
            badge: car.badge || 'Popular Deal',
            badgeColor: '#ffb907',
            dailyPrice: dailyPriceNum.toLocaleString('en-IN'),
            weeklyPrice: weeklyPriceNum.toLocaleString('en-IN'),
            weeklySavings: 'Save 25%',
            monthlyPrice: monthlyPriceNum.toLocaleString('en-IN'),
            monthlySavings: 'Save 50%',
            seats: car.seats || 5,
            transmission: car.transmission || 'Manual & Automatic',
            fuel: car.fuelType || car.fuel || 'Petrol',
            image: car.imageUrl || car.image || '/assets/img/cars/Swift.png',
            features: car.features && car.features.length > 0 ? car.features : ['Zero Deposit', 'Sanitized'],
          };
        })
    : [];

  const activeFleet = [...TOP_DEMANDING_CARS, ...cmsCarsMapped];

  const filteredCars = activeFleet.filter((car) => {
    // Search query matching
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = car.name.toLowerCase().includes(q);
      const matchTrans = car.transmission.toLowerCase().includes(q);
      const matchFuel = car.fuel.toLowerCase().includes(q);
      const matchBadge = car.badge.toLowerCase().includes(q);
      if (!matchName && !matchTrans && !matchFuel && !matchBadge) return false;
    }

    // Category tab matching
    if (activeTab === 'all') return true;
    if (activeTab === 'hatchback') return car.category === 'hatchback';
    if (activeTab === 'minisuv') return car.category === 'minisuv';
    if (activeTab === 'suv5') return car.category === 'suv5';
    if (activeTab === 'suv7') return car.category === 'suv7' || car.categorySecondary === 'suv7';
    if (activeTab === 'sedan') return car.category === 'sedan' || car.categorySecondary === 'sedan';
    return true;
  });

  const getPriceData = (car) => {
    // Pricing temporarily masked/commented as per client instruction until official rates are finalized.
    // Displaying "Tariff on Request" / "Enquire for Best Rate" badges with direct Contact & Enquire actions.
    if (planType === 'weekly') {
      return {
        price: 'Tariff on Request',
        unit: 'Weekly Package',
        effectiveText: 'Special 7-Day Package • Zero Deposit',
        savingsTag: 'Weekly Deal',
        savingsColor: '#2563eb',
      };
    }
    if (planType === 'monthly') {
      return {
        price: 'Tariff on Request',
        unit: 'Monthly Subscription',
        effectiveText: 'Long Term Savings • Free Doorstep Service',
        savingsTag: 'Monthly Deal',
        savingsColor: '#10b981',
      };
    }
    return {
      price: 'Tariff on Request',
      unit: 'Daily Rental',
      effectiveText: 'Unlimited Freedom • Zero Deposit Options',
      savingsTag: null,
      savingsColor: null,
    };
  };

  return (
    <section className="car-offers-section section_70" style={{ background: '#f8fafc', padding: '80px 0' }}>
      <div className="container">
        {/* Section Heading with Target Keywords */}
        <div className="site-heading text-center" style={{ width: '100%', maxWidth: '840px', margin: '0 auto 30px' }}>
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
            ✦ TOP DEMANDING FLEET • HYDERABAD
          </h4>
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#0f172a',
              margin: '0 0 10px',
              display: 'block',
              width: '100%',
              lineHeight: 1.25,
            }}
          >
            Daily, Weekly &amp; Monthly Car Rentals in Hyderabad
          </h2>
          <p style={{ color: '#64748b', fontSize: '15px', margin: 0, lineHeight: 1.6 }}>
            Explore Hyderabad's most popular, top-demanding self drive cars with <strong>Manual &amp; Automatic</strong> transmissions.
            Choose between <strong>Daily Deals</strong>, <strong>Weekly Rentals</strong>, or <strong>Monthly Subscriptions</strong> with zero deposit and doorstep delivery. Enquire now for custom rates and instant delivery.
          </p>
        </div>

        {/* 3-Way Pricing Plan Toggle: Daily | Weekly | Monthly */}
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
              padding: '5px',
              borderRadius: '40px',
              boxShadow: '0 4px 18px rgba(0,0,0,0.06)',
              display: 'flex',
              border: '1px solid #e2e8f0',
              maxWidth: '560px',
              width: '100%',
              gap: '4px',
            }}
          >
            {/* Daily Button */}
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
                padding: '10px 12px',
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

            {/* Weekly Button */}
            <button
              type="button"
              onClick={() => setPlanType('weekly')}
              style={{
                flex: 1,
                border: 'none',
                background: planType === 'weekly' ? '#ffb907' : 'transparent',
                color: planType === 'weekly' ? '#000000' : '#475569',
                fontWeight: 700,
                fontSize: '13px',
                padding: '10px 12px',
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
              <i className="fa fa-calendar" /> <span>Weekly (7 Days)</span>{' '}
              <span
                style={{
                  background: '#2563eb',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '2px 6px',
                  borderRadius: '10px',
                }}
              >
                7-Day Deal
              </span>
            </button>

            {/* Monthly Button */}
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
                padding: '10px 12px',
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
              <i className="fa fa-refresh" /> <span>Monthly (30 Days)</span>{' '}
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
                Monthly Deal
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
            marginBottom: '20px',
          }}
        >
          {[
            { id: 'all', label: `All Fleet (${activeFleet.length})` },
            { id: 'hatchback', label: '5-Seater Hatchbacks (4)' },
            { id: 'minisuv', label: 'Mini SUVs (3)' },
            { id: 'suv5', label: '5-Seater SUVs (7)' },
            { id: 'suv7', label: '7-Seater SUVs & MUVs (9)' },
            { id: 'sedan', label: '5-Seater Sedans (7)' },
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
                padding: '8px 16px',
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

        {/* Search & Filter Bar */}
        <div style={{ maxWidth: '480px', margin: '0 auto 35px', position: 'relative' }}>
          <input
            type="text"
            placeholder="🔍 Search car name, Automatic, Thar, Creta, 7 Seater..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px',
              paddingLeft: '38px',
              borderRadius: '25px',
              border: '1px solid #cbd5e1',
              background: '#ffffff',
              fontSize: '14px',
              outline: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
          />
          <i
            className="fa fa-search"
            style={{ position: 'absolute', left: '16px', top: '14px', color: '#94a3b8', fontSize: '13px' }}
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute',
                right: '12px',
                top: '9px',
                border: 'none',
                background: '#e2e8f0',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                fontSize: '11px',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          )}
        </div>

        {/* Cars Showcase Grid */}
        <div className="row g-4">
          {filteredCars.map((car) => {
            const { price, unit, effectiveText, savingsTag, savingsColor } = getPriceData(car);
            const planLabel = planType.toUpperCase();
            const whatsappMsg = `Hi DRIVEIT Cars, I am interested in booking the ${car.name} on ${planLabel} rental. Please share vehicle availability, best rate quotation, and doorstep delivery options.`;

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
                  {/* Card Header & Vehicle Image */}
                  <div
                    style={{
                      position: 'relative',
                      background: 'radial-gradient(circle, #f8fafc 0%, #e2e8f0 100%)',
                      height: '215px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                    }}
                  >
                    <img
                      src={car.image}
                      alt={`${car.name} daily weekly monthly car rental Hyderabad`}
                      loading="lazy"
                      style={{
                        maxHeight: '165px',
                        maxWidth: '90%',
                        width: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.3s ease',
                      }}
                    />

                    {/* Top Left Badge */}
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

                    {/* Top Right Savings Badge */}
                    {savingsTag && (
                      <span
                        style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: savingsColor,
                          color: '#ffffff',
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '4px 10px',
                          borderRadius: '20px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                        }}
                      >
                        {savingsTag}
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px', lineHeight: 1.3 }}>
                        {car.name}
                      </h4>
                      <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            background: '#eff6ff',
                            color: '#1d4ed8',
                            fontWeight: 700,
                            padding: '2px 8px',
                            borderRadius: '4px',
                          }}
                        >
                          ⚙️ {car.transmission}
                        </span>
                      </div>
                    </div>

                    {/* Pricing Row - Commented out numeric rates, displaying Tariff on Request & Enquire */}
                    <div style={{ marginTop: '10px', marginBottom: '14px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            fontSize: '17px',
                            fontWeight: 800,
                            color: '#92400e',
                            background: '#fef3c7',
                            padding: '6px 12px',
                            borderRadius: '8px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            border: '1px solid #fde68a',
                          }}
                        >
                          <i className="fa fa-tag" style={{ color: '#d97706', fontSize: '13px' }} />
                          {price}
                        </span>
                        <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 700 }}>({unit})</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#059669', fontWeight: 700, marginTop: '6px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <i className="fa fa-check-circle" /> {effectiveText}
                      </div>
                    </div>

                    {/* Specs Pill List */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '12px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px' }}>
                        <i className="fa fa-users" style={{ marginRight: 4, color: '#ffb907' }} /> {car.seats} Seats
                      </span>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '12px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px' }}>
                        <i className="fa fa-tint" style={{ marginRight: 4, color: '#ffb907' }} /> {car.fuel}
                      </span>
                      <span style={{ background: '#f1f5f9', color: '#334155', fontSize: '12px', fontWeight: 600, padding: '4px 8px', borderRadius: '6px' }}>
                        <i className="fa fa-road" style={{ marginRight: 4, color: '#ffb907' }} /> 300 KMs/Day
                      </span>
                    </div>

                    {/* Included Features */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', flexGrow: 1 }}>
                      {car.features.map((feat, i) => (
                        <li key={i} style={{ fontSize: '12px', color: '#475569', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <i className="fa fa-check-circle" style={{ color: '#10b981', fontSize: '13px' }} />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons: Call & WhatsApp with Pre-filled Text */}
                    <div className="car-card-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto' }}>
                      <a
                        href="tel:+916300041186"
                        className="car-card-btn car-card-call"
                        style={{
                          background: '#0f172a',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '12px',
                          padding: '10px 6px',
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
                          padding: '10px 6px',
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
                        <i className="fa fa-whatsapp" /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO Keyword Pills Strip for All 28 Cars */}
        <div style={{ marginTop: '45px', padding: '24px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
              ✦ Top Demanding Self Drive Car Rentals in Hyderabad (Daily • Weekly • Monthly):
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 12px', fontSize: '12px', color: '#475569' }}>
            <Link href="/self-drive-car" style={{ color: '#0f172a', fontWeight: 600 }}>Swift Manual Rental</Link>
            <span>•</span>
            <Link href="/self-drive-car" style={{ color: '#0f172a', fontWeight: 600 }}>Swift Automatic Rental</Link>
            <span>•</span>
            <Link href="/self-drive-car" style={{ color: '#0f172a', fontWeight: 600 }}>Baleno Self Drive</Link>
            <span>•</span>
            <Link href="/self-drive-car" style={{ color: '#0f172a', fontWeight: 600 }}>Hyundai i20 Rental</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Suzuki Fronx Mini SUV</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Hyundai Venue Rental</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Tata Punch Rental</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Brezza Automatic &amp; Manual</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Tata Nexon Rental</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Tata Harrier Self Drive</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Kia Seltos Rental</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Hyundai Creta Self Drive</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Mahindra Thar 4x4 Rental</Link>
            <span>•</span>
            <Link href="/self-drive-suv-hyderabad" style={{ color: '#0f172a', fontWeight: 600 }}>Thar Roxx 5-Door Rental</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Mahindra XUV 700 Rental</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Kia Carens 7-Seater</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Ertiga Self Drive Hyderabad</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Innova Crysta Rental</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Innova Hycross Automatic</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Toyota Fortuner 4x4</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Kia Carnival Limousine</Link>
            <span>•</span>
            <Link href="/sedan" style={{ color: '#0f172a', fontWeight: 600 }}>Hyundai Verna Rental</Link>
            <span>•</span>
            <Link href="/sedan" style={{ color: '#0f172a', fontWeight: 600 }}>Swift Dzire Rental</Link>
            <span>•</span>
            <Link href="/sedan" style={{ color: '#0f172a', fontWeight: 600 }}>Maruti Ciaz Self Drive</Link>
            <span>•</span>
            <Link href="/sedan" style={{ color: '#0f172a', fontWeight: 600 }}>Volkswagen Virtus Rental</Link>
            <span>•</span>
            <Link href="/sedan" style={{ color: '#0f172a', fontWeight: 600 }}>Skoda Slavia Automatic</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Mahindra Scorpio Automatic</Link>
            <span>•</span>
            <Link href="/suv7" style={{ color: '#0f172a', fontWeight: 600 }}>Suzuki XL6 6-Seater</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
