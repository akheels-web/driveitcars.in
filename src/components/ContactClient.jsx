'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SERVICE_OPTIONS = [
  'Self-Drive Hatchback (Swift, Baleno, i20)',
  'Self-Drive Sedan (Dzire, Verna, Ciaz)',
  'Self-Drive SUV 5-Seater (Creta, Brezza, Venue)',
  'Self-Drive SUV 7-Seater (Innova Crysta, Ertiga, Scorpio)',
  'Self-Drive 4x4 Offroader (Thar 4x4, Fortuner 4x4)',
  'Luxury Wedding & VIP Sedan (BMW, Audi, Mercedes)',
  'Chauffeur-Driven Outstation Cab',
  'Luxury AC Bus / Tempo Traveller (14 - 45 Seater)',
];

const LOCATION_OPTIONS = [
  'Masab Tank Hub (Central Office - Self Pickup)',
  'RGIA Hyderabad Airport (Shamshabad Drop/Pickup)',
  'Gachibowli / Financial District / Nanakramguda',
  'Hitec City / Madhapur / Kondapur',
  'Banjara Hills / Jubilee Hills / Film Nagar',
  'Secunderabad / Begumpet / Bowenpally',
  'Kukatpally / Miyapur / KPHB Colony',
  'Doorstep Delivery (Anywhere in Hyderabad)',
];

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: SERVICE_OPTIONS[0],
    pickupDate: '',
    pickupLocation: LOCATION_OPTIONS[0],
    duration: '24 Hours (1 Day)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi DRIVEIT Cars,
I would like to enquire about renting a vehicle:
• Name: ${formData.name || 'Customer'}
• Phone: ${formData.phone || 'Not specified'}
• Service/Car: ${formData.service}
• Pickup Date: ${formData.pickupDate || 'Flexible'}
• Location: ${formData.pickupLocation}
• Duration: ${formData.duration}
${formData.message ? `• Notes: ${formData.message}` : ''}

