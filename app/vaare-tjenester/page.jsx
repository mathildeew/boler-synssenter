import Link from "next/link";

export default function Tjenester() {
  return (
    <div className="max-w-[1460px] grid gap-20 px-4 md:px-10">
      <h1 className="text-darkPurple">Våre tjenester</h1>

      <div className="text-darkPurple grid grid-cols-1 grid-rows-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
        <img src="/alexander-grey-NeRKgBUUDjM-downsized.jpg" className="rounded-3xl" />
        <div className="grid gap-4 justify-center md:gap-6">
          <h2>Synet er vår viktigste sans</h2>
          <p className="text-md">Godt syn og god øyehelse er svært viktig, da øynene våre bidrar med hele 80 prosent av sanseinntrykkene. Vi tilbyr vi omfattende synsundersøkselser som inkluderer målinger og tester som sikrer øynene dine har de beste forutsetninger for et optimalt syn.</p>
          <Link href="/bestill-time" className="baseButton text-lightBeige">
            Bestill time
          </Link>
        </div>
      </div>

      <section className="text-darkPurple w-full grid justify-center items-center gap-10 sm:grid-cols-2">
        <div className=" bg-lightBlue flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center gap-2">
            <img src="/icons/synsundersokelse.svg" className="w-32" />
            <h2 className="font-medium">Synsundersøkelse</h2>
          </div>
          <p>Full synsundersøkelse inkluderer alltid sjekk av brillestyrker, trykkmåling og OCT. Vi tilpasser etter dine behov og supplerer med nødvendige tester. Ta gjerne med brillene dine, så får de i det minste en service! Synet endrer seg gjennom hele livet og derfor anbefaler som regel å foreta en synsundersøkelse hvert 2. år.</p>
        </div>
        <div className="bg-lightPurple flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl">
          <div className="flex flex-col items-center gap-2">
            <img src="/icons/oyehelse.svg" className="w-36" />
            <h2 className="font-medium">Øyehelse</h2>
          </div>
          <p>En vurdering av fremre og bakre del av øyet er viktig for å sikre god øyehelse og optimalt syn. Dette inkluderer bruk av avansert teknologi som OCT, som gir detaljerte bilder av strukturer som netthinnen og synsnerven. Ved å benytte OCT kan våre optikere oppdage tidlige tegn på øyesykdommer og tilstander, slik at du kan få rettidig behandling og omsorg for å bevare synet ditt.</p>
        </div>

        <div className="bg-white flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl">
          <div className="flex flex-col items-center gap-2 ">
            <img src="/icons/kontaktlinser.svg" className="w-30" />
            <h2 className="font-medium">Kontaktlinser</h2>
          </div>
          <p>Kontaktlinser gir deg friheten til å utforske verden uten begrensninger. Hos oss tilbyr vi et bredt utvalg av kontaktlinser, fra daglige til månedlige varianter, som passer din livsstil og synsbehov. Våre optikere vil veilede deg gjennom valget og tilpasse linser som sikrer komfort og optimal synsskarphet.</p>
        </div>

        <div className="bg-lightBlue flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center gap-2">
            <img src="/icons/synstrening.svg" className="w-36" />
            <h2 className="font-medium">Briller og innfatninger</h2>
          </div>
          <p>Vi vet hvor viktig det er å finne den perfekte innfatningen for dine briller. Hos oss tilbyr vi personlig rådgivning og ekspertise for å hjelpe deg med å velge innfatning som passer din stil, ansiktsform og synsbehov. Vår kolleksjon inneholder et bredt utvalg av moderne og klassiske design fra anerkjente merker, slik at du kan være sikker på å finne briller som både ser bra ut og føles komfortable.</p>
        </div>

        <div className="bg-white flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl">
          <div className="flex flex-col items-center gap-2">
            <img src="/icons/synstrening.svg" className="w-36" />
            <h2 className="font-medium">Synstrening</h2>
          </div>
          <p>Samsyn er evnen til å samarbeide mellom begge øyne for å oppfatte et klart og stabilt bilde. Gjennom synstrening kan denne evnen forbedres, noe som er spesielt nyttig for barn og voksne med problemer der øynene ikke jobber godt nok sammen. Hos oss tilbyr vi skreddersydde synsøvelser og behandlinger for å styrke samsynet, slik at du kan oppnå bedre øyehelse og visuell komfort i hverdagen.</p>
        </div>
        <div className="bg-lightBlue flex flex-wrap justify-center gap-4 px-8 py-14 rounded-3xl">
          <div className="flex flex-col items-center gap-2 ">
            <img src="/icons/forerkortattest.svg" className="w-36" />
            <h2 className="font-medium">Førerkortattest</h2>
          </div>
          <p>Når du for første gang skal ta førerkort må du fremlegge en attest fra optikeren eller lege på at du oppfyller alle synskravene for kjøring. Vi foretar alle nødvendige målinger og sender inn attesten for deg. Husk at førerkortattesten ikke kan være eldre enn 3 måneder når du skal ta oppkjøring.</p>
        </div>
      </section>
    </div>
  );
}
