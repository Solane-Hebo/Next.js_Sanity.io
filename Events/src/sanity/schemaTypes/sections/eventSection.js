import { CalculatorIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const eventSection = defineType({
    name: "eventSection",
    type: "object",
    icon: CalculatorIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
            initialValue: "Festival"
        })
    ]
})