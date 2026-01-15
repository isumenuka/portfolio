import { defineType, defineField } from 'sanity';

export const sectionTitles = defineType({
    name: 'sectionTitles',
    title: 'Section Titles',
    type: 'document',
    fields: [
        defineField({
            name: 'projectsTitle',
            title: 'Projects Section Title',
            type: 'string',
            description: 'Main title for the Projects section',
            initialValue: 'Projects'
        }),
        defineField({
            name: 'projectsSubtitle',
            title: 'Projects Section Subtitle',
            type: 'text',
            description: 'Subtitle text below the Projects title',
            rows: 2
        }),
        defineField({
            name: 'experienceTitle',
            title: 'Experience Section Title',
            type: 'string',
            description: 'Main title for the Experience section',
            initialValue: 'Experience'
        }),
        defineField({
            name: 'experienceSubtitle',
            title: 'Experience Section Subtitle',
            type: 'text',
            description: 'Subtitle text below the Experience title',
            rows: 2
        }),
        defineField({
            name: 'educationTitle',
            title: 'Education Section Title',
            type: 'string',
            description: 'Main title for the Education section',
            initialValue: 'Education'
        }),
        defineField({
            name: 'educationSubtitle',
            title: 'Education Section Subtitle',
            type: 'text',
            description: 'Subtitle text below the Education title',
            rows: 2
        }),
        defineField({
            name: 'skillsTitle',
            title: 'Skills Section Title',
            type: 'string',
            description: 'Main title for the Skills section',
            initialValue: 'Skills'
        }),
        defineField({
            name: 'skillsSubtitle',
            title: 'Skills Section Subtitle',
            type: 'text',
            description: 'Subtitle text below the Skills title',
            rows: 2
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Section Titles Configuration',
                subtitle: 'Edit all section headings here'
            };
        }
    }
});
