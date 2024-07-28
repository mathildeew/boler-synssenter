import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <section className="text-darkPurple h-[700px] flex flex-col items-center justify-center gap-10 px-4 py-16 md:px-10 md:py-20">
      <h1>Side ikke funnet</h1>
      <FontAwesomeIcon icon={faCat} size="3x" />
      <Link href="/" className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2">
        Gå til forsiden
      </Link>
    </section>
  );
}
