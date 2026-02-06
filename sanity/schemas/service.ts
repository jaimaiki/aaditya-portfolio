import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Bridal', value: 'bridal' },
                    { title: 'Editorial', value: 'editorial' },
                    { title: 'Hair', value: 'hair' },
                    { title: 'Other', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'priceDescription',
            title: 'Price Description',
            type: 'string',
            initialValue: 'Contact for pricing',
        }),
    ],
})
