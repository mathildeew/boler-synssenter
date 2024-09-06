"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import useAPI from "../../../hooks/useAPI";
import apiQueries from "../../../../sanity/apiQueries";
import Loader from "../../UI/Loader";
import Error from "../../UI/Error";
import RenderArticle from "../../UI/RenderArticle";

export default function ArticleComponent({ params }) {
  const [article, setArticle] = useState([]);
  const slug = params.slug;

  const { fetchApi, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries(slug).article);
      setArticle(result);
    };

    getData();
  }, [fetchApi]);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <article className="flex flex-col items-center gap-12 px-4 py-16 md:px-10 md:py-20" data-animate-in="true">
          <Link href="/aktuelt" className="hover:underline">
            ← Aktuelt
          </Link>
          <RenderArticle title={article.name} article={article} />
        </article>
      )}

      {isError && <Error />}
    </>
  );
}
