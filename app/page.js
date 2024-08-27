import dynamic from "next/dynamic";

const Home = dynamic(() => import("./components/Home"), { ssr: false });
const About = dynamic(() => import("./components/About"), { ssr: false });
const Contact = dynamic(() => import("./components/Contact"), { ssr: false });
const Socials = dynamic(() => import("./components/Socials"), { ssr: false });
const Skills = dynamic(() => import("./components/Skills"), { ssr: false });
const Certifications = dynamic(() => import("./components/Certifications"), {ssr: false,});
const Experience = dynamic(() => import("./components/Experience"),{ ssr: false});
const Portfolio = dynamic(() => import("./components/Portfolio"), {ssr: false});
import "./Socials.css";

export default function App() {
  return (
    <main className="w-[100vw] min-h-screen overflow-hidden pt-[5.3%]">
      <Socials />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Portfolio />
      <Contact />
    </main>
  );
}
