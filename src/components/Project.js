import laptop from "../projects/laptop.png";
import arrowRight from "../projects/arrow-right.svg";
import arrowRightDark from "../projects/arrow-right-dark.svg";
import s11g2 from "../projects/s11g2.png";
import { Context } from "../contexts/Context";
import { useContext } from "react";
export default function Project(props) {
  const { theme, setTheme, t, i18n, handleChangeLang } = useContext(Context);
  const lang = i18n.language;

  const { data, index } = props;
  console.log(index);
  return (
    <div
      id="Project-card "
      className={
        index % 2 === 0
          ? `box-border max-w-[500px] max-h-[668px] flex flex-col p-10 bg-[#DDEEFE] rounded-[12px] dark:bg-[#2D3235] text-[#000000] dark:text-[#FFFFFF]`
          : `box-border max-w-[500px] max-h-[668px] flex flex-col p-10 bg-[#D9F6F1] rounded-[12px] dark:bg-[#495351] text-[#000000] dark:text-[#FFFFFF]`
      }
    >
      <h3 id="projects-title" className="mb-4">
        {lang === "tr" ? data.titleTr : data.titleEn}
      </h3>
      <p id="projects-body">{lang === "tr" ? data.bodyTr : data.bodyEn}</p>

      <ul className="flex flex-row flex-wrap w-80 gap-3 my-5">
        {data.skillsUsed.map((skill, i) => {
          return (
            <li key={i} id="used-skills">
              {skill}
            </li>
          );
        })}
      </ul>
      <div id="project-links" className="flex justify-between mt-4">
        <a href={data.gitHubLink}>{t("projectViewGitHub")}</a>
        <a href={data.vercelLink} className="flex">
          {t("projectVercel")}
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
          src={data.projectImageURL}
          className=" absolute top-[111px] max-w-[380px] h-[220px] object-cover "
        />
        <img src={laptop} className=" absolute top-[95px] max-w-[500px] " />
      </div>
    </div>
  );
}
