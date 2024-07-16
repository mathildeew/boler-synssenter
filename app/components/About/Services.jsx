import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-lightBlue text-darkPurple w-full flex flex-col gap-10 items-center p-8 rounded-xl px-6 sm:px-7 md:px-9 2xl:px-12 py-16 lg:py-20 md:gap-12">
      <h2>Våre tjenester</h2>

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
    </section>
  );
}
