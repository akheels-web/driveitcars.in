import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import SeoSchema, {
  buildCarRentalSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from '@/components/SeoSchema';

export const metadata = {
  title: 'Monthly Corporate Car Rental Hyderabad | Long-Term Fleet Lease | DRIVEIT',
  description:
    'Save up to 45% with monthly corporate car rental in Hyderabad. Long-term fleet subscriptions for IT enterprises, CXOs & expat directors with zero maintenance & 100% GST input tax credit.',
  alternates: {
    canonical: 'https://www.driveitcars.in/monthly-corporate-car-rental-hyderabad',
  },
  openGraph: {
    title: 'Monthly Corporate Car Rental Hyderabad | Fleet Subscription | DRIVEIT',
    description:
      'Long-term corporate car rental & executive leases in Hyderabad. Dedicated cars & chauffeurs for enterprises in HITEC City, Gachibowli & Financial District with GST billing.',
    url: 'https://www.driveitcars.in/monthly-corporate-car-rental-hyderabad',
    siteName: 'DRIVEIT Cars Hyderabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.driveitcars.in/assets/img/benz2.png',
        width: 1200,
        height: 630,
        alt: 'Monthly Corporate Car Rental Hyderabad - Fleet Lease',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Monthly Corporate Car Rental Hyderabad | DRIVEIT Cars',
    description:
      'Affordable monthly corporate car subscription in Hyderabad. Sedans, Innova Crysta & luxury cars with replacement guarantee & corporate billing.',
  },
};

const MONTHLY_CORP_FAQS = [
  {
    question: 'How does monthly corporate car rental in Hyderabad benefit our company?',
    answer:
      'Monthly corporate car rentals eliminate heavy upfront capital expenditures (capex) of buying company vehicles, zero balance sheet debt, zero depreciation risk, and zero maintenance overhead. Your company enjoys fully tax-deductible operational expenditure (opex) with 100% GST input tax credit, customized billing cycles, and replacement car guarantees.',
  },
  {
    question: 'Are vehicles dedicated exclusively to our company during the monthly lease?',
    answer:
      'Yes, absolutely. The vehicle is assigned exclusively to your organization for the entire contract duration (1 month, 3 months, 6 months, or 12+ months) along with a dedicated, background-verified executive chauffeur if requested.',
  },
  {
    question: 'What happens if a monthly corporate car requires maintenance or servicing?',
    answer:
      'DRIVEIT provides an instant replacement vehicle guarantee. If your assigned vehicle undergoes scheduled periodic servicing or unscheduled mechanical attention, our operations team delivers a matching replacement car within 2 hours with zero downtime.',
  },
  {
    question: 'What models are available for monthly corporate rental in Hyderabad?',
    answer:
      'Our monthly corporate fleet encompasses Executive Sedans (Suzuki Dzire, Honda City), Premium MUVs (Toyota Innova Crysta & Hycross), Compact Executive SUVs (Hyundai Creta), and Luxury Sedans (Mercedes-Benz E-Class & C-Class, BMW 5 Series, Audi A6).',
  },
  {
    question: 'How do we set up a corporate monthly retainer contract in Hyderabad?',
    answer:
      'Setting up a monthly corporate agreement is simple: provide your company GST certificate, authorized signatory ID, and expected fleet requirements. Our corporate team executes a straightforward service agreement and delivers your fleet within 24 to 48 hours.',
  },
];

const MONTHLY_PACKAGES = [
  {
    id: 'monthly-sedan',
    name: 'Executive Sedan (Dzire / Ciaz)',
    target: 'Managers & City Commutes',
    image: '/assets/img/cars/Dzire.png',
    rateSelfDrive: 'Tariff on Request',
    rateWithChauffeur: 'Custom Retainer',
    savings: 'Monthly Deal',
    features: ['Fuel Efficient 22+ km/l', 'Comprehensive Commercial Insurance', 'Free Doorstep Service', 'GST Input Credit'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about monthly corporate sedan rental in Hyderabad.',
  },
  {
    id: 'monthly-innova',
    name: 'Toyota Innova Crysta',
    target: 'Senior Leadership & Project Teams',
    image: '/assets/img/crysta.png',
    rateSelfDrive: 'Tariff on Request',
    rateWithChauffeur: 'Custom Retainer',
    savings: 'Monthly Deal',
    features: ['Plush Captain Chairs', 'Large Boot for Client Bags', 'High-Speed Highway Stability', 'Express Chauffeur Retainer'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about monthly corporate Innova Crysta rental in Hyderabad.',
  },
  {
    id: 'monthly-luxury',
    name: 'Mercedes-Benz E-Class / BMW 5',
    target: 'CXOs, MDs & Expat Directors',
    image: '/assets/img/benz2.png',
    rateSelfDrive: 'Tariff on Request',
    rateWithChauffeur: 'Custom Retainer',
    savings: 'Monthly Deal',
    features: ['Flagship Boardroom Prestige', 'Suited Protocol Driver', 'Instant Replacement Guarantee', 'Dedicated Concierge Desk'],
    whatsappMsg: 'Hi DRIVEIT Cars, I want to enquire about monthly luxury corporate car lease in Hyderabad.',
  },
];

export default function MonthlyCorporateCarRentalHyderabadPage() {
  const rentalSchema = buildCarRentalSchema({
    name: 'DRIVEIT Monthly Corporate Car Rental Hyderabad',
    description:
      'Premier monthly corporate car rental and fleet subscription in Hyderabad. Save up to 45% on long-term corporate leases with zero maintenance & GST input tax credit.',
    url: 'https://www.driveitcars.in/monthly-corporate-car-rental-hyderabad',
    areaServed: ['Hyderabad', 'HITEC City', 'Gachibowli Financial District', 'Mindspace', 'Banjara Hills', 'Telangana'],
    priceRange: 'Tariff on Request',
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Corporate Car Rental', url: '/corporate-car-rental-hyderabad' },
    { name: 'Monthly Corporate Car Rental Hyderabad', url: '/monthly-corporate-car-rental-hyderabad' },
  ]);

  const faqSchema = buildFaqSchema(MONTHLY_CORP_FAQS);

  return (
    <>
      <SeoSchema schema={rentalSchema} />
      <SeoSchema schema={breadcrumbSchema} />
      <SeoSchema schema={faqSchema} />

      {/* Breadcrumb Area */}
      <section className="gauto-breadcromb-area section_70">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcromb-box">
                <span
                  style={{
                    color: '#ffb907',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  ✦ LONG-TERM B2B FLEET LEASING &amp; SUBSCRIPTIONS
                </span>
                <h3>Monthly Corporate Car Rental Hyderabad</h3>
                <ul>
                  <li><i className="fa fa-home" /></li>
                  <li><Link href="/">Home</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li><Link href="/corporate-car-rental-hyderabad">Corporate Car Rental</Link></li>
                  <li><i className="fa fa-angle-right" /></li>
                  <li>Monthly Corporate Rental</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
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
                  ✦ ZERO CAPEX • ZERO DEPRECIATION • 100% OPEX TAX DEDUCTIBLE
                </span>
                <h1 style={{ color: '#0f172a', fontSize: '32px', fontWeight: 800, marginBottom: '20px', lineHeight: '1.3' }}>
                  Monthly Corporate Car Rental Hyderabad — Long-Term Fleet Lease &amp; Subscriptions
                </h1>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '16px' }}>
                  Eliminate the capital strain and administrative headaches of purchasing, maintaining, and managing company cars. DRIVEIT's dedicated <strong>monthly corporate car rental Hyderabad</strong> program empowers enterprises in <strong>HITEC City, Gachibowli Financial District, Mindspace, and Kokapet</strong> with fully managed, long-term fleet subscriptions. Whether you need executive sedans for daily project managers or luxury Mercedes/BMW sedans for resident directors and expatriates, our monthly retainers deliver up to <strong>45% cost savings</strong> over daily spot rentals.
                </p>
                <p style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#4b5563', marginBottom: '22px' }}>
                  Enjoy 100% operational tax deductions, monthly GST input tax credit invoices, routine vehicle servicing with doorstep replacement car guarantees, and dedicated corporate account support.
                </p>

                {/* Sub-Category Jump Bar */}
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <Link href="/corporate-car-rental-hyderabad" style={{ background: '#0f172a', color: '#ffb907', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 700 }}>
                    🏢 Corporate Car Rental Hub
                  </Link>
                  <Link href="/luxury-chauffeur-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    🤵 Executive Chauffeur Services
                  </Link>
                  <Link href="/vip-car-rental-hyderabad" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    👑 VIP &amp; CEO Car Rental
                  </Link>
                  <Link href="/hyderabad-airport-car-rental" style={{ background: '#f8fafc', color: '#0f172a', padding: '7px 15px', borderRadius: '20px', fontSize: '13px', fontWeight: 600, border: '1px solid #cbd5e1' }}>
                    ✈️ Airport Corporate Transfers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section_70" style={{ background: '#f8fafc', paddingTop: '40px' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                POPULAR MONTHLY RETAINER TIERS
              </span>
              <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', marginTop: '6px' }}>
                Monthly Corporate Car Rental Packages in Hyderabad
              </h2>
            </div>
          </div>

          <div className="row">
            {MONTHLY_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="col-lg-4 col-md-6 mb-4">
                <div
                  className="single-offers"
                  style={{
                    background: '#fff',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    border: '1px solid #e2e8f0',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div
                    className="offer-image"
                    style={{
                      height: '210px',
                      background: 'radial-gradient(circle, #f1f5f9 0%, #e2e8f0 100%)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '16px',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: '#0f172a',
                        color: '#ffb907',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {pkg.target}
                    </span>
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: '#16a34a',
                        color: '#fff',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      {pkg.savings}
                    </span>
                    <img
                      loading="lazy"
                      src={pkg.image}
                      alt={`${pkg.name} monthly corporate car rental Hyderabad`}
                      style={{ maxHeight: '160px', width: 'auto', maxWidth: '90%', objectFit: 'contain' }}
                    />
                  </div>

                  <div className="offer-text" style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {pkg.name}
                    </h3>
                    <div style={{ marginBottom: '14px' }}>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: '#92400e', background: '#fef3c7', padding: '5px 10px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <i className="fa fa-tag" style={{ color: '#d97706', fontSize: '13px' }} />
                        Monthly Lease: {pkg.rateSelfDrive}
                      </div>
                      <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600, marginTop: '4px' }}>
                        <i className="fa fa-check-circle" /> Chauffeur Retainers &amp; GST Invoicing Available
                      </div>
                    </div>

                    <div style={{ marginBottom: '18px', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {pkg.features.map((feat, idx) => (
                        <span key={idx} style={{ background: '#f1f5f9', color: '#334155', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', fontWeight: 500 }}>
                          ✓ {feat}
                        </span>
                      ))}
                    </div>

                    <div className="offer-action" style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <a
                        href="tel:+916300041186"
                        className="offer-btn-1"
                        style={{
                          background: '#0f172a',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '10px 4px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                        }}
                      >
                        <i className="fa fa-phone" /> Call Desk
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?phone=+916300041186&text=${encodeURIComponent(pkg.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="offer-btn-2"
                        style={{
                          background: '#25D366',
                          color: '#fff',
                          textAlign: 'center',
                          padding: '10px 4px',
                          borderRadius: '8px',
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 6,
                        }}
                      >
                        <i className="fa fa-whatsapp" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Buying vs Monthly Subscription */}
      <section className="section_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="site-heading text-center mb-4">
                <span style={{ color: '#d49500', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase' }}>
                  FINANCIAL ADVANTAGE
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>
                  Buying Company Cars vs DRIVEIT Monthly Corporate Subscription
                </h2>
              </div>

              <div className="table-responsive" style={{ background: '#fff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#0f172a', color: '#ffb907' }}>
                    <tr>
                      <th style={{ padding: '14px 16px' }}>Parameter</th>
                      <th style={{ padding: '14px 16px' }}>Purchasing Company Fleet</th>
                      <th style={{ padding: '14px 16px' }}>DRIVEIT Monthly Corporate Lease</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Upfront Capital (Capex)</td>
                      <td style={{ padding: '14px 16px', color: '#ef4444' }}>Heavy down payment &amp; bank EMI liabilities</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Zero down payment (Zero Capex)</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Depreciation &amp; Resale Risk</td>
                      <td style={{ padding: '14px 16px', color: '#ef4444' }}>20% annual book value depreciation loss</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Zero depreciation risk for your company</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Maintenance &amp; Insurance</td>
                      <td style={{ padding: '14px 16px', color: '#ef4444' }}>Separate service bills, claims &amp; downtime</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>100% covered by DRIVEIT with free replacement</td>
                    </tr>
                    <tr style={{ background: '#f8fafc' }}>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Tax &amp; Accounting Treatment</td>
                      <td style={{ padding: '14px 16px' }}>Capital asset on balance sheet</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>100% tax-deductible Opex + GST input tax credit</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '14px 16px', fontWeight: 700 }}>Fleet Flexibility</td>
                      <td style={{ padding: '14px 16px', color: '#ef4444' }}>Locked into vehicle for 5+ years</td>
                      <td style={{ padding: '14px 16px', color: '#16a34a', fontWeight: 600 }}>Upgrade or change fleet models anytime</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section with Schema */}
      <FaqSection
        items={MONTHLY_CORP_FAQS}
        title="Frequently Asked Questions — Monthly Corporate Car Rental Hyderabad"
        subtitle="Common questions regarding corporate fleet leases, billing & maintenance coverage"
      />
    </>
  );
}
