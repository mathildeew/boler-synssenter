import Link from "next/link";

export default function Services() {
  return (
    <section className=" bg-lightPurple text-darkPurple flex flex-col items-center gap-10 rounded-xl ,x-4 px-4 py-16 md:px-10 md:py-16">
      <h2 className="text-5xl text-center font-serif">Våre tjenester</h2>
      <div className="bg-white flex flex-wrap justify-center gap-8 px-8 py-14 rounded-3xl md:gap-12">
        <div className="w-full flex flex-col items-center gap-4 sm:w-40">
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

      <Link href="/vaare-tjenester" className="baseButton text-lightBeige">
        Les mer om våre tjenester
      </Link>
    </section>
  );
}
