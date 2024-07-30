import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/urlFor";

export const PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="mb-6">
          <div className="w-full rounded-xl overflow-hidden">
            <Image src={urlFor(value).url()} alt={value.alt} width={0} height={0} style={{ height: "fit", objectFit: "cover" }} layout="responsive" />
          </div>
          {value.desc && <figcaption className="text-sm text-center md:text-lg">{value.desc}</figcaption>}
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-3">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-3">{children}</ol>,
  },

  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h2 className="text-4xl font-sans text-left font-semibold mb-3">{children}</h2>,
    h2: ({ children }) => <h3 className="text-3xl font-sans font-medium  tracking-wide">{children}</h3>,
    h3: ({ children }) => <h4 className="text-2xl font-sans font-medium tracking-wide">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="text-xl border-l-darkPurple border-l-4 px-2">{children}</blockquote>,
    highlighted: ({ children }) => <span className="text-3xl text-center bg-lightPurple bg-opacity-75 p-2 inline-block leading-10 rounded-xl my-5">{children}</span>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;

      return (
        <Link href={value.href} rel={rel}>
          {children}
        </Link>
      );
    },
  },
};
