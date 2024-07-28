"use client";
import { useCallback, useEffect, useState } from "react";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Hero from "./Hero";
import News from "./News";
import Services from "./Services";
import Loader from "../UI/Loader";
import Error from "../UI/Error";

export default function HomePageContent() {
  const [heroData, setHeroData] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useAPI();

  const getData = useCallback(async () => {
    const result = await fetchApi(apiQueries().hero);
    setHeroData(result);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <div data-animate-in="true" data-animation-order="1" className="flex flex-col gap-20">
          <Hero heroData={heroData} />
          <Services />
          <News />
        </div>
      )}

      {isError && <Error />}
    </>
  );
}
