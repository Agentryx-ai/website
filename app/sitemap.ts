import type { MetadataRoute } from "next";

const baseUrl = "https://agentryx-ai.com";
const publicRoutes = [
  "/",
  "/about",
  "/press",
  "/thesis",
  "/products/agentryx",
  "/products/itineva",
  "/products/moduboza",
  "/products/retalk"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.startsWith("/products/") ? 0.8 : 0.7
  }));
}
