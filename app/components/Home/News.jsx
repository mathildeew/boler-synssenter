export default function News() {
  return (
    <section className="bg-lightBlue flex flex-col items-center gap-10 py-10">
      <h2 className="text-center">Nytt fra oss</h2>
      <div className="newsGrid grid overflow-auto">
        <div className="px-4 flex flex-col gap-3 snap-center">
          <img
            className="w-96 h-72 object-cover rounded-3xl"
            src="vicko-mozara-m82uh_vamhg-unsplash.jpg"
          />
          <h3>Hvor ofte burde du sjekke synet?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo fugit
            autem ex molestiae consequatur itaque, natus veniam, pariatur odio
            aliquam animi nisi adipisci rem tempore, possimus mollitia totam
            voluptatibus porro.
          </p>
        </div>

        <div className="px-4 snap-center">
          <img
            className="w-96 h-72 object-cover rounded-3xl"
            src="vicko-mozara-m82uh_vamhg-unsplash.jpg"
          />
          <h3>Nummer to?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo fugit
            autem ex molestiae consequatur itaque, natus veniam, pariatur odio
            aliquam animi nisi adipisci rem tempore, possimus mollitia totam
            voluptatibus porro.
          </p>
        </div>
      </div>
      <button className="baseButton">Se alle artikler</button>
    </section>
  );
}
