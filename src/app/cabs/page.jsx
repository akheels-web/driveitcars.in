import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, { buildCarRentalSchema, buildBreadcrumbSchema, buildFaqSchema } from '@/components/SeoSchema';
import { SERVICE_VEHICLE_IMAGES } from '@/data/service-vehicle-images';
import styles from '@/components/ServiceFleet.module.css';

export const metadata = {
  title: 'Cab Service in Hyderabad | Airport, City & Outstation Cabs | DriveItCars',
  description: 'Book chauffeur-driven cabs in Hyderabad with DriveItCars. City trips, RGIA airport pickup and drop, and outstation journeys in hatchback, sedan and family cabs.',
  alternates: { canonical: 'https://www.driveitcars.in/cabs' },
  openGraph: {
    title: 'Hyderabad Cab Service with Driver | DriveItCars',
    description: 'Plan city rides, airport transfers and outstation cab trips with a professional driver. Contact DriveItCars for vehicle availability and your trip quote.',
    url: 'https://www.driveitcars.in/cabs',
    siteName: 'DriveItCars Hyderabad',
    images: [{ url: SERVICE_VEHICLE_IMAGES.cabDzire, width: 1200, height: 800, alt: 'Representative chauffeur cab with a yellow commercial number plate' }],
  },
};

const CAB_FAQS = [
  { question: 'Does the cab booking include a driver?', answer: 'Yes. Every cab on this page is booked with a professional driver for your city, airport or outstation journey. Share your itinerary so the team can confirm a suitable cab and trip quote.' },
  { question: 'Can I book an airport pickup or drop at RGIA?', answer: 'Yes. Share your flight number, arrival or departure time, pickup address, passenger count and luggage details. The team will confirm the pickup arrangement and cab availability for Rajiv Gandhi International Airport, Shamshabad.' },
  { question: 'Which cab should I choose for a family or group?', answer: 'An Ertiga or Innova Crysta is suitable for a larger group. Passenger and luggage space depends on the seating configuration, so confirm both with the team when booking. Innova Crysta enquiries can include 7-seat and 8-seat requirements.' },
  { question: 'Do you provide outstation cabs from Hyderabad?', answer: 'Yes. Contact DriveItCars with your destination, travel dates, stops and return plan for a chauffeur-driven outstation cab quote.' },
  { question: 'What should I confirm before booking a cab?', answer: 'Confirm the vehicle category, pickup point, itinerary, passenger and luggage capacity, quoted fare, waiting time, tolls, parking and any driver allowances before the booking is finalised.' },
];

const CABS_FLEET = [
  { id: 'hatchback-cab', name: 'Swift / WagonR City Cab', seats: '5-seat category', image: SERVICE_VEHICLE_IMAGES.cabSwift, description: 'A compact cab with a driver for local appointments, errands and lighter airport luggage.', features: ['Professional driver included', 'Air-conditioned cabin', 'City rides and airport transfers'] },
  { id: 'sedan-cab', name: 'Dzire / Etios Sedan Cab', seats: '5-seat category', image: SERVICE_VEHICLE_IMAGES.cabDzire, description: 'A comfortable sedan cab for business visits, airport pickup and intercity journeys.', features: ['Professional driver included', 'Separate luggage boot', 'City and outstation bookings'] },
  { id: 'ertiga-cab', name: 'Ertiga Family Cab', seats: '7-seat category', image: SERVICE_VEHICLE_IMAGES.cabErtiga, description: 'A family cab for group outings, airport transfers and trips with multiple stops.', features: ['Professional driver included', 'Flexible passenger and luggage space', 'Family and group travel'] },
  { id: 'innova-cab', name: 'Innova Crysta Premium Cab', seats: '7 / 8-seat enquiries', image: SERVICE_VEHICLE_IMAGES.cabCrysta, description: 'A spacious chauffeur-driven cab for longer journeys, family trips and corporate airport transfers.', features: ['Professional driver included', 'Comfortable intercity travel', 'Confirm seating and luggage at booking'] },
];

