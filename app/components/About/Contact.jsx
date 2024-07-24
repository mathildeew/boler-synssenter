"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faComments } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import useAPI from "../../hooks/useAPI";
import apiQueries from "../../../sanity/apiQueries";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default function Contact() {
  const [info, setInfo] = useState([]);
  const { fetchApi, isLoading, isSuccess, isError, errorMsg } = useAPI();

  const getData = useCallback(async () => {
    const result = await fetchApi(apiQueries().info);
    setInfo(result);
  });

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isSuccess && (
        <section className="bg-lightBlue w-full">
          <div className="max-w-[1460px] flex flex-col gap-12 py-16 mx-auto lg:flex-row">
            <div className="text-darkPurple flex flex-col gap-12 p-8">
              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faClock} size="xl" />
                  <h3>Åpningstider</h3>
                </div>
                <div className="flex flex-col">
                  <p>Mandag - fredag: {info.openingHours.manToFre}</p>
                  <p>Lørdag: {info.openingHours.sat}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faLocationDot} size="xl" />
                  <h3>Slik finner du frem til oss</h3>
                </div>
                <p>Vi ligger sentralt plassert på Bøler Senter, kun et steinkast unna t-bane og buss. Gratis parkering på senteret inntil to timer!</p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faComments} size="xl" />
                  <h3>Ta kontakt med oss direkte</h3>
                </div>
                <p>
                  Send oss en e-post på {info.mail}, så tar vi kontakt så fort vi kan. Du kan også ringe oss på {info.phone}.
                </p>
              </div>
              <Link href="/synsundersokelse" className="baseButton text-lightBlue mx-auto ">
                Bestill time
              </Link>
            </div>

            <div className="w-full h-96 px-2 lg:h-auto">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.977325547998!2d10.842735977093179!3d59.882725774887035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f67a3530de5%3A0x102585b627075bb2!2sC)Optikk!5e0!3m2!1sno!2sno!4v1716321840745!5m2!1sno!2sno" width="100%" height="100%" loading="lazy"></iframe>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
