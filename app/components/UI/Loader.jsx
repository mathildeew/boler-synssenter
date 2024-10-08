export default function Loader() {
  return (
    <section className="h-screen flex flex-col gap-6 items-center justify-center">
      <div className="loader"></div>

      <div className="animate-pulse text-xl font-sans ">
        <p>Laster inn...</p>
      </div>
    </section>
  );
}
