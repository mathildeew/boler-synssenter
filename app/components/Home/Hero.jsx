import Image from "next/image";
import Link from "next/link";

// Revalidate the page every 60 seconds
export const revalidate = 1;

export default function Hero({ heroData }) {
  const { title, text, imageUrl, imageAlt, link } = heroData;

  return (
    <section className="bg-darkBeige w-full lg:h-[500px]">
      <div className="h-full grid lg:grid-cols-2 md:items-center">
        <div className="w-full h-96 relative lg:h-full">
          <Image src={imageUrl} alt={imageAlt} objectFit="cover" fill="true" className="w-full h-full top-0 left-0 object-cover" />
        </div>
        <div className="text-darkPurple flex flex-col gap-10 items-center px-4 py-10 md:px-10 lg:py-0">
          <h1>{title}</h1>
          <span className="text-2xl text-center">{text}</span>
          <Link href={link.url} className="baseButton text-lightBeige">
            {link.urlText}
          </Link>
        </div>
      </div>
    </section>
  );
}
