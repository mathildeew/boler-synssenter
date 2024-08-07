"use client";
import { useState, useEffect } from "react";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import Info from "./Info";
import Contact from "./Contact";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default function AboutPageContent() {
  const [about, setAbout] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().about);
      setAbout(result);
    };

    getData();
  }, [fetchApi]);

  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <section data-animate-in="true" className="w-full">
          <Info data={about} />
          <Contact />
        </section>
      )}

      {isError && <Error />}
    </>
  );
}
