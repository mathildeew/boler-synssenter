import { getMetadata } from "../../hooks/getMetadata";
import ArticleComponent from "../../components/News/[slug]/ArticleComponent";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = params.slug;
  return await getMetadata("article", slug);
}

export default async function Article(props) {
  const params = await props.params;
  return <ArticleComponent params={params} />;
}
