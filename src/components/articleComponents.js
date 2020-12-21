import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { useCopyToClipboard } from "react-use";

import codeTheme from "./codeTheme";

import { getAumgentedTokens } from "./utils";

const CodeBlock = ({
  children: {
    props: { children: code, className },
  },
}) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [, copyToClipboard] = useCopyToClipboard();
  const matches = className && className.match(/language-(?<lang>.*)/);

  React.useEffect(() => {
    if (isCopied) {
      copyToClipboard(code);
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isCopied, code, copyToClipboard]);

  const copy = () => setIsCopied(true);

  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ""
      }
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const augmentedTokens = getAumgentedTokens(tokens);

        return (
          <div className="relative lg:-mx-10">
            <pre
              className={`rounded-lg py-6 my-2 overflow-auto border border-gray-800 shadow-lg`}
              style={style}
            >
              <button
                onClick={copy}
                className="absolute hidden px-2 font-semibold text-gray-200 transition bg-gray-800 rounded shadow md:block font-body hover:bg-gray-700 right-2 top-2"
              >
                {isCopied ? "Copied!" : "Copy"}
              </button>
              {/* TODO: figure out why "float: left" works for highlighting the comments when scrolling*/}
              <div className="float-left min-w-full">
                {augmentedTokens.map(({ isHighlight, line }, i) => {
                  const lineProps = getLineProps({
                    line,
                    key: i,
                    className: "px-6",
                  });

                  const getTokens = () =>
                    line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ));

                  return isHighlight ? (
                    <div
                      key={i}
                      style={{ backgroundColor: "#7497a633" }}
                      className="block py-1"
                    >
                      <div {...lineProps}>{getTokens()}</div>
                    </div>
                  ) : (
                    <div {...lineProps}>{getTokens()}</div>
                  );
                })}
              </div>
            </pre>
          </div>
        );
      }}
    </Highlight>
  );
};

const textClassNames =
  "my-4 sm:my-5 text-gray-300 text-lg leading-relaxed font-body";
const titleClassNames =
  "mb-2 sm:mb-3 text-gray-200 font-bold leading-tight font-display";

export default {
  p: (props) => <p className={textClassNames} {...props} />,
  ul: (props) => (
    <ul className={`${textClassNames} list-disc ml-6`} {...props} />
  ),
  ol: (props) => (
    <ol className={`${textClassNames} list-decimal ml-6`} {...props} />
  ),
  li: (props) => <li className="pl-1 my-2" {...props} />,
  h1: (props) => (
    // eslint-disable-next-line
    <h1
      className={`${titleClassNames} text-3xl sm:text-4xl mt-10 sm:mt-12`}
      {...props}
    />
  ),
  h2: (props) => (
    // eslint-disable-next-line
    <h2
      className={`${titleClassNames} text-2xl sm:text-3xl mt-8 sm:mt-10`}
      {...props}
    />
  ),
  h3: (props) => (
    // eslint-disable-next-line
    <h3
      className={`${titleClassNames} text-xl sm:text-2xl mt-6 sm:mt-8`}
      {...props}
    />
  ),
  h4: (props) => (
    // eslint-disable-next-line
    <h4 className={`${titleClassNames} text-xl mt-5 sm:mt-7`} {...props} />
  ),
  a: (props) => (
    // eslint-disable-next-line
    <a
      className="font-bold text-gray-300 underline hover:text-gray-200"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="pl-4 italic border-l-4 border-gray-400 break-word"
      {...props}
    />
  ),
  inlineCode: (props) => (
    <code
      {...props}
      className="text-base text-gray-300 bg-gray-800 border border-gray-800 rounded-lg"
      style={{ padding: "1.75px 3.5px" }}
    />
  ),
  code: CodeBlock,
  pre: CodeBlock,
};
