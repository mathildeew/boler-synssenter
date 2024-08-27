"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import apiQueries from "../../../sanity/apiQueries";
import useAPI from "../../hooks/useAPI";

// Revalidate the page every 60 seconds
export const revalidate = 60;
export default function Services() {
  const [servicesData, setServicesData] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError } = useAPI();

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi(apiQueries().services);
      setServicesData(result);
    };

    getData();
  }, [fetchApi]);

  console.log(servicesData);

  return (
    <section className="bg-lightPurple w-full flex flex-col gap-10 justify-center items-center px-4 py-16 md:px-10 md:py-20">
      <div className="text-darkPurple text-center max-w-3xl flex flex-col gap-10 items-center">
        <h2 className="text-5xl text-center font-serif text-darkPurple">Vår kunnskap er din trygghet</h2>
        <p>Hos Bøler Synssenter er alle våre optikere autorisert helsepersonell, dedikert til å gi deg best mulig øyehelse. Med høy kompetanse og lang erfaring sørger vi for at du får en profesjonell og trygg opplevelse ved hver synsundersøkelse og konsultasjon. </p>
        <Link href="/vaare-tjenester" className="baseButton text-lightPurple">
          Les mer om våre tjenester
        </Link>
      </div>

      <div className="bg-white w-full max-w-[1460px] flex flex-wrap justify-center gap-8 px-8 py-14 rounded-3xl md:gap-10">
        {servicesData?.map((service) => {
          <div key={service._id} className="w-full flex flex-col items-center gap-4 sm:w-48">
            <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
              <div className="w-20">
                <Image src={service.imageUrl} width={144} height={144} layout="responsive" alt={service.imageAlt} />
              </div>
            </div>
            <p className="font-medium">{service.title}</p>
          </div>;
        })}
        {/* <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <div className="w-20">
              <Image src="/icons/synsundersokelse.svg" width={144} height={144} layout="responsive" alt="Synsundersøkelse ikon" />
            </div>
          </div>
          <p className="font-medium">Synsundersøkelse</p>
        </div> */}

        {/* <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <div className="w-24">
              <Image src="/icons/oyehelse.svg" width={144} height={144} layout="responsive" alt="Øyehelse ikon" />
            </div>
          </div>
          <p className="font-medium">Øyehelse</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <div className="w-20">
              <Image src="/icons/kontaktlinser.svg" width={144} height={144} layout="responsive" alt="Kontaktlinser ikon" />
            </div>
          </div>
          <p className="font-medium">Kontaktlinser</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <div className="w-20">
              <Image src="/icons/synstrening.svg" width={144} height={144} layout="responsive" alt="Synstrening ikon" />
            </div>
          </div>
          <p className="font-medium">Synstrening</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <div className="w-24">
              <Image src="/icons/frames.svg" width={144} height={144} layout="responsive" alt="Brilleikon" />
            </div>
          </div>
          <p className="font-medium text-center">Innfatninger &#38; solbriller</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <div className="w-24">
              <Image src="/icons/forerkortattest.svg" width={144} height={144} layout="responsive" alt="Førerkortattest ikon" />
            </div>
          </div>
          <p className="font-medium">Førerkortattest</p>
        </div> */}
      </div>
    </section>
  );
}
