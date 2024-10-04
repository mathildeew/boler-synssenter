const aboutMetadata = {
  name: "aboutMetadata",
  title: "Metadata",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tittel",
      type: "string",
      description: "Kort og konsis. Bruk relevante nøkkelord og sørg for at tittelen fanger oppmerksomheten til leserne.",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
      rows: 4,
      description: "Kortfattet, mellom 150-160 tegn og inkluder relevante nøkkelord for å tiltrekke det riktige publikum.",
      validation: (rule) => rule.required(),
    },
  ],
};

export default aboutMetadata;
