import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default function RenderNews(data) {
  const { data: articles } = data;

  return (
    <div className="max-w-[1460px] grid gap-6 grid-cols-news overflow-auto scroll-snap-mandatory gridExpand:grid-cols-2 md:gap-6 lg:grid-cols-4">
      {articles.map((article) => (
        <Link key={article._id} href={`/aktuelt/${article.slug}`}>
          <div className="text-darkPurple flex flex-col gap-3 snap-center">
            <div className="overflow-hidden rounded-3xl">
              <img className="w-96 h-72 object-cover transition-all ease-in-out duration-300" src={article.image} alt={article.name} />
            </div>
            <h3>{article.name}</h3>
            <p>{article.intro}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
