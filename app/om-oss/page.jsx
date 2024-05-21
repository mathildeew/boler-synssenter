export default function About() {
  return (
    <>
      <h1>Om oss</h1>
      <div className="grid gap-8 sm:grid-cols-2 w-full px-4">
        <section className="bg-lightBlue flex flex-col items-center py-8 rounded-xl">
          <h2>Åpningstider</h2>
          <div className="flex flex-col gap-3">
            <div>
              <p>Mandag - fredag:</p>
              <p>10.00 - 19.00</p>
            </div>
            <div>
              <p>Lørdag:</p>
              <p>10.00 - 18.00</p>
            </div>
          </div>
        </section>

        <section className="bg-lightBlue flex flex-col items-center py-8 rounded-xl">
          <h2>Kontakt oss</h2>
          <div className="flex flex-col gap-3">
            <div>
              <p>22 26 22 68</p>
              <a href="mailto:post@bolersynssenter.no">
                post@bolersynssenter.no
              </a>
            </div>
            <div>
              <p>Bøler Synssenter</p>
              <p>Utmarkveien 1</p>
              <p>0689 Oslo</p>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full">
        <h2>Her finner du oss</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.977325547998!2d10.842735977093179!3d59.882725774887035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f67a3530de5%3A0x102585b627075bb2!2sC)Optikk!5e0!3m2!1sno!2sno!4v1716321840745!5m2!1sno!2sno"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}
