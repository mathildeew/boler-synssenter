// import { PortableText } from "next-sanity";
import { getDocument } from "../../../sanity/sanity-utils";
import PortableText from "react-portable-text";
import { SanityImage } from "sanity-image";

export default async function Article({ params }) {
  const slug = params.aktuelt;
  const article = await getDocument(slug);
  console.log(article);

  return (
    <section className="max-w-[1460px] px-4 py-16 md:px-10 md:py-28">
      <div className="flex flex-col gap-6">
        <h1>{article.name}</h1>
        <span className="text-xl text-center">{article.intro}</span>
        <img src={article.image} alt={article.name} className="rounded-xl" />
      </div>
      <PortableText
        content={article.content}
        serializers={{
          h1: ({ children }) => <h1 className="text-4xl font-sans text-left font-semibold">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-sans font-medium  tracking-wide">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-sans font-medium tracking-wide">{children}</h3>,
          h4: ({ children }) => <h4 className="text-xl font-sans font-medium tracking-wide">{children}</h4>,
          h5: ({ children }) => <h5 className="text-lg font-sans font-medium tracking-wide">{children}</h5>,
          h6: ({ children }) => <h5 className="text-md font-sans font-medium tracking-wide">{children}</h5>,
          ul: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
        }}
      />
    </section>
  );
}
