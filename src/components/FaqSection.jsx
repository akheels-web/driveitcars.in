'use client';

import { useId, useState } from 'react';
import styles from './FaqSection.module.css';

const FAQ_DATA = [
  {
    id: 1,
    question: 'Does DriveItCars offer self drive cars in Hyderabad?',
    answer:
      'Yes, DriveItCars offers a premium fleet of self drive cars in Hyderabad. Choose from popular hatchbacks, comfortable sedans, compact SUVs, and 7-seater vehicles like Hyundai Creta, Maruti Suzuki Baleno, Mahindra Thar, Toyota Innova Crysta, and Fortuner with zero driver interference.'
  },
  {
    id: 2,
    question: 'Can I rent a car on a monthly basis in Hyderabad?',
    answer:
      'Absolutely! We offer flexible and cost-effective monthly car rental subscriptions in Hyderabad for professionals, expatriates, and corporate clients. Monthly rentals include comprehensive insurance, regular scheduled maintenance, and door-to-door delivery with no long-term financial commitments.'
  },
  {
    id: 3,
    question: 'Does DriveItCars provide luxury car rentals for weddings and VIP events?',
    answer:
      'Yes! DriveItCars features Hyderabad’s finest luxury car fleet including BMW 5 & 7 Series, Mercedes-Benz E & S Class, Audi A6, Jaguar XF, Range Rover, and Toyota Vellfire. Perfect for grand weddings, VIP delegation transfers, photo shoots, and prestigious corporate gatherings.'
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
  const instanceId = useId();

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`faq-section-area section_70 ${styles.section}`}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.badge}>
            {badge || 'Got Questions? We Have Answers'}
          </span>
          <h2 className={styles.title}>
            {title || 'Frequently Asked Questions'}
          </h2>
          <p className={styles.subtitle}>
            {subtitle || 'Everything you need to know about booking self-drive cars, luxury rentals, and monthly packages in Hyderabad.'}
          </p>
        </header>

        <div className={`faq-accordion-container ${styles.accordion}`}>
          {data.map((faq, index) => {
            const faqId = faq.id || index + 1;
            const isOpen = openId === faqId;
            const questionId = `${instanceId}-question-${index}`;
            const answerId = `${instanceId}-answer-${index}`;

            return (
              <div
                key={faqId}
                className={`faq-item ${styles.item} ${isOpen ? `active ${styles.open}` : ''}`}
              >
                <button
                  id={questionId}
                  className={styles.question}
                  type="button"
                  onClick={() => toggleFaq(faqId)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span>{faq.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  id={answerId}
                  className={styles.answer}
                  role="region"
                  aria-labelledby={questionId}
                  hidden={!isOpen}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
