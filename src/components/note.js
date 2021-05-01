import React from "react";

const Note = ({ children, warning = false }) => {
  const color = warning ? "yellow" : "blue";

  return (
    <div
      className={`px-3 py-2 text-${color}-900 bg-${color}-300 border-l-4 border-${color}-600 sm:px-4 sm:py-3`}
    >
      {children}
    </div>
  );
};

export default Note;
