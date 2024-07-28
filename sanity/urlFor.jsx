import { client } from "./sanity-utils";
import imageUrlBuilder from "@sanity/image-url";

/**
 * Generates a URL for a given image value using the Sanity image URL builder.
 *
 * @param {Object} value - The image value object for which the URL is to be generated.
 * @returns {string|null} The URL for the image if the value is provided, otherwise null.
 *
 * @example
 * const imageUrl = urlFor(imageAsset);
 * if (imageUrl) {
 *   console.log(imageUrl); // Outputs the URL for the given image asset
 * }
 */
export function urlFor(value) {
  const builder = imageUrlBuilder(client);

  if (!value) {
    return null;
  }
  return builder.image(value);
}
