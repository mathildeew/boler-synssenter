import { BookIcon } from "@sanity/icons";

const articles = {
  name: "article",
  title: "Nyheter",
  type: "document",
  icon: BookIcon,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Forsidebilde",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternativ tekst",
          description: "Enkel beskrivelse av bildet",
          type: "string",
        },
      ],
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      description: "Kort intro om artikkelen",
      rows: 4,
      validation: (rule) => [rule.max(160).error("Må være mindre enn 160 tegn")],
    },
    {
      name: "content",
      title: "Innhold",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternativ tekst",
              description: "Kort beskrivelse av bildet, helst kun et par ord",
              validation: (rule) => [rule.max(80).error("Må være mindre enn 80 tegn")],
              rows: 1,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
};

export default articles;
