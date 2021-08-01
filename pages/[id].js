import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { useWindowScroll } from "react-use";
import { animated } from "react-spring";
import Image from "next/image";

import config from "../config";

import useBoop from "../hooks/useBoop";
import { getAllPosts, getPost } from "../lib/posts";

import MDXComponents from "../components/MDXComponents";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const ShareIcon = ({ to, label, children }) => {
  const [style, trigger] = useBoop({
    rotation: 15,
  });

  return (
    <animated.a
      onMouseEnter={trigger}
      style={style}
      href={to}
      target="_blank"
      rel="noopener"
    >
      <span className="sr-only">{label}</span>
      {children}
    </animated.a>
  );
};

export default function Blog({ post, slug }) {
  const { y: top } = useWindowScroll();
  const [showSidebar, setShowSidebar] = React.useState(false);

  React.useEffect(() => {
    if (!showSidebar && top > 650) {
      setShowSidebar(true);
    }

    if (showSidebar && top <= 650) {
      setShowSidebar(false);
    }
  }, [top, showSidebar]);

  const { coverCredit, description, title, humanDate, tags } = post.frontmatter;

  const tagsString = tags.join(", ");
  const articleUrl = `${config.url}/${slug}`;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        cover={`${config.url}/images/${slug}/cover.jpg`}
      />

      <div
        className={`hidden xl:flex fixed flex-col mt-36 -ml-36 text-gray-100 transition ease-in-out duration-500 space-y-6 ${
          showSidebar ? "opacity-100" : "opacity-0"
        }`}
      >
        <ShareIcon
          label="Share on Twitter"
          name="Twitter"
          to={`https://twitter.com/intent/tweet?url=${articleUrl}&text=${
            title + " by @thomas_lombart"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            className="text-gray-100 fill-current w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 5.80021C21.2483 6.1263 20.4534 6.34187 19.64 6.44021C20.4982 5.92753 21.1413 5.12099 21.45 4.17021C20.6436 4.65027 19.7608 4.98851 18.84 5.17021C18.2245 4.50278 17.405 4.05851 16.5098 3.90706C15.6147 3.75562 14.6945 3.90557 13.8938 4.3334C13.093 4.76123 12.4569 5.44274 12.0852 6.27105C11.7135 7.09935 11.6273 8.0276 11.84 8.91021C10.2094 8.82774 8.61444 8.40316 7.15865 7.66407C5.70287 6.92498 4.41885 5.8879 3.39 4.62021C3.02914 5.25038 2.83952 5.96403 2.84 6.69021C2.83872 7.36459 3.00422 8.02883 3.32176 8.62377C3.63929 9.21872 4.09902 9.72592 4.66 10.1002C4.00798 10.0825 3.36989 9.90751 2.8 9.59021V9.64021C2.80489 10.5851 3.13599 11.4993 3.73731 12.2282C4.33864 12.957 5.17326 13.4559 6.1 13.6402C5.74326 13.7488 5.37287 13.806 5 13.8102C4.74189 13.8072 4.48442 13.7838 4.23 13.7402C4.49391 14.553 5.00462 15.2634 5.69107 15.7724C6.37753 16.2814 7.20558 16.5638 8.06 16.5802C6.6172 17.7155 4.83588 18.3351 3 18.3402C2.66574 18.3413 2.33174 18.3213 2 18.2802C3.87443 19.4905 6.05881 20.1329 8.29 20.1302C9.82969 20.1462 11.3571 19.8552 12.7831 19.2743C14.2091 18.6934 15.505 17.8341 16.5952 16.7467C17.6854 15.6593 18.548 14.3656 19.1326 12.9411C19.7172 11.5166 20.012 9.98994 20 8.45021C20 8.28021 20 8.10021 20 7.92021C20.7847 7.33502 21.4615 6.61763 22 5.80021Z" />
          </svg>
        </ShareIcon>

        <ShareIcon
          label="Share on LinkedIn"
          name="LinkedIn"
          to={`https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`}
        >
          <svg
            viewBox="0 0 24 24"
            className="text-gray-100 fill-current w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.4701 2.00014H3.53006C3.33964 1.9975 3.15056 2.03239 2.97362 2.10282C2.79669 2.17326 2.63536 2.27786 2.49886 2.41065C2.36235 2.54344 2.25334 2.70182 2.17805 2.87675C2.10276 3.05167 2.06267 3.23972 2.06006 3.43014V20.5701C2.06267 20.7606 2.10276 20.9486 2.17805 21.1235C2.25334 21.2985 2.36235 21.4568 2.49886 21.5896C2.63536 21.7224 2.79669 21.827 2.97362 21.8975C3.15056 21.9679 3.33964 22.0028 3.53006 22.0001H20.4701C20.6605 22.0028 20.8496 21.9679 21.0265 21.8975C21.2034 21.827 21.3648 21.7224 21.5013 21.5896C21.6378 21.4568 21.7468 21.2985 21.8221 21.1235C21.8974 20.9486 21.9375 20.7606 21.9401 20.5701V3.43014C21.9375 3.23972 21.8974 3.05167 21.8221 2.87675C21.7468 2.70182 21.6378 2.54344 21.5013 2.41065C21.3648 2.27786 21.2034 2.17326 21.0265 2.10282C20.8496 2.03239 20.6605 1.9975 20.4701 2.00014ZM8.09006 18.7401H5.09006V9.74014H8.09006V18.7401ZM6.59006 8.48014C6.17632 8.48014 5.77953 8.31578 5.48697 8.02323C5.19442 7.73067 5.03006 7.33388 5.03006 6.92014C5.03006 6.5064 5.19442 6.10961 5.48697 5.81705C5.77953 5.5245 6.17632 5.36014 6.59006 5.36014C6.80975 5.33522 7.03224 5.35699 7.24293 5.42402C7.45363 5.49105 7.6478 5.60183 7.81272 5.7491C7.97763 5.89637 8.10958 6.07682 8.19993 6.27862C8.29028 6.48043 8.33698 6.69904 8.33698 6.92014C8.33698 7.14124 8.29028 7.35985 8.19993 7.56166C8.10958 7.76346 7.97763 7.94391 7.81272 8.09118C7.6478 8.23845 7.45363 8.34923 7.24293 8.41626C7.03224 8.48329 6.80975 8.50505 6.59006 8.48014ZM18.9101 18.7401H15.9101V13.9101C15.9101 12.7001 15.4801 11.9101 14.3901 11.9101C14.0527 11.9126 13.7242 12.0184 13.4489 12.2133C13.1735 12.4082 12.9645 12.6828 12.8501 13.0001C12.7718 13.2352 12.7379 13.4827 12.7501 13.7301V18.7301H9.75006C9.75006 18.7301 9.75006 10.5501 9.75006 9.73014H12.7501V11.0001C13.0226 10.5272 13.419 10.1377 13.8965 9.87334C14.374 9.60902 14.9146 9.47999 15.4601 9.50014C17.4601 9.50014 18.9101 10.7901 18.9101 13.5601V18.7401Z" />
          </svg>
        </ShareIcon>
      </div>

      <h1 className="mb-6 text-2xl font-extrabold text-gray-200 uppercase sm:text-4xl">
        {title}
      </h1>

      <div className="flex justify-between my-2 text-sm font-semibold text-gray-300 uppercase">
        <span>{tagsString}</span>
        <span>{humanDate}</span>
      </div>

      <Image
        priority
        src={require(`../public/images/${slug}/cover.jpg`)}
        alt=""
        className="mt-4 rounded-lg"
      />

      {coverCredit ? (
        <p className="mt-2 text-center text-gray-300">{coverCredit}</p>
      ) : null}

      <div className="mt-8">
        <MDXRemote {...post.mdx} components={MDXComponents} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({ params: { id: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);

  return { props: { post, slug: params.id } };
}
