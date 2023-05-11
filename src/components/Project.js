import laptop from "../projects/laptop.png";
import arrowRight from "../projects/arrow-right.svg";
import arrowRightDark from "../projects/arrow-right-dark.svg";
import s11g2 from "../projects/s11g2.png";
import { Context } from "../contexts/Context";
import { useContext } from "react";
export default function Project() {
  const { theme } = useContext(Context);
  return (
    <div
      id="Project-card "
      className="	box-border max-w-[500px] max-h-[668px] flex flex-col p-10 bg-[#DDEEFE] rounded-[12px] dark:bg-[#2D3235] text-[#000000] dark:text-[#FFFFFF]"
    >
      <h3 id="projects-title" className="mb-4">
        Title
      </h3>
      <p id="projects-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
        odit laborum aliquam voluptatum nisi mollitia.
      </p>

      <ul className="flex flex-row flex-wrap w-80 gap-3 my-5">
        <li id="used-skills">react</li>
        <li id="used-skills">vercel</li>
        <li id="used-skills">axios</li>
        <li id="used-skills">router</li>
      </ul>
      <div id="project-links" className="flex justify-between mt-4">
        <a href="#">View on GitHub</a>
        <a href="#" className="flex">
          Go to app
          <img
            src={theme === "light" ? arrowRight : arrowRightDark}
            alt="arrowRight"
          />
        </a>
      </div>
      <div
        id="Project-Image-Cont"
        className="flex relative h-[500px] items-center justify-center"
      >
        <img
          src={s11g2}
          className=" absolute top-[111px] max-w-[380px] h-[220px] object-cover "
        />
        <img src={laptop} className=" absolute top-[95px] max-w-[500px] " />
      </div>
    </div>
  );
}
