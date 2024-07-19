import { client } from "./sanity-utils";
import imageUrlBuilder from "@sanity/image-url";

export function urlFor(source) {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}
