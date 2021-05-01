import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPostTemplate = ({
  location,
  data: {
    mdx: post,
    site: {
      siteMetadata: { siteUrl },
    },
  },
}) => {
  const { body } = post;
  const {
    cover,
    coverCredit,
    title,
    seoTitle,
    description,
    date,
    tags,
  } = post.frontmatter;

  const tagsString = tags.join(", ");

  const twitterUrl = siteUrl + location.pathname;
  const twitterText = `"${title}" by @thomas_lombart`;
  const twitterLink = `https://twitter.com/intent/tweet?url=${twitterUrl}&text=${twitterText}`;

  return (
    <Layout>
      <Seo
        title={seoTitle || title}
        description={description || post.excerpt}
        coverURL={siteUrl + cover.publicURL}
      />
      <h1 className="text-2xl font-bold leading-tight text-gray-200 sm:text-4xl">
        {title}
      </h1>
      <div className="flex justify-between mt-4 text-sm font-medium text-gray-300 uppercase">
        <span>{tagsString}</span>
        <span>{date}</span>
      </div>
      {cover && (
        <>
          <GatsbyImage
            image={cover.childImageSharp.gatsbyImageData}
            className="mt-4 rounded-lg"
            alt={coverCredit ? coverCredit : ""}
          />
          {coverCredit ? (
            <p className="mt-2 text-center text-gray-300">{coverCredit}</p>
          ) : null}
        </>
      )}
      <main className="mt-6">
        <MDXRenderer>{body}</MDXRenderer>
      </main>
      <a
        href={twitterLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-3 mt-2 text-xl font-semibold text-gray-100 rounded-lg shadow-xl w-max bg-gradient-to-r from-blue-600 to-purple-800"
      >
        Share this article on Twitter
      </a>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        seoTitle
        description
        date(formatString: "MMM DD, YYYY")
        tags
        next
        cover {
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        coverCredit
      }
    }
  }
`;
