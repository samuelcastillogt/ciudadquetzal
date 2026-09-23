import { apiService } from "../services/api.service";

const SITE_URL = "https://www.ciudadquetzal.com";

const staticRoutes = [
  { path: "", priority: "1.0", changefreq: "daily" },
  { path: "/blog", priority: "0.9", changefreq: "daily" },
  { path: "/mercadito", priority: "0.9", changefreq: "weekly" },
  { path: "/contacto", priority: "0.6", changefreq: "monthly" },
  { path: "/equipo", priority: "0.6", changefreq: "monthly" },
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normalizeDate(value) {
  const date = value ? new Date(value) : new Date();
  return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
}

function createUrlEntry({ loc, lastmod, changefreq, priority }) {
  return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${normalizeDate(lastmod)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function getServerSideProps({ res }) {
  const [posts, businesses] = await Promise.all([
    apiService.getPosts().catch(() => []),
    apiService.getAllBusines().catch(() => []),
  ]);

  const today = new Date().toISOString();
  const urls = [
    ...staticRoutes.map((route) => ({
      loc: `${SITE_URL}${route.path}`,
      lastmod: today,
      changefreq: route.changefreq,
      priority: route.priority,
    })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.data.id}`,
      lastmod: post.data.updated,
      changefreq: "monthly",
      priority: "0.8",
    })),
    ...businesses.map((business) => ({
      loc: `${SITE_URL}/mercadito/${business.id}`,
      lastmod: business.updated || business.updatedAt || today,
      changefreq: "weekly",
      priority: "0.7",
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(createUrlEntry).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
