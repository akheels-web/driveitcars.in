# DriveIt Cars Hyderabad 🚗✨

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Turbopack](https://img.shields.io/badge/Turbopack-Enabled-blueviolet?style=for-the-badge&logo=vercel)](https://turbo.build/)
[![Sanity CMS](https://img.shields.io/badge/Sanity%20CMS-v3-red?style=for-the-badge&logo=sanity)](https://www.sanity.io/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Status](https://img.shields.io/badge/Production-Ready-success?style=for-the-badge)](https://driveitcars.in)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

> Hyderabad’s premier self-drive car rental and luxury vehicle platform. Offering self-drive hatchbacks, sedans, SUVs, luxury wedding cars, and group travel coaches with transparent pricing, zero security deposits, and doorstep delivery across Hyderabad.

---

## 🌟 Key Highlights & Features

### 🏎️ Vehicle Fleet & Services
- **Self Drive Cars**: Hatchbacks (Swift, Baleno, i20), Sedans (Dzire, Verna, Ciaz), and SUVs (Creta, Seltos, Brezza, Thar 4x4, Innova Crysta, Fortuner).
- **Luxury Car Rentals**: Rolls Royce Phantom & Ghost, Mercedes-Benz S-Class & Maybach, BMW 7 Series, Audi A6/Q7, Porsche, and Range Rover Evoque for weddings, VIP transit, and executive delegations.
- **Group Travel Coaches & Luxury Buses**: Premium AC buses and mini coaches for outstation pilgrimages, corporate outings, and family weddings.
- **Chauffeur-Driven Outstation Cabs**: 24/7 verified airport drops, Hyderabad local hourly packages, and outstation tours across Telangana and Andhra Pradesh.

### 📍 Hyper-Local SEO Architecture (26 Hyderabad Localities)
Dedicated SEO landing pages with localized content, custom car cards, route landmarks, and unified FAQs across 26 major Hyderabad hubs:
- **West Zone**: Gachibowli, Hitech City, Jubilee Hills, Banjara Hills, Film Nagar, Guttala Begumpet.
- **North & East Zone**: Secunderabad, Begumpet, Bowenpally, Kukatpally, Ameerpet, SR Nagar, Tarnaka, Habsiguda, LB Nagar.
- **Central & South Zone**: Masab Tank, Khairatabad, Nampally, Mehdipatnam, Tolichowki, Shaikpet, Langer House, Sun City, Vijay Nagar Colony, Himmatnagar, Yousufguda.

### 🛠️ Embedded Headless CMS (Sanity v3)
- Built-in studio accessible at [`/studio`](https://driveitcars.in/studio).
- Manage cars dynamically: name, seats, transmission, fuel, km/day, extra rates, daily/monthly pricing, feature bullet points, and image hotspot uploads.
- **Multi-Page Target Selector**: Assign each car to display on the Homepage, category pages, or specific locality landing pages with a single click.
- Promotional sliders and banner control with zero code deployments.

### 📱 Mobile-First UI & High-Conversion CTAs
- **Responsive Mobile Navigation**: Touch-friendly slide-over drawer with expandable 2-section Area Service accordion.
- **Prominent Brand Identity**: Crisp, scalable 2.75:1 logo rendering across desktop and mobile headers and footers.
- **Interactive Subscription Toggle**: Instant Daily vs Monthly rental toggle on the homepage showcasing up to 50% monthly subscription savings.
- **Smart WhatsApp Enquiry Generator**: One-click WhatsApp buttons pre-filled with the exact vehicle name, daily/monthly rate, and enquiry text.
- **Zero Horizontal Overflow**: Guaranteed 100vw viewport constraint across all devices and browsers.

---

## 🏗️ Architecture & Technology Stack

```mermaid
graph TD
    Client[Web & Mobile Browsers] --> NextApp[Next.js App Router (Turbopack)]
    NextApp --> Header[Header & Mobile Navigation Drawer]
    NextApp --> Hero[HeroSlider Component]
    NextApp --> Offers[CarOffersSection & Dynamic Cards]
    NextApp --> Locality[26 Localized Landing Routes]
    NextApp --> FAQ[Uniform FaqSection Accordion]
    NextApp --> Footer[4-Column SEO Footer]
    NextApp --> SanityStudio[/studio CMS Management]
    SanityStudio --> SanityAPI[Sanity.io Headless Content Lake]
    NextApp -. GROQ Queries .-> SanityAPI
    NextApp --> StaticFallbacks[High-Availability Fallback Cache]
```

| Layer | Technology | Details |
|---|---|---|
| **Framework** | Next.js 16.3.8 (App Router) | Static Site Generation (SSG), Server Components & Client Hooks |
| **Compiler** | Turbopack | Ultra-fast local builds and incremental static regeneration |
| **Content Management** | Sanity CMS v3 | Headless content lake with dynamic `/studio` embedding |
| **Styling** | Vanilla CSS + Bootstrap Grid | Custom design tokens, responsive media queries, zero Tailwind bloat |
| **Icons & Typography** | FontAwesome 4.7 & 5.5, Poppins | Lightweight font stacks and vector SVG glyphs |
| **SEO Engines** | OpenGraph, JSON-LD, Robots, Sitemap | Dynamic `sitemap.xml`, `robots.txt`, and AI-crawler `llms.txt` |
| **Deployment** | Vercel Platform | Edge Network CDN, SSL auto-renewal, zero-downtime rollouts |

---

## 📁 Repository Directory Structure

```text
driveitcars/
├── public/                     # Static assets (images, banners, logos, fonts)
│   ├── assets/                 # CSS stylesheets, JS plugins, and icons
│   ├── banner5.avif - banner11 # High-res hero promo slides
│   ├── logo.png                # Primary dark logo (Header)
│   └── logo2.png               # Light vector logo (Footer & Mobile Drawer)
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (fleet routes)/     # /self-drive-car, /luxurycars, /luxury-buses, /cabs
│   │   ├── (locality routes)/  # /gachibowli, /banjara-hills, /hitech-city, etc.
│   │   ├── blog/               # SEO blog repository & dynamic slug pages
│   │   ├── studio/             # Embedded Sanity Studio CMS (/studio)
│   │   ├── layout.jsx          # Root layout wrapping Header, Footer, and FAQ handler
│   │   ├── page.jsx            # Homepage (Hero, Daily/Monthly Deals, About, Steps)
│   │   ├── sitemap.js          # Dynamic XML sitemap generator
│   │   ├── robots.js           # Production robots.txt generator
│   │   └── globals.css         # Custom responsive styles & mobile overrides
│   ├── components/             # Reusable UI components
│   │   ├── Header.jsx          # Responsive header & interactive mobile drawer
│   │   ├── Footer.jsx          # 4-column SEO footer & floating action buttons
│   │   ├── HeroSlider.jsx      # Touch-enabled hero carousel with swipe detection
│   │   ├── CarOffersSection.jsx# Interactive daily/monthly filterable car showcase
│   │   ├── CarCard.jsx         # Uniform vehicle card with call & WhatsApp CTAs
│   │   ├── FaqSection.jsx      # Schema-compliant interactive FAQ accordion
│   │   └── GlobalFaqHandler.jsx# Universal client accordion event interceptor
│   └── sanity/                 # Sanity Studio schemas & GROQ query layer
│       ├── schemaTypes/        # car.js, landingPage.js, offer.js, postType.js
│       └── lib/                # client.js, cars.js (data queries & fallbacks)
├── .agents/                    # AI Agent memory and architecture log (memory.md)
├── sanity.config.js            # Sanity Studio configuration & plugins
├── next.config.mjs             # Next.js optimization and image remote patterns
└── package.json                # Dependencies and npm build scripts
```

---

## 🚀 Getting Started (Local Development)

### 1. Prerequisites
- **Node.js**: `v18.17.0` or higher (`v20.x` recommended).
- **npm**: `v9.x` or higher.
- **Git**: Installed and configured.

### 2. Clone Repository
```bash
git clone https://github.com/akheels-web/driveitcars.in.git
cd driveitcars.in
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env.local` file in the project root:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=g0myfztr
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-10-02
SANITY_API_TOKEN=your_sanity_api_token_here
```
> *Note: If Sanity is offline or credentials are not provided, the application gracefully falls back to curated static fleet data with zero user disruption.*

### 5. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build & Test Production Bundle
```bash
npm run build
npm run start
```
Verify that all 63 static routes compile cleanly.

---

## 🎛️ Content Management via Sanity Studio

Access the embedded CMS at **`http://localhost:3000/studio`** (or `https://driveitcars.in/studio` in production).

### Managing Cars
1. Navigate to **Cars** in the studio sidebar.
2. Click **Create New Car**.
3. Fill in:
   - **Name**: e.g., `Hyundai Creta`.
   - **Category**: Select `SUV (5 Seater)`, `Sedan`, `Hatchback`, `SUV (7 Seater)`, `Luxury Car`, etc.
   - **Display Pages**: Multi-select where this vehicle should appear (`Homepage`, `Self Drive Cars Page`, `Gachibowli`, `Banjara Hills`, etc.).
   - **Image**: Upload photo and set the focal hotspot.
   - **Rates**: Daily Price, Monthly Subscription Price, Extra Km Rate, and Extra Hr Rate.
   - **Specifications**: Seats, Transmission (`Manual` / `Automatic`), and Fuel Type (`Petrol` / `Diesel`).
4. Click **Publish**. Changes reflect immediately.

---

## 🚢 Deployment to Vercel

For complete, step-by-step instructions on deploying to Vercel with custom domain setup and Sanity CORS configuration, refer to the [Vercel Deployment Guide](VERCEL_DEPLOYMENT_GUIDE.md).

Quick Deploy:
```bash
npm i -g vercel
vercel
```

---

## ⚡ Available npm Scripts

| Command | Action |
|---|---|
| `npm run dev` | Launches the Next.js Turbopack development server on port 3000 |
| `npm run build` | Compiles the production build and pre-renders all 63 static pages |
| `npm run start` | Boots the high-performance Next.js production server |
| `npm run lint` | Runs ESLint checks across the codebase |

---

## 📞 Support & Business Inquiries

- **Brand**: DriveIt Cars
- **Website**: [https://driveitcars.in](https://driveitcars.in)
- **Phone / WhatsApp**: [+91 6300041186](tel:+916300041186)
- **Email**: [driveitcars@gmail.com](mailto:driveitcars@gmail.com)
- **Head Office**: 10-2-289/83, Mehar Mansion, Rd No 2, Shantinagar Colony, Masab Tank, Hyderabad, Telangana 500028.
- **Operating Hours**: Mon to Sun: 7:00 AM – 10:00 PM

---

## 📄 License
Copyright © 2024-2026 DriveIt Cars. All rights reserved.
