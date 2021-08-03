import React from "react";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

import config from "../config";

import { getAllPosts, getPost } from "../lib/posts";

import MDXComponents from "../components/MDXComponents";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition cursor-pointer hover:text-gray-100"
    >
      {children}
    </a>
  );
};

export default function Blog({ post, slug }) {
  const { coverCredit, description, title, humanDate, tags } = post.frontmatter;

  const tagsString = tags.join(", ");
  const articleUrl = `${config.url}/${slug}`;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        cover={`${config.url}/images/${slug}/cover.jpg`}
      />

      <h1 className="mb-6 text-2xl font-extrabold text-gray-200 uppercase sm:text-4xl">
        {title}
      </h1>

      <div className="flex justify-between my-2 text-sm font-semibold text-gray-300 uppercase">
        <span>{tagsString}</span>
        <span>{humanDate}</span>
      </div>

      <Image
        priority
        src={require(`../public/images/${slug}/cover.jpg`)}
        alt=""
        className="mt-4 rounded-lg"
      />

      {coverCredit ? (
        <p className="mt-2 text-center text-gray-300">{coverCredit}</p>
      ) : null}

      <div className="mt-8">
        <MDXRemote {...post.mdx} components={MDXComponents} />
      </div>

      <hr className="hidden mt-6 mb-4 border border-gray-400 rounded-3xl sm:block" />

      <div className="flex mt-6 text-xl font-medium text-gray-400 sm:mt-0 ">
        <ExternalLink
          href={`https://twitter.com/intent/tweet?url=${articleUrl}&text=${
            title + " by @thomas_lombart"
          }`}
        >
          Share on Twitter
        </ExternalLink>

        <span className="mx-4">&bull;</span>

        <ExternalLink
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`}
        >
          Share on LinkedIn
        </ExternalLink>

        <div className="hidden ml-auto sm:block">
          <ExternalLink
            href={`https://github.com/thomaslombart/thomaslombart.com/blob/main/posts/${slug}.mdx`}
          >
            Edit on GitHub
          </ExternalLink>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({ params: { id: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);

  return { props: { post, slug: params.id } };
}
