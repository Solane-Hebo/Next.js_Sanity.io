import { defineField, defineType } from "sanity";
import { FaImage } from "react-icons/fa";

export const eventType = defineType({
    name: 'event',
    title: 'event',
    type: 'document',
    icon: FaImage,
    fields: [
        defineField({ 
            name: 'title',
            type: 'string',
            title: 'Title'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',

            }
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true }, 
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt text'
                })
            ]
        }),
        defineField({
            name: 'url',
            type: 'url',
            title: 'URL'

        }),
        defineField({
            name: 'date',
            type: 'datetime',
            title: 'Date'
        }), 
        defineField({
            name: 'location',
            type: 'string',
            title: 'Location'
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
        })

    ]

})