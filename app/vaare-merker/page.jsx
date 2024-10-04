import { client } from "../../sanity/sanity-utils";
import apiQueries from "../../sanity/apiQueries";
import RenderBrands from "../components/Brands/RenderBrands";
import { getMetadata } from "../hooks/getMetadata";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export async function generateMetadata() {
  return await getMetadata("brandsMetadata");
}

export default function OurBrands() {
  return (
    <div className="w-full max-w-[1460px] flex flex-col gap-20 items-center px-4 py-16 md:px-10 md:py-20" data-animate-in="true">
      <div className="w-full max-w-[1000px] flex flex-col gap-8 items-center md:gap-12">
        <h1>Våre merker</h1>
        <RenderBrands />
      </div>
    </div>
  );
}
