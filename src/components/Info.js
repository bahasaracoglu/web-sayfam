import gitHub from "../info/github.svg";
import linkedIn from "../info/LinkedIn.svg";
import foto from "../info/foto.svg";
import { useState } from "react";

export default function () {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    console.log("tıklandı");

    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(theme);

  return (
    <header className="App-header flex flex-col">
      <div className="absolute w-16 h-16 rounded-full bg-gray-500"></div>

      <div className="toggle flex self-end my-20 gap-5">
        <span
          onClick={() => changeTheme()}
          className="flex p-1 w-12 rounded-xl bg-[#E92577]"
        >
          <span
            className={
              theme === "light"
                ? `bg-[#FFE86E] p-1 rounded-full w-4 h-4 flex `
                : `bg-[#FFE86E] p-1 rounded-full w-4 h-4 flex ml-6 `
            }
          ></span>
        </span>

        <h4 className="border-solid border-r-2 pr-5">DARK MODE</h4>
        <h4>TÜRKÇE' YE GEÇ</h4>
      </div>
      <section className="info flex flex-row justify-between mb-20">
        <div className="info-text flex flex-col w-3/5 ">
          <div className=" p-2  ">
            <p>
              <h2 className="mb-5">Hi!👋</h2>
            </p>
            <p>
              <h1 id="info-text">
                I’m Baha. I’m a full-stack developer. I can craft solid and
                scalable frontend products. Let’s meet!
              </h1>
            </p>
          </div>
          <div className="mt-9 p-2 flex gap-5">
            <a href="https://www.linkedin.com/in/baha-saraçoğlu/">
              {" "}
              <img src={linkedIn} />
            </a>
            <a href="https://github.com/bahasaracoglu">
              {" "}
              <img src={gitHub} />
            </a>
          </div>
          <div className=" w-11/12 p-2">
            <p>
              <h3>
                Currently Freelancing for UX, UI, & Web Design Project . Invite
                me to join your team -> pratamaiosi@gmail.com
              </h3>
            </p>
          </div>
        </div>

        <img
          className="min-w-400 min-h-200 object-relative "
          src={foto}
          alt=""
        />
      </section>
    </header>
  );
}
