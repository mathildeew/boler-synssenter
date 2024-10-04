import { client } from "../../sanity/sanity-utils";
import apiQueries from "../../sanity/apiQueries";

export async function getMetadata(query, slug) {
  const metadata = await client.fetch(apiQueries(slug)[query]);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}
