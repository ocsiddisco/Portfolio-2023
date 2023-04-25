import styles from "@/styles/Home.module.css";
import FixBar from "@/components/FixBar.js";
import Intro from "@/components/Intro.js";
import About from "@/components/About.js";
import Skills from "@/components/Skills.js";
import Projects from "@/components/Projects.js";
import Contact from "@/components/Contact.js";
import Sparkles from "@/components/Sparkles.js";

export default function Home() {
  return (
    <>
      <Sparkles />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
