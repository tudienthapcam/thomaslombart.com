import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import MDXComponents from "./MDXComponents";

const Layout = ({ children }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <MDXProvider components={MDXComponents}>
      <div className="flex flex-col min-h-full bg-gray-900">
        <header className="sticky top-0 z-10 w-full pt-4 bg-gray-900 ">
          <div className="mx-auto max-w-prose">
            <div className="flex flex-row items-baseline justify-between px-4 md:px-0">
              <Link
                to="/"
                className="flex items-center text-xl font-bold tracking-wide text-gray-200 uppercase"
              >
                {title}
              </Link>

              <Link
                to="/articles"
                className="inline-block text-lg font-bold text-gray-100 hover:underline"
              >
                Blog
              </Link>
            </div>
            <div className="w-full h-1 mt-3 rounded-full bg-gradient-to-r from-yellow-500 to-pink-700"></div>
          </div>
        </header>

        <div className="flex flex-col flex-1 w-full px-4 mx-auto my-8 md:px-0 max-w-prose ">
          {children}
        </div>
      </div>
    </MDXProvider>
  );
};

export default Layout;
