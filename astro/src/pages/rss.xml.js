import { getAllPosts } from "../lib/api";
import rss from "@astrojs/rss";
const allBlogPosts = await getAllPosts();
import { sanityPortableText } from "../lib/sanityPortableText";

export const get = () =>
  rss({
    title: "Nirjan's Reviews",
    description: "The Latest Movie, Music, and Book Reviews from Nirjan",
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,
    items: allBlogPosts.map((item) => ({
      title: item.title,
      description: item.excerpt,
      link: `/blog/${item.slug.current}`,
      pubDate: item.publishedAt,
      content: sanityPortableText(item.body),
    })),
  });
