export const metadata = {
  title: "En feil har oppstått!",
};

export default function Error() {
  return (
    <section className="text-textBlue h-[700px] flex flex-col items-center justify-center gap-10 px-4 py-16 md:px-10 md:py-20">
      <h1>En feil har oppstått!</h1>
      <p>Det ser ut som noe har gått litt i surr. Prøv igjen senere.</p>
    </section>
  );
}
