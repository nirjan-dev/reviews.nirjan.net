export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
        {
          name: "credit",
          title: "Credit",
          type: "string",
        },
        {
          name: "creditLink",
          title: "Credit Link",
          type: "string",
        },
      ],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { value: "movies", title: "Movies" },
          { value: "books", title: "Books" },
          { value: "music", title: "Music" },
        ],
      },
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(0).max(5),
    },
    {
      name: "creator",
      title: "Creator",
      type: "reference",
      to: { type: "creator" },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (Rule) =>
        Rule.max(200).warning(
          "The description shouldn't be longer than 200 characters"
        ),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  initialValue: {
    author: {
      _type: "reference",
      _ref: "b5b04212-4b3d-4386-87db-6f8e20519332",
    },
  },

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
