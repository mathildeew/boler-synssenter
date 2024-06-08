import { createClient, groq } from "next-sanity";
import { Project } from "../types/Project";

export async function getProjects() {
  const client = createClient({
    projectId: "w7pqyox8",
    dataset: "production",
    apiVersion: "2024-06-08",
    useCdn: false,
  });

  return await client.fetch(`*[_type == "project"]`);
}
