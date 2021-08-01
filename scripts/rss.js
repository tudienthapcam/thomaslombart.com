import fs from "fs";
import { Feed } from "feed";

import config from "../config";

const generateRSSFeed = (articles) => {
  const date = new Date();

  const author = {
    name: config.title,
    link: config.social.twitter,
  };

  const feed = new Feed({
    title: config.title,
    description: config.description,
    id: config.url,
    link: config.url,
    language: "en",
    image: `${config.url}/images/assets/icon.png`,
    favicon: `${config.url}/favicons/favicon.ico`,
    copyright: `© ${date.getFullYear()} Thomas Lombart`,
    updated: date,
    feedLinks: {
      rss2: `${config.url}/rss/feed.xml`,
    },
    author,
  });

  articles.forEach((article) => {
    const {
      slug,
      data: { date, description, title },
    } = article;

    const url = `${config.url}/${slug}`;

    feed.addItem({
      title,
      id: url,
      link: url,
      description,
      content: description,
      date: new Date(date),
      author: [author],
    });
  });

  fs.writeFileSync("public/rss.xml", feed.rss2());
};

export default generateRSSFeed;
