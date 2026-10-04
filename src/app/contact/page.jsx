import ContactClient from '@/components/ContactClient';
import FaqSection from '@/components/FaqSection';

export const metadata = {
  title: 'Contact Us | DriveIt Cars Hyderabad - Self Drive & Luxury Car Rentals',
  description: 'Get in touch with DriveIt Cars Hyderabad for self-drive car rentals, luxury wedding cars, and outstation bus hires. Call +91 6300041186 or visit our Masab Tank hub.',
  keywords: 'contact driveit cars, self drive car hyderabad phone number, car rental masab tank hyderabad, driveit cars contact number, rent car hyderabad whatsapp',
  openGraph: {
    title: 'Contact DriveIt Cars Hyderabad - Self Drive & Luxury Car Rentals',
    description: 'Call +91 6300041186 or WhatsApp for instant car rental bookings in Hyderabad. Hub at Mehar Mansion, Masab Tank.',
    url: 'https://driveitcars.in/contact',
  },
};

const CONTACT_FAQS = [
  {
    id: 1,
    question: 'How quickly will I receive confirmation after sending an inquiry?',
    answer: 'When you contact us via WhatsApp or telephone, you receive instant confirmation within 5 to 15 minutes. For online form inquiries, our Masab Tank fleet manager will call you back within 15 minutes during operating hours (7:00 AM – 10:00 PM).',
  },
  {
    id: 2,
    question: 'Can I visit your Masab Tank office to inspect and choose a car in person?',
    answer: 'Yes, absolutely! Our central operations hub at 10-2-289/83, Mehar Mansion, Road Number 2, Shantinagar Colony, Masab Tank is open daily from 7:00 AM to 10:00 PM. You can visit in person, inspect our clean fleet, complete quick digital KYC, and drive away immediately.',
  },
  {
    id: 3,
    question: 'Do you offer doorstep delivery to my location in Hyderabad?',
    answer: 'Yes! We provide prompt doorstep delivery across all 26 Hyderabad localities including Gachibowli, Hitec City, Banjara Hills, Jubilee Hills, Secunderabad, Kukatpally, Kondapur, and 24/7 Rajiv Gandhi International Airport (RGIA Shamshabad) terminal drop & pickup.',
  },
  {
    id: 4,
    question: 'What documents are required when picking up the rental car?',
    answer: 'You only need two documents: 1) Your original valid Indian or International Driving License (minimum 1 year old), and 2) Government ID proof such as Aadhaar Card or Passport. Digital verification is completed in under 10 minutes.',
  },
  {
    id: 5,
    question: 'What is the security deposit and how soon is it refunded?',
    answer: 'Security deposits range from ₹0 on select verified local profiles up to ₹3,000 – ₹5,000 for standard self-drive cars, and ₹10,000+ for luxury vehicles. The deposit is refunded back to your bank account or UPI within 24 to 48 hours following vehicle return and safety inspection.',
  },
  {
    id: 6,
    question: 'What payment modes are accepted for rental bookings?',
    answer: 'We accept UPI (Google Pay, PhonePe, Paytm), Net Banking, IMPS/NEFT, Credit & Debit Cards, and Cash at our Masab Tank hub.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. HERO BREADCRUMB SECTION */}
      <section
        className="gauto-breadcromb-area section_70"
        style={{
          background: 'linear-gradient(rgba(11, 17, 32, 0.88), rgba(15, 23, 42, 0.95)), url(/seadns.jpg) no-repeat center center / cover',
          padding: '80px 0 65px',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="breadcromb-box">
                <span
                  style={{
                    background: 'rgba(255, 185, 7, 0.18)',
                    color: '#ffb907',
                    fontWeight: 700,
                    fontSize: '12px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    marginBottom: '14px',
                  }}
                >
                  ✦ 24/7 RESERVATIONS &amp; CUSTOMER CARE
                </span>
                <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                  Contact DriveIt Hyderabad
                </h1>
                <p style={{ color: '#cbd5e1', fontSize: '15px', maxWidth: '640px', margin: '0 auto 18px', lineHeight: '1.6' }}>
                  Have questions about vehicle availability, wedding packages, or doorstep delivery? Our Masab Tank fleet team is ready to assist you.
                </p>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><a href="/">Home</a></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN INTERACTIVE CONTENT (Client Component) */}
      <ContactClient />

      {/* 3. CONTACT & BOOKING FAQS */}
      <FaqSection
        title="Frequently Asked Booking & Contact Questions"
        subtitle="Clear answers about vehicle delivery, deposits, office visits, and required documents."
        badge="NEED ASSISTANCE?"
        items={CONTACT_FAQS}
      />
    </>
  );
}