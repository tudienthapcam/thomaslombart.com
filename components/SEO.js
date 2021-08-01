import React from "react";
import Head from "next/head";

const SEO = ({ description, title, cover }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={cover} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cover} />
    </Head>
  );
};

export default SEO;
