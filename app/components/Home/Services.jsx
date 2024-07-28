import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-lightPurple w-full flex flex-col gap-10 justify-center items-center px-4 py-16 md:px-10 md:py-20">
      <div className="text-darkPurple text-center max-w-3xl flex flex-col gap-10 items-center">
        <h2 className="text-5xl text-center font-serif text-darkPurple">Vår kunnskap er din trygghet</h2>
        <p>Hos Bøler Synssenter er alle våre optikere autorisert helsepersonell, dedikert til å gi deg best mulig øyehelse. Med høy kompetanse og lang erfaring sørger vi for at du får en profesjonell og trygg opplevelse ved hver synsundersøkelse og konsultasjon. </p>
        <Link href="/vaare-tjenester" className="baseButton text-lightPurple">
          Les mer om våre tjenester
        </Link>
      </div>

      <div className="bg-white w-full max-w-[1460px] flex flex-wrap justify-center gap-8 px-8 py-14 rounded-3xl md:gap-10">
        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <img src="/icons/synsundersokelse.svg" className="w-20" />
          </div>
          <p className="font-medium">Synsundersøkelse</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <img src="/icons/oyehelse.svg" className="w-24" />
          </div>
          <p className="font-medium">Øyehelse</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <img src="/icons/kontaktlinser.svg" className="w-20" />
          </div>
          <p className="font-medium">Kontaktlinser</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <img src="/icons/synstrening.svg" className="w-20" />
          </div>
          <p className="font-medium">Synstrening</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <img src="/icons/frames.svg" className="w-24" />
          </div>
          <p className="font-medium">Innfatninger</p>
        </div>

        <div className="w-full flex flex-col items-center gap-4 sm:w-48">
          <div className="bg-lightBeige w-32 h-32 flex items-center justify-center rounded-full">
            <img src="/icons/forerkortattest.svg" className="w-24" />
          </div>
          <p className="font-medium">Førerkortattest</p>
        </div>
      </div>
    </section>
  );
}
