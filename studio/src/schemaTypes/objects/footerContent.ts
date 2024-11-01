import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'footerContent',
  title: 'Footer Content',
  description: 'This will go underneath the footer logo',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
        name: 'content',
        title: 'Content',
        type: 'blockContent',
    }),
  ],
})
