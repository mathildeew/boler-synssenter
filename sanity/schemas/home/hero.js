import { StarIcon } from "@sanity/icons";

const hero = {
  name: "hero",
  title: "Hero",
  type: "document",
  icon: StarIcon,
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      description: "Tittel på heroseksjonen",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      validation: (rule) => rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternativ tekst",
          description: "Enkel beskrivelse av bildet.",
          type: "string",
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: "text",
      title: "Tekst",
      type: "text",
      description: "Kort og engasjerende tekst",
      rows: 4,
      validation: (rule) => rule.required(),
    },
    {
      name: "link",
      title: "Link",
      type: "object",
      fields: [
        {
          name: "url",
          type: "string",
          title: "URL til linken",
          rows: 1,
          description: `URL/Link for knappen. Eks: "/vaare-tjenester" for interne linker.`,
          validation: (Rule) => Rule.required(),
        },
        {
          name: "urlText",
          type: "string",
          title: "Link tekst",
          description: "Tekst som vises i knappen.",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
};

export default hero;
