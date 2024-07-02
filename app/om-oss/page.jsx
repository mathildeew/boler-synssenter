import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot, faComments } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <h1 className="my-10">Om oss</h1>

      <div className="w-full max-w-[1460px] flex flex-col items-center gap-20 px-4 pb-20 md:px-10 md:pb-28">
        <section className="flex flex-col items-center gap-6 ">
          <div className="max-w-3xl  flex flex-col gap-8">
            <span className="text-xl text-center">Bøler Synssenter har en solid historie med å betjene lokalsamfunnet på Bøler i Oslo. I januar 2024 endret vi navn fra Bøler Brillesenter & Ur til Bøler Synssenter for å bedre kunne fokusere på øyesykdommer og synsproblemer. Vi gleder oss til å fortsette å hjelpe folka på Bøler med enda bedre synstjenester.</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum doloremque architecto, obcaecati eum delectus commodi officiis dolore possimus, id perspiciatis? Temporibus laborum reiciendis quos magni? Non molestiae incidunt voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cumque deleniti hic soluta, fugiat quaerat eligendi explicabo nemo, incidunt quisquam assumenda officia numquam maxime quasi non vero totam voluptas minima!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum doloremque architecto, obcaecati eum delectus commodi officiis dolore possimus, id perspiciatis? Temporibus laborum reiciendis quos magni? Non molestiae incidunt voluptatum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cumque deleniti hic soluta, fugiat quaerat eligendi explicabo nemo, incidunt quisquam assumenda officia numquam maxime quasi non vero totam voluptas minima!</p>
          </div>

          <div className="bg-lightBeige w-full  text-darkPurple flex flex-col gap-10 items-center p-8 rounded-xl px-6 sm:px-7 md:px-9 2xl:px-12 py-16 lg:py-20 md:gap-12">
            <div className="text-center max-w-3xl">
              <h2>Våre tjenester</h2>
              <p>Hos Bøler Synssenter er alle våre optikere autorisert helsepersonell, dedikert til å gi deg best mulig øyehelse. Med høy kompetanse og lang erfaring sørger vi for at du får en profesjonell og trygg opplevelse ved hver synsundersøkelse og konsultasjon. Vår kunnskap er din trygghet.</p>
            </div>

            <div className="bg-white w-full flex flex-wrap justify-center gap-8 px-8 py-14 rounded-3xl md:gap-12">
              <div className="w-full flex flex-col items-center gap-4   sm:w-40">
                <div className="bg-lightBeige w-28 h-28 flex items-center justify-center rounded-full">
                  <img src="/icons/synsundersokelse.svg" className="w-16" />
                </div>
                <p className="font-medium">Synsundersøkelse</p>
              </div>

              <div className="w-full flex flex-col items-center gap-4 sm:w-40">
                <div className="bg-lightBeige w-28 h-28 flex items-center justify-center rounded-full">
                  <img src="/icons/oyehelse.svg" className="w-16" />
                </div>
                <p className="font-medium">Øyehelse</p>
              </div>

              <div className="w-full flex flex-col items-center gap-4 sm:w-40">
                <div className="bg-lightBeige w-28 h-28 flex items-center justify-center rounded-full">
                  <img src="/icons/kontaktlinser.svg" className="w-12" />
                </div>
                <p className="font-medium">Kontaktlinser</p>
              </div>

              <div className="w-full flex flex-col items-center gap-4 sm:w-40">
                <div className="bg-lightBeige w-28 h-28 flex items-center justify-center rounded-full">
                  <img src="/icons/synstrening.svg" className="w-16" />
                </div>
                <p className="font-medium">Synstrening</p>
              </div>

              <div className="w-full flex flex-col items-center gap-4 sm:w-40">
                <div className="bg-lightBeige w-28 h-28 flex items-center justify-center rounded-full">
                  <img src="/icons/forerkortattest.svg" className="w-16" />
                </div>
                <p className="font-medium">Førerkortattest</p>
              </div>
            </div>

            <Link href="/vaare-tjenester" className="baseButton text-lightBeige ">
              Les mer om våre tjenester
            </Link>
          </div>
        </section>

        <div className=" w-full flex flex-col gap-10">
          <div className="flex flex-col gap-20 lg:flex-row">
            <div className="bg-lightBlue p-8 rounded-xl flex flex-col gap-12 ">
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
        </div>
      </div>
    </>
  );
}
