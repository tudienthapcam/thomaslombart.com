import React from "react";

function Note({ children }) {
  return (
    <div className="px-3 py-2 text-blue-900 bg-blue-300 border-l-4 border-blue-600 sm:px-4 sm:py-3">
      {children}
    </div>
  );
}

export default Note;
