import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Profile from "./components/Profile";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App w-screen h-[3094px] bg-white ">
      <div className="mx-auto ">
        <Info />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
