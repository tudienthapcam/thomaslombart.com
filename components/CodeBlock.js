import React from "react";
import { useCopyToClipboard } from "react-use";
import Highlight, { defaultProps } from "prism-react-renderer";

import codeTheme from "../utils/codeTheme";
import { getAugmentedTokens } from "../utils/comments";

function CodeBlock({
  children: {
    props: { children: code, className },
  },
}) {
  const [isCopied, setIsCopied] = React.useState(false);
  const [, copyToClipboard] = useCopyToClipboard();

  const matches = className && className.match(/language-(?<lang>.*)/);
  const language =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : "";

  React.useEffect(() => {
    if (isCopied) {
      copyToClipboard(code);

      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isCopied, code, copyToClipboard, language]);

  const copy = () => setIsCopied(true);

  return (
    <Highlight
      {...defaultProps}
      code={code.trim()}
      language={language}
      theme={codeTheme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => {
        const augmentedTokens = getAugmentedTokens(tokens);

        return (
          <div className="relative">
            <pre
              className={`rounded-lg py-3 md:py-6 mt-2 mb-8 overflow-auto border border-gray-800 shadow-lg`}
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
                      <span key={key} {...getTokenProps({ token, key })} />
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
}

export default CodeBlock;