export default function CabsPage() {
  const cabSchema = buildCarRentalSchema({ name: 'DriveItCars Chauffeur Cab Service Hyderabad', description: 'Chauffeur-driven cab service for Hyderabad city trips, RGIA airport transfers and outstation journeys.', url: 'https://www.driveitcars.in/cabs', areaServed: ['Hyderabad', 'Rajiv Gandhi International Airport', 'Secunderabad', 'Telangana'] });
  cabSchema.image = SERVICE_VEHICLE_IMAGES.cabDzire;
  cabSchema.makesOffer = [{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chauffeur-driven cab service', description: 'Cab bookings with a professional driver for Hyderabad city rides, RGIA airport pickup and drop, and outstation journeys.' } }];
  return (
    <div className={styles.cabPage}>
      <SeoSchema schema={cabSchema} />
      <SeoSchema schema={buildBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Cab Service Hyderabad', url: '/cabs' }])} />
      <SeoSchema schema={buildFaqSchema(CAB_FAQS)} />

      <section className="gauto-breadcromb-area section_70">
        <div className="container"><div className="breadcromb-box">
          <h1>Cab service in Hyderabad</h1>
          <p>City rides, airport transfers and outstation journeys with a professional driver.</p>
          <ul><li><Link href="/">Home</Link></li><li aria-hidden="true">/</li><li>Cabs</li></ul>
        </div></div>
      </section>

      <section className="section_70">
        <div className="container">
          <div className={styles.intro}>
            <h2>A comfortable cab for every part of your trip</h2>
            <p>Book a cab with DriveItCars for your office visit, family outing, airport connection or outstation journey. Tell us where you need to go, when you want to leave and how many people are travelling. Our team will help you choose a suitable chauffeur-driven cab.</p>
            <div className={styles.introActions}>
              <a href="#cab-fleet" className="gauto-btn">Explore cab options <i className="fa fa-arrow-down" aria-hidden="true" /></a>
              <a href="tel:+916300041186" className={styles.secondaryAction}>Call the cab desk</a>
            </div>
          </div>
          <div className={styles.services}>
            <article className={styles.service}><i className="fa fa-map-marker" aria-hidden="true" /><h3>Hyderabad city cabs</h3><p>Plan local appointments, office commutes, shopping trips and family visits with a driver who handles the journey.</p></article>
            <article className={styles.service}><i className="fa fa-plane" aria-hidden="true" /><h3>Airport pickup &amp; drop</h3><p>Arrange a cab between your address and RGIA Shamshabad. Share your flight timing and luggage needs when booking.</p></article>
            <article className={styles.service}><i className="fa fa-road" aria-hidden="true" /><h3>Outstation cab trips</h3><p>Share your destination, travel dates and planned stops for a suitable cab and driver for your intercity itinerary.</p></article>
          </div>
        </div>
      </section>

      <section id="cab-fleet" className={[styles.fleet, 'section_70'].join(' ')}>
        <div className="container">
          <div className="site-heading text-center"><h4>Chauffeur-driven cab options</h4><h2>Choose a cab for your journey</h2><p>Every option below includes a driver. Confirm passenger space, luggage and the trip quote with our team.</p></div>
          <p className={styles.illustrationNote}>Representative vehicle illustrations with yellow commercial plates. Exact model, colour and seating configuration are confirmed when booking.</p>
          <div className="row g-4">
            {CABS_FLEET.map(cab => (
              <div className="col-lg-6 col-md-6 mb-4" key={cab.id}>
                <article className="single-offers">
                  <div className="offer-image"><img src={cab.image} alt={cab.name + ' with a yellow commercial number plate for chauffeur cab service in Hyderabad'} width="1200" height="800" loading="lazy" /></div>
                  <div className="offer-text">
                    <span className={styles.cabBadge}>{cab.seats} · Driver included</span>
                    <h3>{cab.name}</h3>
                    <p className={styles.cabDetails}>{cab.description}</p>
                    <ul className={styles.cabFeatures}>{cab.features.map(feature => <li key={feature}><i className="fa fa-check" aria-hidden="true" />{feature}</li>)}</ul>
                    <div className="offer-action">
                      <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone" aria-hidden="true" /> Call cab desk</a>
                      <a href={'https://api.whatsapp.com/send?phone=+916300041186&text=' + encodeURIComponent('Hi DriveItCars, I would like to book a ' + cab.name + ' with a driver. Please share availability and a quote for my city, airport or outstation trip.')} className="offer-btn-2" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp" aria-hidden="true" /> WhatsApp</a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section_70">
        <div className="container"><div className={styles.booking}>
          <h2>Plan your cab booking</h2>
          <ol><li>Share your pickup address, destination and travel date.</li><li>Tell us your passenger count, luggage needs and any planned stops.</li><li>Confirm the cab category, itinerary and complete quote before travel.</li></ol>
          <p>For airport journeys, include your flight number and arrival or departure time. For outstation trips, include your return date and overnight stops.</p>
          <a className="gauto-btn" href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DriveItCars%2C%20I%20would%20like%20a%20chauffeur-driven%20cab%20quote%20for%20my%20trip." target="_blank" rel="noopener noreferrer">Request a cab quote</a>
        </div></div>
      </section>
      <FaqSection items={CAB_FAQS} title="Cab booking questions" subtitle="Helpful details for city rides, airport transfers and outstation cab journeys." />
    </div>
  );
}
