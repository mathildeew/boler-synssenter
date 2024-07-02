import Link from "next/link";

export default function Tjenester() {
  return (
    <div className="max-w-[1460px] px-4 md:px-10">
      <h1 className="mb-20">Våre tjenester</h1>

      <div className="flex flex-col gap-5 items-center mb-20 md:flex-row md:gap-12">
        <div className="">
          <img src="/alexander-grey-NeRKgBUUDjM-downsized.jpg" className="rounded-3xl" />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <h2>Synet er vår viktigste sans</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi nisi necessitatibus vel laudantium officiis minima quod animi ipsum id, reiciendis sed perferendis optio porro vitae ex, sequi harum eius veniam.</p>
          <Link href="/bestill-time" className="baseButton text-lightBeige">
            Bestill time
          </Link>
        </div>
      </div>

      <section className="w-full  flex flex-col justify-center items-center gap-10 ">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-lightBlue flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl first:sm:col-span-2">
            <div className="flex flex-col items-center">
              <img src="/icons/synsundersokelse.svg" className="w-32" />
              <h2 className="font-medium">Synsundersøkelse</h2>
            </div>
            <p>Inkluderer full sjekk av brillestyrker, trykkmåling, OCT og annet. Tilpasses etter dine behov. Ta gjerne med brillene dine, så får de i det minste en service! 60 min</p>
          </div>

          <div className="bg-lightPurple flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl first:sm:col-span-2">
            <div className="flex flex-col items-center">
              <img src="/icons/oyehelse.svg" className="w-36" />
              <h2 className="font-medium">Øyehelse</h2>
            </div>
            <p>Inkluderer full sjekk av brillestyrker, trykkmåling, OCT og annet. Tilpasses etter dine behov. Ta gjerne med brillene dine, så får de i det minste en service! 60 min</p>
          </div>

          <div className="bg-lightBeige flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl first:sm:col-span-2">
            <div className="flex flex-col items-center">
              <img src="/icons/kontaktlinser.svg" className="w-30" />
              <h2 className="font-medium">Kontaktlinser</h2>
            </div>
            <p>Inkluderer full sjekk av brillestyrker, trykkmåling, OCT og annet. Tilpasses etter dine behov. Ta gjerne med brillene dine, så får de i det minste en service! 60 min</p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-lightPurple flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl last:sm:col-span-2">
            <div className="flex flex-col items-center">
              <img src="/icons/synstrening.svg" className="w-36" />
              <h2 className="font-medium">Synstrening</h2>
            </div>
            <p>Inkluderer full sjekk av brillestyrker, trykkmåling, OCT og annet. Tilpasses etter dine behov. Ta gjerne med brillene dine, så får de i det minste en service! 60 min</p>
          </div>

          <div className="bg-lightBlue flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl last:sm:col-span-2">
            <div className="flex flex-col items-center">
              <img src="/icons/forerkortattest.svg" className="w-36" />
              <h2 className="font-medium">Førerkortattest</h2>
            </div>
            <p>Inkluderer full sjekk av brillestyrker, trykkmåling, OCT og annet. Tilpasses etter dine behov. Ta gjerne med brillene dine, så får de i det minste en service! 60 min</p>
          </div>
        </div>
      </section>
    </div>
  );
}
