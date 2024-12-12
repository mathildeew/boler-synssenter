import Link from "next/link";
import BolerLogo from "../../BolerLogo";
import { useState } from "react";
import { useLockBodyScroll, useToggle } from "react-use";
import { NavLink } from "./NavLink";

export default function MobileHeader() {
  const [openMenu, setOpenMenu] = useState(false);
  const [locked, toogleLocked] = useToggle(false);

  useLockBodyScroll(locked);

  const handleMenuToggle = () => {
    toogleLocked();
    setOpenMenu((prev) => !prev);
  };

  const navLinks = [
    { to: "bestill-time", text: "Bestill time" },
    { to: "vaare-tjenester", text: "Våre tjenester" },
    { to: "vaare-merker", text: "Våre merker" },
    { to: "om-oss", text: "Om oss" },
    { to: "aktuelt", text: "Aktuelt" },
  ];

  return (
    <header>
      <div className="bg-lightBlue w-full flex justify-between items-center px-4 py-4 relative z-20 lg:hidden">
        <Link href="/" aria-label="Logo" title="Forside">
          <BolerLogo />
        </Link>

        <div className="flex items-center gap-2 " onClick={handleMenuToggle} aria-label="Open and close the menu" aria-expanded={openMenu}>
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
          {navLinks.map(({ to, text }, index) => (
            <NavLink
              key={to}
              to={to}
              text={text}
              animationOrder={index + 1}
              isMobile={true}
              onClick={() => {
                toogleLocked(false);
                setOpenMenu(false);
              }}
            />
          ))}

          <a href="https://www.coptikk.no/linsebutikk" target="_blank" rel="noopener noreferrer" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order="6">
            Tom for linser? Bestill kontaktlinser
          </a>
        </div>
        <img src="/dotted.svg" className="absolute bottom-20" data-animate-in="true" data-animation-order="7" aria-hidden="true" />
      </nav>
    </header>
  );
}
