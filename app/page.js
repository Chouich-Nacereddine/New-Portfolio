import Image from "next/image";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  return (
    <main className="w-[100vw] min-h-screen overflow-hidden">
      <Home/>
      <About/>
    </main>
  );
}
