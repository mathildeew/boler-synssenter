const siteSettings = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Navn",
      type: "string",
    },
    {
      name: "phone",
      title: "Telefonnummer",
      type: "number",
      validation: (rule) => [rule.required().min(8).error("Må være et telefonnummer på 8 siffer"), rule.max(8).warning("Må være et telefonnummer på 8 siffer")],
    },
    {
      name: "mail",
      title: "E-post",
      type: "string",
    },
    {
      name: "hours",
      title: "Åpningstider",
      type: "text",
    },
  ],
};

export default siteSettings;
