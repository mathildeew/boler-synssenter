import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default function Hero({ heroData }) {
  const { title, text, imageUrl, imageAlt, link } = heroData;

  return (
    <section className="bg-skyBlue w-full lg:h-[500px]">
      <div className="h-full grid lg:grid-cols-2 md:items-center">
        <div className="w-full h-72 relative md:h-96 lg:h-full">
          <Image src={imageUrl} alt={imageAlt} fill="true" sizes="100" priority={true} placeholder="blur" blurDataURL="jpg" className="w-full h-full top-0 left-0 object-cover" />
        </div>
        <div className="text-textBlue flex flex-col gap-10 items-center px-4 py-10 md:px-10 lg:py-0">
          <h1>{title}</h1>
          <span className="text-2xl text-center">{text}</span>
          <Link href={link.url} className="baseButton text-white hover:bg-logoBlue">
            {link.urlText}
          </Link>
        </div>
      </div>
    </section>
  );
}
