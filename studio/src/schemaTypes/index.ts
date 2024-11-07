// import page from "./page";
import person from './documents/person'
import page from './documents/page'
import post from './documents/post'
import callToAction from './objects/pagebuilder/callToAction'
import infoSection from './objects/pagebuilder/infoSection'
import settings from './singletons/settings'
import link from './objects/link'
import blockContent from './objects/blockContent'
import headerLink from './objects/headerLink'
import footerLink from './objects/footerLink'
import footerContent from './objects/footerContent'
import social from './objects/social'
import gallery from './objects/gallery'
import heroSection from './objects/pagebuilder/heroSection'

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  blockContent,
  link,
  social,
  gallery,
  headerLink,
  footerLink,
  footerContent,
  // Page Builder
  heroSection,
  infoSection,
  callToAction,
]
