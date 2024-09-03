import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function RenderNews(data) {
  const { data: articles } = data;
  const [articleId, setArticleId] = useState(null);

  return (
    <div className="max-w-[1460px] w-full grid grid-cols-news gap-6 overflow-x-auto snap-[x mandatory] gridExpand:grid-cols-2 lg:grid-cols-4">
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
            className="snap-center"
          >
            <div className="text-darkPurple w-full h-full grid gap-3 items-center">
              <div className="w-full rounded-3xl overflow-hidden">
                <div className={`w-auto h-72 transition-all ease-in-out duration-300 overflow-hidden ${articleId === article._id ? "scale-[110%]" : "scale-1"}`}>
                  <Image src={article.image} alt={article.name} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
              <div className="text-left line-clamp-6">
                <h3>{article.name}</h3>
                <p>{article.intro}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
