"use client";
import { useParams } from "next/navigation";

export default async function Article() {
  const slug = useParams();
  console.log(slug);

  return (
    <section>
      <p></p>
    </section>
  );
}
