"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";

export default function RenderServices() {
  const [servicesData, setServicesData] = useState([]);
  const { fetchApi } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().services);
      setServicesData(result);
    };
    getData();
  }, [fetchApi]);

  const backgroundColors = ["bg-lightBlue", "bg-lightPurple", "bg-white", "bg-darkBeige"];

  return (
    <section className="text-darkPurple w-full grid justify-center items-center gap-10 sm:grid-cols-2 ">
      {servicesData.map((service, index) => (
        <div key={service._id} className={`h-full flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl ${backgroundColors[index % backgroundColors.length]} ${index % 3 === 0 && "sm:col-span-2 lg:col-span-1"}`}>
          <div className="flex flex-col items-center gap-2">
            <div className="w-36">
              <Image src={service.imageUrl} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} alt={service.imageAlt} />
            </div>
            <h2 className="font-medium">{service.title}</h2>
          </div>
          <p>{service.text}</p>
        </div>
      ))}
    </section>
  );
}
