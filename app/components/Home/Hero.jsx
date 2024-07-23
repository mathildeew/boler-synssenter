import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full flex justify-center px-4 py-16 md:px-10 md:py-28">
      <div className="max-w-[1460px] grid gap-12 md:grid-cols-2 md:items-center">
        <img className="object-cover rounded-3xl" src="/alexander-grey-NeRKgBUUDjM-downsized.jpg" />
        <div className="text-darkPurple flex flex-col gap-10 items-center">
          <h1 className="">Ta vare på synet ditt</h1>
          <span className="text-2xl">Å passe på synet er avgjørende for å opprettholde god livskvalitet og forebygge alvorlige øyesykdommer</span>
          <Link href="bestill-time" className="baseButton text-lightBeige">
            Bestill time
          </Link>
        </div>
      </div>
    </section>
  );
}
