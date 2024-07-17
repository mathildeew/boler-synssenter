import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structureTool } from "sanity/structure";
import { myStructure } from "./deskStructure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "w7pqyox8",
  dataset: "production",
  title: "Bøler Synssenter",
  apiVersion: "2024-06-08",
  basePath: "/admin",
  plugins: [
    // deskTool(),
    structureTool({
      structure: myStructure,
    }),
  ],
  schema: { types: schemas },
});

export default config;
