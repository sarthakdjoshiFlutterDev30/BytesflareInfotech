import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bytesflareinfotech.vercel.app';
  
  return [
    {
      url: baseUrl,
      lastModified: '2025-10-29T11:40:49+00:00',
      priority: 1.00,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified:'>2025-10-29T11:40:49+00:00',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified:'2025-10-29T11:40:50+00:00',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: '2025-10-29T11:40:50+00:00',
      priority: 0.80,
    },
  ];
}
