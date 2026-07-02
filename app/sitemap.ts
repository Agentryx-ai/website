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

function koRoute(route: string) {
  return route === "/" ? "/ko" : `/ko${route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.flatMap((route) => {
    const enUrl = `${baseUrl}${route}`;
    const koUrl = `${baseUrl}${koRoute(route)}`;
    const changeFrequency = route === "/" ? "weekly" : "monthly";
    const priority = route === "/" ? 1 : route.startsWith("/products/") ? 0.8 : 0.7;
    const alternates = { languages: { en: enUrl, ko: koUrl, "x-default": enUrl } };

    return [
      { url: enUrl, changeFrequency, priority, alternates },
      { url: koUrl, changeFrequency, priority, alternates }
    ];
  });
}
