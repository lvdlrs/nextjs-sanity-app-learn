import { defineQuery } from "next-sanity";

export function getLinkFromType(type: string) {
    switch (type) {
      case "page":
        return defineQuery(`
            *[_type == "page" && slug.current == $slug][0]{
              _id,
              name,
              slug,
              heading,
              subheading
            }
          `);
      case "post":
        return "/posts"
      default:
        return "#"
    }
  }
