"use client";
import { useState, useEffect, useCallback } from "react";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Loader from "../Loader/Loader";
import Error from "../Error";
import RenderArticle from "../RenderArticle";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default function Info() {
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
        <section className="text-darkPurple flex flex-col items-center px-4 py-16 md:px-10 md:py-20">
          <RenderArticle title={"Om oss"} article={about} />
        </section>
      )}

      {isError && <Error />}
    </>
  );
}
