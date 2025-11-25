import { getAllPosts } from "@/lib/posts";
import { SitemapStream, streamToPromise } from "sitemap";

export async function GET() {
  const posts = await getAllPosts();
  const smStream = new SitemapStream({ hostname: "https://your-domain.com" });

  posts.forEach((post) => {
    smStream.write({ url: `/blog/${post.slug}`, changefreq: "weekly" });
  });

  smStream.end();
  const sitemap = await streamToPromise(smStream);

  return new Response(sitemap.toString(), {
    headers: { "Content-Type": "application/xml" },
  });
}
