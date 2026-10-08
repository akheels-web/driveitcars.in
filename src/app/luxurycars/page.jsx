import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Luxury & Premium Self Drive Cars Hyderabad | BMW, Audi, Mercedes, Evoque',
  description:
    'Rent luxury self drive cars & premium cars in Hyderabad with DRIVEIT. Showroom-condition BMW, Mercedes-Benz, Audi, Range Rover Evoque, Fortuner Legender & Thar.',
  alternates: {
    canonical: 'https://www.driveitcars.in/luxurycars',
  },
  openGraph: {
    title: 'Luxury & Premium Self Drive Cars Hyderabad | DRIVEIT',
    description:
      'Book luxury self drive cars in Hyderabad. Drive BMW, Mercedes, Audi, Range Rover Evoque & Fortuner Legender. VIP, wedding & executive travel.',
    url: 'https://www.driveitcars.in/luxurycars',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/rangerover.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury Self Drive Cars Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury & Premium Self Drive Cars Hyderabad | DRIVEIT',
    description: 'Rent exotic & luxury self drive cars in Hyderabad. BMW, Audi, Mercedes, Evoque with DRIVEIT.',
  },
};

const LUXURY_FAQS = [
  {
    question: 'Can I rent luxury self drive cars in Hyderabad without a driver?',
    answer:
      'Yes, absolutely! DRIVEIT offers luxury self drive cars in Hyderabad including BMW, Audi, Mercedes-Benz, Range Rover Evoque, and Toyota Fortuner Legender for self-driving. Enjoy complete privacy and prestige behind the wheel.',
  },
  {
    question: 'What are the security deposit terms for premium self drive cars in Hyderabad?',
    answer:
      'For premium and luxury self drive vehicles, we require a refundable security deposit depending on the car model, refunded within 24 to 48 hours of vehicle return following post-trip inspection.',
  },
  {
    question: 'Can I hire luxury self drive cars for weddings and pre-wedding shoots?',
    answer:
      'Yes! Our luxury fleet is in high demand for Hyderabadi weddings, groom baraat entries, bridal send-offs, and pre-wedding film shoots. We deliver spotless, showroom-polished vehicles with optional floral decorations.',
  },
  {
    question: 'Do you offer doorstep delivery of luxury cars to 5-star hotels and Hyderabad Airport?',
    answer:
      'Yes, we provide VIP white-glove doorstep delivery to Taj Falaknuma, ITC Kohenur, Park Hyatt, Novotel, and Rajiv Gandhi International Airport (RGIA Shamshabad).',
  },
];

