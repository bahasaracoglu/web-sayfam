import jsLogo from "./skills/jsLogo.png";
import figmaLogo from "./skills/figmaLogo.png";
import nodeLogo from "./skills/nodeLogo.png";
import reacLogo from "./skills/reactLogo.png";
import reduxLogo from "./skills/reduxLogo.png";
import vsLogo from "./skills/vsLogo.png";

export default function Skills() {
  return (
    <div className="flex justify-center flex-col items-center bg-[#F5F5F5] my-10">
      <h1>Skills</h1>
      <div className="skills-img-container ">
        <ul className="flex gap-8 justify-center items-center text-center py-10">
          <li>
            <img src={jsLogo} alt="jsLogo" />
            <h3>JAVASCRIPT</h3>
          </li>
          <li>
            <img src={figmaLogo} alt="figmaLogo" />
            <h3>FIGMA</h3>
          </li>
          <li>
            <img src={nodeLogo} alt="nodeLogo" />
            <h3>NODE</h3>
          </li>
          <li>
            <img src={reacLogo} alt="reacTLogo" />
            <h3>REACT</h3>
          </li>
          <li>
            <img src={reduxLogo} alt="reduxLogo" />
            <h3>REDUX</h3>
          </li>
          <li>
            <img src={vsLogo} alt="vsLogo" />
            <h3>VS CODE</h3>
          </li>
        </ul>
      </div>
    </div>
  );
}