Please share vehicle availability, photos, and best rates.`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number before sending via WhatsApp.');
      return;
    }
    const waUrl = `https://wa.me/916300041186?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');
  };

  const handleOnlineSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Please provide your name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+916300041186');
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  return (
    <div className="contact-redesign-wrapper">
      {/* 1. QUICK HIGHLIGHT ACTION CARDS */}
      <section className="contact-quick-strip">
        <div className="container">
          <div className="row g-3">
            {/* Card 1: Direct Hotline */}
            <div className="col-lg-3 col-sm-6 mb-3">
              <a href="tel:+916300041186" className="contact-quick-card">
                <div className="quick-icon-wrap gold-icon">
                  <i className="fa fa-phone" />
                </div>
                <div className="quick-card-body">
                  <span className="quick-label">Direct Hotline</span>
                  <strong className="quick-value">+91 6300041186</strong>
                  <span className="quick-subtext">Instant Call • 7am – 10pm</span>
                </div>
              </a>
            </div>

            {/* Card 2: WhatsApp Desk */}
            <div className="col-lg-3 col-sm-6 mb-3">
              <a
                href="https://wa.me/916300041186?text=Hi%20DRIVEIT%20Cars%2C%20I%20would%20like%20to%20enquire%20about%20car%20rental%20availability%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="contact-quick-card wa-border"
              >
                <div className="quick-icon-wrap green-icon">
                  <i className="fa fa-whatsapp" />
                </div>
                <div className="quick-card-body">
                  <span className="quick-label">WhatsApp Fleet Desk</span>
                  <strong className="quick-value">Chat on WhatsApp</strong>
                  <span className="quick-subtext">Fastest replies • 24/7 Active</span>
                </div>
              </a>
            </div>

            {/* Card 3: Central Fleet Hub */}
            <div className="col-lg-3 col-sm-6 mb-3">
              <a href="#masab-tank-map" className="contact-quick-card">
                <div className="quick-icon-wrap gold-icon">
                  <i className="fa fa-map-marker" />
                </div>
                <div className="quick-card-body">
                  <span className="quick-label">Central Operations Hub</span>
                  <strong className="quick-value">Masab Tank, HYD</strong>
                  <span className="quick-subtext">Rd No 2, Shantinagar Colony</span>
                </div>
              </a>
            </div>

            {/* Card 4: Doorstep Delivery */}
            <div className="col-lg-3 col-sm-6 mb-3">
              <Link href="/self-drive-car" className="contact-quick-card">
                <div className="quick-icon-wrap gold-icon">
                  <i className="fa fa-car" />
                </div>
                <div className="quick-card-body">
                  <span className="quick-label">Doorstep Delivery</span>
                  <strong className="quick-value">All 26 Hyderabad Hubs</strong>
                  <span className="quick-subtext">Airport, Gachibowli, Banjara</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN WORKSPACE: FORM + CONTACT DETAILS */}
      <section className="contact-main-section section_70">
        <div className="container">
          <div className="row">
            {/* Left Column: Interactive Booking & Inquiry Form */}
            <div className="col-lg-7 mb-4">
              <div className="contact-box-panel">
                <div className="panel-header">
                  <span className="panel-badge">QUICK INQUIRY</span>
                  <h3>Send An Inquiry / Book A Car</h3>
                  <p>
                    Choose your dates and vehicle preferences below. Send instantly via WhatsApp for the fastest quote, or submit online for a prompt callback.
                  </p>
                </div>

                {submitted ? (
                  <div className="inquiry-success-card">
                    <div className="success-icon">
                      <i className="fa fa-check-circle" />
                    </div>
                    <h4>Inquiry Received Successfully!</h4>
                    <p>
                      Thank you <strong>{formData.name}</strong>. Our Masab Tank fleet manager has received your booking inquiry for <strong>{formData.service}</strong>.
                    </p>
                    <div className="success-reference-box">
                      <span>Direct Contact Priority Hotline:</span>
                      <strong>+91 6300041186</strong>
                    </div>
                    <div className="success-actions">
                      <a
                        href={`https://wa.me/916300041186?text=${generateWhatsAppMessage()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp-action"
                      >
                        <i className="fa fa-whatsapp" /> Also Send via WhatsApp for Instant Reply
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn-reset-form"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleOnlineSubmit} className="contact-modern-form">
                    <div className="row">
                      {/* Name */}
                      <div className="col-md-6 mb-3">
                        <label className="form-field-label">
                          Full Name <span className="req">*</span>
                        </label>
                        <div className="field-input-wrap">
                          <i className="fa fa-user input-icon" />
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="e.g. Rahul Sharma"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-control-modern"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="col-md-6 mb-3">
                        <label className="form-field-label">
                          Phone / WhatsApp Number <span className="req">*</span>
                        </label>
                        <div className="field-input-wrap">
                          <i className="fa fa-phone input-icon" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. 98765 43210"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control-modern"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="col-md-6 mb-3">
                        <label className="form-field-label">Email Address (Optional)</label>
                        <div className="field-input-wrap">
                          <i className="fa fa-envelope-o input-icon" />
                          <input
                            type="email"
                            name="email"
                            placeholder="e.g. rahul@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control-modern"
                          />
                        </div>
                      </div>

                      {/* Rental Vehicle / Service */}
                      <div className="col-md-6 mb-3">
                        <label className="form-field-label">Select Vehicle Category</label>
                        <div className="field-input-wrap">
                          <i className="fa fa-car input-icon" />
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="form-control-modern form-select-modern"
                          >
                            {SERVICE_OPTIONS.map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Pickup Date */}
                      <div className="col-md-6 mb-3">
                        <label className="form-field-label">Preferred Pickup Date & Time</label>
                        <div className="field-input-wrap">
                          <i className="fa fa-calendar input-icon" />
                          <input
                            type="text"
                            name="pickupDate"
                            placeholder="e.g. 15th Oct, 9:00 AM"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            className="form-control-modern"
                          />
                        </div>
                      </div>

                      {/* Trip Duration */}
                      <div className="col-md-6 mb-3">
                        <label className="form-field-label">Estimated Rental Duration</label>
                        <div className="field-input-wrap">
                          <i className="fa fa-clock-o input-icon" />
                          <select
                            name="duration"
                            value={formData.duration}
                            onChange={handleChange}
                            className="form-control-modern form-select-modern"
                          >
                            <option value="24 Hours (1 Day)">24 Hours (1 Day)</option>
                            <option value="Weekend (2 Days)">Weekend (2 Days)</option>
                            <option value="3 to 5 Days">3 to 5 Days (Outstation / Vacation)</option>
                            <option value="1 Week (7 Days)">1 Week (7 Days - Special Rate)</option>
                            <option value="1 Month Subscription">1 Month Subscription (Up to 50% Off)</option>
                            <option value="Wedding / Single Event">Wedding / Single Event (12 Hours)</option>
                          </select>
                        </div>
                      </div>

                      {/* Pickup Location */}
                      <div className="col-md-12 mb-3">
                        <label className="form-field-label">Pickup & Handover Location</label>
                        <div className="field-input-wrap">
                          <i className="fa fa-map-marker input-icon" />
                          <select
                            name="pickupLocation"
                            value={formData.pickupLocation}
                            onChange={handleChange}
                            className="form-control-modern form-select-modern"
                          >
                            {LOCATION_OPTIONS.map((loc, i) => (
                              <option key={i} value={loc}>
                                {loc}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message / Special Requests */}
                      <div className="col-md-12 mb-3">
                        <label className="form-field-label">Additional Requests / Trip Details</label>
                        <textarea
                          name="message"
                          rows="3"
                          placeholder="e.g. Traveling to Srisailam with family of 5, need automatic transmission car with fastag..."
                          value={formData.message}
                          onChange={handleChange}
                          className="form-control-modern form-textarea-modern"
                        />
                      </div>
                    </div>

                    {/* DUAL ACTION BUTTONS */}
                    <div className="form-submit-row">
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="btn-inquiry-whatsapp"
                      >
                        <i className="fa fa-whatsapp" /> Inquire via WhatsApp
                      </button>

                      <button type="submit" className="btn-inquiry-online">
                        <i className="fa fa-paper-plane" /> Submit Online
                      </button>
                    </div>

                    <p className="form-footnote">
                      <i className="fa fa-lock" /> Your contact information is 100% confidential and only used for your car rental quote.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Complete Official Business Details */}
            <div className="col-lg-5 mb-4">
              <div className="contact-sidebar-panel">
                <div className="panel-header">
                  <span className="panel-badge">HEADQUARTERS</span>
                  <h3>Operations & Fleet Office</h3>
                </div>

                {/* Office Card */}
                <div className="info-block-card">
                  <div className="info-block-icon">
                    <i className="fa fa-building-o" />
                  </div>
                  <div className="info-block-content">
                    <h4>Central Hub & Office</h4>
                    <p className="address-text">
                      <strong>10-2-289/83, Mehar Mansion</strong>, Road Number 2,
                      Shantinagar Colony, Masab Tank,
                      Hyderabad, Telangana – 500028.
                    </p>
                    <span className="landmark-tag">
                      <i className="fa fa-compass" /> Landmark: Near Masab Tank Flyover / Shantinagar
                    </span>
                    <div className="mt-2">
                      <a
                        href="https://maps.google.com/?q=10-2-289/83,+Mehar+mansion,+Rd+Number+2,+Shantinagar+Colony,+Masab+Tank,+Hyderabad,+Telangana+500028"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-map-link"
                      >
                        <i className="fa fa-location-arrow" /> Get Driving Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="info-block-card">
                  <div className="info-block-icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="info-block-content">
                    <h4>Phone & Hotline</h4>
                    <div className="phone-action-row">
                      <a href="tel:+916300041186" className="primary-phone-link">
                        +91 6300041186
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyPhone}
                        className="btn-copy-chip"
                        title="Copy Phone Number"
                      >
                        {copySuccess ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="hours-note">Available Mon – Sun: 7:00 AM – 10:00 PM</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="info-block-card">
                  <div className="info-block-icon">
                    <i className="fa fa-envelope-o" />
                  </div>
                  <div className="info-block-content">
                    <h4>Official Email</h4>
                    <a href="mailto:driveitcars@gmail.com" className="email-link">
                      driveitcars@gmail.com
                    </a>
                    <p className="hours-note">Corporate inquiries & monthly invoices</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="info-block-card">
                  <div className="info-block-icon">
                    <i className="fa fa-clock-o" />
                  </div>
                  <div className="info-block-content">
                    <h4>Operating & Pickup Schedule</h4>
                    <ul className="schedule-list">
                      <li>
                        <span>Fleet Pickup & Returns:</span>
                        <strong>7:00 AM – 10:00 PM</strong>
                      </li>
                      <li>
                        <span>Doorstep Delivery Dispatch:</span>
                        <strong>6:00 AM – 11:00 PM</strong>
                      </li>
                      <li>
                        <span>WhatsApp Reservations:</span>
                        <strong className="badge-active">24/7 Active</strong>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Trust & Verification Badges */}
                <div className="rental-trust-summary">
                  <h5>
                    <i className="fa fa-shield" /> Booking Assurance
                  </h5>
                  <div className="trust-grid-mini">
                    <div className="trust-mini-item">
                      <i className="fa fa-id-card-o" />
                      <span>Instant 10-Min Digital KYC</span>
                    </div>
                    <div className="trust-mini-item">
                      <i className="fa fa-money" />
                      <span>Zero Deposit on Select Cars</span>
                    </div>
                    <div className="trust-mini-item">
                      <i className="fa fa-check" />
                      <span>Sanitized & Serviced Fleet</span>
                    </div>
                    <div className="trust-mini-item">
                      <i className="fa fa-plane" />
                      <span>Airport Terminal Meet & Greet</span>
                    </div>
                  </div>
                </div>

                {/* Social Connect */}
                <div className="contact-social-bar">
                  <span>Connect With Us:</span>
                  <div className="social-icon-links">
                    <a
                      href="https://wa.me/916300041186"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soc-btn wa"
                      title="WhatsApp"
                    >
                      <i className="fa fa-whatsapp" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soc-btn fb"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      href="https://maps.google.com/?q=10-2-289/83,+Mehar+mansion,+Rd+Number+2,+Shantinagar+Colony,+Masab+Tank,+Hyderabad,+Telangana+500028"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soc-btn map"
                      title="Google Maps"
                    >
                      <i className="fa fa-map-marker" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GOOGLE MAP HUB */}
      <section className="contact-map-section" id="masab-tank-map">
        <div className="container">
          <div className="map-card-wrapper">
            <div className="map-header-bar">
              <div className="map-title-left">
                <i className="fa fa-map-marker" />
                <div>
                  <h4>Central Fleet Office & Vehicle Handover Yard</h4>
                  <p>Mehar Mansion, Rd No 2, Shantinagar Colony, Masab Tank, Hyderabad 500028</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=10-2-289/83,+Mehar+mansion,+Rd+Number+2,+Shantinagar+Colony,+Masab+Tank,+Hyderabad,+Telangana+500028"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-map-directions"
              >
                <i className="fa fa-location-arrow" /> Open in Google Maps
              </a>
            </div>
            <div className="map-iframe-container">
              <iframe
                title="DriveIt Cars Masab Tank Hyderabad Location"
                src="https://maps.google.com/maps?q=10-2-289/83,%20Mehar%20mansion,%20Rd%20Number%202,%20Shantinagar%20Colony,%20Masab%20Tank,%20Hyderabad,%20Telangana%20500028&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
