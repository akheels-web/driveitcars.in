# DriveItCars design context

## Product and scope

DriveItCars is a Hyderabad car rental business. The blog helps visitors compare cars, understand rental terms and plan a suitable enquiry. Content and images are owned by Sanity; the application contains presentation code only. Use DriveItCars as the written brand.

## Existing identity

Keep the established black-and-gold identity and shared footer. The site uses Poppins for headings and Rubik for body text via the existing stylesheet. Do not introduce another font download or UI library for these surfaces.

## Shared header

The header is a single compact white navigation bar with the existing logo, dark navigation and a gold call action. The former hours/address blocks and utility strip are removed. Desktop service links are grouped under Services; the existing locality links are grouped under Locations. Home, Self-drive cars, Guides and Contact remain direct links. Use the CMS phone number and logo, with existing local fallback assets.

`src/components/Header.jsx` is the canonical shared header and `Header.module.css` owns its scoped runtime styles: brand gold `#ffb907`, ink `#191c20`, muted text `#60656d`, divider `#e3e5e8`, white surfaces and a dark mobile drawer. Keep active-route indicators, native links/buttons, visible keyboard focus and reduced-motion support. Desktop dropdowns close on Escape or outside interaction. On smaller screens, use a modal navigation drawer with background inertness, focus containment, Escape dismissal and trigger-focus restoration. All service and locality destinations remain available. The header is absent in Studio. A sticky header must reserve anchor-scroll clearance so it cannot cover article section headings.

## Blog direction

An automotive travel journal: clear white space, large dark type, expansive car illustrations and understated gold details. The listing leads with one featured guide followed by a three-column article grid. Article pages use an open headline, wide cover and a comfortable reading column alongside a compact contents navigation. Reduce to one column on mobile. Avoid the legacy breadcrumb photo banner, forced title capitalization, tiny body copy, heavy card shadows and nested content boxes.

## Runtime ownership

Model B: runtime CSS remains canonical. Blog visual tokens live once in `src/app/blog/blog.module.css` on `.page`, shared by both routes and `BlogChrome.jsx`. Other site routes keep their current CSS. These are scoped tokens, not a global site redesign.

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
