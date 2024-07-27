"use client";
import { useState, useEffect, useCallback } from "react";
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
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useAPI();

  const getData = useCallback(async () => {
    const result = await fetchApi(apiQueries().about);
    setAbout(result);
  });

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading && <Loader />}

      {isSuccess && (
        <section data-animate-in="true" data-animation-order="1">
          <Info data={about} />
          <Contact />
        </section>
      )}

      {isError && <Error />}
    </>
  );
}
