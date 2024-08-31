const servicesInfo = {
  name: "servicesInfo",
  title: "Metadata",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Metadata: Tittel",
      type: "string",
      description: "Kort og konsis. Bruk relevante nøkkelord og sørg for at tittelen fanger oppmerksomheten til leserne.",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Metadata: Beskrivelse",
      type: "text",
      rows: 4,
      description: "Kortfattet, mellom 150-160 tegn og inkludere relevante nøkkelord for å tiltrekke det riktige publikum.",
      validation: (rule) => rule.required(),
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
