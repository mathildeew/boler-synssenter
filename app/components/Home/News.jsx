// import { useState } from "react";
import { useAPI } from "../../../sanity/sanity-utils";
import apiQueries from "../../../sanity/apiQueries";
import RenderNews from "../Home/RenderNews";

export default async function News() {
  // const [hover, setHover] = useState(false);

  const articles = await useAPI(apiQueries().articles);

  // Skal kun hente fire første artikler!

  return (
    <>
      <section className="bg-lightBlue w-full flex flex-col items-center justify-center gap-12 pl-4 py-16 md:px-10 md:py-28 ">
        <h2 className="text-5xl text-center font-serif text-darkPurple">Nytt fra oss</h2>
        <RenderNews data={articles} />
        <button className="baseButton">Se alle nyheter</button>
      </section>
    </>
  );
}
