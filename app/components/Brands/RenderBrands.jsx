"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import apiQueries from "../../../sanity/apiQueries";
import useAPI from "../../hooks/useAPI";
import Image from "next/image";
import { urlFor } from "../../../sanity/urlFor";

export default function OurBrands() {
  const [brands, setBrands] = useState([]);

  const { fetchApi, isLoading, isSuccess, isError } = useAPI();
  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().brands);
      setBrands(result);
    };

    getData();
  }, [fetchApi]);

  return (
    <section className="w-full grid gap-10">
      {brands.map((brand) => (
        <div key={brand._id}>
          <div className="h-36 relative">
            <Image src={urlFor(brand.carousel[0].image.asset._ref).url()} alt={brand.carousel[0].altText} objectFit="cover" fill sizes="auto" className="w-full h-full rounded-xl" />
          </div>
          <a href={brand.url} className="flex gap-2 items-center hover:underline">
            <h2>{brand.name}</h2>
            <FontAwesomeIcon icon={faArrowRightLong} size="xs" />
          </a>
        </div>
      ))}
    </section>
  );
}
