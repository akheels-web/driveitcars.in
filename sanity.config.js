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
    structureTool(),
  ],
})
