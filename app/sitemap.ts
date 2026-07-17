import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://lixmobility.com"; return [{ url: base, priority: 1 }, { url: `${base}/capitanes`, priority: .8 }]; }
