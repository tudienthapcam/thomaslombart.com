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
      <div className="flex min-h-full bg-gray-900">
        <header className="fixed z-10 w-full px-4 pt-4 bg-gray-900 md:px-0">
          <div className="mx-auto max-w-prose">
            <div className="flex flex-row items-center justify-between">
              <Link
                to="/"
                className="flex items-center text-xl font-extrabold tracking-wide text-gray-200 uppercase"
              >
                {title}
              </Link>

              <Link
                to="/articles"
                className="inline-block px-3 py-1 font-bold transition bg-gray-100 rounded-lg shadow-lg hover:bg-gray-300"
              >
                Blog
              </Link>
            </div>
            <div className="w-full h-1 mt-3 bg-gradient-to-r from-yellow-500 to-pink-700"></div>
          </div>
        </header>

        <div className="flex flex-col w-full px-4 pt-20 mx-auto md:px-0 max-w-prose">
          {children}

          <footer className="pt-8 pb-4">
            <p className="text-sm font-medium text-center text-gray-300 ">
              © {new Date().getFullYear()} Thomas Lombart
            </p>
          </footer>
        </div>
      </div>
    </MDXProvider>
  );
};

export default Layout;
