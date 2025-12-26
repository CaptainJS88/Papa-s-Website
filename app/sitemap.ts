import { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pharmaconsult.com"; // Update with your actual domain

  const routes = [
    "",
    "/about",
    "/services",
    "/projects",
    "/contact",
  ];

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/projects/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}


