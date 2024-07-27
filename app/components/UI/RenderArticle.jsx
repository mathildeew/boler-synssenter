import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "./PortableTextComponents";

export default function RenderArticle({ title, article }) {
  return (
    <section>
      <section className="w-full  max-w-[1000px] flex flex-col gap-10 mb-6">
        <h1>{title}</h1>
        <span className="text-xl text-center md:text-3xl">{article.intro}</span>
        <img className="w-full object-cover rounded-xl" src={article.imageUrl} alt={article.imageAlt} />
      </section>
      <section className="max-w-[700px] mx-auto">
        <PortableText value={article.content} components={PortableTextComponents} />
      </section>
    </section>
  );
}
