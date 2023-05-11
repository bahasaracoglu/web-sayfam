import gitHub from "../info/github.svg";
import gitHubdark from "../info/githubdark.svg";
import linkedIn from "../info/LinkedIn.svg";
import linkedInDark from "../info/LinkedIndark.svg";
import foto from "../info/foto.jpeg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";

export default function () {
  const { theme, setTheme } = useContext(Context);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  console.log(theme);
  return (
    <section className="bg-[#F4F4F4]  dark:bg-[#2A262B] }">
      <header className="App-header flex flex-col w-7/12 mx-auto max-w-[1440px] ">
        <div className="absolute w-16 h-16 rounded-full bg-gray-500"></div>

        <div
          id="toggle"
          className="flex self-end mt-[4.5rem] mb-[3.5rem] gap-5 justify-center items-center"
        >
          <span
            onClick={themeToggle}
            className="flex p-1 w-12 rounded-xl bg-[#E92577] dark:bg-[#000000]"
          >
            <span
              className={
                theme === "light"
                  ? `bg-[#FFE86E] p-1 rounded-full w-4 h-4 flex ml-6 relative`
                  : `bg-[#FFE86E] p-1 rounded-full w-4 h-4 flex relative`
              }
            >
              {theme === "dark" && (
                <span className=" absolute flex p-1 w-[13px] h-[13px] rounded-xl bg-[#000000] bottom-[0.1rem] ml-[2px]">
                  {" "}
                </span>
              )}
            </span>
          </span>

          <h4 className="dark:text-[#D9D9D9] text-[#777777]">DARK MODE</h4>
          <span>|</span>
          <h4>
            <span className="text-[#E92577]">TÜRKÇE</span>'YE GEÇ
          </h4>
        </div>
        <section className="info flex flex-row justify-between mb-20">
          <div className="info-text flex flex-col w-3/5">
            <div className=" px-[0.6rem]  ">
              <p
                id="info-text-hi"
                className="mb-5 text-[#000000] dark:text-[#FFFFFF]"
              >
                Hi!👋
              </p>
              <p>
                <h1
                  id="info-text"
                  className="text-[#0a0a14]  dark:text-[#FFFFFF]"
                >
                  I’m Baha. I’m a full-stack developer. I can craft solid and
                  scalable frontend products. Let’s meet!
                </h1>
              </p>
            </div>
            <div className=" mt-14 mb-[1rem] px-[0.7rem] flex gap-5">
              <a href="https://www.linkedin.com/in/baha-saraçoğlu/">
                <img src={theme === "light" ? linkedIn : linkedInDark} />
              </a>
              <a href="https://github.com/bahasaracoglu">
                <img src={theme === "light" ? gitHub : gitHubdark} />
              </a>
            </div>
            <div
              id="info-text-footer"
              className=" w-10/12  px-[0.5rem] pt-2 pb-[0.7rem] "
            >
              <p className="text-[#000000] dark:text-[#FFFFFF]">
                Currently
                <span className="text-[#AF0C48] dark:text-[#EA2678]">
                  {" "}
                  Freelancing{" "}
                </span>
                for
                <span className="text-[#AF0C48] dark:text-[#EA2678] tracking-wider">
                  {" "}
                  UX, UI, & Web Design{" "}
                </span>
                Project . Invite me to join your team {"->"}
                <span className="text-[#AF0C48] underline tracking-widest dark:text-[#EA2678]">
                  pratamaiosi@gmail.com
                </span>
              </p>
            </div>
          </div>

          <img
            className="mt-[3.4rem] mr-2 object-cover w-[341px] h-[341px]  shadow-red rounded-[22px] "
            src={foto}
            alt=""
          />
        </section>
      </header>
    </section>
  );
}
