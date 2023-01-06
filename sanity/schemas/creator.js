export default {
  name: "creator",
  title: "Creator",
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
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { value: "author", title: "Author" },
          { value: "filmmaker", title: "Filmmaker" },
          { value: "musician", title: "Musician" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
