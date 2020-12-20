import React from "react";

const Note = ({ children }) => {
  return (
    <div className="px-3 py-1 my-4 text-yellow-100 bg-yellow-800 border-l-4 border-yellow-500">
      {children}
    </div>
  );
};

export default Note;
