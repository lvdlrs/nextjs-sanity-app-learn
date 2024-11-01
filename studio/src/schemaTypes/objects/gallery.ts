import {defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
        name: 'galleryItem',
        title: 'Gallery Items',
        type: 'array',
        of: [
            {
                type: 'image',
                title: 'Image',
                fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alt'
                    }
                  ]
            }
        ]
      }),
  ],
})
