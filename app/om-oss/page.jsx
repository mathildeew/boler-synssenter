import Info from "../components/About/Info";
import Contact from "../components/About/Contact";

export default function About() {
  return (
    <>
      <h1 className="text-darkPurple my-10">Om oss</h1>
      <div className="w-full flex flex-col items-center gap-20">
        <Info />
        <Contact />
      </div>
    </>
  );
}
