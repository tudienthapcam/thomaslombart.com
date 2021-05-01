import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ArticlePreview from "../components/articlePreview";
import Seo from "../components/seo";

const BlogIndex = ({
  data: {
    site: {
      siteMetadata: { description },
    },
    allMdx,
  },
}) => {
  const articles = allMdx.edges;

  return (
    <Layout>
      <div>
        <Seo title="All articles" description={description} />
        <h3 className="my-4 text-xl font-medium text-gray-100">
          You'll find below all the articles I've written. There are{" "}
          {articles.length} of them.
        </h3>
        <main className="grid grid-cols-1 gap-8 mt-6 sm:grid-cols-2">
          {articles.map(({ node }) => (
            <ArticlePreview key={node.fields.slug} node={node} />
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 180)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            cover {
              publicURL
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
