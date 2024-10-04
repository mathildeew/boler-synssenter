"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

export default function NewsComponent() {
  const [articleId, setArticleId] = useState(null);
  const [articles, setArticles] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().articles);
      setArticles(result);
    };

    getData();
  }, [fetchApi]);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <section className="grid gap-8 px-4 py-16 md:px-10 md:py-20 lg:gap-12" data-animate-in="true">
          <h1>Aktuelt</h1>
          <div className="max-w-[1460px] grid gap-8 overflow-auto grid-cols sm:grid-cols-2 lg:grid-cols-4">
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
                  <div className="flex flex-col gap-3 snap-center">
                    <div className="w-full h-72 rounded-3xl overflow-hidden">
                      <div className={`w-full h-72 transition-all ease-in-out duration-300 overflow-hidden ${articleId === article._id ? "scale-[110%]" : "scale-1"}`}>
                        <Image src={article.image} alt={article.title} width={1000} height={1000} style={{ width: "100%", height: "100%", objectFit: "cover" }} priority={true} placeholder="blur" blurDataURL="jpg" />
                      </div>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.intro}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {isError && <Error />}
    </>
  );
}
