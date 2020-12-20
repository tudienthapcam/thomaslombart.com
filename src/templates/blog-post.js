import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Header from "../components/header";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({
  pageContext: { next },
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
    next: nextLink,
  } = post.frontmatter;

  const tagsString = tags.join(", ");

  return (
    <Layout>
      <SEO
        title={seoTitle || title}
        description={description || post.excerpt}
        coverURL={siteUrl + cover.publicURL}
      />
      <div className="px-4 py-6 mx-auto max-w-prose md:px-0">
        <Header />
        <h1 className="mt-6 mb-4 text-2xl font-bold leading-tight text-gray-200 sm:text-4xl">
          {title}
        </h1>
        <div className="flex justify-between text-sm font-semibold text-gray-300 uppercase">
          <span>{tagsString}</span>
          <span>{date}</span>
        </div>
        {cover && (
          <>
            <Img
              fluid={cover.childImageSharp.fluid}
              className="mt-4 rounded-lg"
            />
            {coverCredit ? (
              <p className="mt-2 text-center text-gray-300">{coverCredit}</p>
            ) : null}
          </>
        )}
        <main className="mt-6">
          <MDXRenderer>{body}</MDXRenderer>
        </main>
        {nextLink ? (
          <>
            <hr className="mb-4" />
            <Link to={next.fields.slug}>
              <div className="p-6 transition transform bg-gray-800 border-none rounded-lg shadow-lg hover:shadow-xl hover:scale-103">
                <span className="flex items-center text-sm font-semibold tracking-wide text-gray-300 uppercase">
                  <span role="img" aria-label="Eyes" className="mr-1 text-xl">
                    👀
                  </span>
                  This post may also interest you
                </span>
                <p className="mt-1 text-2xl font-bold leading-tight text-gray-200">
                  {next.frontmatter.title}
                </p>
              </div>
            </Link>
          </>
        ) : null}
      </div>
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverCredit
      }
    }
  }
`;
