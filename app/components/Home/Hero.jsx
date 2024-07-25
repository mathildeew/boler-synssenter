"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import apiQueries from "../../../sanity/apiQueries";
import useAPI from "../../hooks/useAPI";
import Loader from "../Loader/Loader";

export default function Hero() {
  const [heroData, setHeroData] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useAPI();

  const getData = useCallback(async () => {
    const result = await fetchApi(apiQueries().hero);
    setHeroData(result);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <section className="w-full lg:h-[500px]">
          <div className="h-full grid gap-12 lg:grid-cols-2 md:items-center">
            <img className="object-cover w-full h-full" src={heroData.imageUrl} alt={heroData.imageAlt} />
            <div className="text-darkPurple flex flex-col gap-10 items-center px-4 pb-16 md:px-10 lg:py-20">
              <h1>{heroData.title}</h1>
              <span className="text-2xl text-center">{heroData.text}</span>
              <Link href={heroData.link.url} className="baseButton text-lightBeige">
                {heroData.link.urlText}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
