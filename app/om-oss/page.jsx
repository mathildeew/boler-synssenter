import AboutPageContent from "../components/About/AboutPageContent";
import { useMetadata } from "../hooks/useMetadata";

export async function generateMetadata() {
  return await useMetadata("aboutMetadata");
}

export default function About() {
  return <AboutPageContent />;
}
