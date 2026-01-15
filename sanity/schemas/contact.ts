import { defineType, defineField } from 'sanity'

export const contact = defineType({
    name: 'contact',
    title: 'Contact Information',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.email(),
        }),
        defineField({
            name: 'github',
            title: 'GitHub URL',
            type: 'url',
        }),
        defineField({
            name: 'linkedin',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'twitter',
            title: 'Twitter/X URL',
            type: 'url',
        }),
    ],
})
