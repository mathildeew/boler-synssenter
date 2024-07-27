"use client";

import { useState } from "react";
import { useLockBodyScroll, useToggle } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import BolerLogo from "../BolerLogo";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [locked, toogleLocked] = useToggle(false);

  useLockBodyScroll(locked);

  return (
    <>
      <header>
        <div className="bg-lightBeige w-full flex items-center justify-between px-4 pt-5 pb-4 relative z-20 lg:hidden">
          <Link href="/" className="flex flex-col items-center gap-1">
            <BolerLogo />
            <span className="text-darkPurple font-medium uppercase tracking-wider">Bøler Synssenter</span>
          </Link>

          <div
            className="flex items-center gap-2 "
            onClick={() => {
              toogleLocked(), setOpenMenu(!openMenu);
            }}
            aria-label="Open and close the menu"
          >
            <span className="text-darkPurple text-sm uppercase">{openMenu ? "Lukk" : "Meny"}</span>
            <div className="w-7 h-5 relative">
              <span className={`bg-darkPurple w-full h-0.5 absolute transition-all ease-in-out duration-300 top-0 ${openMenu && "rotate-45 translate-y-2"}`}></span>
              <span className={`bg-darkPurple w-full h-0.5 absolute transition-all ease-in-out duration-300 top-2 ${openMenu && "opacity-0"}`}></span>
              <span className={`bg-darkPurple w-full h-0.5 absolute transition-all ease-in-out duration-300 top-4 ${openMenu && "-rotate-45 -translate-y-2"}`}></span>
            </div>
          </div>
        </div>

        <nav className={`text-darkPurple bg-lightBeige w-full h-screen absolute z-10 lg:hidden ${openMenu ? "visible" : "hidden"}`}>
          <div className="flex flex-col items-center gap-12 py-16">
            <a href="https://www.coptikk.no/bestill-synstest?single=true&current_optician=5099" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="1">
              Bestill time
            </a>
            <Link
              href="/vaare-tjenester"
              className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2"
              data-animate-in="true"
              data-animation-order="4"
              onClick={() => {
                toogleLocked(false), setOpenMenu(false);
              }}
            >
              Våre tjenester
            </Link>
            <Link
              href="/om-oss"
              className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2"
              data-animate-in="true"
              data-animation-order="3"
              onClick={() => {
                toogleLocked(false), setOpenMenu(false);
              }}
            >
              Om oss
            </Link>
            <Link
              href="/aktuelt"
              className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2"
              data-animate-in="true"
              data-animation-order="2"
              onClick={() => {
                toogleLocked(false), setOpenMenu(false);
              }}
            >
              Aktuelt
            </Link>
            <a href="https://www.coptikk.no/linsebutikk" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="5">
              Tom for linser? Bestill kontaktlinser
            </a>
          </div>
        </nav>
      </header>

      <header className="bg-lightBeige w-full hidden lg:inline-block">
        <div className="w-full max-w-[1460px] flex flex-col items-center justify-between mx-auto px-10 py-4">
          <div className="text-darkPurple w-full flex justify-end items-center gap-4" data-animate-in="true" data-animation-order="5">
            <FontAwesomeIcon icon={faArrowRightLong} />
            <a href="https://www.coptikk.no/linsebutikk" className=" text-xl font-sans tracking-wider hover:underline hover:underline-offset-2">
              Tom for linser? Bestill kontaktlinser
            </a>
          </div>

          <div className="w-full flex items-end justify-between">
            <Link href="/" className="flex flex-col gap-1 items-center">
              <BolerLogo />
              <span className="text-darkPurple font-medium uppercase tracking-wider hidden lg:inline">Bøler Synssenter</span>
            </Link>

            <nav>
              <div className="flex flex-row gap-10 items-center">
                <a href="https://www.coptikk.no/bestill-synstest?single=true&current_optician=5099" className="text-darkPurple text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="2">
                  Bestill time
                </a>
                <Link href="/vaare-tjenester" className="text-darkPurple text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="1">
                  Våre tjenester
                </Link>
                <Link href="/om-oss" className="text-darkPurple text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="3">
                  Om oss
                </Link>
                <Link href="/aktuelt" className="text-darkPurple text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="4">
                  Aktuelt
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
