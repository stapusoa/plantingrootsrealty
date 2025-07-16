import {createClient} from '@sanity/client'

export const sanity = createClient({
  projectId: 'ocwcthde',
  dataset: 'production',
  apiVersion: '2025-07-16',
  useCdn: true,
})
