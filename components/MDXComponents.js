import React from "react";

import CodeBlock from "./CodeBlock";
import Image from "./Image";
import Note from "./Note";
import YouTubeEmbed from "./YouTubeEmbed";

const textClassNames = "my-4 sm:my-5 text-gray-300 text-lg leading-relaxed";
const titleClassNames = "text-gray-200 font-bold leading-tight";

const components = {
  // eslint-disable-next-line
  p: (props) => <p className={textClassNames} {...props} />,
  // eslint-disable-next-line
  ul: (props) => (
    <ul className={`${textClassNames} list-disc ml-6`} {...props} />
  ),
  // eslint-disable-next-line
  ol: (props) => (
    <ol className={`${textClassNames} list-decimal ml-6`} {...props} />
  ),
  // eslint-disable-next-line
  li: (props) => <li className="pl-1 my-2" {...props} />,
  // eslint-disable-next-line
  h1: (props) => (
    <h1
      className={`${titleClassNames} text-3xl sm:text-4xl mt-10 sm:mt-12`}
      {...props}
    />
  ),
  // eslint-disable-next-line
  h2: (props) => (
    <h2
      className={`${titleClassNames} text-2xl sm:text-3xl mt-8 sm:mt-10`}
      {...props}
    />
  ),
  // eslint-disable-next-line
  h3: (props) => (
    <h3
      className={`${titleClassNames} text-xl sm:text-2xl mt-6 sm:mt-8`}
      {...props}
    />
  ),
  // eslint-disable-next-line
  h4: (props) => (
    <h4 className={`${titleClassNames} text-xl mt-5 sm:mt-7`} {...props} />
  ),
  // eslint-disable-next-line
  a: (props) => (
    <a
      className="font-bold text-gray-300 underline hover:text-gray-200"
      {...props}
    />
  ),
  // eslint-disable-next-line
  blockquote: (props) => (
    <blockquote
      className="pl-4 italic border-l-4 border-gray-400 break-word"
      {...props}
    />
  ),
  // eslint-disable-next-line
  inlineCode: (props) => (
    <code
      {...props}
      className="text-base text-gray-300 bg-gray-800 border border-gray-800 rounded-lg"
      style={{ padding: "1.75px 3.5px" }}
    />
  ),
  // eslint-disable-next-line
  Image,
  code: CodeBlock,
  pre: CodeBlock,
  Note,
  YouTubeEmbed,
};

export default components;
