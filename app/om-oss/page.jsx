import Info from "../components/About/Info";
import Contact from "../components/About/Contact";

export default function About() {
  return (
    <div className="w-full flex flex-col items-center gap-20 px-4 py-16 md:px-10 md:py-28">
      <Info />
      <Contact />
    </div>
  );
}
