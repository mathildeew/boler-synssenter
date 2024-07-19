import { PortableText } from "@portabletext/react";
import { useAPI } from "../../../sanity/sanity-utils";
import { urlFor } from "../../../sanity/urlFor";
import { richTextComponents } from "../../components/RichTextComponents";
import apiQueries from "../../../sanity/apiQueries";

export default async function Article({ params }) {
  const slug = params.aktuelt;
  const article = await useAPI(apiQueries(slug).article);

  return (
    <article className="flex flex-col items-center gap-12 px-4 py-16 md:px-10 md:py-28">
      <section className="max-w-[1000px] flex flex-col gap-6">
        <h1>{article.name}</h1>
        <p>{article._updatedAt}</p>
        <span className="text-xl text-center md:text-3xl">{article.intro}</span>
        <img src={urlFor(article.image).url()} alt={article.image.alt} className="rounded-xl" />
      </section>
      <section className="max-w-[700px]">
        <PortableText value={article.content} components={richTextComponents} />
      </section>
    </article>
  );
}
