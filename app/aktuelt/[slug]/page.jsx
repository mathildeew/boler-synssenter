"use client";
import { useCallback, useState, useEffect } from "react";
import Link from "next/link";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error";
import RenderArticle from "../../components/RenderArticle";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default function Article({ params }) {
  const [article, setArticle] = useState([]);
  const slug = params.slug;

  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useAPI();

  const getData = useCallback(async () => {
    const result = await fetchApi(apiQueries(slug).article);
    setArticle(result);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <article className="text-darkPurple flex flex-col items-center gap-12 px-4 py-16 md:px-10 md:py-28">
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
