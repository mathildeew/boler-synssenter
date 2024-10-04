const servicesInfo = {
  name: "servicesInfo",
  title: "Metadata",
  type: "document",
  fields: [
    {
      name: "title",
      title: `Alt som endres her, endres på "Våre tjenester" siden`,
      type: "string",
      initialValue: "Våre tjenester",
      readOnly: true,
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      rows: 4,
      description: "Intro øverst på siden.",
      validation: (rule) => rule.required(),
    },
  ],
};

export default servicesInfo;
