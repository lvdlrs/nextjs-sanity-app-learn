import { defineQuery } from "next-sanity";
import { LINKFIELDS, PAGEBUILDER_BLOCK_TYPE, POSTFIELDS } from "./datastructure";

export const settingsQuery = defineQuery(`*[_type == "settings"][0]{
  "seo": {
    siteFavicon,
    siteTitle,
    description,
    ogImage{
      asset,
      hotspot,
      crop,
      metadataBase
    }
  },
  "header": {
    siteLogo{
      alt,
      asset
    },
    siteLogoTransparent{
      alt,
      asset
    },
    headerMenu[]{
      ...,
      "link": select(
        linkType == "page" => page->slug.current,
        linkType == "post" => post->slug.current,
        linkType == "href" => href
      )
    }
  },
  "prefooter":{
    prefooterGallery{
      galleryItem[]{
        _key,
        alt,
        asset
      }
    }
  },
  "footer": {
    footerLogo{
      alt,
      asset
    },
    footerMenu[]{
      _key,
      menuheading,
      footerMenuItems[]{
        ...,
        ${LINKFIELDS}
      }
    },
    footerContent{
      content
    },
    socialIcon[]{
      _key,
      href,
      socialIcon{
        alt,
        asset
      },
    },
    copyrightSite
  },
  "frontpage": pageBuilder[]{
      ${PAGEBUILDER_BLOCK_TYPE}
    }
}`);





export const pageQuery = defineQuery(`*[_type == 'page']`);

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ${PAGEBUILDER_BLOCK_TYPE}
    },
  }
`);

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${POSTFIELDS}
  }
`);

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${POSTFIELDS}
  }
`);

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${LINKFIELDS}
    }
  },
    ${POSTFIELDS}
  }
`);

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`);

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`);
