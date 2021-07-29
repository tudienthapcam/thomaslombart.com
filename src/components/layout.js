import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { GatsbyImage } from "gatsby-plugin-image";

import MDXComponents from "./MDXComponents";

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
    icon,
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
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );

  return (
    <MDXProvider components={MDXComponents}>
      <div className="flex flex-col min-h-full bg-gray-900">
        <header className="sticky top-0 z-10 w-full py-4 bg-gray-900">
          <div className="mx-auto max-w-prose">
            <div className="flex items-center justify-between px-4 md:px-0">
              <div className="flex items-center">
                <div className="mr-3 bg-gray-700 rounded-full shadow">
                  <GatsbyImage
                    image={icon.childImageSharp.gatsbyImageData}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                    alt=""
                  />
                </div>

                <Link
                  to="/"
                  className="flex items-center text-lg font-extrabold tracking-wide text-gray-200 uppercase sm:text-xl"
                >
                  {title}
                </Link>
              </div>

              <Link
                to="/articles"
                className="inline-block px-3 py-2 text-lg font-bold text-gray-100 transition rounded-lg sm:text-xl hover:bg-gray-800"
              >
                Blog
              </Link>
            </div>
          </div>
        </header>

        <div className="flex flex-col flex-1 w-full px-4 mx-auto my-6 md:px-0 max-w-prose ">
          {children}
        </div>
      </div>
    </MDXProvider>
  );
};

export default Layout;
