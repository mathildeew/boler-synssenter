// "use client";
import Link from "next/link";
// import { useState } from "react";
import { getData } from "../../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "next-sanity";

export default async function News() {
  // const [hover, setHover] = useState(false);

  const articles = await getData();
  console.log(articles);

  return (
    <section className="bg-lightBlue w-full flex flex-col items-center justify-center gap-10 pl-4 py-16 md:px-10 md:py-28 ">
      <h2 className="text-center">Nytt fra oss</h2>
      <div className="max-w-[1460px] grid gap-6 grid-cols-news overflow-auto scroll-snap-mandatory  gridExpand:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {articles.map((article) => (
          <Link key={article._id} href={`/artikler/${article.slug}`}>
            <div className="flex flex-col gap-3 snap-center">
              <div className="overflow-hidden rounded-3xl">
                <img className="w-96 h-72 object-cover transition-all ease-in-out duration-300" src={article.image} alt={article.name} />
              </div>
              <h3>{article.name}</h3>
              <PortableText value={article.intro}></PortableText>
            </div>
          </Link>
        ))}
      </div>

      <button className="baseButton">Se alle artikler</button>
    </section>
  );
}
