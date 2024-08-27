import { BillIcon } from "@sanity/icons";

const services = {
  name: "services",
  title: "Våre tjenester",
  type: "document",
  icon: BillIcon,
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      description: "Tittelen på tjenesten.",
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
      description: "Beskrivelse av tjenesten.",
      rows: 6,
      validation: (rule) => [rule.required().max(500).error("Må være mindre enn 500 tegn.")],
    },
  ],
};

export default services;
