import React from "react";

function YouTubeEmbed({ id, title = "YouTube video" }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ paddingBottom: "56.25%" }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        title={title}
        loading="lazy"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default YouTubeEmbed;
