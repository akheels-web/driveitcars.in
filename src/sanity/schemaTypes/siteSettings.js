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
      title: 'Site Logo 📷 (Recommended: 250 x 60 px)',
      type: 'image',
      description: '📌 LOGO SIZING: Upload your brand logo. Recommended dimensions: 250 x 60 pixels (horizontal format) as a transparent PNG. Keep file size under 100 KB.',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'string',
      description: 'e.g. Masab Tank, Hyderabad, Telangana 500028',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Hours',
      type: 'string',
      description: 'e.g. Mon to Sun: 7:00am – 10:00pm',
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
