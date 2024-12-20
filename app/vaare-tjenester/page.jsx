import Link from "next/link";

import { client } from "../../sanity/sanity-utils";
import { getMetadata } from "../hooks/getMetadata";
import apiQueries from "../../sanity/apiQueries";
import RenderServices from "../components/Services/RenderServices";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  return await getMetadata("servicesMetadata");
}

export default async function Tjenester() {
  const servicesInfo = await client.fetch(apiQueries().servicesInfo);

  return (
    <div className="max-w-[1460px] flex flex-col gap-20 items-center px-4 py-16 md:px-10 md:py-20" data-animate-in="true">
      <div className="max-w-[1000px] flex flex-col gap-8 items-center md:gap-12">
        <h1>Våre tjenester</h1>
        <span className="text-textBlue text-xl text-center md:text-3xl">{servicesInfo.intro}</span>
        <Link href="/bestill-time" className="baseButton text-white hover:bg-logoBlue">
          Bestill time
        </Link>
      </div>

      <RenderServices />
    </div>
  );
}
