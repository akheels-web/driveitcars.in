import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | DriveIt Self Drive Cars Hyderabad',
  description: 'Understand how DriveIt Cars protects your personal data, KYC documents, and telematics information. Transparent privacy and security policies.',
};

export default function PrivacyPage() {
  const lastUpdated = 'October 2026';

  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview' },
    { id: 'data-collection', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Your Information' },
    { id: 'sharing', title: '4. Data Sharing & Third Parties' },
    { id: 'security', title: '5. Security & Document Protection' },
    { id: 'telematics', title: '6. Vehicle GPS & Telematics Data' },
    { id: 'retention', title: '7. Data Retention & User Rights' },
    { id: 'cookies', title: '8. Cookies & Web Tracking' },
    { id: 'contact', title: '9. Contact & Grievance Redressal' },
  ];

  return (
    <>
      {/* ========== HERO BREADCRUMB BANNER ========== */}
      <section
        className="gauto-breadcromb-area section_70"
        style={{
          background: 'linear-gradient(rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.95)), url(/seadns.jpg) no-repeat center center / cover',
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
                  Legal &amp; Compliance
                </span>
                <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                  Privacy Policy
                </h1>
                <p style={{ color: '#cbd5e1', fontSize: '15px', maxWidth: '640px', margin: '0 auto 16px' }}>
                  Your privacy and data security are fundamental to our services. Learn how we handle your personal details, KYC records, and trip information.
                </p>
                <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '14px' }}>
                  Last Updated: <strong style={{ color: '#ffb907' }}>{lastUpdated}</strong>
                </div>
                <ul>
                  <li><i className="fa fa-home"></i></li>
                  <li><a href="/">Home</a></li>
                  <li><i className="fa fa-angle-right"></i></li>
                  <li>Privacy Policy</li>
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
                  Table of Contents
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {sections.map((sec) => (
                    <li key={sec.id} style={{ marginBottom: '10px' }}>
                      <a
                        href={`#${sec.id}`}
                        className="legal-toc-link"
                        style={{
                          color: '#475569',
                          fontSize: '14px',
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

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px' }}>
                  <div style={{ fontWeight: 700, fontSize: '13px', color: '#0f172a', marginBottom: '6px' }}>
                    Need Privacy Assistance?
                  </div>
                  <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 10px' }}>
                    Reach our dedicated Data Protection Officer for any records review or deletion requests.
                  </p>
                  <a
                    href="mailto:driveitcars@gmail.com"
                    style={{
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '12px',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <i className="fa fa-envelope" style={{ color: '#ffb907' }} /> driveitcars@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Policy Sections */}
            <div className="col-lg-8 col-md-7">
              {/* Card 1: Introduction */}
              <div
                id="introduction"
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
                  Section 01
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  1. Introduction &amp; Overview
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                  Welcome to <strong>DRIVEIT CARS</strong> (&quot;DriveIt&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We operate Hyderabad’s leading self-drive and luxury car rental platform located at Masab Tank, Hyderabad, Telangana.
                </p>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  We are deeply committed to respecting your privacy and safeguarding any personal data or KYC documents you share with us. This Privacy Policy details how we collect, verify, store, utilize, and protect your information when booking vehicles through our website (<a href="https://driveitcars.in" style={{ color: '#ffb907', fontWeight: 600 }}>driveitcars.in</a>) or interacting with our customer support personnel.
                </p>
              </div>

              {/* Card 2: Information We Collect */}
              <div
                id="data-collection"
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
                  Section 02
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  2. Information We Collect
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '18px' }}>
                  In order to facilitate vehicle hiring under Indian Motor Vehicles Act guidelines and insurance underwriting standards, we collect the following categories of information:
                </p>

                <div className="row g-3">
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '12px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', marginBottom: '8px' }}>
                        <i className="fa fa-id-card" style={{ color: '#ffb907', marginRight: '8px' }} /> Identification (KYC)
                      </div>
                      <p style={{ color: '#64748b', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                        Government-issued identity cards including original Driving License, Aadhar Card, PAN Card, and Passport (for NRI/non-local customers).
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '12px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', marginBottom: '8px' }}>
                        <i className="fa fa-map-marker" style={{ color: '#ffb907', marginRight: '8px' }} /> Address Verification
                      </div>
                      <p style={{ color: '#64748b', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                        Local address proof (utility bills, rental agreements) or inbound travel credentials (flight tickets, railway tickets, hotel bookings) for outstation travelers.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '12px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', marginBottom: '8px' }}>
                        <i className="fa fa-credit-card" style={{ color: '#ffb907', marginRight: '8px' }} /> Transaction Details
                      </div>
                      <p style={{ color: '#64748b', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                        Advance booking payments, security deposit receipts, UPI transaction references, and bank account information for prompt deposit refunds.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div style={{ background: '#f8fafc', padding: '18px', borderRadius: '12px', height: '100%' }}>
                      <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', marginBottom: '8px' }}>
                        <i className="fa fa-mobile" style={{ color: '#ffb907', marginRight: '8px' }} /> Device &amp; Contact Info
                      </div>
                      <p style={{ color: '#64748b', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>
                        Primary mobile number, WhatsApp contact, email address, IP address, and browser diagnostic telemetry for spam prevention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: How We Use Your Information */}
              <div
                id="usage"
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
                  Section 03
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  3. How We Use Your Information
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    {
                      icon: 'fa-car',
                      title: 'Executing Your Vehicle Rental',
                      desc: 'To confirm car availability, prepare the digital handover agreement, verify active driving eligibility, and coordinate doorstep delivery across Hyderabad.',
                    },
                    {
                      icon: 'fa-shield',
                      title: 'Fraud Prevention & Document Verification',
                      desc: 'To prevent identity theft, unauthorized driving, and vehicle conversion through systematic document cross-checks.',
                    },
                    {
                      icon: 'fa-bell',
                      title: 'Critical Trip Communications',
                      desc: 'To send booking confirmations, extension alerts, FASTag toll statements, traffic challan updates, and security deposit settlement receipts.',
                    },
                    {
                      icon: 'fa-gavel',
                      title: 'Legal & Regulatory Compliance',
                      desc: 'To comply with directives from Telangana Police, RTA (Regional Transport Authority), and cybercrime authorities when requested.',
                    },
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '16px', marginBottom: '18px', alignItems: 'flex-start' }}>
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '8px',
                          background: '#fffbeb',
                          color: '#ffb907',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          fontSize: '16px',
                        }}
                      >
                        <i className={`fa ${item.icon}`} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', marginBottom: '4px' }}>
                          {item.title}
                        </div>
                        <div style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>
                          {item.desc}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 4: Sharing & Third Parties */}
              <div
                id="sharing"
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
                  Section 04
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  4. Data Sharing &amp; Third Parties
                </h2>
                <div
                  style={{
                    background: '#f1f5f9',
                    borderLeft: '4px solid #ffb907',
                    padding: '16px',
                    borderRadius: '8px',
                    marginBottom: '18px',
                    color: '#334155',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  We do not sell, rent, or trade your personal data to marketing telemarketers or third-party advertisers under any circumstance.
                </div>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                  Information is shared strictly on a need-to-know basis with authorized entities under the following conditions:
                </p>
                <ul style={{ color: '#475569', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                  <li><strong>Vehicle Host / Owner:</strong> Basic verification details (name, driving eligibility) to fulfill the peer-to-peer lease.</li>
                  <li><strong>Insurance Underwriters:</strong> In the event of an unfortunate accident or total loss, KYC documents and accident telemetry are shared with licensed Indian motor insurance companies.</li>
                  <li><strong>Law Enforcement Agencies:</strong> In the event of severe traffic violations, hit-and-run incidents, or criminal investigation, records are disclosed in compliance with lawful police summons.</li>
                </ul>
              </div>

              {/* Card 5: Security & Document Protection */}
              <div
                id="security"
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
                  Section 05
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  5. Security &amp; Document Protection
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '16px' }}>
                  DriveIt employs enterprise-grade administrative and digital security protocols to protect sensitive documents:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '10px' }}>
                    <div style={{ color: '#10b981', fontWeight: 800, fontSize: '14px', marginBottom: '4px' }}>
                      ✓ Digital Watermarking
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>
                      All identification documents (Aadhar, License) are digitally marked &quot;For DriveIt Car Rental Verification Only&quot; to prevent misuse.
                    </div>
                  </div>
                  <div style={{ border: '1px solid #e2e8f0', padding: '16px', borderRadius: '10px' }}>
                    <div style={{ color: '#10b981', fontWeight: 800, fontSize: '14px', marginBottom: '4px' }}>
                      ✓ Encrypted Cloud Vaults
                    </div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>
                      Stored under 256-bit AES encryption with strict role-based access restricted solely to authorized compliance officers.
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 6: Telematics & GPS */}
              <div
                id="telematics"
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
                  Section 06
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  6. Vehicle GPS &amp; Telematics Data
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                  For passenger safety, asset protection, and roadside emergency response, all fleet vehicles are equipped with telematics devices that monitor:
                </p>
                <ul style={{ color: '#475569', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px', margin: '0 0 16px' }}>
                  <li>Real-time vehicle GPS coordinates and route history.</li>
                  <li>Vehicle speed telemetry (monitoring the statutory 80 km/h RTA safety limit).</li>
                  <li>Engine diagnostics, battery health, and collision impact sensors.</li>
                </ul>
                <p style={{ color: '#64748b', fontSize: '13px', fontStyle: 'italic', margin: 0 }}>
                  Telematics data is strictly used for emergency breakdown assistance, speed compliance, and recovery of stolen assets. We do not inspect personal driving behavior for non-contractual purposes.
                </p>
              </div>

              {/* Card 7: Data Retention & User Rights */}
              <div
                id="retention"
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
                  Section 07
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  7. Data Retention &amp; User Rights
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', marginBottom: '14px' }}>
                  We retain booking transaction records and KYC documents for the duration mandated by motor transport taxation and accounting laws in India (generally 3 years).
                </p>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  You have the right to request a copy of your stored records, rectify outdated contact numbers, or request deletion of voluntary promotional subscriptions by writing to our privacy team.
                </p>
              </div>

              {/* Card 8: Cookies */}
              <div
                id="cookies"
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
                  Section 08
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginTop: '6px', marginBottom: '18px' }}>
                  8. Cookies &amp; Web Analytics
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.8', margin: 0 }}>
                  Our website uses lightweight session cookies to maintain your vehicle filter choices and anonymous Google Analytics to understand website traffic. You can adjust your browser settings to decline cookies at any time without restricting your ability to explore our fleet.
                </p>
              </div>

              {/* Card 9: Contact */}
              <div
                id="contact"
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  borderRadius: '16px',
                  padding: '36px',
                  color: '#ffffff',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}
              >
                <span style={{ color: '#ffb907', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Section 09
                </span>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#ffffff', marginTop: '6px', marginBottom: '14px' }}>
                  9. Contact &amp; Grievance Officer
                </h2>
                <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.7', marginBottom: '22px' }}>
                  For any questions regarding this Privacy Policy, document security, or to report a privacy concern, please contact our Grievance Officer:
                </p>
                <div className="row g-3">
                  <div className="col-sm-6 mb-2">
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>Designated Entity:</div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: '#ffb907' }}>DRIVEIT CARS HYDERABAD</div>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>Office Address:</div>
                    <div style={{ fontWeight: 600, fontSize: '14px' }}>Masab Tank, Hyderabad, Telangana 500028</div>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>Email Support:</div>
                    <a href="mailto:driveitcars@gmail.com" style={{ color: '#fff', fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>
                      driveitcars@gmail.com
                    </a>
                  </div>
                  <div className="col-sm-6 mb-2">
                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>Helpline Phone:</div>
                    <a href="tel:+916300041186" style={{ color: '#ffb907', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                      +91 6300041186
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}