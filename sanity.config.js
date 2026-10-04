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
          .title('Content')
          .items([
            // Singleton: Site Settings (Opens directly without blank lists)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),

            // Singleton: Landing Page (Opens directly without blank lists)
            S.listItem()
              .title('Landing Page (Home)')
              .id('landingPage')
              .child(
                S.document()
                  .schemaType('landingPage')
                  .documentId('landingPage')
              ),

            S.divider(),

            // Collections
            S.documentTypeListItem('car').title('Fleet Vehicles (Cars & Buses)'),
            S.documentTypeListItem('offer').title('Offers & Promos'),
            S.documentTypeListItem('testimonial').title('Customer Testimonials'),
            S.documentTypeListItem('post').title('Blog Posts'),
          ]),
    }),
  ],
})
