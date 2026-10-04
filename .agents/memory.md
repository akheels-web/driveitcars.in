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
  - Fix: Created matching routes for all 10 short paths (`/gachibowli`, `/guttala-begumpet`, `/habsiguda`, `/khairatabad`, `/lb-nagar`, `/mehdipatnam`, `/nampally`, `/sheikpet`, `/tarnaka`, `/tolichowki`), each populated with complete area SEO content, full 21-car fleet cards, direct call button, car-specific WhatsApp enquiry, and `<FaqSection />`. Both short and long URLs are preserved for seamless SEO backlink compatibility.
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
- **Schema Fields & Image Guidelines**:
  - Added `badge` (string) and `badgeColor` (color picker / preset list) to `car.js`, eliminating "Unknown fields found" warnings in Sanity Studio.
  - Added explicit, prominent image dimension guides and recommended aspect ratios to `car.js` (800x450px), `landingPage.js` (1920x800px), `offer.js` (1200x600px), and `siteSettings.js` (250x60px).


