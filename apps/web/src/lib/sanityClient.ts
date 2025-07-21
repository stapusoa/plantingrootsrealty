import { createClient, type SanityClient } from "@sanity/client"

const isProd = import.meta.env.VITE_SANITY_DATASET === "production"

function createSanityClient(): SanityClient | null {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
  const dataset = import.meta.env.VITE_SANITY_DATASET
  const token = isProd
    ? import.meta.env.VITE_SANITY_PRODUCTION
    : import.meta.env.VITE_SANITY_READ_TOKEN

  if (!projectId || !dataset) {
    console.warn("[Sanity] Missing projectId or dataset. Sanity client won't initialize.")
    return null
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: "2025-07-16",
    token,
    useCdn: false,
  })
}

const sanity = createSanityClient()

export function getSanityClient(): SanityClient {
  if (!sanity) {
    throw new Error("[Sanity] Client not initialized. Check your env vars.")
  }
  return sanity
}

export { sanity }

console.log("🔍 Sanity ENV", {
  mode: import.meta.env.MODE,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  tokenPreview: (import.meta.env.VITE_SANITY_PRODUCTION || import.meta.env.VITE_SANITY_READ_TOKEN)?.slice(0, 10),
})