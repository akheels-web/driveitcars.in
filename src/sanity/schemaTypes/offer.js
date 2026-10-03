import { defineField, defineType } from 'sanity'

export const offerType = defineType({
  name: 'offer',
  title: 'Offers & Promos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Offer Title',
      type: 'string',
      description: 'e.g. 20% Off on Weekday Rentals',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of the offer.',
    }),
    defineField({
      name: 'image',
      title: 'Promo Image / Banner',
      type: 'image',
      description: 'Upload the promo banner. Recommended size: 1200x600 pixels (2:1 aspect ratio). Keep file size under 500KB.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'couponCode',
      title: 'Coupon Code',
      type: 'string',
      description: 'e.g. SAVE20',
    }),
    defineField({
      name: 'validUntil',
      title: 'Valid Until',
      type: 'datetime',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
