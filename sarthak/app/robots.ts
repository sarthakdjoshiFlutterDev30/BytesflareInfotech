import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/server/'],
    },
    sitemap: 'https://bytesflareinfotech.vercel.app/sitemap.xml',
  }
}