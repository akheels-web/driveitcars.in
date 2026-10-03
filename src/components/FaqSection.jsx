'use client';

import { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    question: 'Does DriveIt offer self drive cars in Hyderabad?',
    answer:
      'Yes, DriveIt offers a premium fleet of self drive cars in Hyderabad. Choose from popular hatchbacks, comfortable sedans, compact SUVs, and 7-seater vehicles like Hyundai Creta, Maruti Suzuki Baleno, Mahindra Thar, Toyota Innova Crysta, and Fortuner with zero driver interference.'
  },
  {
    id: 2,
    question: 'Can I rent a car on a monthly basis in Hyderabad?',
    answer:
      'Absolutely! We offer flexible and cost-effective monthly car rental subscriptions in Hyderabad for professionals, expatriates, and corporate clients. Monthly rentals include comprehensive insurance, regular scheduled maintenance, and door-to-door delivery with no long-term financial commitments.'
  },
  {
    id: 3,
    question: 'Does DriveIt provide luxury car rentals for weddings and VIP events?',
    answer:
      'Yes! DriveIt features Hyderabad’s finest luxury car fleet including BMW 5 & 7 Series, Mercedes-Benz E & S Class, Audi A6, Jaguar XF, Range Rover, and Toyota Vellfire. Perfect for grand weddings, VIP delegation transfers, photo shoots, and prestigious corporate gatherings.'
  },
  {
    id: 4,
    question: 'What documents are required to book a self-drive car?',
    answer:
      'Booking is quick and 100% paperless. You only need: 1) A valid original Indian or International Driving License (minimum 1 year old), 2) Government ID proof (Aadhaar Card or Passport), and 3) A refundable security deposit. Verification takes less than 15 minutes.'
  },
  {
    id: 5,
    question: 'Is doorstep delivery and airport pickup available?',
    answer:
      'Yes! We provide on-time doorstep delivery and pickup across all prime Hyderabad locations including Hitech City, Gachibowli, Banjara Hills, Jubilee Hills, Secunderabad, Madhapur, Kukatpally, as well as 24/7 Rajiv Gandhi International Airport (Shamshabad) transfers.'
  },
  {
    id: 6,
    question: 'What is included in the rental pricing?',
    answer:
      'All rental packages include comprehensive vehicle insurance, 24/7 on-road breakdown assistance, and standard daily kilometer limits. We maintain 100% pricing transparency with zero hidden charges or unexpected surprise fees.'
  }
];

export default function FaqSection({ items, title, subtitle, badge }) {
  const data = items && items.length > 0 ? items : FAQ_DATA;
  const [openId, setOpenId] = useState(data[0]?.id || 1);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section-area section_70" style={{ background: '#fbfbfb' }}>
      <div className="container">
        <div className="site-heading text-center" style={{ marginBottom: 45 }}>
          <span
            style={{
              color: '#ffb907',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '8px'
            }}
          >
            {badge || 'Got Questions? We Have Answers'}
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
            {title || 'Frequently Asked Questions'}
          </h2>
          <p style={{ color: '#6b7280', maxWidth: '620px', margin: '10px auto 0', fontSize: '15px' }}>
            {subtitle || 'Everything you need to know about booking self-drive cars, luxury rentals, and monthly packages in Hyderabad.'}
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="faq-accordion-container" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {data.map((faq, index) => {
                const faqId = faq.id || index + 1;
                const isOpen = openId === faqId;
                return (
                  <div
                    key={faqId}
                    className={`faq-item ${isOpen ? 'active' : ''}`}
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      border: isOpen ? '1px solid #ffb907' : '1px solid #e5e7eb',
                      boxShadow: isOpen
                        ? '0 8px 24px rgba(255, 185, 7, 0.12)'
                        : '0 2px 6px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.25s ease',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faqId)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '18px 22px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          color: isOpen ? '#111827' : '#1f2937',
                          lineHeight: 1.4
                        }}
                      >
                        {faq.question}
                      </span>
                      <span
                        style={{
                          flexShrink: 0,
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: isOpen ? '#ffb907' : '#f3f4f6',
                          color: isOpen ? '#111827' : '#4b5563',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '18px',
                          fontWeight: 700,
                          transition: 'all 0.2s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      >
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: '0 22px 20px',
                          color: '#4b5563',
                          fontSize: '15px',
                          lineHeight: 1.65,
                          borderTop: '1px solid #f9fafb'
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
