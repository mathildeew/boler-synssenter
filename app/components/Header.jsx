"use client";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import BolerLogo from "./BolerLogo";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header className="relative lg:flex lg:justify-between z-20">
        <div className="bg-white w-full h-16 max-w-[1460px] mx-auto flex items-center justify-between px-4 lg:z-auto lg:w-full lg:px-10">
          <div className="hidden lg:flex w-full justify-end items-center gap-4">
            <FontAwesomeIcon icon={faLongArrowRight} />
            <a>Kunde? Bestill kontaktlinser</a>
          </div>

          <Link href="/" className="flex flex-col gap-1 items-center">
            <BolerLogo />
            <span className="text-darkPurple font-medium uppercase tracking-wider hidden lg:inline">Bøler Synssenter</span>
          </Link>

          <div className="flex items-center gap-2 lg:hidden" onClick={() => setOpenMenu(!openMenu)} aria-label="Open and close the menu">
            <span className="uppercase text-sm">{openMenu ? "Lukk" : "Meny"}</span>
            <div className="w-7 h-7 relative">
              <span className={`hamburger top-1 ${openMenu && "rotate-45 translate-y-2"}`}></span>
              <span className={`hamburger top-3 ${openMenu && "opacity-0"}`}></span>
              <span className={`hamburger top-5 ${openMenu && "-rotate-45 -translate-y-2"}`}></span>
            </div>
          </div>

          <nav className={`bg-white translate-all ease-in-out duration-700 z-10 hidden lg:inline`}>
            <div className="flex flex-row gap-10 items-center h-full">
              <Link href="vaare-tjenester" data-animate-in="true" data-animation-order="1">
                Våre tjenester
              </Link>
              <Link href="bestill-time" data-animate-in="true" data-animation-order="2">
                Bestill time
              </Link>

              <Link href="om-oss" data-animate-in="true" data-animation-order="3">
                Om oss
              </Link>
              <Link href="aktuelt" data-animate-in="true" data-animation-order="4">
                Aktuelt
              </Link>
              {/* <a className="bg-lightPurple rounded-full px-8 py-2 w-fit" data-animate-in="true" data-animation-order="5">
                Bestill kontaktlinser
              </a> */}
            </div>
          </nav>
        </div>
      </header>

      <nav className={`bg-white w-full absolute translate-all ease-in-out duration-700 z-10 lg:inline lg:translate-y-0 lg:relative lg:w-auto ${openMenu ? "top-20 h-screen" : "-top-[400px] h-20 lg:h-auto"}`}>
        <div className="flex flex-col items-end gap-12 px-4 py-12 lg:hidden">
          <Link href="/synsundersokelse" className="px-6">
            Synsundersøkelse
          </Link>
          <Link href="/aktuelt" className="px-6">
            Aktuelt
          </Link>
          <Link href="/om-oss" className="px-6">
            Om oss
          </Link>
          <Link href="/kontakt-oss" className="px-6">
            Kontakt oss
          </Link>
          <a className="bg-lightPurple rounded-full px-6 py-2 w-fit">Bestill kontaktlinser</a>
        </div>
      </nav>
    </>
  );
}
