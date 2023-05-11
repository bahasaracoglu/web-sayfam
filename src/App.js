import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Profile from "./components/Profile";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import { Context } from "./contexts/Context";

function App() {
  const [theme, setTheme] = useState(null);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <div className="App w-max-screen h-[3094px] bg-white ">
        <div className="mx-auto ">
          <Info />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
