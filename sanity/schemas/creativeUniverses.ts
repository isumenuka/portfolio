import { defineType, defineField } from 'sanity';

export const creativeUniverses = defineType({
    name: 'creativeUniverses',
    title: 'Creative Universes',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            description: 'Main title (e.g., Creative Universes)',
            initialValue: 'Creative Universes'
        }),
        defineField({
            name: 'subtitle',
            title: 'Section Subtitle',
            type: 'text',
            description: 'Subtitle text below the main title',
            initialValue: 'Beyond code, I explore digital dimensions through design and competitive gaming.'
        }),
        defineField({
            name: 'designCard',
            title: 'Design Card',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string', title: 'Card Title', initialValue: 'Creative Studio' }),
                defineField({ name: 'subtitle', type: 'string', title: 'Card Subtitle', initialValue: 'Thumbnails & Design' }),
                defineField({ name: 'linkText', type: 'string', title: 'Link Text', initialValue: 'thumb.isumenuka.me' }),
                defineField({ name: 'linkUrl', type: 'url', title: 'Link URL', initialValue: 'https://thumb.isumenuka.me' }),
            ]
        }),
        defineField({
            name: 'gamingCard',
            title: 'Gaming Card',
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string', title: 'Card Title', initialValue: 'Gaming Hub' }),
                defineField({ name: 'subtitle', type: 'string', title: 'Card Subtitle', initialValue: 'Esports & Content' }),
                defineField({ name: 'linkText', type: 'string', title: 'Link Text', initialValue: 'esum4.isumenuka.me' }),
                defineField({ name: 'linkUrl', type: 'url', title: 'Link URL', initialValue: 'https://esum4.isumenuka.me' }),
            ]
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Creative Universes',
                subtitle: 'Main Section Config'
            };
        }
    }
});
