import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
}

function parseFrontmatter(fileContent: string): {
  metadata: Record<string, string | string[]>;
  content: string;
} {
  const frontmatterMatch = fileContent.match(
    /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
  );
  if (!frontmatterMatch) {
    return { metadata: {}, content: fileContent };
  }

  const frontmatterBlock = frontmatterMatch[1];
  const content = frontmatterMatch[2];
  const metadata: Record<string, string | string[]> = {};

  let currentKey = "";
  let inArray = false;
  const arrayValues: string[] = [];

  for (const line of frontmatterBlock.split("\n")) {
    const keyValueMatch = line.match(/^(\w+):\s*(.*)$/);

    if (keyValueMatch) {
      if (inArray && currentKey) {
        metadata[currentKey] = [...arrayValues];
        arrayValues.length = 0;
        inArray = false;
      }

      const [, key, value] = keyValueMatch;
      currentKey = key;

      if (value === "") {
        inArray = true;
      } else {
        metadata[key] = value.replace(/^["']|["']$/g, "");
      }
    } else if (inArray) {
      const arrayItemMatch = line.match(/^\s*-\s*["']?(.+?)["']?\s*$/);
      if (arrayItemMatch) {
        arrayValues.push(arrayItemMatch[1]);
      }
    }
  }

  if (inArray && currentKey) {
    metadata[currentKey] = [...arrayValues];
  }

  return { metadata, content };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"));

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.(mdx|md)$/, "");
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { metadata, content } = parseFrontmatter(fileContent);

      return {
        slug,
        title: (metadata.title as string) || slug,
        description: (metadata.description as string) || "",
        date: (metadata.date as string) || "",
        author: (metadata.author as string) || "Matthew Cowan",
        category: (metadata.category as string) || "",
        tags: Array.isArray(metadata.tags) ? metadata.tags : [],
        image: (metadata.image as string) || "",
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
