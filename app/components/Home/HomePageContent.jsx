"use client";
import { useEffect, useState } from "react";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import Hero from "./Hero";
import Brands from "./Brands";
import News from "./News";
import Services from "./Services";

export default function HomePageContent() {
  const [heroData, setHeroData] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().hero);
      setHeroData(result);
    };

    getData();
  }, [fetchApi]);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <div data-animate-in="true" className="flex flex-col gap-20">
          <Hero heroData={heroData} />
          <Services />
          <Brands />
          {/* <News /> */}
        </div>
      )}

      {isError && <Error />}
    </>
  );
}
