import { defineField, defineType } from 'sanity'

export const locationPageType = defineType({
  name: 'locationPage',
  title: 'Location Specific Pages (26 Localities)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      description: 'e.g. Gachibowli, Banjara Hills, Hitech City, Masab Tank, Jubilee Hills, Secunderabad',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'URL path for this location (e.g. gachibowli, banjara-hills, hitech-city)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBadge',
      title: 'Breadcrumb / Hero Badge Text',
      type: 'string',
      initialValue: '✦ 24/7 SELF DRIVE & LUXURY CAR RENTALS',
    }),
    defineField({
      name: 'h1Title',
      title: 'Main H1 Heading',
      type: 'string',
      description: 'e.g. Luxury Car Rental & Self Drive Car Rental in Gachibowli',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introParagraph1',
      title: 'Intro Description Paragraph 1',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introParagraph2',
      title: 'Intro Description Paragraph 2',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'introParagraph3',
      title: 'Intro Description Paragraph 3 (Optional)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'locationImage',
      title: 'Location Featured Image 📷 (Recommended: 800 x 450 px)',
      type: 'image',
      description: 'Optional landmark or vehicle image for this area.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'serviceAreas',
      title: 'Key Landmarks & Hubs Served',
      type: 'array',
      description: 'e.g. DLF Cybercity, Financial District, ORR Exit 19, Wipro Circle',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Page Title Tag',
      type: 'string',
      description: 'Recommended: 50-60 characters for Google Search results.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 140-160 characters for Google Search results.',
    }),
    defineField({
      name: 'customFaqs',
      title: 'Custom Location FAQs (Optional)',
      type: 'array',
      description: 'Add specific FAQs for this locality or leave empty to use standard FAQs.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'h1Title',
      media: 'locationImage',
    },
  },
})
