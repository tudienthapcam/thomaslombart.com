import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Gradient = ({ children }) => (
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
    {children}
  </span>
);

const Home = ({
  data: {
    site: {
      siteMetadata: { description },
    },
    allMdx: { edges: articles },
  },
}) => {
  const latestArticles = articles.slice(0, 3);

  return (
    <Layout>
      <Seo description={description} />
      <main className="flex-1 space-y-10 sm:space-y-12">
        <section>
          <h2 className="text-3xl font-bold text-gray-100 sm:text-4xl">
            Hi, I'm Thomas.
          </h2>

          <p className="mt-6 text-2xl text-gray-200 sm:text-3xl">
            I’m a front-end developer. I write on{" "}
            <Gradient>web development</Gradient> and{" "}
            <Gradient>productivity</Gradient> for developers.
          </p>
        </section>

        <section>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-wide text-yellow-500 uppercase">
              Latest articles
            </h3>

            <Link
              to="/articles"
              className="px-3 py-2 font-medium text-gray-100 transition rounded-lg hover:bg-gray-800"
            >
              View all
            </Link>
          </div>

          <ul className="mt-5 space-y-10">
            {latestArticles.map(({ node: article }) => (
              <li key={article.fields.slug}>
                <Link to={article.fields.slug} className="text-gray-100">
                  <h4 className="text-xl font-semibold hover:underline">
                    {article.frontmatter.title}
                  </h4>

                  <p className="mt-2 text-base sm:text-lg">
                    {article.frontmatter.description}
                  </p>

                  <div className="mt-3 text-lg font-semibold">
                    Read more &rarr;
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="flex justify-center mt-8 space-x-3 text-sm font-semibold tracking-wide text-gray-100 uppercase">
        <a
          href="https://twitter.com/thomas_lombart"
          target="_blank"
          className="hover:underline"
          rel="noreferrer"
        >
          Twitter
        </a>
        <span>•</span>
        <a
          href="https://github.com/thomaslombart"
          target="_blank"
          className="hover:underline"
          rel="noreferrer"
        >
          GitHub
        </a>
      </footer>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
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
            date(formatString: "MMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
