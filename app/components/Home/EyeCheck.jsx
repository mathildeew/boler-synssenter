import Link from "next/link";

export default function EyeCheck() {
  return (
    <section className="bg-lightBeige w-full flex justify-center px-4 py-16 md:px-10 md:py-28">
      <div className="max-w-[1460px] grid gap-12 md:grid-cols-2 md:items-center">
        <img className="object-cover rounded-3xl" src="harpreet-singh-ioYYWWX2fjk_downsized.jpg" />
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-5xl text-center font-serif text-darkPurple">Ta vare på synet ditt</h1>
          <p>Å passe på synet er avgjørende for å opprettholde god livskvalitet og forebygge alvorlige øyesykdommer. Regelmessige synsundersøkelser kan avdekke tidlige tegn på problemer som kan behandles før de utvikler seg, og sikre at du alltid har riktig brille- eller kontaktlinsekorreksjon for best mulig syn.</p>
          <Link href="bestill-time" className="baseButton text-lightBeige ">
            Bestill time
          </Link>
        </div>
      </div>
    </section>
  );
}
