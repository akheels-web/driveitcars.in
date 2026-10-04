import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | DriveIt Self Drive Cars Hyderabad',
  description: 'Review the official terms and conditions, KYC criteria, security deposit guidelines, speed limits, and rental policies for DriveIt Cars Hyderabad.',
};

export default function TermsConditionsPage() {
  const lastUpdated = 'October 2026';

  const sections = [
    { id: 'platform-nature', title: '1. Platform & Booking Agreement' },
    { id: 'kyc-documentation', title: '2. KYC & Document Verification' },
    { id: 'security-deposit', title: '3. Security Deposit & Refund Policy' },
    { id: 'kms-fuel-radius', title: '4. Kilometers, Fuel & Radius' },
    { id: 'speed-safety-rules', title: '5. Speed Limits & Safe Driving' },
    { id: 'extensions-late-fees', title: '6. Trip Extensions & Late Fees' },
    { id: 'accidents-damages', title: '7. Damages, Accidents & Insurance' },
    { id: 'cancellation-policy', title: '8. Cancellation & Refund Policy' },
    { id: 'cleanliness-sanitization', title: '9. Inspection & Cleanliness' },
    { id: 'renter-declaration', title: '10. Customer Agreement & Declaration' },
  ];

  return (
    <>
      {/* ========== HERO BREADCRUMB BANNER ========== */}
      <section
        className="gauto-breadcromb-area section_70"
        style={{
          background: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.96)), url(/banner8.avif) no-repeat center center / cover',
          padding: '80px 0 60px',
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
                  Rental Policy &amp; Terms
                </span>
                <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                  Terms &amp; Conditions
                </h1>
                <p style={{ color: '#cbd5e1', fontSize: '15px', maxWidth: '680px', margin: '0 auto 16px' }}>
                  Please review the terms of service governing your self-drive vehicle hire, KYC requirements, deposit settlement, and road safety regulations.
                </p>
                <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '14px' }}>
                  Effective Version: <strong style={{ color: '#ffb907' }}>{lastUpdated}</strong>
                </div>
                <ul>
                  <li><i className="fa fa-home"></i></li>
                  <li><a href="/">Home</a></li>
                  <li><i className="fa fa-angle-right"></i></li>
                  <li>Terms &amp; Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT AREA ========== */}
      <section style={{ background: '#f8fafc', padding: '60px 0 90px' }}>
        <div className="container">
          <div className="row">
            {/* Left Column: Sticky Table of Contents */}
            <div className="col-lg-4 col-md-5 mb-4">
              <div
                style={{
                  position: 'sticky',
                  top: '100px',
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', marginBottom: '16px', borderBottom: '2px solid #ffb907', paddingBottom: '8px', display: 'inline-block' }}>
                  Policy Sections
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sections.map((sec) => (
                    <li key={sec.id} style={{ marginBottom: '10px' }}>
                      <a
                        href={`#${sec.id}`}
                        className="legal-toc-link"
                        style={{
                          color: '#475569',
                          fontSize: '13px',
                          fontWeight: 500,
                          textDecoration: 'none',
                          display: 'block',
                          padding: '6px 10px',
                          borderRadius: '8px',
                          transition: 'all 0.2s',
                        }}
                      >
                        {sec.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <hr style={{ margin: '22px 0', borderColor: '#f1f5f9' }} />

                <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 800, fontSize: '13px', color: '#92400e', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <i className="fa fa-phone" /> Booking &amp; KYC Support
                  </div>
                  <p style={{ fontSize: '12px', color: '#b45309', margin: '0 0 10px', lineHeight: '1.5' }}>
                    Have questions about KYC verification or outstation security deposits? Speak with our operations desk.
                  </p>
                  <a
                    href="tel:+916300041186"
                    style={{
                      background: '#0f172a',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '12px',
                      textDecoration: 'none',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      display: 'inline-block',
                    }}
                  >
                    Call: +91 6300041186
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Policy Cards */}
            <div className="col-lg-8 col-md-7">
              {/* Section 1 */}
              <div
                id="platform-nature"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 01
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  1. Platform &amp; Booking Agreement
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                  <strong>DRIVEIT CARS</strong> (&quot;DriveIt&quot;) provides an online and offline marketplace platform enabling registered vehicle owners (&quot;Hosts&quot;) and verified customers (&quot;Renters&quot;) to lease motor vehicles directly in accordance with statutory guidelines under the Indian Motor Vehicles Act.
                </p>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  By booking, receiving the keys, or taking possession of any vehicle facilitated through DriveIt, you acknowledge that you have carefully read, understood, and agreed to be legally bound by these Terms and Conditions.
                </p>
              </div>

              {/* Section 2 */}
              <div
                id="kyc-documentation"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 02
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  2. KYC &amp; Mandatory Document Verification
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '18px' }}>
                  Vehicles will only be handed over following thorough physical and digital verification of the original documents. Renter must be at least 21 years of age.
                </p>

                <div className="row g-3">
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '15px', marginBottom: '10px' }}>
                        <i className="fa fa-map-pin" style={{ color: '#ffb907', marginRight: '6px' }} /> For Local Hyderabad Residents
                      </div>
                      <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.8', paddingLeft: '18px', margin: 0 }}>
                        <li>Original Driving License (valid for LMV).</li>
                        <li>Aadhar Card (with active phone OTP verification).</li>
                        <li>PAN Card.</li>
                        <li>Local proof: Current electricity bill, gas bill, or registered rental agreement.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', height: '100%' }}>
                      <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '15px', marginBottom: '10px' }}>
                        <i className="fa fa-plane" style={{ color: '#3b82f6', marginRight: '6px' }} /> For Outstation &amp; NRI Visitors
                      </div>
                      <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.8', paddingLeft: '18px', margin: 0 }}>
                        <li>Original Driving License / International Driving Permit.</li>
                        <li>Passport copy / Visa stamp (for NRI visitors).</li>
                        <li>Inbound travel proof (confirmed Flight / Train tickets).</li>
                        <li>Hotel reservation or corporate office invitation letter.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '14px 16px', borderRadius: '8px', marginTop: '16px' }}>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#991b1b', marginBottom: '4px' }}>
                    Zero Tolerance for Fabricated Documents
                  </div>
                  <p style={{ color: '#b91c1c', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                    If any document is detected as fabricated, manipulated, or untrusted during verification, the handover will be rejected immediately, the advance payment will be forfeited, and details will be forwarded to law enforcement authorities.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div
                id="security-deposit"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 03
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  3. Security Deposit &amp; Refund Policy
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
                  A refundable security deposit is mandatory for all self-drive bookings to ensure mutual trust and asset safety:
                </p>

                <div style={{ overflowX: 'auto', marginBottom: '18px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ background: '#0f172a', color: '#ffffff' }}>
                        <th style={{ padding: '12px 14px', borderRadius: '8px 0 0 0' }}>Vehicle Category</th>
                        <th style={{ padding: '12px 14px' }}>Local City Deposit</th>
                        <th style={{ padding: '12px 14px', borderRadius: '0 8px 0 0' }}>Outstation Deposit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <td style={{ padding: '12px 14px', fontWeight: 600 }}>5-Seater (Hatchback / Sedan / Compact SUV)</td>
                        <td style={{ padding: '12px 14px', color: '#10b981', fontWeight: 700 }}>₹10,000</td>
                        <td style={{ padding: '12px 14px', color: '#0f172a', fontWeight: 700 }}>₹20,000</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
                        <td style={{ padding: '12px 14px', fontWeight: 600 }}>7-Seater SUV / Innova Crysta / Thar 4x4</td>
                        <td style={{ padding: '12px 14px', color: '#10b981', fontWeight: 700 }}>₹20,000</td>
                        <td style={{ padding: '12px 14px', color: '#0f172a', fontWeight: 700 }}>₹30,000</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '12px 14px', fontWeight: 600 }}>Luxury VIP (Fortuner, BMW, Mercedes, Range Rover)</td>
                        <td style={{ padding: '12px 14px', color: '#10b981', fontWeight: 700 }}>₹30,000 – ₹50,000</td>
                        <td style={{ padding: '12px 14px', color: '#0f172a', fontWeight: 700 }}>Custom Quote</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '14px', marginBottom: '8px' }}>
                    Alternate Collateral Options (Locals in Hyderabad):
                  </div>
                  <ul style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7', paddingLeft: '18px', margin: '0 0 10px' }}>
                    <li>Two-wheeler (motorcycle/scooter, 2016 model or newer) deposited along with its Original RC.</li>
                    <li>Original Passport + 1 Signed Blank Cheque.</li>
                    <li>Working Laptop (under 2 years old, with original purchase invoice).</li>
                  </ul>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>
                    <strong>Deposit Refund Timeline:</strong> Your security deposit will be processed and returned to your bank account after trip completion, once fast-tag toll debits and traffic challans have been reconciled.
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div
                id="kms-fuel-radius"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 04
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  4. Kilometers, Fuel &amp; Operating Radius
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                    <i className="fa fa-road" style={{ color: '#ffb907', marginTop: '4px' }} />
                    <span style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7' }}>
                      <strong>Daily KM Allowance:</strong> Standard daily rentals include a 300 Km/day allowance. Once a package (e.g. 300km/day or unlimited) is booked, it cannot be altered mid-trip.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                    <i className="fa fa-calculator" style={{ color: '#ffb907', marginTop: '4px' }} />
                    <span style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7' }}>
                      <strong>Extra Kilometers Rate:</strong> Excess kilometers are billed at ₹9/km for Hatchbacks, ₹10/km for Sedans, ₹14/km for 7-Seater SUVs, and ₹18+/km for Luxury vehicles.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                    <i className="fa fa-compass" style={{ color: '#ffb907', marginTop: '4px' }} />
                    <span style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7' }}>
                      <strong>Hyderabad Local Radius (Outer Ring Road):</strong> Local packages are valid strictly within the Outer Ring Road (ORR) boundary. Crossing the ORR requires prior host authorization; unauthorized crossing will result in outstation kilometer rate adjustments.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                    <i className="fa fa-tint" style={{ color: '#ffb907', marginTop: '4px' }} />
                    <span style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7' }}>
                      <strong>Same-Level Fuel Policy:</strong> The vehicle must be returned with the same fuel level as recorded during handover. Any deficit will be charged as per prevailing market fuel rates + a ₹200 refueling service charge.
                    </span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <i className="fa fa-clock-o" style={{ color: '#ffb907', marginTop: '4px' }} />
                    <span style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7' }}>
                      <strong>Garage-to-Garage Calculation:</strong> Kilometers and hours are measured from the starting dispatch hub to the return hub. Doorstep delivery carries a standard ₹500–₹1,000 transit charge based on distance.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div
                id="speed-safety-rules"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 05
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  5. Speed Limits &amp; Safe Driving Regulations
                </h2>

                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '18px', borderRadius: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#dc2626', fontWeight: 800, fontSize: '16px', marginBottom: '6px' }}>
                    <i className="fa fa-tachometer" style={{ fontSize: '20px' }} /> Maximum Statutory Speed Limit: 80 Km/Hour
                  </div>
                  <p style={{ color: '#991b1b', fontSize: '13px', lineHeight: '1.7', margin: 0 }}>
                    In compliance with RTA safety guidelines and telemetry regulations, all vehicles are speed-governed at <strong>80 km/h</strong>. Exceeding 80 km/h is recorded automatically via GPS, voids insurance coverage during that window, and attracts a safety violation fine of <strong>₹500 per incident</strong>.
                  </p>
                </div>

                <div className="row g-3">
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '6px' }}>
                        🚫 Drunk Driving &amp; Narcotics
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                        Driving under the influence of alcohol, drugs, or intoxicating substances is strictly prohibited. Violators face a ₹5,000 penalty and direct police handover.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '6px' }}>
                        🚭 No Smoking / Gutka
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                        Smoking cigarettes or consuming chewing tobacco/gutka inside the cabin carries a mandatory ₹5,000 deep-cleaning and ozone sanitization fee.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '6px' }}>
                        🚦 Traffic Challans
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                        All electronic challans (red-light jumping, wrong parking, no-helmet pillion, signal violation) incurred during your rental must be cleared by you.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', marginBottom: '6px' }}>
                        ⚖️ Commercial Sub-leasing
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
                        Sub-letting, pledging, racing, vehicle towing, or transporting hazardous contraband is an unlawful offense subject to immediate asset recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div
                id="extensions-late-fees"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 06
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  6. Trip Extensions &amp; Late Return Charges
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
                  Vehicles are scheduled for back-to-back sanitization and handovers for other travelers. Timely returns are strictly enforced:
                </p>
                <ul style={{ color: '#475569', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px', margin: '0 0 16px' }}>
                  <li><strong>Notice Window:</strong> If you wish to extend your booking, you must inform DriveIt at least <strong>4 hours prior</strong> to scheduled return time.</li>
                  <li><strong>Hourly Grace Period:</strong> Extra hours are billed at ₹300/hr (5-seaters) and ₹400/hr (7-seaters/SUVs) up to a maximum of 4 hours.</li>
                  <li><strong>Exceeding 4 Hours:</strong> Any delay beyond 4 hours automatically incurs a full 24-hour daily rental charge + 10% late inconvenience surcharge.</li>
                  <li><strong>Automated Engine Immobilization:</strong> If a vehicle is not returned and no extension has been paid, the remote telemetry unit may automatically immobilize the vehicle engine upon scheduled expiry.</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div
                id="accidents-damages"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 07
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  7. Accidents, Breakdowns &amp; Insurance Protocol
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
                  In the unfortunate event of an accident or collision, the following procedures must be adhered to:
                </p>
                <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '18px' }}>
                  <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '14px', marginBottom: '6px' }}>
                    Major Damage Claims (Above ₹1,00,000)
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                    Comprehensive commercial motor insurance is claimable only for accidental damages exceeding ₹1,00,000. The renter must assist in obtaining the spot Panchnama, FIR from the local police station, and RTA surveyor estimation. The non-claimable balance and depreciation must be borne by the renter.
                  </p>
                </div>
                <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '14px', marginBottom: '6px' }}>
                    Minor Scratches, Dents &amp; Repairs
                  </div>
                  <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
                    Damages below ₹1,00,000 (such as bumper dents, broken mirrors, panel repainting, or wrong fuelling) must be repaired at the manufacturer&apos;s authorized showroom at the renter&apos;s expense. Renters are also responsible for the standard daily idle rent while the car is undergoing repair at the service center.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div
                id="cancellation-policy"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 08
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  8. Cancellation &amp; Refund Policy
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px', background: '#f8fafc' }}>
                    <div style={{ color: '#10b981', fontWeight: 800, fontSize: '16px', marginBottom: '6px' }}>
                      50% Refund
                    </div>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '13px', marginBottom: '4px' }}>
                      Notice &gt; 12 Hours Before Pickup
                    </div>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
                      Cancellations made more than 12 hours prior to the scheduled delivery time are eligible for a 50% refund of the advance rental payment.
                    </p>
                  </div>
                  <div style={{ border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px', background: '#fef2f2' }}>
                    <div style={{ color: '#dc2626', fontWeight: 800, fontSize: '16px', marginBottom: '6px' }}>
                      No Refund (0%)
                    </div>
                    <div style={{ fontWeight: 700, color: '#991b1b', fontSize: '13px', marginBottom: '4px' }}>
                      Notice &lt; 12 Hours or No-Show
                    </div>
                    <p style={{ fontSize: '12px', color: '#b91c1c', margin: 0 }}>
                      Cancellations made within 12 hours of the scheduled pickup slot or customer no-shows are strictly non-refundable as the vehicle is already reserved and prepared.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div
                id="cleanliness-sanitization"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px',
                  marginBottom: '28px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 09
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  9. Pre-Trip Inspection &amp; Cleanliness
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                  Every car is delivered fully washed, deep-cleaned, and sanitized. We require all customers to record a continuous 360-degree video inspection of the vehicle (capturing exterior body panels, tires, glass, and odometer reading) prior to taking the keys.
                </p>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  Vehicles must be returned in reasonably clean condition. If the vehicle is returned with heavy exterior mud, food spillage, seat stains, or unpleasant odors, a standard detailing fee of ₹500 (5-seaters) or ₹800 (7-seaters/Buses) will be deducted from the security deposit.
                </p>
              </div>

              {/* Section 10 */}
              <div
                id="renter-declaration"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  borderRadius: '16px',
                  padding: '36px',
                  color: '#ffffff',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Clause 10
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginTop: '6px', marginBottom: '16px' }}>
                  10. Customer Agreement &amp; Jurisdiction
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.8', marginBottom: '16px' }}>
                  By accepting delivery of the vehicle, the Renter certifies that:
                </p>
                <ul style={{ color: '#e2e8f0', fontSize: '13px', lineHeight: '1.8', paddingLeft: '18px', margin: '0 0 20px' }}>
                  <li>They hold a valid driving license and are physically fit to operate the vehicle.</li>
                  <li>They accept full civil and criminal liability for their actions during the rental period.</li>
                  <li>They will cooperate fully with the host and company in the event of any road incident.</li>
                  <li>Any disputes arising from this agreement are subject to the exclusive jurisdiction of the civil courts in Hyderabad, Telangana.</li>
                </ul>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link
                    href="/self-drive-car"
                    style={{
                      background: '#ffb907',
                      color: '#000000',
                      fontWeight: 800,
                      fontSize: '13px',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                    }}
                  >
                    Explore Fleet
                  </Link>
                  <Link
                    href="/contact"
                    style={{
                      border: '1px solid rgba(255,255,255,0.25)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '13px',
                      padding: '10px 20px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                    }}
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}