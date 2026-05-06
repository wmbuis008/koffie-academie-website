import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://koffie-academie.nl',
      lastModified: new Date('2026-05-06'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
