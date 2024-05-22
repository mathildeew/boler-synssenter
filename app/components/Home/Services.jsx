export default function Services() {
  return (
    <section className="bg-lightPurple px-4 py-16 flex flex-col gap-10">
      <div className="flex flex-col items-center">
        <h2>Våre tjenester</h2>
        <p>Hos Bøler Synssenter er alle våre optikere autorisert helsepersonell Lorem ipsum dolor sit amet consectetur adipisicing elit.!</p>
      </div>

      <div className="bg-white rounded-3xl flex flex-wrap justify-center text-center gap-8 py-10">
        <div className="service">
          <div className="circle"></div>
          <p className="font-medium">Synsundersøkelse</p>
        </div>

        <div className="service">
          <div className="circle"></div>
          <p className="font-medium">Øyehelse</p>
        </div>

        <div className="service">
          <div className="circle"></div>
          <p className="font-medium">Kontaktlinser</p>
        </div>

        <div className="service">
          <div className="circle "></div>
          <p className="font-medium">Synstrening</p>
        </div>

        <div className="service">
          <div className="circle"></div>
          <p className="font-medium">Førerkortattest</p>
        </div>
      </div>
    </section>
  );
}
