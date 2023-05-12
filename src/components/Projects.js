import { useContext } from "react";
import Project from "./Project";
import { Context } from "../contexts/Context";
export function Projects() {
  const { theme, setTheme, t, i18n, handleChangeLang } = useContext(Context);
  const projectsData = [
    {
      titleEn: "FlowFeed",
      titleTr: "FlowFeed",
      bodyEn:
        "The social media application that we developed with teamwork is a platform similar to Twitter. It allows users to share text messages and images.",
      bodyTr:
        "Takım çalışmasıyla geliştirdiğimiz bir sosyal medya platformudur. Kullanıcıların kısa mesajlar ve görseller paylaşmasına olanak tanır.",
      skillsUsed: ["react", "axios", "tailwind", "router", "date-fns"],
      gitHubLink: "https://github.com/bahasaracoglu/Flowfeed",
      vercelLink: "https://flowfeed-hbktgo9x0-bahasaracoglu.vercel.app/",
      projectImageURL:
        "https://i.ibb.co/3YV4pQG/Ekran-g-r-nt-s-2023-05-12-093551.png",
      lightBG: "#DDEEFE",
      darkBG: "#2D3235",
    },

    {
      titleEn: "Gratitude Diary",
      titleTr: "Minnet Günlüğü",
      bodyEn:
        "In this journal you can add and delete new notes in this diary, previously added notes are also listed with their date.",
      bodyTr:
        "Bu günlük içerisinde yeni notlar ekleyip silebilirsiniz, daha önce eklenmiş notlar da tarihi ile birlikte listelenmektedir.",
      skillsUsed: ["react", "redux", "tailwind", "axios", "router", "date-fns"],
      gitHubLink: "https://github.com/bahasaracoglu/fsweb-s10-challenge",
      vercelLink: "https://fsweb-s10-challenge-baha.vercel.app/",
      projectImageURL:
        "https://i.ibb.co/DK0ykV7/Ekran-g-r-nt-s-2023-05-12-095027.png",
      lightBG: "#D9F6F1",
      darkBG: "#495351",
    },
  ];

  return (
    <section id="Projects">
      <div className="py-[3.2rem] max-w-[1440px] flex flex-col mx-auto">
        <h1
          className="text-center py-8 dark:text-[#FFFFFF]"
          id="section-title-small"
        >
          {t("projectsTitle")}
        </h1>
        <div className="flex flex-row justify-center gap-[4.2rem]  ">
          {projectsData.map((project, i) => {
            return <Project key={i} data={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
