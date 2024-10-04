import { getMetadata } from "../hooks/getMetadata";
import NewsComponent from "../components/News/NewsComponent";

// Revalidate the page every 60 seconds
export const revalidate = 60;

// export async function generateMetadata() {
//   return await getMetadata("newsMetadata");
// }

export default function News() {
  return <NewsComponent />;
}
