import "./Skills.css";
import { Typography } from "../../components/Typography/Typography";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      {/* Section Title */}
      <Typography size="xl" weight="bold" className="skills-title">
        Skills
      </Typography>

      {/* Description */}
      <Typography muted className="skills-desc">
        A collection of languages, frameworks, and tools I use to build modern,
        scalable, and visually polished full-stack applications.
      </Typography>

      {/* LANGUAGES & FRAMEWORKS */}
      <div className="skills-block">
        <Typography size="lg" weight="medium" className="skills-heading">
          Languages & Frameworks
        </Typography>

        <div className="skills-tags">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Express.js",
            "Ruby on Rails",
            "Python",
            "PHP",
            "PostgreSQL",
            "MongoDB",
          ].map((item, index) => (
            <span key={index} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div className="skills-block">
        <Typography size="lg" weight="medium" className="skills-heading">
          Tools
        </Typography>

        <div className="skills-tags">
          {[
            "Git & GitHub",
            "VSCode",
            "Postman",
            "Docker",
            "Render",
            "Railway",
            "AWS (Beginner)",
            "Figma",
            "Chrome DevTools",
            "Jest",
          ].map((item, index) => (
            <span key={index} className="skill-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
