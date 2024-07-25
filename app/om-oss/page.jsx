import Info from "../components/About/Info";
import Contact from "../components/About/Contact";

export const metadata = {
  title: "Bøler Synssenter | Om oss",
  description: "...",
};

export default function About() {
  return (
    <>
      <article className="w-full">
        <Info />
        <Contact />
      </article>
    </>
  );
}
