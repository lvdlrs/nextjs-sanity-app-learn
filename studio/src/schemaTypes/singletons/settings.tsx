import {CogIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

import * as initial from '../../lib/initialValues'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'global', title: 'Global'},
    {name: 'header', title: 'Header'},
    {name: 'footer', title: 'Footer'}
  ],
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'Your website site title',
      group: 'global',
      initialValue: initial.siteTitle
    }),
    defineField({
      name: 'description',
      description: 'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Description',
      type: 'array',
      group: 'global',
      initialValue: initial.siteDescription,
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: 'alt',
        },
      },
      fields: [
        defineField({
          name: 'alt',
          description: 'Important for accessibility and SEO.',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.ogImage as any)?.asset?._ref && !alt) {
                return 'Required'
              }
              return true
            })
          },
        }),
        defineField({
          name: 'metadataBase',
          type: 'url',
          description: (
            <a
              href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase"
              rel="noreferrer noopener"
            >
              More information
            </a>
          ),
        }),
      ],
    }),
    defineField({
      name: 'siteFavicon',
      title: 'Site Favicon',
      type: 'image',
      description: 'Your website site favicon.',
      group: 'global',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt'
        }
      ]
    }),
    defineField({
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
      description: 'Your website logo.',
      group: 'header',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt'
        }
      ]
    }),
    defineField({
      name: 'siteLogoTransparent',
      title: 'Site Logo (For transparent header)',
      type: 'image',
      description: 'Your website logo for transparent header.',
      group: 'header',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt'
        }
      ]
    }),
    defineField({
      name: 'headerMenu',
      title: 'Header Menu',
      type: 'array',
      group: 'header',
      of: [
        {
          type: 'headerLink'
        },
      ]
    }),
    defineField({
      type: 'gallery',
      name: 'prefooterGallery',
      group: ['global', 'footer'],
      title: 'Prefooter Logo'
    }),
    defineField({
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
      description: 'Your website logo.',
      group: 'footer',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt'
        }
      ]
    }),
    defineField({
      name: 'footerContent',
      title: 'Footer contents',
      type: 'footerContent',
      group: 'footer'
    }),
    defineField({
      type: 'array',
      name: 'socialIcon',
      title: 'Footer Social Icons',
      group: 'footer',
      of: [{ type: 'social'}]
  }),
    defineField({
      name: 'footerMenu',
      title: 'Footer Menu',
      type: 'array',
      group: 'footer',
      of: [
        {
          type: 'footerLink'
        },
      ]
    }),
    defineField({
      type:'string',
      name: 'copyrightSite',
      title: 'Copyright',
      initialValue: initial.copyrightText
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings',
      }
    },
  },
})
