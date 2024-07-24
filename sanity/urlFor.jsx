import { client } from "./sanity-utils";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Generates image urls
 *
 * @param {string} value Which Sanity image source to build URL
 * @returns Image urls from Sanity image records
 */
export function urlFor(value) {
  const builder = imageUrlBuilder(client);

  if (!value) {
    return null;
  }
  return builder.image(value);
}
