import Link from "next/link";

export default function EyeCheck() {
  return (
    <section className="bg-lightBeige px-4 py-16 flex flex-col gap-8 items-center justify-center md:flex-row md:justify-between md:px-10 md:py-28">
      <img className=" h-72 object-cover rounded-3xl md:w-1/3" src="harpreet-singh-ioYYWWX2fjk_downsized.jpg" />
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-darkPurple">Ta vare på synet ditt</h1>
        <p>Å passe på synet er avgjørende for å opprettholde god livskvalitet og forebygge alvorlige øyesykdommer. Regelmessige synsundersøkelser kan avdekke tidlige tegn på problemer som kan behandles før de utvikler seg, og sikre at du alltid har riktig brille- eller kontaktlinsekorreksjon for best mulig syn.</p>
        <Link href="/synsundersokelse" className="baseButton text-lightBeige ">
          Bestill synsundersøkelse
        </Link>
      </div>
    </section>
  );
}
