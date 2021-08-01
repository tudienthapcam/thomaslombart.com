import React from "react";

import Layout from "../components/Layout";
import ArticlePreview from "../components/ArticlePreview";
import SEO from "../components/SEO";

import { getAllPosts } from "../lib/posts";

const BlogIndex = ({ posts }) => {
  return (
    <Layout>
      <SEO
        title="All articles"
        description="Articles on web development and productivity"
      />

      <p className="mb-4 text-xl text-gray-200">
        Here&apos;s all the articles I&apos;ve written so far. There are{" "}
        {posts.length} of them.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <ArticlePreview key={post.slug} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export async function getStaticProps() {
  const posts = getAllPosts();

  return { props: { posts } };
}
