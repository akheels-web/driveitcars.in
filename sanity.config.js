import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'
import { projectId, dataset } from './src/sanity/env'
import { myTheme } from './src/sanity/theme'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  theme: myTheme,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content Manager')
          .items([
            // Singleton: Site Settings & Global Footer
            S.listItem()
              .title('Site Settings & Global Footer')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),

            // Singleton: Landing Page (Home)
            S.listItem()
              .title('Landing Page (Home Sections)')
              .id('landingPage')
              .child(
                S.document()
                  .schemaType('landingPage')
                  .documentId('landingPage')
              ),

            S.divider(),

            // Collections
            S.documentTypeListItem('locationPage').title('Location Pages (26 Localities)'),
            S.documentTypeListItem('categoryPage').title('Service & Fleet Pages'),
            S.documentTypeListItem('car').title('Fleet Vehicles (Cars & Buses)'),
            S.documentTypeListItem('offer').title('Offers & Promos'),
            S.documentTypeListItem('testimonial').title('Customer Testimonials'),
            S.documentTypeListItem('post').title('Blog Posts'),
          ]),
    }),
  ],
})
