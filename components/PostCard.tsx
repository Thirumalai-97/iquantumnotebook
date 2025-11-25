// components/PostCard.tsx

import Link from "next/link";

export default function PostCard({ post }: any) {
  return (
    <div className="border border-gray-700 rounded-xl p-6 hover:bg-gray-900 transition">
      <h2 className="text-2xl font-semibold">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </h2>

      <p className="text-gray-400 text-sm mt-2">{post.date}</p>

      {post.summary && (
        <p className="text-gray-300 mt-4">{post.summary}</p>
      )}
    </div>
  );
}
