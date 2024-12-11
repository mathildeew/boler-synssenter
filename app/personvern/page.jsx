import { client } from "../../sanity/sanity-utils";
import { getMetadata } from "../hooks/getMetadata";
import { PortableText } from "next-sanity";
import { PortableTextComponents } from "../components/UI/PortableTextComponents";
import apiQueries from "../../sanity/apiQueries";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  return await getMetadata("privacyMetadata");
}

export default async function Privacy() {
  const privacyData = await client.fetch(apiQueries().privacy);

  return (
    <div className="w-full max-w-[1460px] flex flex-col gap-20 items-center px-4 py-16 md:px-10 md:py-20" data-animate-in="true">
      <div className="w-full max-w-[1000px] flex flex-col gap-8 items-center md:gap-12">
        <h1>Personvern</h1>
        <span className="text-textBlue text-xl text-center md:text-3xl">{privacyData.intro}</span>

        <div>
          <PortableText value={privacyData.content} components={PortableTextComponents} />
        </div>
      </div>
    </div>
  );
}
