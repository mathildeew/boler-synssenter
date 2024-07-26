"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Loader from "../Loader/Loader";

export default function NewsComponent() {
  const [articleId, setArticleId] = useState(null);
  const [articles, setArticles] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useAPI();

  const getData = useCallback(async () => {
    const result = await fetchApi(apiQueries().articles);
    setArticles(result);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <section className="text-darkPurple grid gap-8 px-4 py-16 md:px-10 md:py-28 lg:gap-12" data-animate-in="true" data-animation-order="1">
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
                  <div className="text-darkPurple flex flex-col gap-3 snap-center">
                    <div className="overflow-hidden rounded-3xl">
                      <img className={`w-96 h-72 object-cover transition-all ease-in-out duration-300 ${articleId === article._id ? "scale-[110%]" : "scale-1"}`} src={article.image} alt={article.name} />
                    </div>
                    <h3>{article.name}</h3>
                    <p>{article.intro}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
