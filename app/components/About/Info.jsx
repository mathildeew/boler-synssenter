"use client";
import { PortableText } from "@portabletext/react";
import { useState, useEffect, useCallback } from "react";
import apiQueries from "../../../sanity/apiQueries";
import useAPI from "../../hooks/useAPI";
import Loader from "../Loader/Loader";
import { PortableTextComponents } from "../PortableTextComponents";

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

  console.log(about);

  return (
    <section className="text-darkPurple flex flex-col gap-8 mx-4">
      {isLoading && <Loader />}
      {isSuccess && (
        <div>
          <section className="text-center w-full max-w-[1000px] flex flex-col gap-10 mb-6">
            <h1>Om oss</h1>
            <span className="text-xl text-center md:text-3xl">{about.intro}</span>
            <img className="w-full object-cover rounded-xl" src={about.imageUrl} alt={about.imageAlt} />
          </section>

          <section className="max-w-[700px] mx-auto">
            <PortableText value={about.content} components={PortableTextComponents} />
          </section>
        </div>
      )}
    </section>
  );
}
