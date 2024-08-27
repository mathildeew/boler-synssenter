import apiQueries from "../sanity/apiQueries";
import { client } from "../sanity/sanity-utils";
import HomePageContent from "./components/Home/HomePageContent";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  const metadata = await client.fetch(apiQueries().homeMetadata);

  return {
    title: `${metadata.title}`,
    description: `${metadata.description}`,
  };
}

export default function Home() {
  return <HomePageContent />;
}
