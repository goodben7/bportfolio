import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    // Base URL from environment or hardcoded fallback
    const baseUrl = 'https://benjaminkalombo.netlify.app';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Si vous avez d'autres pages (ex: blog), ajoutez-les ici
    ];
}
