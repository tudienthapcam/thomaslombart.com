import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

const Home = ({
  data: {
    site: {
      siteMetadata: { description },
    },
    icon,
    allMdx: { edges: articles },
  },
}) => {
  const latestArticles = articles.slice(0, 3);

  return (
    <Layout>
      <Seo description={description} />
      <main className="flex-1 mt-4 space-y-10 sm:space-y-12">
        <section className="flex flex-col items-center sm:flex-row">
          <GatsbyImage
            image={icon.childImageSharp.gatsbyImageData}
            className="flex-shrink-0 rounded-full"
            alt=""
          />

          <div className="mt-6 sm:ml-8 sm:mt-0">
            <h2 className="text-3xl font-bold text-gray-100">
              Hey, I'm Thomas.
            </h2>

            <p className="mt-4 text-xl text-gray-200">
              I’m a front-end developer and writer. I deep dive into topics I'm
              interested in and I write everything I know about it. Currently,
              I’m into{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-600">
                building design systems.
              </span>
            </p>
          </div>
        </section>

        <section>
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-bold tracking-wide text-blue-400 uppercase">
              Latest articles
            </h3>

            <Link to="/articles" className="text-gray-100 hover:underline">
              View all
            </Link>
          </div>

          <ul className="mt-3 space-y-10 sm:mt-5">
            {latestArticles.map(({ node: article }) => (
              <li key={article.fields.slug}>
                <Link
                  to={article.fields.slug}
                  className="text-gray-100 hover:text-white"
                >
                  <h4 className="text-xl font-semibold">
                    {article.frontmatter.title}
                  </h4>

                  <p className="mt-2">{article.frontmatter.description}</p>

                  <div className="mt-3 text-lg font-semibold">
                    Read more &rarr;
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="flex justify-center mt-8 space-x-3 text-sm font-semibold tracking-wide text-gray-300 uppercase">
        <a
          href="https://twitter.com/thomas_lombart"
          target="_blank"
          className="hover:text-gray-100"
          rel="noreferrer"
        >
          Twitter
        </a>
        <span>•</span>
        <a
          href="https://github.com/thomaslombart"
          target="_blank"
          className="hover:text-gray-100"
          rel="noreferrer"
        >
          GitHub
        </a>
        <span>•</span>
        <a href="mailto:thomas.lombart@hey.com" className="hover:text-gray-100">
          Mail
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
    icon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        gatsbyImageData(width: 150, height: 150, layout: FIXED)
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
