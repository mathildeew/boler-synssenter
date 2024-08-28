const imageCarousel = {
  name: "imageCarousel",
  title: "Bilder",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "altText",
      title: "Alternative Text",
      type: "string",
      description: "Kort beskrivelse av bildet.",
      validation: (rule) => rule.required(),
    },
  ],
};

export default imageCarousel;
