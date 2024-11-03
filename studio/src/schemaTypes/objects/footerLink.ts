import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
  name: 'footerLink',
  title: 'Menu Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
        type: 'string',
        name: 'menuheading',
        title: 'Menu Heading'
    }),
    defineField({
      type: 'array',
      name: "footerMenuItems",
      title: "Menu Items",
      of: [{type: 'link'},]
    })
  ],
})