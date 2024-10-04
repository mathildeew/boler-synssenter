import { client } from "../../sanity/sanity-utils";
import apiQueries from "../../sanity/apiQueries";

export async function useMetadata(query, slug) {
  const metadata = await client.fetch(apiQueries(slug)[query]);
  console.log(metadata.title);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}
