import { useContext } from "react";
import { Context } from "../contexts/Context";

export default function Profile() {
  const { t } = useContext(Context);
  return (
    <section
      id="Profile"
      className=" py-[4.5rem] bg-[#F4F4F4] dark:bg-[#2A262B]"
    >
      <div className="w-7/12 mx-auto max-w-[1440px] relative">
        <div className="absolute w-[10.9%] aspect-square rounded-full  border-[21px] border-solid border-[#EA2678]  right-[-18.8%] top-[-25.1%]"></div>

        <h1
          className="text-center text-[#000000] dark:text-[#FFFFFF]"
          id="section-title-small"
        >
          {t("profileTitle")}
        </h1>
        <div className="flex flex-row justify-center  rounded-[12px] text-[#000000] dark:text-[#FFFFFF] ">
          <div
            id="Basic-information"
            className="flex w-[46.5%] max-w-[500px] flex-col ml-7  p-10 gap-5 mt-[2rem] bg-[#FFFFFF] dark:bg-[#525252] shadow-gray"
          >
            <h4 id="basic-info" className="text-[#EA2678] mb-[0.8rem]">
              {t("profileCardHeader")}
            </h4>
            <ul className="flex flex-col gap-5  ">
              <li className="flex flex-row">
                <h5 id="info-heads"> {t("profileCardBirthHead")}</h5>
                <span id="info-value"> {t("profileCardBirthValue")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-heads">{t("profileCardCityHead")}</h5>
                <span id="info-value">{t("profileCardCityValue")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-heads">{t("profileCardEducationHead")}</h5>
                <span id="info-value">{t("profileCardEducationValue")}</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-heads">{t("profileCardRoleHead")}</h5>
                <span id="info-value">{t("profileCardRoleValue")}</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center w-6/12 ml-[1.4rem] p-10 mt-[1.5rem] gap-5">
            <span className="relative">
              <span className="absolute w-[90px] h-[18px] bg-[#82BBFF] top-[1.04rem] left-[-0.7rem] rounded-[4px] dark:bg-[#82BBFF]"></span>{" "}
              <h4 id="about-me-title" className="relative z-10">
                {t("aboutMeTitle")}
              </h4>
            </span>{" "}
            <p id="about-me" className="mb-1">
              {t("aboutMeFirstParag")}
            </p>
            <p id="about-me">{t("aboutMeSecondParag")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
