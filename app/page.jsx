"use client";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import News from "./components/Home/News";
import { useCallback, useEffect, useState } from "react";
import apiQueries from "../sanity/apiQueries";
import useAPI from "./hooks/useAPI";
import Loader from "./components/Loader/Loader";

export default function Home() {
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
        <div data-animate-in="true" data-animation-order="1">
          <Hero data={heroData} />
          <Services />
          <News />
        </div>
      )}
    </>
  );
}
