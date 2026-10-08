import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Monthly Self Drive Cars Hyderabad | Car Subscription @ Up to 45% Off | DRIVEIT',
  description:
    'Flexible monthly self drive cars in Hyderabad starting @ ₹29,999/month. Zero maintenance, zero down payment, free doorstep service & tax benefits. IT pros & expats favorite.',
  alternates: {
    canonical: 'https://www.driveitcars.in/monthly-self-drive-cars-hyderabad',
  },
  openGraph: {
    title: 'Monthly Self Drive Cars Hyderabad | Car Subscription | DRIVEIT',
    description:
      'Save up to 45% with monthly self drive cars in Hyderabad. Zero maintenance, zero down payment, free routine servicing & vehicle swap. Hatchbacks, sedans, SUVs.',
    url: 'https://www.driveitcars.in/monthly-self-drive-cars-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/seadns.jpg',
        width: 1200,
        height: 630,
        alt: 'Monthly Self Drive Cars Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monthly Self Drive Cars Hyderabad | Long Term Rental',
    description: 'Save up to 45% on monthly self drive car subscriptions in Hyderabad with DRIVEIT.',
  },
};

const MONTHLY_PLANS = [
  {
    name: 'Maruti Suzuki Swift',
    type: 'Economy Hatchback',
    dailyRate: '₹1,999/day',
    monthlyRate: '₹31,999/month',
    savings: 'Save 47%',
    image: '/assets/img/cars/Swift.png',
    fuel: 'Petrol',
    kmPerMonth: '3,000 Km included',
    deposit: 'Low Refundable Deposit',
  },
  {
    name: 'Maruti Suzuki Dzire',
    type: 'Comfort Sedan',
    dailyRate: '₹2,199/day',
    monthlyRate: '₹34,999/month',
    savings: 'Save 47%',
    image: '/assets/img/cars/Dzire.png',
    fuel: 'Petrol / CNG',
    kmPerMonth: '3,000 Km included',
    deposit: 'Low Refundable Deposit',
  },
  {
    name: 'Hyundai Creta Automatic',
    type: 'Premium 5-Seater SUV',
    dailyRate: '₹3,299/day',
    monthlyRate: '₹54,999/month',
    savings: 'Save 45%',
    image: '/assets/img/2023-6.png',
    fuel: 'Diesel',
    kmPerMonth: '3,000 Km included',
    deposit: 'Low Refundable Deposit',
  },
  {
    name: 'Toyota Innova Crysta',
    type: '7-Seater Executive MPV',
    dailyRate: '₹4,499/day',
    monthlyRate: '₹74,999/month',
    savings: 'Save 45%',
    image: '/assets/img/crysta.png',
    fuel: 'Diesel',
    kmPerMonth: '3,000 Km included',
    deposit: 'Low Refundable Deposit',
  },
];

const MONTHLY_FAQS = [
  {
    question: 'How do monthly self drive cars in Hyderabad work?',
    answer:
      'Our monthly self drive subscription allows you to rent a vehicle for 30 days or longer at a massive discount (up to 45% cheaper than daily rates). You pay a single monthly subscription fee which covers comprehensive vehicle insurance, routine scheduled maintenance, doorstep service, and 24/7 breakdown assistance. You only pay for the fuel you consume.',
  },
  {
    question: 'What happens when the car requires servicing or maintenance?',
    answer:
      'We handle 100% of the maintenance! Our doorstep maintenance team comes to your location to service the vehicle. If extensive scheduled service is required, we provide a replacement car at zero additional charge so your daily commute is never interrupted.',
  },
  {
    question: 'Is monthly self drive car rental cheaper than buying a new car or paying EMIs?',
    answer:
      'Yes! Buying a new car requires a heavy down payment (₹2–5 Lakhs), 5–7 years of rigid loan EMIs, annual insurance renewals (₹25,000–₹50,000), road tax, and 20% first-year depreciation. With DRIVEIT Monthly Subscription, there are no loans, no long-term debt, no maintenance bills, and you can switch to different cars whenever your requirements change.',
  },
  {
    question: 'Can corporate companies in HITEC City or Gachibowli claim GST tax benefits?',
    answer:
      'Yes! We provide full GST invoices for corporate clients, startups, and IT firms. Monthly car subscriptions are 100% tax-deductible as business operational expenses (OPEX), providing significant financial advantages over purchasing company assets (CAPEX).',
  },
  {
    question: 'Can NRI visitors rent a car on a monthly basis in Hyderabad?',
    answer:
      'Yes, we regularly cater to NRIs and expats visiting Hyderabad for 1 to 6 months. Verification is straightforward with an International Driving Permit (or foreign licence) along with passport and visa copies.',
  },
];

