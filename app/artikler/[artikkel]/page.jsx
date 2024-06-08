"use client";
import { useParams } from "next/navigation";
import { getData } from "../../../sanity/sanity-utils";

export default async function Article() {
  const slug = useParams();
  console.log(slug);

  const article = await getData(slug);
  return (
    <section>
      <p></p>
    </section>
  );
}
