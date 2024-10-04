import { BookIcon } from "@sanity/icons";

const articles = {
  name: "article",
  title: "Nyheter",
  type: "document",
  icon: BookIcon,
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      description: "Tittelen på artikkelen.",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Trykk på generate. Denne brukes for å lage riktig link til artikkelen.",
      validation: (rule) => rule.required(),
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Forsidebilde",
      type: "image",
      description: "Bildet brukes på landingssiden sammen med introen.",
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
      name: "intro",
      title: "Intro",
      type: "text",
      description: "Kort intro om artikkelen. Denne brukes på landingssiden og øverst i artikkelen.",
      rows: 2,
      validation: (rule) => [rule.required().max(160).error("Må være mindre enn 160 tegn")],
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
    {
      name: "name",
      title: "Tittel",
      type: "string",
      description: "Tittelen på artikkelen.",
      hidden: ({ value }) => (value === undefined ? true : false),
    },
  ],
};

export default articles;
