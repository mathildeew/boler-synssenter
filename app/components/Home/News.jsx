import { useAPI } from "../../../sanity/sanity-utils";
import apiQueries from "../../../sanity/apiQueries";
import RenderNews from "../Home/RenderNews";
import Link from "next/link";

// Revalidate the page every 60 seconds
export const revalidate = 60;

export default async function News() {
  const allArticles = await useAPI(apiQueries().articles);
  const articles = allArticles.slice(0, 4);

  return (
    <section className="bg-lightBlue w-full flex flex-col items-center justify-center gap-12 pl-4 py-16 md:px-10 md:py-28 ">
      <h2 className="text-5xl text-center font-serif text-darkPurple">Nytt fra oss</h2>
      <RenderNews data={articles} />
      <Link href="aktuelt" className="baseButton text-lightBlue">
        Se alle nyheter
      </Link>
    </section>
  );
}
