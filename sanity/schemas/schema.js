// We import object and document schemas
import blockContent from "./blockContent";
import category from "./category";
import contentElement from "./contentElement";
import creator from "./creator";
import post from "./post";
import author from "./author";

export const schemaTypes = [
  post,
  author,
  category,
  contentElement,
  creator,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
];
