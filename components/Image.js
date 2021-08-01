import NextImage from "next/image";

function Image({ src, ...rest }) {
  let imageProps = {
    ...rest,
    src: require(`../public/images${src}`),
    className: "rounded-lg",
  };

  if (!src.includes("gif")) {
    imageProps.placeholder = "blur";
  }

  return (
    <div className="flex justify-center">
      <NextImage {...imageProps} />
    </div>
  );
}

export default Image;
