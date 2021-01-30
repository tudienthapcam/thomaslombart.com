import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import useTrackGoal from "../hooks/useTrackGoal";

const Header = ({ inMainPage = false }) => {
  const track = useTrackGoal();

  const {
    site: {
      siteMetadata: { title },
    },
    icon: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fixed(width: 48, height: 48) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return (
    <header className="flex sm:flex-row sm:justify-between sm:items-center">
      <Link
        to="/"
        className="flex items-center text-2xl font-extrabold text-gray-200"
      >
        <Image fixed={fixed} className="rounded-full" />
        {inMainPage ? (
          <h1 className="ml-4">{title}</h1>
        ) : (
          <span className="ml-4">{title}</span>
        )}
      </Link>
      <Link
        to="/articles"
        className="hidden px-3 py-1 font-bold transition bg-gray-100 rounded-lg shadow-lg sm:inline-block hover:bg-gray-300"
        onClick={() => track("See all articles")}
      >
        Blog
      </Link>
    </header>
  );
};

export default Header;
