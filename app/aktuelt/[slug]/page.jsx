"use client";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../../sanity/urlFor";
import { PortableTextComponents } from "../../components/PortableTextComponents";
import Link from "next/link";
import apiQueries from "../../../sanity/apiQueries";
import useAPI from "../../hooks/useAPI";
import { useCallback, useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";

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

  console.log(article);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <article className="text-darkPurple flex flex-col items-center gap-12 px-4 py-16 md:px-10 md:py-28">
          <Link href="/aktuelt" className="hover:underline">
            ← Aktuelt
          </Link>
          <>
            <section className="max-w-[1000px] flex flex-col gap-6" data-animate-in="true" data-animation-order="1">
              <h1>{article.name}</h1>
              <span className="text-xl text-center md:text-3xl">{article.intro}</span>
              <img src={urlFor(article.image).url()} alt={article.image.alt} className="max-h-[550px] object-cover object-center rounded-xl" />
            </section>
            <section className="max-w-[700px]">
              <PortableText value={article.content} components={PortableTextComponents} />
            </section>
          </>
        </article>
      )}
    </>
  );
}
