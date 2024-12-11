import { WarningOutlineIcon } from "@sanity/icons";

const privacy = {
  name: "privacy",
  title: "Personvern",
  type: "document",
  icon: WarningOutlineIcon,
  fields: [
    {
      name: "title",
      title: `Alt som endres her, endres på "Personvern" siden`,
      type: "string",
      initialValue: "Personvern",
      readOnly: true,
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      description: "Info om personvernet.",
      rows: 4,
      validation: (rule) => [rule.required().max(225).error("Må være mindre enn 225 tegn")],
    },
    {
      name: "content",
      title: "Innhold",
      type: "array",
      validation: (rule) => rule.required(),
      of: [
        {
          type: "block",
          styles: [
            {
              title: "Normal",
              value: "normal",
            },
            {
              title: "Heading 1",
              value: "h1",
            },
            {
              title: "Heading 2",
              value: "h2",
            },
            {
              title: "Heading 3",
              value: "h3",
            },
            {
              title: "Highlighted",
              value: "highlighted",
            },
            {
              title: "Quote",
              value: "blockquote",
            },
          ],
        },
      ],
    },
  ],
};

export default privacy;
