import React from "react";
import { MDXProvider } from "@mdx-js/react";

import articleComponents from "./articleComponents";
import Note from "./note";
import Comments from "./comments";

const shortcodes = { Note, Comments };

const Layout = ({ children }) => {
  return (
    <MDXProvider components={{ ...shortcodes, ...articleComponents }}>
      <div className="bg-gray-900">
        {children}
        <footer className="py-6">
          <p className="text-sm font-medium text-center text-gray-300 ">
            © {new Date().getFullYear()} Thomas Lombart
          </p>
        </footer>
      </div>
    </MDXProvider>
  );
};

export default Layout;
