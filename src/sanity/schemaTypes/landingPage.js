import { defineField, defineType } from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page (Home)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
    }),

    // ========== 1. HERO SLIDER ==========
    defineField({
      name: 'heroBanners',
      title: 'Hero Banners (Slider)',
      type: 'array',
      description: 'Add or reorder slider banners displayed at the top of the homepage.',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Banner Image 📷 (Recommended: 1920 x 800 px)',
              description: '📌 SIZING: 1920 x 800 px (or 16:9 widescreen, minimum 1280 x 600 px). File size under 1 MB.',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            { name: 'heading', type: 'string', title: 'Banner Heading', description: 'e.g. Self Drive Car' },
            { name: 'subheading', type: 'string', title: 'Subheading', description: 'e.g. Explore more, Spend less' },
            { name: 'buttonText', type: 'string', title: 'Button Text', description: 'e.g. Book Now' },
            { name: 'buttonLink', type: 'string', title: 'Button Link', description: 'e.g. /self-drive-car or /luxury-buses' },
          ],
          preview: {
            select: {
              title: 'heading',
              subtitle: 'buttonLink',
              media: 'image',
            },
          },
        },
      ],
    }),

    // ========== 2. ABOUT DRIVEIT SECTION ==========
    defineField({
      name: 'aboutBadge',
      title: 'About Section Eyebrow Badge',
      type: 'string',
      initialValue: "Hyderabad's Premier Car Rental",
    }),
    defineField({
      name: 'aboutHeading',
      title: 'About Section Heading',
      type: 'string',
      initialValue: 'Experience True Freedom of the Open Road with DriveIt',
    }),
    defineField({
      name: 'aboutDescription1',
      title: 'About Section Paragraph 1',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'aboutDescription2',
      title: 'About Section Paragraph 2',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'aboutImage',
      title: 'About Section Visual Image 📷 (Recommended: 600 x 440 px)',
      type: 'image',
      description: '📌 SIZING: 600 x 440 pixels. High quality image showing your cars/fleet.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'aboutStat1Number',
      title: 'About Image Badge 1: Stat Number',
      type: 'string',
      initialValue: '10,000+ Trips',
    }),
    defineField({
      name: 'aboutStat1Label',
      title: 'About Image Badge 1: Stat Label',
      type: 'string',
      initialValue: 'Happy Travelers in Hyderabad',
    }),
    defineField({
      name: 'aboutStat2Number',
      title: 'About Image Badge 2: Rating',
      type: 'string',
      initialValue: '★ 4.9 / 5.0',
    }),
    defineField({
      name: 'aboutStat2Label',
      title: 'About Image Badge 2: Rating Label',
      type: 'string',
      initialValue: 'Verified Customer Rating',
    }),
    defineField({
      name: 'aboutFeatures',
      title: 'About 4 Highlights Grid',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon (e.g. fa-shield, fa-tag, fa-map-marker, fa-headphones)', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Short Description', type: 'string' },
          ],
        },
      ],
    }),

    // ========== 3. HOW TO BOOK SECTION ==========
    defineField({
      name: 'bookingBadge',
      title: 'How to Book Eyebrow Badge',
      type: 'string',
      initialValue: 'Easy 4-Step Process',
    }),
    defineField({
      name: 'bookingHeading',
      title: 'How to Book Section Heading',
      type: 'string',
      initialValue: 'How To Book a Self-Drive Car Online',
    }),
    defineField({
      name: 'bookingSteps',
      title: 'Booking Process Steps (4 Steps)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'stepNumber', title: 'Step Number (e.g. 1, 2, 3, 4)', type: 'string' },
            { name: 'title', title: 'Step Title', type: 'string' },
            { name: 'description', title: 'Step Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),

    // ========== 4. THE DRIVEIT ADVANTAGE STRIP ==========
    defineField({
      name: 'advantageSubtitle',
      title: 'Advantage Strip Eyebrow Subtitle',
      type: 'string',
      initialValue: 'Why Drive With Us',
    }),
    defineField({
      name: 'advantageTitle',
      title: 'Advantage Strip Heading',
      type: 'string',
      initialValue: 'The DRIVEIT Advantage',
    }),
    defineField({
      name: 'advantageItems',
      title: 'Advantage Items Strip',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'FontAwesome Icon (e.g. fa-key, fa-shield, fa-tag, fa-map-marker)', type: 'string' },
            { name: 'title', title: 'Title (e.g. 100% Privacy)', type: 'string' },
            { name: 'subtitle', title: 'Subtitle (e.g. No driver interference)', type: 'string' },
          ],
        },
      ],
    }),

    // ========== 5. WHY CHOOSE US (6 FEATURE BOXES) ==========
    defineField({
      name: 'whyChooseSubtitle',
      title: 'Why Choose Us Eyebrow Subtitle',
      type: 'string',
      initialValue: 'Why Travelers Trust Us',
    }),
    defineField({
      name: 'whyChooseHeading',
      title: 'Why Choose Us Heading',
      type: 'string',
      initialValue: 'Why Choose DriveIt Cars?',
    }),
    defineField({
      name: 'whyChooseCards',
      title: 'Why Choose Us Feature Cards (6 Cards)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon (e.g. fa-shield-alt, fa-car, fa-clock, fa-rupee-sign, fa-headset, fa-handshake)', type: 'string' },
            { name: 'title', title: 'Card Title', type: 'string' },
            { name: 'description', title: 'Card Description', type: 'text', rows: 2 },
          ],
        },
      ],
    }),

    // ========== 6. PARTNER PROMO CTA ==========
    defineField({
      name: 'partnerHeading',
      title: 'Partner Promo Heading',
      type: 'string',
      initialValue: 'Share your Car and Earn',
    }),
    defineField({
      name: 'partnerDescription',
      title: 'Partner Promo Description',
      type: 'text',
      rows: 3,
      initialValue: 'Have an idle car? Partner with DriveIt and earn guaranteed monthly income with full vehicle insurance coverage.',
    }),
    defineField({
      name: 'partnerButtonText',
      title: 'Partner Button Text',
      type: 'string',
      initialValue: 'Partner With Us',
    }),
    defineField({
      name: 'partnerButtonLink',
      title: 'Partner Button Link',
      type: 'string',
      initialValue: '/partner',
    }),
    defineField({
      name: 'partnerImage',
      title: 'Partner Promo Car Image 📷',
      type: 'image',
      description: 'Image of the promo car (transparent PNG or landscape photo).',
      options: { hotspot: true },
    }),

    // ========== 7. GOOGLE MAPS EMBED ==========
    defineField({
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed iframe URL',
      type: 'url',
      description: 'Paste the Google Maps embed iframe src URL here to update your office map.',
    }),

    // ========== 8. SEO META ==========
    defineField({
      name: 'seoTitle',
      title: 'SEO Title Tag',
      type: 'string',
      initialValue: 'DriveIt Cars — Self Drive Cars in Hyderabad | Best Car Rental Service',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      initialValue: 'Rent self drive cars in Hyderabad with DriveIt. Zero deposit on select cars, unlimited freedom, doorstep delivery across 20+ locations. Hatchbacks, Sedans, SUVs & Luxury Cars.',
    }),
  ],
})
