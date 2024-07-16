import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faComments } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="bg-lightBlue w-full flex flex-col items-center gap-10">
      <div className="max-w-[1460px] flex flex-col gap-20 lg:flex-row">
        <div className="flex flex-col gap-12 p-8 rounded-xl  ">
          <h2 className="text-center">Kontakt oss</h2>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faClock} size="xl" />
              <h3>Åpningstider</h3>
            </div>
            <div className="flex flex-col">
              <p>Mandag - fredag: 10.00 - 19.00</p>
              <p>Lørdag: 10.00 - 18.00</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faLocationDot} size="xl" />
              <h3>Slik finner du frem til oss</h3>
            </div>
            <p>Vi ligger sentralt plassert på Bøler Senter, kun et steinkast unna t-bane og buss. Gratis parkering på senteret inntil to timer!</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <FontAwesomeIcon icon={faComments} size="xl" />
              <h3>Ta kontakt med oss direkte</h3>
            </div>
            <p>Send oss en e-post på post@bolersynssenter.no, så tar vi kontakt så fort vi kan. Du kan også ringe oss på 22 26 22 68.</p>
          </div>
          <Link href="/synsundersokelse" className="baseButton text-lightBlue mx-auto ">
            Bestill synsundersøkelse
          </Link>
        </div>

        <div className="w-full h-96 md:h-auto">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.977325547998!2d10.842735977093179!3d59.882725774887035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f67a3530de5%3A0x102585b627075bb2!2sC)Optikk!5e0!3m2!1sno!2sno!4v1716321840745!5m2!1sno!2sno" width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}
