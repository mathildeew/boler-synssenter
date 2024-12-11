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
        <div className="bg-lightBlue w-full flex justify-between items-center px-4 py-4 relative z-20 lg:hidden">
          <Link href="/" aria-label="Logo" title="Forside">
            <BolerLogo />
          </Link>

          <div
            className="flex items-center gap-2 "
            onClick={() => {
              toogleLocked(), setOpenMenu(!openMenu);
            }}
            aria-label="Open and close the menu"
          >
            <span className="text-black text-sm uppercase">{openMenu ? "Lukk" : "Meny"}</span>
            <div className="w-7 h-5 relative">
              <span className={`bg-black w-full h-0.5 absolute transition-all ease-in-out duration-300 top-0 ${openMenu && "rotate-45 translate-y-2"}`}></span>
              <span className={`bg-black w-full h-0.5 absolute transition-all ease-in-out duration-300 top-2 ${openMenu && "opacity-0"}`}></span>
              <span className={`bg-black w-full h-0.5 absolute transition-all ease-in-out duration-300 top-4 ${openMenu && "-rotate-45 -translate-y-2"}`}></span>
            </div>
          </div>
        </div>

        <nav className={`bg-lightBlue w-full h-screen absolute z-10 lg:hidden ${openMenu ? "visible" : "hidden"}`}>
          <div className="flex flex-col items-center gap-12 py-16">
            <Link
              href="/bestill-time"
              className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2"
              data-animate-in="true"
              data-animation-order="1"
              onClick={() => {
                toogleLocked(false), setOpenMenu(false);
              }}
            >
              Bestill time
            </Link>
            <Link
              href="/vaare-tjenester"
              className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2"
              data-animate-in="true"
              data-animation-order="2"
              onClick={() => {
                toogleLocked(false), setOpenMenu(false);
              }}
            >
              Våre tjenester
            </Link>
            <Link
              href="/vaare-merker"
              className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2"
              data-animate-in="true"
              data-animation-order="3"
              onClick={() => {
                toogleLocked(false), setOpenMenu(false);
              }}
            >
              Våre merker
            </Link>
            <Link
              href="/om-oss"
              className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2"
              data-animate-in="true"
              data-animation-order="4"
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
              data-animation-order="5"
              onClick={() => {
                toogleLocked(false), setOpenMenu(false);
              }}
            >
              Aktuelt
            </Link>
            <a href="https://www.coptikk.no/linsebutikk" target="_blank" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="6">
              Tom for linser? Bestill kontaktlinser
            </a>
          </div>
          <img src="/dotted.svg" className="absolute bottom-20" data-animate-in="true" data-animation-order="7" />
        </nav>
      </header>

      <header className="bg-lightBlue w-full hidden lg:inline-block">
        <div className="w-full max-w-[1460px] flex flex-col justify-between mx-auto px-10 py-4">
          <div className="w-full flex justify-end items-center gap-4" data-animate-in="true" data-animation-order="6">
            <FontAwesomeIcon icon={faArrowRightLong} />
            <a href="https://www.coptikk.no/linsebutikk" target="_blank" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2">
              Tom for linser? Bestill kontaktlinser
            </a>
          </div>

          <div className="w-full flex justify-between items-end">
            <Link href="/" className="w-fit">
              <BolerLogo />
            </Link>

            <nav>
              <div className="flex flex-row gap-10 items-center">
                <Link href="/bestill-time" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="1">
                  Bestill time
                </Link>
                <Link href="/vaare-tjenester" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="2">
                  Våre tjenester
                </Link>
                <Link href="/vaare-merker" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="3">
                  Våre merker
                </Link>
                <Link href="/om-oss" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="4">
                  Om oss
                </Link>
                <Link href="/aktuelt" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="5">
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
