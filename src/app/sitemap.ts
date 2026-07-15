import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";

const BASE_URL = "https://www.lightsdigitalsolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/testimonials",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const workRoutes = caseStudies.map((cs) => ({
    url: `${BASE_URL}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes];
}
