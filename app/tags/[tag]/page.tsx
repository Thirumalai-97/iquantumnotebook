import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const tags = new Set();

  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => tags.add(tag));
    }
  });

  return [...tags].map((tag) => ({ tag: tag.toString() }));
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await getAllPosts();
  const filtered = posts.filter((post) => post.tags && post.tags.includes(params.tag));

  return (
    <section>
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">#{params.tag}</h1>
      {filtered.length === 0 ? (
        <p className="text-gray-400">No posts found for this tag.</p>
      ) : (
        <div className="space-y-10">{filtered.map((post) => (<PostCard key={post.slug} post={post} />))}</div>
      )}
    </section>
  );
}
