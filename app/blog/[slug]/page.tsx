import { getPostBySlug, getAllPosts } from "@/lib/posts";
import MDXComponents from "@/components/MDXComponents";
import { MDXRemote } from "next-mdx-remote";
import matter from "gray-matter";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  const { content } = matter((post as any).content || '');

  return (
    <article>
      <h1 className="text-4xl font-bold text-white mb-4">{(post as any).title}</h1>
      <p className="text-gray-500 mb-10">{(post as any).date}</p>

      <div className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={MDXComponents as any} />
      </div>
    </article>
  );
}
