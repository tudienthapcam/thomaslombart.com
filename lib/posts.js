import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const transformPostData = (data) => ({
  ...data,
  humanDate: dateTimeFormat.format(new Date(data.date)),
});

const postsDirectory = path.join(process.cwd(), "posts");

export async function getPost(slug) {
  const file = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(file, "utf8");

  const { data, content } = matter(fileContents);

  const mdx = await serialize(content, {
    mdxOptions: { remarkPlugins: [require("remark-code-titles")] },
  });

  return { mdx, frontmatter: transformPostData(data) };
}

export function getAllPosts() {
  const posts = fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const file = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(file, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(".mdx", ""),
        data: transformPostData(data),
      };
    });

  posts.sort(
    (postA, postB) => new Date(postB.data.date) - new Date(postA.data.date)
  );

  return posts;
}
