import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description (SEO)',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      description: 'Upload your site logo. Recommended size: 250x60 pixels (transparent PNG).',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'platform', title: 'Platform (e.g. Facebook)', type: 'string' },
          { name: 'url', title: 'URL', type: 'url' }
        ]
      }]
    }),
  ],
})
