import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/posts");
  const files = fs.readdirSync(postsDir);

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const postsDir = path.join(process.cwd(), "content/posts");
  const fullPath = path.join(postsDir, `${params.slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return notFound();
  }

  const file = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(file);

  const MDXContent = (await import(`../../../content/posts/${params.slug}.mdx`)).default;

  return (
    <article className="prose prose-invert max-w-none">
      <h1>{data.title}</h1>
      <p className="text-gray-400">{data.date}</p>
      <MDXContent />
    </article>
  );
}
