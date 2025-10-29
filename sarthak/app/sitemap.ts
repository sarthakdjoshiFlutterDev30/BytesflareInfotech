import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bytesflareinfotech.vercel.app';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date('2025-10-29T11:40:49+00:00'),
      changeFrequency: 'weekly',
      priority: 1.00,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2025-10-29T11:40:49+00:00'),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2025-10-29T11:40:50+00:00'),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date('2025-10-29T11:40:50+00:00'),
      changeFrequency: 'monthly',
      priority: 0.80,
    },
  ];
}
