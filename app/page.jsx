import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import "./Socials.css";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
export default function App() {
  return (
    <main className="w-[100vw] min-h-screen overflow-hidden pt-[5.3%]">
      <Socials/>
      <Home />
      <About />
      <Skills/>
      <Certifications/>
      <Contact />
    </main>
  );
}
