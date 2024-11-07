import {defineArrayMember, defineField, defineType} from 'sanity'
import {MasterDetailIcon} from '@sanity/icons'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  icon: MasterDetailIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'media', title: 'Media'},
    {name: 'styles', title: 'Styles'}
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content'
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      group: 'content'
    }),
    defineField({
      name: 'btnLink',
      title: 'Buttons',
      type: 'array',
      of: [{type: 'link'}],
      validation: Rule => Rule.max(2),
      group: 'content'
    }),
    defineField({
      
    })
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled Hero Section',
        subtitle: subtitle,
      }
    },
  },
})
