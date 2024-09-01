import { useEffect, useState } from "react";
import { urlFor } from "../../../sanity/urlFor";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";
import Link from "next/link";

export default function Brands() {
  const [brandsData, setBrandsData] = useState([]);
  const { fetchApi } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().brands);
      setBrandsData(result);
      console.log(result);
    };

    getData();
  }, [fetchApi]);

  return (
    <section className="w-full flex flex-col items-center gap-10">
      <h1 className="text-darkPurple"> Våre merker</h1>
      <div className="w-full grid grid-cols-2 gap-4 lg:grid-cols-4">
        {brandsData.map((brand, index) => (
          <div key={index} className="w-full h-32 relative md:h-56 xl:h-96">
            <div className="w-full h-full bg-gray-600 bg-opacity-55 absolute top-0 z-10"></div>
            <div className="w-full h-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${urlFor(brand.carousel[0].image.asset._ref).url()})` }}>
              <h2 className="text-white relative z-20">{brand.name}</h2>
            </div>
          </div>
        ))}
      </div>
      <Link href="/vaare-merker" className="baseButton text-lightBeige">
        Se alle merker
      </Link>
    </section>
  );
}
