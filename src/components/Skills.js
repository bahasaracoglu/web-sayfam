import jsLogo from "../skills/jsLogo.png";
import figmaLogo from "../skills/figmaLogo.png";
import nodeLogo from "../skills/nodeLogo.png";
import reacLogo from "../skills/reactLogo.png";
import reduxLogo from "../skills/reduxLogo.png";
import vsLogo from "../skills/vsLogo.png";

export default function Skills() {
  return (
    <div className="flex justify-center flex-col items-center my-[5.1rem] dark:bg-[#484148] relative">
      <div className="absolute w-[181px] h-[49px] rounded-[29.5px] bg-[#525252] dark:bg-[#525252]  left-[8.5%] bottom-[-11.1%]"></div>
      <h1 id="section-title" className="text-[#0a0a14] dark:text-[#F4F4F4]">
        Skills
      </h1>
      <div className="skills-img-container mt-4 my-[0.44rem] ">
        <ul className="flex gap-[2.2rem] justify-center items-center text-center py-10">
          <li>
            <img className="inline-block" src={jsLogo} alt="jsLogo" />
            <h3 id="skill-title" className="text-[#777777] dark:text-[#D9D9D9]">
              JAVASCRIPT
            </h3>
          </li>
          <li>
            <img src={reacLogo} alt="reacTLogo" />
            <h3 id="skill-title" className="text-[#777777] dark:text-[#D9D9D9]">
              REACT
            </h3>
          </li>
          <li>
            <img src={reduxLogo} alt="reduxLogo" />
            <h3 id="skill-title" className="text-[#777777] dark:text-[#D9D9D9]">
              REDUX
            </h3>
          </li>
          <li>
            <img src={nodeLogo} alt="nodeLogo" />
            <h3 id="skill-title" className="text-[#777777] dark:text-[#D9D9D9]">
              NODE
            </h3>
          </li>
          <li>
            <img src={vsLogo} alt="vsLogo" />
            <h3 id="skill-title" className="text-[#777777] dark:text-[#D9D9D9]">
              VS CODE
            </h3>
          </li>
          <li>
            <img src={figmaLogo} alt="figmaLogo" />
            <h3 id="skill-title" className="text-[#777777] dark:text-[#D9D9D9]">
              FIGMA
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
