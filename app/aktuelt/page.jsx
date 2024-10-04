import { useMetadata } from "../hooks/useMetadata";
import NewsComponent from "../components/News/NewsComponent";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  return await useMetadata("newsMetadata");
}

export default function News() {
  return <NewsComponent />;
}
