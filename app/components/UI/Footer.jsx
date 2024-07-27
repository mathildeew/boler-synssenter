"use client";
// import BolerLogo from "./bolerLogo";
import { useStoreInfo } from "../../context/StoreInfoProvider";

export default function Footer() {
  const { address, mail, openingHours, phone } = useStoreInfo();

  return (
    <footer className="bg-lightBeige w-full">
      <div className="footerContainer bg-darkPurple flex justify-center px-4 py-16 md:px-10 md:py-28 lg:px-16">
        {/* <BolerLogo /> */}
        <div className="w-full max-w-[1460px] text-lightBlue grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h3>Åpningstider</h3>
            <div className="flex flex-col gap-3">
              <div>
                <p>Mandag - fredag:</p>
                <p>{openingHours.manToFre}</p>
              </div>
              <div>
                <p>Lørdag:</p>
                <p>{openingHours.sat}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3>Kontakt oss</h3>
            <div className="flex flex-col gap-3">
              <div>
                <p>{phone}</p>
                <a href={`mailto:${mail}`}>{mail}</a>
              </div>
              <div>
                <p>{address.street}</p>
                <p>{address.city}</p>
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
