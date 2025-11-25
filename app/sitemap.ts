import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://iquantumnotebook.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://iquantumnotebook.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...blogEntries,
  ];
}
