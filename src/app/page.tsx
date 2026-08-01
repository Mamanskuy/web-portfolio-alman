import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="mainContent">
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
