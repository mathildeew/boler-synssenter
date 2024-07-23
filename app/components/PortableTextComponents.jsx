import Link from "next/link";
import { urlFor } from "../../sanity/urlFor";

export const PortableTextComponents = {
  types: {
    image: ({ value }) => <img src={urlFor(value).url()} className="w-full rounded-xl mb-12" />,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-3">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-3">{children}</ol>,
  },

  block: {
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-sans text-left font-semibold mb-3">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-sans font-medium  tracking-wide">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-sans font-medium tracking-wide">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-sans font-medium tracking-wide">{children}</h4>,
    h5: ({ children }) => <h5 className="text-xl font-sans font-medium tracking-wide">{children}</h5>,
    h6: ({ children }) => <h5 className="text-xl font-sans font-medium tracking-wide">{children}</h5>,
    blockquote: ({ children }) => <blockquote className="text-xl border-l-darkPurple border-l-4 px-2">{children}</blockquote>,
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
