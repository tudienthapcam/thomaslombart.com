import React from "react";
import { Link } from "gatsby";

const TableOfContents = ({ items }) => (
  <aside>
    <span className="font-medium tracking-wide text-blue-400 uppercase">
      Table of contents
    </span>

    <ul className="mt-1 space-y-1">
      {items.map(({ url, title }) => (
        <li key={url}>
          <Link className="text-gray-100" to={url}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </aside>
);

export default TableOfContents;
