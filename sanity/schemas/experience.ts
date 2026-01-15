import { defineType, defineField } from 'sanity'

export const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Job Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Employment Type',
            type: 'string',
            options: {
                list: ['Full-time', 'Part-time', 'Self-employed', 'Freelance', 'Contract', 'Internship'],
            },
        }),
        defineField({
            name: 'period',
            title: 'Period',
            type: 'string',
            description: 'E.g., "Jul 2023 - Mar 2025 · 1 yr 9 mos"',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 6,
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'link',
            title: 'Company Link',
            type: 'object',
            fields: [
                { name: 'text', type: 'string', title: 'Link Text' },
                { name: 'url', type: 'url', title: 'URL' },
            ],
        }),
        defineField({
            name: 'logo',
            title: 'Company Logo',
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
