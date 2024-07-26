import apiQueries from "../../../sanity/apiQueries";
import { client } from "../../../sanity/sanity-utils";
import ArticleComponent from "../../components/Articles/[slug]/ArticleComponent";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const article = await client.fetch(apiQueries(slug).article);

  return {
    title: `${article.name} | Bøler Synssenter`,
    description: article.intro,
  };
}

export default function Article({ params }) {
  return <ArticleComponent params={params} />;
}
