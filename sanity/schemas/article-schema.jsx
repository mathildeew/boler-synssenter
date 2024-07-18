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
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
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
      validation: (rule) => [rule.max(125).error("Må være mindre enn 125 tegn")],
    },
    {
      name: "content",
      title: "Innhold",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};

export default articles;