export default function MonthlySelfDriveHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Monthly Self Drive Cars Hyderabad',
    description:
      'Flexible long-term car subscriptions in Hyderabad. Save up to 45% on monthly self drive cars with zero maintenance, doorstep servicing, and tax benefits.',
    url: 'https://www.driveitcars.in/monthly-self-drive-cars-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Gachibowli', 'Madhapur', 'Kondapur', 'Telangana'],
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Self Drive Cars', url: '/self-drive-car' },
    { name: 'Monthly Self Drive Cars Hyderabad', url: '/monthly-self-drive-cars-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(MONTHLY_FAQS);

  return (
    <>
      <SeoSchema schema={rentalSchema} />
      <SeoSchema schema={breadcrumbSchema} />
      <SeoSchema schema={faqSchema} />

      {/* ========== BREADCRUMB ========== */}
      <section className="gauto-breadcromb-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <h3>Monthly Self Drive Cars</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/self-drive-car">Self Drive Cars</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Monthly Self Drive Cars Hyderabad</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== INTRO SECTION ========== */}
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
                  ✦ LONG-TERM CAR SUBSCRIPTIONS — SAVE UP TO 45%
                </span>
                <h1 style={{ color: '#ffb907', fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>
                  Monthly Self Drive Cars Hyderabad — Flexible Long-Term Car Subscriptions
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Need a reliable car for a month or longer without the burdensome commitment of buying? DRIVEIT Cars offers the most practical and economical <strong>monthly self drive cars Hyderabad</strong> subscription service. Perfect for IT professionals on temporary client assignments in HITEC City and Gachibowli, NRI families visiting relatives, medical travelers, or smart urban commuters who prefer driving new cars without depreciation stress.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  With DRIVEIT monthly self drive cars, you pay zero down payment, zero loan interest, and zero maintenance or insurance fees. All plans include 3,000 km monthly allowance, comprehensive insurance coverage, free scheduled doorstep maintenance, and an instant replacement car guarantee if your vehicle requires workshop servicing.
                </p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
                  <a href="tel:+916300041186" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px' }}>
                    <i className="fa fa-phone" style={{ marginRight: 6 }} /> Book Monthly Subscription
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=+916300041186&text=Hi%20DRIVEIT%20Cars%2C%20I%20am%20interested%20in%20a%20monthly%20self%20drive%20car%20subscription%20in%20Hyderabad.%20Please%20share%20plans%20and%20rates."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gauto-btn"
                    style={{ padding: '8px 18px', fontSize: '13px', background: '#25D366' }}
                  >
                    <i className="fa fa-whatsapp" style={{ marginRight: 6 }} /> WhatsApp Monthly Desk
                  </a>
                  <Link href="/self-drive-suv-hyderabad" className="gauto-btn" style={{ padding: '8px 18px', fontSize: '13px', background: '#0f172a' }}>
                    Explore Monthly SUVs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MONTHLY SUBSCRIPTION PLANS ========== */}
      <section className="gauto-offers-area section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="site-heading text-center" style={{ marginBottom: '35px' }}>
            <span style={{ color: '#ffb907', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Transparent Pricing
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              Monthly Self Drive Subscription Plans
            </h2>
          </div>

          <div className="row">
            {MONTHLY_PLANS.map((plan, idx) => {
              const whatsappText = encodeURIComponent(
                `Hi DRIVEIT Cars, I want to book the monthly subscription for [${plan.name}] at ${plan.monthlyRate}. Please share booking details.`
              );

              return (
                <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                  <div className="single-offers" style={{ background: '#ffffff', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
                    <div className="offer-image" style={{ width: '100%', height: '170px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        loading="lazy"
                        src={plan.image}
                        alt={`${plan.name} monthly self drive cars Hyderabad`}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      />
                    </div>
                    <div className="offer-text" style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '11px', background: '#e0f2fe', color: '#0369a1', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                          {plan.type}
                        </span>
                        <span style={{ fontSize: '11px', background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                          {plan.savings}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 10px' }}>
                        {plan.name}
                      </h3>
                      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '10px', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ fontSize: '12px', color: '#64748b' }}>Daily Rate:</span>
                          <span style={{ fontSize: '12px', textDecoration: 'line-through', color: '#94a3b8' }}>{plan.dailyRate}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Monthly:</span>
                          <span style={{ fontSize: '16px', fontWeight: 800, color: '#d97706' }}>{plan.monthlyRate}</span>
                        </div>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 14px', fontSize: '12px', color: '#64748b', lineHeight: '1.8' }}>
                        <li><i className="fa fa-check" style={{ color: '#16a34a', marginRight: 6 }} /> {plan.kmPerMonth}</li>
                        <li><i className="fa fa-check" style={{ color: '#16a34a', marginRight: 6 }} /> Free Doorstep Servicing</li>
                        <li><i className="fa fa-check" style={{ color: '#16a34a', marginRight: 6 }} /> 0 Maintenance &amp; Road Tax</li>
                        <li><i className="fa fa-check" style={{ color: '#16a34a', marginRight: 6 }} /> Replacement Car Guarantee</li>
                      </ul>
                      <div className="offer-action" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                        <a href="tel:+916300041186" className="offer-btn-1" style={{ fontSize: '11px', padding: '8px 4px' }}>
                          <i className="fa fa-phone" /> Call Us
                        </a>
                        <a
                          href={`https://api.whatsapp.com/send?phone=+916300041186&text=${whatsappText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="offer-btn-2"
                          style={{ fontSize: '11px', padding: '8px 4px' }}
                        >
                          <i className="fa fa-whatsapp" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== COMPARISON TABLE: BUYING VS MONTHLY SUBSCRIPTION ========== */}
      <section className="about-page-area section_70">
        <div className="container">
          <div className="site-heading text-center" style={{ marginBottom: '35px' }}>
            <span style={{ color: '#ffb907', fontWeight: 700, fontSize: '13px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Financial Comparison
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111827' }}>
              Buying a Car vs DRIVEIT Monthly Subscription
            </h2>
          </div>

          <div className="table-responsive" style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
            <table className="table" style={{ margin: 0, fontSize: '14px' }}>
              <thead style={{ background: '#0f172a', color: '#fff' }}>
                <tr>
                  <th style={{ padding: '16px' }}>Factor</th>
                  <th style={{ padding: '16px' }}>Buying a New Car</th>
                  <th style={{ padding: '16px', color: '#ffb907' }}>DRIVEIT Monthly Subscription</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '14px 16px', fontWeight: 700 }}>Down Payment</td>
                  <td style={{ padding: '14px 16px', color: '#dc2626' }}>₹2,00,000 – ₹5,00,000 upfront</td>
                  <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 700 }}>₹0 (Zero Down Payment)</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700 }}>Loan Commitment</td>
                  <td style={{ padding: '14px 16px', color: '#dc2626' }}>3 to 7 Years of Fixed Bank EMIs</td>
                  <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 700 }}>Flexible Month-to-Month (Cancel Anytime)</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 16px', fontWeight: 700 }}>Insurance &amp; Road Tax</td>
                  <td style={{ padding: '14px 16px', color: '#dc2626' }}>Paid by owner annually (₹30k–₹70k)</td>
                  <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 700 }}>100% Included in Subscription Fee</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700 }}>Scheduled Maintenance</td>
                  <td style={{ padding: '14px 16px', color: '#dc2626' }}>Out-of-pocket expenses &amp; workshop trips</td>
                  <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 700 }}>Free Doorstep Maintenance Included</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 16px', fontWeight: 700 }}>Vehicle Depreciation</td>
                  <td style={{ padding: '14px 16px', color: '#dc2626' }}>15%–20% lost every year</td>
                  <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 700 }}>Zero Depreciation Risk for You</td>
                </tr>
                <tr style={{ background: '#f8fafc' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 700 }}>Vehicle Flexibility</td>
                  <td style={{ padding: '14px 16px', color: '#64748b' }}>Stuck with the same car for years</td>
                  <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 700 }}>Upgrade or switch models anytime</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <FaqSection
        items={MONTHLY_FAQS}
        title="Frequently Asked Questions — Monthly Self Drive Cars Hyderabad"
        subtitle="Clear answers about our flexible month-to-month self drive subscriptions in Hyderabad"
      />
    </>
  );
}
