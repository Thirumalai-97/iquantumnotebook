import Search from "@/components/Search";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <h1 className="text-4xl font-bold text-cyan-400 mb-10">All Posts</h1>

      <Search posts={posts} />

      <div className="space-y-10 mt-14">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
