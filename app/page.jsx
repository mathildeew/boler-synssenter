import { useMetadata } from "./hooks/useMetadata";
import HomePageContent from "./components/Home/HomePageContent";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  return await useMetadata("homeMetadata");
}

export default function Home() {
  return <HomePageContent />;
}
