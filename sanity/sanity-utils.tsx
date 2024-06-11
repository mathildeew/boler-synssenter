import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w7pqyox8",
  dataset: "production",
  apiVersion: "2024-06-08",
  useCdn: false,
});

export async function getDocuments() {
  const documents = await client.fetch(
    `
    * [_type == "article"]{
      _id
    }`
  );

  return documents;
}

//   return await client.fetch(
//   `*[_type == "article"]
//     {
//   _id,
//   _createdAt,
//   name,
//   // "slug": slug.current,
//   // "image": image.asset -> url,
//   // intro,
//   // content
// }
//   `
//   );
