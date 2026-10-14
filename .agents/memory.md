# Project Memory & Architectural Decisions

## Next.js Static to Dynamic Migration
- **Static Pages Migration**: All legacy static HTML pages (45+ pages) from `public/` have been migrated to native Next.js dynamic app router pages (`src/app/<route>/page.jsx`).
- **Layout Architecture**: 
  - Shared global components `Header.jsx` and `Footer.jsx` are situated in `src/components/` and wrapped within `src/app/layout.jsx`.
  - All internal links (`.html`) were normalized to clean Next.js path routes (e.g., `/self-drive-car.html` -> `/self-drive-car`).
- **Common JSX Parsing Pitfalls Resolved**:
  - Legacy HTML tags like `</br>` must be replaced with `<br />` (32 locality pages fixed).
  - Malformed copy-pasted blocks containing dangling `</div>` and `</section>` around `{/* lux car End */}` and `{/* lux Area End */}` were cleaned.
  - Nested HTML document snippets (`<meta charset="UTF-8"><title>FAQs</title></head><body>`) in middle-of-page FAQ blocks removed.
  - Invalid JSX properties like `aria-selected=>` replaced with `aria-selected="false"`.
  - Double open tags like `<p <p style=...>` and double closing tags like `</p></p>` normalized.
  - Resolved invalid nesting (e.g. `<p><p>...</p></p>`) causing browser hydration errors.
  - Normalized React JSX DOM properties (e.g., `encType` instead of HTML `enctype`).
  - Verified 100% clean compilation via Next.js Turbopack (`npm run build` generates 53/53 static routes successfully).

## Git Tracking & Repository Cleanup
- Purged 6,826 legacy WordPress files (`/blog`) and 60 unrelated Umrah package files (`/public/banjarahills`).
- Added `/.private/` to `.gitignore` to prevent sensitive server configs from leaking to GitHub.
- Removed 15 temporary scratch migration/recovery scripts from workspace root.
- Clean tracked file count reduced from ~7,150 files to 244 legitimate Next.js application and asset files.

## Header Styling & UI Fixes
- **Logo Stretched Fix**: Eliminated conflicting fixed-width rules (`width: 240px !important`) that clashed with `max-height: 50px`. Replaced with `height: 52px !important; width: auto !important; object-fit: contain !important;` to preserve the natural 2.75:1 aspect ratio.
- **Top-Bar Overlapping**: Disabled `.header-top-left:before` skewed polygon pseudo-element that was slicing across the phone number. Restored clean horizontal flex layout with dark background and golden accents.
- **Request a Call Button**: Disabled `.header-action a:before` skewed trapezoid ribbon artifact that was poking out of the modern pill button.
- **Address Icon**: Replaced misplaced clock icon (`clock.png`) with golden `#ffb907` location pin SVG (`/assets/img/map-marker.svg`).
- **Area Service 2-Section Dropdown Fix**: Resolved conflict where `style.css`'s `.mainmenu ul li ul` absolute positioning was collapsing nested `<ul>`s at `left: 0`. Replaced nested lists with `<div className="area-links-box">` and `<Link>`, ensuring both `Section 1 (A – J)` and `Section 2 (L – Y)` render their 11 items side by side in normal flex flow.

## Homepage & Component Enhancements
- **Hero Sliding Banner**: Built native `'use client'` `HeroSlider.jsx` with touch swiping, auto-advance (4.5s), dot indicators, and pause-on-hover, replacing uninitialized jQuery `owl-carousel` on `/` and `/cabs`.
- **Daily & Monthly Offers Explore Section**: Created `CarOffersSection.jsx` with interactive Daily vs Monthly subscription switch (showing up to 50% monthly discount), category filter tabs (Sedans, SUVs, Luxury), detailed vehicle specifications, and dual CTA buttons (`Enquire Now` phone call + car-specific custom WhatsApp message).
- **The DRIVEIT Advantage (Single-Line Redesign)**: Replaced bulky 6-box grid with a sleek, compact single-line horizontal strip featuring gold icon pills (`100% Privacy`, `Zero Deposit`, `Best Rates`, `Doorstep Drop`).
- **Heading Overlap Resolution**: Fixed `.site-heading` overlap between "Why Travelers Trust Us" and "Why Choose DriveIt Cars?" by applying `display: block !important; clear: both !important;` to subtitle and heading elements.
- **Uniform Interactive FAQ System**: 
  - Standardized FAQ across all pages using `FaqSection.jsx`.
  - Added global client click handler `GlobalFaqHandler.jsx` in `layout.jsx` to intercept legacy Bootstrap data-toggle accordions across all 50+ locality pages, preventing page-jump bugs and applying modern unified styling.
- **Cabs Page Modernization**:
  - Redesigned intro section below banner with chauffeur service badges, clean typography, and 4 highlight cards.
## Car Action Buttons & Fleet-Wide Rollout
- **CSS Deconfliction & Artifact Removal**:
  - Eliminated `.offer-action:after` and `.offer-action:before` skewed polygon pseudo-elements (`background: #ffb907; transform: skewX(40deg);`) across `style.css`, `responsive.css` (lines 199 and 693), and `globals.css` that created the visual corruption behind car buttons.
  - Converted `.offer-action` to a clean 2-column grid (`display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 8px !important; margin: 18px auto 0 !important; background: transparent !important;`).
- **Standardized Dual CTA Actions**:
  - **Button 1 (Enquire Now)**: Configured as direct telephone call action (`href="tel:+916300041186"`) with golden phone icon `<i className="fa fa-phone" />`, dark slate `#0f172a` pill, and gold hover state. Corrected typo from "Enquiry Now" to "Enquire Now".
  - **Button 2 (WhatsApp Us)**: Configured with official WhatsApp green `#25D366`, white whatsapp icon `<i className="fa fa-whatsapp" />`, and vehicle-specific pre-filled enquiry text (e.g. `Hi DRIVEIT Cars, I am contacting you to enquire about booking the [Car Name]. Please share availability and rates.`).
- **Site-Wide Fleet Application**:
  - Successfully migrated 686 car cards across all 35 vehicle-listing and locality pages (`self-drive-car`, `self-drive-car-in-banjarahills`, `luxurycars`, `sedan`, `suv5`, `suv7`, `hatchback`, `luxury-buses`, `outstation-bus`, and 26 Hyderabad locality pages).
  - All 53 Next.js static routes verified via `npm run build` with zero compile errors.

## Vehicle Image Full-Box Display & Uniform FAQ
- **Full Box Car & Bus Images**:
  - Root cause: `style.css` constrained `.offer-image` to a narrow `235px` width and applied `object-fit: cover !important` at line 4762, horizontally slicing cars and buses in half.
  - Fix: Modernized `.offer-image` to `width: 100% !important; height: 195px !important; background: #f8fafc; border-radius: 12px; display: flex; align-items: center; justify-content: center; overflow: hidden;` and updated image rules to `max-width: 100% !important; max-height: 100%; object-fit: contain !important; object-position: center !important;`. The full vehicle is now visible without any cropping.
- **Site-Wide Uniform FAQ**:
  - Upgraded `<FaqSection />` component to accept dynamic `items`, `title`, `subtitle`, and `badge` props with automatic fallback to core high-authority FAQs.
  - Replaced legacy split 2-column broken HTML accordions (`gauto-service-details-area`) with `<FaqSection />` across all 33 fleet and locality pages.
- **Footer Polish**:
  - Removed social media icon placeholders (`footer-social`) from `src/components/Footer.jsx`.
- **Sanity CMS Dynamic Fleet Architecture**:
  - **Schema Expansion (`car.js`)**: Configured comprehensive document fields including vehicle name, category dropdown (Hatchback, Sedan, SUV 5-seater, SUV 7-seater, Luxury, Cab, Bus), `displayPages` multi-select checklist (Homepage, Category pages, all 26 locality pages), image upload with hotspot, seats, transmission, fuel type, km/day, extra km rate, extra hr rate, daily/monthly rates, features list, and sort order.
  - **Data Layer (`cars.js` & `CarCard.jsx`)**: Built `getCarsForPage(pageSlug, defaultCategory)` with automatic GROQ querying and curated zero-downtime fallback fleet data. Created reusable `<CarCard />` component.
