"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import useAPI from "../hooks/useAPI";
import apiQueries from "../../sanity/apiQueries";
import Loader from "../components/Loader/Loader";

export default function Aktuelt() {
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
        <section className="grid gap-8 px-4 py-16 md:px-10 md:py-28 lg:gap-12" data-animate-in="true" data-animation-order="1">
          <h1 className="text-darkPurple ">Aktuelt</h1>
          <div className="max-w-[1460px] grid gap-8 overflow-auto grid-cols sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <Link key={article._id} href={`/aktuelt/${article.slug}`} className="mx-auto">
                <div className="flex flex-col gap-3 snap-center">
                  <div className="overflow-hidden rounded-3xl">
                    <img className="w-96 h-72 object-cover transition-all ease-in-out duration-300" src={article.image} alt={article.name} />
                  </div>
                  <h3>{article.name}</h3>
                  <p>{article.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
