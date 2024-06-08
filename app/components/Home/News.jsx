// "use client";
import Link from "next/link";
// import { useState } from "react";
import { getProjects } from "../../../sanity/sanity-utils";

export default async function News() {
  // const [hover, setHover] = useState(false);

  const projects = await getProjects();
  console.log(projects);

  return (
    <section className="bg-lightBlue w-full flex flex-col items-center justify-center gap-10 pl-4 py-16 md:px-10 md:py-28 ">
      <h2 className="text-center">Nytt fra oss</h2>
      <div className="max-w-[1460px] grid gap-6 grid-cols-news overflow-auto scroll-snap-mandatory  gridExpand:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {projects.map((project) => (
          <Link key={project._id} href="/">
            <div className="flex flex-col gap-3 snap-center">
              <div className="overflow-hidden rounded-3xl">
                <img className={`w-96 h-72 object-cover transition-all ease-in-out duration-300}`} src={project.image} alt={project.name} />
              </div>
              <h3>{project.name}</h3>
              <p></p>
            </div>
          </Link>
        ))}
      </div>

      {/* 
      <div className="max-w-[1460px] grid gap-6 grid-cols-news overflow-auto scroll-snap-mandatory  gridExpand:grid-cols-2 md:gap-6 lg:grid-cols-4">
        <Link href="/" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div className="flex flex-col gap-3 snap-center">
            <div className="overflow-hidden rounded-3xl">
              <img className={`w-96 h-72 object-cover transition-all ease-in-out duration-300 ${hover && "scale-110"}`} src="vicko-mozara-m82uh_vamhg-unsplash.jpg" />
            </div>
            <h3>Hvor ofte burde du sjekke synet?</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo fugit autem ex molestiae consequatur itaque, natus veniam, pariatur odio aliquam animi nisi adipisci rem tempore, possimus mollitia totam voluptatibus porro.</p>
          </div>
        </Link>

        
      </div>
      <button className="baseButton">Se alle artikler</button> */}
    </section>
  );
}
