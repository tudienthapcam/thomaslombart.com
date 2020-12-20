import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/layout";
import ArticlePreview from "../components/articlePreview";
import SEO from "../components/seo";

import MentorBanner from "../components/mentorBanner";

const SectionHeading = ({ children }) => (
  <h3 className="text-2xl font-bold text-gray-100 sm:text-3xl">{children}</h3>
);

const InlineLink = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-gray-200 underline hover:text-gray-100"
  >
    {children}
  </a>
);

const TextBold = ({ children }) => (
  <span className="font-semibold">{children}</span>
);

const Home = ({
  location,
  data: {
    site: {
      siteMetadata: { description },
    },
    photo,
    allMdx,
  },
}) => {
  const articles = allMdx.edges.slice(0, 4);

  return (
    <Layout location={location}>
      <SEO description={description} />
      <div className="space-y-8 sm:space-y-16">
        <section>
          <div className="flex items-center justify-between mb-6">
            <SectionHeading>Latest articles</SectionHeading>
            <Link
              to="/articles"
              className="inline-block px-3 py-1 font-bold transition bg-gray-100 rounded-lg shadow-lg sm:text-lg hover:bg-gray-300"
            >
              See all articles
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {articles.map(({ node }) => (
              <ArticlePreview key={node.fields.slug} node={node} />
            ))}
          </div>
        </section>
        <MentorBanner />
        <section className="flex flex-col p-5 bg-gray-800 rounded-lg shadow-xl sm:flex-row sm:p-8">
          <div className="flex flex-col">
            <SectionHeading>About me</SectionHeading>
            <Image
              fixed={photo.childImageSharp.fixed}
              className="p-2 mt-4 border-2 border-gray-200 rounded-full"
            />
          </div>
          <p className="flex flex-col flex-1 mt-4 space-y-3 text-lg leading-relaxed text-gray-200 sm:mt-0 sm:ml-10">
            <span>
              My name is Thomas Lombart. I live in France.{" "}
              <TextBold>I learned web development by myself</TextBold> though I
              have a degree in computer science.
            </span>
            <span>
              I currently work remotely for{" "}
              <InlineLink to="https://www.backmarket.com/">
                Back Market
              </InlineLink>
              , a marketplace for refurbished products. I’ve also worked, in the
              past, for Decathlon, and Mindbaz. I learned along the way how to
              build{" "}
              <TextBold>
                accessible, performant, beautiful and well-tested
              </TextBold>{" "}
              web applications with JavaScript technologies such as{" "}
              <TextBold>React or Vue.</TextBold>
            </span>
            <span>
              Outside of my full-time job, I like to write in-depth articles on
              modern web development. I also contribute to open-source whenever
              I have some time on my hands. Right now, my focus is on an{" "}
              <InlineLink to="https://github.com/testing-library/eslint-plugin-testing-library">
                ESLint plugin for Testing Library.
              </InlineLink>
            </span>
          </p>
        </section>
      </div>
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
    photo: file(absolutePath: { regex: "/photo.jpeg/" }) {
      publicURL
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
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
            cover {
              publicURL
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
