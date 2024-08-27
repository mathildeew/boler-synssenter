import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { myStructure } from "./deskStructure";
import schemas from "./sanity/schemas";
import "./sanity/styles/custom-styles.css";

const config = defineConfig({
  projectId: "w7pqyox8",
  dataset: "production",
  title: "Bøler Synssenter",
  apiVersion: "2024-06-08",
  basePath: "/admin",
  plugins: [
    structureTool({
      structure: myStructure,
    }),
  ],
  schema: { types: schemas },
});

export default config;
