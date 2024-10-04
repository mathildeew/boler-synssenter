import { client } from "../../../sanity/sanity-utils";
import { useMetadata } from "../../hooks/useMetadata";
import ArticleComponent from "../../components/News/[slug]/ArticleComponent";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata({ params }) {
  const slug = params.slug;
  return await useMetadata("article", slug);
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`
    *[_type == "article"]{
      "slug": slug.current
    }
  `);

  return slugs.map((article) => ({
    slug: article.slug,
  }));
}

export default function Article({ params }) {
  return <ArticleComponent params={params} />;
}
