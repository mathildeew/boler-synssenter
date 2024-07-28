import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RenderNews(data) {
  const { data: articles } = data;

  return (
    <div className="max-w-[1460px] grid gap-6 grid-cols-news overflow-auto scroll-snap-mandatory gridExpand:grid-cols-2 md:gap-6 lg:grid-cols-4">
      {articles.map((article) => {
        const [hover, setHover] = useState(false);

        return (
          <Link
            key={article._id}
            href={`/aktuelt/${article.slug}`}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <div className="text-darkPurple flex flex-col gap-3 snap-center items-center">
              <div className="w-full h-72 rounded-3xl overflow-hidden">
                <div className={`w-full h-72 transition-all ease-in-out duration-300 overflow-hidden ${hover ? "scale-[110%]" : "scale-1"}`}>
                  <Image src={article.image} alt={article.name} width={100} height={100} layout="responsive" objectFit="cover" />
                </div>
              </div>
              <div className="text-left w-full">
                <h3 className="text-left">{article.name}</h3>
                <p>{article.intro}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
