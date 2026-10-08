import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Self Drive Cars in Hyderabad | Unlimited Kms, Zero Deposit | DRIVEIT',
  description:
    'Book self drive cars in Hyderabad with DRIVEIT. Wide range of hatchbacks, sedans, SUVs & luxury cars. Doorstep delivery across HITEC City, Gachibowli & Airport. Enquire for best rates.',
  alternates: {
    canonical: 'https://www.driveitcars.in/self-drive-car',
  },
  openGraph: {
    title: 'Self Drive Cars in Hyderabad | DRIVEIT Car Rentals',
    description:
      'Rent sanitized self drive cars in Hyderabad with zero deposit & doorstep delivery. Hatchbacks, sedans, 5 & 7 seater SUVs, and luxury cars.',
    url: 'https://www.driveitcars.in/self-drive-car',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/suv.jpg',
        width: 1200,
        height: 630,
        alt: 'Self Drive Cars Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Self Drive Cars in Hyderabad | Unlimited Kms | DRIVEIT',
    description: 'Best self drive car rental in Hyderabad with unlimited kms, zero deposit, and 24/7 delivery.',
  },
};

const SELF_DRIVE_FAQS = [
  {
    question: 'How do I book self drive cars in Hyderabad with DRIVEIT?',
    answer:
      'Booking a self drive car in Hyderabad is 100% digital and takes under 5 minutes. Select your preferred hatchback, sedan, or SUV on our website, or contact us directly on WhatsApp (+91 6300041186). Submit your driving licence and Aadhaar card for instant digital verification, and we deliver the sanitized car to your doorstep anywhere in Hyderabad.',
  },
  {
    question: 'Where can I get doorstep delivery of self drive cars in Hyderabad?',
    answer:
      'We provide 15 to 30-minute doorstep delivery across all major Hyderabad zones including HITEC City, Gachibowli, Madhapur, Kondapur, Banjara Hills, Jubilee Hills, Begumpet, Secunderabad, Kukatpally, and Rajiv Gandhi International Airport (RGIA Shamshabad).',
  },
  {
    question: 'What is the security deposit for renting self drive cars in Hyderabad?',
    answer:
      'DRIVEIT offers zero security deposit options on select fleet vehicles for verified corporate and IT professionals. For other bookings, we hold a nominal refundable security deposit that is returned within 24 hours of vehicle drop-off.',
  },
  {
    question: 'Are self drive SUVs available for outstation and highway road trips?',
    answer:
      'Yes! All DRIVEIT self drive cars come with All-India Tourist Permits and FASTag. Our popular self drive SUVs including Mahindra Thar 4x4, Hyundai Creta, Toyota Innova Crysta, and Toyota Fortuner Legender are equipped for highway journeys to Srisailam, Araku, Goa, and Tirupati.',
  },
  {
    question: 'Do you offer monthly and weekend self drive car rental plans?',
    answer:
      'Yes, we offer specialized Weekend Self Drive packages (Friday evening to Monday morning) and flexible Monthly Self Drive Subscriptions with discounts up to 45% off daily rental rates.',
  },
];

