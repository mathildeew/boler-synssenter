import Image from "next/image";
import Link from "next/link";

export default function Hero({ heroData }) {
  const { title, text, imageUrl, imageAlt, link } = heroData;

  return (
    <section className="bg-darkBeige w-full lg:h-[500px]">
      <div className="h-full grid lg:grid-cols-2 md:items-center">
        <div className="w-full h-full">
          <Image src={imageUrl} alt={imageAlt} width={1000} height={1000} objectFit="contain" style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="text-darkPurple flex flex-col gap-10 items-center px-4 py-16 md:px-10 lg:py-0">
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
