import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export default defineType({
  name: 'social',
  title: 'Social Links',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
        name: 'socialIcon',
        title: 'Social Icon',
        description: 'Best work with svg icons.',
        type: 'image',
        fields: [
            {
                name: 'alt',
                type: 'string',
                title: 'Alt'
            }
        ]
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.custom((value, context: any) => {
          if (context.parent?.linkType === 'href' && !value) {
            return 'URL is required when Link Type is URL'
          }
          return true
        }),
    }),
  ],
  preview: {
    select: {
      title: 'href',
      media: 'socialIcon'
    },
    prepare({title, media}) {
      return {
        title: title,
        media: media
      }
    },
  },
})
