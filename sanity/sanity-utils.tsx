import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "w7pqyox8",
  dataset: "production",
  apiVersion: "2024-06-08",
  useCdn: false,
});

/**
 * Retrieves API results from Sanity.
 *
 * @param query - groq query of what information needed.
 * @returns - Returns the API result.
 */
export async function useAPI(query: any) {
  const json = await client.fetch(query);
  return json;
}
