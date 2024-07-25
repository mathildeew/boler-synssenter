import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import News from "./components/Home/News";

export const metadata = {
  title: "Bøler Synssenter",
  description: "...",
};

export default function Home() {
  return (
    <>
      <div data-animate-in="true" data-animation-order="1">
        <Hero />
        <Services />
        <News />
      </div>
    </>
  );
}
