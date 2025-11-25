import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <h1 className="text-4xl font-bold">Blog</h1>

      <div className="space-y-10 mt-14">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
