import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w7pqyox8",
  dataset: "production",
  apiVersion: "2024-06-08",
  useCdn: false,
});

export async function getInfo() {
  const info = await client.fetch(
    `
    * [_type == "siteSettings" && title == "Bøler Synssenter"][0]{
      address,
      openingHours,
      mail,
      phone,
      title,
    }
    `
  );
  return info;
}

export async function getDocuments() {
  const documents = await client.fetch(
    `
    * [_type == "article"]{
      _id,
      name,
      intro,
      "slug": slug.current,
      "image": image.asset -> url,
      // content
    }`
  );

  return documents;
}

/**
 * Retrieves API results from Sanity.
 * 
 * @param query - groq query of what information needed.
 * @returns - Returns the API result.
 */
export async function getDocument(query: any) {
  const document = await client.fetch(query);

  return document;
}
