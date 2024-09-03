"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import RenderNews from "../Home/RenderNews";

// Revalidate the page every 60 seconds
export const revalidate = 60;
export default function News() {
  const [articles, setArticles] = useState([]);
  const { fetchApi } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().articles);
      setArticles(result.slice(0, 4));
    };

    getData();
  }, [fetchApi]);

  return (
    <section className="bg-lightBlue w-full flex flex-col items-center justify-center gap-10 pl-4 py-16 md:px-10 md:py-20">
      <h2 className="text-5xl text-center font-serif text-darkPurple">Nytt fra oss</h2>
      <RenderNews data={articles} />
      <Link href="aktuelt" className="baseButton text-lightBlue">
        Se alle nyheter
      </Link>
    </section>
  );
}
