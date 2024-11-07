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
      type: 'text',
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
      name: 'thumbImage',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'This will be use as fallback if background video are not working.',
      group: 'media'
    }),
    defineField({
      name: 'mediaurl',
      title: 'Background video',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      group: 'media'
    }),
    defineField({
      name: 'overlayColor',
      title: 'Overlay Color',
      type: 'string',
      group: 'styles',
      initialValue: 'darkoverlay',
      options: {
        list: [
          {title: 'Dark', value: 'darkoverlay'},
          {title: 'Light', value: 'lightoverlay'},
          {title: 'No overlay', value: 'nooverlay'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      group: 'styles',
      initialValue: 'lighttext',
      options: {
        list: [
          {title: 'Dark', value: 'darktext'},
          {title: 'Light', value: 'lighttext'}
        ],
        layout: 'radio',
      },
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
