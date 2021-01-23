import React from "react";

const Comments = ({ description }) => {
  const utterancesRef = React.useRef();
  const [hasLoadedUtterances, setHasLoadedUtterances] = React.useState(false);

  React.useEffect(() => {
    const utterancesScript = document.createElement("script");
    utterancesScript.async = true;
    utterancesScript.src = "https://utteranc.es/client.js";
    utterancesScript.setAttribute("repo", "thomlom/comments");
    utterancesScript.setAttribute("issue-term", "pathname");
    utterancesScript.setAttribute("id", "utterances");
    utterancesScript.setAttribute("theme", "github-dark");
    utterancesScript.setAttribute("crossorigin", "anonymous");

    if (utterancesRef) {
      utterancesRef.current.appendChild(utterancesScript);
      setHasLoadedUtterances(true);
    }
  }, []);

  return (
    <>
      {hasLoadedUtterances && (
        <p className="text-lg font-semibold leading-relaxed text-gray-200">
          {description || "Questions? Thoughts? Leave your comments below. 👇"}
        </p>
      )}
      <div ref={utterancesRef} id="comments"></div>
    </>
  );
};

export default Comments;
