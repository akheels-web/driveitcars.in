import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Global Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Brand Title',
      type: 'string',
      initialValue: 'DRIVEIT Cars Hyderabad',
    }),
    defineField({
      name: 'description',
      title: 'Global SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Brand Header Logo 📷 (Recommended: 260 x 76 px)',
      type: 'image',
      description: '📌 LOGO SIZING: Upload your brand logo (transparent PNG, recommended 260 x 76 px, max file size 150 KB).',
      options: { hotspot: true },
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Primary Phone Number (Click to Call)',
      type: 'string',
      initialValue: '+91 6300041186',
      description: 'Format: +91 6300041186',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'Primary WhatsApp Number',
      type: 'string',
      initialValue: '+91 6300041186',
      description: 'WhatsApp number including country code (e.g. 916300041186)',
    }),
    defineField({
      name: 'email',
      title: 'Official Email Address',
      type: 'string',
      initialValue: 'driveitcars@gmail.com',
    }),
    defineField({
      name: 'address',
      title: 'Head Office Physical Address',
      type: 'string',
      initialValue: '10-2-289/83, Mehar Mansion, Rd Number 2, Shantinagar Colony, Masab Tank, Hyderabad, Telangana 500028',
    }),
    defineField({
      name: 'workingHours',
      title: 'Working Operating Hours',
      type: 'string',
      initialValue: '7:00 AM – 10:00 PM (Monday to Sunday)',
    }),

    // ========== FOOTER SPECIFIC FIELDS ==========
    defineField({
      name: 'footerLogo',
      title: 'Footer Brand Logo 📷 (Recommended: 230 x 66 px)',
      type: 'image',
      description: 'Optional separate footer logo if different from header.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'footerAbout',
      title: 'Footer About / Bio Description',
      type: 'text',
      rows: 3,
      initialValue: 'DriveIt is Hyderabad’s leading car rental platform offering premium self-drive cars, luxury wedding cars, and group travel buses with transparent pricing and doorstep delivery.',
    }),
    defineField({
      name: 'footerTrustTags',
      title: 'Footer Trust Badges (Under Logo)',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['100% Insured', '24/7 Road Support', 'Sanitized Cars'],
    }),
    defineField({
      name: 'copyrightText',
      title: 'Footer Copyright Notice',
      type: 'string',
      initialValue: '© 2026 DriveIt Cars. All Rights Reserved. Crafted with care for travelers in Hyderabad.',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Profiles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (Facebook, Instagram, Twitter, YouTube, LinkedIn)', type: 'string' },
            { name: 'url', title: 'Profile URL', type: 'url' },
          ],
        },
      ],
    }),
  ],
})
