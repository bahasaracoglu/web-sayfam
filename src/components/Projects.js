import laptop from "../projects/laptop.png";
import arrowRight from "../projects/arrow-right.svg";
import s11g2 from "../projects/s11g2.png";
import Project from "./Project";
export function Projects() {
  return (
    <section id="Projects">
      <div className="py-11 max-w-[1440px] flex flex-col mx-auto">
        <h1 className="text-center py-8" id="section-title-small">
          Projects
        </h1>
        <div className="flex flex-row justify-center gap-[4.2rem]  ">
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
}
