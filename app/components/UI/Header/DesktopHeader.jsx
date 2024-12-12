import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "./NavLink";
import BolerLogo from "../../BolerLogo";

export default function DesktopHeader() {
  const navLinks = [
    { to: "bestill-time", text: "Bestill time" },
    { to: "vaare-tjenester", text: "Våre tjenester" },
    { to: "vaare-merker", text: "Våre merker" },
    { to: "om-oss", text: "Om oss" },
    { to: "aktuelt", text: "Aktuelt" },
  ];

  return (
    <header className="bg-lightBlue w-full hidden lg:inline-block">
      <div className="w-full max-w-[1460px] flex flex-col justify-between mx-auto px-10 py-4">
        <div className="w-full flex justify-end items-center gap-4" data-animate-in="true" data-animation-order="6">
          <FontAwesomeIcon icon={faArrowRightLong} aria-hidden="true" />
          <a href="https://www.coptikk.no/linsebutikk" target="_blank" rel="noopener noreferrer" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2">
            Tom for linser? Bestill kontaktlinser
          </a>
        </div>

        <div className="w-full flex justify-between items-end">
          <Link href="/" className="w-fit">
            <BolerLogo />
          </Link>

          <nav>
            <div className="flex flex-row gap-10 items-center">
              {navLinks.map(({ to, text }, index) => (
                <NavLink key={to} to={to} text={text} animationOrder={index + 1} />
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
