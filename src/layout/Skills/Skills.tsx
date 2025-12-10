import "./Skills.css";
import { Typography } from "../../components/Typography/Typography";
import { Card } from "../../components/Card/Card";
import SkillItem from "./SkillItem";

export default function Skills() {
  return (
    <section className="skills-container" id="skills">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-tag">Technical Expertise</span>

        <Typography size="xl" weight="bold" className="section-title">
          Skills & Technologies
        </Typography>

        <Typography size="md" muted className="section-description">
          Proficient in modern web development technologies with a focus on
          creating scalable, maintainable applications. Constantly learning and
          adapting to new tools and frameworks.
        </Typography>
      </div>

      {/* Top 2 Category Cards */}
      <div className="skills-grid">
        {/* LANGUAGES & FRAMEWORKS */}
        <Card className="skill-category">
          <div className="category-header">
            <div className="category-icon icon-languages">💻</div>
            <Typography size="lg" weight="bold" className="category-title">
              Languages & Frameworks
            </Typography>
          </div>

          <div className="skill-items">
            <SkillItem label="JavaScript (ES6+)" />
            <SkillItem label="TypeScript" />
            <SkillItem label="React.js" />
            <SkillItem label="Node.js" />
            <SkillItem label="Express.js" />
            <SkillItem label="Next.js" />
            <SkillItem label="HTML5 & CSS3" />
            <SkillItem label="Python" />
            <SkillItem label="SQL" />
            <SkillItem label="GraphQL" />
            <SkillItem label="Tailwind CSS" />
            <SkillItem label="Redux" />
          </div>
        </Card>

        {/* DEVELOPMENT TOOLS */}
        <Card className="skill-category">
          <div className="category-header">
            <div className="category-icon icon-tools">🔧</div>
            <Typography size="lg" weight="bold" className="category-title">
              Development Tools
            </Typography>
          </div>

          <div className="skill-items">
            <SkillItem label="Git & GitHub" />
            <SkillItem label="Docker" />
            <SkillItem label="VS Code" />
            <SkillItem label="Webpack" />
            <SkillItem label="npm/yarn" />
            <SkillItem label="Jest" />
            <SkillItem label="Postman" />
            <SkillItem label="Figma" />
            <SkillItem label="CI/CD Pipelines" />
            <SkillItem label="Agile/Scrum" />
            <SkillItem label="REST APIs" />
            <SkillItem label="Linux/Unix" />
          </div>
        </Card>
      </div>

      {/* DATABASE & CLOUD SHOWCASE */}
      <Card className="tools-showcase">
        <div className="tools-header">
          <div className="tools-icon">🛠️</div>
          <Typography size="lg" weight="bold" className="tools-title">
            Database & Cloud Technologies
          </Typography>
        </div>

        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">🗄️</div>
            <div className="tool-name">MongoDB</div>
          </div>

          <div className="tool-card">
            <div className="tool-icon">🐘</div>
            <div className="tool-name">PostgreSQL</div>
          </div>

          <div className="tool-card">
            <div className="tool-icon">🔥</div>
            <div className="tool-name">Firebase</div>
          </div>

          <div className="tool-card">
            <div className="tool-icon">☁️</div>
            <div className="tool-name">AWS</div>
          </div>

          <div className="tool-card">
            <div className="tool-icon">⚡</div>
            <div className="tool-name">Vercel</div>
          </div>

          <div className="tool-card">
            <div className="tool-icon">🌐</div>
            <div className="tool-name">Netlify</div>
          </div>

          <div className="tool-card">
            <div className="tool-icon">🔵</div>
            <div className="tool-name">Azure</div>
          </div>

          <div className="tool-card">
            <div className="tool-icon">🔴</div>
            <div className="tool-name">Redis</div>
          </div>
        </div>
      </Card>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat-card">
          <div className="stat-number">15+</div>
          <div className="stat-label">Technologies</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">18+</div>
          <div className="stat-label">Tools Mastered</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">10+</div>
          <div className="stat-label">Projects Built</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">3+</div>
          <div className="stat-label">Years Experience</div>
        </div>
      </div>
    </section>
  );
}
