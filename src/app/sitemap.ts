import type { MetadataRoute } from "next"
import { localizedLegalLanguages } from "@/lib/localizedLegalRoutes"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fastdisputeresolution.com"
  const legalPaths = ["/terms", "/privacy", "/refunds", "/disclaimer", "/cookies"]
  const paths = [
    "",
    ...legalPaths,
    ...localizedLegalLanguages.flatMap((locale) => legalPaths.map((path) => `/${locale}${path}`)),
  ]

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "yearly",
    priority: path === "" ? 1 : 0.4,
  }))
}