- **Dead Script Tags Removal**:
  - Root cause: Legacy template copy-paste had `<script dangerouslySetInnerHTML={{ __html: document.addEventListener('DOMContentLoaded' ... bookNowBtn) }} />` inside React component JSX.
  - Fix: Purged dead script tags across all 33 pages (`yousufguda`, `about`, `banjara-hills`, etc.), eliminating React console and hydration errors entirely.

## Area Services & Locality Route Alignment
- **Missing Locality Route Resolution (Zero 404s)**:
  - Root cause: 10 locality pages were named with a `-luxury-car-rental` suffix (e.g. `/gachibowli-luxury-car-rental`), while the Header dropdown and Footer linked to clean short paths (`/gachibowli`, `/lb-nagar`, `/mehdipatnam`, `/tarnaka`, etc.), causing 404 empty pages when clicked.
  - Fix: Created matching routes for all 10 short paths (`/gachibowli`, `/guttala-begumpet`, `/habsiguda`, `/khairatabad`, `/lb-nagar`, `/mehdipatnam`, `/nampally`, `/Shaikpet`, `/tarnaka`, `/tolichowki`), each populated with complete area SEO content, full 21-car fleet cards, direct call button, car-specific WhatsApp enquiry, and `<FaqSection />`. Both short and long URLs are preserved for seamless SEO backlink compatibility.
- **Area Service Dropdown Expansion**:
  - Aligned `Header.jsx` Area Service dropdown to display all 26 Hyderabad service localities, cleanly divided into two balanced 13-item columns (`Section 1 (A – K)` and `Section 2 (L – Y)`).
  - Total static production routes expanded to 63/63, all compiling cleanly with 0 errors.

## Brand Logo Sizing & Mobile Responsiveness Overhaul
- **Brand Logo Enlargement**:
  - **Header Logo**: Increased size to `height: 72px; maxHeight: 76px; maxWidth: 260px;` (desktop) and `height: 52px;` (mobile). Maintains natural 2.75:1 aspect ratio (`object-fit: contain;`) without blur or stretch.
  - **Footer Logo**: Increased size to `height: 60px; maxHeight: 66px; maxWidth: 230px;` with margin-bottom 22px for a balanced footer column anchor.
- **Mobile Navigation Drawer (`Header.jsx`)**:
  - Converted `Header.jsx` to an interactive client component (`'use client'`).
  - Added clean state management for `mobileMenuOpen` and `areaAccordionOpen`.
  - Added a responsive header top bar: compact on mobile, preventing awkward text wrapping.
  - Added header action bar on mobile: quick-call pill button (`<a href="tel:...">Call</a>`) + hamburger menu button (`<i className="fa fa-bars" />` toggling to `fa fa-times`).
  - Built an accessible slide-over mobile navigation drawer with backdrop blur, primary navigation links (Home, Self Drive, Luxury Cars, Luxury Buses, Cabs, Blogs, Contact), an expandable accordion for all 26 Area Service locations split into Section 1 & Section 2, and bottom quick-action buttons for Direct Call and WhatsApp.
- **Hero Slider & Banner Mobile Optimization**:
  - Resolved "half cut banner" issue caused by horizontal viewport overflow and rigid aspect ratio constraints.
  - Re-engineered `HeroSlider.jsx` with responsive classes (`.hero-responsive-slider`, `.hero-slider-img`, `.hero-slider-nav-btn`, `.hero-slider-dots`). On mobile (`<= 768px`), image scales with `object-fit: contain` and max-height 280px so graphic promotional banners and text are never cropped.
  - Navigation arrows resized from 46px to 32px on mobile and positioned compactly at edges so they don't block the banner graphic.
  - Inner page breadcrumb banners (`.gauto-breadcromb-area`) updated with `background-attachment: scroll !important;` for mobile screens, eliminating the mobile browser bug where `fixed` background attachment zoomed into the image and sliced it in half.
- **Touch-Optimized Mobile Buttons**:
  - **Pricing Mode Toggle (`CarOffersSection.jsx`)**: Replaced non-wrapping 410px+ container with a 100% fluid responsive pill (`maxWidth: 460px`, `flex: 1` buttons) that cleanly fits 320px–390px mobile screens without causing page overflow.
  - **Car Card Action Buttons**: Added `.car-card-actions`, `.car-card-btn`, and updated `.offer-action` with responsive padding (`8px 4px`), 11px uppercase font, and 38px+ touch target height for mobile screens.
  - **Floating Contact Buttons**: Resized and positioned WhatsApp (`bottom: 80px`, `right: 16px`) and Call (`bottom: 20px`, `right: 16px`) buttons on mobile with 48px round touch targets.
- **Global Viewport & Overflow Prevention**:
  - **Mobile Header Action Buttons (Minimalist Design)**:
  - User requested removing the mobile Call button completely from the header bar to keep the design clean and uncluttered.
  - Mobile header now displays exclusively the prominent DRIVEIT Logo on the left (`col-8`) and the dark hamburger Menu button on the right (`col-4`), with full Call and WhatsApp options conveniently available in the slide-over drawer and floating buttons.

## Git Repository & Deployment Remote
- **Remote Origin**: `https://github.com/akheels-web/driveitcars.in.git`
- **Pushed Branches**: `main` (default tracking branch) and `master`.
- **Status**: Clean working tree with all 63 Next.js static pages, Sanity CMS schemas, mobile responsive enhancements, and public assets pushed.

## Sanity Studio & CMS Architecture Overhaul
- **Fullscreen Studio Isolation**:
  - Extracted `<SiteLayoutWrapper />` in `src/components/SiteLayoutWrapper.jsx` to wrap `RootLayout`. When `pathname?.startsWith('/studio')`, it returns `<>{children}</>` directly without mounting `Header`, `Footer`, or `GlobalFaqHandler`.
  - Fixed React Hook ordering in `Header.jsx` by placing route checks after all `useEffect` hooks, preventing React hydration freeze.
  - Eliminated conflicting nested `<html><body>` tags in `src/app/studio/[[...tool]]/layout.jsx`.
- **Singleton Structure Configuration (`sanity.config.js`)**:
  - Configured custom structure where `Site Settings` and `Landing Page (Home)` are singletons using `S.document().schemaType(...).documentId(...)`. Clicking them in the Studio sidebar immediately opens the document editor rather than an empty "No documents of this type" list.
- **Dataset Seeding (30 Documents)**:
  - Seeded complete data into `production` dataset:
    - `siteSettings`: Title, description, phone (+91 6300041186), WhatsApp, email, physical office address, working hours, and logo asset.
    - `landingPage`: 3 hero slider banners with CDN image assets, About section badge/heading/paragraphs, SEO meta.
    - 10 Fleet Vehicles (`car`): Swift, Baleno, Dzire, Creta, Innova Crysta, Thar 4x4, Fortuner 4x4, Evoque, 35-Seater Bus, Verna with full specs, rates, and badges.
    - 3 Offers (`offer`): Weekend, Monthly, Wedding deals with coupon codes.
    - 3 Customer Testimonials (`testimonial`): 5-star verified reviews.
- **Obsolete jQuery Script Elimination**:
  - Purged obsolete static HTML template jQuery scripts (`jquery-3.2.1`, `bootstrap.min.js`, `owl.carousel.min.js`, `slicknav.min.js`, etc.) from `SiteLayoutWrapper.jsx`.
  - All slider, mobile navigation, FAQ accordions, and pricing toggles are now 100% native React components (`HeroSlider.jsx`, `Header.jsx`, `FaqSection.jsx`, `CarOffersSection.jsx`).
