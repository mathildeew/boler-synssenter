import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "./PortableTextComponents";

export default function RenderArticle({ title, article }) {
  return (
    <section>
      <section className="w-full  max-w-[1000px] flex flex-col gap-10 mb-6">
        <h1>{title}</h1>
        <span className="text-xl text-center md:text-3xl">{article.intro}</span>
        <div className="w-full h-[600px] object-cover rounded-xl overflow-hidden">
          <Image src={article.imageUrl} alt={article.imageAlt} width={1000} height={1000} style={{ width: "full", height: "full", objectFit: "contain", objectPosition: "center center" }} />
        </div>
      </section>
      <section className="max-w-[700px] mx-auto">
        <PortableText value={article.content} components={PortableTextComponents} />
      </section>
    </section>
  );
}
