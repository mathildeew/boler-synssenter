import Link from "next/link";

export default function Hero({ heroData }) {
  const { title, text, imageUrl, imageAlt, link } = heroData;

  return (
    <section className="bg-darkBeige w-full lg:h-[500px]">
      <div className="h-full grid gap-10 lg:grid-cols-2 md:items-center">
        <img className="object-cover w-full h-full" src={imageUrl} alt={imageAlt} />
        <div className="text-darkPurple flex flex-col gap-10 items-center px-4 pb-16 md:px-10 lg:py-20">
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
