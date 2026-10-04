import { defineField, defineType } from 'sanity'

export const landingPageType = defineType({
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage',
    }),
    defineField({
      name: 'heroBanners',
      title: 'Hero Banners (Slider)',
      type: 'array',
      description: 'Add multiple banners here to create a slider on the homepage.',
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'image', 
              type: 'image', 
              title: 'Banner Image 📷 (Recommended: 1920 x 800 px)', 
              description: '📌 BANNER SIZING: Recommended size is 1920 x 800 pixels (or 16:9 / 2.4:1 widescreen ratio, minimum 1280 x 600 px). Keep file size under 1 MB for fast loading.',
              options: { hotspot: true }
            },
            { name: 'heading', type: 'string', title: 'Heading Text', description: 'e.g. Drive Your Dream Car' },
            { name: 'subheading', type: 'string', title: 'Subheading Text' },
            { name: 'buttonText', type: 'string', title: 'Button Text', description: 'e.g. Book Now' },
            { name: 'buttonLink', type: 'string', title: 'Button Link', description: 'e.g. /self-drive-car' }
          ]
        }
      ]
    }),
    defineField({
      name: 'aboutBadge',
      title: 'About Section Badge',
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
    }),
    defineField({
      name: 'aboutDescription2',
      title: 'About Section Paragraph 2',
      type: 'text',
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
  ],
})
