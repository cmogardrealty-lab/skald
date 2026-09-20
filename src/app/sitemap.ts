import type { MetadataRoute } from "next";
import { DATE_MODIFIED, SITE_CONFIG } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(DATE_MODIFIED);
  return [
    {
      url: SITE_CONFIG.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/about`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
