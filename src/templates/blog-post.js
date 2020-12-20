import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

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
  location,
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
    <Layout location={location} inBlog>
      <SEO
        title={seoTitle || title}
        description={description || post.excerpt}
        coverURL={siteUrl + cover.publicURL}
      />
      <article>
        <header>
          <h1 className="mb-4 text-2xl font-bold leading-tight text-gray-200 sm:text-4xl">
            {title}
          </h1>
          <div className="flex justify-between mt-2 text-sm font-semibold text-gray-300 uppercase">
            <span>{tagsString}</span>
            <span>{date}</span>
          </div>
        </header>
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
        <section className="mt-6">
          <MDXRenderer>{body}</MDXRenderer>
        </section>
        {nextLink ? (
          <>
            <hr className="mb-4" />
            <Link to={next.fields.slug}>
              <div className="p-4 my-2 bg-gray-800 border border-none rounded-lg shadow-lg">
                <span className="flex items-center text-sm font-semibold tracking-wide text-gray-300 uppercase">
                  <span role="img" aria-label="Eyes" className="mr-1 text-xl">
                    👀
                  </span>
                  This post may also interest you
                </span>
                <p className="mt-1 text-2xl font-bold leading-tight text-gray-200 underline">
                  {next.frontmatter.title}
                </p>
              </div>
            </Link>
          </>
        ) : null}
      </article>
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
