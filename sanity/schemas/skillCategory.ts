import { defineType, defineField } from 'sanity'

export const skillCategory = defineType({
    name: 'skillCategory',
    title: 'Skill Categories',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Category Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
            description: 'E.g., "Languages", "AI & ML Frameworks"',
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
        }),
    ],
})
