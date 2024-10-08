import { client } from "../../sanity/sanity-utils";
import apiQueries from "../../sanity/apiQueries";

/**
 * Fetches metadata based on a query and a slug.
 *
 * @param {string} query - Key to fetch a specific metadata query.
 * @param {string} slug - Unique identifier used to fetch the metadata.
 * @returns {Object} - An object containing the title and description.
 * @returns {string} title - The title of the metadata.
 * @returns {string} description - The description of the metadata.
 */
export async function getMetadata(query, slug) {
  const metadata = await client.fetch(apiQueries(slug)[query]);

  return {
    title: metadata.title,
    description: metadata.description,
  };
}
