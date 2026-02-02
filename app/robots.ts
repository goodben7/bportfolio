import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://benjaminkalombo.netlify.app';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/', // Exemple de dossier à ne pas indexer
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
