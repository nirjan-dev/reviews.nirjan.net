import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllMusicPosts() {
  const query = `*[_type == 'post' && type == 'music']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllMoviesPosts() {
  const query = `*[_type == 'post' && type == 'movies']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllBooksPosts() {
  const query = `*[_type == 'post' && type == 'books']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getRecentPosts() {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc) [0...3]`;
  const data = await useSanityClient().fetch(query);
  return data;
}

export async function getAllCategoriesWithPosts() {
  const query = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
}
