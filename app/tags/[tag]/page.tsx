import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getAllPosts();
  const tagSet = new Set<string>();

  posts.forEach((post: any) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag: string) => tagSet.add(tag));
    }
  });

  return Array.from(tagSet).map((tag) => ({ tag }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = getAllPosts();
  const filtered = posts.filter(
    (post: any) => Array.isArray(post.tags) && post.tags.includes(params.tag)
  );

  return (
    <div>
      <h1 className="text-3xl font-bold">Posts tagged "{params.tag}"</h1>

      <div className="space-y-6 mt-8">
        {filtered.map((post: any) => (
          <div key={post.slug} className="border border-gray-600 p-4 rounded-xl">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
            </Link>
            <p className="text-gray-400">{post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
