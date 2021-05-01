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
  const [search, setSearch] = React.useState("");
  const articles = allMdx.edges;

  return (
    <Layout>
      <div className="flex-1 space-y-8">
        <Seo title="All articles" description={description} />
        <main className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {articles
            .filter(
              ({
                node: {
                  frontmatter: { title, tags },
                },
              }) => {
                const lowercasedTitle = title.toLowerCase();
                const lowercasedSearch = search.toLowerCase();
                const wordsSearched = lowercasedSearch
                  .split(/[ ,]+/)
                  .filter(Boolean);

                if (wordsSearched.length > 0) {
                  return (
                    lowercasedTitle.includes(lowercasedSearch) ||
                    tags.some((tag) =>
                      wordsSearched.some((word) => tag.includes(word))
                    )
                  );
                }

                return true;
              }
            )
            .map(({ node }) => (
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
