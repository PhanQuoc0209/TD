import { MetadataRoute } from "next"
import { siteConfig } from "@/config/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/gioi-thieu",
    "/dich-vu-dich-thuat",
    "/dich-thuat-cong-chung",
    "/ngon-ngu",
    "/tin-tuc",
    "/lien-he",
    "/dich-thuat-cong-chung-quang-ninh",
    "/dich-thuat-cong-chung-ha-noi",
  ]

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("cong-chung") ? 0.9 : 0.8,
  }))

  const newsPages: MetadataRoute.Sitemap = siteConfig.news.map((item) => ({
    url: `${siteConfig.domain}/tin-tuc/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticPages, ...newsPages]
}
