"use client";
// import BolerLogo from "./bolerLogo";
import { useStoreInfo } from "../../context/StoreInfoProvider";

export default function Footer() {
  const { address, mail, openingHours, phone } = useStoreInfo();

  return (
    <footer className="bg-lightBlue w-full grid gap-8 py-10 md:gap-14">
      <img src="/dotted.svg" className="w-full" />
      <div className=" flex flex-col justify-center px-4 md:px-10 lg:px-16">
        <div className="w-full max-w-[1460px] grid gap-12 md:grid-cols-2">
          <div className="grid">
            <h3>Åpningstider</h3>
            <div className="grid">
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

          <div className="grid">
            <h3>Kontakt oss</h3>
            <div className="grid">
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
