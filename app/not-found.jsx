import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <section className="text-textBlue h-[700px] flex flex-col items-center justify-center gap-10 px-4 py-16 md:px-10 md:py-20">
      <FontAwesomeIcon icon={faEyeLowVision} size="3x" />
      <h1>Denne siden er ute av fokus!</h1>
      <p>Det ser ut som noe har gått litt i surr. Men vi kan hjelpe deg tilbake på rett vei – ta en titt på forsiden vår, der ser du garantert noe skarpt!</p>
      <Link href="/" className="text-xl font-sans tracking-wider flex flex-row items-center gap-2 hover:underline hover:underline-offset-2">
        Gå til forsiden
        <FontAwesomeIcon icon={faArrowRightLong} size="xs" />
      </Link>
    </section>
  );
}
