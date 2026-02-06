import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

if (!projectId) {
    console.error("Missing Sanity Project ID. Please set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local")
}

export const client = createClient({
    projectId: projectId || "dummy_id", // Fallback to prevent crash, but data fetch will fail
    dataset,
    apiVersion,
    useCdn,
    perspective: 'published',
})
