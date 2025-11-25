import { getAllPosts } from "@/lib/posts";
import RSS from "rss";

export async function GET() {
  const posts = await getAllPosts();

  const feed = new RSS({
    title: "Thirumalai Blog",
    description: "Quantum • AI • Research • Life",
    site_url: "https://your-domain.com",   // ← change to your domain
    feed_url: "https://your-domain.com/rss.xml",
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.summary,
      url: `https://your-domain.com/blog/${post.slug}`,
      date: post.date,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
