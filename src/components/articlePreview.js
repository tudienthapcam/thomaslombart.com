import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";

const ArticlePreview = ({ node: { fields, frontmatter, excerpt } }) => {
  const { cover, description, tags, title, date } = frontmatter;
  const { slug } = fields;
  const tagsString = tags.join(", ");

  return (
    <article className="flex-1 overflow-hidden transition-all duration-200 transform bg-gray-800 border-2 border-gray-800 rounded-lg hover:scale-103 hover:border-gray-300 focus-within:border-gray-300 focus-within:scale-103">
      <Link to={slug} className="outline-none">
        <Image fluid={cover.childImageSharp.fluid} className=" max-h-48" />
        <div className="flex flex-col p-4">
          <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase">
            <span>{tagsString}</span>
            <span>{date}</span>
          </div>
          <h4 className="mt-3 text-xl font-bold text-gray-100">{title}</h4>
          <p className="mt-2 text-gray-300">
            {description ? description : excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ArticlePreview;
