import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Article summary',
      type: 'text',
      rows: 3,
      description: 'A short introduction for article previews and search descriptions.',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Search title',
      type: 'string',
      description: 'Use a distinct, readable title including DriveItCars. Falls back to the article title and brand.',
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: 'seoDescription',
      title: 'Search description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'DriveItCars',
    }),
    defineField({
      name: 'keywords',
      title: 'Editorial target keywords',
      description: 'For planning and reporting. These are not rendered as a meta keywords tag.',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'Upload the blog cover image. Recommended size: 1200x630 pixels for optimal social sharing. Keep file size under 500KB.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Image description (alt text)',
          type: 'string',
          description: 'Describe what is visible in this image. Avoid repeating a list of search keywords.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'caption',
          title: 'Image caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})
