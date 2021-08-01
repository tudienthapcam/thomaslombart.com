import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArticlePreview = ({ post: { slug, data } }) => {
  const { description, tags, title, humanDate } = data;
  const tagsString = tags.join(", ");

  return (
    <article className="flex-1 overflow-hidden transition-all duration-200 transform bg-gray-800 border-2 border-gray-800 rounded-lg hover:scale-103 hover:border-gray-300 focus-within:border-gray-300 focus-within:scale-103">
      <Link href={`/${slug}`}>
        <a className="outline-none">
          <Image src={require(`../public/images/${slug}/cover.jpg`)} alt="" />

          <div className="flex flex-col p-4">
            <div className="flex justify-between text-xs font-semibold text-gray-300 uppercase">
              <span>{tagsString}</span>
              <span>{humanDate}</span>
            </div>

            <h4 className="mt-3 text-xl font-bold text-gray-100">{title}</h4>

            <p className="mt-2 text-gray-300">{description}</p>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default ArticlePreview;