export default function luxurycarsPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Luxury & Premium Self Drive Cars Hyderabad',
    description:
      'Rent luxury self drive cars and premium cars in Hyderabad. BMW, Mercedes, Audi, Range Rover Evoque, and Fortuner Legender with white-glove delivery.',
    url: 'https://www.driveitcars.in/luxurycars',
    areaServed: ['Hyderabad', 'Banjara Hills', 'Jubilee Hills', 'HITEC City', 'Gachibowli', 'Telangana'],
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Luxury Self Drive Cars Hyderabad', url: '/luxurycars' },
  ]);

  const faqSchema = buildFaqSchema(LUXURY_FAQS);

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
                     <h3>Luxury Cars</h3>
                     <ul>
                        <li><i className="fa fa-home"></i></li>
                        <li><Link href="/">Home</Link></li>
                        <li><i className="fa fa-angle-right"></i></li>
                        <li>Luxury Cars</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* Breadcromb Area End */}
       
       
      {/* About Page Area Start */}
      <section className="about-page-area section_70" style={{ paddingBottom: '30px' }}>
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
                        ✦ ELITE FLEET • BMW • MERCEDES • AUDI • RANGE ROVER
                     </span>
                     <h1 style={{ color: '#ffb907', fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>
                        Luxury Self Drive Cars Hyderabad — Premium &amp; Exotic Car Rentals
                     </h1>
                     <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                        Step into a realm of supreme prestige with DRIVEIT's <strong>luxury self drive cars Hyderabad</strong> collection. Designed for leaders, discerning executives, celebrities, and grand wedding celebrations, our fleet delivers uncompromising luxury and exhilarating horsepower. Drive showroom-conditioned <strong>BMW sedans, Mercedes-Benz, Audi, Range Rover Evoque, Jaguar XF, and Toyota Fortuner Legender</strong> on your own terms.
                     </p>
                     <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '20px' }}>
                        Whether hosting high-profile corporate delegates in <strong>HITEC City</strong>, making an unforgettable grand entrance at a royal <strong>Banjara Hills or Jubilee Hills</strong> wedding, or experiencing the thrill of open-throttle driving along Hyderabad Outer Ring Road, DRIVEIT provides immaculate, fully insured <strong>premium self drive cars in Hyderabad</strong> with discreet white-glove doorstep delivery.
                     </p>
                     <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <Link href="/wedding-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                           💐 Wedding Car Rental Hyderabad
                        </Link>
                        <Link href="/rolls-royce-wedding-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                           👑 Rolls Royce Wedding
                        </Link>
                        <Link href="/vintage-wedding-car-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                           🎩 Vintage Wedding Car
                        </Link>
                        <Link href="/mercedes-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                           ⭐ Mercedes Rental
                        </Link>
                        <Link href="/bmw-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                           🚘 BMW Rental
                        </Link>
                        <Link href="/audi-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                           🏎️ Audi Rental
                        </Link>
                        <Link href="/range-rover-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                           🚙 Range Rover Rental
                        </Link>
                        <Link href="/corporate-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                           🏢 Corporate Car Rental
                        </Link>
                        <Link href="/luxury-chauffeur-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                           🤵 Executive Chauffeur
                        </Link>
                        <Link href="/vip-car-rental-hyderabad" style={{ background: '#ffb907', color: '#0f172a', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                           👑 VIP &amp; CEO Car Rental
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* About Page Area End */}
      {/* lux car Start */}
            <div className="container">
            
            <h2 className="text-center mt-2">DRIVEIT Provide All Luxury Cars</h2>
            <div className="row">
                
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/fortuner2.jpg" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Fortuner Legender</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Fortuner%20Legender.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/fortuner.png" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Type2 Fortuner</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Type2%20Fortuner.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/jagg.png" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Jaguar XF</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Jaguar%20XF.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/jagguar.png" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Jaguar XJL</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Jaguar%20XJL.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/bmw.png" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>BMW 5 Series</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20BMW%205%20Series.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/bmw11.png" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>BMW 7 Series</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20BMW%207%20Series.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/audi.png" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Audi Q7</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Audi%20Q7.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/audi2.png" className="cstimg1" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Audi A6</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Audi%20A6.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/audi2s.png" className="cstimg" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Audi 2 Seater</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Audi%202%20Seater.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/benz.png" className="cstimg" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Benz S Class 500 B/W</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Benz%20S%20Class%20500%20B%2FW.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/benz2.png" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Benz E Class 250</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Benz%20E%20Class%20250.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <div className="single-offers">
                        <div className="offer-image">
                            <a href="#">
                                <img loading="lazy" src="assets/img/benz3.png" className="cstimg" alt="offer 1" />
                            </a>
                        </div>
                        <div className="offer-text">
                            <a href="#">
                                <h3>Mercedes Maybach</h3>
                            </a>
            
                            <ul>
                                <li><i className="fa fa-car"></i>Model:2023</li>
                                <li><i className="fa fa-users"></i>5 People</li>
                                <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                            </ul>
                            <div className="offer-action">
                               <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                               <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Mercedes%20Maybach.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/g-wagon.png" className="cstimg" alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Mercedes G wagon</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Mercedes%20G%20wagon.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/benz2s.png" alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Mercedes 2 Seater</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Mercedes%202%20Seater.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/range-rover1.png"  alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Range Rover</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Range%20Rover.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/range-rover.png"  alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Range Rover Evoque</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Range%20Rover%20Evoque.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/ferrari.jpg"  alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Porsche</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Porsche.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/bentely.png"  alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Bentley</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Bentley.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/rollsp.png" className="cstimg" alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Rolls Royce Phantom</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Rolls%20Royce%20Phantom.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/rolls-roy.png" alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Rolls Royce Ghost</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Rolls%20Royce%20Ghost.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="col-lg-4">
                        <div className="single-offers">
                            <div className="offer-image">
                                <a href="#">
                                    <img loading="lazy" src="assets/img/rollsc.png" alt="offer 1" />
                                </a>
                            </div>
                            <div className="offer-text">
                                <a href="#">
                                    <h3>Rolls Royce Cullinan</h3>
                                </a>
                
                                <ul>
                                    <li><i className="fa fa-car"></i>Model:2023</li>
                                    <li><i className="fa fa-users"></i>5 People</li>
                                    <li><i className="fas fa-gas-pump"></i>Petrol/Diesel</li>
                                </ul>
                                <div className="offer-action">
                                   <a href="tel:+916300041186" className="offer-btn-1"><i className="fa fa-phone"></i> Enquire Now</a>
                                   <a href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20contacting%20you%20to%20enquire%20about%20booking%20the%20Rolls%20Royce%20Cullinan.%20Please%20share%20availability%20and%20rates." target="_blank" rel="noopener noreferrer" className="offer-btn-2"><i className="fa fa-whatsapp"></i> WhatsApp Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* lux car End */}</div>

      {/* lux Area End */}
       
       
     <FaqSection
        items={LUXURY_FAQS}
        title="Frequently Asked Questions — Luxury Self Drive Cars Hyderabad"
        subtitle="Key details about renting premium and exotic self drive cars in Hyderabad"
      />
      {/* Service Details Page End */} 
       
      {/* Footer Area Start */}
    </>
  );
}