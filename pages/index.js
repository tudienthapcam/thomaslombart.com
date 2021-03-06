import { animated } from "react-spring";
import Link from "next/link";

import config from "../config";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import { getAllPosts } from "../lib/posts";

import generateRSSFeed from "../scripts/rss";

import useBoop from "../hooks/useBoop";

const ExternalIcon = ({ to, label, children }) => {
  const [style, trigger] = useBoop({
    scale: 1.15,
  });

  return (
    <animated.a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={trigger}
      style={style}
    >
      <span className="sr-only">{label}</span>
      {children}
    </animated.a>
  );
};

const InlineLink = ({ to, children }) => (
  <a
    href={to}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-gray-200 underline hover:text-gray-100"
  >
    {children}
  </a>
);

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title={config.title} description={config.description} />

      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="flex flex-col text-2xl font-black tracking-wide text-gray-100 uppercase sm:text-3xl">
            <span>Hi. I&apos;m Thomas,</span>
            <span>a front-end developer.</span>
          </h2>

          <h3 className="text-xl font-medium text-gray-400 leading- sm:text-2xl sm:max-w-2xl">
            I write articles on web development or productivity for developers.
            I also build JavaScript apps and contribute to open-source.
          </h3>

          <div className="flex space-x-6">
            <ExternalIcon to={config.social.github} label="GitHub">
              <svg
                viewBox="0 0 24 24"
                className="text-gray-400 transition cursor-pointer fill-current w-9 h-9 hover:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.0703 20.5029C10.0703 20.3563 10.038 20.2114 9.97578 20.0786C9.91353 19.9458 9.82284 19.8284 9.71014 19.7345C9.59743 19.6407 9.46546 19.5728 9.32359 19.5356C9.18171 19.4985 9.03341 19.493 8.88917 19.5195C7.58009 19.7598 5.92726 19.7959 5.4878 18.5615C5.10461 17.6055 4.46987 16.7711 3.65089 16.1465C3.59246 16.1148 3.53677 16.0782 3.48439 16.0372C3.41272 15.8481 3.2854 15.6852 3.11925 15.5699C2.95311 15.4547 2.75592 15.3925 2.55372 15.3916H2.54884C2.28444 15.3916 2.03077 15.4962 1.84335 15.6827C1.65594 15.8692 1.55004 16.1224 1.54884 16.3868C1.54493 17.2022 2.35984 17.7247 2.69044 17.9014C3.08029 18.2931 3.39359 18.7541 3.61427 19.2608C3.97853 20.2842 5.03712 21.837 8.08009 21.6368C8.08109 21.6719 8.08204 21.7051 8.08253 21.7354L8.08692 22.003C8.08692 22.2682 8.19228 22.5226 8.37982 22.7101C8.56735 22.8976 8.82171 23.003 9.08692 23.003C9.35214 23.003 9.60649 22.8976 9.79403 22.7101C9.98157 22.5226 10.0869 22.2682 10.0869 22.003L10.082 21.6846C10.0772 21.4951 10.0703 21.2207 10.0703 20.5029ZM20.7373 5.37694C20.7691 5.25194 20.8003 5.11327 20.8277 4.95702C20.9894 3.84261 20.8484 2.70521 20.4195 1.66402C20.3653 1.52828 20.2822 1.40603 20.1758 1.30582C20.0694 1.20562 19.9425 1.12989 19.8037 1.08395C19.4477 0.963828 18.1333 0.727498 15.6197 2.33395C13.5302 1.84224 11.3551 1.84224 9.26565 2.33395C6.76222 0.751028 5.4546 0.965828 5.10206 1.07911C4.95993 1.12319 4.82946 1.19851 4.72021 1.29957C4.61097 1.40062 4.52572 1.52483 4.47071 1.66311C4.03301 2.72429 3.89355 3.88488 4.06739 5.01955C4.09181 5.14748 4.11817 5.26565 4.14552 5.37404C3.31709 6.47748 2.87583 7.8234 2.89015 9.20314C2.88745 9.51097 2.90163 9.81873 2.93263 10.125C3.26663 14.7275 6.26663 16.1094 8.35694 16.584C8.31349 16.709 8.27394 16.8428 8.23878 16.9844C8.17612 17.2417 8.21805 17.5133 8.35538 17.7398C8.49271 17.9662 8.71422 18.1289 8.97135 18.1923C9.22848 18.2556 9.50024 18.2144 9.72703 18.0777C9.95382 17.941 10.1171 17.7199 10.1812 17.4629C10.2448 17.1297 10.4079 16.8236 10.6489 16.585C10.7947 16.4574 10.9002 16.2902 10.9527 16.1037C11.0052 15.9172 11.0023 15.7195 10.9445 15.5346C10.8866 15.3497 10.7763 15.1856 10.6269 15.0623C10.4775 14.9389 10.2955 14.8617 10.103 14.8399C6.64894 14.4453 5.14942 13.0381 4.92384 9.94143C4.89885 9.69616 4.88761 9.44968 4.89015 9.20315C4.87411 8.2198 5.19898 7.26123 5.80958 6.49026C5.87093 6.40988 5.93628 6.33263 6.00538 6.25881C6.12781 6.12181 6.21013 5.95373 6.2433 5.77301C6.27646 5.5923 6.25919 5.40594 6.19338 5.2344C6.12592 5.05393 6.07397 4.86803 6.03811 4.67873C5.95664 4.14044 5.98337 3.59132 6.11671 3.06349C6.98585 3.30896 7.80383 3.70853 8.53171 4.24317C8.65208 4.32334 8.78828 4.3767 8.93108 4.39961C9.07388 4.42253 9.21994 4.41447 9.35935 4.37599C11.3805 3.82749 13.5113 3.82783 15.5322 4.37699C15.6724 4.41543 15.8192 4.42303 15.9626 4.39926C16.106 4.37549 16.2425 4.32091 16.3628 4.2393C17.0872 3.70244 17.9018 3.2993 18.768 3.04887C18.9008 3.56402 18.9305 4.10032 18.8554 4.62699C18.8192 4.83453 18.7626 5.03799 18.6865 5.23442C18.6207 5.40596 18.6034 5.59232 18.6366 5.77303C18.6697 5.95375 18.7521 6.12183 18.8745 6.25883C18.9516 6.34574 19.0288 6.43949 19.0981 6.52738C19.7044 7.2853 20.0238 8.23285 20 9.20314C20.0018 9.46275 19.9893 9.72226 19.9624 9.98048C19.7422 13.0361 18.2368 14.4443 14.7666 14.8398C14.5741 14.8618 14.392 14.9392 14.2427 15.0626C14.0933 15.1861 13.983 15.3503 13.9253 15.5353C13.8675 15.7202 13.8647 15.918 13.9172 16.1046C13.9698 16.2911 14.0754 16.4583 14.2212 16.5859C14.4698 16.831 14.6333 17.1493 14.6875 17.4941C14.7551 17.7618 14.7861 18.0375 14.7798 18.3135V20.6475C14.77 21.2949 14.77 21.7803 14.77 22.0029C14.77 22.2682 14.8754 22.5225 15.0629 22.71C15.2504 22.8976 15.5048 23.0029 15.77 23.0029C16.0352 23.0029 16.2896 22.8976 16.4771 22.71C16.6647 22.5225 16.77 22.2682 16.77 22.0029C16.77 21.7861 16.77 21.3106 16.7798 20.6631V18.3135C16.7878 17.8713 16.7358 17.4301 16.625 17.002C16.5933 16.8614 16.5545 16.7226 16.5088 16.586C18.03 16.3332 19.4123 15.5489 20.4094 14.3726C21.4065 13.1962 21.9539 11.7042 21.9541 10.1621C21.987 9.84355 22.0024 9.5234 22 9.20314C22.0222 7.82191 21.5773 6.47366 20.7373 5.37696L20.7373 5.37694Z" />
              </svg>
            </ExternalIcon>

            <ExternalIcon to={config.social.twitter} label="Twitter">
              <svg
                viewBox="0 0 24 24"
                className="text-gray-400 transition cursor-pointer fill-current w-9 h-9 hover:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.9912 3.95021C22.9913 3.77357 22.9446 3.60007 22.8558 3.44735C22.7671 3.29464 22.6394 3.16817 22.4859 3.08084C22.3324 2.9935 22.1584 2.94842 21.9818 2.95017C21.8052 2.95193 21.6322 3.00046 21.4804 3.09083C20.8951 3.43921 20.265 3.70601 19.6074 3.88383C18.6684 3.07806 17.4708 2.63713 16.2334 2.64164C14.876 2.6432 13.5723 3.17223 12.5976 4.11702C11.623 5.06181 11.0536 6.3484 11.0098 7.70512C8.33378 7.27838 5.90843 5.88164 4.19625 3.78126C4.09308 3.65609 3.96133 3.55757 3.81211 3.494C3.66288 3.43043 3.50056 3.40368 3.33883 3.41601C3.17719 3.42932 3.02122 3.4818 2.88442 3.56892C2.74762 3.65603 2.63409 3.77516 2.55367 3.91601C2.1412 4.63582 1.9043 5.44276 1.86222 6.27131C1.82014 7.09986 1.97406 7.92666 2.31148 8.68456L2.30953 8.68651C2.15788 8.77991 2.03272 8.91066 1.94603 9.06625C1.85935 9.22185 1.81403 9.39708 1.81441 9.57519C1.81257 9.72211 1.82139 9.86898 1.84078 10.0146C1.94292 11.2729 2.50056 12.4507 3.40914 13.3271C3.3475 13.4446 3.30988 13.5731 3.29848 13.7052C3.28708 13.8373 3.30212 13.9704 3.34273 14.0967C3.73884 15.3308 4.58123 16.3727 5.70504 17.0185C4.56328 17.46 3.33046 17.614 2.11519 17.4668C1.89026 17.4386 1.66242 17.4876 1.46904 17.6059C1.27566 17.7242 1.12822 17.9047 1.0509 18.1178C0.973592 18.3309 0.970999 18.5639 1.04355 18.7787C1.1161 18.9935 1.25949 19.1772 1.45019 19.2998C3.54028 20.646 5.97387 21.3617 8.45996 21.3613C11.2792 21.393 14.0299 20.4921 16.2842 18.7988C18.5385 17.1054 20.1699 14.7145 20.9248 11.998C21.2778 10.8146 21.4581 9.58648 21.46 8.35157C21.46 8.28614 21.46 8.21876 21.459 8.15138C21.9811 7.58831 22.3855 6.92668 22.6486 6.20527C22.9117 5.48387 23.0282 4.7172 22.9912 3.95021ZM19.6845 7.16212C19.5194 7.35746 19.4358 7.60891 19.4511 7.86427C19.4609 8.02927 19.4599 8.19527 19.4599 8.35157C19.4579 9.39511 19.3049 10.4329 19.0058 11.4326C18.3893 13.744 17.015 15.7817 15.1029 17.2192C13.1908 18.6568 10.8516 19.4111 8.45996 19.3613C7.60084 19.3616 6.74468 19.2606 5.90918 19.0606C6.97459 18.7172 7.97077 18.1879 8.85156 17.4971C9.01378 17.3693 9.13251 17.1945 9.19145 16.9967C9.25038 16.7988 9.24664 16.5875 9.18073 16.3918C9.11483 16.1961 8.98999 16.0257 8.82334 15.9038C8.65669 15.7819 8.4564 15.7145 8.24996 15.7109C7.41879 15.698 6.62509 15.363 6.03609 14.7764C6.18551 14.7481 6.33395 14.7129 6.48141 14.6709C6.69742 14.6094 6.88645 14.477 7.01807 14.295C7.14969 14.1131 7.21623 13.8921 7.20698 13.6677C7.19773 13.4433 7.11324 13.2285 6.96709 13.058C6.82095 12.8874 6.62167 12.7711 6.40133 12.7275C5.91887 12.6323 5.46487 12.427 5.07464 12.1277C4.68441 11.8284 4.36845 11.4432 4.15133 11.002C4.33206 11.0266 4.51394 11.0419 4.69625 11.0479C4.91283 11.0511 5.12484 10.9854 5.30162 10.8603C5.47841 10.7351 5.6108 10.5569 5.67965 10.3516C5.74563 10.1443 5.74223 9.92123 5.66998 9.7161C5.59772 9.51096 5.46055 9.33499 5.27926 9.21485C4.83941 8.92182 4.4791 8.52427 4.23061 8.0578C3.98213 7.59134 3.85322 7.07052 3.85543 6.54201C3.85543 6.47561 3.85738 6.4092 3.86129 6.34377C6.10255 8.43402 9.00961 9.66621 12.0703 9.82326C12.2248 9.82934 12.3786 9.80024 12.5202 9.73816C12.6618 9.67607 12.7875 9.58262 12.8877 9.46486C12.9869 9.34596 13.0571 9.20566 13.0928 9.05501C13.1286 8.90437 13.1289 8.74748 13.0937 8.5967C13.0365 8.35806 13.0073 8.11357 13.0068 7.86818C13.0077 7.01271 13.3479 6.19254 13.9528 5.58764C14.5577 4.98274 15.3779 4.64251 16.2334 4.64161C16.6735 4.64043 17.1091 4.7305 17.5127 4.90615C17.9162 5.0818 18.279 5.3392 18.5781 5.66212C18.6934 5.7862 18.8386 5.87871 18.9998 5.93085C19.161 5.98299 19.3328 5.99303 19.499 5.96001C19.9097 5.88006 20.3146 5.7724 20.7109 5.63775C20.4406 6.19072 20.0952 6.70369 19.6845 7.16212Z" />
              </svg>
            </ExternalIcon>
          </div>
        </section>

        <section className="max-w-3xl">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-wide text-yellow-500 uppercase">
              Latest articles
            </h3>

            <Link href="/articles">
              <a className="px-3 py-2 font-medium text-gray-100 transition rounded-lg hover:bg-gray-800">
                View all
              </a>
            </Link>
          </div>

          <ul className="mt-5 space-y-10">
            {posts.slice(0, 4).map((post) => {
              return (
                <li key={post.slug} className="text-gray-100">
                  <Link href={`/${post.slug}`}>
                    <a className="flex flex-col space-y-3">
                      <p className="text-xl font-semibold hover:underline">
                        {post.data.title}
                      </p>

                      <p className="leading-relaxed">{post.data.description}</p>

                      <span className="font-semibold">Read more &rarr;</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-bold tracking-wide text-yellow-500 uppercase">
            Who am I?
          </h3>

          <p className="flex flex-col mt-4 space-y-5 text-lg text-gray-200">
            <span>
              My name is Thomas Lombart. I live in France.I learned front-end
              development by myself though I have a degree in computer science.
            </span>

            <span>
              I work remotely for{" "}
              <InlineLink to="https://www.backmarket.com/">
                Back Market
              </InlineLink>
              , a marketplace for refurbished products. My experience as a
              front-end developer taught me how to build accessible, performant,
              beautiful, and well-tested web applications with JavaScript
              technologies such as React or Vue.
            </span>

            <span>
              Outside of my full-time job, I like to write in-depth articles on
              web development and contribute to open-source whenever I have some
              time on my hands.
            </span>

            <span>
              Here&apos;s a list of words to get a better glimpse of who I am:
              curious, simple, kind, remote work, travel, minimalist, nature,
              hiking, piano, movies scores, privacy.
            </span>

            <a
              href="https://www.craft.do/s/N4hMBfxx04HFqF"
              target="_blank noopener"
              className="block w-full px-4 py-3 text-center bg-gray-800 rounded-lg shadow-xl"
            >
              See my online resume
            </a>
          </p>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  generateRSSFeed(posts);

  return { props: { posts } };
}
