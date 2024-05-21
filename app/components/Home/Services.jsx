export default function Services() {
  return (
    <section className="px-6">
      <h2>Våre tjenester</h2>

      <div className="grid grid-cols-2 gap-y-16 items-center">
        <div className="service">
          <div className="circle bg-lightBlue"></div>
          <p>Synsundersøkelse</p>
        </div>

        <div className="service">
          <div className="circle bg-lightBeige"></div>
          <p>Øyehelse</p>
        </div>

        <div className="service">
          <div className="circle bg-skyBlue"></div>
          <p>Kontaktlinser</p>
        </div>

        <div className="service">
          <div className="circle bg-lightPurple"></div>
          <p>Synstrening</p>
        </div>

        <div className="service">
          <div className="circle bg-darkPurple"></div>
          <p>Førerkortattest</p>
        </div>
      </div>
    </section>
  );
}
