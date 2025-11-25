import Link from "next/link";
export default function PostCard({ post }: any) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="p-6 rounded-xl bg-[#111216] border border-gray-800 hover:border-cyan-400 transition shadow-sm hover:shadow-cyan-500/20">
        <h3 className="text-2xl font-semibold text-white mb-3">{post.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{post.summary}</p>
        <span className="text-gray-500 text-sm">{post.date}</span>
      </div>
    </Link>
  );
}
