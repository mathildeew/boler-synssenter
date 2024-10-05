import { useEffect, useState } from "react";
import Image from "next/image";
import apiQueries from "../../../sanity/apiQueries";
import useAPI from "../../hooks/useAPI";

export const revalidate = 1;

export default function Footer() {
  const [storeInfo, setStoreInfo] = useState([]);
  const { fetchApi } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().info);
      setStoreInfo(result);
    };

    getData();
  }, [fetchApi]);

  return (
    <footer className="bg-lightBlue w-full grid gap-8 py-10 md:gap-14">
      {/* <img src="/dotted.svg" alt="" className="w-full" /> */}
      <div className="flex flex-col justify-center px-4 md:px-10 lg:px-16">
        <div className="w-full max-w-[1460px] grid gap-12 md:grid-cols-2">
          <div className="grid">
            <h3>Åpningstider</h3>
            <div className="grid">
              <div>
                <p>Mandag - fredag:</p>
                <p>{storeInfo.openingHours?.manToFre}</p>
              </div>
              <div>
                <p>Lørdag:</p>
                <p>{storeInfo.openingHours?.sat}</p>
              </div>
            </div>
          </div>

          <div className="grid">
            <h3>Kontakt oss</h3>
            <div className="grid gap-4">
              <div className="grid">
                <a href={`tel:${storeInfo.phone}`}>{storeInfo.phone}</a>
                <a href={`mailto:${storeInfo.mail}`}>{storeInfo.mail}</a>
              </div>
              <div>
                <p>{storeInfo.address?.street}</p>
                <p>{storeInfo.address?.city}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <p>Design og nettside av</p>
            <a href="https://www.mathildeelinor.no" className="underline">
              Mathilde Elinor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
