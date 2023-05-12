import Project from "./Project";
export function Projects() {
  const projectsData = [
    {
      titleEn: "FlowFeed",
      titleTr: "FlowFeed",
      bodyEn:
        "The social media application that we developed with teamwork is a platform similar to Twitter. It allows users to share text messages and images.",
      bodyTr:
        "Takım çalışmasıyla geliştirdiğimiz sosyal medya uygulaması, Twitter'a benzer bir platformdur. Kullanıcıların kısa mesajlar ve görseller paylaşmasına olanak tanır.",
      skillsUsed: ["react", "axios", "tailwind", "router"],
      gitHubLink: "https://github.com/bahasaracoglu/Flowfeed",
      vercelLink: "https://flowfeed-hbktgo9x0-bahasaracoglu.vercel.app/",
      projectImageURL:
        "https://i.ibb.co/3YV4pQG/Ekran-g-r-nt-s-2023-05-12-093551.png",
      lightBG: "#DDEEFE",
      darkBG: "#2D3235",
    },
  ];

  return (
    <section id="Projects">
      <div className="py-[3.2rem] max-w-[1440px] flex flex-col mx-auto">
        <h1
          className="text-center py-8 dark:text-[#FFFFFF]"
          id="section-title-small"
        >
          Projects
        </h1>
        <div className="flex flex-row justify-center gap-[4.2rem]  ">
          {projectsData.map((project) => {
            return <Project data={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
