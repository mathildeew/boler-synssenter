import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "./PortableTextComponents";

export default function RenderArticle({ title, article }) {
  return (
    <section>
      <section className="w-full max-w-[1000px] flex flex-col gap-10 mb-6">
        <h1>{title}</h1>
        <span className="text-textBlue text-xl text-center md:text-3xl">{article.intro}</span>
        <div className="w-full h-[300px] md:h-[600px] relative">
          <Image src={article.imageUrl} alt={article.imageAlt} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "100%" }} priority={true} placeholder="blur" blurDataURL="jpg" className="rounded-xl object-cover" />
        </div>
      </section>
      <section className="max-w-[700px] mx-auto">
        <PortableText value={article.content} components={PortableTextComponents} />
      </section>
    </section>
  );
}
