import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const Header = ({ inMainPage = false }) => {
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
    <header>
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
    </header>
  );
};

export default Header;
