import Skills from "../layout/Skills/Skills";
import { Heading } from "../components/Heading/Heading";

export default function SkillsPage() {
  return (
    <div className="page-container">
      <Heading level={1} className="page-title">
        Skills & Technologies
      </Heading>
      <Skills />
    </div>
  );
}