export default function selfDriveCarPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Self Drive Cars Hyderabad',
    description:
      'Book self drive cars in Hyderabad with DRIVEIT. Hatchbacks, sedans, SUVs & luxury cars with doorstep delivery, zero deposit, and best customized rates.',
    url: 'https://www.driveitcars.in/self-drive-car',
    areaServed: [
      'Hyderabad',
      'HITEC City',
      'Gachibowli',
      'Madhapur',
      'Kondapur',
      'Banjara Hills',
      'Jubilee Hills',
      'Secunderabad',
      'Kukatpally',
      'Telangana',
    ],
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Self Drive Cars in Hyderabad', url: '/self-drive-car' },
  ]);

  const faqSchema = buildFaqSchema(SELF_DRIVE_FAQS);

  return (
    <>
      <SeoSchema schema={rentalSchema} />
      <SeoSchema schema={breadcrumbSchema} />
      <SeoSchema schema={faqSchema} />
      <section className="gauto-breadcromb-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="breadcromb-box">
                     <h3>Self Drive Cars</h3>
                     <ul>
                        <li><i className="fa fa-home"></i></li>
                        <li><a href="/">Home</a></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li>Self Drive Cars</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Breadcromb Area End */}
       
       
      {/* About Page Area Start */}
      <section className="about-page-area section_70">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="about-page-left">
                     <span
                        style={{
                           background: 'rgba(255, 185, 7, 0.15)',
                           color: '#d49500',
                           fontWeight: 700,
                           fontSize: '12px',
                           letterSpacing: '1px',
                           textTransform: 'uppercase',
                           padding: '6px 14px',
                           borderRadius: '20px',
                           display: 'inline-block',
                           marginBottom: '12px',
                        }}
                     >
                        ✦ #1 RATED SELF DRIVE CAR RENTAL IN HYDERABAD
                     </span>
                     <h1 style={{ color: '#ffb907', fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>
                        Self Drive Cars in Hyderabad — Unlimited Freedom &amp; Zero Deposit
                     </h1>
                     <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                        Looking for the most reliable <strong>self drive cars in Hyderabad</strong>? DRIVEIT Cars delivers total driving pleasure without the intrusion of drivers or public transit delays. Choose from our comprehensive, sanitized fleet of fuel-efficient hatchbacks (Swift, Baleno), executive sedans (Dzire, Verna), powerful 5 &amp; 7-seater <strong>self drive SUVs</strong> (Creta, Thar 4x4, Innova Crysta, Fortuner), and <strong>luxury self drive cars</strong> (BMW, Audi, Range Rover Evoque).
                     </p>
                     <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '20px' }}>
                        Whether you need a car for an office commute in <strong>HITEC City</strong> or <strong>Gachibowli</strong>, a <strong>weekend self drive car</strong> for road trips to Srisailam or Ananthagiri Hills, or a cost-effective <strong>monthly self drive car</strong> subscription, DRIVEIT guarantees instant digital verification, transparent fuel terms, FASTag equipped vehicles, and 24/7 on-road breakdown support.
                     </p>

                     {/* Popular Search Category & Locality Clusters */}
                     <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px', marginTop: '15px' }}>
                        <strong style={{ fontSize: '13px', color: '#111827', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '10px' }}>
                           ⚡ Explore Specialized Self Drive Categories &amp; Key Hubs:
                        </strong>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                           <Link href="/self-drive-suv-hyderabad" style={{ background: '#fff', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                              🚙 Self Drive SUV Hyderabad
                           </Link>
                           <Link href="/luxurycars" style={{ background: '#fff', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                              ✨ Luxury Self Drive Cars
                           </Link>
                           <Link href="/weekend-self-drive-cars-hyderabad" style={{ background: '#fff', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                              🌄 Weekend Self Drive Cars
                           </Link>
                           <Link href="/weekly-self-drive-cars-hyderabad" style={{ background: '#fff', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                              ⚡ Weekly Self Drive Cars
                           </Link>
                           <Link href="/monthly-self-drive-cars-hyderabad" style={{ background: '#fff', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                              📅 Monthly Self Drive Cars
                           </Link>
                           <Link href="/corporate-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                              🏢 Corporate Car Rental
                           </Link>
                           <Link href="/hyderabad-airport-car-rental" style={{ background: '#fff', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                              ✈️ Hyderabad Airport Car Rental
                           </Link>
                           <Link href="/hitech-city" style={{ background: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #e2e8f0' }}>
                              📍 HITEC City
                           </Link>
                           <Link href="/gachibowli" style={{ background: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #e2e8f0' }}>
                              📍 Gachibowli
                           </Link>
                           <Link href="/madhapur" style={{ background: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #e2e8f0' }}>
                              📍 Madhapur
                           </Link>
                           <Link href="/kondapur" style={{ background: '#f1f5f9', color: '#334155', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #e2e8f0' }}>
                              📍 Kondapur
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
                  </div>
               </div>
      </section>
      {/* About Page Area End */}
       {/* lux Area End */}
{/* Offers Area Start */}
      <section className="gauto-offers-area section_70" id="self">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                   
                  <div className="site-heading">
                    
                     <h2>Self Drive Cars </h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="offer-tabs">
                     <ul className="nav nav-tabs" id="offerTab" role="tablist">
                        <li className="nav-item">
                           <a className="nav-link" id="all-tab" data-toggle="tab" href="#hatchback" role="tab" aria-controls="all" aria-selected="true">Hatchback</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" id="nissan-tab" data-toggle="tab" href="#seden" role="tab" aria-controls="nissan" aria-selected="false">Sedan</a>
                        </li>
                         <li className="nav-item">
                           <a className="nav-link" id="Audi-tab" data-toggle="tab" href="#suv5" role="tab" aria-controls="Audi" aria-selected="false">Suv 5 Seaters</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" id="mercedes-tab" data-toggle="tab" href="#suv7" role="tab" aria-controls="mercedes" aria-selected="false">Suv 7 Seaters</a>
                        </li>
                      
                       
                     </ul>
                     <div className="tab-content" id="offerTabContent">
                        {/* All Tab Start */}
                        <div className="tab-pane fade show active" id="hatchback" role="tabpanel" aria-labelledby="all-tab">
                           <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/Baleno.png" alt="Hyderabad car rental without driver" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#"><h3> Suzuki Baleno</h3></a>
                                      <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 9/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 300/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Suzuki%20Baleno.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/i20.png" alt="Self drive car service Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Hyundai i20</h3>
                                       </a>
                                       <ul>
                                        <li><i className="fa fa-car"></i> Km :300/Day</li>
                                        <li><i className="fa fa-users"></i>Extra Km : 9/Km</li>
                                         <li><i className="fas fa-gas-pump"></i>Extra Hr : 300/Hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Hyundai%20i20.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/Fronx.png" alt="Self drive cars Hyderabad airport" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Suzuki Fronx</h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i> Km :300/Day</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 9/Km</li>
                                         <li><i className="fas fa-gas-pump"></i>Extra Hr : 300/Hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Suzuki%20Fronx.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/Altroz.png" alt="Self drive rental cars Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Tata AltroZ</h3>
                                       </a>
                                      


                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/Day</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 10/Km</li>
                                         <li><i className="fas fa-gas-pump"></i>Extra Hr : 300/Hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Tata%20AltroZ.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/polo.png" alt="Self drive SUV rental Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Volkswagen Polo</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 9/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 300/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Volkswagen%20Polo.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/asta.png" alt="Self drive cars Hyderabad airport" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>i10 Asta</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 9/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 300/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20i10%20Asta.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/Tata-Punch.png" alt="Hyderabad self drive vehicle hire" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Tata Punch</h3>
                                       </a>
                                      
                                       <ul>
                                            <li><i className="fa fa-car"></i>Km :300/day</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 9/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 300/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Tata%20Punch.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/suzuki.png" alt="Self drive cars Near me" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Suzuki Swift</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 9/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 300/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Suzuki%20Swift.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       
                           </div>
                        </div>
                        {/* All Tab End */}
                         
                        {/* Nissan Tab Start */}
                        <div className="tab-pane fade" id="seden" role="tabpanel" aria-labelledby="nissan-tab">
                           <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/seden-dzire.png" alt="Self drive SUV rental Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Suzuki Dzire</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 10/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 400/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Suzuki%20Dzire.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/seden-AURA.png" alt="Cheap self drive cars Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Hyundai Aura</h3>
                                       </a>
                                      
                                       <ul>
                                       <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 10/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 400/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Hyundai%20Aura.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/seden-City.png" alt="Self drive cars Hyderabad airport" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Honda City</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 10/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 400/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Honda%20City.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/seden-Verna.png" alt="Self drive rental cars Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Hyundai Verna</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 10/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 400/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Hyundai%20Verna.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/seden-Ciaz.png" alt="Affordable self drive cars Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Suzuki Ciaz</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 10/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 400/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Suzuki%20Ciaz.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              
                           </div>
                       
                  
                  </div>
                        {/* Nissan Tab End */}
                  
                          {/* Nissan Tab Start */}
                        <div className="tab-pane fade" id="suv5" role="tabpanel" aria-labelledby="nissan-tab">
                           <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/5-Brezza.png" alt="24/7 self drive car rental Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Suzuki Brezza</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Suzuki%20Brezza.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/5-Thar.png" alt="Premium self drive cars Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Mahindra Thar</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Mahindra%20Thar.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/2023-6.png" alt="Hourly self drive car rental Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Hyundai Creta</h3>
                                       </a>
                                      
                                       <ul>
                                             <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Hyundai%20Creta.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/5-Seltos.png" alt="Weekend self drive cars Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Kia Seltos</h3>
                                       </a>
                                      
                                       <ul>
                                            <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Kia%20Seltos.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/5-Venue.png" alt="Daily self drive car rental Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Hyundai Venue</h3>
                                       </a>
                                      
                                       <ul>
                                            <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Hyundai%20Venue.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/5-Harrier.png" alt="Long-term self drive car rentals Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Tata Harrier</h3>
                                       </a>
                                      
                                       <ul>
                                         <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Tata%20Harrier.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/2023-4.png" alt="Cheap self drive SUVs in Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Kia Sonet</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Kia%20Sonet.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/5-Exter.png" alt="Corporate self drive car rentals Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Hyundai Exter</h3>
                                       </a>
                                      
                                       <ul>
                                             <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Hyundai%20Exter.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/5-NEXON.png" alt="Affordable self drive cars Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Tata Nexon</h3>
                                       </a>
                                      
                                       <ul>
                                            <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 11/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Tata%20Nexon.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       
                           </div>
                       
                  
                  </div>
                        {/* Nissan Tab End */}
                  
                  
                           {/* Nissan Tab Start */}
                        <div className="tab-pane fade" id="suv7" role="tabpanel" aria-labelledby="nissan-tab">
                           <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-XUV700.png" alt="Self drive car booking Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#"><h3>Mahindra Xuv700</h3></a>
                                       <ul>
                                             <li><i className="fa fa-car"></i>Km :300/day</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 13/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 650/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Mahindra%20Xuv700.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-Innova%20Crysta.png" alt="Hourly self drive car rental Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Innova Crysta</h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 13/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 650/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Innova%20Crysta.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-Compass.png" alt="Hyderabad self drive cars with unlimited kilometers" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Jeep Compass</h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 13/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 650/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Jeep%20Compass.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                         <div className="row">
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-FordEndeavour.png" alt="Self drive hatchbacks Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Ford Endeavour</h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 14/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 800/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Ford%20Endeavour.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-KiaCarnival.png" alt="Luxury self drive SUVs Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Kia Carnival</h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 15/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 900/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Kia%20Carnival.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-Fortuner.png" alt="Corporate self drive car rentals Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Toyota Fortuner</h3>
                                       </a>
                                      
                                       <ul>
                                           <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 15/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 900/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Toyota%20Fortuner.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-Grand%20Vitara.png" alt="Long-term self drive car rentals Hyderabad" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Grand Vitara </h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 13/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 650/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Grand%20Vitara.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-Kia%20Carens.png" alt="Self drive 7 Seaters Cars" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Kia Carens</h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 13/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Kia%20Carens.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       <div className="col-lg-4">
                                 <div className="single-offers">
                                    <div className="offer-image">
                                       <a href="#">
                                       <img loading="lazy" src="assets/img/cars/7-Ertiga.png" alt="Hyderabad self drive car rates" />
                                       </a>
                                    </div>
                                    <div className="offer-text">
                                       <a href="#">
                                          <h3>Suzuki Ertiga</h3>
                                       </a>
                                      
                                       <ul>
                                          <li><i className="fa fa-car"></i>Km :300/day

</li>
                                          <li><i className="fa fa-users"></i>Extra Km : 12/km</li>
                                          <li><i className="fas fa-gas-pump"></i>Extra hr : 500/hr</li>
                                       </ul>
                                       <div className="offer-action">
                                          <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                          <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Suzuki%20Ertiga.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                       
                       
                           </div>
                       
                  
                  </div>
                        {/* Nissan Tab End */}
                         
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Offers Area End */}
      {/* Offers Area Start */}
       
    <FaqSection />
      {/* Service Details Page End */}
        
      {/* Footer Area Start */}
    </>
  );
}