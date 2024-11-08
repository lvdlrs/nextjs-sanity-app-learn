
export const POSTFIELDS = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`;

export const LINKFIELDS = `
_type == "link" =>{
  "page": page->slug.current,
  "post": post->slug.current,
  "href": href
}
`;

export const FILEURL = `
mediaurl{
  "fileurl":asset->url
}
`

export const PAGEBUILDER_BLOCK_TYPE = `
_type == "callToAction" => {
    ...,
    link{
      ...,
      ${LINKFIELDS}
    }
},
_type == "heroSection" =>{
    ...,
    ${FILEURL},
    btnLink[]{
        ...,
        ${LINKFIELDS}
    }
}
`