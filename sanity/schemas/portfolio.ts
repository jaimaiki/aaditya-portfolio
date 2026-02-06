import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'portfolio',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Editorial', value: 'editorial' },
                    { title: 'Bridal', value: 'bridal' },
                    { title: 'Hair', value: 'hair' },
                    { title: 'Celebrity', value: 'celebrity' },
                    { title: 'Commercial', value: 'commercial' },
                ],
            },
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'images',
            title: 'Gallery Images',
            type: 'array',
            of: [{ type: 'image' }],
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured?',
            type: 'boolean',
            initialValue: false,
        }),
    ],
})
