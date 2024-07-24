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
      type: "text",
      description: "Kort beskrivende og engasjerende tekst",
      rows: 4,
      validation: (rule) => rule.required().max(160).error("Må være mindre enn 160 tegn."),
    },
  ],
};

export default hero;
