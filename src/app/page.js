import Image from "next/image";
import Hero from "./pages/hero/page";
import SkillsSection from "./componants/SkillsSection/SkillsSection";
import ProjectsSection from "./componants/ProjectsSection/ProjectsSection";

export default function Page() {
  return (
    <div style={{ marginTop: "100px" }} >
      <Hero/>
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
}
