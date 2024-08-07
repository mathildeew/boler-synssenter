import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RenderNews(data) {
  const { data: articles } = data;
  const [articleId, setArticleId] = useState(null);

  return (
    <div className="max-w-[1460px] grid gap-6 grid-cols-news overflow-auto scroll-snap-mandatory gridExpand:grid-cols-2 md:gap-6 lg:grid-cols-4">
      {articles.map((article) => {
        return (
          <Link
            key={article._id}
            href={`/aktuelt/${article.slug}`}
            onMouseEnter={() => {
              setArticleId(article._id);
            }}
            onMouseLeave={() => {
              setArticleId(null);
            }}
          >
            <div className="text-darkPurple flex flex-col gap-3 snap-center items-center">
              <div className="w-full h-72 rounded-3xl overflow-hidden">
                <div className={`w-full h-72 transition-all ease-in-out duration-300 overflow-hidden ${articleId === article._id ? "scale-[110%]" : "scale-1"}`}>
                  <Image src={article.image} alt={article.name} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
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
