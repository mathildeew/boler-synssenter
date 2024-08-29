import imageCarousel from "../utils/carousel";

const brands = {
  name: "brands",
  title: "Merker",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Tittel",
      type: "string",
      description: "Navn på merket.",
      validation: (rule) => rule.required(),
    },
    {
      name: "carousel",
      title: "Bilder",
      type: "array",
      of: [{ type: "imageCarousel" }],
      options: {
        layout: "grid",
      },
    },
    {
      name: "info",
      title: "Info",
      type: "text",
      description: "Info om merket.",
      rows: 6,
    },
    {
      name: "url",
      title: "Link",
      type: "url",
      description: "Link til merkets nettsted.",
      validation: (rule) => rule.required(),
    },
  ],
};

export default brands;