- **Privacy Policy & Terms & Conditions Redesign**:
  - Rebuilt [src/app/privacy/page.jsx](file:///e:/Github/driveitcars/public_html/src/app/privacy/page.jsx) and [src/app/terms-conditions/page.jsx](file:///e:/Github/driveitcars/public_html/src/app/terms-conditions/page.jsx) with an executive legal layout.
  - Features: dark gradient hero breadcrumbs, sticky Table of Contents sidebar for rapid navigation, card-based section layout, security deposit comparison table, 80 km/h speed limit alert callouts, KYC documentation checklists (Locals vs Outstation/NRI), cancellation matrix, and Grievance Officer details.
  - Eliminated legacy duplicate menus, all-caps text, and broken HTML formatting.

## Contact Page Redesign & Site-Wide Breadcrumb Overhaul
- **Contact Page Complete Redesign (`src/app/contact/page.jsx` & `ContactClient.jsx`)**:
  - **Executive Breadcrumb Banner**: Dark gradient hero overlay with eyebrow badge (`✦ 24/7 RESERVATIONS & CUSTOMER CARE`), crisp H1, and breadcrumb capsule trail.
  - **Quick Contact Strip**: 4 modern cards for Direct Hotline (`+91 6300041186`), WhatsApp Fleet Desk (`24/7 Active`), Central Hub (`Masab Tank, HYD`), and Doorstep Delivery (`All 26 Hubs`).
  - **Balanced 2-Column Workspace**:
    - **Interactive Booking Form**: Name, Phone, Email, Vehicle Category, Pickup Date & Time, Duration, Location, and Notes.
    - **Refined Inquiry Buttons**: Single-line 50/50 grid layout (`grid-template-columns: 1fr 1fr; gap: 14px;`) with `white-space: nowrap`, centered icons, and balanced 50px heights:
      - Primary WhatsApp button: `Inquire via WhatsApp` (emerald `#25D366` with pre-filled enquiry text).
      - Online Submission button: `Submit Online` (dark slate `#0f172a` with gold hover).
    - **Central Operations Hub Details**: Official address at `Mehar Mansion, Rd No 2, Shantinagar Colony, Masab Tank`, operating hours (`7:00 AM – 10:00 PM`), click-to-call, email, KYC trust badges (10-min digital verification, zero deposit on select cars, sanitized fleet), and social links.
  - **Interactive Google Map Card**: Embedded iframe for Masab Tank hub with "Open in Google Maps" action button.
  - **Booking FAQ Section**: Powered by `<FaqSection />` covering turnaround time, office walk-ins, airport delivery, and deposits.
- **Site-Wide Breadcrumbs Overhaul (47 Pages Fixed)**:
  - **Icon Case Sensitivity Bug**: Fixed `fa-Home` (capital H) to `fa-home` across 45 pages where the Home icon was completely invisible.
  - **Broken Home Route Resolution**: Repaired `href="/index"`, `href="/index-2"`, and `href=""` to `href="/"` across 47 pages, preventing broken navigation and 404s.
  - **Modern Breadcrumb Design System (`globals.css`)**:
    - High-contrast dark vignette gradient overlay (`rgba(11, 17, 32, 0.84)` to `rgba(15, 23, 42, 0.94)`).
    - Glassmorphism pill capsule (`background: rgba(15, 23, 42, 0.68); backdrop-filter: blur(12px); border-radius: 50px; border: 1px solid rgba(255, 255, 255, 0.16);`).
    - Golden icon glow on `fa-home` and muted `fa-angle-right` dividers.
    - Active page highlighted in `#ffb907` gold.
  - All 63 static Next.js production routes build cleanly with zero errors.

## Cloudflare DNS Configuration & Audit (Vercel & Hostinger Email)
- **Website (Vercel)**:
  - `driveitcars.in` (A): `76.76.21.21` (Points to Vercel).
  - `www.driveitcars.in` (CNAME): Must be added pointing to `cname.vercel-dns.com` (or `driveitcars.in`).
  - Delete legacy Hostinger `AAAA` records (`2a02:4780:...`) to prevent IPv6 traffic from routing to old Hostinger server.
  - Delete or redirect legacy WordPress `blog.driveitcars.in` (`217.21.95.158`) since blogs are now integrated natively in Next.js (`/blog`) via Sanity CMS.
- **Email (Hostinger)**:
  - Keep `MX` records (`mx1.hostinger.com`, `mx2.hostinger.com`) on **DNS only**.
  - Keep SPF (`v=spf1 include:_spf.mail.hostinger.com ~all`) and DMARC (`v=DMARC1; p=none`) on **DNS only**.
  - **DKIM CNAMEs** (`hostingemail-a`, `-b`, `-c`): MUST be set to **DNS only (Grey cloud)**; proxied orange cloud breaks DKIM cryptographic signature verification.
  - Mail auto-config (`autoconfig`, `autodiscover`): Switch to **DNS only** to prevent mail client connection issues.
- **Cloudflare SSL/TLS Mode**: Must be set to **Full (Strict)** to avoid `ERR_TOO_MANY_REDIRECTS` loops with Vercel's edge.
- **Vercel Production Verification**:
  - Apex `driveitcars.in` and `www.driveitcars.in` successfully verified on Vercel (`d08923095b177c5a.vercel-dns-017.com`).
  - Production build status is `Ready` on Vercel (`bom1` Mumbai Edge).
  - Any temporary `DNS_PROBE_FINISHED_NXDOMAIN` in client browsers is due to local router/ISP negative DNS caching (NXDOMAIN cached before `www` was created), resolved via TTL expiry, switching to Google DNS/DoH, or testing on mobile cellular data.
- **Sanity CMS Live Updates & Dynamic Rendering**:
  - `src/sanity/lib/client.js`: Set `useCdn: false` so API requests hit the live Sanity dataset without waiting for Edge CDN cache invalidation.
  - `src/app/page.jsx`, `src/app/blog/page.jsx`, `src/app/blog/[slug]/page.jsx`: Configured with `export const dynamic = 'force-dynamic'` and `export const revalidate = 0`. This switches routes from build-time static generation (`○`) to server-rendered on demand (`ƒ`), allowing slider banners, cars, and blog posts updated in Sanity Studio to reflect immediately on the live website upon publish.
  - `src/components/HeroSlider.jsx`: Added support for custom slide destination links (`slide.link || "/self-drive-car"`).
- **Sanity Full Landing Page, Site Settings & 26 Locality Pages Expansion**:
  - **Landing Page (`landingPage.js`)**: Expanded with all missing sections — Hero Slider, About Section (eyebrow, heading, descriptions, visual image upload, counters, 4 feature highlights grid, CTA links), 4-Step Booking Process, The DRIVEIT Advantage Strip, Why Choose Us (6 feature cards), Partner / Promo CTA Banner, and Google Maps iframe embed URL.
  - **Site Settings & Global Footer (`siteSettings.js` & `SiteSettingsContext.jsx`)**: Connected Header, Footer, and floating buttons to dynamic Sanity data with transparent PNG logo upload, phone numbers, WhatsApp, email, office address, working hours, footer bio, trust badges checklist, and copyright notice.
  - **Location Specific Pages (`locationPage.js`, `locations.js`, `LocationPageContent.jsx`)**: Created document collection in Sanity Studio for all 26 Hyderabad localities + 10 alias routes. Replaced 23,788 lines of legacy duplicated static HTML with clean dynamic components connected to Sanity. Seeded all 26 localities into `production` dataset with full localized copy, landmark tags, and SEO tags.

## High-Intent SEO Architecture & Top 10 Keywords Domination
- **Target Keywords Deployed**:
  1. `self drive cars Hyderabad`: Primary city hub at `/self-drive-car` and homepage `/`.
  2. `self drive cars HITEC City`: Dedicated corridor hub at `/hitech-city` with Cyber Towers, Mindspace, DLF, Inorbit landmarks.
  3. `self drive cars Gachibowli`: Dedicated corridor hub at `/gachibowli` with Financial District, Wipro Circle, Waverock, ORR Exit 19.
  4. `self drive cars Madhapur`: Brand new landing page at `/madhapur` covering 100 Feet Road, Durgam Cheruvu, Kavuri Hills, Inorbit.
  5. `self drive cars Kondapur`: Brand new landing page at `/kondapur` covering Botanical Garden, Kothaguda, Sarath City Capital Mall.
  6. `self drive SUV Hyderabad`: Powerhouse landing page at `/self-drive-suv-hyderabad` targeting 5-seater and 7-seater SUVs (Thar 4x4, Creta, Fortuner, Innova Crysta, XUV700, Brezza). Cross-linked from `/suv5` and `/suv7`.
  7. `luxury self drive cars Hyderabad`: Dedicated luxury hub at `/luxurycars` targeting BMW, Mercedes, Audi, Range Rover Evoque, Fortuner Legender.
  8. `premium self drive cars Hyderabad`: Weaved into `/luxurycars` and `/luxury-car-in-hyderabad`.
  9. `weekend self drive cars Hyderabad`: Specialized landing page at `/weekend-self-drive-cars-hyderabad` featuring Friday–Monday getaway bundles, unlimited km road trips (Srisailam, Nagarjuna Sagar, Ananthagiri, Warangal, Bidar).
  10. `monthly self drive cars Hyderabad`: Dedicated subscription landing page at `/monthly-self-drive-cars-hyderabad` with up to 45% discount, comparison matrix (buying vs subscription), zero maintenance, and corporate tax deduction benefits.
- **Technical SEO Upgrades**:
  - **Sitemap.js Overhaul**: Completely rewritten to generate all 68 dynamic and static URLs across core hubs (1.0), corridors and categories (0.9), localities (0.8), and blog posts with correct change frequencies.
  - **Robots.js**: Configured to disallow internal `/studio/` and `/api/` paths while declaring XML sitemap.
  - **Structured Data (`SeoSchema.jsx`)**: Built and embedded Google-compliant JSON-LD schemas (`AutoRental`, `CarRental`, `LocalBusiness`, `FAQPage`, and `BreadcrumbList`) across all landing pages for rich snippet visibility.
  - **Navigation & Internal Linking**: Added `Kondapur` and `Madhapur` to desktop & mobile Area Service dropdowns (`Header.jsx`) and integrated exact-match keyword anchors in `Footer.jsx`.
  - **Zero Compile Errors**: Verified clean build via `npm run build` with 68 static and dynamic Next.js App Router routes compiling without error.

## Airport Targeting Keywords Overhaul (RGIA Shamshabad)
- **Keywords Deployed & Optimized**:
  1. `Hyderabad Airport car rental`: High-authority landing page at `/hyderabad-airport-car-rental` with RGIA terminal handover, 24/7 service.
  2. `HYD Airport self drive`: Dedicated self-drive airport fleet (Creta, Thar 4x4, Innova Crysta, Dzire) with 10-minute terminal handover.
  3. `airport pickup Hyderabad`: Punctual chauffeur meet-and-greet with flight tracking and luggage loading at arrival gate.
  4. `airport drop Hyderabad`: On-time pickup from all 26+ Hyderabad zones (HITEC City, Gachibowli, Banjara Hills, Secunderabad) with zero surge pricing.
  5. `airport luxury car rental Hyderabad`: VIP arrivals in Mercedes-Benz, BMW, Audi, Range Rover Evoque, and Fortuner Legender.
  6. `airport chauffeur service Hyderabad`: Verified, executive highway chauffeurs with FASTag, English/Hindi/Telugu fluency.
  7. `airport SUV rental Hyderabad`: 5 & 7-seater SUVs with luggage capacity for 4–6 international check-in suitcases.
- **Architectural & Technical Enhancements**:
  - **New High-Intent Route**: Built `src/app/hyderabad-airport-car-rental/page.jsx` with full SEO metadata, `AutoRental` schema for RGIA Shamshabad, `FAQPage` schema, travel time table to key Hyderabad tech corridors.
  - **Cabs Page Enhancement**: Upgraded `src/app/cabs/page.jsx` with full metadata, `AutoRental` & `FAQPage` schemas targeting airport pickups and drops.
  - **Sitemap Priority**: Registered `/hyderabad-airport-car-rental` in `src/app/sitemap.js` as Tier 1 Core Hub (1.0 Priority, Daily Frequency).
  - **Navigation Integration**: Added "Airport Rental" in `Header.jsx` desktop menu and mobile navigation drawer; added exact-match airport keyword anchors in `Footer.jsx` and `self-drive-car/page.jsx`.

## Luxury Car Rentals & VIP Chauffeur Targeting Overhaul
- **Keywords Deployed & Targeted for #1 Ranking**:
  1. `Mercedes rental Hyderabad`: Dedicated landing page at `/mercedes-rental-hyderabad` targeting Mercedes-Benz S-Class 500, E-Class 250, Maybach, G-Wagon (G63), and 2-seater convertibles.
  2. `BMW rental Hyderabad`: Dedicated landing page at `/bmw-rental-hyderabad` targeting BMW 5 Series and flagship BMW 7 Series for self drive and executive chauffeur hire.
  3. `Audi rental Hyderabad`: Dedicated landing page at `/audi-rental-hyderabad` targeting Audi A6 Matrix Edition, 7-seater Audi Q7 Quattro SUV, and Audi 2-seater roadster.
  4. `Range Rover rental Hyderabad`: Dedicated landing page at `/range-rover-rental-hyderabad` targeting Range Rover Evoque and Range Rover Sport / Vogue for weddings and VIP arrivals.
  5. `luxury chauffeur Hyderabad`: Dedicated landing page at `/luxury-chauffeur-hyderabad` with protocol-trained, suited, background-verified executive drivers, English/Hindi/Telugu fluency, and fixed transparent tariffs.
  6. `VIP car rental Hyderabad`: Dedicated powerhouse landing page at `/vip-car-rental-hyderabad` targeting corporate boards, visiting CXOs, international delegations, and celebrity security convoys.
  7. `executive car rental Hyderabad`: Weaved into `/vip-car-rental-hyderabad` and `/luxury-chauffeur-hyderabad` with corporate GST billing, dedicated account manager, and non-disclosure compliance.
  8. `CEO car rental Hyderabad`: Anchored at `/vip-car-rental-hyderabad` featuring Mercedes-Maybach, BMW 7 Series, Rolls Royce Phantom, and Fortuner Legender escorts.
- **Architectural & Technical Enhancements**:
  - **New High-Authority Dedicated Routes**:
    - `src/app/mercedes-rental-hyderabad/page.jsx`
    - `src/app/bmw-rental-hyderabad/page.jsx`
    - `src/app/audi-rental-hyderabad/page.jsx`
    - `src/app/range-rover-rental-hyderabad/page.jsx`
    - `src/app/luxury-chauffeur-hyderabad/page.jsx`
    - `src/app/vip-car-rental-hyderabad/page.jsx`
  - **Category Master Hub Overhaul**:
    - `src/app/luxurycars/page.jsx`: Added brand category jump pills linking directly to all 6 specialized luxury routes.
    - `src/app/luxury-car-in-hyderabad/page.jsx`: Upgraded with `AutoRental`, `BreadcrumbList`, and `FAQPage` schemas; purged legacy PHP modal form; cross-linked all 6 brand routes.
  - **Internal Linking & Navigation**:
    - `src/components/Footer.jsx`: Embedded dedicated full-width "Luxury & VIP Car Rentals Hyderabad" SEO strip with exact-match anchors for all 8 target keywords.
    - `src/components/Header.jsx`: Added direct "VIP & CEO Car Rental" link in the mobile navigation drawer.
    - `src/app/cabs/page.jsx` & `src/app/hyderabad-airport-car-rental/page.jsx`: Cross-linked luxury chauffeur and brand rental pages.
  - **Sitemap Priority**:
    - `src/app/sitemap.js`: Registered all 6 new luxury landing pages in Tier 1 Core Hubs with `1.0` priority and `daily` change frequency.
  - **Turbopack Build Verification**:
    - Clean compilation via `npm run build` with 75/75 routes generated without error.

## Wedding Car Rentals Targeting Overhaul
- **Keywords Deployed & Targeted for #1 Ranking**:
  1. `wedding car rental Hyderabad`: Dedicated master pillar page at `/wedding-car-rental-hyderabad` featuring full wedding fleet, curated baraat and full-day packages, suited chauffeurs, and fresh floral styling.
  2. `luxury wedding cars Hyderabad`: Master category anchor at `/wedding-car-rental-hyderabad` showcasing Rolls Royce, Mercedes-Maybach, Range Rover, Audi, and BMW.
  3. `bridal entry car Hyderabad`: Dedicated landing page at `/bridal-entry-car-hyderabad` targeting open-top convertibles (Mercedes Cabriolet, Audi 2-Seater Roadster) and classic open-air tourers for rose petal showers and cinematic aisle arrivals.
  4. `groom entry luxury car Hyderabad`: Dedicated landing page at `/groom-entry-luxury-car-hyderabad` targeting commanding baraat vehicles (Mercedes-AMG G-Wagon G63, Rolls Royce Phantom, Range Rover Sport, Fortuner Legender convoy).
  5. `Rolls Royce wedding Hyderabad`: Dedicated royal flagship landing page at `/rolls-royce-wedding-hyderabad` featuring Rolls Royce Phantom, Ghost, and Cullinan for Nizami grandeur and wedding receptions.
  6. `Mercedes wedding car Hyderabad`: Anchored at `/mercedes-rental-hyderabad` and featured across `/wedding-car-rental-hyderabad` covering Maybach, S-Class 500, E-Class, and convertibles.
  7. `vintage wedding car Hyderabad`: Dedicated heritage landing page at `/vintage-wedding-car-hyderabad` targeting classic open-top vintage tourers and retro roadsters with uniformed chauffeurs.
- **Architectural & Technical Enhancements**:
  - **New High-Authority Dedicated Routes**:
    - `src/app/wedding-car-rental-hyderabad/page.jsx`
    - `src/app/rolls-royce-wedding-hyderabad/page.jsx`
    - `src/app/vintage-wedding-car-hyderabad/page.jsx`
    - `src/app/bridal-entry-car-hyderabad/page.jsx`
    - `src/app/groom-entry-luxury-car-hyderabad/page.jsx`
  - **Structured Data (JSON-LD)**:
    - Embedded `AutoRental`, `FAQPage`, and `BreadcrumbList` schemas across all 5 wedding pages.
  - **Internal Linking & Sitewide Authority**:
    - `src/components/Footer.jsx`: Added dedicated full-width "Wedding Car Rentals Hyderabad" SEO keyword strip featuring exact-match anchors for all 7 target keywords.
    - `src/components/Header.jsx`: Added "Wedding Cars" in both desktop main navigation and mobile navigation slide-over drawer.
    - `src/app/luxurycars/page.jsx`: Added interactive jump pills linking directly to wedding car rental, Rolls Royce wedding, and vintage wedding car pages.
  - **Sitemap Priority**:
    - `src/app/sitemap.js`: Registered all 5 new wedding landing pages in Tier 1 Core Hubs with `1.0` priority and `daily` change frequency.
  - **Turbopack Build Verification**:
    - Clean compilation via `npm run build` with 80/80 routes generated without error.

## Corporate Clients Targeting Overhaul
- **Keywords Deployed & Targeted for #1 Ranking**:
  1. `corporate car rental Hyderabad`: Dedicated B2B master landing page at `/corporate-car-rental-hyderabad` targeting enterprises, tech MNCs, consulting firms, and startups in HITEC City, Gachibowli, Financial District, Mindspace, and Kokapet. Highlights 100% GST input tax credit invoices, dedicated corporate account managers, suited background-verified chauffeurs, spot tariffs (4h/40km, 8h/80km), and airport transfers.
  2. `executive chauffeur Hyderabad`: Reinforced dedicated landing page at `/luxury-chauffeur-hyderabad` targeting suited executive chauffeurs, English/Hindi/Telugu fluency, corporate protocol, NDA ethics, and VIP transfers for visiting boards, CXOs, and foreign delegates.
  3. `monthly corporate car rental Hyderabad`: Dedicated long-term fleet subscription landing page at `/monthly-corporate-car-rental-hyderabad` targeting IT enterprises, resident directors, and expatriate executives. Emphasizes zero capex, zero depreciation, 100% opex tax deductibility, up to 45% savings vs daily rentals, and guaranteed replacement cars during servicing.
- **Architectural & Technical Enhancements**:
  - **New High-Authority Dedicated Routes**:
    - `src/app/corporate-car-rental-hyderabad/page.jsx`: Complete corporate pillar page with business tariffs, executive fleet showcase, enterprise advantages, interactive B2B FAQ with schema, and dual call/WhatsApp CTAs.
    - `src/app/monthly-corporate-car-rental-hyderabad/page.jsx`: Dedicated long-term lease page with buy vs lease comparison matrix, monthly tiers (Executive Sedan, Executive MUV, CXO Luxury Sedan, Luxury Coach), replacement guarantees, and FAQ schema.
  - **Structured Data (JSON-LD)**:
    - Embedded `AutoRental`, `FAQPage`, and `BreadcrumbList` schemas across `/corporate-car-rental-hyderabad` and `/monthly-corporate-car-rental-hyderabad`.
  - **Internal Linking & Sitewide Authority**:
    - `src/components/Footer.jsx`: Added dedicated full-width "Corporate & Business Car Rentals Hyderabad" SEO strip with exact-match anchors for `corporate car rental Hyderabad`, `executive chauffeur Hyderabad`, `monthly corporate car rental Hyderabad`, `corporate fleet lease Hyderabad`, `CXO & director car rental`, and `corporate airport transfers RGIA`.
    - `src/components/Header.jsx`: Added "Corporate" in desktop main navigation and "Corporate Car Rental" in mobile navigation slide-over drawer with briefcase icon.
    - `src/components/LocationPageContent.jsx`: Added contextual specialized services cross-link bar to all 30+ location pages (HITEC City, Gachibowli, Madhapur, Kondapur, Banjara Hills, etc.) linking directly to corporate and monthly corporate hubs.
    - `src/app/luxurycars/page.jsx` & `src/app/self-drive-car/page.jsx`: Added direct jump pills to corporate car rental.
  - **Sitemap Priority**:
    - `src/app/sitemap.js`: Registered `/corporate-car-rental-hyderabad` and `/monthly-corporate-car-rental-hyderabad` in Tier 1 Core Hubs with `1.0` priority and `daily` change frequency.
  - **Turbopack Build Verification**:
    - Clean compilation via `npm run build` with 82/82 routes generated without error.

## Regular Top Demanding Cars Targeting Overhaul (Daily, Weekly & Monthly)
- **Top Demanding Fleet Catalog Implemented on Homepage & Site-wide (All 28 Vehicles)**:
  1. **5-Seater Hatchback Cars**:
     - `Maruti Swift Manual Transmission` (`Swift.png`): High mileage (22+ km/l), ₹1,499/day, ₹8,999/week, ₹24,999/month.
     - `Maruti Swift Automatic` (`Swift.png`): Clutch-free city commute, ₹1,699/day, ₹9,999/week, ₹26,999/month.
     - `Maruti Baleno Manual & Automatic` (`Baleno.png`): Premium Nexa hatchback, 360 camera, ₹1,799/day, ₹10,499/week, ₹28,999/month.
     - `Hyundai i20 Manual & Automatic` (`i20.png`): Bose sound, electric sunroof, ₹1,899/day, ₹10,999/week, ₹29,999/month.
  2. **5-Seater Mini SUV Cars**:
     - `Maruti Suzuki Fronx Manual & Automatic` (`Fronx.png`): 190mm ground clearance, turbo crossover, ₹2,199/day, ₹12,999/week, ₹34,999/month.
     - `Hyundai Venue Manual & Automatic` (`5-Venue.png`): Bluelink tech, power driver seat, ₹2,299/day, ₹13,499/week, ₹36,999/month.
     - `Tata Punch Manual & Automatic` (`Tata-Punch.png`): 5-star safety, tough stance, ₹1,999/day, ₹11,999/week, ₹31,999/month.
  3. **5-Seater SUV Cars**:
     - `Maruti Suzuki Brezza Manual & Automatic` (`5-Brezza.png`): Electric sunroof, high mileage, ₹2,499/day, ₹14,499/week, ₹39,999/month.
     - `Tata Nexon Manual & Automatic` (`5-NEXON.png`): 5-star safety champion, ventilated seats, ₹2,499/day, ₹14,499/week, ₹39,999/month.
     - `Tata Harrier Manual & Automatic` (`5-Harrier.png`): 2.0L Kryotec diesel, Land Rover D8 platform, ₹3,499/day, ₹19,999/week, ₹54,999/month.
     - `Kia Seltos Manual & Automatic` (`5-Seltos.png`): Dual screens, Bose audio, ₹2,899/day, ₹16,999/week, ₹46,999/month.
     - `Hyundai Creta Manual & Automatic` (`2023-6.png`): #1 most demanded SUV, voice sunroof, ADAS, ₹2,899/day, ₹16,999/week, ₹46,999/month.
     - `Mahindra Thar 4x4 Manual & Automatic` (`5-Thar.png`): 4WD convertible hard top, ₹3,499/day, ₹19,999/week, ₹52,999/month.
     - `Mahindra Thar Roxx 5-Door Manual & Automatic` (`5-Thar.png`): All-new 5-door Thar Roxx, panoramic skyroof, ₹3,999/day, ₹22,999/week, ₹59,999/month.
  4. **7-Seater SUV & MUV Cars**:
     - `Mahindra XUV 700 Manual & Automatic` (`7-XUV700.png`): Flagship luxury, Sony 3D sound, ₹3,799/day, ₹21,999/week, ₹58,999/month.
     - `Kia Carens Manual & Automatic` (`7-Kia Carens.png`): 3-row roof AC, electric tumble, ₹2,799/day, ₹16,499/week, ₹44,999/month.
     - `Maruti Suzuki Ertiga Manual & Automatic` (`7-Ertiga.png`): Best mileage 7-seater, ₹2,499/day, ₹14,499/week, ₹38,999/month.
     - `Toyota Innova Crysta Manual & Automatic` (`7-Innova Crysta.png`): Undisputed highway king, ₹3,899/day, ₹22,999/week, ₹59,999/month.
     - `Toyota Innova Hycross Automatic` (`7-Innova Crysta.png`): Ottoman captain loungers, hybrid EV mode, ₹4,499/day, ₹26,499/week, ₹69,999/month.
     - `Toyota Fortuner 4x4 Manual & Automatic` (`7-Fortuner.png`): VIP 4x4 road presence, JBL audio, ₹5,999/day, ₹34,999/week, ₹89,999/month.
     - `Kia Carnival Automatic Limousine` (`7-KiaCarnival.png`): Dual sunroof, power sliding doors, ₹5,499/day, ₹31,999/week, ₹84,999/month.
  5. **5-Seater Sedan Cars (and Multi-Category SUVs)**:
     - `Hyundai Verna Manual & Automatic` (`seden-Verna.png`): 1.5L Turbo petrol, ADAS safety, ₹2,499/day, ₹14,499/week, ₹39,999/month.
     - `Maruti Swift Dzire Manual & Automatic` (`seden-dzire.png`): Top budget sedan, 378L boot, ₹1,999/day, ₹11,999/week, ₹29,999/month.
     - `Maruti Suzuki Ciaz Manual & Automatic` (`seden-Ciaz.png`): Longest rear legroom, hybrid, ₹2,299/day, ₹13,499/week, ₹34,999/month.
     - `Volkswagen Virtus Manual & Automatic` (`seden-City.png`): 5-star NCAP German sedan, 521L boot, ₹2,799/day, ₹16,499/week, ₹42,999/month.
     - `Skoda Slavia Automatic Only` (`seden-City.png`): European luxury, ventilated seats, ₹2,799/day, ₹16,499/week, ₹42,999/month.
     - `Mahindra Scorpio-N Automatic Only` (`7-Compass.png`): Big Daddy SUV, Sony 3D audio, ₹3,499/day, ₹20,499/week, ₹52,999/month (accessible in both Sedans & 7-Seater SUVs).
     - `Maruti Suzuki XL6 Manual & Automatic` (`7-Ertiga.png`): Premium 6-seater captain chairs, ₹2,699/day, ₹15,999/week, ₹41,999/month (accessible in both Sedans & 7-Seater SUVs).
- **Homepage Interactive Features (`CarOffersSection.jsx`)**:
  - **3-Way Pricing Plan Toggle**: Swapping seamlessly between **Daily Deals**, **Weekly (7 Days - Save 25%)**, and **Monthly (30 Days - Save 50%)**.
  - **Effective Daily Rate Calculator**: Calculates and displays effective per-day cost for weekly (~₹1,285/day) and monthly (~₹833/day) plans.
  - **Dynamic WhatsApp CTAs**: Generates pre-filled, car-specific enquiry messages reflecting the currently active plan (DAILY, WEEKLY, or MONTHLY) and tariff.
  - **Live Search & Category Filters**: Interactive real-time search input + category filter tabs for 5-Seater Hatchbacks, Mini SUVs, 5-Seater SUVs, 7-Seater SUVs & MUVs, and Sedans.
  - **SEO Keyword Strip**: Embedded bottom keyword strip covering all 28 vehicles.
- **Dedicated Landing Page Added**:
  - `src/app/weekly-self-drive-cars-hyderabad/page.jsx`: Full 7-day rental landing page with `AutoRental`, `FAQPage`, `BreadcrumbList` schemas, tariffs, and FAQ accordion.
  - Registered in `src/app/sitemap.js` (Tier 1 Core Hub, 1.0 priority, daily frequency).
  - Cross-linked in `Footer.jsx`, `LocationPageContent.jsx`, and `self-drive-car/page.jsx`.
- **Turbopack Build Verification**:
  - Verified 100% clean compilation via `npm run build` with **83/83 routes** generated without error.

## Header Logo, Single-Line Navigation & Tariff Masking Overhaul
- **Header Logo Visibility Fix**:
  - Root cause: Header background is white (`#ffffff`). When `data.logo` was unpopulated in Sanity, `SiteSettingsContext` defaulted to `/logo2.png` which is white text on transparent, rendering it invisible.
  - Copied official high-resolution dark & gold brand logo from `public/assets/img/logo1.png` to `public/logo.png`.
  - Updated `DEFAULT_SETTINGS.logoUrl` to `/logo.png` in `src/context/SiteSettingsContext.jsx`.
  - Added robust fallback `onError={(e) => { if (e.currentTarget.src !== '/logo.png') e.currentTarget.src = '/logo.png'; }}` in `src/components/Header.jsx`.
  - Dynamic Sanity override via `settings.logoUrl` remains 100% intact when uploaded from Sanity Studio.
- **Single-Line Desktop Navigation (#gauto_navigation)**:
  - Root cause: 11 menu links with fixed container widths wrapped `CONTACT US` onto a 2nd line, doubling navbar height.
  - Applied flexbox nowrap: `display: flex !important; align-items: center !important; justify-content: space-between !important; flex-wrap: nowrap !important; width: 100% !important;`.
  - Added fluid container clamp padding (`padding: 0 clamp(12px, 2.5vw, 40px)`) and responsive link font sizing (11.5px on 992px–1240px, 13px on 1240px+).
  - Ensured all 11 links fit on a single crisp horizontal row on all desktop resolutions.
- **Site-Wide Pricing Masking (Tariff on Request)**:
  - Masked all numerical tariffs (`₹/day`, `₹/week`, `₹/month`) across all 28 fleet cars, luxury pages, wedding pages, and corporate pages until official tariffs are finalized.
  - Replaced pricing tags with clean, premium badges: `Tariff on Request` / `Custom Quote`.
  - Updated all CTA actions to `Enquire Now` (direct call) and `WhatsApp Enquiry` with customized pre-filled quote request messages.
  - Updated JSON-LD structured schemas (`priceRange: 'Tariff on Request'`) across all SEO landing pages.
- **Sanity CMS Editability**:
  - Verified schemas for `siteSettings`, `car`, `categoryPage`, `landingPage`, and `locationPage`.
  - Logo can be uploaded directly in Sanity Studio under `Site Settings & Global Footer -> Brand Header Logo`.
  - Car details (name, transmission, fuel, images, features, badge, seats, display pages) can be managed under `Fleet Vehicles (Cars & Buses)`.
  - Daily & Monthly price fields in Sanity (`pricePerDay`, `pricePerMonth`) are ready for activation whenever rates are decided.
- **Mobile Responsiveness**:
  - Desktop menu (`.gauto-mainmenu-area`) is hidden on mobile via `d-none d-lg-block`.
  - Mobile experience is driven by the responsive top header bar (logo + hamburger) and slide-out navigation drawer with zero horizontal overflow.
  - Verified 100% clean Turbopack build across all routes.

## Light-Themed Premium Hero Section Overhaul (Sixt & Hertz-Level UX)
- **Problem Resolved**:
  - Replaced the basic static banner image slider (`HeroSlider.jsx` with `/banner5.avif`, etc. on dark background) with a world-class, light-themed booking and showroom engine on the homepage.
- **Architectural & Design Implementation (`PremiumHeroSection.jsx`)**:
  - **Color Palette & Light Aesthetics**: Crisp porcelain white (`#ffffff`) to subtle pearl slate (`#f8fafc`), with warm ambient amber/gold glows (`rgba(255, 185, 7, 0.14)`), gold accents (`#ffb907`), and deep slate typography (`#0f172a`). Completely non-dark.
  - **Trust Eyebrow**: `★ 4.9 / 5.0 (1,200+ Google Reviews)` + `✦ HYDERABAD'S PREMIER CAR RENTAL FLEET`.
  - **Interactive Reservation Engine (Sixt Benchmark)**:
    - 4 Service Tabs: `Self Drive` (default), `With Chauffeur`, `Airport Transfer`, and `Wedding & VIP`.
    - Smart Field Controls: Pickup Hub dropdown (covering Masab Tank, RGIA Airport, HITEC City, Gachibowli, Banjara Hills, Doorstep Handover), Rental Plan (Daily, Weekend, Weekly -25%, Monthly -50%), and Fleet Category (All, SUVs, 7-Seaters, Hatchbacks, Mini SUVs, Sedans).
    - Dual CTAs: Primary `Check Available Cars` (smoothly scrolls to `#fleet-offers` and dispatches `driveit-filter-category` custom event) + Emerald WhatsApp `WhatsApp Quote` (pre-fills selected service, pickup hub, plan, and car type).
    - Direct 24/7 call helpline link to `+91 6300041186`.
  - **Interactive Live Showroom Showcase (Virtuo Benchmark)**:
    - 4 Interactive Category Switcher Pills: `🔥 4x4 & SUVs` (Mahindra Thar 4x4 & Roxx), `👑 7-Seater Kings` (Toyota Innova Crysta & Fortuner), `💎 Luxury & VIP` (Mercedes-Benz), and `🚗 City Economy` (Maruti Swift & Baleno).
    - Seamless vehicle preview transitions with realistic studio ground shadow pedestal.
    - 3 Floating Micro-Trust Capsules: `🛡️ Zero Deposit Option`, `⚡ 10-Min Fast KYC`, and `📍 Doorstep Drop across 26 Hubs`.
    - Live specs summary: Seats, Transmission, Fuel, and Feature highlights.
  - **Full-Width Trust Authority Strip**:
    - 4 Pillars directly beneath hero: `Zero Security Deposit`, `24/7 RGIA Airport Drop`, `100% Sanitized Fleet`, and `30-Min Doorstep Handover`.
  - **Fleet Catalog Synchronization (`CarOffersSection.jsx`)**:
    - Added `id="fleet-offers"` to `<section>` container.
    - Added `useEffect` listening for `driveit-filter-category` custom events, automatically setting `activeTab` to match user selections from the hero.
  - **Turbopack Build Verification**:
    - 100% clean compilation via `npm run build` with all 83 dynamic and static routes generated without error.

## Floating Action Buttons & Chat Overhaul (Official WhatsApp Logo & Custom Message)
- **Problem Resolved**:
  - The legacy floating button (`chatFloatBtn`) had `href="#"` with a generic speech bubble icon (`fa-comment`) and was completely broken / unresponsive.
  - Eliminated duplicate unstyled floating anchors in `Footer.jsx`.
- **Architectural Implementation**:
  - Replaced the broken Chat button with a dedicated, officially branded WhatsApp button (`.whatsapp-float-btn`) using the **official vector SVG WhatsApp brand mark**.
  - Configured custom pre-filled message content:
    `Hi DRIVEIT Cars, I would like to enquire about renting a car in Hyderabad. Please share available models, tariffs, and booking process.`
  - Paired with an executive call floating button (`.phone-float-btn`) dialing `+91 6300041186`.
  - Added tooltips ("Chat on WhatsApp" and "Call Us") with hover elevation and responsive layout (stacked cleanly on mobile without viewport overflow).
  - Clean build verified via `npm run build` with zero errors.

## Hero Section Tab Overflow Fix (4-Column Symmetrical Grid)
- **Problem Resolved**:
  - The 4th tab in both the Booking Card (`Wedding & VIP` cutting off at `💎 W`) and Showroom Card (`City Economy` cutting off at `🚗 City Eco...`) spilled past the right edge because the containers used `display: flex` with fixed padding and long strings.
- **Architectural Implementation**:
  - Converted both `.booking-service-tabs` and `.showroom-category-switcher` to an exact 4-column CSS Grid (`grid-template-columns: repeat(4, 1fr)`).
  - Balanced tab labels to fit 100% symmetrically within the 25% column widths:
    - Service tabs: `Self Drive`, `Chauffeur`, `Airport`, `Wedding`.
    - Showroom pills: `🔥 SUVs & 4x4`, `👑 7-Seater`, `💎 Luxury`, `🚗 Hatchback`.
  - Added mobile media query (`@media (max-width: 576px)`) switching both containers to a 2x2 grid (`repeat(2, 1fr)`), ensuring all 4 tabs are 100% visible with zero clipping or horizontal scrolling on any screen size.
  - Verified clean Turbopack build with 0 errors.

## Multi-Device Responsiveness Overhaul (Phones, Tablets & Laptops)
- **Scope & Device Breakpoints Tested**:
  - **Laptops / Small Desktops (992px – 1200px)**: Compacted tab padding (`7px 2px`) and font size (`11px`) so all 4 tabs fit in one row without line breaks; adjusted floating badges padding to prevent collision.
  - **Portrait Tablets (768px – 991px)**: Center-aligned typography and constrained card widths (`max-width: 620px; margin: 0 auto;`) to prevent cards from looking stretched on iPad / tablet viewports; arranged `.showroom-badges-cluster` into a neat centered pill row below the vehicle.
  - **Large Mobiles / Phablets (577px – 767px)**: Centered layout with max card width (`540px`); 2x2 grid for both tab sets; full-width stacked action buttons.
  - **Standard Mobile (375px – 576px)**: Card padding reduced to `14px 12px` with 16px border-radius; single-column form grid; vehicle image capped at 145px with bounded radial halo aura (`max-width: 80vw`) and ground shadow; 2-column compact trust strip items with 34px icons.
  - **Ultra-Small Mobile (320px – 360px)**: Fluid typography (`clamp(24px, 6.8vw, 29px)`), full touch targets, zero horizontal viewport overflow.
- **Verification**: Clean compilation via `npm run build` with all 83 static & dynamic routes passing.

## Mobile Screenshot Fixes & Horizontal Viewport Containment
- **Problems Identified From Mobile Screenshots**:
  1. **Screenshot 1 (Trust Strip Cramping)**:
     - The 2 right-column trust cards (`RGIA Airport Drop` and `30-Min Delivery`) in `PremiumHeroSection.jsx` touched and pushed against the right screen border with no internal card framing.
  2. **Screenshot 2 (Pricing Toggle Clipping)**:
     - In `CarOffersSection.jsx`, the 3-Way Pricing Plan Toggle used inline `whiteSpace: 'nowrap'` with verbose desktop labels (`Daily Deals`, `Weekly (7 Days) 7-Day Deal`, `Monthly (30 Days) Monthly Deal`). Combined minimum width was >540px, causing the right button (`Monthly (30 Days)`) to clip at `Monthl` on mobile viewports (<430px).
  3. **Screenshot 3 (Floating Button Slicing & Horizontal Blowout)**:
     - The >540px element width blew out the entire document width on mobile browsers, making the document wider than 100vw.
     - Mobile browser layout panning caused right-anchored fixed elements to get sliced in half (e.g. green WhatsApp floating button was cut down the middle on the right edge).
     - The SEO keywords list container had raw 24px desktop padding on mobile.
- **Architectural Solutions Implemented**:
  1. **Trust Strip Symmetrical Micro-Cards (`PremiumHeroSection.jsx` & `globals.css`)**:
     - Switched row from `row g-3 g-md-4 align-items-center justify-content-between` to `row g-2 g-md-4 align-items-stretch`.
     - Wrapped each item in a clean micro-card with soft pearl slate background (`#f8fafc`), subtle border (`#e2e8f0`), rounded corners (`12px`), and concise mobile descriptions (`.trust-desc-mobile`).
     - Added gutter-safe padding (`padding: 10px 8px`) ensuring zero collision with screen edges.
  2. **Responsive 3-Way Pricing Plan Toggle (`CarOffersSection.jsx` & `globals.css`)**:
     - Converted inline styles to responsive class `.pricing-plan-toggle` and `.plan-toggle-btn`.
     - Implemented dual-span desktop and mobile labels:
       - Desktop (>600px): `Daily Deals`, `Weekly (7 Days) [7-Day Deal]`, `Monthly (30 Days) [Monthly Deal]`
       - Mobile (<=600px): `Daily`, `Weekly [7-Day]`, `Monthly [Deal]`
       - Small Mobile (<=380px): Badges cleanly hide, leaving concise touch pills `Daily | Weekly | Monthly` that fit 100% within 320px–375px screens.
  3. **Viewport & Floating Action Buttons Alignment (`globals.css` & `layout.jsx`)**:
     - Added Next.js App Router viewport metadata export in `src/app/layout.jsx` (`width: 'device-width', initialScale: 1, maximumScale: 5`).
     - Enforced layout containment: `html, body, #__next, main, section { max-width: 100vw !important; overflow-x: hidden !important; box-sizing: border-box; }`.
     - Standardized `.whatsapp-float-btn` and `.phone-float-btn` on mobile to exact matching coordinates (`right: 16px !important`, `width: 48px !important`, `height: 48px !important`).
     - Added responsive `.seo-keyword-strip-card` with `overflow-wrap: break-word` and compact mobile padding.
- **Verification**:
  - `npm run build` executed successfully with code 0 across all 83 static and dynamic routes.

## Desktop Pricing Toggle Overlap Hotfix
- **Issue**:
  - On desktop, the 3-Way Pricing Plan Toggle had overlapping text: `[7-Day Deal]` collided directly with `Monthly (30 Days)`.
- **Root Cause**:
  - `.pricing-plan-toggle` had `max-width: 560px` combined with `.plan-toggle-btn` having `flex: 1 1 0%` and `min-width: 0`.
  - This forced each button on desktop into equal 180px boxes, which was narrower than the intrinsic width of Button 2 (`Weekly (7 Days) 7-Day Deal` = 230px), causing its contents to overflow and overlap into Button 3.
- **Solution**:
  - Desktop styles: Converted `.pricing-plan-toggle` to `display: inline-flex; align-items: center; gap: 8px;` and `.plan-toggle-btn` to `flex: 0 0 auto; padding: 10px 18px;`.
  - Added `margin-left: 4px; display: inline-flex; align-items: center;` to the deal badges.
  - Buttons now fit their text and deal badges naturally with generous spacing and zero overlap.
  - Mobile styles (`<= 640px`): Switch smoothly to `display: flex; width: 100%;` and `flex: 1 1 0%` with compact mobile labels (`Daily`, `Weekly`, `Monthly`).

## Brand Logo Sizing Specifications
- **Header Logo (Website Navbar & Sanity CMS)**:
  - **Sanity CMS Recommended Dimension**: `260 x 76 px` (1x) or **`520 x 152 px`** (2x for Retina / High-DPI screens).
  - **Rendered CSS**: Desktop `height: 72px; max-height: 76px; max-width: 260px; object-fit: contain;` | Mobile (<=768px) `height: 52px; max-width: 180px;`.
  - **Aspect Ratio**: ~`3.4 : 1` (horizontal / landscape layout).
- **Footer Brand Logo**:
  - **Sanity CMS Recommended Dimension**: `230 x 66 px` (1x) or **`460 x 132 px`** (2x Retina).
  - **Rendered CSS**: Desktop `height: 60px; max-height: 66px; max-width: 230px;` | Mobile `height: 50px; max-width: 180px;`.
- **Mobile Drawer Nav Logo**: `height: 42px; width: auto;`.
- **Favicon & App Icons**:
  - `favicon.ico`: 32x32 px and 48x48 px.
  - Apple Touch Icon: 180x180 px.
- **File Format Best Practices**:
  - Format: Transparent PNG or SVG (Vector).
  - File Size: Keep under 150 KB.
  - Margin: Crop transparent padding tight to the artwork edges to prevent shrinkage.
- **Active Deployment**:
  - Updated Sanity CMS `siteSettings.logo` to the new 1024x355 transparent black key-accent header logo (`image-8b6a7c3eedb9d3c5268a169348cfafd5972f6772-1024x355-png`).
  - Synced local fallback image [public/logo.png](file:///e:/Github/driveitcars/public_html/public/logo.png).
  - Updated Sanity CMS `siteSettings.footerLogo` to the new 460x132 transparent white key-accent logo (`image-5342d9286b4fd82bbba75fbbab82bd5c64019e8d-460x132-png`).
  - Synced local fallback image [public/logo2.png](file:///e:/Github/driveitcars/public_html/public/logo2.png).

## Hero Booking Widget Dropdown Modernization
- **Replaced Awkward Native OS Selects**:
  - Upgraded raw `<select>` elements in [PremiumHeroSection.jsx](file:///e:/Github/driveitcars/public_html/src/components/PremiumHeroSection.jsx) to sleek interactive custom dropdown selectors.
  - Eliminated native Windows blue-highlight box, harsh 90° edges, and awkward text clipping ("Doorstep Handover (Anywhere i").
- **Luxury Floating Menu UI**:
  - Added floating popover menu (`.custom-dropdown-menu`) with rounded corners (`14px`), deep soft drop shadow, custom scrollbar, and smooth enter animation.
  - Trigger buttons (`.custom-dropdown-trigger`) feature text ellipsis, smooth 180° rotating chevron SVG, gold focus glow (`rgba(255, 185, 7, 0.2)`), and active state elevation (`z-index: 50`).
  - Added deal badges (e.g. `Save 25%`, `Save 50%` in emerald pill tags) and muted category vehicle examples (e.g. `Creta, Thar, Brezza`).
  - Added outside-click and Escape key detection via React hooks for seamless closing.
- **Grid Overflow & Card Boundary Fix**:
  - Root cause: CSS Grid `grid-template-columns: 1fr 1fr` defaulted to `minmax(auto, 1fr)`. Combined with `min-width: auto` on buttons with non-wrapping text, Column 1 pushed Column 2 and Field 3 out past the card's right boundary.
  - Fix: Enforced `grid-template-columns: repeat(2, minmax(0, 1fr))` with `width: 100%; max-width: 100%; box-sizing: border-box;` and explicit `min-width: 0;` across `.booking-form-group`, `.custom-dropdown-container`, `.custom-dropdown-trigger`, and `.dropdown-trigger-content`. All fields now stay strictly within `.hero-booking-card`.
- **Build Warnings & Sanity Image Builder Cleanup**:
  - Replaced deprecated default `import imageUrlBuilder from '@sanity/image-url'` with `import { createImageUrlBuilder } from '@sanity/image-url'` across `SiteSettingsContext.jsx`, `src/app/page.jsx`, `src/app/blog/page.jsx`, and `src/app/blog/[slug]/page.jsx`.
  - Compile time improved to 9.5s with zero deprecation warnings.
- **Verification**: Verified clean Turbopack build via `npm run build` with 100% route success across all 83 static & dynamic routes.

## Vercel Production Deployment Verification
- **Build & Deployment Success**:
  - Commit `63ce76b` deployed cleanly to Vercel production edge within 2 minutes with 0 build or lint errors.
  - Vercel build cache (438.43 MB) uploaded successfully in 8.0s for accelerated future incremental deploys.
- **Route Rendering Strategy**:
  - **Dynamic (`ƒ`) Routes**: Locality and live CMS hubs (e.g., `/tolichowki-luxury-car-rental`, `/vijay-nagar-colony`, `/yousufguda`, `/`, `/blog`) configured with `dynamic = 'force-dynamic'` and `revalidate = 0` so Sanity Studio CMS updates publish immediately without redeployment.
  - **Static (`○`) Routes**: Core SEO landing pages (e.g., `/vintage-wedding-car-hyderabad`, `/vip-car-rental-hyderabad`, `/wedding-car-rental-hyderabad`) pre-rendered statically at build time for sub-100ms Edge CDN responses and optimal Googlebot crawling.
- **Live Verification**:
  - Live HTTP verification on `https://www.driveitcars.in` confirmed 200 OK with custom hero booking engine, showroom switcher, tariff masking, high-res brand logos, and structured JSON-LD schemas actively serving.

