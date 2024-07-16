import Link from "next/link";

export default function Hero() {
  return (
    <section className="CMS bg-lightBeige w-full h-[500px] flex flex-col justify-end lg:items-end">
      <div className="bg-lightBlue bg-opacity-70 w-full py-8 flex flex-col justify-center items-center gap-8 px-4 lg:w-[500px] lg:h-full">
        <h1 className="text-base  md:text-5xl text-center font-serif">Syn og øyehelse - hva er viktig?</h1>
        <p>Eget innhold fra CMS her? Eller tom for linser?</p>
        <Link href="/" className="baseButton">
          Les mer
        </Link>
      </div>
    </section>
  );
}
