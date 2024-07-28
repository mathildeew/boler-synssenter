import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w7pqyox8",
  dataset: "production",
  apiVersion: "2024-06-08",
  useCdn: false,
});
