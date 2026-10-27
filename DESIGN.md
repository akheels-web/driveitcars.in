# DriveItCars design context

## Product and scope

DriveItCars is a Hyderabad car rental business. The blog helps visitors compare cars, understand rental terms and plan a suitable enquiry. Content and images are owned by Sanity; the application contains presentation code only. Use DriveItCars as the written brand.

## Existing identity

Keep the established black-and-gold identity. The site uses Poppins for headings and Rubik for body text via the existing stylesheet. Do not introduce another font download or UI library for these surfaces.

## Shared header

The header is a single compact white navigation bar with the existing logo, dark navigation and a gold call action. The former hours/address blocks and utility strip are removed. Desktop service links are grouped under Services; the existing locality links are grouped under Locations. Home, Self-drive cars, Guides and Contact remain direct links. Use the CMS phone number and logo, with existing local fallback assets.

`src/components/Header.jsx` is the canonical shared header and `Header.module.css` owns its scoped runtime styles: brand gold `#ffb907`, ink `#191c20`, muted text `#60656d`, divider `#e3e5e8`, white surfaces and a dark mobile drawer. Keep active-route indicators, native links/buttons, visible keyboard focus and reduced-motion support. Desktop dropdowns close on Escape or outside interaction. On smaller screens, use a modal navigation drawer with background inertness, focus containment, Escape dismissal and trigger-focus restoration. All service and locality destinations remain available. The header is absent in Studio. A sticky header must reserve anchor-scroll clearance so it cannot cover article section headings.

## Blog direction

An automotive travel journal: clear white space, large dark type, expansive car illustrations and understated gold details. The listing leads with one featured guide followed by a three-column article grid. Article pages use an open headline, wide cover and a comfortable reading column alongside a compact contents navigation. Reduce to one column on mobile. Avoid the legacy breadcrumb photo banner, forced title capitalization, tiny body copy, heavy card shadows and nested content boxes.

## Runtime ownership

Runtime CSS is canonical. `src/app/site-theme.css` owns the public site's `--site-*` palette, typography, 1184px container and 16px radius. `SiteLayoutWrapper.jsx` applies `.driveit-site` only outside Studio. Header and blog tokens alias these shared values; component modules own hero, FAQ, footer and blog layouts. `.site-content` scopes the common skin for legacy public pages; `.journal-content` keeps the journal's dedicated editorial layout.

The shared page checklist is: compact white header; light gray, left-aligned masthead with ink title and plain breadcrumb; white introductory section with readable left-aligned text; soft fleet section with flat bordered vehicle cards and contained images; charcoal primary and outlined WhatsApp enquiry actions; gold booking actions; consistent FAQ accordion; dark footer with native expandable specialist links. Desktop gutters are 40px and mobile gutters 20px. Use 72px section spacing on desktop and 48px on mobile. Preserve prices, rental conditions, CMS content, metadata and contact destinations. Do not apply public-site resets inside Studio or force legacy card styles into the blog.

Shared component owners: `PremiumHeroSection.module.css` controls the landing booking/showcase area; `FaqSection.module.css` controls the first-open, single-open accordion with unique answer IDs; `Footer.module.css` controls four responsive columns and three closed specialist link groups. All existing footer destinations remain available. Homepage rental plan/category filtering and service redirects retain their existing values and events.

Fleet cards must show the named model, never an unrelated vehicle or promotional poster. `src/data/vehicle-images.js` owns the model-specific Sanity URLs needed by both fallback fleet sources. Locality pages prefer explicit CMS assignments and fall back to the shared self-drive CMS fleet when unassigned. Verify this behavior with `node --experimental-vm-modules --test scripts/location-fleet.test.mjs`. Check rendered card counts as well as page headers. Call actions use white text and a gold icon on charcoal; hover and keyboard focus use ink text and icon on gold. WhatsApp actions retain green text and icons in every state. Contact information cards need padding inside all borders. The footer's white wordmark sits directly on its dark surface, with a transparent link background.

| Role | Runtime token | Value |
| --- | --- | --- |
| Brand gold | `--journal-gold` | `#ffb907` from existing site identity |
| Main ink | `--journal-ink` | `#191c20` |
| Secondary text | `--journal-muted` | `#60656d` |
| Soft surface | `--journal-soft` | `#f5f6f7` |
| Divider | `--journal-line` | `#e3e5e8` |
| Page surface | `--journal-paper` | `#ffffff` |
| Main container | `--journal-width` | `1184px` |
| Heading font | `--journal-display` | Poppins, sans-serif |
| Body font | `--journal-body` | Rubik, sans-serif |

Spacing follows a 4px base; desktop gutters are 40px, mobile gutters 20px. Cards use a 16px image radius and no outer shadow. Body text is 18px with 1.85 line height in a reading column capped at 720px. Gold buttons always use dark text; normal body links use dark underlined text.

## Interaction and accessibility

Use native links for cards, breadcrumbs, contents anchors and enquiries. A card is one accessible link, never nested links. All links have visible keyboard focus. Card image motion is subtle and disabled with reduced motion. Article h2 anchors match the contents menu. Sidebar stickiness is desktop-only; mobile contents remain in normal flow. Each route has one h1 and keeps the existing metadata, canonical URL, descriptive image alt and BlogPosting schema. Dates use en-IN and Asia/Kolkata. Reserve image dimensions to avoid layout shifts. Empty and error states offer useful navigation. No CMS content or image files are committed to the repository.

Blog routes omit the global floating contact buttons so they cannot cover guide titles or reading text. Contact remains available in the article sidebar, bottom callouts and shared footer. Other routes retain the existing floating buttons.
