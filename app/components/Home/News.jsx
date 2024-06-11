// "use client";
// import { useState } from "react";
import { getDocuments } from "../../../sanity/sanity-utils";

import RenderNews from "../Home/RenderNews";

export default async function News() {
  // const [hover, setHover] = useState(false);

  // const articles = await getData();
  const articles = getDocuments();

  return (
    <>
      <section className="bg-lightBlue w-full flex flex-col items-center justify-center gap-10 pl-4 py-16 md:px-10 md:py-28 ">
        <h2 className="text-center">Nytt fra oss</h2>
        <RenderNews data={articles} />
        <button className="baseButton">Se alle artikler</button>
      </section>
    </>
  );
}
