import { createClient, groq } from "next-sanity";

export async function getData() {
  const client = createClient({
    projectId: "w7pqyox8",
    dataset: "production",
    apiVersion: "2024-06-08",
    useCdn: false,
  });

  return await client.fetch(
    `
  *[_type == "article"]
{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "image": image.asset -> url,
  intro,
  content
}
  `
  );
}
