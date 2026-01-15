import { defineType, defineField } from 'sanity'

export const education = defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'institution',
            title: 'Institution',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'degree',
            title: 'Degree',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'period',
            title: 'Period',
            type: 'string',
        }),
        defineField({
            name: 'grade',
            title: 'Grade',
            type: 'string',
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'link',
            title: 'Institution Link',
            type: 'object',
            fields: [
                { name: 'text', type: 'string', title: 'Link Text' },
                { name: 'url', type: 'url', title: 'URL' },
            ],
        }),
        defineField({
            name: 'logo',
            title: 'Institution Logo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
})
