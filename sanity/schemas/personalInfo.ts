import { defineType, defineField } from 'sanity'

export const personalInfo = defineType({
    name: 'personalInfo',
    title: 'Personal Info',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'E.g., "Building innovative solutions with AI, ML, and React"',
        }),
        defineField({
            name: 'about',
            title: 'About Me',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Rich text about yourself (optional usage)',
        }),
        defineField({
            name: 'bioParagraph1',
            title: 'Bio Paragraph 1',
            type: 'text',
            rows: 4,
            description: 'First paragraph of your bio (used in the split text display)',
        }),
        defineField({
            name: 'bioParagraph2',
            title: 'Bio Paragraph 2',
            type: 'text',
            rows: 4,
            description: 'Second paragraph of your bio (used in the split text display)',
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'cv',
            title: 'CV / Resume',
            type: 'file',
            description: 'Upload your CV (PDF format recommended)',
            options: {
                accept: '.pdf'
            }
        }),
    ],
})
