import { defineField, defineType } from 'sanity'

export const categoryPageType = defineType({
  name: 'categoryPage',
  title: 'Fleet & Service Category Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Category Name',
      type: 'string',
      description: 'e.g. Self Drive Cars, Luxury Cars, Luxury Buses, Chauffeur Cabs, Hatchbacks, Sedans, 5-Seater SUVs, 7-Seater SUVs',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBadge',
      title: 'Breadcrumb Eyebrow Badge',
      type: 'string',
      initialValue: '✦ PREMIUM HYDERABAD FLEET',
    }),
    defineField({
      name: 'h1Title',
      title: 'H1 Main Heading',
      type: 'string',
      description: 'e.g. Self Drive Cars in Hyderabad, Luxury Car Rentals in Hyderabad',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introDescription',
      title: 'Intro Description Paragraphs',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'bannerImage',
      title: 'Hero / Banner Image 📷',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title Tag',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Meta Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'h1Title',
      media: 'bannerImage',
    },
  },
})
