import {apiService} from "../services/api.service.ts"
export async function getServerSideProps({ res }) {
    // Llamada a tu API para obtener las URLs dinámicas
    const apiResponse = await apiService.getPosts()
    const urls = apiResponse
  
    // Generar el contenido XML para el sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>${`https://ciudadquetzal.com`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${'monthly'}</changefreq>
    <priority>${'1.0'}</priority>
  </url>
      ${urls
        .map((url) => {
          return `
            <url>
              <loc>${`https://www.ciudadquetzal.com/blog/${url.data.id}`}</loc>
              <lastmod>${url.data.updated}</lastmod>
              <changefreq>${'monthly'}</changefreq>
              <priority>${'1.0'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;
  
    // Configurar el contenido para que sea XML
    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {}, // No necesitamos pasar props para este componente
    };
  }
  
  // Este archivo no renderiza ningún componente, simplemente devuelve el XML
  export default function Sitemap() {
    return null;
  }