import Skills from "@/components/Skills/Skills";
import About from "@/components/About/About";
import Header from "@/components/Header/Header";

import SoloProjects from "@/components/SoloProjects/SoloProjects";
import GroupProjects from "@/components/GroupProjects/GroupProjects";

export default function Index() {
  return (
    <>
      <About />
      <Skills />
      <SoloProjects />
      <GroupProjects />
    </>
  );
}
