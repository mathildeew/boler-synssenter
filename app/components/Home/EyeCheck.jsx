import Link from "next/link";

export default function EyeCheck() {
  return (
    <section className="bg-lightBeige px-4 py-16 flex flex-col gap-6 items-center">
      <img
        className="w-full h-96 object-cover rounded-3xl"
        src="vicko-mozara-m82uh_vamhg-unsplash.jpg"
      />
      <h1 className="text-darkPurple">Ta vare på synet ditt</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non cupiditate
        deserunt, quae labore beatae odio voluptatum ut harum corrupti maxime
        doloribus, quos repellat velit iste ratione quasi! Ut, non fugit.
      </p>
      <Link href="/synsundersokelse" className="baseButton text-lightBeige">
        Bestill synsundersøkelse
      </Link>
    </section>
  );
}
