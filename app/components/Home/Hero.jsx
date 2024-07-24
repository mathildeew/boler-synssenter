"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import apiQueries from "../../../sanity/apiQueries";
import useAPI from "../../hooks/useAPI";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default function Hero() {
  const [hero, setHero] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useAPI();

  const getData = useCallback(async () => {
    const result = await fetchApi(apiQueries().hero);
    setHero(result);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isSuccess && (
        <section className="w-full lg:h-[500px]" data-animate-in="true" data-animation-order="1">
          <div className="h-full grid gap-12 lg:grid-cols-2 md:items-center">
            <img className="object-cover w-full h-full" src={hero.imageUrl} alt={hero.imageAlt} />
            <div className="text-darkPurple flex flex-col gap-10 items-center px-4 pb-16 md:px-10 lg:py-20">
              <h1>{hero.title}</h1>
              <span className="text-2xl text-center">{hero.text}</span>
              <Link href="bestill-time" className="baseButton text-lightBeige">
                Bestill time
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
