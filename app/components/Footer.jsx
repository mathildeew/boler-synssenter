"use client";
// import BolerLogo from "./bolerLogo";
import { useCallback, useEffect, useState } from "react";
import apiQueries from "../../sanity/apiQueries";
import useAPI from "../hooks/useAPI";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default function Footer() {
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
    <footer className="bg-lightBlue w-full">
      <div className="footerContainer bg-darkPurple flex justify-center px-4 py-16 md:px-10 md:py-28 lg:px-16">
        {/* <BolerLogo /> */}
        <div className="w-full max-w-[1460px] text-lightBlue grid gap-12 md:grid-cols-2">
          {isSuccess && (
            <>
              <div className="flex flex-col gap-5">
                <h3>Åpningstider</h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <p>Mandag - fredag:</p>
                    <p>{info.openingHours.manToFre}</p>
                  </div>
                  <div>
                    <p>Lørdag:</p>
                    <p>{info.openingHours.sat}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <h3>Kontakt oss</h3>
                <div className="flex flex-col gap-3">
                  <div>
                    <p>{info.phone}</p>
                    <a href={`mailto:${info.mail}`}>{info.mail}</a>
                  </div>
                  <div>
                    <p>{info.address.street}</p>
                    <p>{info.address.city}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center">
                <p>Design og nettside av</p>
                <a href="https://www.mathildeelinor.no" className="underline">
                  Mathilde Elinor
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
