import { BlockElementIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";


export const featuresSection = defineType({
    name: "featuresSection",
    type: "object",
    icon: BlockElementIcon,
    fields: [
        defineField({
            name: "title",
            type: "string"
        }),
        defineField({
            name: "features",
            type: "array",
            of: [
                defineArrayMember({
                    name: "feature",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            type: "string"
                        }),
                        defineField({
                            name: "description",
                            type: "string"
                        })
                    ]
                })
            ]
        })
    ]
})