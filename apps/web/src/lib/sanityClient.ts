import { createClient } from "@sanity/client"

const isProd = import.meta.env.VITE_SANITY_DATASET === "production"

export const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: "2025-07-16",
  token: isProd
    ? import.meta.env.VITE_SANITY_PRODUCTION
    : import.meta.env.VITE_SANITY_READ_TOKEN,
  useCdn: false,
})

console.log("🔍 Sanity ENV", {
  mode: import.meta.env.MODE,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  token: isProd
    ? import.meta.env.VITE_SANITY_PRODUCTION?.slice(0, 10)
    : import.meta.env.VITE_SANITY_READ_TOKEN?.slice(0, 10),
})