import { getDocument } from "../../../sanity/sanity-utils";

export default async function Article({ params }) {
  const slug = params.aktuelt;

  const article = await getDocument(slug);
  console.log(article);
  return (
    <section>
      <h1>{article.name}</h1>
    </section>
  );
}
