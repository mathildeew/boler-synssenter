import { HeartIcon } from "@sanity/icons";

const about = {
  name: "about",
  title: "Om oss",
  type: "document",
  icon: HeartIcon,
  fields: [
    {
      name: "title",
      title: `Alt som endres her, endres på "Om oss" siden`,
      type: "string",
      initialValue: "Om oss",
      readOnly: true,
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      description: "Kort intro om oss",
      rows: 4,
      validation: (rule) => [rule.required().max(225).error("Må være mindre enn 225 tegn")],
    },
    {
      name: "image",
      title: "Hovedbilde",
      type: "image",
      description: "Bildet brukes øverst på siden",
      validation: (rule) => rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternativ tekst",
          description: "Enkel beskrivelse av bildet",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: "content",
      title: "Innhold",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
            {
              title: "Heading 1",
              value: "h1",
            },
            {
              title: "Heading 2",
              value: "h2",
            },
            {
              title: "Heading 3",
              value: "h3",
            },
            {
              title: "Highlighted",
              value: "highlighted",
            },
            {
              title: "Quote",
              value: "blockquote",
            },
          ],
        },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alternativ tekst",
              type: "text",
              description: "Kort beskrivelse av bildet, helst kun et par ord. Brukes om bildet ikke kan vises eller for svaksynte.",
              validation: (rule) => rule.required(),
              rows: 1,
            },
            {
              name: "desc",
              title: "Beskrivelse av bilde",
              type: "text",
              rows: 2,
              description: "Enkel beskrivelse av bildet. Dette vises under bildet på nettsiden.",
            },
          ],
        },
      ],
    },
  ],
};

export default about;
