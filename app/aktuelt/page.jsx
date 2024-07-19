import Link from "next/link";
import { PortableText } from "next-sanity";
import { useAPI } from "../../sanity/sanity-utils";
import apiQueries from "../../sanity/apiQueries";

export default async function Aktuelt() {
  const articles = await useAPI(apiQueries().articles);

  return (
    <>
      <h1>Aktuelt</h1>
      <section className="max-w-[1460px] grid gap-8 overflow-auto grid-cols px-4 py-16 md:px-10 md:py-28 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <Link key={article._id} href={`/aktuelt/${article.slug}`} className="mx-auto">
            <div className="flex flex-col gap-3 snap-center">
              <div className="overflow-hidden rounded-3xl">
                <img className="w-full h-72 object-cover transition-all ease-in-out duration-300" src={article.image} alt={article.name} />
              </div>
              <h3>{article.name}</h3>
              <p>{article.intro}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
