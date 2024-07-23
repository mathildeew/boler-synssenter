import { PortableText } from "@portabletext/react";
import { useAPI } from "../../../sanity/sanity-utils";
import { urlFor } from "../../../sanity/urlFor";
import { PortableTextComponents } from "../../components/PortableTextComponents";
import Link from "next/link";
import apiQueries from "../../../sanity/apiQueries";

export default async function Article({ params }) {
  const slug = params.slug;
  const article = await useAPI(apiQueries(slug).article);

  return (
    <article className="text-darkPurple flex flex-col items-center gap-12 px-4 py-16 md:px-10 md:py-28">
      <Link href="/aktuelt" className="hover:underline">
        ← Aktuelt
      </Link>
      <section className="max-w-[1000px] flex flex-col gap-6">
        <h1>{article.name}</h1>
        <span className="text-xl text-center md:text-3xl">{article.intro}</span>
        <img src={urlFor(article.image).url()} alt={article.image.alt} className="max-h-[550px] object-cover object-center rounded-xl" />
      </section>
      <section className="max-w-[700px]">
        <PortableText value={article.content} components={PortableTextComponents} />
      </section>
    </article>
  );
}
