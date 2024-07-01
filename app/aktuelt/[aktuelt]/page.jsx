import { PortableText } from "next-sanity";
import { getDocument } from "../../../sanity/sanity-utils";

export default async function Article({ params }) {
  const slug = params.aktuelt;

  const article = await getDocument(slug);
  console.log(article);
  return (
    <section className="max-w-[1460px] px-4 py-16 md:px-10 md:py-28">
      <h1>{article.name}</h1>
      <PortableText value={article.intro} />
      <img src={article.image} alt={article.name} />
      <PortableText value={article.content} />
    </section>
  );
}
