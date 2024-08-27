import apiQueries from "../../sanity/apiQueries";
import { client } from "../../sanity/sanity-utils";
import NewsComponent from "../components/News/NewsComponent";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  const metadata = await client.fetch(apiQueries().newsMetadata);

  return {
    title: `${metadata.title}`,
    description: `${metadata.description}`,
  };
}

export default function News() {
  return <NewsComponent />;
}
